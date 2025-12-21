const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("MMFValueToken", function () {
  let mmfToken;
  let admin, assetManager, navUpdater, userA, userB, userC;
  
  const INITIAL_NAV = 100000000; // 1.00000000 (10^8)
  const LOCKUP_PERIOD = 30 * 24 * 60 * 60; // 30 days in seconds
  const NAV_PRECISION = 100000000; // 10^8

  beforeEach(async function () {
    [admin, assetManager, navUpdater, userA, userB, userC] = await ethers.getSigners();

    const MMFValueToken = await ethers.getContractFactory("MMFValueToken");
    mmfToken = await MMFValueToken.deploy(
      admin.address,
      assetManager.address,
      navUpdater.address,
      INITIAL_NAV,
      LOCKUP_PERIOD
    );
  });

  describe("Deployment", function () {
    it("Should set correct initial values", async function () {
      expect(await mmfToken.name()).to.equal("MMF Value Token");
      expect(await mmfToken.symbol()).to.equal("S-MMF");
      expect(await mmfToken.decimals()).to.equal(18);
      expect(await mmfToken.currentNAV()).to.equal(INITIAL_NAV);
      expect(await mmfToken.defaultLockupPeriod()).to.equal(LOCKUP_PERIOD);
    });

    it("Should grant correct roles", async function () {
      const ASSET_MANAGER_ROLE = ethers.keccak256(
        ethers.toUtf8Bytes("ASSET_MANAGER_ROLE")
      );
      const NAV_UPDATER_ROLE = ethers.keccak256(
        ethers.toUtf8Bytes("NAV_UPDATER_ROLE")
      );

      expect(
        await mmfToken.hasRole(ASSET_MANAGER_ROLE, assetManager.address)
      ).to.be.true;
      expect(
        await mmfToken.hasRole(NAV_UPDATER_ROLE, navUpdater.address)
      ).to.be.true;
    });
  });

  describe("Purchase (매입)", function () {
    it("Should purchase tokens with DT (1:1)", async function () {
      const amount = ethers.parseEther("1000000"); // 100만

      await expect(
        mmfToken.connect(assetManager).purchaseWithDT(userA.address, amount)
      )
        .to.emit(mmfToken, "TokensPurchased");

      expect(await mmfToken.balanceOf(userA.address)).to.equal(amount);
      expect(await mmfToken.sharesOf(userA.address)).to.equal(amount);
    });

    it("Should apply lockup period", async function () {
      const amount = ethers.parseEther("1000000");

      await mmfToken.connect(assetManager).purchaseWithDT(userA.address, amount);

      const lockupTime = await mmfToken.lockupUntil(userA.address);
      const currentTime = await time.latest();
      
      expect(lockupTime).to.be.closeTo(
        currentTime + LOCKUP_PERIOD,
        5 // 5초 오차 허용
      );
    });

    it("Should revert if not asset manager", async function () {
      const amount = ethers.parseEther("1000000");

      await expect(
        mmfToken.connect(userA).purchaseWithDT(userA.address, amount)
      ).to.be.revertedWith("Caller is not asset manager");
    });

    it("Should revert if amount is zero", async function () {
      await expect(
        mmfToken.connect(assetManager).purchaseWithDT(userA.address, 0)
      ).to.be.revertedWith("Amount must be positive");
    });

    it("Should create pending purchase record", async function () {
      const amount = ethers.parseEther("1000000");

      await mmfToken.connect(assetManager).purchaseWithDT(userA.address, amount);

      expect(await mmfToken.getPendingPurchaseCount(userA.address)).to.equal(1);

      const pending = await mmfToken.getPendingPurchase(userA.address, 0);
      expect(pending.dtAmount).to.equal(amount);
      expect(pending.navAtPurchase).to.equal(INITIAL_NAV);
      expect(pending.processed).to.be.false;
    });
  });

  describe("Redemption (환매)", function () {
    beforeEach(async function () {
      const amount = ethers.parseEther("1000000");
      await mmfToken.connect(assetManager).purchaseWithDT(userA.address, amount);
    });

    it("Should redeem tokens after lockup", async function () {
      // 락업 기간 경과
      await time.increase(LOCKUP_PERIOD + 1);

      const redeemAmount = ethers.parseEther("500000");

      await expect(mmfToken.connect(userA).redeemToDT(redeemAmount))
        .to.emit(mmfToken, "TokensRedeemed");

      expect(await mmfToken.balanceOf(userA.address)).to.equal(
        ethers.parseEther("500000")
      );
    });

    it("Should revert if tokens are locked", async function () {
      const redeemAmount = ethers.parseEther("100000");

      await expect(
        mmfToken.connect(userA).redeemToDT(redeemAmount)
      ).to.be.revertedWith("Tokens are locked");
    });

    it("Should revert if insufficient balance", async function () {
      await time.increase(LOCKUP_PERIOD + 1);

      const redeemAmount = ethers.parseEther("2000000");

      await expect(
        mmfToken.connect(userA).redeemToDT(redeemAmount)
      ).to.be.revertedWith("Insufficient balance");
    });

    it("Should redeem all tokens", async function () {
      await time.increase(LOCKUP_PERIOD + 1);

      const balance = await mmfToken.balanceOf(userA.address);

      await mmfToken.connect(userA).redeemAll();

      expect(await mmfToken.balanceOf(userA.address)).to.equal(0);
      expect(await mmfToken.sharesOf(userA.address)).to.equal(0);
    });
  });

  describe("NAV Update & Rebase", function () {
    beforeEach(async function () {
      // User A: 1,000,000 토큰
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );

      // User B: 500,000 토큰
      await mmfToken.connect(assetManager).purchaseWithDT(
        userB.address,
        ethers.parseEther("500000")
      );
    });

    it("Should update NAV and trigger rebase", async function () {
      const newNAV = 100050000; // 1.00050000 (0.05% 증가)

      await expect(
        mmfToken.connect(navUpdater).updateNAVAndRebase(newNAV)
      )
        .to.emit(mmfToken, "NAVUpdated")
        .and.to.emit(mmfToken, "Rebased");

      expect(await mmfToken.currentNAV()).to.equal(newNAV);
    });

    it("Should increase balances proportionally on positive rebase", async function () {
      // NAV 0.05% 증가
      await mmfToken.connect(navUpdater).updateNAVAndRebase(100050000);

      // Share는 변동 없음
      expect(await mmfToken.sharesOf(userA.address)).to.equal(
        ethers.parseEther("1000000")
      );
      expect(await mmfToken.sharesOf(userB.address)).to.equal(
        ethers.parseEther("500000")
      );
    });

    it("Should revert if not NAV updater", async function () {
      await expect(
        mmfToken.connect(userA).updateNAVAndRebase(100050000)
      ).to.be.revertedWith("Caller is not NAV updater");
    });

    it("Should revert if NAV is zero", async function () {
      await expect(
        mmfToken.connect(navUpdater).updateNAVAndRebase(0)
      ).to.be.revertedWith("NAV must be positive");
    });

    it("Should revert if NAV unchanged", async function () {
      await expect(
        mmfToken.connect(navUpdater).updateNAVAndRebase(INITIAL_NAV)
      ).to.be.revertedWith("NAV unchanged");
    });
  });

  describe("Token Transfer", function () {
    beforeEach(async function () {
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );
    });

    it("Should transfer tokens after lockup", async function () {
      await time.increase(LOCKUP_PERIOD + 1);

      const transferAmount = ethers.parseEther("100000");

      await expect(
        mmfToken.connect(userA).transfer(userB.address, transferAmount)
      )
        .to.emit(mmfToken, "Transfer")
        .withArgs(userA.address, userB.address, transferAmount);

      expect(await mmfToken.balanceOf(userA.address)).to.equal(
        ethers.parseEther("900000")
      );
      expect(await mmfToken.balanceOf(userB.address)).to.equal(
        transferAmount
      );
    });

    it("Should revert transfer during lockup", async function () {
      const transferAmount = ethers.parseEther("100000");

      await expect(
        mmfToken.connect(userA).transfer(userB.address, transferAmount)
      ).to.be.revertedWith("Tokens are locked");
    });

    it("Should transfer principal proportionally", async function () {
      // NAV 증가 후 전송 테스트
      await mmfToken.connect(navUpdater).updateNAVAndRebase(105000000); // 1.05 (5% 증가)
      await time.increase(LOCKUP_PERIOD + 1);

      const principalBefore = await mmfToken.principalOf(userA.address);
      const balanceBefore = await mmfToken.balanceOf(userA.address);

      console.log("\n전송 전:");
      console.log(`  UserA 원금: ${ethers.formatEther(principalBefore)}`);
      console.log(`  UserA 잔액: ${ethers.formatEther(balanceBefore)}`);

      // 50% 전송 (balance 기준)
      const transferAmount = ethers.parseEther("525000"); // 1,050,000의 50%
      await mmfToken.connect(userA).transfer(userB.address, transferAmount);

      const principalAfterA = await mmfToken.principalOf(userA.address);
      const principalB = await mmfToken.principalOf(userB.address);
      const balanceAfterA = await mmfToken.balanceOf(userA.address);
      const balanceB = await mmfToken.balanceOf(userB.address);

      console.log("\n전송 후:");
      console.log(`  UserA 원금: ${ethers.formatEther(principalAfterA)}`);
      console.log(`  UserA 잔액: ${ethers.formatEther(balanceAfterA)}`);
      console.log(`  UserB 원금: ${ethers.formatEther(principalB)}`);
      console.log(`  UserB 잔액: ${ethers.formatEther(balanceB)}\n`);

      // 원금도 50% 전송되어야 함
      expect(principalAfterA).to.be.closeTo(
        ethers.parseEther("500000"),
        ethers.parseEther("1")
      );
      expect(principalB).to.be.closeTo(
        ethers.parseEther("500000"),
        ethers.parseEther("1")
      );

      // 잔액 검증
      expect(balanceAfterA).to.be.closeTo(
        ethers.parseEther("525000"),
        ethers.parseEther("1")
      );
      expect(balanceB).to.be.closeTo(
        ethers.parseEther("525000"),
        ethers.parseEther("1")
      );
    });
  });

  describe("Approve & TransferFrom", function () {
    beforeEach(async function () {
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );
      await time.increase(LOCKUP_PERIOD + 1);
    });

    it("Should approve and transferFrom", async function () {
      const approveAmount = ethers.parseEther("100000");
      const transferAmount = ethers.parseEther("50000");

      // Approve
      await mmfToken.connect(userA).approve(userB.address, approveAmount);
      expect(
        await mmfToken.allowance(userA.address, userB.address)
      ).to.equal(approveAmount);

      // TransferFrom
      await mmfToken
        .connect(userB)
        .transferFrom(userA.address, userC.address, transferAmount);

      expect(await mmfToken.balanceOf(userC.address)).to.equal(transferAmount);
      expect(
        await mmfToken.allowance(userA.address, userB.address)
      ).to.equal(approveAmount - transferAmount);
    });

    it("Should revert if insufficient allowance", async function () {
      const approveAmount = ethers.parseEther("100000");
      const transferAmount = ethers.parseEther("150000");

      await mmfToken.connect(userA).approve(userB.address, approveAmount);

      await expect(
        mmfToken
          .connect(userB)
          .transferFrom(userA.address, userC.address, transferAmount)
      ).to.be.revertedWith("Insufficient allowance");
    });
  });

  describe("Multiple Users & Rebase", function () {
    it("Should distribute rebase gains proportionally", async function () {
      // Initial purchases
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );
      await mmfToken.connect(assetManager).purchaseWithDT(
        userB.address,
        ethers.parseEther("2000000")
      );
      await mmfToken.connect(assetManager).purchaseWithDT(
        userC.address,
        ethers.parseEther("500000")
      );

      const initialTotal = ethers.parseEther("3500000");
      expect(await mmfToken.totalSupply()).to.equal(initialTotal);

      // NAV 증가: 1.00000000 → 1.00100000 (+0.1%)
      await mmfToken.connect(navUpdater).updateNAVAndRebase(100100000);

      // Share 비율 확인
      const totalShares = await mmfToken.totalSupply();
      const shareA = await mmfToken.sharesOf(userA.address);
      const shareB = await mmfToken.sharesOf(userB.address);
      const shareC = await mmfToken.sharesOf(userC.address);

      // 비율 유지 확인 (약 28.57%, 57.14%, 14.29%)
      expect(shareA * 10000n / totalShares).to.be.closeTo(2857, 10);
      expect(shareB * 10000n / totalShares).to.be.closeTo(5714, 10);
      expect(shareC * 10000n / totalShares).to.be.closeTo(1429, 10);
    });
  });

  describe("Admin Functions", function () {
    it("Should set DT token address", async function () {
      const dtAddress = userA.address; // 테스트용

      await mmfToken.connect(admin).setDTTokenAddress(dtAddress);
      expect(await mmfToken.dtTokenAddress()).to.equal(dtAddress);
    });

    it("Should set default lockup period", async function () {
      const newLockup = 60 * 24 * 60 * 60; // 60일

      await mmfToken.connect(admin).setDefaultLockupPeriod(newLockup);
      expect(await mmfToken.defaultLockupPeriod()).to.equal(newLockup);
    });

    it("Should pause and unpause", async function () {
      await mmfToken.connect(admin).pause();
      expect(await mmfToken.paused()).to.be.true;

      await mmfToken.connect(admin).unpause();
      expect(await mmfToken.paused()).to.be.false;
    });

    it("Should revert operations when paused", async function () {
      await mmfToken.connect(admin).pause();

      await expect(
        mmfToken.connect(assetManager).purchaseWithDT(
          userA.address,
          ethers.parseEther("1000000")
        )
      ).to.be.revertedWithCustomError(mmfToken, "EnforcedPause");
    });
  });

  describe("View Functions", function () {
    beforeEach(async function () {
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );
    });

    it("Should get NAV precision", async function () {
      const precision = await mmfToken.getNAVPrecision();
      expect(precision).to.equal(NAV_PRECISION);
      expect(precision).to.equal(100000000); // 10^8

      console.log(`\n  NAV_PRECISION: ${precision.toString()} (10^8)`);
    });

    it("Should get NAV in decimal format", async function () {
      const [integer, fraction] = await mmfToken.getNAVDecimal();
      expect(integer).to.equal(1);
      expect(fraction).to.equal(0);
    });

    it("Should get lockup time remaining", async function () {
      const remaining = await mmfToken.getLockupTimeRemaining(userA.address);
      expect(remaining).to.be.closeTo(LOCKUP_PERIOD, 5);

      // 시간 경과
      await time.increase(LOCKUP_PERIOD + 1);
      
      const remainingAfter = await mmfToken.getLockupTimeRemaining(userA.address);
      expect(remainingAfter).to.equal(0);
    });

    it("Should get pending purchase count", async function () {
      expect(await mmfToken.getPendingPurchaseCount(userA.address)).to.equal(1);

      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("500000")
      );

      expect(await mmfToken.getPendingPurchaseCount(userA.address)).to.equal(2);
    });
  });

  describe("T+1 Settlement", function () {
    it("Should process pending purchase after T+1", async function () {
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );

      // T+1 전에는 실패
      await expect(
        mmfToken.connect(assetManager).processPendingPurchase(userA.address, 0)
      ).to.be.revertedWith("T+1 not reached");

      // 1일 경과
      await time.increase(24 * 60 * 60 + 1);

      // T+1 후에는 성공
      await expect(
        mmfToken.connect(assetManager).processPendingPurchase(userA.address, 0)
      ).to.emit(mmfToken, "PurchaseProcessed");

      const pending = await mmfToken.getPendingPurchase(userA.address, 0);
      expect(pending.processed).to.be.true;
    });

    it("Should not process already processed purchase", async function () {
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );

      await time.increase(24 * 60 * 60 + 1);

      await mmfToken.connect(assetManager).processPendingPurchase(userA.address, 0);

      await expect(
        mmfToken.connect(assetManager).processPendingPurchase(userA.address, 0)
      ).to.be.revertedWith("Already processed");
    });
  });

  describe("Share-Based Rebase (NAV Reflection)", function () {
    beforeEach(async function () {
      // User A: 1,000,000 DT 투자
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );

      // User B: 500,000 DT 투자
      await mmfToken.connect(assetManager).purchaseWithDT(
        userB.address,
        ethers.parseEther("500000")
      );
    });

    it("Should maintain balance equal to shares with initial NAV", async function () {
      // 초기 NAV = 100000000 (1.00000000)
      const balanceA = await mmfToken.balanceOf(userA.address);
      const sharesA = await mmfToken.sharesOf(userA.address);

      // NAV가 1.00000000이므로 balance = shares
      expect(balanceA).to.equal(sharesA);
      expect(balanceA).to.equal(ethers.parseEther("1000000"));
    });

    it("Should automatically increase balance after NAV increase", async function () {
      // NAV 증가: 1.00000000 → 1.00100000 (+0.1%)
      await mmfToken.connect(navUpdater).updateNAVAndRebase(100100000);

      const balanceA = await mmfToken.balanceOf(userA.address);
      const balanceB = await mmfToken.balanceOf(userB.address);
      const sharesA = await mmfToken.sharesOf(userA.address);
      const sharesB = await mmfToken.sharesOf(userB.address);

      // Share는 변동 없음
      expect(sharesA).to.equal(ethers.parseEther("1000000"));
      expect(sharesB).to.equal(ethers.parseEther("500000"));

      // Balance는 NAV 비율만큼 증가
      // 1,000,000 * 100100000 / 100000000 = 1,001,000
      expect(balanceA).to.equal(ethers.parseEther("1001000"));
      // 500,000 * 100100000 / 100000000 = 500,500
      expect(balanceB).to.equal(ethers.parseEther("500500"));
    });

    it("Should automatically decrease balance after NAV decrease", async function () {
      // NAV 감소: 1.00000000 → 0.99500000 (-0.5%)
      await mmfToken.connect(navUpdater).updateNAVAndRebase(99500000);

      const balanceA = await mmfToken.balanceOf(userA.address);
      const sharesA = await mmfToken.sharesOf(userA.address);

      // Share는 변동 없음
      expect(sharesA).to.equal(ethers.parseEther("1000000"));

      // Balance는 NAV 비율만큼 감소
      // 1,000,000 * 99500000 / 100000000 = 995,000
      expect(balanceA).to.equal(ethers.parseEther("995000"));
    });

    it("Should reflect NAV in totalSupply", async function () {
      // 초기 총 supply: 1,500,000
      let totalSupply = await mmfToken.totalSupply();
      expect(totalSupply).to.equal(ethers.parseEther("1500000"));

      // NAV 증가: 1.00000000 → 1.00500000 (+0.5%)
      await mmfToken.connect(navUpdater).updateNAVAndRebase(100500000);

      totalSupply = await mmfToken.totalSupply();
      // 1,500,000 * 100500000 / 100000000 = 1,507,500
      expect(totalSupply).to.equal(ethers.parseEther("1507500"));
    });

    it("Should purchase with correct shares when NAV changes", async function () {
      // NAV 증가: 1.00000000 → 1.01000000 (+1%)
      await mmfToken.connect(navUpdater).updateNAVAndRebase(101000000);

      // User C: 100 DT로 구매
      await mmfToken.connect(assetManager).purchaseWithDT(
        userC.address,
        ethers.parseEther("100")
      );

      const balanceC = await mmfToken.balanceOf(userC.address);
      const sharesC = await mmfToken.sharesOf(userC.address);

      // Shares는 100 * 100000000 / 101000000 = 99.00990099... (정수 나눗셈으로 버림)
      const expectedShares = (ethers.parseEther("100") * 100000000n) / 101000000n;
      expect(sharesC).to.equal(expectedShares);

      // Balance는 shares * 101000000 / 100000000로 계산됨 (약간의 오차 발생 가능)
      // 반올림 오차로 인해 100보다 약간 작을 수 있음
      expect(balanceC).to.be.closeTo(
        ethers.parseEther("100"),
        ethers.parseEther("0.01") // 0.01 ether 오차 허용
      );
    });

    it("Should handle redemption correctly with NAV increase", async function () {
      // NAV 증가: 1.00000000 → 1.01000000 (+1%)
      await mmfToken.connect(navUpdater).updateNAVAndRebase(101000000);

      // 락업 기간 경과
      await time.increase(30 * 24 * 60 * 60 + 1);

      // Balance 확인: 1,000,000 * 101000000 / 100000000 = 1,010,000
      const balanceBefore = await mmfToken.balanceOf(userA.address);
      expect(balanceBefore).to.equal(ethers.parseEther("1010000"));

      // 500,000 토큰 환매
      await mmfToken.connect(userA).redeemToDT(ethers.parseEther("500000"));

      const balanceAfter = await mmfToken.balanceOf(userA.address);
      // 1,010,000 - 500,000 = 510,000
      expect(balanceAfter).to.equal(ethers.parseEther("510000"));
    });

    it("Should handle NAV 1.0002365 correctly", async function () {
      // NAV: 1.00000000 → 1.00023650 (+0.02365%)
      await mmfToken.connect(navUpdater).updateNAVAndRebase(100023650);

      const balanceA = await mmfToken.balanceOf(userA.address);
      const sharesA = await mmfToken.sharesOf(userA.address);

      // Share는 그대로
      expect(sharesA).to.equal(ethers.parseEther("1000000"));

      // Balance는 NAV 비율로 증가
      // 1,000,000 * 100023650 / 100000000 = 1,000,236.5
      expect(balanceA).to.equal(ethers.parseEther("1000236.5"));
    });

    it("Should maintain proportional balances across users", async function () {
      // NAV 증가
      await mmfToken.connect(navUpdater).updateNAVAndRebase(100500000);

      const balanceA = await mmfToken.balanceOf(userA.address);
      const balanceB = await mmfToken.balanceOf(userB.address);

      // User A는 User B의 2배를 보유
      expect(balanceA).to.equal(balanceB * 2n);
    });
  });

  describe("Investment Timing Comparison (투자 타이밍 비교)", function () {
    it("Should compare shares and values between early and late investors", async function () {
      console.log("\n========== 투자 타이밍에 따른 Share와 가치 비교 ==========\n");

      // ===== 1단계: UserA가 먼저 10,000,000 DT 투자 (NAV = 100000000) =====
      console.log("📌 1단계: UserA 투자 (초기 NAV = 100000000, 즉 1.00000000)");
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("10000000")
      );

      let sharesA = await mmfToken.sharesOf(userA.address);
      let balanceA = await mmfToken.balanceOf(userA.address);
      let navBefore = await mmfToken.currentNAV();

      console.log(`  UserA 투자액: 10,000,000 DT`);
      console.log(`  UserA Shares: ${ethers.formatEther(sharesA)}`);
      console.log(`  UserA Balance: ${ethers.formatEther(balanceA)}`);
      console.log(`  현재 NAV: ${navBefore}\n`);

      // ===== 2단계: NAV 업데이트로 5% 수익 발생 =====
      console.log("📌 2단계: NAV 업데이트 (100000000 → 105000000, +5% 수익)");
      await mmfToken.connect(navUpdater).updateNAVAndRebase(105000000);

      sharesA = await mmfToken.sharesOf(userA.address);
      balanceA = await mmfToken.balanceOf(userA.address);
      let navAfterFirst = await mmfToken.currentNAV();

      console.log(`  UserA Shares: ${ethers.formatEther(sharesA)} (변동 없음)`);
      console.log(`  UserA Balance: ${ethers.formatEther(balanceA)} (5% 증가!)`);
      console.log(`  현재 NAV: ${navAfterFirst}`);
      console.log(`  UserA 수익: ${ethers.formatEther(balanceA - ethers.parseEther("10000000"))} DT\n`);

      // ===== 3단계: UserB가 50,000,000 DT 투자 (NAV = 105000000) =====
      console.log("📌 3단계: UserB 투자 (현재 NAV = 105000000)");
      await mmfToken.connect(assetManager).purchaseWithDT(
        userB.address,
        ethers.parseEther("50000000")
      );

      let sharesB = await mmfToken.sharesOf(userB.address);
      let balanceB = await mmfToken.balanceOf(userB.address);

      console.log(`  UserB 투자액: 50,000,000 DT`);
      console.log(`  UserB Shares: ${ethers.formatEther(sharesB)}`);
      console.log(`  UserB Balance: ${ethers.formatEther(balanceB)}`);
      console.log(`  현재 NAV: ${navAfterFirst}\n`);

      // Share 비교
      console.log("📊 투자 시점 비교:");
      console.log(`  UserA Shares: ${ethers.formatEther(sharesA)}`);
      console.log(`  UserB Shares: ${ethers.formatEther(sharesB)}`);
      console.log(`  → UserB는 5배 투자했지만, Share는 약 ${(Number(ethers.formatEther(sharesB)) / Number(ethers.formatEther(sharesA))).toFixed(2)}배만 받음\n`);

      // ===== 4단계: 다시 NAV 업데이트로 추가 3% 수익 =====
      console.log("📌 4단계: NAV 업데이트 (105000000 → 108150000, +3% 수익)");
      await mmfToken.connect(navUpdater).updateNAVAndRebase(108150000);

      sharesA = await mmfToken.sharesOf(userA.address);
      balanceA = await mmfToken.balanceOf(userA.address);
      sharesB = await mmfToken.sharesOf(userB.address);
      balanceB = await mmfToken.balanceOf(userB.address);
      let navFinal = await mmfToken.currentNAV();

      console.log(`  현재 NAV: ${navFinal}\n`);

      // ===== 최종 결과 비교 =====
      const principalA = await mmfToken.principalOf(userA.address);
      const principalB = await mmfToken.principalOf(userB.address);
      const profitA = await mmfToken.profitOf(userA.address);
      const profitB = await mmfToken.profitOf(userB.address);
      const profitRateA = await mmfToken.profitRateOf(userA.address);
      const profitRateB = await mmfToken.profitRateOf(userB.address);

      console.log("🎯 최종 결과 비교:");
      console.log("┌─────────┬──────────────────┬──────────────────┬──────────────────┬──────────────┬──────────────┐");
      console.log("│  유저   │   투자 원금      │     Shares       │   현재 Balance   │   총 수익    │   수익률     │");
      console.log("├─────────┼──────────────────┼──────────────────┼──────────────────┼──────────────┼──────────────┤");
      console.log(`│ UserA   │ ${ethers.formatEther(principalA).padEnd(16)} │ ${ethers.formatEther(sharesA).padEnd(16)} │ ${ethers.formatEther(balanceA).padEnd(16)} │ ${ethers.formatEther(profitA).padEnd(12)} │ ${(Number(profitRateA) / 100).toFixed(2).padEnd(12)}% │`);
      console.log(`│ UserB   │ ${ethers.formatEther(principalB).padEnd(16)} │ ${ethers.formatEther(sharesB).padEnd(16)} │ ${ethers.formatEther(balanceB).padEnd(16)} │ ${ethers.formatEther(profitB).padEnd(12)} │ ${(Number(profitRateB) / 100).toFixed(2).padEnd(12)}% │`);
      console.log("└─────────┴──────────────────┴──────────────────┴──────────────────┴──────────────┴──────────────┘\n");

      // 수익률 비교
      console.log("💰 수익률 비교:");
      console.log(`  UserA 수익률: ${(Number(profitRateA) / 100).toFixed(2)}% (초기부터 투자)`);
      console.log(`  UserB 수익률: ${(Number(profitRateB) / 100).toFixed(2)}% (중간에 투자)`);
      console.log(`  → 초기 투자자(UserA)가 더 높은 수익률!\n`);

      // Share 당 가치
      const valuePerShareA = Number(ethers.formatEther(balanceA)) / Number(ethers.formatEther(sharesA));
      const valuePerShareB = Number(ethers.formatEther(balanceB)) / Number(ethers.formatEther(sharesB));

      console.log("📈 Share 당 가치:");
      console.log(`  UserA: ${valuePerShareA.toFixed(4)} DT per Share`);
      console.log(`  UserB: ${valuePerShareB.toFixed(4)} DT per Share`);
      console.log(`  → 모든 유저의 Share 당 가치는 동일 (NAV 반영)\n`);

      console.log("========== 테스트 완료 ==========\n");

      // 검증: Share는 고정, Balance는 NAV 비율로 증가
      expect(sharesA).to.equal(ethers.parseEther("10000000"));
      expect(balanceA).to.equal(ethers.parseEther("10815000"));

      // UserB의 balance는 약 50,000,000 * 108150000 / 105000000
      const expectedBalanceB = (ethers.parseEther("50000000") * 108150000n) / 105000000n;
      expect(balanceB).to.be.closeTo(expectedBalanceB, ethers.parseEther("1"));

      // 원금 검증
      expect(principalA).to.equal(ethers.parseEther("10000000"));
      expect(principalB).to.equal(ethers.parseEther("50000000"));

      // 수익 검증
      expect(profitA).to.equal(ethers.parseEther("815000"));
      expect(profitB).to.be.closeTo(ethers.parseEther("1500000"), ethers.parseEther("1"));

      // 수익률 검증 (815 = 8.15%)
      expect(profitRateA).to.equal(815n);
    });

    it("Should track principal correctly after redemption", async function () {
      // UserA 투자
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000")
      );

      // NAV 증가
      await mmfToken.connect(navUpdater).updateNAVAndRebase(105000000); // 1.05 (+5%)

      let principalBefore = await mmfToken.principalOf(userA.address);
      let balanceBefore = await mmfToken.balanceOf(userA.address);

      console.log("\n환매 전:");
      console.log(`  원금: ${ethers.formatEther(principalBefore)}`);
      console.log(`  잔액: ${ethers.formatEther(balanceBefore)}`);

      // 락업 해제
      await time.increase(30 * 24 * 60 * 60 + 1);

      // 50% 환매
      const redeemAmount = ethers.parseEther("500000");
      await mmfToken.connect(userA).redeemToDT(redeemAmount);

      let principalAfter = await mmfToken.principalOf(userA.address);
      let balanceAfter = await mmfToken.balanceOf(userA.address);

      console.log("\n환매 후 (500,000 DT 환매):");
      console.log(`  원금: ${ethers.formatEther(principalAfter)}`);
      console.log(`  잔액: ${ethers.formatEther(balanceAfter)}`);

      // 환매 비율 계산
      // 500,000 / 1,050,000 = 약 47.6%의 share 환매
      // 원금도 같은 비율로 감소: 1,000,000 * (1 - 47.6%) = 약 523,810
      const expectedPrincipal = principalBefore - (principalBefore * redeemAmount / balanceBefore);
      expect(principalAfter).to.be.closeTo(expectedPrincipal, ethers.parseEther("1"));

      // 잔액 = 1,050,000 - 500,000 = 550,000
      expect(balanceAfter).to.be.closeTo(
        ethers.parseEther("550000"),
        ethers.parseEther("1")
      );
    });
  });

  describe("Decimal NAV Input (소수점 NAV 입력)", function () {
    beforeEach(async function () {
      // UserA 투자: 1,000,000,000 DT (10억)
      await mmfToken.connect(assetManager).purchaseWithDT(
        userA.address,
        ethers.parseEther("1000000000")
      );
    });



    it("Should update NAV using decimal format (정수/소수 분리)", async function () {
      console.log("\n📊 Decimal 방식 1: 정수/소수 분리");

      // 1.00002365를 입력하려면: updateNAVAndRebaseDecimal(1, 2365)
      await mmfToken.connect(navUpdater).updateNAVAndRebaseDecimal(1, 2365);

      const currentNAV = await mmfToken.currentNAV();
      const balance = await mmfToken.balanceOf(userA.address);

      console.log(`  입력: 1.00002365 → updateNAVAndRebaseDecimal(1, 2365)`);
      console.log(`  결과 NAV: ${currentNAV} (내부 표현)`);
      console.log(`  실제 NAV: ${Number(currentNAV) / NAV_PRECISION}`);
      console.log(`  UserA Balance: ${ethers.formatEther(balance)} 토큰\n`);

      // NAV = 1 * 100000000 + 2365 = 100002365
      expect(currentNAV).to.equal(100002365n);

      // Balance = 1,000,000,000 * 100002365 / 100000000 = 1,000,023,650
      expect(balance).to.equal(ethers.parseEther("1000023650"));
    });

    it("Should update NAV using value with decimal places (값/자릿수)", async function () {
      console.log("\n📊 Decimal 방식 2: 값/자릿수");

      // 1.0002365를 입력하려면: updateNAVWithDecimals(10002365, 7)
      await mmfToken.connect(navUpdater).updateNAVWithDecimals(10002365, 7);

      const currentNAV = await mmfToken.currentNAV();
      const balance = await mmfToken.balanceOf(userA.address);

      console.log(`  입력: 1.0002365 → updateNAVWithDecimals(10002365, 7)`);
      console.log(`  결과 NAV: ${currentNAV} (내부 표현)`);
      console.log(`  실제 NAV: ${Number(currentNAV) / NAV_PRECISION}`);
      console.log(`  UserA Balance: ${ethers.formatEther(balance)} 토큰`);
      console.log(`  수익: ${ethers.formatEther(balance - ethers.parseEther("1000000000"))} 토큰\n`);

      // NAV = 10002365 * 100000000 / 10000000 = 100023650
      expect(currentNAV).to.equal(100023650n);

      // Balance = 1,000,000,000 * 100023650 / 100000000 = 1,000,236,500
      expect(balance).to.equal(ethers.parseEther("1000236500"));
    });

    it("Should handle 1.0010 correctly", async function () {
      // 1.00100000 입력 (0.1% 증가)
      await mmfToken.connect(navUpdater).updateNAVAndRebaseDecimal(1, 100000);

      const currentNAV = await mmfToken.currentNAV();
      const balance = await mmfToken.balanceOf(userA.address);

      console.log("\n📊 간단한 예: 1.00100000");
      console.log(`  NAV: ${Number(currentNAV) / NAV_PRECISION}`);
      console.log(`  Balance: ${ethers.formatEther(balance)} 토큰\n`);

      // NAV = 1 * 100000000 + 100000 = 100100000
      expect(currentNAV).to.equal(100100000n);

      // Balance = 1,000,000,000 * 100100000 / 100000000 = 1,001,000,000
      expect(balance).to.equal(ethers.parseEther("1001000000"));
    });

    it("Should revert if decimal part is too large", async function () {
      // decimalPart가 NAV_PRECISION(100000000)보다 크면 실패
      await expect(
        mmfToken.connect(navUpdater).updateNAVAndRebaseDecimal(1, 100000001)
      ).to.be.revertedWith("Decimal part must be less than NAV_PRECISION");
    });

    it("Should revert if too many decimal places", async function () {
      // 11자리 이상은 실패 (최대 10자리)
      await expect(
        mmfToken.connect(navUpdater).updateNAVWithDecimals(10002365, 11)
      ).to.be.revertedWith("Too many decimal places");
    });

    it("Should compare both methods produce same result", async function () {
      // 방법 1: updateNAVAndRebaseDecimal(1, 236500) → 1.00236500
      await mmfToken.connect(navUpdater).updateNAVAndRebaseDecimal(1, 236500);
      const nav1 = await mmfToken.currentNAV();
      const balance1 = await mmfToken.balanceOf(userA.address);

      // 원래대로 복구
      await mmfToken.connect(navUpdater).updateNAVAndRebase(100000000);

      // 방법 2: updateNAVWithDecimals(100236500, 8) → 1.00236500
      await mmfToken.connect(navUpdater).updateNAVWithDecimals(100236500, 8);
      const nav2 = await mmfToken.currentNAV();
      const balance2 = await mmfToken.balanceOf(userA.address);

      console.log("\n🔍 두 방법 비교 (같은 값 1.00236500):");
      console.log(`  방법 1 updateNAVAndRebaseDecimal(1, 236500)`);
      console.log(`    NAV: ${nav1} → ${Number(nav1) / NAV_PRECISION}`);
      console.log(`    Balance: ${ethers.formatEther(balance1)} 토큰`);
      console.log(`  방법 2 updateNAVWithDecimals(100236500, 8)`);
      console.log(`    NAV: ${nav2} → ${Number(nav2) / NAV_PRECISION}`);
      console.log(`    Balance: ${ethers.formatEther(balance2)} 토큰`);
      console.log(`  → 동일한 결과!\n`);

      // 두 방법 모두 같은 결과
      expect(nav1).to.equal(nav2);
      expect(balance1).to.equal(balance2);
    });

    it("Should handle exact user question: NAV 1.0002365 with 1B investment", async function () {
      console.log("\n📊 SHA 케이스 : NAV 1.0002365, 투자금 10억");

      // NAV를 1.0002365로 업데이트
      await mmfToken.connect(navUpdater).updateNAVWithDecimals(10002365, 7);

      const currentNAV = await mmfToken.currentNAV();
      const balance = await mmfToken.balanceOf(userA.address);

      console.log(`balance = : ${balance}`);

      const balanceReadable = ethers.formatEther(balance);

      const principal = await mmfToken.principalOf(userA.address);
      const precision = await mmfToken.getNAVPrecision();
      console.log(`precision = : ${precision}`);
     

      console.log(`  NAV (내부): ${currentNAV}`);
      console.log(`  NAV (실제): ${Number(currentNAV) / NAV_PRECISION}`);
      // console.log(`  투자금: 1,000,000,000 토큰`);
      console.log(`  투자금: ${ ethers.formatEther(principal)} 토큰`);
      console.log(`  평가금: ${balanceReadable} 토큰`);
      console.log(`  수익: ${ethers.formatEther(balance - ethers.parseEther("1000000000"))} 토큰`);
      console.log(`  수익률: ${((Number(balanceReadable) / 1000000000 - 1) * 100).toFixed(4)}%\n`);

      // NAV = 10002365 * 100000000 / 10000000 = 100023650
      expect(currentNAV).to.equal(100023650n);

      // Balance = 1,000,000,000 * 100023650 / 100000000 = 1,000,236,500
      expect(balance).to.equal(ethers.parseEther("1000236500"));

      // 수익: 236,500 토큰
      expect(balance - ethers.parseEther("1000000000")).to.equal(
        ethers.parseEther("236500")
      );
    });
  });
});


//특정테스트만 실행 -  npx hardhat test --grep "NAV 1.0002365"

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./MMFValueToken.sol";

/**
 * @title MMFValueTokenDeployer
 * @dev MMF Value Token 배포 스크립트
 */
contract MMFValueTokenDeployer {
    event TokenDeployed(
        address indexed tokenAddress,
        address indexed admin,
        uint256 initialNAV,
        uint256 lockupPeriod
    );

    /**
     * @dev MMF Value Token 배포
     * @param admin 관리자 주소
     * @param assetManager 자산운용사 주소
     * @param navUpdater NAV 업데이터 주소
     * @param initialNAV 초기 NAV (10000 = 1.0000)
     * @param lockupPeriodDays 락업 기간 (일 단위)
     */
    function deployToken(
        address admin,
        address assetManager,
        address navUpdater,
        uint256 initialNAV,
        uint256 lockupPeriodDays
    ) external returns (address) {
        uint256 lockupPeriod = lockupPeriodDays * 1 days;

        MMFValueToken token = new MMFValueToken(
            admin,
            assetManager,
            navUpdater,
            initialNAV,
            lockupPeriod
        );

        emit TokenDeployed(
            address(token),
            admin,
            initialNAV,
            lockupPeriod
        );

        return address(token);
    }

    /**
     * @dev 기본 설정으로 배포
     * - NAV: 1.0000
     * - 락업: 30일
     */
    function deployDefaultToken(
        address admin,
        address assetManager,
        address navUpdater
    ) external returns (address) {
        return this.deployToken(
            admin,
            assetManager,
            navUpdater,
            10000, // 1.0000
            30     // 30일
        );
    }
}

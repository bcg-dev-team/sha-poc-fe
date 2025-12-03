import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@digital-wallet/ui": path.resolve(__dirname, "../../packages/ui/src")
    },
  },
  build: {
    target: "esnext",
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 3100,
    host: true,
    open: true,
  },
  preview: {
    port: 3100,
    host: true,
  },
});



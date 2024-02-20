import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {},
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@shared": path.resolve(__dirname, "./src/shared"),
      "@var": path.resolve(
        __dirname,
        "./src/app/styles/assets/_variables.scss"
      ),
      "@mixin": path.resolve(__dirname, "./src/app/styles/assets/_mixins.scss"),
      "@classes": path.resolve(
        __dirname,
        "./src/app/styles/assets/_classes.scss"
      ),
    },
  },
});

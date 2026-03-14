


import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // ✅ IMPORTANT for Vercel (fixes 404 white page issue)
    base: "/",

    plugins: [react(), tailwindcss()],

    server: {
      open: true,
      host: true, // allow network access
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ["**/*.{js,css,html,woff2}"],
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        theme_color: "rgb(18, 22, 33)",
        background_color: "rgb(18, 22, 33)",
        display: "standalone",
        scope: "/",
        start_url: "/",
        short_name: "just breathe",
        description: "breathing exercise app",
        name: "just breathe",
        icons: [
          {
            src: "/appicon.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});

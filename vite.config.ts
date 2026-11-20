import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain yet: GitHub Pages serves this at <org>.github.io/artlistv1rf/.
  // When a domain is attached in Pages settings, switch to base "/" AND add public/CNAME
  // in the same commit, or every asset 404s and the site is blank.
  base: "/artlistv1rf/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});

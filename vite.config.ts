import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Custom domain artlist.pics (public/CNAME). If the domain is removed, switch to base
  // "/artlistv1rf/" and delete public/CNAME in the same commit, or every asset 404s.
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});

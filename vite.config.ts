import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [
    svgr({
      svgrOptions: {
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              removeUselessStrokeAndFill: true,
              removeAttrs: {
                attrs: "path(stroke|fill)",
              },
            },
          ],
        },
      },
    }),
  ],
});

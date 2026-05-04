import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Cursor/VS Code Simple Browser loads dev URLs inside an iframe. A CSP that
// explicitly allows framing avoids a blank white preview for localhost.
const idePreviewHeaders = {
  "Content-Security-Policy": "frame-ancestors *",
};

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    headers: idePreviewHeaders,
  },
  preview: {
    headers: idePreviewHeaders,
  },
});

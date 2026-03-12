// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Import the plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Add the plugin
  ],
  server: {
    // Cho phép tất cả các host (ngrok, localtunnel, ...) truy cập
    allowedHosts: [
      'recommendable-celena-nondiffused.ngrok-free.dev', // Link ngrok của đạo hữu
      '.ngrok-free.app', // Hoặc cho phép mọi link từ ngrok
      '.ngrok-free.dev'
    ]
  }
});

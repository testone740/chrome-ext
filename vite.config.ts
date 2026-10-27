import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        side_panel: 'index.html',
        background: 'src/background/service_worker.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [react()],
});

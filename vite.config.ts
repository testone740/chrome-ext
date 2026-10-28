import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        sidePanel: 'index.html',
        background: 'src/background/service_worker.ts',
        renderReadingTime: 'src/content/renderReadingTime.ts',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
  plugins: [react()],
});

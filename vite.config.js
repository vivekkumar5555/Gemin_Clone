import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // output directory
    emptyOutDir: true,
  },
  base: '/your-repo-name/', // adjust to your GitHub Pages URL
});
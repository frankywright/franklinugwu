import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: The base must match your GitHub repository name with slashes
  // Based on your URL: https://frankywright.github.io/franklinugwu/
  base: '/franklinugwu/', 
});
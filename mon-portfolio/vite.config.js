import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === "production" ? "/stefj1208.github.io/" : "/", // Corrige le chemin pour GitHub Pages
});

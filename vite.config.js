import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/3d_portfolio/',
  build :{
    outDir: 'build', // Add this line to set the output directory to 'build'
  },
  plugins: [
    react(),
     visualizer(), 
     viteImagemin({
    gifsicle: { optimizationLevel: 7 },
    optipng: { optimizationLevel: 7 },
    webp: { quality: 75 },
  }),],
})

import { defineConfig } from 'vite';

/**
 * Define las entradas HTML del portafolio para generar una salida multipágina compatible con la ESP32-S3.
 * @returns {import('vite').UserConfig}
 */
export default defineConfig({
  /**
   * Usa rutas relativas para que los archivos funcionen tanto en la ESP32-S3
   * como dentro del subdirectorio de GitHub Pages.
   */
  base: './',
  build: {
    rollupOptions: {
      input: {
        inicio: 'index.html',
        laboratorio: 'laboratorio.html',
        arquitectura: 'arquitectura.html',
      },
    },
  },
});

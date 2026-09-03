import { defineConfig } from 'vite';

/**
 * Define las entradas HTML del portafolio para generar una salida multipágina compatible con la ESP32-S3.
 * @returns {import('vite').UserConfig}
 */
export default defineConfig({
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

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 5173,
    open: false,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        valeria: resolve(__dirname, 'valeria.html'),
        mimovistar: resolve(__dirname, 'mi-movistar.html'),
        operador: resolve(__dirname, 'operador.html'),
        cliente: resolve(__dirname, 'cliente.html'),
        operaciones: resolve(__dirname, 'operaciones.html')
      }
    }
  }
});

import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],  // Certifique-se de que o plugin vue está aqui
  test: {
    environment: 'jsdom', // Use jsdom para simular o ambiente de navegador
    transformMode: {
      web: [/\.[jt]sx?$/], // Transforma arquivos JS/TS para o Vitest
    },
  },
});

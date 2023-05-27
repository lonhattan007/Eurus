/// <reference types="vitest"/>>
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: {
      '@assets': path.resolve('./src/assets/'),
      '@components': path.resolve('./src/components/'),
      '@views': path.resolve('./src/views/'),
      '@hooks': path.resolve('./src/hooks/'),
      '@mocks': path.resolve('./mocks/'),
      '@models': path.resolve('./src/models/'),
      '@constants': path.resolve('./src/constants/'),
      '@styles': path.resolve('./src/styles'),
      '@stores': path.resolve('./src/stores'),
      '@routes': path.resolve('./src/routes'),
      '@utils': path.resolve('./src/utils'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setupTest.ts'],
  },
});

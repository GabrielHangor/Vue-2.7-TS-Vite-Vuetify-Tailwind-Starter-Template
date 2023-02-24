import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue2 from '@vitejs/plugin-vue2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    Components({
      dts: true,
      resolvers: [VuetifyResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      sass: {
        // ✅
        additionalData: [
          '@import "./src/assets/styles/vuetify-variables.scss"',
          '', // end with newline
        ].join('\n'),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

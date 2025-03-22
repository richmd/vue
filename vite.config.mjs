import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "richmd.vue",
      fileName: (format) => `index.${format}.jsx`,
      cssFileName: "vue",
    },
    rollupOptions: {
      external: [
        "vue",
        "@richmd/core",
      ],
      output: {
        globals: {
          vue: "Vue",
          "@richmd/core": "core",
        },
      },
    },
  },
})

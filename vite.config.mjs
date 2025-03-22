import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "richmd.vue",
      fileName: (format) => `index.${format}.js`,
      types: path.resolve(__dirname, "src/index.d.ts"),
    },
    rollupOptions: {
      external: [
        "vue",
        "html-react-parser",
        "@richmd/core",
      ],
      output: {
        globals: {
          vue: "Vue",
          "html-react-parser": "parse",
          "@richmd/core": "core",
        },
      },
    },
  },
})

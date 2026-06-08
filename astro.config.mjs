import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://yigitcilli.com',
  output: 'static',
  compressHTML: true,
  build: {
    format: 'directory',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(root, 'src'),
      },
    },
  },
});

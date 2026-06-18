import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Redirect gitignored build artifact to a committed test stub
      [resolve(__dirname, 'src/assets/generated/images.json')]: resolve(__dirname, 'src/testing/images-stub.json'),
    },
  },
  test: {
    setupFiles: ['src/test-setup.ts'],
    server: {
      deps: {
        inline: [/@ionic\/angular/, /@ionic\/core/, /ionicons/],
      },
    },
  },
});

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // or 'node' if you don't need DOM
    include: ['src/**/*.{test,spec}.{js,mjs,cjs}', 'tests/**/*.test.js'],
    coverage: {
      provider: 'v8', // uses c8 for coverage
      reporter: ['text', 'lcov'],
      all: true,
    },
  },
});

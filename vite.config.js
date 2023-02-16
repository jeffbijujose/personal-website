import htmlPurge from 'vite-plugin-html-purgecss';

const path = require('path');

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    emptyOutDir: false,
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [
    htmlPurge(),
  ],
};

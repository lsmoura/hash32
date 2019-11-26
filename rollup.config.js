const flow = require('rollup-plugin-flow');
const cleanup = require('rollup-plugin-cleanup');
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [
    flow({ pretty: true }),
    cleanup({
      comments: 'none',

    }),
  ],
};
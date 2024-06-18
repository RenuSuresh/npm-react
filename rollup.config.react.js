const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { terser } = require('@rollup/plugin-terser');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const dts = require('rollup-plugin-dts').default;

const packageJson = require('./package.json');

module.exports = [
  {
    input: 'src/react/index.ts',
    output: [
      {
        file: 'dist/npm-lib-react/index.js',
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
  {
    input: 'src/react/index.ts', // Change input path here
    output: [{ file: 'dist/npm-lib-react/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
];

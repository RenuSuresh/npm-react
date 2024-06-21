import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

//NEW
import terser from '@rollup/plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const packageJson = require('./package.json')

export default [
  // Configuration for the web build
  {
    input: 'src/web/index.ts',
    output: {
      file: 'dist/web/index.js',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.web.json' }),
      peerDepsExternal(),
      // NEW
      terser(),
    ]
  },
  // Configuration for the native build
  {
    input: 'src/native/index.ts',
    output: {
      file: 'dist/native/index.js',
      format: 'cjs'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.native.json' }),
      peerDepsExternal(),

      // NEW
      terser(),
    ]
  },
  // {
  //   input: 'src/index.ts',
  //   output: [
  //     {
  //       file: packageJson.main,
  //       format: 'esm',
  //       sourcemap: true,
  //     },
  //   ],
  //   plugins: [
  //     // NEW
  //     typescript(),
  //     peerDepsExternal(),

  //     resolve(),
  //     commonjs(),

  //     // NEW
  //     terser(),
  //   ],
  // },
  // {
  //   input: 'dist/cjs/types/src/index.d.ts',
  //   output: [{ file: 'dist/index.d.ts', format: 'esm' }],
  //   plugins: [dts.default()],
  //   external: [/\.css$/],
  // },
]
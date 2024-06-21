import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import react from 'react';
import reactNative from 'react-native';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  // Configuration for React web
  {
    input: 'src/index.js',
    output: {
      file: 'dist/my-button-library-web.js',
      format: 'cjs',
      exports: 'named',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM'
      }
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
      {
        transform(code, id) {
          if (id.endsWith('.js')) {
            return {
              code: code.replace(/import '.\/ButtonWeb';/, ''),
              map: null // if source maps are supported
            };
          }
        }
      },
      {
        resolveId(source) {
          if (source === './ButtonWeb') {
            return { id: 'src/ButtonWeb.js', external: false };
          }
          return null;
        }
      }
    ]
  },
  // Configuration for React Native
  {
    input: 'src/index.native.js',
    output: {
      file: 'dist/my-button-library-native.js',
      format: 'cjs',
      exports: 'named',
      globals: {
        react: 'React',
        'react-native': 'ReactNative'
      }
    },
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
      reactNative({ jsxPragma: 'React.createElement' }),
      {
        transform(code, id) {
          if (id.endsWith('.js')) {
            return {
              code: code.replace(/import '.\/ButtonNative';/, ''),
              map: null // if source maps are supported
            };
          }
        }
      },
      {
        resolveId(source) {
          if (source === './ButtonNative') {
            return { id: 'src/ButtonNative.js', external: false };
          }
          return null;
        }
      }
    ]
  }
];

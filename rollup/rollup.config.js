// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
export default {
  input: 'src/main.ts',
  output: {
    file: 'bundle.js',
    format: 'umd'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    resolve(),
    typescript({
      tsconfig: "tsconfig.json"
    }),
    commonjs({ extensions: ['.js', '.ts'] }),
  ]
};
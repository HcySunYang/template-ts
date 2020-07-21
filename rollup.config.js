import { resolve } from 'path'
import tsPlugin from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

const commonConfig = {
  plugins: [
    nodeResolve(),
    commonjs(),
    tsPlugin({
      tsconfig: resolve(__dirname, 'tsconfig.json')
    })
  ],
  onwarn(warning, rollupWarn) {
    if (warning.code !== 'CIRCULAR_DEPENDENCY') {
      rollupWarn(warning)
    }
  }
}

const mainConfig = {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    format: 'cjs'
  },
  ...commonConfig
}

const finallyConfigs = [mainConfig]

export default finallyConfigs

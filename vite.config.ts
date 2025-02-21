import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

export default defineConfig({
  plugins: [
    dts()
  ],
  build: {
    minify: true,
    lib: {
      entry: 'src/index.ts',
      name: pkg.name,
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies || {})],
      output: {
        globals: {
          lit: 'lit'
        }
      }
    }
  }
})
import { defineConfig } from 'tsup';
import stylePlugin from 'esbuild-style-plugin';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',
  clean: true,
  esbuildPlugins: [stylePlugin()],
});
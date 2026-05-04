import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'CorruptionDungeonStage',
      fileName: (format) => `index.${format === 'umd' ? 'umd.cjs' : format === 'cjs' ? 'cjs' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@chub-ai/stages-ts'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@chub-ai/stages-ts': 'StagesTs'
        }
      }
    }
  }
});

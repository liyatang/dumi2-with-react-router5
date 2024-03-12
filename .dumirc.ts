import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'with-react-router-5',
  },
  resolve: {
    atomDirs: [{ type: 'lib', dir: 'packages/react/src' }],
  },
  alias: {
    'react-router': require.resolve('./packages/react-router'),
  },
});

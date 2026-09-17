import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schemaTypes';

export default defineConfig({
  basePath: '/studio',
  projectId: 'iw3ze2dc',
  dataset: 'production',
  title: 'Ivok Grup CMS',
  plugins: [structureTool()],
  schema: {
    types: schema.types,
  },
});

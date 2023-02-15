

export default {
    entryPoints: ['src/index.ts'],
    format: ['cjs', 'esm'],
    outfile: 'dist/index.js',
    loader: {
      '.prisma': 'text',
      '.toml': 'text',
      '.sql': 'text',
    },
    bundle: true,
    external: [],
  };
  
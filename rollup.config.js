import babel from 'rollup-plugin-babel';

export default {
  input: 'src/functions.js',
  output: [
    {
      file: 'dist/my-library.js',
      format: 'umd',
      name: 'MyLibrary',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
    }),
  ],
};

module.exports = {  
  entry: './app/src/runner.ts',
  output: {
      filename: 'dist/bundle.js'
  },
  resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
      modulesDirectories: [
          "app/external_modules/"
      ]
  },
  module: {
      loaders: [
          { test: /\.ts$/, loader: 'ts-loader' }
      ]
  }
}
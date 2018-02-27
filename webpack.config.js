const path = require('path')

const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  },
  plugins: [new HTMLPlugin({
    template: 'src/index.html'
  })]
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'aku.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // This will clean the `dist` directory before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './note.html', // Path to your HTML template file
    }),
  ],
};

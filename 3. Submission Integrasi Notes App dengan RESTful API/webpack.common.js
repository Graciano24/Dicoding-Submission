const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "./app.js"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "aku.js",
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
      template: path.join(__dirname, "note.html"),
      filename: "note.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
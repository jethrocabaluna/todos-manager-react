const path = require("path");
const webpack = require("webpack");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ["regenerator-runtime/runtime", "./src/index.js"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", 
          "css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]",
          "sass-loader"
        ]
        // loader: ExtractTextPlugin.extract("css")
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
    // new ExtractTextPlugin("styles.css")
  ]
};
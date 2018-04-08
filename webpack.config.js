const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, "src/scripts/app.js")
  },
  output: {
    path: path.resolve(__dirname, "views/scripts"),
    publicPath: "/views/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/views/vue.esm.js'
    }
  },
  devtool: '#eval-source-map'
};

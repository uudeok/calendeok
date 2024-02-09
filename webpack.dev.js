const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Chloek"),
    }),
  ],
};

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      {
        test: /\.ejs$/,
        loader: "ejs-compiled-loader"
      }
    ]
  },
  watch: true
};

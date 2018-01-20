module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  },
  watch: true
};

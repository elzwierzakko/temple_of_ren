const path = require("path");
const Html = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const entryPath = "";
const Compression = require("compression-webpack-plugin");

module.exports = {
  entry: `./${entryPath}/js/app.js`,
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `${entryPath}/build`),
  },
  mode: "development",
  devtool: "source-map",
  watch: true,
  devServer: {
    contentBase: path.join(__dirname, `${entryPath}`),
    publicPath: "/build/",
    compress: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "/images/",
          outputPath: "/images/",
        },
      },
    ],
  },
  plugins: [
    new Html({
      filename: "index.html",
      template: path.resolve(__dirname, `${entryPath}index.html`),
    }),
    new Compression({
      threshold: 0,
      minRatio: 0.8,
    }),
  ],
};

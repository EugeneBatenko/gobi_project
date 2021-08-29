const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  watchOptions: {
    ignored: ['server.js', './server/*', 'node_modules'],
  },
  context: path.resolve(__dirname, 'app'),
  entry: ['/assets/js/index.js', '/assets/stylesheets/main.scss'],
  output: {
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ],
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: "all",
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    hot: true,
    contentBase: __dirname + '/public',
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000'
    },
    stats: { colors: true }
  }
}
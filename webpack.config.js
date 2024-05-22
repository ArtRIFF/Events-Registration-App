const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    ["main"]: ["./src/index.ts"],
    ["registration"]: ["./src/registration.ts"],
    ["participants"]: ["./src/participants.ts"],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    clean: true
  },

  devServer: {
    open: true,
    static: {
      directory: path.resolve(__dirname, "src"),
      watch: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Events Registration App",
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["main"],
      minify: {
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: "Events Registration App",
      template: "./src/registration.html",
      filename: "registration.html",
      chunks: ["registration"],
      minify: {
        collapseWhitespace: true,
      },
    }),

    new HtmlWebpackPlugin({
      title: "Events Registration App",
      template: "./src/participants.html",
      filename: "participants.html",
      chunks: ["participants"],
      minify: {
        collapseWhitespace: true,
      },
    }),

    new CopyPlugin({
      patterns: [
        { from: 'src/img/svg-spinner.svg', to: 'img/svg-spinner.svg' },
      ],
    }),

    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
            }
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devtool: 'source-map',
};

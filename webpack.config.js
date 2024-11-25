const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // devtool: 'eval', <-- In case we want to use this as a source map to find errors easier in our code later on
  devServer: {
    static: './dist',
    watchFiles: [path.resolve(__dirname, 'src')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Krappie To-Do List', // Might not need this if we set the title in the src index html file since it's the template
      template: './src/index.html', 
      inject: 'body',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true, <-- In case we want to clean up the dist folder later on
  },
  // watch: true,

  // Use only if we have more than 1 entry point
  // optimization: { 
  //   runtimeChunk: 'single',
  // },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Why isn't the image rule below a dev dependency for Webpack in the package.json file?
      // REMINDER: there was an error regarding absolute file path (the internet link) and relative file path (local file in folder) before. Check TOP Discord previous comments
      // The error was a "Not Found" IIRC. Webpack would find the image in the local project and send it to dist, but image showed up broken on the actual website.
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3|wav)$/i,
        type: 'asset/resource',
      }
      // {
      //   test: /\.(?:js|mjs|cjs)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', { targets: "defaults" }]
      //       ]
      //     }
      //   }
      // }
    ],
  },
};
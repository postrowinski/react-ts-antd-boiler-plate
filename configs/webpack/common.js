// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const ROOT_PATH = path.join(__dirname, '..', '..');
const APP_PATH = path.join(ROOT_PATH, 'src');
const SCSS_PATH = path.join(APP_PATH, 'assets/scss')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  context: resolve(__dirname, '../../src'),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          AntdScssThemePlugin.themify('sass-loader'),
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader', },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            }
          }),
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new AntdScssThemePlugin(resolve(SCSS_PATH, 'variables.scss')),
    new CheckerPlugin(),
    new HtmlWebpackPlugin({template: 'index.html.ejs',}),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
  performance: {
    hints: false,
  },
};

const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const root = path.resolve(__dirname);
const dist = path.resolve(root, 'dist');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.ts',
  },
  output: {
    filename: 'index.js',
    path: dist,
    library: 'gentlemen-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    clean: true,
    publicPath: path.resolve(dist, 'assets'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    alias: {
      '@': path.resolve(root, 'src'),
    },
  },
  externals: {
    react: 'react',
    antd: 'antd',
    '@ant-design/icons': '@ant-design/icons',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          compress: true,
          sourceMap: true,
          module: true,
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
          },
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[path][name].[ext]',
            },
          },
        ],
        type: 'javascript/auto',
        issuer: {
          and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|jpg)$/,
        type: 'asset',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[path][name].[ext]',
            },
          },
          'url-loader',
        ],
      },
    ],
  },
};

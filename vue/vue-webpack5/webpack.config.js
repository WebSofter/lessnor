const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin")

const { VueLoaderPlugin } = require('vue-loader')

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') //For minimize css
const TerserPlugin = require("terser-webpack-plugin") //For minimize js

const isDev = process.env.NODE_ENV == 'development'
const isProd = !isDev

const filename = ext => isDev ? `[name].[contenthash].${ext}` : `[name].${ext}`
const optimization = () => {
    const optimizer = {
        splitChunks: { },
        minimize: isProd,
        minimizer: [],
      }
      if(isDev) {
        optimizer.splitChunks.chunks = 'all'
      }
      if(isProd) {
        optimizer.minimizer.push(new CssMinimizerPlugin())
        optimizer.minimizer.push(new TerserPlugin())
      }

      return optimizer
}
module.exports = {
    target: isDev ? "web" : "browserslist",
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: ['@babel/polyfill', './main.js'],
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    devtool: isProd ? false : 'source-map',
    devServer: {
        //historyApiFallback: true,
        //contentBase: path.resolve(__dirname, 'dist'),
        liveReload: true,
        open: true,
        hot: true,
        port: 8001,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: isDev ? 'My App (DEV)' : 'My App',
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/img/favicon.ico'), to: path.resolve(__dirname, 'dist') },
            ],
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/i,
                use: [
                    //"style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: (resourcePath, context) => {
                        return path.relative(path.dirname(resourcePath), context) + '/';
                      },
                    }
                  },
                  'css-loader',
                  'sass-loader'
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `img/${filename('[ext]')}`
                        }
                    },
                ],
            },
            {
                test: /\.xml$/i,
                use: [
                    {
                        loader: 'xml-loader',
                        options: {
                            name: `assets/${filename('[ext]')}`
                        }
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `fonts/${filename('[ext]')}`,
                    }
                }]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                }
            },
        ],
    },
    optimization: optimization()
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: "./src/index.js", // ---
    // mode: 'development',
    // devtool: 'eval-source-map',
    // resolve: {
    //     extensions: [".ts", ".tsx", ".js"]
    // },
    devServer: {
        port: 3000
        // contentBase: './dist',
    },
    output: {
        filename: '[name].[contenthash].js', //--
        path: path.resolve(__dirname, 'dist'),//---
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};

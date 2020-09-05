const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'js/index.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.[contentHash].js'
    },

    mode: "development",

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.(svg|woff|woff2|eot|ttf|otf)$/,
                use: "file-loader"
            },
            {
                test: /\.(png|jpg)$/,
                use: "url-loader"
            }
        ]
    },
    
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'json/products.json'), 
                    to: path.resolve(__dirname, 'dist')
                },
                {
                    from: path.resolve(__dirname, 'img'),
                    to: path.resolve(__dirname, 'dist/img')
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'template.html')
        })
    ]
}
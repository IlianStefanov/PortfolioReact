// webpack v4
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    
                } 
            },
            {
                test: /\.html/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }, 
            {
                test: /\.(scss|css)$/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                use: [ 
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[1]-[name].[ext]'
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
       new MiniCssExtractPlugin({
            filename: 'style.css'
       })
    ]
};
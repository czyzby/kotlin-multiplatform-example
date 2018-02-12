const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require("path");

const dist = path.resolve(__dirname, "build/dist");

module.exports = {
    entry: {
        main: "main"
    },
    output: {
        filename: "[name].bundle.js",
        path: dist,
        publicPath: ""
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "build/kotlin-js-min/main"),
            path.resolve(__dirname, "src/main/web/")
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Your app'
        }),
        new UglifyJSPlugin({
            sourceMap: false,
            minimize: true,
            output: {
                comments: false
            }
        })
    ]
};

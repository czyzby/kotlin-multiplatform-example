const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require("path");

const dist = path.resolve(__dirname, "build/dist");

module.exports = {
    entry: {
        main: "main"
    },
    output: {
        pathinfo: true,
        filename: "[name].bundle.js",
        path: dist,
        publicPath: ""
    },
    watch: true,
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
            path.resolve(__dirname, "build/node_modules/"),
            path.resolve(__dirname, "src/main/web/")
        ]
    },
    devtool: 'cheap-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new HtmlWebpackPlugin({
            chunks: ['vendor', 'main'],
            chunksSortMode: 'manual',
            minify: {
                removeAttributeQuotes: false,
                collapseWhitespace: false,
                html5: false,
                minifyCSS: false,
                minifyJS: false,
                minifyURLs: false,
                removeComments: false,
                removeEmptyAttributes: false
            },
            hash: false
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: ['./build/dist']
            }
        })
    ]
};

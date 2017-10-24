// All tasks related webpack you can find here

var ExtractTextPlugin  = require("extract-text-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
var webpack  = require("webpack");

module.exports = {
    entry: { 
        main: "./index.js", 
        vendor: ["lodash", "moment"] 
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract("css-loader", "sass-loader")
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
              presets: ["env"],
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin ("styles.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new BundleAnalyzerPlugin()
    ]
}
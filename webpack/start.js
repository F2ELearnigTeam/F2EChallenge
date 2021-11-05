// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require("./commonConfig");
const chalk = require("chalk");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

console.info(chalk.bold.hex("#09d7d7")("Starting dev-server... 🚀"))
module.exports = {
    ...config,
    mode: "development",
    plugins: [
        ...config.plugins,
        new HtmlWebpackPlugin({
                template: path.resolve("./src/static/index.html"),
                cache: false,
            }
        ),
        // new BundleAnalyzerPlugin({
        //     analyzerPort: 12345,
        //     openAnalyzer: false,
        // }),
    ],

    devServer: {
        port: 3333,
        proxy: {
            "/proxy_domain": {
                target: "http://localhost:5000"
            }
        },
        open: true,
    },
    devtool: "eval-cheap-module-source-map",
}
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const config = require("./commonConfig");
const chalk = require("chalk");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


console.info(chalk.bold.hex("#09d7d7")("BUILDING...🛠️"));
module.exports = {
    ...config,
    mode: "production",

    plugins: [
        new HtmlWebpackPlugin({
                template: path.resolve("./src/static/index.html"),
                cache: false,
            }
        ),
        new CleanWebpackPlugin(),
    ],
}
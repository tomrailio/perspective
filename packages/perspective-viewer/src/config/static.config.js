const fs = require("fs");
const path = require("path");
const common = require("@jpmorganchase/perspective/src/config/common.config.js");

const entry = {};

// build html
for (const filename of fs.readdirSync(path.join(__dirname, "..", "html"))) {
    const entryName = `html/${filename}`;
    entry[entryName] = path.join(__dirname, "..", "html", filename);
}

// build less
for (const filename of fs.readdirSync(path.join(__dirname, "..", "less"))) {
    const entryName = `less/${filename}`;
    entry[entryName] = path.join(__dirname, "..", "less", filename);
}

module.exports = Object.assign({}, common(), {
    entry,
    devtool: false,
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /themes/,
                use: [
                    {loader: "css-loader"}, 
                    {loader: "clean-css-loader", options: {level: 2}}, 
                    {loader: "less-loader"}
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: "html-loader",
                    options: {}
                }
            }
        ]
    },
    output: {
        filename: "[name]",
        libraryTarget: "commonjs2",
        path: path.resolve(__dirname, "../../cjs")
    }
});

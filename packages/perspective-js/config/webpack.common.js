const path = require("path");
const webpack = require("webpack");

module.exports = (entry, output) => {
    return {
        context: path.join(__dirname, ".."),
        entry,
        output: Object.assign({}, {
            path: path.join(__dirname, "..", "build"),
        }, output),
        plugins: [new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /(en|es|fr)$/)],
        devtool: "source-map",
        node: {
            fs: "empty"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: [
                        path.join(__dirname, "..", "src")
                    ],
                    loader: "babel-loader"
                }
            ]
        }
    };
}
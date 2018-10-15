const createConfig = require("./webpack.common.js");

module.exports = createConfig(
    "./src/perspective.parallel.js",
    {
        filename: "perspective-js.umd.js",
        library: "Perspective",
        libraryTarget: "umd"
    }
);

const createConfig = require("./webpack.common.js");

module.exports = createConfig(
    [
        "babel-polyfill",
        "./src/workers/perspective.asmjs.js"
    ],
    {
        filename: "perspective.worker.asmjs.js",
    }
);

const createConfig = require("./webpack.common.js");

module.exports = createConfig(
    "./src/workers/perspective.wasm.js",
    {
        filename: "perspective.worker.wasm.js",
    }
);

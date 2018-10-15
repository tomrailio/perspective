module.exports = [
  // Main entrypoint for the parallel loading
  require("./config/webpack.parallel.config"),

  // Workers
  require("./config/webpack.worker.asmjs.config"),
  require("./config/webpack.worker.wasm.config")
]
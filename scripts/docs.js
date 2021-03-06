/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

const execSync = require("child_process").execSync;
const execute = cmd => execSync(cmd, {stdio: "inherit"});

function docker(image = "emsdk") {
    console.log(`-- Creating ${image} docker image`);
    let cmd = "docker run --rm -it";
    if (process.env.PSP_CPU_COUNT) {
        cmd += ` --cpus="${parseInt(process.env.PSP_CPU_COUNT)}.0"`;
    }
    cmd += ` -v $(pwd):/usr/src/app -w /usr/src/app/ perspective/${image}`;
    return cmd;
}

let flags = " -DPSP_WASM_BUILD=0 -DPSP_CPP_BUILD=0 -DPSP_PYTHON_BUILD=1 -DPSP_BUILD_DOCS=1";

try {
    let cmd = "cd docsbuild && cmake ..  -DPSP_WASM_BUILD=0 -DPSP_CPP_BUILD=0 -DPSP_PYTHON_BUILD=0 -DPSP_BUILD_DOCS=1 && make -j${PSP_CPU_COUNT-8}";
    if (process.env.PSP_DOCKER) {
        execute(docker("docs") + " mkdir -p docsbuild");
        execute(cmd);

    } else {
        execute("mkdir -p docsbuild");
        execute(cmd);
    }
} catch (e) {
    console.log(e.message);
    process.exit(1);
}

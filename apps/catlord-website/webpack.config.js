"use strict";
const getBaseWebpackConfig = require("@nrwl/react/plugins/webpack");

Object.defineProperty(exports, "__esModule", { value: true });
// Add React-specific configuration
function getWebpackConfig(config) {
    config = getBaseWebpackConfig(config);

    return config;
}
module.exports = getWebpackConfig;

//,
            //   "../../node_modules/@south-paw/typeface-minecraft/files/minecraft.woff"
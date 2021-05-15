const nxPreset = require('@nrwl/jest/preset');

module.exports = {
    ...nxPreset,
    moduleNameMapper: {
        '@south-paw/typeface-minecraft': 'identity-obj-proxy',
    },
};

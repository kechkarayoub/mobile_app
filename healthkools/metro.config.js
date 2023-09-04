const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      // Add any additional modules you want to resolve here
//      'module-name': path.resolve(__dirname, 'path-to-module'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

module.exports = function (api) {
  api.cache(true);

  const presets = ['module:metro-react-native-babel-preset'];
  const plugins = [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env"
      }
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
        },
      },
    ],
  ];

  return {
    presets,
    plugins
  };
}

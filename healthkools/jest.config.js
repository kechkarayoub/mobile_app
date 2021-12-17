module.exports = function(api) {
  api.cache(true);
  return {
    preset: "react-native",
    setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
  };
};

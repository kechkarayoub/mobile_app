module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};

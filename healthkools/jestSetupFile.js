import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// jest.mock('@react-navigation/native/lib/commonjs/useLinking.native', () => ({
//   default: () => ({getInitialState: {then: jest.fn()}}),
//   __esModule: true,
// }));

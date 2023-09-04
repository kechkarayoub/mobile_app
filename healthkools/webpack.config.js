const path = require('path');
const dotenv = require('dotenv');


// Load environment variables from .env
//dotenv.config({ path: './src/.env' });
dotenv.config();

module.exports = {
  mode: process.env.WEBPACK_MODE,
  entry: './index.js', // Your entry point file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output filename
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  // Add loaders and plugins as needed
  module: {
    noParse: /node_modules\/react-native\/.*/,
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Add your chosen transpiler/loader
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /node_modules\/react-native-dropdown-picker\/.*/,
        use: {
          loader: 'babel-loader', // Add your chosen transpiler/loader
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /node_modules\/react-native-flags\/.*/,
        use: {
          loader: 'babel-loader', // Add your chosen transpiler/loader
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /node_modules\/react-native-modal-overlay\/.*/,
        use: {
          loader: 'babel-loader', // Add your chosen transpiler/loader
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /node_modules\/react-native-animatable\/.*/,
        use: {
          loader: 'babel-loader', // Add your chosen transpiler/loader
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /node_modules\/react-native-vector-icons\/.*/,
        use: {
          loader: 'babel-loader', // Add your chosen transpiler/loader
        },
      },
      {
        test: /\.(js|jsx)$/,
        include: /node_modules\/react-native\/.*/,
        use: {
          loader: 'babel-loader', // Add your chosen transpiler/loader
        },
      },
      // CSS and style files
      {
        test: /\.(css|scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // Image files
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: 'asset/resource', // Use asset/resource to prevent duplication
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
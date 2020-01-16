module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    "react-native-classname-to-style",
    [
      "react-native-platform-specific-extensions",
      {
        "extensions": ["css", "pcss"]
      }
    ],
    [
      'module-resolver',
      {
        extensions: ['.ios.ts', '.android.ts', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'App': './src/App/',
          'Components': './src/App/Components',
          'Actions': './src/App/Actions',
          'Assets': './src/App/Assets',
          'Config': './src/App/Config',
          'Containers': './src/App/Containers',
          'Navigators': './src/App/Navigators',
          'Reducers': './src/App/Reducers',
          'Services': './src/App/Services',
          'Stores': './src/App/Stores',
          'Theme': './src/App/Theme',
        },
      },
    ],
  ],
};

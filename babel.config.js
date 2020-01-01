module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
          'Cointainers': './src/App/Cointainers',
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

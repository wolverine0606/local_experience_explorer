module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './src',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
    ['@babel/plugin-transform-class-properties', {loose: true}], // Ensure loose mode is the same
    ['@babel/plugin-transform-private-methods', {loose: true}], // Ensure loose mode is the same
    ['@babel/plugin-transform-private-property-in-object', {loose: true}],
    'module:react-native-dotenv',
  ],
};

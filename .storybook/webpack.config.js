const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, '../node_modules', '.cache-loader'),
        },
      },
      {
        loader: 'babel-loader'
      },
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          appendTsSuffixTo: [
            '\\.vue$'
          ],
          happyPackMode: false
        }
      }
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx');
  Object.assign(config.resolve.alias, {
    '@': path.resolve(__dirname, '../src'),
  });
  return config;
};

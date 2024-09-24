const { merge } = require('webpack-merge');

const baseConfig = {
  mode: "development",
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  }
};


module.exports = function override(config, env) {
  const finalConfig = merge(config, baseConfig);
  finalConfig.output.publicPath = './'
  finalConfig.output.chunkFilename = finalConfig.output.chunkFilename.replace('[contenthash:8].', '')
  finalConfig.output.filename = finalConfig.output.filename.replace('[contenthash:8].', '')
  finalConfig.optimization.minimize = false
  return finalConfig
};

module.exports = {
  swcMinify: true,
  webpack(config: import('webpack').Configuration) {
    if (config.module && config.module.rules) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }
    return config;
  },
};
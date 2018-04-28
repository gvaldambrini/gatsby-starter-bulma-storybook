// Based on https://github.com/m-allanson/gatsby-storybook-css-modules
// and adapted to work with SASS.
require("imports-loader");

const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {

  // Add specific loader rule for CSS (SASS) Modules
  defaultConfig.module.rules.push({
    test: /\.module\.s[ac]ss$/,
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: "[path]-[local]-[hash:base64:5]"
        }
      },
      { loader: 'postcss-loader' },
      { loader: 'sass-loader' }
    ],
    include: path.resolve(__dirname, "../src")
  });

  defaultConfig.module.rules.push({
    test: /\.s[ac]ss$/,
    loaders: [
      "style-loader",
      "css-loader",
      "sass-loader",
      ],
    exclude: /\.module\.s[ac]ss$/,
    include: path.resolve(__dirname, '../src')
  })

  // ignore gatsby-link's global `__loader` variable
  defaultConfig.module.rules.push({
    test: require.resolve("gatsby-link"),
    loaders: ["imports-loader?___loader=>{enqueue:function(){}}"]
  });

  return defaultConfig;
};
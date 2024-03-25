const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envVars) => {
  const { env } = envVars;
  const envConfig = require(`./webpack.dev.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};

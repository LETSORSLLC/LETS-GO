const config = require('./config');
const db = require('./db');
const eslintConfig = require('./.eslintrc.json');
const prettierConfig = require('./.prettierrc.json');
const jestConfig = require('./jest.config.js');

module.exports = {
  config,
  db,
  eslintConfig,
  prettierConfig,
  jestConfig,
};

/**
 * 固定的配置文件
 * 由于在 linux 下以.开头的文件存在问题，因此本模块使用下划线_
 */
module.exports = [
  // babel
  ["_babelrc", ".babelrc"],
  // 创建 .ediotrconfig 配置文件
  ["_editorconfig", ".editorconfig"],
  // 创建 eslint 相关
  ["_eslintignore", ".eslintignore"],
  ["_eslintrc.js", ".eslintrc.js"],
  // 创建 git 相关
  ["_gitattributes", ".gitattributes"],
  ["_gitignore", ".gitignore"],
  // npm相关
  ["_npmignore", ".npmignore"],
  ["_npmrc", ".npmrc"],
  ["_nycrc", ".nycrc"],
  ["index.js", "index.js"],
  // prettier 插件配置
  ["prettier.config.js", "prettier.config.js"],
  // webpack 配置
  ["webpack.config.js", "webpack.config.js"],
];

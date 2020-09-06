/**
 * 工具库
 * production 模式下导出的是构建后的版本
 */
'use strict';
/* eslint-disable-next-line */
const { name, version } = require('./package.json');
const chunkName = `${name}-v${version}`;

if (process.env.NODE_ENV === 'production') {
  module.exports = require(`./dist/${chunkName}.min.js`);
} else {
  module.exports = require(`./dist/${chunkName}.js`);
}

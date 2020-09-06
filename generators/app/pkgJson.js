
/**
 * 脚手架 package.json 配置
 */
module.exports = {
  "name": "",
  "version": "0.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "nyc mocha",
    "build": "npm run test && webpack",
    "prepublishOnly": "npm run build"
  },
  "keywords": [
    "JavaScript"
  ],
  "author": "",
  "devDependencies": {
    "@babel/cli": "^7.11.5",
    "@babel/core": "^7.11.5",
    "@babel/plugin-transform-object-assign": "^7.10.4",
    "@babel/plugin-transform-runtime": "^7.11.5",
    "@babel/preset-env": "^7.11.5",
    "@babel/register": "^7.11.5",
    "@istanbuljs/nyc-config-babel": "^3.0.0",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.1.0",
    "babel-plugin-istanbul": "^6.0.0",
    "clean-webpack-plugin": "^3.0.0",
    "eslint": "^7.8.1",
    "eslint-config-prettier": "^6.11.0",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-prettier": "^3.1.4",
    "mocha": "^8.1.3",
    "nyc": "^15.1.0",
    "prettier": "^2.1.1",
    "terser-webpack-plugin": "^4.1.0",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12"
  },
  "dependencies": {
    "@babel/runtime": "^7.11.2"
  }
}
const webpackConfig = require('./webpack.config');
const _merge = require('lodash/merge');
const _webpack = require('webpack');

module.exports = _merge(webpackConfig, {
	plugins : [
		new _webpack.optimize.UglifyJsPlugin()
	]
});

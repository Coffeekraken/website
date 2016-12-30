module.exports = {
	entry: {
		'dist/js/app.js' : './src/js/app.js'
	},
	output: {
		path: '.',
		filename: '[name]',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(bower_components|node_modules)/,
			loader: 'babel-loader'
		}]
	}
}

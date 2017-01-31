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
	},
	resolve : {
		alias : {
			// 'coffeekraken-s-datepicker-component' : '/Users/olivierbossel/data/web/coffeekraken/s-datepicker-component/dist/index.js'
			// 'coffeekraken-s-custom-scrollbar-component' : '/Users/olivierbossel/data/web/coffeekraken/s-custom-scrollbar-component/dist/index.js'
		}
	}
}

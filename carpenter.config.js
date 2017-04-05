module.exports = {
	title : "Coffeekraken.io",
	index : 'documentation/README.md',
	documentation : {
		files : [
			'node_modules/coffeekraken-sugar/!(node_modules)/**/*.md',
			'node_modules/coffeekraken-sugar/*.md',
			'node_modules/coffeekraken-gridle/!(node_modules)/**/*.md',
			'node_modules/coffeekraken-gridle/*.md',
			'node_modules/coffeekraken-s-*/!(node_modules)/**/*.md',
			'node_modules/coffeekraken-s-*/*.md',
			'README.md'
		]
	},
	styleguide : {
		files : [
			'dist/js/app.js',
			'dist/css/styleguide.css'
		],
		displays : [
			'/Users/olivierbossel/data/web/coffeekraken/gridle/carpenter.displays.js'
		]
	}
}

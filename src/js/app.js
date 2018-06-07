// main application entry point
require('babel-polyfill');
require('coffeekraken-sugar/js/features/all');
require('./components/repos-list.vue');
require('webcomponents.js/webcomponents-lite');
require('./webcomponents.props');
require('./webcomponents.import');

window.addEventListener('scroll', (e) => {
	const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	if (scrollTop > 300) {
		document.body.classList.add('scrolled');
	} else {
		document.body.classList.remove('scrolled');
	}
});

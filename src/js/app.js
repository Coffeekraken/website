// main application entry point
require('babel-polyfill');
require('./components/repos-list.vue');
require('webcomponents.js/webcomponents-lite');
require('./webcomponents.props');
require('./webcomponents.import');

window.addEventListener('scroll', (e) => {
	if (document.body.scrollTop > 300) {
		document.body.classList.add('scrolled');
	} else {
		document.body.classList.remove('scrolled');
	}
});

// main application entry point
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

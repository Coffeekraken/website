import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent';

SWebComponent.setDefaultProps({
	widths: [{
		width: 300,
		name: 'extra-small'
	}, {
		width: 600,
		name: 'small'
	}, {
		width: 800,
		name: 'medium'
	}, {
		width: 1280,
		name: 'large'
	}],
	computeSrc: (src, widthObj) => {
		return src + `?w={width}&auto=compress`
	}
}, 's-responsive-img')

SWebComponent.setDefaultProps({
	apiKey : 'AIzaSyDCD2MPJFbXBkc5hNB5p8v21XcpeIo_5Mw'
}, ['s-google-map','s-google-map-marker']);

SWebComponent.setDefaultProps({
	mountWhen : 'isInViewport'
}, [
	's-bodymovin',
	's-responsive-img'
]);

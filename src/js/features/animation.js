import animLettersInReveal from 'coffeekraken-s-animation-component/dist/animLettersInReveal'
import animSlideIn from 'coffeekraken-s-animation-component/dist/animSlideIn'
import isMobile from  'coffeekraken-sugar/js/utils/is/mobile'
import isPhone from 'coffeekraken-sugar/js/utils/is/phone'

if (!isMobile()) {
	// init listeners
	animLettersInReveal(0, 500);
	animSlideIn(0, 500);
}

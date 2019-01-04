import whenInViewport from 'coffeekraken-sugar/js/dom/whenInViewport'
import querySelectorLive from 'coffeekraken-sugar/js/dom/querySelectorLive'
import closest from 'coffeekraken-sugar/js/dom/closest'

querySelectorLive('s-layers-transition', ($elm) => {
	whenInViewport($elm).then(() => {
		setTimeout(() => {
			$elm.animateIn(() => {
				closest($elm, 'section').classList.add('active')

				$elm.animateOut()
			})
		}, 1000)
	})
})

import { gsap } from "gsap";

/**
* Page transition effects.
* @see https://wiki.bsgdigital.com/ru/onboarding/developer/front-end/template/barba#componentspage-transitionsjs
* @param { boolean } out - false for pageIn animtion, true for page out
* @param { number } duration - use this number of miliseconds for your transition effects
*/
export default (out, duration) => {

	out ? pageOut() : pageIn();

	function pageOut() {
		gsap.to('.js-page-transition', {
			opacity: 0,
			duration: duration / 1000
		})
	}

	function pageIn() {
		gsap.to('.js-page-transition', {
			opacity: 1,
			duration: duration / 1000
		})
	}
}

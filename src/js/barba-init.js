import barba from '@barba/core';
import pageTransition from './components/animations/page-transitions';
import onceScripts from './once';
import commonScripts from './common';

/**
* Barba initial script. Details see on link.
* @see https://wiki.bsgdigital.com/ru/onboarding/developer/front-end/template/barba
*/
export default function () {
	/**
	* Duration of page transition IN and page transition OUT
	* @constant
	* @type { number } - miliseconds
	*/
	const PAGE_IN_DUR = 1000;
	const PAGE_OUT_DUR = 500;

	barba.init({
		debug: true, /** Set to false, when deploy to production */
		sync: true,
		prevent: ({ el }) => !!el.closest('#wpadminbar'), /** Fix for WP */
		transitions: [{
			/** Fire scripts when page leave */
			async leave(data) {
				const done = this.async();

				/** Run page out animation */
				pageTransition(true, PAGE_OUT_DUR);

				/** Close menu */
				document.querySelector('.js-header').classList.remove('header--menu-opened');
				document.querySelector('.js-menu').classList.remove('menu--opened');
				document.body.classList.remove('no-scroll');

				/** Scroll window to the top */
				window.scrollTo({
					top: 0,
					behavior: 'auto'
				});

				// Write here other scripts before page leave

				await delay(PAGE_OUT_DUR);
				done();
			},
			/** Fire scripts once on page load */
			once() {
				/** Write here */
				onceScripts();
				commonScripts();
				pageTransition(false, PAGE_IN_DUR);
			},
			beforeEnter(data) {
				let namespace = data.next.namespace;
				document.body.dataset.pageName = namespace;
			},
			/** Fire scripts after page enter */
			async after(data) {
				const done = this.async();

				/** Run page in animation */
				pageTransition(false, PAGE_IN_DUR);

				await delay(PAGE_IN_DUR);
				done();

				/** Run other scripts after pageIn transition complete */
				commonScripts();
			},
		}],
		/** Run scripts for each separate page after page load */
		views: [
			{
				namespace: 'homePage',
				afterEnter: () => {
					/** Add scripts for Home page */
				}
			}
		]
	})

	/**
	* Set delay during page transition that equals to page transition duration.
	* @param { number } [n=2000] - Time in miliseconds of transition duration.
	*/
	function delay(n) {
		n = n || 2000;
		return new Promise((done) => {
			setTimeout(() => {
				done();
			}, n);
		});
	}

}

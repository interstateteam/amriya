import { gsap } from 'gsap';
import { isMobile } from './../../helpers/detect-device';

export default () => {

	const burger = document.querySelector('.js-burger');
	const menu = document.querySelector('.js-menu');
	const menuList = menu.querySelector('.js-menu-list');
	const opensSublists = menu.querySelectorAll('.js-open-sublist');
	const sublists = menu.querySelectorAll('.js-menu-sublist');
	const mobileSublists = menu.querySelectorAll('.js-sublist-mobile');
	const popUp = document.querySelector('.js-booking');

	burger.addEventListener('click', () => {
		if (!popUp || popUp.matches('.is-invisible')) {
			menu.classList.toggle('menu--opened');
			document.body.classList.toggle('no-scroll');

			sublists.forEach(list => {
				list.style.height = menuList.offsetHeight + 'px';
			});
		}
	})

	opensSublists.forEach(openSublist => {
		openSublist.addEventListener('click', () => {

			opensSublists.forEach(otherOpen => {
				if (otherOpen == openSublist) return;
				otherOpen.classList.remove('menu__link--active');
			})
			openSublist.classList.toggle('menu__link--active');

			if (!isMobile()) {

				const selector = openSublist.getAttribute('data-sublist');
				const currSublist = menu.querySelector(selector);

				sublists.forEach(otherSublist => {
					if (otherSublist == currSublist) return;
					otherSublist.classList.remove('menu__sub-list--active');
				});

				currSublist.classList.toggle('menu__sub-list--active');

			} else {

				const currSublist = openSublist.parentElement.querySelector('.js-sublist-mobile');

				mobileSublists.forEach(otherSublist => {
					if (otherSublist == currSublist) return;
					gsap.to(otherSublist, {
						height: 0,
					})
				});

				const startHeight = currSublist.offsetHeight;
				let currHeight = 0;

				if (startHeight == 0) {

					gsap.set(currSublist, {
						height: 'auto'
					})
					currHeight = currSublist.offsetHeight;

					gsap.fromTo(currSublist, {
						height: 0
					}, {
						height: currHeight
					})

				} else {

					gsap.to(currSublist, {
						height: 0
					})

				}

			}

		})
	});

}

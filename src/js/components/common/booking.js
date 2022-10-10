import tabs from './../../helpers/tabs';

export default () => {

	const header = document.querySelector('.js-header');
	const burger = document.querySelector('.js-burger');
	const openBtn = document.querySelector('.js-open-booking');
	const popUp = document.querySelector('.js-booking');

	if (!openBtn || !popUp) return;

	tabs({
		onComplete: container => {
			container.closest('[data-tab-wrapper]').querySelector('.js-booking-submit').classList.remove('is-invisible');
		}
	});

	openBtn.addEventListener('click', () => {
		header.classList.add('header--menu-opened');
		popUp.classList.remove('is-invisible');
		document.body.classList.add('no-scroll');
	})

	burger.addEventListener('click', () => {
		if (!popUp.matches('.is-invisible')) {
			header.classList.remove('header--menu-opened');
			popUp.classList.add('is-invisible');
			document.body.classList.remove('no-scroll');

			popUp.querySelectorAll('[data-tab-button]').forEach(btn => {
				btn.classList.remove('is-active');
				btn.classList.remove('is-inactive');
			});

			popUp.querySelectorAll('[data-tab-content]').forEach(content => {
				content.classList.remove('is-active');
			});
		}
	})

}

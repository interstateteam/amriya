export default () => {

	const header = document.querySelector('.js-header');
	const burger = document.querySelector('.js-burger');
	const popUp = document.querySelector('.js-booking');

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 100) {
			header.classList.add('header--scrolled');
		} else {
			header.classList.remove('header--scrolled');
		}
	})

	burger.addEventListener('click', () => {
		if (!popUp || popUp.matches('.is-invisible')) {
			header.classList.toggle('header--menu-opened');
		}
	})

};

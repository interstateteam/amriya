import Swiper, { Navigation, EffectFade, Controller } from 'swiper';

export default () => {

	const wrappers = document.querySelectorAll('.js-other-rooms-wrapper');
	if (!wrappers.length) return;

	wrappers.forEach(wrapper => {

		const bgContainer = wrapper.querySelector('.js-other-rooms-bg');
		const linksContainer = wrapper.querySelector('.js-other-rooms-links');

		const bgSlider = new Swiper(bgContainer, {
			modules: [ EffectFade ],
			effect: 'fade',
			speed: 600,
			allowTouchMove: false,
			loop: true,
		})

		const linksSlider = new Swiper(linksContainer, {
			modules: [ Navigation, Controller ],
			slidesPerView: 1,
			speed: 600,
			loop: true,
			controller: {
				control: bgSlider
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})

	});

}

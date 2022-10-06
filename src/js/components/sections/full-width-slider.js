import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

export default () => {

	const containers = document.querySelectorAll('.js-full-width-gallery');
	if (!containers.length) return;

	containers.forEach(container => {

		const slider = new Swiper(container, {
			modules: [Navigation, Pagination, EffectFade, Autoplay],
			effect: 'fade',
			speed: 600,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',
			},
		})

	});

}

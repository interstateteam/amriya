import Swiper, { Navigation, Pagination, EffectFade } from 'swiper';

export default () => {

	const containers = document.querySelectorAll('.js-imaged-details-gallery');
	if (!containers.length) return;

	containers.forEach(container => {

		const slider = new Swiper(container, {
			modules: [Navigation, Pagination, EffectFade],
			effect: 'fade',
			speed: 600,
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

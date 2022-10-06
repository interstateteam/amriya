import Swiper, { Autoplay, EffectFade } from 'swiper';

export default () => {

	const images = document.querySelectorAll('.js-home-dine-images');
	if (!images.length) return;

	images.forEach(container => {

		const links = container.querySelectorAll('.js-home-dine-link');
		const gallery = container.querySelector('.js-home-dine-slider');

		const slider = new Swiper(gallery, {
			modules: [Autoplay, EffectFade],
			effect: 'fade',
			speed: 600,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false
			},
			on: {
				init: swiper => {
					links[swiper.activeIndex].classList.add('home-dine__item--active');
				},
				slideChange: swiper => {
					const currLink = links[swiper.activeIndex];

					links.forEach(link => {
						if (link == currLink) return;
						link.classList.remove('home-dine__item--active');
					});

					currLink.classList.add('home-dine__item--active');
				},
			}
		});

		links.forEach((link, i) => {

			link.addEventListener('click', () => {
				slider.slideTo(i);
			})

		});

	});

}

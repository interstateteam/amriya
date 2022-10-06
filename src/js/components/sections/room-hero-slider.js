import Swiper, { EffectFade, Autoplay } from 'swiper';

export default () => {

	const container = document.querySelector('.js-room-hero-slider');
	if (!container) return;

	const pagination = document.querySelectorAll('.js-room-hero-slider-pagination');

	const slider = new Swiper(container, {
		modules: [EffectFade, Autoplay],
		effect: 'fade',
		speed: 600,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		on: {
			init: swiper => {
				pagination[swiper.activeIndex].classList.add('room-hero__page--active-first');
			},
			slideChange: swiper => {
				const currPage = pagination[swiper.activeIndex];

				pagination.forEach(page => {
					if (page == currPage) return;
					page.classList.remove('room-hero__page--active-first');
					page.classList.remove('room-hero__page--active');
				});

				currPage.classList.add('room-hero__page--active');
			}
		}
	});

	pagination.forEach((page, i) => {
		page.addEventListener('click', () => {
			slider.slideTo(i);
		})
	});

}

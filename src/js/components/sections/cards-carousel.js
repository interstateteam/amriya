import Swiper, { Scrollbar } from 'swiper';
import { gsap } from 'gsap';

export default () => {

	const containers = document.querySelectorAll('.js-cards-container');
	if (!containers.length) return;

	containers.forEach(container => {

		const slider = new Swiper(container.querySelector('.js-cards-slider'), {
			modules: [ Scrollbar ],
			slidesPerView: 1.2,
			spaceBetween: 20,
			breakpoints: {
				768: {
					slidesPerView: 2.05,
				},
				1055: {
					slidesPerView: 2.5,
				},
				1440: {
					slidesPerView: 'auto',
				}
			},
			scrollbar: {
				el: container.querySelector('.swiper-scrollbar'),
			}
		})

	});

	document.querySelectorAll('.js-card').forEach(card => {

		const txt = card.querySelector('.js-card-txt');

		card.addEventListener('mouseenter', () => {
			gsap.to(txt, {
				height: 'auto',
				duration: .3
			});
		})

		card.addEventListener('mouseleave', () => {
			gsap.to(txt, {
				height: 0,
				duration: .3
			})
		})

	});

}

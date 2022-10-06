import { gsap } from 'gsap';

export default () => {

	const tickerLines = document.querySelectorAll('.js-ticker');
	if (!tickerLines.length) return;

	gsap.fromTo(tickerLines, {
		x: '0',
		force3D: true,
	}, {
		x: '-50%',
		force3D: true,
		repeat: -1,
		ease: "none",
		duration: 60,
	})

}

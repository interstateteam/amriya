import { setCookie, getCookie } from './../../helpers/cookie-scripts';

export default () => {

	const modal = document.querySelector('.js-cookies-modal');
	const accept = document.querySelector('.js-accept-cookies');

	if (!getCookie('cookiesAgree')) {
		modal.classList.remove('cookies--hidden');
	}

	accept.addEventListener('click', () => {
		modal.classList.add('cookies--hidden');

		const today = new Date();
		setCookie('cookiesAgree', 'true', new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14))
	})

}

import customSelect from './../../helpers/custom-select';
import datepicker from 'js-datepicker';

export default () => {

	customSelect({
		dropdownProps: {
			showElements: 6
		}
	});

	countInput();

	selectDate();

}

function countInput() {

	const fields = document.querySelectorAll('.js-count-input');
	if (!fields.length) return;

	fields.forEach(field => {

		const input = field.querySelector('input');
		const plus = field.querySelector('.js-count-plus');
		const minus = field.querySelector('.js-count-minus');

		let currValue = +input.value;

		plus.addEventListener('click', () => {
			currValue++;
			input.value = currValue;
		});

		minus.addEventListener('click', () => {
			currValue--;
			if (currValue < 0) currValue = 0;
			input.value = currValue;
		});

	});

}

function selectDate() {
	const selStart = '.js-datepicker-start';
	const selEnd = '.js-datepicker-end';
	if (!document.querySelector(selStart) || !document.querySelector(selEnd)) return;

	const svgLeft = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20"><path d="M12 .2C9.2 3.4 6.2 8.8 5.2 10c1 1.2 4 6.6 6.8 9.8l-.2.2C9 16.8.4 10.4 0 10c.4-.4 9-6.8 11.8-10l.2.2z"/></svg>`;
	const svgRight = `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20"><path d="M0 19.8c2.8-3.2 5.8-8.6 6.8-9.8-1-1.2-4-6.6-6.8-9.8L.2 0C3 3.2 11.6 9.6 12 10c-.4.4-9 6.8-11.8 10l-.2-.2z"/></svg>`;

	const options = {
		position: 'c',
		disableYearOverlay: true,
		showAllDates: true,
		formatter: (input, date, instance) => {
			const month = date.getMonth() + 1;
			const day = date.getDate();
			const year = `${date.getFullYear()}`.slice(2);
			input.value = `${month} - ${day} - ${year}`;
		},
		onShow: instance => {
			setTimeout(() => {
				instance.calendarContainer.style.pointerEvents = 'auto';
			}, 100)
		},
		onHide: instance => {
			setTimeout(() => {
				instance.calendarContainer.style.pointerEvents = '';
			}, 100)
		},
		onMonthChange: instance => {
			instance.calendarContainer.querySelector('.qs-left').insertAdjacentHTML('beforeend', svgLeft);
			instance.calendarContainer.querySelector('.qs-right').insertAdjacentHTML('beforeend', svgRight);
		}
	};

	const pickerStart = datepicker(selStart, options);
	const pickerEnd = datepicker(selEnd, options);

	document.querySelectorAll('.qs-left').forEach(btn => {
		btn.insertAdjacentHTML('beforeend', svgLeft);
	});

	document.querySelectorAll('.qs-right').forEach(btn => {
		btn.insertAdjacentHTML('beforeend', svgRight);
	});
}

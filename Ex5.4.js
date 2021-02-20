const toWeirdCase = (str) => {
	let arr = str.split('');
	arr = arr.map((el, i) => {
		if (el === ' ') {
			return el;
		} else if (i % 2 === 0) {
			return el.toUpperCase();
		} else {
			return el.toLowerCase();
		}
	});
	return arr.join('');
};

console.log(toWeirdCase('Weird string case'));

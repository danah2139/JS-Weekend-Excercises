const summation = (num) => {
	let sum = 0;
	if (num > 0) {
		for (let i = 1; i <= num; i++) {
			sum += i;
		}
		return sum;
	}
	return 'not positive number';
};
console.log(summation(8));

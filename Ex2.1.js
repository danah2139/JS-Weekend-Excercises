const arr = [10, 343445353, 3453445, 3453545353453];
const sumOfTwoLowestPositiveNumbers = (arr) => {
	let i = 0;
	while (i < arr.length) {
		if (typeof arr[i] !== 'number' || arr[i] < 0) {
			arr.splice(i, 1);
		} else {
			i++;
		}
	}
	let min = arr.reduce((acu, curr) => {
		return curr < acu ? curr : acu;
	});
	let index = arr.indexOf(min);
	arr.splice(index, 1);
	let sum = min;
	min = arr.reduce((acu, curr) => {
		return curr < acu ? curr : acu;
	});
	sum += min;
	return sum;
};
console.log(sumOfTwoLowestPositiveNumbers(arr));

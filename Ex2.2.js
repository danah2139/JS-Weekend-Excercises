const arr = [1, 0, 1, 1];
const convert2Binary = (arr) => {
	arr.reverse();
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		num += arr[i] * Math.pow(2, i);
	}
	return num;
};

console.log(convert2Binary(arr));

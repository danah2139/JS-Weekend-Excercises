const maskify = (str) => {
	let arr = str.split('');
	for (let i = 0; i < arr.length - 4; i++) {
		arr[i] = '#';
	}
	return arr.join('');
};
console.log(maskify('64607935616'));

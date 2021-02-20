const accum = (str) => {
	let arr = str.split('');
	let newStr = '';
	for (let i = 0; i < arr.length; i++) {
		newStr += arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i);
		if (i < arr.length - 1) {
			newStr += '-';
		}
	}
	return newStr;
};

console.log(accum('abcd'));

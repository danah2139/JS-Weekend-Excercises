const longest = (a, b) => {
	let str = a + b;
	let arr = str.split('');
	arr.sort();
	let i = 0;
	while (i < arr.length) {
		if (arr[i] === arr[i + 1]) {
			arr.splice(i, 1);
		} else {
			i++;
		}
	}
	return arr.join('');
};

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));

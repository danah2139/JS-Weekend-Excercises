const repeatStr = (count, str) => {
	let i = 0;
	let newStr = '';
	while (i < count) {
		newStr += str;
		i++;
	}
	return newStr;
};

console.log(repeatStr(5, 'Hello'));

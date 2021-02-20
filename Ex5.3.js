const toCamelCase = (str) => {
	let arr = str.split(/[-_]/g);
	console.log(arr);
	let newarr = arr.splice(0, 1);
	for (let i = 0; i < arr.length; i++) {
		splitArr = arr[i].split('');
		let combArr = splitArr.slice(1).join('');
		arr[i] = splitArr[0].toUpperCase() + combArr;
	}
	let newStr = newarr.join('');
	newStr += arr.join('');
	return newStr;
};

console.log(toCamelCase('the_stealth_warrior'));

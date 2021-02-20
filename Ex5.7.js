const shortestWord = (str) => {
	let arr = str.split(' ');
	return arr.reduce((acc, cur) => {
		return cur.length < acc ? cur.length : acc;
	}, arr[0].length);
};

console.log(shortestWord('hello danas cohenss'));

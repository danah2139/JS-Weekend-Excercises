const longesttWord = (str) => {
	let arr = str.split(' ');
	let len = arr.reduce((acc, cur, currentIndex) => {
		if (cur.length > acc) {
			i = currentIndex;
			return cur.length;
		} else {
			return acc;
		}
	}, arr[0].length);
	return arr.filter((el) => {
		if (el.length === len) return el;
	});
};
console.log(longesttWord('hello dana cohen'));

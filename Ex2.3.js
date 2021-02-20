const findNextSquare = (num) => {
	let sqrt = Math.sqrt(num);
	if (sqrt % 1 === 0) {
		sqrt++;
		return Math.pow(sqrt, 2);
	} else {
		return -1;
	}
};
console.log(findNextSquare(625));

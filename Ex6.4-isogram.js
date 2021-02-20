const isIsogram = (str) => {
	if (str === ' ') {
		return true;
	}
	let arr = str.split('');
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i].toLowerCase() === arr[j].toLowerCase()) {
				return false;
			}
		}
	}
	return true;
};

console.log(isIsogram('moOse'));

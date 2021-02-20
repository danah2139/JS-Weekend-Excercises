const arr = [0.55, 0, 0];
const findUnique = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] !== arr[i + 1]) {
			if (arr[i + 1] !== arr[i + 2]) {
				return arr[i + 1];
			} else {
				return arr[i];
			}
		}
	}
};

console.log(findUnique(arr));

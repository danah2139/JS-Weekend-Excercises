const filter = (arr, callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], i)) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

const forEach = (arr, callback) => {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i);
	}
};

const map = (arr, callback) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i], i));
	}
	return newArr;
};

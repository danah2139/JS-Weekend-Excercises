const arr = [
	[2, 0],
	[4, 1],
	[8, 5],
	[0, 2],
	[1, 0],
];

// option 1
// const numberOfPeopleInBus = (arr) => {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		if (sum >= 0) {
// 			sum += arr[i][0];
// 			sum -= arr[i][1];
// 		} else {
// 			return 'error';
// 		}
// 	}
// 	return sum;
// };

// option 2
const numberOfPeopleInBus = (arr) => {
	return arr.reduce((acc, curr) => {
		return acc >= 0 ? acc + (curr[0] - curr[1]) : 'error';
	}, 0);
};

console.log(numberOfPeopleInBus(arr));

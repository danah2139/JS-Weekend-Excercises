// recuresive way
const fibonacci = (n) => {
	if (n < 2) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(6));

// function fib(n) {
// 	return new Array(n).fill(1).reduce((arr, _, i) => {
// 		arr.push(i <= 1 ? i : arr[i - 2] + arr[i - 1]);
// 		return arr;
// 	}, []);
// }

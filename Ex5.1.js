const trim = (str) => {
	arr = str.split('');
	arr.pop();
	arr.splice(0, 1);
	return arr.join('');
};

console.log(trim('mjhbhjbm'));

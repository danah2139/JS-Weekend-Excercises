function tribonacci(signature, n) {
	var trib = signature;
	for (i = 3; i < n; i++) {
		trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
	}
	return trib;
}

console.log(tribonacci([0, 1, 1], 6));

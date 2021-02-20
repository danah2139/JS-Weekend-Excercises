const basicOp = (opertion, num1, num2) => {
	let str = (num1 + opertion + num2).toString();
	return eval(str);
};

console.log(basicOp('*', 5, 5));

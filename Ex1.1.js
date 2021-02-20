const obj = {
	boolMethod(bool) {
		return bool ? 'true' : 'false';
	},
};

console.log(obj.boolMethod(true));

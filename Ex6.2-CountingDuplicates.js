const countDuplicates = (str) => {
	let characters = new Map();
	let arr = str.split('');

	arr.forEach((character) => {
		character = character.toLowerCase();
		if (characters.has(character))
			characters.set(character, characters.get(character) + 1);
		else {
			characters.set(character, 1);
		}
	});
	let max = {};
	max['no characters repeats more than once'] = 1;
	//max.value = 1;

	for (const [key, value] of characters) {
		if (value > Object.values(max)) {
			max = {};
			max[key.toString()] = value;
		} else if (value == Object.values(max) && value !== 1) {
			max[key.toString()] = value;
		}
	}
	return max;
};

console.log(countDuplicates('aabbcde'));

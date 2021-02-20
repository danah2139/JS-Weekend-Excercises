const countDuplicates = (str) => {
	let characters = new Map();
	let arr = str.split('');

	arr.forEach((character) => {
		character = character.toLowerCase();
		if (characters.has(character))
			characters.set(character, characters.get(character + 1));
		else {
			characters.set(character, 1);
		}
	});
	let max = 0;
	let maxKey = '';

	for (const [key, value] of counter) {
		if (value > max) {
			max = value;
			maxKey = key;
		}
	}
};

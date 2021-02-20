const nb_year = (p0, percent, aug, p) => {
	let i = 0;
	while (p0 <= p) {
		p0 = p0 + (percent / 100) * p0 + aug;
		i++;
	}
	return i;
};
console.log(nb_year(1500000, 2.5, 10000, 2000000));

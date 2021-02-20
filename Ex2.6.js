const centuryFromYear = (year) => {
	let cent = parseInt(year / 100);
	return year % 100 > 0 ? cent + 1 : cent;
};

console.log(centuryFromYear(2000));

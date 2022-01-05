module.exports = function toReadable (number) {
	let result = "";
	let str = number.toString();
	let length = str.length;

	let less10 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	let less20 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	let less100 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	for(let i = 1; i <= length; i++) {
		let digit = +str[length - i];

		switch (i) {
			case 1:
				result = less10[digit]; 
				break;
			case 2:
				if (digit == 1) {
					let prevDigit = +str[length - i + 1];
					result = less20[prevDigit];
				} else if (digit > 1) {
					if (result !== "zero") {
						result = less100[digit] + " " + result;
					} else {
						result = less100[digit];
					}
				}
				break;
			case 3:
				if (result !== "zero") {
					result = less10[digit] + " hundred " + result;
				} else {
					result = less10[digit] + " hundred";
				}
				break;
		}
	}

	return result;
}

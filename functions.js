function power(a, b) {
	var result = 0;
	for (var i = 0; i < b; i++) {
		result += a*b;
	}
	return result;
}

function factorial(n) {
	var result = 0;
	for (var i = 0; i < n; i++) {
		result += i;
	}
	return result;
}

function vulnerable(n) {
	var iterator = power(n, n);
	var second_i = factorial(n);

	var result = 0;
	for (var i = 0; i < n; i++) {
		for (var j = 0; j < second_i; j++) {
			result = i/j;
		}
	}
	return result;
}
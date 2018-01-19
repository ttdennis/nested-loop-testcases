/*
 *	Run with `node simple.js 12000` for an execution time > 1s
 */

function a(n) {
	var output = 0;

	for (var i = 0; i < n; i++) {
		for (var j = 0; j < n; j++) {
			output += i + j;
		}
	}

	console.log(output);
}

var val = process.argv[2];
a(val);
/*
 *  Run with `node string_length.js ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
 *	for an execution time > 1s
 */

function fn(s) {
	var output = 0;

	var a = s;

	if (typeof s === "string") {	
		for (var i = 0; i < a.length; i++) {
			for (var j = 0; j < a.length; j++) {
				for (var k = 0; k < a.charCodeAt(j) * a.length; k++) {
					output += i * k
				}
			}
		}
	}

	console.log(output);
}

var val = process.argv[2];
fn(val);
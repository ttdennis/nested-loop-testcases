const fs = require('fs');

// Create test file
const randStr = Math.random().toString(36).substring(2, 15) + 
	Math.random().toString(36).substring(2, 15);
fs.writeFileSync("./test.txt", randStr.repeat(2048));

let outStr = "";

// Do loop stuff
fs.readFile('test.txt', (err, data) => {
	data = data.toString().split("");
	for (d of data) {
		const num = d.charCodeAt(0);
		for (let i = 0; i < num; i++) {
			outStr += d;
		}
	}
	console.log(outStr);
});

// Clean up
fs.unlinkSync("./test.txt");
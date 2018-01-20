function vuln(a, b, c) {
	let num = a + b;
	let barrier = a * b * c;
	
	while(barrier > num) {
		barrier -= num;
		for(let i = 0; i < barrier; i++) {
			barrier += i * barrier;
		}
	}
}
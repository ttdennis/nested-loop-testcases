function Obj(){};

Obj.prototype.vuln = function (a) {
	a.forEach((o, i) => {
		for(var i = 0; i < o.length; i++) {
			console.log(o[i]);
		}
	});
};

const o = new Obj();
let val = process.argv[2];
if (typeof val !== "Array") 
	val = [val];

o.vuln([val]);
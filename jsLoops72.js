'use strict';

//x1 = (x0 + a/x0)/2
var squareRoot = function(a){
	let x1 = 0; // x1
	let x2 = 0; // X2
	let x3 = a / 2; // X3 
	
	while (Math.abs(x1 - x2) >= 0.0001 || Math.abs(x2 - x3) >= 0.0001) {
		x1 = x2;
		x2 = x3;
		x3 = (x2 + a/x2) /2;
	}
	return x3;
}; 

//var a = Number(prompt('Write a number and find its square root:'));

console.log(squareRoot(9));


'use strict';

//array
var flip;
var arrRoll = [0, 0, 0, 0, 0, 0, 0];


var play = function(a) {
	Math.floor(Math.random()* a + 1);
	
	while (flip = play(a)){
		return arrRoll[flip]++;
	}
};

//var a = Number(prompt('How many times do you want to play?'));
var a = 6;
let i = 1;
console.log('Der blev slået ' + arrRoll[i++]);



document.write('Is ' + n + ' a prim number? = ' + isPrime());







'use strict';

// a = what do we play
var play = function(a) {
		Math.floor(Math.random()* a + 1);
};

//a = what do we play
//b = how many times
var howManyTimes = function(b, a) {
	
	var flip;
	var arrRoll = []; //array
	
	let i = 0;
	while (i <= a) { 
        arrRoll[i] = 0;
        i ++;
	}
	
    i = 0;
    while (i < a) { 
        flip = play(a);
        arrRoll[flip] ++;
        i ++;
    }
	
};


//var a = Number(prompt('How many sides do it have?')); // what do we play
//var b = Number(prompt('How many times do you want to play?')); // how many times

console.log(howManyTimes(2,6));

//document.write('Is ' + n + ' a prim number? = ' + isPrime());




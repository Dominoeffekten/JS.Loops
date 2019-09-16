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
	while (i <= a) {        // dim and init array
        arrRoll[i] = 0;
        i += 1;
    }

    i = 0;
    while (i < n) {         // play n times
        flip = play(a);
        arrRoll[flip] += 1;
        i += 1;
    }
	
};


//var a = Number(prompt('How many sides do it have?')); // what do we play
//var b = Number(prompt('How many times do you want to play?')); // how many times
var a = 6; // what do we play
var b = 2; // how many times

console.log(howManyTimes);

//document.write('Is ' + n + ' a prim number? = ' + isPrime());




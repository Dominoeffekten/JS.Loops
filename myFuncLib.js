// Assignment JS.Loops.0
'use strict'; 
var n = Number(prompt('Write a number and get the facortial: '));

var fact = function(n) {
	if (n <= 1) { // hvis n er mindre eller lig med end 1 giver den 1
		return 1;
	}
    else { // hvis n er større end 1 vil den udregne factorial tallet
        return n * (fact(n - 1)); // fact(n-1) - den udregner det hele igennem igen med et mindre tal end n
    }
};
console.log('The number is: ' + fact(n));

// Assignment JS.Loops.1

'use strict'; 
var n = Number(prompt('Write a number and get the fibo number: '));

var fibo = function(n) {
	if(n === 0 || n === 1) {
		return n;
	} else {
		return fibo(n - 1) + fibo(n - 2);
	}	
};
console.log('The number is ' + fibo(n));


// Assignment JS.Loops.3
'use strict';
var r = Number(prompt('Indtast roden: '));
var e = Number(prompt('Indtast det opløftede tal: '));

var pow = function(r, e) {
	if ( e <= 1 ){
		return r * e;
	} else {
		return r * pow(r, e - 1);
	}
};
console.log('Svaret er ' + pow(r, e));


// Assignment JS.Loops.73 - mangler
'use strict';
let res = 1;
let i = 0;

var powi = function(r, e) {
	while ( i < e ) {
		res *= r;
		e += 1;
		
	}
	return res;
};

var r = Number(prompt('Indtast roden: '));
var e = Number(prompt('Indtast det opløftede tal: '));

console.log('Svaret er ' + powi(r, e));

// Assignment JS.Loops.74 - mangler
'use strict'; 
var n = Number(prompt('Write a number and get the facortial: '));

var fact = function(n) {
	if (n <= 1) { // hvis n er mindre eller lig med end 1 giver den 1
		return 1;
	}
    else { // hvis n er større end 1 vil den udregne factorial tallet
        return n * (fact(n - 1)); // fact(n-1) - den udregner det hele igennem igen med et mindre tal end n
    }
};
console.log('The number is: ' + fact(n));






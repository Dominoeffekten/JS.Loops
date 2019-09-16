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
	}else {
		return fibo(n - 1) + fibo(n - 2);
	}	
};
console.log('The number on the place ' + n + ' is '+ fibo(n));


// Assignment JS.Loops.3
'use strict';
var r = Number(prompt('Indtast roden: '));
var e = Number(prompt('Indtast det opløftede tal: '));

var pow = function(r, e) {
	if ( e <= 1 ){
		return r * e;
	}if (e === 0) {
		return 1;
	}else {
		return r * pow(r, e - 1);
	}
};
console.log('Svaret er ' + pow(r, e));


// Assignment JS.Loops.73


/*var powi = function(r, e) {
	while ( i <= e ) {
		res *= r;
		e += 1;
		
	}
	return res;
	i++;
};

	*/

'use strict';
var r = Number(prompt('Indtast roden: '));
var e = Number(prompt('Indtast det opløftede tal: '));

var powi = function(r, e) {

while ( e <= 1  ) {
	if (e === 0) {
		return 1;
	}
	return r * e;
	e++;
}
	return r * powi(r, e - 1);
};
console.log( r + ' opløftet i ' + e + ' er ' + powi(r, e));



// Assignment JS.Loops.74
'use strict'; 
var n = Number(prompt('Write a number and get the facortial: '));

var facti = function(n) {
	while (n <= 1) {
		return 1;
		n++;
	}
	return n * (facti(n - 1));
};
console.log('The number is: ' + facti(n));





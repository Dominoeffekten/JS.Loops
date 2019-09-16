
'use strict'; 

var n = Number(prompt('Write a prime number: '));
let i = 2;

var isPrime = function(p){
	while (i < n){ // virker hvis n er større end i(2)
		if(n % i === 0){ // hvis n går op i i(2) vil den give falsk - hvis tallet er for højt, og ikke går op i 2, vil den kører loop igennem igen
			return false;
		} else {
			return true;
		}
	i++; //lægger hele tiden 1 til i til den opnår n
	}
};
console.log(isPrime());

document.write('Is ' + n + ' a prime number? = ' + isPrime());




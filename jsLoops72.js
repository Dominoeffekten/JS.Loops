/*

Let’s say you are given a number, a, and you want to find its square root. One way to do that is to start with a rough guess about the answer, x0, and then improve the guess using this formula:

x1 = (x0 + a/x0)/2

For example, if we want to find the square root of 9, and we start with x0 = 6, then x1 = (6 + 9/6)/2 = 3.75, which is closer. We can repeat the procedure, using x1 to calculate x2, and so on. In this case, x2 = 3.075 and x3 = 3.00091. So it converges quickly on the correct answer. Write a method called squareRoot that takes a number as input and returns an approximation of the square root of the argument value, using this technique. You should not use Math.sqrt.

As your initial guess, you should use a / 2. Your method should iterate until it gets two consecutive estimates that differ by less than 0.0001. You can use Math.abs to calculate the absolute value of the difference.

Save the function in a file jsLoops72.js.
*/

'use strict';

var a = Number(prompt('Write a number and find its square root:'));
var xo = 6

var squareRoot = function(x1){
	if (){
		
		}
} Math.abs 

//x1 = (x0 + a/x0)/2
return (x0 + (a/x0)/2




//For each one these exercises identify the Big O. Once you have done so, put a counter
//variable and now check to see how the counter related to understanding the Big O for 
//each of these algorithms.

/*=================================================================================
/*
Your task is to step through the code thoughly with
the input provided. You should be able to describe what is happening in each step. 
Identify the Big O of this algorithm and be able to explain your answer. 
Finally use a counter to show how your the counter can be helpful in understanding the
run time of this algorithm.
*/

function generateBinary(n, i=0, toAdd='', s='') {
    counter++;
    s += toAdd;
    if (i === n) {
        console.log(s);
        return;
    }

    generateBinary(n, i+1, 0, s);
    generateBinary(n, i+1, 1, s);
}

generateBinary(3);


/*=================================================================================
Exercise 1 - Counting Sheep

Write a recursive program that counts how many sheep jumps over the fence. 
Your program should take a number as an input. That number should be the number 
of sheep you have. The program should diplay the number along with the msg "Another 
sheep jumps over the fence" until no more sheep left.
*/

/*
 * @function countSheep
 * @desc     Recursive program that counts how many sheep jumps over the fence. 
 * @param    {number} num - the number sheep 
 * @returns  
 * @display  displays how many sheep jumped over the fence
 */


function countSheep(num){
    //stopping condition of base case
    if(num === 0){
        console.log(`All sheep jumped over the fence`);
    } 
    //this is the recursive case
    //this will be executed until it reaches base case
    else{
        console.log(`${num}: Another sheep jumps over the fence`);
        countSheep(num-1);
    }
}
countSheep(10);

/*=================================================================================
Exercise 2 - Array double
Write a program that takes an array as input which contains an unknown set of numbers, 
and output an array which doubles the values of each item in that array. 
Test your solution by trying a handful of different arrays.
*/

/**
* Recursive program that doubles the values of each item in an array
* @param    an array
* @returns  an array with each elements doubled
*/
function double_all(arr) {
    if (!arr.length) {
        return [];
    }
    return [arr[0] * 2, ...double_all(arr.slice(1))];
}
var arr = [10,5,3,4];
console.log(double_all(arr));

/*=================================================================================
Exercise 3 - Reverse String

Write a program that reverses a string. Take a string as input, reverse the string, and return the new string.
*/

function reverse(str) {
    if (str.length < 2) {
        return str;
    }
    return reverse(str.slice(1)) + str[0];
}
console.log(reverse("tauhida"));

/*=================================================================================
Exercise 4 - Triangular Number

Calculates the nth triangular number.
A triangular number counts the objects that can form an equilateral triangle. 
The nth triangular number is the number of dots composing a triangle with n dots on a side, 
and is equal to the sum of the n natural numbers from 1 to n. 
This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45
                          *
            *           *    *
*     |   *   *  |   *    *    *  |
 1st     2nd             3rd             nth?  

*/
//Should always return n*(n+1)/2
function triangle(n) {
    if (n < 2) 
        return n;
    return n + triangle(n - 1);
}

/*=================================================================================
Exercise 5 - String Splitter

Split a string based upon a separator (similar to String.prototype.split).
*/

function split(str, sep) {
    var idx = str.indexOf(sep);
    if (idx == -1) 
        return [str];
    return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep))
}
console.log(split('1/12/2017', '/'));

/*=================================================================================
Exercise 6 - Binary Representation

Write a recursive function that prints out the binary representation of a given number. 
For example the program should take 3 as an input and print 11 as output, or 25 as an input 
and print 11001 as an output. Note that the binary representation of 0 should be 0. 
*/

/**
* Recursive program that prints the binary representation of a number
* @param   number 
* @returns  binary representation of that number
*/

function convertToBinary(num){
    if(num>0){
        let binary = Math.floor(num%2);
        return (convertToBinary(Math.floor(num/2))+ binary);
    }else{
        return '';
    }


}
console.log(convertToBinary(25));

/*=================================================================================
Exercise 7 - Anagrams

An anagram is any word or phrase that exactly reproduces the letters in another order. 
Write a program that creates an anagram (listing all the rearrangements of a word) of a given word. 
For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, 
and non-words like tsae.

Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
For example, given east, use e as a prefix and you would place e in front of all six permutations of ast 
— ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. 
Continue this way until you find all the anagrams for east. There should be 24 of them.
*/

function printAnagram(word){
    console.log(`The word for which we will find an anagram is ${word}`);
    anagrams(' ', word);

}
function anagrams(prefix, str){
    if(str.length <= 1){
        console.log(`The anagram is ${prefix}${str}`);
    } else {
        for(let i=0; i<str.length; i++){
            let currentLetter = str.substring(i, i+1);
            let previousLetters = str.substring(0,i);
            let afterLetters = str.substring(i+1);
            anagrams(prefix+currentLetter, previousLetters+afterLetters);
        }
    }

}
printAnagram("east");

/*
Exercise 8 - Animal Hierarchy
*/

const AnimalHierarchy = [
    {id: 'Animals','Parent': null},
    {id: 'Mammals','Parent': 'Animals'},
    {id: 'Dogs','Parent':'Mammals' },
    {id: 'Cats','Parent':'Mammals' },
    {id: 'Golden Retriever','Parent': 'Dogs'},
    {id: 'Husky','Parent':'Dogs' },
    {id: 'Bengal','Parent':'Cats' }
]

// ==============================
function traverse(AnimalHierarchy, parent) {
    let node = {};
    AnimalHierarchy.filter(item => item.Parent === parent)
                   .forEach(item => node[item.id] = traverse(AnimalHierarchy, item.id));
    return node;  
}
console.log(traverse(AnimalHierarchy, null));


/*=================================================================================
Exercise 9 - Factorial

Write a recursive program that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number 
between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
*/
function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

console.log(factorial(5)); //120

/*=================================================================================
Exercise 10 - Fibonacci

Write a recursive program that prints the fibonacci sequence of a given number. 
The fibonnaci sequence a series of numbers in which each number is the sum of the two preceding numbers. 
For example the 7th fibonacci number in a fibonaci sequence is  13. The sequence looks as follows: 1 1 2 3 5 8 13.

*/

function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}
console.log(fibonacci(7));

/*=================================================================================
Exercise 11 - Organization Chart
Write a recursive program that prints the following organization chart. Your output should show the output to be 
as shown below with proper indentation to show the hierarchy.
*/
var organization = {
	"Zuckerberg": {		
		"Schroepfer": {
			"Bosworth": {
				"Steve":{},
				"Kyle":{},
				"Andra":{}
			},
			"Zhao": {
				"Richie":{},
				"Sofia":{},
				"Jen":{}
			},
			"Badros": {
				"John":{},
				"Mike":{},
				"Pat":{}
			},
			"Parikh": {
				"Zach":{},
				"Ryan":{},
				"Tes":{}
			}
		},
		"Schrage": {
			"VanDyck": {
				"Sabrina":{},
				"Michelle":{},
				"Josh":{}
			},
			"Swain": {
				"Blanch":{},
				"Tom":{},
				"Joe":{}
			},
			"Frankovsky": {
				"Jasee":{},
				"Brian":{},
				"Margaret":{}
			}
		},
		"Sandberg": {
			"Goler": {
				"Eddie":{},
				"Julie":{},
				"Annie":{}
			},
			"Hernandez": {
				"Rowi":{},
				"Inga":{},
				"Morgan":{}
			},
			"Moissinac": {
				"Amy":{},
				"Chuck":{},
				"Vinni":{}
			},
			"Kelley": {
				"Eric":{},
				"Ana":{},
				"Wes":{}
			}
}}};
function traverseB(node, indent=0) {
	for (var key in node) {
		console.log(" ".repeat(indent), key);
		traverseB(node[key], indent + 4);
	}
}

console.log(traverseB(organization));

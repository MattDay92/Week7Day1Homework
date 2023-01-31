console.log('hello world')
// Javascript Print Statement
// You can run your JS code in a browser using inspect -> console

/* 
This is a 
multi-line
comment
*/

x = 1
y = 2

z = x + y
console.log(z)

// in JS, you need to declare a variable
// This is the PROPER WAY (but out of date - use LET and CONST)
var x = 1
var y = 2
var z = x + y

console.log(typeof z)
// number
var w = 4.4
console.log(typeof w)
// number -- no distinction in JS between integers and floats

// The semicolon defines the end of a line - where a function stops
// Javascript is a compiled language. - Does not run top to bottom - does it all at once
// You don't need to worry about indentation;

var name = 'Shoha'
var name2 = "Brandt"
var name3 = `Brendan`

console.log(name, name2, name3)
console.log(typeof name) // The line through just means that name was a reserved variable but we've redefined it
// String

// Lists in JS are known as Arrays
var names = ["Shoha", "Brandt", "Brendan"]
console.log(names)
console.log(typeof names)
// object - what does this mean?  Vague.  
// To check if something is an array
Array.isArray(names) // is names an array?
console.log(Array.isArray(names))
// True


// Dictionaries in JS are known as a JS Object (JSON) - Javascript Object Notation
var first_name = "Shoha"

var obj = {
    'content-type': 'application/json',
    "Grades": [100, 100, 100],
    first_name : first_name
};

console.log(obj)
// ...first_name: "Shoha"


// JS HOISTING
console.log(random)
var random = 'random values...'
// undefined
console.log(random)
// random values...

// Undeclared, Undefined, null
var num; //I am declaring num that num exists
console.log(num) //Undefined - num is a variable but there's nothing there
num = 1; //This is assigning value to num
console.log(num)
num = null
console.log(num)

// instead of using VAR, use LET and CONST
// LET and CONST do not hoist.

// console.log(random2)
// // It runs into an error before defining the variable - allows for you to see and fix errors
// let random2 = 'random values...'
// console.log(random2)

// LET and CONST are both used as variable declarations
// It is the newer ES6 SYNTAX

let fave_num = 10;
const fave_color = 'blue';

// You cannot reassign value to CONST

console.log(fave_num)
console.log(fave_color)

fave_num += 13
console.log(fave_num)
// This works fine

// fave_color += "and yellow"
// console.log(fave_color)
// TypeError: Assignment to a Constant Variable

// Use CONST until you have to use LET
// LET and CONST are also BLOCK LEVEL DECLARATIONS
// You only have to use LET or CONST the first time you use the variable
fave_num = 11
console.log(fave_num)


// ------MATH OPERATIONS-------//

// addition
console.log('-----------------MATH STUFF-----------------')

let sum = 5 + 6;
console.log(sum)
sum += 3
console.log(sum)
sum ++; //increments by 1
sum ++;
console.log(sum)

// subtraction
let diff = 15-7;
console.log(diff);
diff -= 4;
console.log(diff);
diff --; //subtracts 1
console.log(diff)

//multiplication
let prod = 5*5;
console.log(prod);
prod *= 2
console.log(prod);

//division
let quo = 100/4;
console.log(quo);
quo /= 5;
console.log(quo);

// exponential

let square = 5**2;
console.log(square);
square **=2;
console.log(square);

// more math stuff
// don't need to import math
const floor = Math.floor(24.7); //rounds down to 24
console.log(floor);

const ceil = Math.ceil(24.7); //rounds up to 25
console.log(ceil);

//interesting behavior
const num1 = 2;
const num2 = "3";
const res = num1 + num2;
console.log(res);
// 23 -- it concatenated the numbers and put them side by side
console.log(typeof res);
// string type  

//parseInt() and parseFloat()
console.log(parseInt('24.7'));
// Integer:  24
console.log(parseFloat('24.7'));
// Float:  24.7

// ------------------JAVASCRIPT FUNCTIONS ---------------------//
console.log('----------------------FUNCTIONS-----------------------')

//regularly named functions
function nameOfFunction(param1, param2){
    // code goes here
    const output = param1 + param2

    return output
};
// The curly braces is the JS equivalent as indentation

console.log(nameOfFunction(100, 200))
// 300  
console.log(nameOfFunction('Le', 'Bron'))
// LeBron


//Nameless Function - but storing it to some variable
const squareMe = function (num){
    return num**2
}
console.log(squareMe(7))
// 49


// Arrow Function is the new ES6 syntax way of creating functions - but there's nothing wrong with 'function'
// format: () => {}
// (parameters go here) => {This is the code block}
const cubeMe = (num)=>{
    return num**3
};
console.log(cubeMe(3))
// 27

// arrow function with no parameters
const a1 = ()=>{return 'this function does nothing'}
console.log(a1())

// arrow function with one parameter
// if only one param, the parenthesis are optional
const a2 = num => {return num**2};
console.log(a2(9))

// arrow function with two or more parameters
// must have parenthesis
const a3 = (num1, num2) => {return num1 + num2};
console.log(a3(9, 999))

// arrow function with SINGLE LINE (meaning we only have a return line)
// the curly braces become optional and no return keyword needed
const a4 = (num1, num2) => num1 + num2;
console.log(a4(9, 999))

// SCOPE is still a thing
let test = 1;
const testFunc = ()=>{
    let test = 4;
    console.log(test)
}
console.log(test)
// output = 1

testFunc();  //must have the semicolon here - try to just add them all the time
// output = 4


// self invoking function
(() => {
    console.log('this was self invoked... I created a nameless function and ran it')
})();
// another one with function keyword
(function(){console.log("DJ KHALED")})();


//closure
const outer = () => {
    let counter = 0  // private variable
    const inner = () => {
        counter ++
        return counter // setter function
    };
    return inner
};

const addToCounter = outer()
console.log(addToCounter())
console.log(addToCounter())
console.log(addToCounter())
console.log(addToCounter())


console.log('-------------------IF STATEMENTS--------------------')
//---------------IF STATEMENTS ------------------//

// Syntax:  if (condition) {code block}

const ifTest = (num) => {
    if (num < 10){
        console.log('small number')
    }
    else if(num < 20) {
        console.log('medium number')
    }
    else {
        console.log('BIG number')
    }
};

ifTest(5);
// Output:  'small number'
ifTest(15);
ifTest(25);


// ternary operator
// PYTHON: (DO THIS IF TRUE) if CONDITION else ( DO THIS IF FALSE )
// JS:  (CONDITION) ? (DO THIS IF TRUE) : (DO THIS IF FALSE)

const getFee1 = (isMember) => {return isMember ? '$2.00' : '$10.00'}

console.log(getFee1(true)) //NOTE:  in JS, BOOLEAN true or false are spelled in lowercase
// output:  '$2.00'


// ---------------------LOOPS -----------------------//
console.log('------------------FOR LOOPS-------------------')

// SYNTAX:   for (let variable; condition; incrementor) { codeblock }
const countByOne = (stop) => {
    for (let i=0; i<stop; i++) {
        if (i == 3) {
            console.log('fave number', i)
        }
        else {
            console.log(i)
        }
    }
};

countByOne(9)

const goThroughArray = (arr) => {
    for (let i=0; i<arr.length; i ++){
        const person = arr[i]
        console.log(person, i) 
    }
};

goThroughArray(['Shoha', 'Brandt', 'Aubrey', 'Brenden'])

// ES6 VERSION
// for of SYNTAX
// copying python

const goThroughArray2 = (arr) => {
    for (let person of arr){ // in arr would give back the indexes
        console.log(person) 
    }
};

goThroughArray2(['Matt', 'Todd', 'Calvin', 'Laurant'])



console.log('------------------WHILE LOOPS-------------------')
// WHILE LOOP
// SYNTAX:  while(condition) {codeblock};

const countUpTo = (num) => {
    let i = 0;
    while (i<num) {
        console.log(i)
        i ++;
    }
    console.log('done')
};
countUpTo(5)

// JS has an extra feature... Do While

// SYNTAX:  do { codeblock } while ( condition )
const countUpToDo = (num) => {
    let i = 0;
    do { //This will do the codeblock before even checking the condition - will always do it at least once
        console.log(i)
        i ++;
    }
    while (i<num) 
    console.log('done')
};
countUpToDo(5)


//Array Methods
let arrNames = ['Shoha', 'Brandt', 'Aubrey']
arrNames.push('Brenden') //python version of .append
console.log(arrNames)
console.log(arrNames[1])
// Brandt
// There is no negative indexing
console.log(arrNames[arrNames.length-1])
console.log(arrNames.toString())
console.log(arrNames.join('##'))
console.log(arrNames.slice(1, 3)) //starting at 1 but not including 3

// SPLICE

const output = arrNames.splice(1, 2, 'ghost of Brandt', 'ghost of Aubrey') // takes out indexes at 1 and 2 and replaces them
console.log(output, 'output')
console.log(arrNames, 'arrNames')

// can also be used as an insert arrNames.splice(1, 0, 'Nicole') would add Nicole at index 1











// Basics of JavaScript

/*
    Multiline Comment in JavaScript
    -- Variable Declaration in JavaScript --
    Primative Types: strings, integers, boolean, floats, arrays, objects(aka dictionaries in python)
    Functions in JavaScript
    Loops in JavaScript
*/

// String Variable
var first_name = 'Bill'

// Display our value to the JS Console
console.log(first_name)

// Integer Variable
var some_number = 31;

// Display Value
console.log(some_number);

// Float Variable
var some_float = 3.14;

console.log(some_float)

// Array Variable
var some_array = [1,2,3,4];

console.log(some_array)

// Object Variable
var some_object = { 'test': 'Please test me!'}

console.log(some_object)


// JAVASCRIPT HOISTING EXAMPLE
console.log(some_random_variable)
var some_random_variable = 'This is a random string';
console.log(some_random_variable)

// A Better of Declaring a variable is by using 'let' and/or 'const'
// Example console log
let full_name = first_name + ' Carter'
console.log(full_name)

const super_hero = 'Ironman';
console.log(super_hero); // 'Expected Output: 'Ironman'
// super_hero = 'Black Panther'; // Expected Output: TypeError 


/*
    Basic Math Operations in JS
*/
// Addition
let sum = 5 + 5; // let sum += 5
console.log(sum)

// Subtraction
let diff = 5 - 5; // let diff -= 5
console.log(diff)

// Multiplication
let product = 5 * 5; // let product *= 5
console.log(product)

// Division
let divide = 5 / 5; // let divide /= 5
console.log(divide)

// Exponetial
let square = 5 ** 2; // let square **= 2
console.log(square)

// More math Operations
// Finding the floor of a decimal
let find_floor = Math.floor(25.8)
console.log(find_floor)

// Find the ceiling of a decimal
let find_ceil = Math.ceil(25.8)
console.log(find_ceil)

// Mind Binder
let crazy_stuff = some_float + '4' // undefined, 7.14, 3.14+4, 3.144
console.log(crazy_stuff);

// Mind Binder 2
let crazy_stuff_2 = some_float + parseFloat('4') // undefined, 7.14, 3.14+4, 3.144
console.log(crazy_stuff_2)


// Using the let keyword - then trying to change the value
let nba_goat = 'Micheal Jordan';
console.log(nba_goat)

nba_goat = 'Kobe' // redeclaration of the above variable
console.log(nba_goat)

/*
    BAD REDECLARATION:
    let nba_goat = 'LeBron';
    console.log(nba_goat)
*/

/*
    ==== JAVASCRIPT FUNCTIONS ====
*/
// Regular named functions
function addNums(){
    let num = 4;
    let num2 = 5;

    return num + num2
}

// calling a function
console.log(addNums())

// Variable Named Function with parameters
let addNums2 = function(num, num2){
    return num + num2
}

// Call our function
console.log(addNums2(4,5))

function addNums3(x,y){
    return x + y
}

console.log(addNums3(4,5))

//ES6+ Arrow Function in JavaScript
let multiplyNums = () => {
    let num = 4;
    let num2 = 5;

    return num * num2
}

console.log(multiplyNums())

// ES6+ Arrow function WITH parameters (SINLGE PARAM)
/*
    Using a single parameter in an arrow funtion WITHOUT parens 
    can only be done with ONE parameter NOT if 2 or more are introduced.
*/
let cubed = (num) => {
    return num ** 3
}

let cubed2 = num => {
    return num ** 3
}
console.log(cubed(4))
console.log(cubed2(4))

// JavaScript Closure
// Self-Invoking Function
/*
    Our Console.log in the below example DOES NOt have to be provided
    -- we will just use this for an easier display of the output
*/

console.log((function(name){
    let hello = 'Hello Word' + name;
    return hello
})('Joel'))


// JavaScript Control Flow
// If Statement
function determineAge(age){
    if ( age < 18 ){
        return 'Minor'
    } else if ( age >= 18 && age <= 65 ){
        return 'Adult Not Retired Yet'
    } else {
        return 'Elderly Person - Retired'
    }
}

console.log(determineAge(31))


// JavaScript Ternary Operator
function determine_Age(age){
    return ( age < 18 ) ? 'Minor' : (age >= 18 && age <= 65) ?
    'Adult Not Retired Yet' : 'Elderly Person Retired'
}

console.log(determine_Age(31))

// Loops in JavaScript - For Loop
// For Loop Syntax -- for keyword(counter; condition ; incrementation/decrementation)
function countByOne(){
    // For Loop
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
}

console.log(countByOne())

function decreaseByOne(){
    // For Loop
    for(let i = 20; i > 0; i--){
        console.log(i)
    }
    return 'Decreasing has stopped'
}

console.log(decreaseByOne())

// While Loop - JavaScript
function count_With_While(){
    let i = 0 // Counter
    let text = '';

    // While Loop
    while(i < 10){
        text += `This number is...${i} \n`
        i++
    }
    return text
}

console.log(count_With_While() )


function count_with_do_while(){
    let i = 0 // Counter
    let text = '';

    //Do
    do {
        text += `This number is above...${i} \n`
        i++
    }

    while(i > 10)
    return text
}

console.log( count_with_do_while() )


/*
    Looping with Arrays and Arrary Methods, Array String Methods

*/

// Creation of Array: group_of_names
let group_of_names = ['Terry','Ben', 'Ash', 'Brock', 'Misty']

// Index for the first position == "Terry"
console.log(group_of_names[0]) // Terry

// Deconstruction of an array
let terry, ben, ash;
[terry, ben, ash] = group_of_names

// terry = group_of_names[0]
// ben = group_of_names[1]
// ash = group_of_names[2]

console.log(terry, ben, ash)

// method 1 for looping through an array
function show_all_names(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i])
    }
    return 'Done With List of Names'
}

console.log(show_all_names())

// Method #2 for looping through an array
console.log( group_of_names.forEach(
    element => console.log(element)
))

// JavaScript Array Method: Array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

/* JAVASCRIPT ARRAY METHODS: .map(), .filter(), .reduce() */

// .map()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i
    } else {
        return false
    }
})

// Long form version of .map()
let b_test_names = function (){
    let test_array = []
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_test_names())


console.log(b_names) // ['Ben','Brock']

// .reduce()
const nums = [2,4,6,8,10]
let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
} )

console.log(nums_reduced)

// .filter()
let long_names = group_of_names.filter( element => element.length > 4)

console.log(long_names)

// Array Methods with String Values: .join(), .slice(), .search(), .splice()
console.log(group_of_names.join(", "))

console.log(group_of_names.slice(0, 3)) // Terry, Ben, Ash

// .splice()
let captured_value = group_of_names.splice(0, 1, 'Freddie')
console.log(`This was removed based on our splice: ${captured_value}`)
console.log(group_of_names)

function replace_new_names(){
    // For Loop to get all names
    // And replace even indexes
    for(let i = 0; i < group_of_names.length; i++){
        if(i % 2 == 0){
            group_of_names.splice(i,1, 'Goku')
        }
    }
    return group_of_names
}

console.log(replace_new_names())

// Using .search and .slice on array values that are strings
console.log(group_of_names[0].search('G')) // index == 0 

// String.slice()
console.log(group_of_names[1].slice(0,group_of_names[1].length))



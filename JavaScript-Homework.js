//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(param1, param2){
    param1 = param1.replace(/,/g,"")
    string_list = param1.split(' ')
    console.log(string_list)
    for (let i = 0; i < string_list.length; i++) {
        if (param2.includes(string_list[i])) {
            console.log('Matched dog_name')
            
        }
        else {
            console.log('No Matches')
        }
    };
};

findWords(dog_string, dog_names);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (i = 0; i < arr.length; i++) {
        if (i % 2 == 1) {
            arr.splice(i, 1, 'even index')
        };
    };
    return arr
};

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]));

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]








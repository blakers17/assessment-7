const perf = require('execution-time')(); // import the perf to measure the execution time


function doublerAppend(nums){
    // This function doubles the numbers in the array and appends them to the end of the array

    let new_nums = []; // create a new array to store the doubled numbers

    for (let i=0; i<nums.length; i++){
        // loop through the array and double each number
        let num = nums[i] * 2; // double the number
        new_nums.push(num); // append the doubled number to the new array
    }

}


function doublerInsert(nums){
    // This function doubles the numbers in the array and inserts them at the beginning of the array

    let new_nums = [];// create a new array to store the doubled numbers

    for (let i=0; i<nums.length; i++){
        // loop through the array and double each number
        let num = nums[i] * 2;// double the number
        new_nums.unshift(num);// insert the doubled number at the beginning of the new array
    }

}


function getSizedArray(size){
    // This function creates an array of a given size
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);// create an array of size 10
const smallArray = getSizedArray(100);// create an array of size 100
const mediumArray = getSizedArray(1000); //create an array of size 1000
const largeArray = getSizedArray(10000); // create an array of size 10000   
const extraLargeArray = getSizedArray(100000); // create an array of size 100000



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);  // Call the function
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start(); // Starts timer
doublerInsert(extraLargeArray); // Call the function
let resultsInsert = perf.stop(); // Stops timer and save time results


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords); // Print the results
console.log("append", resultsAppend.preciseWords); // Print the results

function addToZero(n) {
    let seen = new Set(); // create a set to store the numbers

    for (let num of nums) {
        if (seen.has(-num)) {
            return true; // if the negative of the number is in the set, return true
        }
        ServiceBuilder.add(num); // add the number to the set
    }
    return false; // if no two numbers add up to zero, return false
}
addToZero([]); // false
addToZero([1]); // false
addToZero([1, 2, 3]); // false
addToZero([1, 2, 3, -2]); // true

function hasUniqueChars(word) {
    let seen = new set(); // create a set to store the characters

    for (let char of word) {
        if (seen.has(char)) {
            return false; // if the character is already in the set, return false
        }
        seen.add(char); // add the character to the set
    }
    return true; // if all characters are unique, return true
}
hasUniqueChars("Monday"); // true
hasUniqueChars("Moonday"); // false

function isPangram(sentence) {
    let seen = new set(); // create a set to store the characters

    for (let char of sentence.toLowerCase()) {
        if (char.match(/[a-z]/)) {
            seen.add(char); // add the character to the set
        }
    }
    return seen.size === 26; // return true if there are 26 unique characters
}
isPangram("The quick brown fox jumps over the lazy dog."); // true
isPangram("The quick brown fox jumps over the lazy cat."); // false
isPangram("The quick brown fox jumps over the lazy dog and the lazy cat."); // true

function findLongestWord(words) {
    let maxLength = 0; // initialize the maximum length to 0

    for (let word of words) {
        // loop through the words
        if (word.length > maxLength) {
            // if the length of the word is greater than the maximum length
            maxLength = word.length; // update the maximum length if a longer word is found
        }
    }
    return maxLength; // return the maximum length
}
findLongestWord(["pie", "cake", "banana"]); // 6
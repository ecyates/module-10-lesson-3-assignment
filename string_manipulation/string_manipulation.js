/* 
Task 1: Obtaining String Length 
- Create a string with some text content. 
- Use the `length` property to obtain the length of the string.

Task 2: Converting Cases 
- Create a string with mixed-case content. 
- Use the `toUpperCase` method to convert the string to uppercase. 
- Use the `toLowerCase` method to convert the string to lowercase.


Task 3: Extracting Substrings 
- Create a string with some text content. 
- Use the `substring` method to extract a substring from the original string.

Task 4: Splitting Strings 
- Create a string containing multiple words separated by spaces. 
- Use the `split` method to split the string into an array of words based on the space delimiter.
*/

// I created the random functions just to have a little more fun with the assignment
// This function generates a random number from 0 to the given max. 
function randomNumber(max) { 
    return Math.floor(Math.random()*max);
}

// This function generates a string of random fruits. The length of the words in the string will be 
// between 0 and 26. 
function getRandomWords() {
    const fruits = ["Apple", "banana", "Cherry", "date", "Elderberry", "fig", "Grape", "honeydew", "ItaPalmFruit", "jackfruit", 
        "Kiwi", "lemon", "Mango", "nectarine", "Orange", "pear", "Quince", "raspberry", "Strawberry", "tomato", 
        "UgliFruit", "velvetApple", "Watermelon", "yellowPassionfruit", "Zucchini"
    ];
    let wordCount = randomNumber(fruits.length);
    let result = [];
    for (let i = 0; i < wordCount; i++) {
        result.push(fruits[randomNumber(fruits.length)]);
    }
    return result.join(' ');
}

// Let's get our random sentence first and display it
let randomSentence = getRandomWords();
console.log("Initial sentence:"+randomSentence);
// Display the length
console.log("Length:", randomSentence.length);
// Display it as uppercase
console.log("Uppercase:", randomSentence.toUpperCase());
// Display it as lower case
console.log("Lowercase:", randomSentence.toLowerCase());
// Then we display the string split into individual words in an array 
let words = randomSentence.split(' ');
console.log("Split into individual words:", words);
// Let's sort it for fun!
randomSentence = words.sort().join(' ');
console.log('Sorted: ', randomSentence);

// Finally, we search the string for the word 'Mango'
let match = randomSentence.match('Mango');
// If it's there, we extract the first part of the string until the first mention of the word Mango. 
if (match) { 
    console.log("I'm looking for the word 'Mango', is it there? Yes!");
    let beforeMango = randomSentence.substring(0, match.index);
    console.log("Let's grab the sentence before the first mention of Mango:", beforeMango);
} else {  // If it doesn't exist, display that. 
    console.log("I'm looking for the word 'Mango', is it there? No!");
}

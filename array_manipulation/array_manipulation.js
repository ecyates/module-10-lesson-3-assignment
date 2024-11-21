/* 
Task 1: Adding and Removing Elements
- Create an array containing some initial elements.
- Use the push method to add a new element to the end of the array.
- Use the pop method to remove the last element from the array.

Task 2: Sorting Arrays
- Create an array of numbers in random order.
- Use the sort method to sort the array in ascending order.

Task 3: Applying Array Methods
- Create an array of numbers.
- Use the map method to double each number in the array.
- Use the filter method to filter out even numbers from the array.
- Use the reduce method to calculate the sum of all numbers in the array.
*/

// This function calculates a random number from 0 and the max parameter.
function randomNumber(max) { 
    return Math.floor(Math.random()*max);
}

// This function adds a number to the array (Task 1)
function addNumber(num) { 
    randomArray.push(num);
}

// This function removes a number from the array
function removeNumber(num) {
    let index = randomArray.indexOf(num);
    if (index !== -1) {
        randomArray.splice(index, 1); // Removes the element
        console.log(`Number "${num}" successfully removed.`);
    } else { 
        console.log(`Number "${num}" was not found.`);
    }
}

// Let's set up the random array
let randomArray = [];
// It'll have a random length from 0-100
let randomLength = randomNumber(100);
// And each number will be between 0 and 100
for(let i=0; i<randomLength;i++){
    addNumber(randomNumber(100));
}
// Display initial array
console.log('Initial Array: ', randomArray);

// Now let's sort the array and display the result (Task 2)
let sortedArray = randomArray.sort((a,b)=>a-b)
console.log('Sorted: ', sortedArray);

// Pop off the last element and display the result (Task 1)
let poppedElement = sortedArray.pop();
console.log(`Removed the last element '${poppedElement}': ${sortedArray}`);


// This was just fun for me to experiment with the for-each loop
// I created an array with multiples of five
const fivesArray = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]
// and a counter, set at zero
let totalFives = 0
console.log("Let's find unique multiples of five using a for-each loop:")
// Then iterated over the array and displayed the multiple of five if it was inside the array
fivesArray.forEach(x => {
    if (sortedArray.includes(x)){
        console.log(x);
        totalFives++;
    }
})
// And displayed the total unique multiples of five 
console.log('Total: ', totalFives);

// Filtered out the even numbers (Task 3)
console.log("Let's filter out even numbers from the array:")
let oddArray = sortedArray.filter(num=> num%2!==0);
console.log(oddArray);

// Doubled the numbers in the array (Task 3)
let doubledArray = oddArray.map(num=>num*2);
console.log('Doubled: ', doubledArray);

// I realized that the filter method would've made more sense to find the multiples of five
// But to compare apples-to-apples, I made it only include UNIQUE multiples of five
let fivesSubset = doubledArray.filter((num, index, array) => (num%5===0 && array.indexOf(num) === index));
console.log("Let's find unique multiples of five using the filter method: ")
console.log(fivesSubset);
console.log("Total: ", fivesSubset.length);

// Finally, let's calculate the sum of all the numbers in the array using reduce (Task 3)
let sum = doubledArray.reduce((acc, curr)=> acc+curr, 0);
console.log("Lastly, let's calculate the sum of all the numbers in our array: ", sum);
// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Create a variable `name` and give it the string value 'Dane'.
// If the `name` variable is the string 'Mary', log 'Hi, Mary!' to the console.
// Otherwise, log 'How do you do?' to the console.
// When run, this will log 'How do you do?' to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create a variable `secret` without initially giving it a value (its value will be undefined).
// Create a variable `code` and give it the numerical value 123.
// If code is the number 123, give `secret` the string value 'super' and double the value of `code`.
// If code is greater than 250, change the value of `secret` to the string 'duper'.
// Log the value of secret to the console.
// When run, this will log 'super' to the console because 2 * 123 = 246 < 250.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create a variable `isStudent` and give it the boolean value true.
// Create variables `age` and `zip` and give them the numerical values 34 and 55407, respectively.
// If `isStudent` is the boolean value true and `zip` is greater than 80000, log 'You're a student on the West Coast!' to the console.
// Otherwise, if `isStudent` is the boolean value false or `age` is less than 30, log 'What are your hobbies?' to the console.
// Otherwise, if `isStudent` is the boolean value true, log 'Welcome to Prime!' to the console.
// Finally, if none of the above conditions were met, log 'How about the weather?' to the console.
// Because `isStudent` is true and `zip` is not greater than 80000, the first two conditions will not be met but the third will.
// Therefore, when run, the program will log 'Welcome to Prime!' to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - `colorOne` should be 'blue'
let colorOne = 'red';
// FIX - `colorTwo` should be 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - we are missing a line setting `colorTwo` to 'purple', so it will retain its initial value.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - this is an using the OR operator (||), when it should be using the AND operator (&&)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// Correct but slightly confusing. Given the description above, it would be clearer to use `age >= minAge`.
if(minAge <= age) {
  // FIX - this should log 'enter' instead
  console.log('no entry');
// FIX - the else statement should either be removed or changed to 'no entry'.
} else {
  console.log('enter');
}
*/


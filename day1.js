// var name = "aveshehs";
// console.log(name);

// let age = 25;
// console.log(age);

// const role = "Admin";
// console.log(role);

// var lastname;
// lastname = "kc";
// console.log(lastname);

// var lastname ;
// lastname = "yadave";
// console.log(lastname);

// let age ;
// age = 56;
// age = 29 ;
// console.log(age);

// const name = "jkl0";
// console.log(name);

// var fullname = "aveshehs";
// var lastname = "kc";
// var Address = "sukedhara";
// let age = 25;
// console.log(fullname, lastname, Address);

// const whatever = "whatever";
// const nan = whatever/2 ;
// console.log(nan);

// let num = 2 ;
// console.log(typeof num);

// const a = 10 ;
// const b = String(a);
// console.log(b);
// console.log(typeof b);

// const c ="3";
// const d = Number(c);
// console.log(typeof d);

// arithmetic operators

// var a
// a = 10

// var b = 20
// var sum = a-b
// console.log(sum)

// var name = "aveshesh"
// var lastname = "kc"

// console.log(name , lastname)

// let a = 4
// if (a == 4) console.log("high");
// else
// console.log(" low  ")

// const x = 10
// const y = "10"

// console.log(x == y)
// console.log(x != y)
// console.log(x === y)
// console.log(x !== y)

//  ****************** logical Operators: ************************

/*
    logical AND: &&
    logical OR: ||
    logical NOT: !

*/

// const p = true
// const q = false
// console.log(!p)

// ************************************************************************************************************************************************************

// //1# Create two variables, one for your name and another for your age. Print a sentence combining those variables.

// // Variables for name and age
// let name = "Aveshesh kc";
// let age = 21;

// // Print a sentence combining those variables
// console.log(`My name is ${name} and I am ${age} years old.`);

// // 2# Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable. Print the final value.

// // Assign value 10 to a variable
// let value = 10;

// // Multiply the variable by itself and store the result
// let result = value * value;

// // Print the final value
// console.log(`The result of ${value} multiplied by itself is ${result}.`);

// //3# Write code to check if the character stored in a variable is uppercase or lowercase. Print "uppercase" or "lowercase" accordingly.

// // Variable storing a character
// let char = 'A';

// // To Check if the character is uppercase or lowercase and print accordingly
// if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
//     console.log("uppercase");
// } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
//     console.log("lowercase");
// } else {
//     console.log("Not a letter");
// }

// /* 4# Declare two variables with numeric values. Add them together and print the sum.
// Then, subtract the smaller number from the larger number and store the difference in a new variable. Print the difference. */

// // Declare two numeric variables
// let num1 = 15;
// let num2 = 8;

// // Add them together and print the sum
// let sumResult = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sumResult}.`);

// // Subtract the smaller number from the larger number and store the difference
// let difference = Math.abs(num1 - num2); // abs ensures the result is always positive

// // Print the difference
// console.log(`The difference between ${num1} and ${num2} is ${difference}.`);

// // 5# Imagine you have a variable storing a product price. Write code to apply a 10% discount and print the discounted price.

// // Variable storing a product price
// let productPrice = 100.00;

// // Calculate the discount (10% of the product price)
// let discount = productPrice * 0.10;

// // Calculate the discounted price
// let discountedPrice = productPrice - discount;

// // Print the discounted price
// console.log(`The price after a 10% discount is $${discountedPrice.toFixed(2)}.`);

// ############################################################################################################################################

// console.log( '10' + '10')
// console.log( '10' + + '10')
// console.log( 10 - '10')

// let  a = 92

// if (a>=90){
//     console.log("A+")

// }

// else if(a>=50){
//     console.log("B+")
// }

// else if(a>=30){
//     console.log("c+")
// }

// else {
//     console.log("F")

// }

// var weight = 10;

// var height_in_feet = 2.5;
// var height_in_meter = 0.3048 * height_in_feet;

// var bmi = weight / (height_in_meter * height_in_meter);

// if (bmi < 18.5) {
//     console.log("underweight");
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("normal");
// } else if (bmi >= 25 && bmi <= 29.9) {
//     console.log("overweight");
// } else if (bmi >= 30) {
//     console.log("obesity");
// }

// switch case

// let day = 2;
// switch (day) {
// case 1:
//     console.log("sunday");

//     break;

// case 2:
//     console.log("Monday");

//     break;

// case 3:
//     console.log("tuesday");
//     break;

// case 4:
//     console.log("wednesday");
//     break;

// case 5:
//     console.log("thursday");

//     break;

// case 6:
//     console.log("friday");

//     break;

// default:
//     console.log("saturday");
// }

// var weight = 5;

// var height_in_feet = 2.5;
// var height_in_meter = 0.3048 * height_in_feet;

// var bmi = weight / (height_in_meter * height_in_meter);

// switch (true) {
//   case bmi < 18.5:
//     console.log("underweight");

//     break;

//   case bmi >= 18.5 && bmi <= 24.9:
//     console.log("normal");

//     break;

//   case bmi >= 25 && bmi <= 29.9:
//     console.log("overweight");

//     break;

//   default:
//     bmi >= 30;

//     console.log("obesity");
// }




// let a = 20


// if (a>=0){
//     console.log("the number is positive")
// }

// else{
//     console.log("the number is negative")
// }


// switch (true){

//     case(a>=0):
//     console.log("the number is positive")

//     break;

//     default:

//     console.log("the number is negative")



// }














// let age = 18


// if (a>=18){
//     console.log("You can vote")
// }

// else{
//     console.log("You are under 18")
// }


// switch(true){

// case(age>=18):
// console.log("You can vote")

// break

// default:
//     console.log("U r under 18")
// }










//  how can you use if/else statement to check if given string is longer tan 10 char or not ?





// let str = "Hello, World!";


// if (str.length > 10) {
//     console.log("The string is longer than 10 characters.");
// } else {
//     console.log("The string is not longer than 10 characters.");
// }


// Use switch statement to check string length
// switch (true) {
//     case (str.length > 10):
//         console.log("The string is longer than 10 characters.");
//         break;
//     default:
//         console.log("The string is not longer than 10 characters.");
//         break;
// }



// how can you use an if/else statement to check if a given year is a leap year or not in java script



// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }


// let year = 2020;

// if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }


// var age = ("20es")

// console.log(`this is my ${age}`)







// function getDaysInMonth(month) {
//     let days;
//     if (month === 1) {
//         days = 31; // January
//     } else if (month === 2) {
//         days = 28; // February (not accounting for leap years)
//     } else if (month === 3) {
//         days = 31; // March
//     } else if (month === 4) {
//         days = 30; // April
//     } else if (month === 5) {
//         days = 31; // May
//     } else if (month === 6) {
//         days = 30; // June
//     } else if (month === 7) {
//         days = 31; // July
//     } else if (month === 8) {
//         days = 31; // August
//     } else if (month === 9) {
//         days = 30; // September
//     } else if (month === 10) {
//         days = 31; // October
//     } else if (month === 11) {
//         days = 30; // November
//     } else if (month === 12) {
//         days = 31; // December
//     } else {
//         return "Invalid month number. Please enter a number between 1 and 12.";
//     }
//     return days;
// }

// // Example usage:
// let month = 14; // April
// console.log("Number of days: " + getDaysInMonth(month));









// function getDaysInMonth(month) {
//     let days;
//     switch(month) {
//         case 1:
//             days = 31; // January
//             break;
//         case 2:
//             days = 28; // February (not accounting for leap years)
//             break;
//         case 3:
//             days = 31; // March
//             break;
//         case 4:
//             days = 30; // April
//             break;
//         case 5:
//             days = 31; // May
//             break;
//         case 6:
//             days = 30; // June
//             break;
//         case 7:
//             days = 31; // July
//             break;
//         case 8:
//             days = 31; // August
//             break;
//         case 9:
//             days = 30; // September
//             break;
//         case 10:
//             days = 31; // October
//             break;
//         case 11:
//             days = 30; // November
//             break;
//         case 12:
//             days = 31; // December
//             break;
//         default:
//             return "Invalid month number. Please enter a number between 1 and 12.";
//     }
//     return days;
// }

// // Example usage:
// let month = 4; // April
// console.log("Number of days: " + getDaysInMonth(month));








// 1 Password Strength Checker:

// let password = "yourpassword";
// if (password.length > 12) {
//     console.log("Strong password");
// } else if (password.length >= 8) {
//     console.log("Medium password");
// } else {
//     console.log("Weak password");
// }



// 2 Vowel or Consonant:

// let char = 'A'.toLowerCase();
// if ('aeiou'.includes(char)) {
//     console.log(char + " is a vowel");
// } else if (char >= 'a' && char <= 'z') {
//     console.log(char + " is a consonant");
// } else {
//     console.log("Invalid character");
// }


// 3 Number Guessing Game:


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Generate a random number between 1 and 10
// let randomNumber = Math.floor(Math.random() * 10) + 1;

// // Function to handle user input and check the guess
// function checkGuess(userGuess) {
//     userGuess = parseInt(userGuess);

//     if (!isNaN(userGuess)) {
//         if (userGuess === randomNumber) {
//             console.log("Correct!");
//             rl.close();
//         } else if (userGuess < randomNumber) {
//             console.log("Guess higher!");
//             rl.question("Guess a number between 1 and 10: ", checkGuess);
//         } else {
//             console.log("Guess lower!");
//             rl.question("Guess a number between 1 and 10: ", checkGuess);
//         }
//     } else {
//         console.log("Please enter a valid number.");
//         rl.question("Guess a number between 1 and 10: ", checkGuess);
//     }
// }

// // Start the game by prompting the user to guess the number
// rl.question("Guess a number between 1 and 10: ", checkGuess);






// 4 Calculate Price with Tax:

// let price = 100;
// let taxRate = 8;
// let finalPrice = price + (price * (taxRate / 100));
// console.log("Final price with tax: $" + finalPrice.toFixed(2));


// 5 Simple Calculator:

// let num1 = 10;
// let num2 = 5;
// let operator = '+';
// let result;

// if (operator === '+') {
//     result = num1 + num2;
// } else if (operator === '-') {
//     result = num1 - num2;
// } else if (operator === '*') {
//     result = num1 * num2;
// } else if (operator === '/') {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         console.log("Cannot divide by zero");
//     }
// } else {
//     console.log("Invalid operator");
// }

// if (result !== undefined) {
//     console.log("Result: " + result);
// }


// 6 Movie Rating Recommendation:

// let age = 15;

// switch (true) {
//     case (age >= 0 && age <= 12):
//         console.log("Recommended genre: Animation");
//         break;
//     case (age >= 13 && age <= 17):
//         console.log("Recommended genre: Action");
//         break;
//     case (age >= 18):
//         console.log("Recommended genre: Drama");
//         break;
//     default:
//         console.log("Invalid age");
// }


//  7 Weekend or Weekday Checker:

// let date = '2024-05-25';
// let day = new Date(date).getDay();

// if (day === 0 || day === 6) {
//     console.log("It's a weekend");
// } else {
//     console.log("It's a weekday");
// }


// 8 Positive, Zero, or Negative

// let number = -10;

// if (number > 0) {
//     console.log("The number is positive");
// } else if (number === 0) {
//     console.log("The number is zero");
// } else {
//     console.log("The number is negative");
// }


// 9  Multiple of 3 or 5:

// let number = 15;

// if (number % 3 === 0 && number % 5 === 0) {
//     console.log("The number is a multiple of both 3 and 5");
// } else if (number % 3 === 0) {
//     console.log("The number is a multiple of 3");
// } else if (number % 5 === 0) {
//     console.log("The number is a multiple of 5");
// } else {
//     console.log("The number is not a multiple of 3 or 5");
// }


// 10 Even or Odd Sum:

// let num1 = 1;
// let num2 = 1;
// let sum = num1 + num2;

// if (sum % 2 === 0) {
//     console.log("The sum is even");
// } else {
//     console.log("The sum is odd");
// }


// ##########################################################################Loop

// for loop
// for(let i = 1; i <=10;i++){

// if(i == 5 || i == 6 || i == 7 ){
//     continue
// }

// if(i == 6 ){
//     continue
// }

// if(i == 7 ){
//     continue
// }

//     console.log(i)

// }


// while loop
// let i = 1;
// while(i <= 10){
//     if (i == 1 || i == 2 || i == 3){
//         i++
//         continue
//     }
//     console.log(i)
//     i++
// }


// let i = 1;
// while(i<=10){

//     if(i%2==0){
        
//         console.log(i)
//     }

    
//     i++
// }









// do while

// let i = 20
// do{
//     console.log(i);
//     i++;
// }
// while(i <= 50);





// // for loop
// for(let i = 1; i <=10;i++){

// if(i){
    
// }


// }

//     console.log(i)


// let sum = 0;
// for(let i = 1; i <= 10; i++) {
//     sum += i;
//     console.log(`Sum after adding ${i} is: ${sum}`);
// }

// let sum = 0;
// for(let i = 1; i <= 10; i++) {
//     sum += i;
//     console.log(sum);
// }




// let number = 5;
// let factorial = 1;
// let i = number;

// while (i > 0) {
//     factorial *= i;
//     i--;
// }

// console.log(`The factorial of ${number} is: ${factorial}`);



// for (let i = 1; i <= 5; i++) {
//     console.log(`The square of ${i} is: ${i * i}`);
// }

// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }


// const numbers = [1, 2, 3, 4, 5]; 
// let sum = 0;
// let i = 0;
// while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
// }
// console.log(`The sum of the array elements is: ${sum}`);


let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}



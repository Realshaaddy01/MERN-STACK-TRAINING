// Question 1:
// **Q: Write a for loop that prints numbers from 1 to 5 in the console.**



// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }  



// Question 3:
// **Q: Write a for loop to calculate the sum of numbers from 1 to 10.**

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
// sum += i;
// }

// console.log(`The sum of numbers from 1 to 10 is ${sum}`);






// Question 2:
// **Q: Using a while loop, print even numbers from 2 to 10 (inclusive) in the
// console.**



// let i = 2;
// while (i <= 10) {
// console.log(i);
// i += 2; // Increment i by 2 to get the next even number
// }









// Question 4:
// **Q: Using a while loop, find the factorial of a given number (e.g., 5).**

// let number = 5; // The number you want to find the factorial of
// let factorial = 1;
// let i = number;

// while (i > 0) {
//   factorial *= i; // Multiply factorial by the current value of i
//   i--; // Decrement i by 1
// }

// console.log(`The factorial of ${number} is ${factorial}`);





// Question 5:
// **Q: Write a for loop that prints the square of numbers from 1 to 5.**

// for (let i = 1; i <= 5; i++) {
//     console.log(i * i); 
// }











// Question 6:
// **Q: Using a while loop, print the cube of numbers from 1 to 5.**

// let i = 1;
// while (i <= 5) {
//   console.log(i * i * i); // Calculate and print the cube of i
//   i++; // Increment i by 1
// }










// Question 7:
// **Q: Write a for loop to iterate through an array of names and print each name
// in the console.**


// let names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve'];

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }








// Question 8:
// **Q: Using a while loop, find the sum of elements in an array of numbers.**

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let i = 0;

// while (i < numbers.length) {
//   sum += numbers[i]; // Add the current element to sum
//   i++; // Increment i by 1
// }

// console.log(`The sum of the array elements is ${sum}`);










// Question 9:
// **Q: Write a for loop that prints the elements of an array in reverse order.**


// let array = ['a', 'b', 'c', 'd', 'e'];

// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }









// Question 10:
// **Q: Using a while loop, find the largest number in an array of numbers.**


// let numbers = [1, 2, 3, 4, 5];
// let i = 0;
// let largest = numbers[0];

// while (i < numbers.length) {
// if (numbers[i] > largest) {
//     largest = numbers[i];
// }
// i++;
// }

// console.log(`The largest number is ${largest}`);






// Question 11:
// **Q: Write a for loop to calculate the sum of all even numbers from 1 to 20.**

// let sum = 0;

// for (let i = 1; i <= 20; i++) {
// if (i % 2 === 0) {
//     sum += i;
// }
// }

// console.log(`The sum of all even numbers from 1 to 20 is ${sum}`);









// Question 12:
// **Q: Using a while loop, find the product of all odd numbers from 1 to 15.**

// let product = 1;
// let i = 1;

// while (i <= 15) {
//   if (i % 2 !== 0) {
//     product *= i;
//   }
//   i++;
// }

// console.log(`The product of all odd numbers from 1 to 15 is ${product}`);








// Question 13:
// **Q: Write a for loop to print the following pattern:**

// for (let i = 1; i <= 5; i++) {
//     console.log('*'.repeat(i));
// }  








// Question 14:
// **Q: Using a while loop, print the numbers from 10 to 1 in descending order.**

// let i = 10;

// while (i >= 1) {
// console.log(i);
// i--;
// }







// Question 15:
// **Q: Write a for loop to calculate the factorial of a given number (e.g., 6).**

// let number = 6;
// let factorial = 1;

// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }

// console.log(`The factorial of ${number} is ${factorial}`);





// Question 16:
// **Q: Using a while loop, find the sum of digits of a given number (e.g., 123).**


// let number = 123;
// let sum = 0;

// while (number > 0) {
// sum += number % 10;
// number = Math.floor(number / 10);
// }

// console.log(`The sum of the digits is ${sum}`);








// Question 17:
// **Q: Write a for loop to print the following pattern:**


// for (let i = 5; i >= 1; i--) {
//     console.log(i.toString().repeat(i));
// }  







// Question 18:
// **Q: Using a while loop, print the first 10 Fibonacci numbers.**

// let n1 = 0, n2 = 1, nextTerm;
// let count = 1;

// console.log(n1); // print 0
// console.log(n2); // print 1

// while (count <= 8) {
//   nextTerm = n1 + n2;
//   console.log(nextTerm);
//   n1 = n2;
//   n2 = nextTerm;
//   count++;
// }








// Question 19:
// **Q: Write a for loop to find and print the prime numbers between 1 and 20.**

// for (let num = 2; num <= 20; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log(num);
//     }
//   }








// Question 20:
// **Q: Using a while loop, reverse a given number (e.g., 12345).**


// let number = 12345;
// let reversed = 0;

// while (number > 0) {
//   reversed = reversed * 10 + (number % 10);
// number = Math.floor(number / 10);
// }

// console.log(`The reversed number is ${reversed}`);




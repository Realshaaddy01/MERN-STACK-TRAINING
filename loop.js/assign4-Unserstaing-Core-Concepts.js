// Tasks (Understanding the Concepts)

// 1. Promises
// Task: Create a function fetchData that simulates fetching data from an API. The function should return a promise that resolves with a hardcoded array of objects after 2 seconds. Each object should represent a user with properties id, name, and age.
// Explanation: A Promise is an object representing the eventual completion or failure of an asynchronous operation. Using Promises makes it easier to work with asynchronous code, such as data fetching.
// Code:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "John Doe", age: 25 },
        { id: 2, name: "Jane Smith", age: 30 },
        { id: 3, name: "Sam Green", age: 22 }
      ];
      resolve(users);
    }, 2000);
  });
}

// Usage
fetchData().then(users => console.log(users));





// 2. Closures
// Task: Create a function createCounter that returns an object with two methods: increment and getCount. The increment method should increase the internal count by 1, and the getCount method should return the current count. Use a closure to maintain the internal count variable.
// Explanation: A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. Closures are useful for creating private variables.
// Code:
function createCounter() {
  let count = 0;
  
  return {
    increment: function() {
      count += 1;
    },
    getCount: function() {
      return count;
    }
  };
}

// Usage
const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1




// 3. Callbacks
// Task: Create a function processData that accepts an array of numbers and a callback function. The function should process each number in the array using the callback function and return a new array of processed numbers.
// Explanation: A callback function is a function passed into another function as an argument and is executed after some operation has been completed.
// Code:
function processData(numbers, callback) {
  return numbers.map(callback);
}

// Usage
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = processData(numbers, function(number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// 4. Async/Await
// Task: Rewrite the fetchData function from Question 1 using async and await.
// Explanation: async and await are used to handle asynchronous operations in a more synchronous-like fashion, making the code easier to read and maintain.
// Code:
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "John Doe", age: 25 },
        { id: 2, name: "Jane Smith", age: 30 },
        { id: 3, name: "Sam Green", age: 22 }
      ];
      resolve(users);
    }, 2000);
  });
}
// Usage
(async function() {
  const users = await fetchData();
  console.log(users);
})();


// 5. Array Manipulation: Map
// Task: Given an array of numbers, create a function that doubles each number using map.
// Explanation: map is a higher-order function that creates a new array by applying a function to each element of the original array.
// Code:
function doubleNumbers(numbers) {
  return numbers.map(number => number * 2);
}
	const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = doubleNumbers(numbers);
	console.log(doubledNumbers); // [2, 4, 6, 8, 10]



// 6. Array Manipulation: Filter
// Task: Given an array of numbers, create a function that filters out numbers less than 10 using filter.
// Explanation: filter is a higher-order function that creates a new array with all elements that pass the test implemented by the provided function.
// Code:
function filterNumbers(numbers) {
  return numbers.filter(number => number >= 10);
}

// Usage
const numbers = [5, 10, 15, 20, 25];
const filteredNumbers = filterNumbers(numbers);
console.log(filteredNumbers); // [10, 15, 20, 25]





// 7. Array Manipulation: Find
// Task: Given an array of numbers, create a function that finds the first number greater than 15 using find.
// Explanation: find is a higher-order function that returns the value of the first element in the array that satisfies the provided testing function.
// Code:
function findNumber(numbers) {
  return numbers.find(number => number > 15);
}

// Usage
const numbers = [5, 10, 15, 20, 25];
const foundNumber = findNumber(numbers);
console.log(foundNumber); // 20





// 8. Array Manipulation: Reduce
// Task: Given an array of numbers, create a function that sums all numbers using reduce.
// Explanation: reduce is a higher-order function that applies a function against an accumulator and each element in the array to reduce it to a single value.
// Code:
function sumNumbers(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

const numbers = [1, 2, 3, 4, 5];
const sum = sumNumbers(numbers);
console.log(sum); // 15



// 9. Object Manipulation
// Task: Given an array of user objects, write a function to transform this array into an object where the keys are user IDs and the values are the corresponding user objects.
// Explanation: This task involves creating a new object where each key-value pair corresponds to a user's ID and the user object, respectively.
// Code:
function transformUsers(users) {
  return users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}

// Usage
const users = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Sam Green", age: 22 }
];
const transformedUsers = transformUsers(users);
console.log(transformedUsers);
// { '1': { id: 1, name: 'John Doe', age: 25 }, '2': { id: 2, name: 'Jane Smith', age: 30 }, '3': { id: 3, name: 'Sam Green', age: 22 } }


// 10. Classes and Objects
// Task: Create a Person class with a constructor that accepts name and age parameters. Add a method describe that returns a string describing the person.
// Explanation: Classes in JavaScript are syntactic sugar over the existing prototype-based inheritance. They make it easier to create objects with methods and properties.
// Code:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Usage
const person = new Person("John Doe", 25);
console.log(person.describe()); // John Doe is 25 years old.



// 11. Inheritance
// Task: Create a Student class that extends Person and adds a grade property. Add a method study that returns a string indicating the student is studying.
// Explanation: Inheritance allows a class to inherit properties and methods from another class.
// Code:
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying.`;
  }
}

// Usage
const student = new Student("Jane Smith", 22, "A");
console.log(student.describe()); // Jane Smith is 22 years old.
console.log(student.study()); // Jane Smith is studying.




// 12. Error Handling with Promises
// Task: Modify the fetchData function to randomly reject the promise with an error message "Failed to fetch data". Handle this error using .catch when calling the function.
// Explanation: Handling errors in Promises allows you to catch and manage errors that occur during asynchronous operations.
// Code:
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        const users = [
          { id: 1, name: "John Doe", age: 25 },
          { id: 2, name: "Jane Smith", age: 30 },
          { id: 3, name: "Sam Green", age: 22 }
        ];
        resolve(users);
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 2000);
  });
}

// Usage
fetchData()
  .then(users => console.log(users))
  .catch(error => console.error(error.message));




// 13. Error Handling with Async/Await
// Task: Modify the fetchData function with async/await to handle errors using try/catch blocks.
// Explanation: Using try/catch blocks with async/await provides a more readable and straightforward way to handle errors in asynchronous code.
// Code:
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        const users = [
          { id: 1, name: "John Doe", age: 25 },
          { id: 2, name: "Jane Smith", age: 30 },
          { id: 3, name: "Sam Green", age: 22 }
        ];
        resolve(users);
      } else {
        reject(new Error("Failed to fetch data"));
      }
    }, 2000);
  });
}

// Usage
(async function() {
  try {
    const users = await fetchData();
    console.log(users);
  } catch (error) {
    console.error(error.message);
  }
})();






// 14. Complex Array Manipulation
// Task: Given an array of users, where each user has a name and an array of hobbies, create a function that returns an array of all unique hobbies using reduce.
// Explanation: Combining reduce with other array methods allows you to perform complex transformations and aggregations.
// Code:
function getUniqueHobbies(users) {
  return users.reduce((hobbies, user) => {
    user.hobbies.forEach(hobby => {
      if (!hobbies.includes(hobby)) {
        hobbies.push(hobby);
      }
    });
    return hobbies;
  }, []);
}

// Usage
const users = [
  { name: "John Doe", hobbies: ["reading", "swimming"] },
  { name: "Jane Smith", hobbies: ["swimming", "dancing"] },
  { name: "Sam Green", hobbies: ["reading", "cycling"] }
];
const uniqueHobbies = getUniqueHobbies(users);
console.log(uniqueHobbies); // ["reading", "swimming", "dancing", "cycling"]




// Conceptual Questions

// 1. Why are promises used in JavaScript? Explain the advantages of using promises over traditional callback functions.
// Answer: Promises are used in JavaScript to handle asynchronous operations. They provide a more robust and readable way to handle async tasks compared to traditional callback functions. The advantages of using promises include:
// •	Avoiding Callback Hell: Promises allow chaining of asynchronous operations, which avoids the deeply nested structure of callbacks (callback hell).
// •	Error Handling: Promises provide a clearer and more consistent way to handle errors using .catch, making it easier to manage exceptions.
// •	Improved Readability: Promises make the code more readable and easier to follow, especially with the use of .then for success cases and .catch for error cases.


// 2. What is a closure in JavaScript? Provide an example.
// Answer: A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. Closures allow functions to access variables from an outer function even after that function has finished executing.
// Example:
function outerFunction() {
  let outerVariable = "I'm outside!";
  
  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from outerFunction
  }
  
  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Output: I'm outside!




// 3. What is a callback function and why is it used in JavaScript?
// Answer: A callback function is a function that is passed into another function as an argument and is executed after some operation has been completed. Callbacks are used in JavaScript to ensure that certain code doesn't execute until another code has already finished executing. This is especially useful for asynchronous operations like reading files, making network requests, or handling events.
// Example:
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data fetched!";
    callback(data);
  }, 1000);
}

function handleData(data) {
  console.log(data);
}

fetchData(handleData); // Output: Data fetched!









// 4. What are async/await in JavaScript and how do they improve asynchronous programming?
// Answer: async and await are syntactic sugar over promises that allow you to write asynchronous code in a synchronous manner. The async keyword is used to declare an asynchronous function, and the await keyword is used to wait for a promise to resolve.
// Advantages:
// •	Improved Readability: Async/await makes asynchronous code look more like synchronous code, which improves readability and maintainability.
// •	Error Handling: With try/catch blocks, handling errors in async functions becomes more straightforward.
// •	Control Flow: Async/await simplifies the control flow of asynchronous operations, avoiding the need for chained .then calls and nested callbacks.
// Example:
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();





// 5. Write the difference between ES6 and JS.
// Answer: ES6 (ECMAScript 2015) is a version of JavaScript that introduced several new features and syntactic improvements. Key differences and features introduced in ES6 include:
// •	Arrow Functions: Shorter syntax for writing functions.
// •	Classes: Syntactic sugar for prototype-based inheritance.
// •	Template Literals: String literals allowing embedded expressions.
// •	Destructuring: Syntax for extracting values from arrays or objects.
// •	Default Parameters: Default values for function parameters.
// •	Spread and Rest Operators: Syntax for expanding or collecting elements.
// •	Promises: Native support for promises to handle asynchronous operations.
// •	Modules: Native support for modular code.
// •	let and const: Block-scoped variable declarations.
// Example:
// //ES5 function
function sum(a, b) {
  return a + b;
}

// ES6 arrow function
const sum = (a, b) => a + b;

// ES5 class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.describe = function() {
  return this.name + " is " + this.age + " years old.";
};

// ES6 class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    return `${this.name} is ${this.age} years old.`;
  }
}





// 6. What are some of the major features introduced in ES6?
// Answer: Major features introduced in ES6 (ECMAScript 2015) include:
// •	Arrow Functions: Shorter function syntax that lexically binds the this value.
// •	Classes: A more straightforward syntax for creating objects and dealing with inheritance.
// •	Template Literals: Enhanced string literals with embedded expressions, multi-line strings.
// •	Destructuring: Syntax to unpack values from arrays or properties from objects.
// •	Default Parameters: Function parameters with default values.
// •	Spread and Rest Operators: Spread (...) for expanding elements and rest (...) for collecting elements.
// •	Promises: Native support for handling asynchronous operations.
// •	Modules: Native module syntax for importing and exporting code.
// •	let and const: Block-scoped variable declarations replacing var for more predictable scoping.
// •	Enhanced Object Literals: Shorthand property names, method definitions, and computed property names.
// •	Iterators and Generators: Protocols for creating custom iteration behaviors.
// •	Symbols: A new primitive type for creating unique identifiers.
// •	Map and Set: New data structures for storing collections of values.
// Example:
// // Destructuring
const person = { name: 'John', age: 25 };
const { name, age } = person;

console.log(name); // John
console.log(age); // 25

// Default Parameters
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Guest!
greet('John'); // Hello, John!

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // [1, 2, 3, 4, 5, 6]


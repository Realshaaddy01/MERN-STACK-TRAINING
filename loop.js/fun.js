// function greet(name) {
//     return(`hello ${name}!`);
// }


// const result = greet('hol');
// console.log(greet("ave"))



// function sub(a ,b){
//     return a - b;
// }

// const subResult = sub(2 , 1);
// console.log(subResult);


// const div = function(a, b) {
//     if (b === 0) {
//         return "Error: Division by zero is undefined.";
//     }
//     return a / b;
// };

// const divResult = div(15, 5);
// console.log(divResult); 
// console.log(div(10, 2));
// console.log(div(10, 0)); 



// let greet = function(name) {
//     console.log("hello " + name + "!");
// };

// greet("gol")


// let multiply = (a, b) => a * b;

// let result = multiply(3, 4);
// console.log(result); 




// const name = () => "my name is aves";
// const age = () => "my age is 21";

// console.log(name());
// console.log(age());  




// (function() {
//     console.log("my name is aves");
//     console.log("my age is 21");
// })();


// creating an object to represent a person 

// const person = {
//     name: "Aves",
//     age: 21,
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and my age is ${this.age}.`);
//     }
// };

// // Accessing properties and calling the greet method
// console.log(person.name); 
// console.log(person.age);  
// person.greet();           




// const number = [1, 2, 3, 4, 5];

// console.log(number[2]); 




// const person = {
//     name: "Abe",
//     age: 30,
//     hobbies: ["reading", "writing", "cooking"]
// };

// console.log(person.name, person.age, person.hobbies[2]); 




// const number = [1, 2, 3, 4, 5];

// number.push(6);
// number.sort();
// console.log(number); 

const rectangle = {
    width: 10,
    height: 5,
    getArea: function() {
        return this.width * this.height;
    }
};


console.log(rectangle.getArea()); 







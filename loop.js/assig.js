// 1 Function to return the sum of two parameters:



function sum(a, b) {
    return a + b;
}












// 2 Function to calculate the average of an array of numbers:

function average(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}



// 3 Function to check if a given number is even or odd:

function isEvenOrOdd(number) {
    return number % 2 === 0 ? 'even' : 'odd';
}




// 4 Function to reverse a string:

function reverseString(str) {
    return str.split('').reverse().join('');
}





// 5 Function to find the maximum value in an array of numbers:


function findMaxValue(numbers) {
    return Math.max(...numbers);
}



// 6 Function to convert Celsius to Fahrenheit:

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}












// 7 Function to generate a random number between a given minimum and maximum:

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}













// 8 Function to check if a string is a palindrome:

function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}













// 9 Function to capitalize the first letter of each word in a sentence:

function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}














// 10 Function to return the factorial of a given number:

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}











// 11 Function to count the number of occurrences of a specific element in an array:

function countOccurrences(array, element) {
    return array.filter(item => item === element).length;
}








// 12 Function to check if a given year is a leap year:

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}










// 13 Function to merge two arrays and return the sorted result:

function mergeAndSortArrays(array1, array2) {
    return [...array1, ...array2].sort((a, b) => a - b);
}











// 14 Function to convert a number to its Roman numeral representation:

function toRomanNumeral(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    let result = '';
    for (const [roman, value] of romanNumerals) {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    }
    return result;
}













// 15 Function to find the second smallest element in an array of numbers:

function secondSmallest(numbers) {
    const uniqueNumbers = [...new Set(numbers)].sort((a, b) => a - b);
    return uniqueNumbers[1];
}















// 16 Function to calculate the area of a circle given its radius:

function circleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}



















// 17 Function to truncate a string if it exceeds a specified length and append "...":

function truncateString(str, maxLength) {
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + '...';
    }
    return str;
}
















// 18 Function to check if a string contains only digits:

function isOnlyDigits(str) {
    return /^\d+$/.test(str);
}













// 19 Function to remove all falsy values from an array:

function removeFalsyValues(array) {
    return array.filter(Boolean);
}















// 20 Function to generate a new array with unique values from a given array:

function uniqueValues(array) {
    return [...new Set(array)];
}












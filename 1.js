
let fruits = ['apple', 'banana', 'orange'];

fruits.push('grape');
console.log("new fruits :", fruits); 

let removedFruit = fruits.pop();
console.log("After pop:", fruits); 
console.log("Removed fruit:", removedFruit); 



let numbers = [3, 1, 5, 2, 4];

numbers.sort((a, b) => a - b);
console.log("Sorted numbers:", numbers); 



let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled numbers:", doubledNumbers);


let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Filtered odd numbers:", oddNumbers); 


let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum); 



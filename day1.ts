// Javascript version (no need to specify data type)
const message = "Hello";

// Typescript version (needs to specify data type)
const message2: string = "Hello";

// ====== STRING BUILT IN METHOD ======

// There are many methods to change how the string will be displayed.
const name: string = "Michael";
const name2: string = "Kay";

console.log(name.toLowerCase()); 
// -> michael

console.log(name.toUpperCase()); 
// -> MICHAEL

console.log(name.replace("h", "k")); 
// -> Mickael (replace the first "h" with "k")

console.log(name.concat(" is the Godfather!")); 
// -> Michael is the Godfather!

console.log(name + " and " + name2); 
// -> Michael and Kay (concatenate two strings)

console.log(name.slice(0, 3)); 
// -> Mic (slice the string from index 0 to index 3)

console.log(name.split("")); 
// -> [ 'M', 'i', 'c', 'h', 'a', 'e', 'l' ] (split the string into an array of characters)



// ====== TEMPLATE LITERALS / TEMPLATE STRINGS ======
const welcome: string = "Welcome";
const name3: string = "Sonny";

console.log(`${welcome} ${name3}`);
// use backticks instead of quotes to use template literals.



// ====== NUMBER CONVERSION ======
const number: string = "1972";

console.log(Number(number)); 
// or
console.log(parseInt(number)); 

// both methods convert string to number



// ====== STRING CONVERSION ======
const number2: number = 1974;

console.log(number2.toString());
// or
console.log(String(number2));

// both methods convert number to string



// ====== BOOLEAN CONVERSION ======
console.log(Boolean(1990));
console.log(Boolean(-1990));
// -> true (any number other than 0 is true)

console.log(Boolean(0));
// -> false (0 is false)

console.log(Boolean("Vito"));
// -> true (any non-empty string is true)

console.log(Boolean(" "));
// -> true (string with whitespace is true)

console.log(Boolean(""));
// -> false (empty string is false)



// ====== DATE ======
const now = new Date();

console.log(now);
// -> current date and time

console.log(now.getFullYear());
// -> current year

console.log(now.getMonth() + 1);
// -> current month (0-indexed, so we add 1)

console.log(now.getDate());
// -> current day of the month

console.log(now.getHours());
// -> current hours

console.log(now.getMinutes());
// -> current minutes



// ====== BASIC OPERATORS ======
/*
    + : addition
    - : subtraction
    * : multiplication 
    / : division
    % : modulus (remainder)
    ** : exponentiation
*/



// ====== MODIFY IN PLACE ======
let n: number = 10;

n += 5;
// means n = n + 5, so n is now 15

n -= 3;
// means n = n - 3, so n is now 12

console.log(n);
// -> 12



// ====== INCREMENT AND DECREMENT ======
let counter: number = 0;

counter++;
// means counter = counter + 1, 
// so counter is now 1

counter--;
// means counter = counter - 1, 
// so counter is now 0



// ====== COMPARISON OPERATORS ======
/*
    == : equal to (compares values only)
    === : equal value and equal type (strict equality)
    < : less than
    > : greater than
    <= : less than or equal to
    >= : greater than or equal to
    != : not equal to (compares values only)
*/

// console.log(2 == "2");
// -> true (values are equal)

// console.log(2 === "2");
// -> false (values are equal, but types are different)



// ====== MATH ======
Math.ceil(4.2);
// -> 5 (rounds up to the nearest integer)

Math.floor(4.8);
// -> 4 (rounds down to the nearest integer)

Math.round(4.5);
// -> 5 (rounds to the nearest integer)

Math.max(1, 2, 3, 4, 5);
// -> 5 (returns the largest number)

Math.min(1, 2, 3, 4, 5);
// -> 1 (returns the smallest number)

Math.abs(-10);
// -> 10 (returns the absolute value)

Math.random();
// -> returns a random number between 0 (inclusive) and 1 (exclusive)

Math.floor(Math.random() * 10);
// -> returns a random integer between 0 and 9 (inclusive)
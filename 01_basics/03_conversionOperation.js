let score = null

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);// it will change string to number
// console.log(valueInNumber); // value is 33abc = result NaN
// value is null = result 0
// true = result 1; false = 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 = true
// 0 = false
// empty = false
// in case of any value = true

let someNumber = 33

let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

//********** Operations **********/

let value = 3
let negValue = -value

// console.log(negValue);

// 2**2 = poweroff
// 2/3
// 2%3 = remainder

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2

// console.log(str3);

// console.log(2 + 2 + "1"); // 41
// console.log("1" + 2 + 2); // 122

// console.log(true); // true
// console.log(+true); // 1
// console.log(true+); // Error

let num1, num2, num3

num1 = num2 = num3 = 2+2

// console.log(num1);// 4 but no to be use such code

let gameCounter = 100
gameCounter++; // ++gameCounter
// console.log(gameCounter); // prefix and post fix value must be read

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

let x = 4
let y = x++

// console.log(y); // 4
// console.log(x); // 5

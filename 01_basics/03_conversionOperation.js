let score = null

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);// it will change string to number
console.log(valueInNumber); // value is 33abc = result NaN
// value is null = result 0
// true = result 1; false = 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 = true
// 0 = false
// empty = false
// in case of any value = true

let someNumber = 33

let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);

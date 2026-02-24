const accountId = 123556
let accountEmail = "priyanka@goggle.com"
var accountPassword = "12345"
accountCity = "Chandrapur"

// accountId = 2 // not allowed

console.log(accountId);

accountEmail = "abcd@gmail.com"
accountPassword = "2356"
accountCity = "Rajura"

/* do not use var in js because of issue in block scope or functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity]);

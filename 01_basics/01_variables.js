const accountId = 1456
let accountEmail = "shubh@gmail.com"
var accountPassward = "562134"
accountCity = "Bhopal"
let accountState;

// accountId = 2314 -> this is not allowed

accountEmail = "hc@hc.com"
accountPassward = "5631123"
accountCity = "jaipur"

/*
    prefer not to use var
    because of issue in block scope and functon scope
*/

console.log(accountId)

// to print all variables at one line in table form
console.table([accountId, accountEmail, accountPassward,accountCity,accountState])

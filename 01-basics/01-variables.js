const accountId = 112233
let accountEmail = "coach@gmail.com"
var accountPassword = "12345@Az"
accountCity = "Lahore"
let accountState;

// accountId = 2 // const value not change
/* Prefer not to use var because of issue in block scope and functional scope */

accountEmail = "shan@gmail.com"
accountPassword = "coach"
accountCity = "Karachi"
console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
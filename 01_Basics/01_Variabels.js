const accountId = 8084321585
let accountEmail = "adis6469@gmail.com"
var accountPassword = 5677
accountCity = "Rosera"
let accountState;

// accountId = 2 // Error: Assignment to constant variable. (no-const-assign)


accountEmail = "hc@hc.com"
accountPassword = "1234"
accountCity = "Samastipur"

console.log(accountId);

/*
prefer not to use var
Because var is function scoped and let is block scoped 
*/

//Altetnative way to print output/display
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

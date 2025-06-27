const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // ❌ Not allowed because accountId is a constant

accountEmail = "hc@hc.com";   
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId); // ✅ This will log 144553

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

let companies=["Bloomberg", "Microsoft"," Uber", "Google"," IBM", "Netflix"];

// 1. removing first name from the companies
companies.shift();  //Deleted
console.log(companies);
// 2. Remove uber and add ola in its place
companies.splice(1,1,"Ola");
console.log(companies);
// 3. Add Amazon at the end
companies.push("Amazon");
console.log(companies);
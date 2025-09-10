let name=prompt("Enter your full name ");
let nname=name.replaceAll(" ","");
let lname=nname.length;
let username="@"+nname+lname;
console.log(username);
let str="    He is very   Smart       ";   //String is immutable
let str2="yes";
str.toUpperCase();   //It does not change the original string Because in javascript strings are immutable
let newstr=str.toUpperCase();
let trimstring=str.trim();   //This function will remove the start and end white spaces
console.log(str);
console.log(newstr);
console.log(trimstring);
console.log(str.slice(5,9));   //start from index 5 to 9
console.log(str.concat(str2));
console.log(str2+str);
console.log(str2.replace("yes","no"));    //replace only one time
console.log(str2.replaceAll("yes","no"));  //replaces all the time
console.log(str.charAt(7)); //i
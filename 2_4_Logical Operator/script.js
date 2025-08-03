// Logical Operator
let a=10;
let b=5;

console.log("(a>=b) && (a>=2) : ",(a>=b) && (a>=2)); //True
console.log("(a>=b) && (a>=24) : ",(a>=b) && (a>=24)); //False
console.log("(a>=b) || (a>=2) : ",(a<=b) || (a>=2)); //True
console.log("(a>=b) || (a>=24) : ",(a>=b) || (a>=24)); //False
console.log("!((a>=b) && (a>=2)) : ",!((a>=b) && (a>=2))); //True
console.log("!((a>=b) && (a>=24)) : ",!((a>=b) && (a>=24))); //False
console.log("!(5<2) : ",!(5<2));
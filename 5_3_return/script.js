function sum(x,y){
    console.log("Before return .....");
    s=x+y;
    return s;
    console.log("Before return.....");   //This will not print on the console (Unreachable Code)
}

console.log(sum(5,10));
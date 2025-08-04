let score=prompt("Enter your score (0-100) ");
console.log("Score : ",score);

if(score>=80 && score<=100){
    console.log("You got GRADE A");
}else if(score>=70 && score<=79){
    console.log("You got GRADE B");
}else if (score>=60 && score<=69){
    console.log("You got GRADE C");
}else if(score>=50 && score<=59){
    console.log("You got GRADE D");
}else if(score<=49){
    console.log("Sorry to say but you are FAIL !!!!");
}else{
    console.log("Enter the right score of the student !!!")
}
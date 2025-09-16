let cars=["Brezza", "Venue", "Swift", "Thar"];
let car22=["Alto", "Nano", "Celerio", "Ritz"];
console.log(cars);
cars.push("Creta","Land Cruiser");
console.log("After adding new item : "+cars);

let deletedCar=cars.pop();
console.log("After deleting one car : "+cars);
console.log("Deleted Car : "+deletedCar);


cars.toString();   //to convert into the string
console.log(cars);

let concatination=cars.concat(car22); //you can also give multiple parameter to concat function
console.log(concatination);

car22.unshift("Glanza");  //This function will add glanza at the start
console.log(car22); 

let val=car22.shift(); //This will delete the value at the start
console.log("Deleted Value : "+val);

console.log(car22.slice(1,2))  //returns value at index 1 only  //You can also give only 1 parameter

car22.splice(1,2,"Innova","Fortuner");  //splice(startidx,delcount,newelements..);
console.log(car22);
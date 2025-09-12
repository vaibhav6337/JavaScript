let itemPrice=[250, 645, 300, 900, 50];

//By Using FOR Loop
// for(let i=0; i<itemPrice.length; i++){
//     itemPrice[i]=itemPrice[i]-(itemPrice[i]*(10/100));
// }

//By Using FOR OF Loop

let index=0;
for(i of itemPrice){
    let offer=i/10;
    itemPrice[index]=itemPrice[index]-offer;
    index++;
}
console.log("Prices after 10% OFF");

for(let p of itemPrice){
console.log("Price : "+p);
}
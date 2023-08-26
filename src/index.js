const Ship = require("./ship");

const ship = Ship(4);
const shop = Ship(3)


console.log("runniiiiiing");
console.log({ship, shop});

for (let index = 0; index < 4; index++) {
  ship.hit();
  shop.hit();
  console.log(ship.isSunk());
  console.log("-----------------------------------------------------------------")  
  console.log(shop.isSunk());
  console.log("*****************************************************************") 
   
}
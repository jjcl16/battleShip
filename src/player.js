const Gameboard = require("./gameboard");
const Ship = require("./ship");

const player = () => {

let playerGameboard = Gameboard(7,7);
const shipA = Ship(4);
const shipB = Ship(3);
const shipC = Ship(3);
const shipD = Ship(2);
const shipE = Ship(1);

// Array of ship, to placement
const ships = [shipA, shipB, shipD,  shipC, shipE];

// call randomPlaceShip
RandomShipPlacement(ships);

// function to randomly place the ships in the board of each player

function RandomShipPlacement (arrayOfShips) {
    //console.log(arrayOfShips);
    arrayOfShips.forEach(ship => {
        let received = false;
        do {
            //console.log(ship);
            const x = randomIntFromInterval(1,7) - 1;
            const y = randomIntFromInterval(1,6) - 1;
            const hOrV = (randomBoolean()) ? "h" : "v";
            //console.log({x,y,hOrV,ship})
            received = playerGameboard.placeShip(ship, x, y, hOrV);
            
        } while (!received);

        
    });
}



//only expose the playerGameboard and its methods.
return { playerGameboard }
}

module.exports = player;

// Random number
const  randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Random boolean
const randomBoolean = () => {
    return (Math.random() < 0.5);
} 


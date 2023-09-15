const Gameboard = require("./gameboard");
const Ship = require("./ship");

const player = () => {

let playerGameboard = Gameboard(7,6);
const shipA = Ship(4);
const shipB = Ship(3);
const shipC = Ship(3);
const shipD = Ship(2);
const shipE = Ship(1);

// playerGameboard.placeShip(shipA, 3, 2, "v");

// function to randomly place the ships in the board of each player

const RandomShipPlacement = (arrayOfShips) => {
    arrayOfShips.forEach(ship => {
        let received;
        do {
            const x = randomIntFromInterval(0,7);
            const y = randomIntFromInterval(0,6);
            const hOrV = (randomBoolean) ? "h" : "v";
            received = playerGameboard.placeShip(ship, x, y, hOrV)
            
        } while (!received);

        
    });
}

// Array of ship, to placement
const ships = [shipA, shipB, shipC, shipD, shipE];

// call randomPlaceShip
RandomShipPlacement(ships);

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
    return Math.random() < 0.5;
} 


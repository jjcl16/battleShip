/**
 * make an a logic for the cpu attack, no repeating moves
 * @param  player 
 */

let previousCpuPlay = []

const cpu = (player) =>{
    const newMove = getNewPosition();
    previousCpuPlay.push(newMove);
    const playerBoardElement = document.querySelector("#P" + newMove[0].toString() + newMove[1].toString());

    playerBoardElement.classList.add("attackedZone");
    const hitAShip = player.playerGameboard.receiveAttack(newMove[0],newMove[1]);
    if (hitAShip){
        attackedShip(hitAShip, playerBoardElement, player.ships);
        return cpuPlays(player);
    }
}

const cpuPlays = (player) => { 
    return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(cpu(player));
                    }, 1500);
                });
    }
module.exports = cpuPlays;

// Random number
const  randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const getCoordenates = () => {
    const x = randomIntFromInterval(1,7) - 1;
    const y = randomIntFromInterval(1,7) - 1;
    return [x,y];
}

const getNewPosition = () => {
    let newPosition = getCoordenates();

    for (let index = 0; index < previousCpuPlay.length; index++) {
        if(previousCpuPlay[index][0] === newPosition[0] && previousCpuPlay[index][1] === newPosition[1]){
            newPosition = getNewPosition();
        }
        
    }
    
    return newPosition;
}

const attackedShip = (ship, shipElement, ships) => {
    shipElement.classList.remove("attackedZone");
    shipElement.classList.add("hitShip");
    const shipSelector = whatShipIs(ships, ship);

    shipElement.classList.add(shipSelector);
    if(ship.isSunk()) markAsSunkCpuShip(shipSelector);
    console.log("hit, is sunk?" + ship.isSunk());
}

const whatShipIs = (ships, ship) => {
    let shipIdentifyer;
    switch (ship.id) {
        case ships[0].id:
            shipIdentifyer = "ShipA";
            break;

        case ships[1].id:
            shipIdentifyer = "ShipB";
            break;
        
        case ships[2].id:
            shipIdentifyer  = "ShipC";  
            break;
        
        case ships[3].id:
            shipIdentifyer = "ShipD";
            break;

        case ships[4].id:
            shipIdentifyer = "ShipE";
            break;

        default:
            break;
    }
    return shipIdentifyer;
}

const markAsSunkCpuShip = (shipSelector) =>{
    const board = document.querySelector("#playerBoard")
    shipSelector = "." + shipSelector;
    const shipElements = board.querySelectorAll(shipSelector);
    //console.log({shipElements});
    shipElements.forEach((element)  => {
        element.classList.remove("hitShip");
        element.classList.add("sunkShip");
    }) 
}
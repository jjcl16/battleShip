const Player = require("./player");
const cpuPlays = require("./cpuPlays");

const xSize = 7;
const ySize = 7;
const player = Player(xSize,ySize);
const cpu = Player(xSize,ySize);
const cpuShipA = cpu.ships[0];
const cpuShipB = cpu.ships[1];
const cpuShipC = cpu.ships[2];
const cpuShipD = cpu.ships[3];
const cpuShipE = cpu.ships[4];

let moves = 1;

const domInit = () => {

    // init elements
    const body = document.querySelector("body");
    const top = document.createElement("div");
    const foot  = document.createElement("div");
    const workspace = document.createElement("div");

    // asing id
    top.setAttribute("id", "top");
    foot.setAttribute("id", "foot");
    workspace.setAttribute("id","workspace");

    // append to body
    body.appendChild(top);
    body.appendChild(workspace);
    body.appendChild(foot);

    // workspace boxes (attackground, sidebar (playerBoard, whoPlays))

    const attackGround = document.createElement("div");
    attackGround.setAttribute("id", "attackGround");
    
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");

    const playerBoard  = document.createElement("div");
    playerBoard.setAttribute("id", "playerBoard");

    // who plays switch
    const whoPlaysConstainer = document.createElement("div");
    whoPlaysConstainer.setAttribute("id", "whoPlaysContainer");

    const playerSelection = document.createElement("div");
    playerSelection.classList.add("selection");
    playerSelection.textContent = "Player";

    const cpuSelection = document.createElement("div");
    cpuSelection.classList.add("selection");
    cpuSelection.textContent = "CPU";

    const selector = document.createElement("div");
    selector.setAttribute("id","selector");

    whoPlaysConstainer.appendChild(playerSelection);
    whoPlaysConstainer.appendChild(cpuSelection);
    whoPlaysConstainer.appendChild(selector);

    // payerboard and whoPlaysContainer append to sidebar
    sidebar.appendChild(playerBoard);
    sidebar.appendChild(whoPlaysConstainer);

    // append to the workspace
    workspace.appendChild(sidebar);
    workspace.appendChild(attackGround);
    
    // build board for attackGround and playerBoard

    for (let x = 0; x < xSize; x++) {
        const XAttack = document.createElement("div");
        XAttack.classList.add("attackElementContainer");

        const XPlayer = document.createElement("div");
        XPlayer.classList.add("playerBoardElementContainer")

        for (let y = 0; y < ySize; y++) {
            const YAttack = document.createElement("div");
            YAttack.setAttribute("id", "A"+[x]+[y]);
            YAttack.classList.add("attackElement");
            YAttack.addEventListener("click", callAttack );
            YAttack.textContent = [x]+[y];
            XAttack.appendChild(YAttack);    
            
            const YPlayer = document.createElement("div");
            YPlayer.setAttribute("id", "P"+[x]+[y]);
            YPlayer.classList.add("playerBoardElement")
            YPlayer.textContent = [x]+[y];
            XPlayer.appendChild(YPlayer);    
        }
        attackGround.appendChild(XAttack);
        playerBoard.appendChild(XPlayer);
    }



}

module.exports = domInit;

const callAttack = (e) => {
    const shipElement = e.target;
    const board = shipElement.id[0];
    const x = shipElement.id[1];
    const y = shipElement.id[2];
    if(moves%2){
        // remove event listener
        shipElement.removeEventListener("click",callAttack)
        shipElement.classList.add("attackedZone");

        const hitAShip = cpu.playerGameboard.receiveAttack(x,y);
        (!hitAShip) ? console.log("miss hit") : attackedShip(hitAShip, shipElement);
        console.log(cpu.playerGameboard);
        moves++;
        callCpu();
    }
    
}

const attackedShip = (ship, shipElement) => {
    shipElement.classList.remove("attackedZone");
    shipElement.classList.add("hitShip");
    const shipSelector = whatShipIs(cpu.ships, ship);
    shipElement.classList.add(shipSelector);
    if(ship.isSunk()) markAsSunkCpuShip(shipSelector);
    console.log("hit, is sunk?" + ship.isSunk())
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
    const board = document.querySelector(".attackElementContainer")
    shipSelector = "." + shipSelector;
    const shipElements = document.querySelectorAll(shipSelector);
    console.log(shipElements);
    shipElements.forEach((element)  => {
        element.classList.remove("hitShip");
        element.classList.add("sunkShip");
    }) 
}

const callCpu = () => {
    cpuPlays(player);
    moves++;
}
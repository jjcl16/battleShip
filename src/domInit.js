const Player = require("./player");
const xSize = 7;
const ySize = 7;
const player = Player(xSize,ySize);
const cpu = Player(xSize,ySize);


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

    // workspace boxes (attackground, playerBoard, whoPlays)

    const attackGround = document.createElement("div");
    attackGround.setAttribute("id", "attackGround");

    const playerBoard  = document.createElement("div");
    playerBoard.setAttribute("id", "playerBoard");

    const whoPlaysConstainer = document.createElement("div");
    whoPlaysConstainer.setAttribute("id", "whoPlaysContainer");

    // append to the workspace
    workspace.appendChild(attackGround);
    workspace.appendChild(playerBoard);
    workspace.appendChild(whoPlaysConstainer);


    // build board for attackGround and playerBoard
    /*
    for (let y = 0; y < 6; y++) {
        const YAttack = document.createElement("div");

        const YPlayer = document.createElement("div");

        for (let x = 0; x < 7; x++) {
            const XAttack = document.createElement("div");
            XAttack.setAttribute("id", "A"+[x]+[y]);
            XAttack.addEventListener("click", callAttack );
            XAttack.textContent = [x]+[y];
            YAttack.appendChild(XAttack);    
            
            const XPlayer = document.createElement("div");
            XPlayer.setAttribute("id", "P"+[x]+[y]);
            YPlayer.appendChild(XPlayer);    
        }
        attackGround.appendChild(YAttack);
        playerBoard.appendChild(YPlayer);
    }
*/
    for (let x = 0; x < xSize; x++) {
        const XAttack = document.createElement("div");
        XAttack.classList.add("attackElementContainer");

        const XPlayer = document.createElement("div");

        for (let y = 0; y < ySize; y++) {
            const YAttack = document.createElement("div");
            YAttack.setAttribute("id", "A"+[x]+[y]);
            YAttack.classList.add("attackElement");
            YAttack.addEventListener("click", callAttack );
            YAttack.textContent = [x]+[y];
            XAttack.appendChild(YAttack);    
            
            const YPlayer = document.createElement("div");
            YPlayer.setAttribute("id", "P"+[x]+[y]);
            XPlayer.appendChild(YPlayer);    
        }
        attackGround.appendChild(XAttack);
        playerBoard.appendChild(XPlayer);
    }



}

module.exports = domInit;

function callAttack(e){
    const x = e.target.id[1];
    const y = e.target.id[2];
    const hit = cpu.playerGameboard.receiveAttack(x,y);
    (!hit) ? console.log("miss hit") : console.log("hit, is sunk?" + hit.isSunk());
    console.log(cpu.playerGameboard)
}
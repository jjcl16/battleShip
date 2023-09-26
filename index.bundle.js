(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/domInit.js":
/*!************************!*\
  !*** ./src/domInit.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Player = __webpack_require__(/*! ./player */ "./src/player.js");

const player = Player();
const cpu = Player();


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

}

module.exports = domInit;

function callAttack(e){
    const x = e.target.id[1];
    const y = e.target.id[2];
    const hit = cpu.playerGameboard.receiveAttack(x,y);
    (!hit) ? console.log("miss hit") : console.log("hit, is sunk?" + hit.isSunk());
    console.log(cpu.playerGameboard)
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {


const Gameboard = (x,y) => {
  const xSize = x;
  const ySize = y;

  let board = Array(xSize);
  for (let index = 0; index < xSize; index++) {
    const arrayY = Array(ySize);
    arrayY.fill("");
    board[index] = arrayY;    
  }

  const placeShip = (ship, xPosition = 0, yPosition = 0, orientation = "v") => {
    const shipLength = ship.shipSize;
    if(orientation === "v" && xPosition < xSize){
      if ((yPosition + shipLength) <= (ySize)){        
        insertShip(xPosition, yPosition, orientation, ship);
        return board;
      }
    } else if(orientation === "h" && yPosition < ySize){
      if ((xPosition + shipLength) <= (xSize)){
        insertShip(yPosition, xPosition, orientation, ship);
        return board;
      }
    }
    return false;
  }

   const receiveAttack  = (x = 0, y = 0) => {
    if(typeof(board[x][y]) === "object") {
      const shipAttacked = board[x][y];
      shipAttacked.hit();
      board[x][y] = "X";
      return shipAttacked;
    } else{      
      board[x][y] = "X";
      return false;
    } 
   }

  const insertShip = (atFixed, atBeginning, orientation = "v", ship) => {
    let shipSize = ship.shipSize;
    let isThereAShip = alreadyAShip( atFixed, atBeginning, orientation, shipSize);
    if(!isThereAShip){
      
      for(let i = atBeginning; i < (atBeginning + shipSize) ; i++ ){
        if (orientation === "h"){          
          board[i][atFixed] = ship;
        } else{
          board[atFixed][i] = ship;          
        }
      }
    }
  }

  const alreadyAShip = (atFixed, atBeginning, orientation = "v", shipSize) => {
    
    let checkShips = false;
    for(let i = atBeginning; i < (atBeginning + shipSize) ; i++ ){
      if (orientation === "h" && typeof(board[i][atFixed]) === "object"){
          checkShips = true;
          break;
      } else if(orientation === "v" && typeof(board[atFixed][i]) === "object"){
        checkShips = true;
        break;
      }    
    }
    return checkShips;
  }

  return { board, placeShip, receiveAttack }
}


module.exports = Gameboard;



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const Dom = __webpack_require__(/*! ./domInit */ "./src/domInit.js");

Dom();

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

const player = () => {

let playerGameboard = Gameboard(7,6);
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
    console.log(arrayOfShips);
    arrayOfShips.forEach(ship => {
        let received = false;
        do {
            console.log(ship);
            const x = randomIntFromInterval(1,7) - 1;
            const y = randomIntFromInterval(1,6) - 1;
            const hOrV = (randomBoolean()) ? "h" : "v";
            console.log({x,y,hOrV,ship})
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



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const Ship = (length)  => {
  const shipSize = length;
  let hitsCounter = 0;
  const id = makeid(5);

  const hit = () => {
    hitsCounter++;
  }

  const isSunk = () => {
    return (hitsCounter >=  shipSize) ? true : false;
  };
  
  return { shipSize, id, isSunk, hit }
}


module.exports = Ship;

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZUFBZSxtQkFBTyxDQUFDLGlDQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLCtCQUErQjtBQUM5RDtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwrQkFBK0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDM0VBLFlBQVksbUJBQU8sQ0FBQyxtQ0FBVztBQUMvQjtBQUNBOzs7Ozs7Ozs7O0FDRkEsa0JBQWtCLG1CQUFPLENBQUMsdUNBQWE7QUFDdkMsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbUluaXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGxheWVyID0gcmVxdWlyZShcIi4vcGxheWVyXCIpO1xyXG5cclxuY29uc3QgcGxheWVyID0gUGxheWVyKCk7XHJcbmNvbnN0IGNwdSA9IFBsYXllcigpO1xyXG5cclxuXHJcbmNvbnN0IGRvbUluaXQgPSAoKSA9PiB7XHJcblxyXG4gICAgLy8gaW5pdCBlbGVtZW50c1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGZvb3QgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IHdvcmtzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gICAgLy8gYXNpbmcgaWRcclxuICAgIHRvcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcFwiKTtcclxuICAgIGZvb3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290XCIpO1xyXG4gICAgd29ya3NwYWNlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ3b3Jrc3BhY2VcIik7XHJcblxyXG4gICAgLy8gYXBwZW5kIHRvIGJvZHlcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodG9wKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQod29ya3NwYWNlKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZm9vdCk7XHJcblxyXG4gICAgLy8gd29ya3NwYWNlIGJveGVzIChhdHRhY2tncm91bmQsIHBsYXllckJvYXJkLCB3aG9QbGF5cylcclxuXHJcbiAgICBjb25zdCBhdHRhY2tHcm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYXR0YWNrR3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXR0YWNrR3JvdW5kXCIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckJvYXJkICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllckJvYXJkXCIpO1xyXG5cclxuICAgIGNvbnN0IHdob1BsYXlzQ29uc3RhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aG9QbGF5c0NvbnN0YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3aG9QbGF5c0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICAvLyBhcHBlbmQgdG8gdGhlIHdvcmtzcGFjZVxyXG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGF0dGFja0dyb3VuZCk7XHJcbiAgICB3b3Jrc3BhY2UuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmQpO1xyXG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKHdob1BsYXlzQ29uc3RhaW5lcik7XHJcblxyXG5cclxuICAgIC8vIGJ1aWxkIGJvYXJkIGZvciBhdHRhY2tHcm91bmQgYW5kIHBsYXllckJvYXJkXHJcbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IDY7IHkrKykge1xyXG4gICAgICAgIGNvbnN0IFlBdHRhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBZUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCA3OyB4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgWEF0dGFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIFhBdHRhY2suc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJBXCIrW3hdK1t5XSk7XHJcbiAgICAgICAgICAgIFhBdHRhY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbGxBdHRhY2sgKTtcclxuICAgICAgICAgICAgWEF0dGFjay50ZXh0Q29udGVudCA9IFt4XStbeV07XHJcbiAgICAgICAgICAgIFlBdHRhY2suYXBwZW5kQ2hpbGQoWEF0dGFjayk7ICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgWFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIFhQbGF5ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJQXCIrW3hdK1t5XSk7XHJcbiAgICAgICAgICAgIFlQbGF5ZXIuYXBwZW5kQ2hpbGQoWFBsYXllcik7ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBhdHRhY2tHcm91bmQuYXBwZW5kQ2hpbGQoWUF0dGFjayk7XHJcbiAgICAgICAgcGxheWVyQm9hcmQuYXBwZW5kQ2hpbGQoWVBsYXllcik7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUluaXQ7XHJcblxyXG5mdW5jdGlvbiBjYWxsQXR0YWNrKGUpe1xyXG4gICAgY29uc3QgeCA9IGUudGFyZ2V0LmlkWzFdO1xyXG4gICAgY29uc3QgeSA9IGUudGFyZ2V0LmlkWzJdO1xyXG4gICAgY29uc3QgaGl0ID0gY3B1LnBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgseSk7XHJcbiAgICAoIWhpdCkgPyBjb25zb2xlLmxvZyhcIm1pc3MgaGl0XCIpIDogY29uc29sZS5sb2coXCJoaXQsIGlzIHN1bms/XCIgKyBoaXQuaXNTdW5rKCkpO1xyXG4gICAgY29uc29sZS5sb2coY3B1LnBsYXllckdhbWVib2FyZClcclxufSIsIlxyXG5jb25zdCBHYW1lYm9hcmQgPSAoeCx5KSA9PiB7XHJcbiAgY29uc3QgeFNpemUgPSB4O1xyXG4gIGNvbnN0IHlTaXplID0geTtcclxuXHJcbiAgbGV0IGJvYXJkID0gQXJyYXkoeFNpemUpO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB4U2l6ZTsgaW5kZXgrKykge1xyXG4gICAgY29uc3QgYXJyYXlZID0gQXJyYXkoeVNpemUpO1xyXG4gICAgYXJyYXlZLmZpbGwoXCJcIik7XHJcbiAgICBib2FyZFtpbmRleF0gPSBhcnJheVk7ICAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHhQb3NpdGlvbiA9IDAsIHlQb3NpdGlvbiA9IDAsIG9yaWVudGF0aW9uID0gXCJ2XCIpID0+IHtcclxuICAgIGNvbnN0IHNoaXBMZW5ndGggPSBzaGlwLnNoaXBTaXplO1xyXG4gICAgaWYob3JpZW50YXRpb24gPT09IFwidlwiICYmIHhQb3NpdGlvbiA8IHhTaXplKXtcclxuICAgICAgaWYgKCh5UG9zaXRpb24gKyBzaGlwTGVuZ3RoKSA8PSAoeVNpemUpKXsgICAgICAgIFxyXG4gICAgICAgIGluc2VydFNoaXAoeFBvc2l0aW9uLCB5UG9zaXRpb24sIG9yaWVudGF0aW9uLCBzaGlwKTtcclxuICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZihvcmllbnRhdGlvbiA9PT0gXCJoXCIgJiYgeVBvc2l0aW9uIDwgeVNpemUpe1xyXG4gICAgICBpZiAoKHhQb3NpdGlvbiArIHNoaXBMZW5ndGgpIDw9ICh4U2l6ZSkpe1xyXG4gICAgICAgIGluc2VydFNoaXAoeVBvc2l0aW9uLCB4UG9zaXRpb24sIG9yaWVudGF0aW9uLCBzaGlwKTtcclxuICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gICBjb25zdCByZWNlaXZlQXR0YWNrICA9ICh4ID0gMCwgeSA9IDApID0+IHtcclxuICAgIGlmKHR5cGVvZihib2FyZFt4XVt5XSkgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgY29uc3Qgc2hpcEF0dGFja2VkID0gYm9hcmRbeF1beV07XHJcbiAgICAgIHNoaXBBdHRhY2tlZC5oaXQoKTtcclxuICAgICAgYm9hcmRbeF1beV0gPSBcIlhcIjtcclxuICAgICAgcmV0dXJuIHNoaXBBdHRhY2tlZDtcclxuICAgIH0gZWxzZXsgICAgICBcclxuICAgICAgYm9hcmRbeF1beV0gPSBcIlhcIjtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBcclxuICAgfVxyXG5cclxuICBjb25zdCBpbnNlcnRTaGlwID0gKGF0Rml4ZWQsIGF0QmVnaW5uaW5nLCBvcmllbnRhdGlvbiA9IFwidlwiLCBzaGlwKSA9PiB7XHJcbiAgICBsZXQgc2hpcFNpemUgPSBzaGlwLnNoaXBTaXplO1xyXG4gICAgbGV0IGlzVGhlcmVBU2hpcCA9IGFscmVhZHlBU2hpcCggYXRGaXhlZCwgYXRCZWdpbm5pbmcsIG9yaWVudGF0aW9uLCBzaGlwU2l6ZSk7XHJcbiAgICBpZighaXNUaGVyZUFTaGlwKXtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgaSA9IGF0QmVnaW5uaW5nOyBpIDwgKGF0QmVnaW5uaW5nICsgc2hpcFNpemUpIDsgaSsrICl7XHJcbiAgICAgICAgaWYgKG9yaWVudGF0aW9uID09PSBcImhcIil7ICAgICAgICAgIFxyXG4gICAgICAgICAgYm9hcmRbaV1bYXRGaXhlZF0gPSBzaGlwO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIGJvYXJkW2F0Rml4ZWRdW2ldID0gc2hpcDsgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhbHJlYWR5QVNoaXAgPSAoYXRGaXhlZCwgYXRCZWdpbm5pbmcsIG9yaWVudGF0aW9uID0gXCJ2XCIsIHNoaXBTaXplKSA9PiB7XHJcbiAgICBcclxuICAgIGxldCBjaGVja1NoaXBzID0gZmFsc2U7XHJcbiAgICBmb3IobGV0IGkgPSBhdEJlZ2lubmluZzsgaSA8IChhdEJlZ2lubmluZyArIHNoaXBTaXplKSA7IGkrKyApe1xyXG4gICAgICBpZiAob3JpZW50YXRpb24gPT09IFwiaFwiICYmIHR5cGVvZihib2FyZFtpXVthdEZpeGVkXSkgPT09IFwib2JqZWN0XCIpe1xyXG4gICAgICAgICAgY2hlY2tTaGlwcyA9IHRydWU7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfSBlbHNlIGlmKG9yaWVudGF0aW9uID09PSBcInZcIiAmJiB0eXBlb2YoYm9hcmRbYXRGaXhlZF1baV0pID09PSBcIm9iamVjdFwiKXtcclxuICAgICAgICBjaGVja1NoaXBzID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfSAgICBcclxuICAgIH1cclxuICAgIHJldHVybiBjaGVja1NoaXBzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgYm9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjayB9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdhbWVib2FyZDtcclxuXHJcbiIsImNvbnN0IERvbSA9IHJlcXVpcmUoXCIuL2RvbUluaXRcIik7XHJcblxyXG5Eb20oKTsiLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XHJcbmNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xyXG5cclxuY29uc3QgcGxheWVyID0gKCkgPT4ge1xyXG5cclxubGV0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCg3LDYpO1xyXG5jb25zdCBzaGlwQSA9IFNoaXAoNCk7XHJcbmNvbnN0IHNoaXBCID0gU2hpcCgzKTtcclxuY29uc3Qgc2hpcEMgPSBTaGlwKDMpO1xyXG5jb25zdCBzaGlwRCA9IFNoaXAoMik7XHJcbmNvbnN0IHNoaXBFID0gU2hpcCgxKTtcclxuXHJcbi8vIEFycmF5IG9mIHNoaXAsIHRvIHBsYWNlbWVudFxyXG5jb25zdCBzaGlwcyA9IFtzaGlwQSwgc2hpcEIsIHNoaXBELCAgc2hpcEMsIHNoaXBFXTtcclxuXHJcbi8vIGNhbGwgcmFuZG9tUGxhY2VTaGlwXHJcblJhbmRvbVNoaXBQbGFjZW1lbnQoc2hpcHMpO1xyXG5cclxuLy8gZnVuY3Rpb24gdG8gcmFuZG9tbHkgcGxhY2UgdGhlIHNoaXBzIGluIHRoZSBib2FyZCBvZiBlYWNoIHBsYXllclxyXG5cclxuZnVuY3Rpb24gUmFuZG9tU2hpcFBsYWNlbWVudCAoYXJyYXlPZlNoaXBzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcnJheU9mU2hpcHMpO1xyXG4gICAgYXJyYXlPZlNoaXBzLmZvckVhY2goc2hpcCA9PiB7XHJcbiAgICAgICAgbGV0IHJlY2VpdmVkID0gZmFsc2U7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwKTtcclxuICAgICAgICAgICAgY29uc3QgeCA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLDcpIC0gMTtcclxuICAgICAgICAgICAgY29uc3QgeSA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLDYpIC0gMTtcclxuICAgICAgICAgICAgY29uc3QgaE9yViA9IChyYW5kb21Cb29sZWFuKCkpID8gXCJoXCIgOiBcInZcIjtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coe3gseSxoT3JWLHNoaXB9KVxyXG4gICAgICAgICAgICByZWNlaXZlZCA9IHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSwgaE9yVik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gd2hpbGUgKCFyZWNlaXZlZCk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuLy9vbmx5IGV4cG9zZSB0aGUgcGxheWVyR2FtZWJvYXJkIGFuZCBpdHMgbWV0aG9kcy5cclxucmV0dXJuIHsgcGxheWVyR2FtZWJvYXJkIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7XHJcblxyXG4vLyBSYW5kb20gbnVtYmVyXHJcbmNvbnN0ICByYW5kb21JbnRGcm9tSW50ZXJ2YWwgPSAobWluLCBtYXgpID0+IHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcclxufVxyXG5cclxuLy8gUmFuZG9tIGJvb2xlYW5cclxuY29uc3QgcmFuZG9tQm9vbGVhbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSA8IDAuNSk7XHJcbn0gXHJcblxyXG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgID0+IHtcclxuICBjb25zdCBzaGlwU2l6ZSA9IGxlbmd0aDtcclxuICBsZXQgaGl0c0NvdW50ZXIgPSAwO1xyXG4gIGNvbnN0IGlkID0gbWFrZWlkKDUpO1xyXG5cclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBoaXRzQ291bnRlcisrO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChoaXRzQ291bnRlciA+PSAgc2hpcFNpemUpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIHsgc2hpcFNpemUsIGlkLCBpc1N1bmssIGhpdCB9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XHJcblxyXG5mdW5jdGlvbiBtYWtlaWQobGVuZ3RoKSB7XHJcbiAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG4gIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcclxuICBsZXQgY291bnRlciA9IDA7XHJcbiAgd2hpbGUgKGNvdW50ZXIgPCBsZW5ndGgpIHtcclxuICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XHJcbiAgICBjb3VudGVyICs9IDE7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
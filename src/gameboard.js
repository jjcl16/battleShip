
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
      } else if(orientation === "v" && typeof(board[atFixed][i]) === "object"){
        checkShips = true;
      }    
    }
    return checkShips;
  }

  return { board, placeShip, receiveAttack }
}


module.exports = Gameboard;


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
        insertShip(xPosition, yPosition, orientation, shipLength);
        return board;
      }else{
        return false
      }
    } else if(orientation === "h" && yPosition < ySize){
      if ((xPosition + shipLength) <= (xSize)){
        insertShip(yPosition, xPosition, orientation, shipLength);
        return board;
      }else{
        return false
      }
    }else return false;
  }

  const receiveAttack  = (xPosition = 0, yPosition = 0) => {

  }

  const insertShip = (atFixed, atBeginning, orientation = "v", size) => {
    for(let i = atBeginning; i < atBeginning+size ; i++ ){
        if (orientation === "h"){
        board[i][atFixed] = "SHIP"
      } else{
        board[atFixed][i] = "SHIP"
      }
    }
    
  }

  return { board, placeShip, receiveAttack }
}


module.exports = Gameboard;

// let x = Array(5);
// for (let index = 0; index < 5; index++) {
//   const array = Array(6);
//   array.fill("");
//   x[index] = array;
  
// }

const Gameboard = (x,y) => {
  const xBoard = x;
  const yBoard = y;

  let board = Array(xBoard);
  for (let index = 0; index < xBoard; index++) {
    const arrayY = Array(yBoard);
    arrayY.fill("");
    board[index] = arrayY;    
  }

  const placeShip = (ship, xPosition = 0, yPosition = 0, orientation ) => {
    const shipLength = ship.shipSize;
    
    const shipFit = checkShipFit(xPosition, yPosition, shipLength, orientation, xBoard, yBoard);
    if (!shipFit) return false;
    const noShipPlace = checkNoship(xPosition, yPosition, shipLength, orientation, board);
    if (!noShipPlace) return false;
    board = placeShipOnBoard(xPosition, yPosition, ship, orientation, board);
    return board 
      
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

  

  return { board, placeShip, receiveAttack }
}


module.exports = Gameboard;


const checkShipFit = (xPosition, yPosition, shipLength, orientation, xBoard, yBoard) => {

  if (orientation === "v"){
    const positionPlusShip = yPosition + shipLength;
    return ( positionPlusShip <= yBoard );
  } else {
    const positionPlusShip = xPosition + shipLength
    return ( positionPlusShip <= xBoard );
  }

}

const checkNoship = (xPosition, yPosition, shipLength, orientation, board) => {
  let noShipPlace = true;
  if (orientation === "v"){
    const positionPlusShip = yPosition + shipLength;
    for (let moveOnY = yPosition; moveOnY < positionPlusShip; moveOnY++) {
      if (board[xPosition][moveOnY] != ""){
        noShipPlace = false;
      }      
    }
  } else {
    const positionPlusShip = xPosition + shipLength;
    for (let moveOnX = xPosition; moveOnX < positionPlusShip; moveOnX++) {
      if (board[moveOnX][yPosition] != ""){
        noShipPlace = false;
      }      
    }
  }
  return noShipPlace;
}

const placeShipOnBoard = (xPosition, yPosition, ship, orientation, board) => {
  if (orientation === "v"){
    const positionPlusShip = yPosition + ship.shipSize;
    for (let moveOnY = yPosition; moveOnY < positionPlusShip; moveOnY++) {
      board[xPosition][moveOnY] = ship;
    }
  } else {
    const positionPlusShip = xPosition + ship.shipSize;
    for (let moveOnX = xPosition; moveOnX < positionPlusShip; moveOnX++) {
      board[moveOnX][yPosition] = ship;
    }
  }
  return board;
}
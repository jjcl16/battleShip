const gameboard = require("../src/gameboard");
const ship = require("../src/ship");
const newBoard = gameboard(7,6);
const shipA = ship(3);
const shipB = ship(3);
const shipC = ship(2);

it("gameboard x-dimension is ok?", () => {  
  expect(newBoard.board.length).toBe(7);
})

it("gameboard y-dimension is ok?", () => {
  expect(newBoard.board[1].length).toBe(6);
  expect(5).toBe(5);
})

it("right ship placement (vertical)", () => {
  expect(newBoard.placeShip(shipA, 2 , 3, "v")).toStrictEqual([
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', shipA, shipA, shipA ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
} )

it("right ship placement (horizontal)", () => {
  expect(newBoard.placeShip(shipB, 0 , 0, "h")).toStrictEqual([
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', shipA, shipA, shipA ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
} )

it("wrong ship placement (horizontal)", () => {
  expect(newBoard.placeShip(shipC, 8 , 0, "h")).toBe(false);
} )

it("wrong ship placement (vertical)", () => {
  expect(newBoard.placeShip(shipC, 0 , 7, "v")).toBe(false);
} )

it("can't overplace ships horizontal", () => {
  expect(newBoard.placeShip(shipC, 1 , 4, "h")).toStrictEqual([
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', shipA, shipA, shipA ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
} )

it("can't overplace ships vertical", () => {
  expect(newBoard.placeShip(shipC, 1 , 0, "v")).toStrictEqual([
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', shipA, shipA, shipA ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);  
} )

it("add other ship", () => {
  expect(newBoard.placeShip(shipC, 0 , 1, "v")).toStrictEqual([
    [ shipB, shipC, shipC, '', '', '' ],
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', shipA, shipA, shipA ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
} )


it("Attack board (HIT)", () => {
  expect(newBoard.receiveAttack(0,2)).toStrictEqual(shipC);
  expect(newBoard.board).toStrictEqual([
    [ shipB, shipC, 'X', '', '', '' ],
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', shipA, shipA, shipA ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
  expect(shipC.isSunk()).toBe(false);
} )


it("Attack board (NO HIT)", () => {
  expect(newBoard.receiveAttack(3,2)).toBe(false);
  expect(newBoard.board).toStrictEqual([
    [ shipB, shipC, 'X', '', '', '' ],
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', shipA, shipA, shipA ],
    [ '', '', 'X', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
} )

it("Attacked board, hit shipC, is sunk", () => {
  expect(newBoard.receiveAttack(0,1)).toStrictEqual(shipC);
  expect(newBoard.board).toStrictEqual([
    [ shipB, 'X', 'X', '', '', '' ],
    [ shipB, '', '', '', '', '' ],
    [ shipB, '', '', shipA, shipA, shipA ],
    [ '', '', 'X', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
  expect(shipC.isSunk()).toBe(true);
} )
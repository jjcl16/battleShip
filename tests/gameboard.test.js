const gameboard = require("../src/gameboard");
const ship = require("../src/ship");
const newBoard = gameboard(7,6);
const newShip = ship(3);

it("gameboard x-dimension is ok?", () => {  
  expect(newBoard.board.length).toBe(7);
})

it("gameboard y-dimension is ok?", () => {
  expect(newBoard.board[1].length).toBe(6);
  expect(5).toBe(5);
})

it("right ship placement (vertical)", () => {
  expect(newBoard.placeShip(newShip, 2 , 3, "v")).toStrictEqual([
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', 'SHIP', 'SHIP', 'SHIP' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
} )

it("right ship placement (horizontal)", () => {
  expect(newBoard.placeShip(newShip, 0 , 0, "h")).toStrictEqual([
    [ 'SHIP', '', '', '', '', '' ],
    [ 'SHIP', '', '', '', '', '' ],
    [ 'SHIP', '', '', 'SHIP', 'SHIP', 'SHIP' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
} )

it("wrong ship placement (horizontal)", () => {
  expect(newBoard.placeShip(newShip, 8 , 0, "h")).toBe(false);
} )

it("wrong ship placement (vertical)", () => {
  expect(newBoard.placeShip(newShip, 0 , 7, "v")).toBe(false);
} )


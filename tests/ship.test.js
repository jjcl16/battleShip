const Ship = require("../src/ship");

const ship = Ship(2);

it("Ship size", () => {
  expect(ship.shipSize).toBe(2)
} );

it("Ship no sunk yet", () => {
  ship.hit();
  expect(ship.isSunk()).toBe(false)
} );

it("Ship sunk", () => {
  ship.hit();
  expect(ship.isSunk()).toBe(true)
} );
const Player = require("../src/player")
const player = Player();

it("player create board", () => {
  expect(player.exist).toBe(true);
})



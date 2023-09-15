const Player = require("../src/player")
const player = Player();

it.skip("player create board", () => {
  expect(player.playerGameboard.board).toStrictEqual([
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ],
    [ '', '', '', '', '', '' ]
  ]);
})


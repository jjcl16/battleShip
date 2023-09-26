const Player = require("../src/player")


it.skip("player create board", () => {
  const player = Player(7, 6);
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


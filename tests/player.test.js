const Player = require("../src/player")


it.skip("player create board", () => {
  const player = Player();
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


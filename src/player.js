const Gameboard = require("./gameboard");

const player = () => {

let board = Gameboard(8,8);
let exist = true;

return { board , exist}
}

module.exports = player;

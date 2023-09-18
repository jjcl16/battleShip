
const domInit = () => {

// init elements
const body = document.querySelector("body");
const top = document.createElement("div");
const foot  = document.createElement("div");
const workspace = document.createElement("div");

// asing id
top.setAttribute("id", "top");
foot.setAttribute("id", "foot");
workspace.setAttribute("id","workspace");

// append to body
body.appendChild(top);
body.appendChild(workspace);
body.appendChild(foot);

// workspace boxes (attackground, playerBoard, whoPlays)

const attackGround = document.createElement("div");
attackGround.setAttribute("id", "attackGround");

const playerBoard  = document.createElement("div");
playerBoard.setAttribute("id", "playerBoard");

const whoPlaysConstainer = document.createElement("div");
whoPlaysConstainer.setAttribute("id", "whoPlaysContainer");

}

module.exports = domInit;
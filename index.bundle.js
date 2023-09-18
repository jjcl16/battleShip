(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/domInit.js":
/*!************************!*\
  !*** ./src/domInit.js ***!
  \************************/
/***/ ((module) => {


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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const Dom = __webpack_require__(/*! ./domInit */ "./src/domInit.js");

Dom();

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDaENBLFlBQVksbUJBQU8sQ0FBQyxtQ0FBVztBQUMvQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21Jbml0LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IGRvbUluaXQgPSAoKSA9PiB7XHJcblxyXG4vLyBpbml0IGVsZW1lbnRzXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgdG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgZm9vdCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCB3b3Jrc3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuLy8gYXNpbmcgaWRcclxudG9wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wXCIpO1xyXG5mb290LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdFwiKTtcclxud29ya3NwYWNlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJ3b3Jrc3BhY2VcIik7XHJcblxyXG4vLyBhcHBlbmQgdG8gYm9keVxyXG5ib2R5LmFwcGVuZENoaWxkKHRvcCk7XHJcbmJvZHkuYXBwZW5kQ2hpbGQod29ya3NwYWNlKTtcclxuYm9keS5hcHBlbmRDaGlsZChmb290KTtcclxuXHJcbi8vIHdvcmtzcGFjZSBib3hlcyAoYXR0YWNrZ3JvdW5kLCBwbGF5ZXJCb2FyZCwgd2hvUGxheXMpXHJcblxyXG5jb25zdCBhdHRhY2tHcm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5hdHRhY2tHcm91bmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhdHRhY2tHcm91bmRcIik7XHJcblxyXG5jb25zdCBwbGF5ZXJCb2FyZCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5wbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllckJvYXJkXCIpO1xyXG5cclxuY29uc3Qgd2hvUGxheXNDb25zdGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxud2hvUGxheXNDb25zdGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwid2hvUGxheXNDb250YWluZXJcIik7XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUluaXQ7IiwiY29uc3QgRG9tID0gcmVxdWlyZShcIi4vZG9tSW5pdFwiKTtcclxuXHJcbkRvbSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
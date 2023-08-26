(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

const ship = Ship(4);
const shop = Ship(3)


console.log("runniiiiiing");
console.log({ship, shop});

for (let index = 0; index < 4; index++) {
  ship.hit();
  shop.hit();
  console.log(ship.isSunk());
  console.log("-----------------------------------------------------------------")  
  console.log(shop.isSunk());
  console.log("*****************************************************************") 
   
}

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

const Ship = (length)  => {
  const shipSize = length;
  let hitsCounter = 0;

  const hit = () => {
    hitsCounter++;
  }

  const isSunk = () => {
    return (hitsCounter >=  shipSize) ? true : false;
  };
  
  return { shipSize , isSunk, hit }
}


module.exports = Ship;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsV0FBVztBQUN4QjtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IHJlcXVpcmUoXCIuL3NoaXBcIik7XHJcblxyXG5jb25zdCBzaGlwID0gU2hpcCg0KTtcclxuY29uc3Qgc2hvcCA9IFNoaXAoMylcclxuXHJcblxyXG5jb25zb2xlLmxvZyhcInJ1bm5paWlpaWluZ1wiKTtcclxuY29uc29sZS5sb2coe3NoaXAsIHNob3B9KTtcclxuXHJcbmZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCA0OyBpbmRleCsrKSB7XHJcbiAgc2hpcC5oaXQoKTtcclxuICBzaG9wLmhpdCgpO1xyXG4gIGNvbnNvbGUubG9nKHNoaXAuaXNTdW5rKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIikgIFxyXG4gIGNvbnNvbGUubG9nKHNob3AuaXNTdW5rKCkpO1xyXG4gIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcIikgXHJcbiAgIFxyXG59IiwiY29uc3QgU2hpcCA9IChsZW5ndGgpICA9PiB7XHJcbiAgY29uc3Qgc2hpcFNpemUgPSBsZW5ndGg7XHJcbiAgbGV0IGhpdHNDb3VudGVyID0gMDtcclxuXHJcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgaGl0c0NvdW50ZXIrKztcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgIHJldHVybiAoaGl0c0NvdW50ZXIgPj0gIHNoaXBTaXplKSA/IHRydWUgOiBmYWxzZTtcclxuICB9O1xyXG4gIFxyXG4gIHJldHVybiB7IHNoaXBTaXplICwgaXNTdW5rLCBoaXQgfVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTaGlwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.attackElement{
    border: 2px solid black;
    margin: 10px;
    background-color: white;
    transition: all 0.7s;
}

.playerBoardElement {
    border: 2px solid black;
    margin: 3px;  
    background-color: white;
    transition: all 0.7s;
}

.attackElementContainer, .playerBoardElementContainer {
    display: flex;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;

}

#top {
    height: 8vh;
}

#workspace {
    display: grid;
    grid-template: 80vh / 25vw 60vw;
}

#sidebar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#attackGround {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.attackedZone {
    background-color: rgb(255, 153, 0);
}

.hitShip {
    background-color: rgb(255, 0, 0);
    
}

.sunkShip {
    background-color: black;
}

#whoPlaysContainer{
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 40%;
    height: 3vh;
}

.selection{
    z-index: 1;
    text-justify: center;
    text-align: center;
    width: 50%;
}

#selector {
    position: absolute;
    background-color: rgba(121, 130, 131, 0.444);
    width: 50%;
    height: 100%;
    z-index: 2;
    left: 0%;
    transition: all 0.6s ease-in-out
}

#selector.cpu {
    left: 50%;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,WAAW;IACX,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,gCAAgC;;AAEpC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,4CAA4C;IAC5C,UAAU;IACV,YAAY;IACZ,UAAU;IACV,QAAQ;IACR;AACJ;;AAEA;IACI,SAAS;AACb","sourcesContent":[".attackElement{\r\n    border: 2px solid black;\r\n    margin: 10px;\r\n    background-color: white;\r\n    transition: all 0.7s;\r\n}\r\n\r\n.playerBoardElement {\r\n    border: 2px solid black;\r\n    margin: 3px;  \r\n    background-color: white;\r\n    transition: all 0.7s;\r\n}\r\n\r\n.attackElementContainer, .playerBoardElementContainer {\r\n    display: flex;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n#top {\r\n    height: 8vh;\r\n}\r\n\r\n#workspace {\r\n    display: grid;\r\n    grid-template: 80vh / 25vw 60vw;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#attackGround {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.attackedZone {\r\n    background-color: rgb(255, 153, 0);\r\n}\r\n\r\n.hitShip {\r\n    background-color: rgb(255, 0, 0);\r\n    \r\n}\r\n\r\n.sunkShip {\r\n    background-color: black;\r\n}\r\n\r\n#whoPlaysContainer{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    width: 40%;\r\n    height: 3vh;\r\n}\r\n\r\n.selection{\r\n    z-index: 1;\r\n    text-justify: center;\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n\r\n#selector {\r\n    position: absolute;\r\n    background-color: rgba(121, 130, 131, 0.444);\r\n    width: 50%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    left: 0%;\r\n    transition: all 0.6s ease-in-out\r\n}\r\n\r\n#selector.cpu {\r\n    left: 50%;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cpuPlays.js":
/*!*************************!*\
  !*** ./src/cpuPlays.js ***!
  \*************************/
/***/ ((module) => {

/**
 * make an a logic for the cpu attack, no repeating moves
 * @param  player 
 */

let previousCpuPlay = []

const cpu = (player) =>{
    const newMove = getNewPosition();
    previousCpuPlay.push(newMove);
    const playerBoardElement = document.querySelector("#P" + newMove[0].toString() + newMove[1].toString());

    playerBoardElement.classList.add("attackedZone");
    const hitAShip = player.playerGameboard.receiveAttack(newMove[0],newMove[1]);
    if (hitAShip){
        attackedShip(hitAShip, playerBoardElement, player.ships);
        return cpuPlays(player);
    }
}

const cpuPlays = (player) => { 
    return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(cpu(player));
                    }, 1500);
                });
    }
module.exports = cpuPlays;

// Random number
const  randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const getCoordenates = () => {
    const x = randomIntFromInterval(1,7) - 1;
    const y = randomIntFromInterval(1,7) - 1;
    return [x,y];
}

const getNewPosition = () => {
    let newPosition = getCoordenates();

    for (let index = 0; index < previousCpuPlay.length; index++) {
        if(previousCpuPlay[index][0] === newPosition[0] && previousCpuPlay[index][1] === newPosition[1]){
            newPosition = getNewPosition();
        }
        
    }
    
    return newPosition;
}

const attackedShip = (ship, shipElement, ships) => {
    shipElement.classList.remove("attackedZone");
    shipElement.classList.add("hitShip");
    const shipSelector = whatShipIs(ships, ship);

    shipElement.classList.add(shipSelector);
    if(ship.isSunk()) markAsSunkCpuShip(shipSelector);
    console.log("hit, is sunk?" + ship.isSunk());
}

const whatShipIs = (ships, ship) => {
    let shipIdentifyer;
    switch (ship.id) {
        case ships[0].id:
            shipIdentifyer = "ShipA";
            break;

        case ships[1].id:
            shipIdentifyer = "ShipB";
            break;
        
        case ships[2].id:
            shipIdentifyer  = "ShipC";  
            break;
        
        case ships[3].id:
            shipIdentifyer = "ShipD";
            break;

        case ships[4].id:
            shipIdentifyer = "ShipE";
            break;

        default:
            break;
    }
    return shipIdentifyer;
}

const markAsSunkCpuShip = (shipSelector) =>{
    const board = document.querySelector("#playerBoard")
    shipSelector = "." + shipSelector;
    const shipElements = board.querySelectorAll(shipSelector);
    //console.log({shipElements});
    shipElements.forEach((element)  => {
        element.classList.remove("hitShip");
        element.classList.add("sunkShip");
    }) 
}

/***/ }),

/***/ "./src/domInit.js":
/*!************************!*\
  !*** ./src/domInit.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Player = __webpack_require__(/*! ./player */ "./src/player.js");
const cpuPlays = __webpack_require__(/*! ./cpuPlays */ "./src/cpuPlays.js");

const xSize = 7;
const ySize = 7;
const player = Player(xSize,ySize);
const cpu = Player(xSize,ySize);
const cpuShipA = cpu.ships[0];
const cpuShipB = cpu.ships[1];
const cpuShipC = cpu.ships[2];
const cpuShipD = cpu.ships[3];
const cpuShipE = cpu.ships[4];

let moves = 1;

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

    // workspace boxes (attackground, sidebar (playerBoard, whoPlays))

    const attackGround = document.createElement("div");
    attackGround.setAttribute("id", "attackGround");
    
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");

    const playerBoard  = document.createElement("div");
    playerBoard.setAttribute("id", "playerBoard");

    // who plays switch
    const whoPlaysConstainer = document.createElement("div");
    whoPlaysConstainer.setAttribute("id", "whoPlaysContainer");

    const playerSelection = document.createElement("div");
    playerSelection.classList.add("selection");
    playerSelection.textContent = "Player";

    const cpuSelection = document.createElement("div");
    cpuSelection.classList.add("selection");
    cpuSelection.textContent = "CPU";

    const selector = document.createElement("div");
    selector.setAttribute("id","selector");

    whoPlaysConstainer.appendChild(playerSelection);
    whoPlaysConstainer.appendChild(cpuSelection);
    whoPlaysConstainer.appendChild(selector);

    // payerboard and whoPlaysContainer append to sidebar
    sidebar.appendChild(playerBoard);
    sidebar.appendChild(whoPlaysConstainer);

    // append to the workspace
    workspace.appendChild(sidebar);
    workspace.appendChild(attackGround);
    
    // build board for attackGround and playerBoard

    for (let x = 0; x < xSize; x++) {
        const XAttack = document.createElement("div");
        XAttack.classList.add("attackElementContainer");

        const XPlayer = document.createElement("div");
        XPlayer.classList.add("playerBoardElementContainer")

        for (let y = 0; y < ySize; y++) {
            const YAttack = document.createElement("div");
            YAttack.setAttribute("id", "A"+[x]+[y]);
            YAttack.classList.add("attackElement");
            YAttack.addEventListener("click", callAttack );
            YAttack.textContent = [x]+[y];
            XAttack.appendChild(YAttack);    
            
            const YPlayer = document.createElement("div");
            YPlayer.setAttribute("id", "P"+[x]+[y]);
            YPlayer.classList.add("playerBoardElement")
            YPlayer.textContent = [x]+[y];
            XPlayer.appendChild(YPlayer);    
        }
        attackGround.appendChild(XAttack);
        playerBoard.appendChild(XPlayer);
    }



}

module.exports = domInit;

const callAttack = (e) => {
    const shipElement = e.target;
    const board = shipElement.id[0];
    const x = shipElement.id[1];
    const y = shipElement.id[2];
    if(moves%2){
        // remove event listener
        shipElement.removeEventListener("click",callAttack)
        shipElement.classList.add("attackedZone");

        const hitAShip = cpu.playerGameboard.receiveAttack(x,y);
        if (!hitAShip) {
            moves++;
            callCpu();
        } else{
            attackedShip(hitAShip, shipElement);
        }
        //console.log(cpu.playerGameboard);
        
    }
    
}

const attackedShip = (ship, shipElement) => {
    shipElement.classList.remove("attackedZone");
    shipElement.classList.add("hitShip");
    const shipSelector = whatShipIs(cpu.ships, ship);
    shipElement.classList.add(shipSelector);
    if(ship.isSunk()) markAsSunkCpuShip(shipSelector);
    console.log("hit, is sunk?" + ship.isSunk())
}

const whatShipIs = (ships, ship) => {
    let shipIdentifyer;
    switch (ship.id) {
        case ships[0].id:
            shipIdentifyer = "ShipA";
            break;

        case ships[1].id:
            shipIdentifyer = "ShipB";
            break;
        
        case ships[2].id:
            shipIdentifyer  = "ShipC";  
            break;
        
        case ships[3].id:
            shipIdentifyer = "ShipD";
            break;

        case ships[4].id:
            shipIdentifyer = "ShipE";
            break;

        default:
            break;
    }
    return shipIdentifyer;
}

const markAsSunkCpuShip = (shipSelector) =>{
    const board = document.querySelector("#attackGround")
    shipSelector = "." + shipSelector;
    const shipElements = board.querySelectorAll(shipSelector);
    //console.log(shipElements);
    shipElements.forEach((element)  => {
        element.classList.remove("hitShip");
        element.classList.add("sunkShip");
    }) 
}


const callCpu = () => {
    console.log("callCpu");
    const selector = document.querySelector("#selector");
    selector.classList.add("cpu");
    cpuPlays(player).then(() => {
            moves++;
            selector.classList.remove("cpu");
        });
}

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module) => {


const Gameboard = (x,y) => {
  const xBoard = x;
  const yBoard = y;

  let board = Array(xBoard);
  for (let index = 0; index < xBoard; index++) {
    const arrayY = Array(yBoard);
    arrayY.fill("");
    board[index] = arrayY;    
  }

  const placeShip = (ship, xPosition = 0, yPosition = 0, orientation ) => {
    const shipLength = ship.shipSize;
    
    const shipFit = checkShipFit(xPosition, yPosition, shipLength, orientation, xBoard, yBoard);
    if (!shipFit) return false;
    const noShipPlace = checkNoship(xPosition, yPosition, shipLength, orientation, board);
    if (!noShipPlace) return false;
    board = placeShipOnBoard(xPosition, yPosition, ship, orientation, board);
    return board 
      
  }

   const receiveAttack  = (x = 0, y = 0) => {
    if(typeof(board[x][y]) === "object") {
      const shipAttacked = board[x][y];
      shipAttacked.hit();
      board[x][y] = "X";
      return shipAttacked;
    } else{      
      board[x][y] = "X";
      return false;
    } 
   }

  

  return { board, placeShip, receiveAttack }
}


module.exports = Gameboard;


const checkShipFit = (xPosition, yPosition, shipLength, orientation, xBoard, yBoard) => {

  if (orientation === "v"){
    const positionPlusShip = yPosition + shipLength;
    return ( positionPlusShip <= yBoard );
  } else {
    const positionPlusShip = xPosition + shipLength
    return ( positionPlusShip <= xBoard );
  }

}

const checkNoship = (xPosition, yPosition, shipLength, orientation, board) => {
  let noShipPlace = true;
  if (orientation === "v"){
    const positionPlusShip = yPosition + shipLength;
    for (let moveOnY = yPosition; moveOnY < positionPlusShip; moveOnY++) {
      if (board[xPosition][moveOnY] != ""){
        noShipPlace = false;
      }      
    }
  } else {
    const positionPlusShip = xPosition + shipLength;
    for (let moveOnX = xPosition; moveOnX < positionPlusShip; moveOnX++) {
      if (board[moveOnX][yPosition] != ""){
        noShipPlace = false;
      }      
    }
  }
  return noShipPlace;
}

const placeShipOnBoard = (xPosition, yPosition, ship, orientation, board) => {
  if (orientation === "v"){
    const positionPlusShip = yPosition + ship.shipSize;
    for (let moveOnY = yPosition; moveOnY < positionPlusShip; moveOnY++) {
      board[xPosition][moveOnY] = ship;
    }
  } else {
    const positionPlusShip = xPosition + ship.shipSize;
    for (let moveOnX = xPosition; moveOnX < positionPlusShip; moveOnX++) {
      board[moveOnX][yPosition] = ship;
    }
  }
  return board;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
const Dom = __webpack_require__(/*! ./domInit */ "./src/domInit.js");
//const cpuPlays = require("./cpuPlays")


//cpuPlays();
Dom();

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Gameboard = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const Ship = __webpack_require__(/*! ./ship */ "./src/ship.js");

const player = (x,y) => {

let playerGameboard = Gameboard(x,y);
const shipA = Ship(4);
const shipB = Ship(3);
const shipC = Ship(3);
const shipD = Ship(2);
const shipE = Ship(1);

// Array of ship, to placement
const ships = [shipA, shipB, shipD,  shipC, shipE];

// call randomPlaceShip
RandomShipPlacement(ships);

// function to randomly place the ships in the board of each player

function RandomShipPlacement (arrayOfShips) {
    //console.log(arrayOfShips);
    arrayOfShips.forEach(ship => {
        let received = false;
        do {
            //console.log(ship);
            const xSet = randomIntFromInterval(1,x) - 1;
            const ySet = randomIntFromInterval(1,y) - 1;
            const hOrV = (randomBoolean()) ? "h" : "v";
            //console.log({x,y,hOrV,ship})
            received = playerGameboard.placeShip(ship, xSet, ySet, hOrV);
            
        } while (!received);        
    });
}



//only expose the playerGameboard and its methods.
return { playerGameboard,  ships }
}

module.exports = player;

// Random number
const  randomIntFromInterval = (min, max) => { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// Random boolean
const randomBoolean = () => {
    return (Math.random() < 0.5);
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
  const id = makeid(5);

  const hit = () => {
    hitsCounter++;
  }

  const isSunk = () => {
    return (hitsCounter >=  shipSize) ? true : false;
  };
  
  return { shipSize, id, isSunk, hit }
}


module.exports = Ship;

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7Ozs7Ozs7O0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQkFBZ0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDRCQUE0QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQ7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLGtDQUFrQyw0QkFBNEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzFGQSxtQkFBTyxDQUFDLGtEQUFvQjtBQUM1QixZQUFZLG1CQUFPLENBQUMsbUNBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ05BLGtCQUFrQixtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZDLGFBQWEsbUJBQU8sQ0FBQyw2QkFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsY0FBYztBQUN6QztBQUNBO0FBQ0EsVUFBVTtBQUNWLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jcHVQbGF5cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbUluaXQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hdHRhY2tFbGVtZW50e1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzO1xyXG59XHJcblxyXG4ucGxheWVyQm9hcmRFbGVtZW50IHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luOiAzcHg7ICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbn1cclxuXHJcbi5hdHRhY2tFbGVtZW50Q29udGFpbmVyLCAucGxheWVyQm9hcmRFbGVtZW50Q29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuI3RvcCB7XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxufVxyXG5cclxuI3dvcmtzcGFjZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogODB2aCAvIDI1dncgNjB2dztcclxufVxyXG5cclxuI3NpZGViYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhdHRhY2tHcm91bmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdHRhY2tlZFpvbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTUzLCAwKTtcclxufVxyXG5cclxuLmhpdFNoaXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XHJcbiAgICBcclxufVxyXG5cclxuLnN1bmtTaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jd2hvUGxheXNDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogM3ZoO1xyXG59XHJcblxyXG4uc2VsZWN0aW9ue1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuI3NlbGVjdG9yIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAxMzAsIDEzMSwgMC40NDQpO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0XHJcbn1cclxuXHJcbiNzZWxlY3Rvci5jcHUge1xyXG4gICAgbGVmdDogNTAlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFFBQVE7SUFDUjtBQUNKOztBQUVBO0lBQ0ksU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hdHRhY2tFbGVtZW50e1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJCb2FyZEVsZW1lbnQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luOiAzcHg7ICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjdzO1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0YWNrRWxlbWVudENvbnRhaW5lciwgLnBsYXllckJvYXJkRWxlbWVudENvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4jdG9wIHtcXHJcXG4gICAgaGVpZ2h0OiA4dmg7XFxyXFxufVxcclxcblxcclxcbiN3b3Jrc3BhY2Uge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA4MHZoIC8gMjV2dyA2MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYXR0YWNrR3JvdW5kIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hdHRhY2tlZFpvbmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTMsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uaGl0U2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLnN1bmtTaGlwIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiN3aG9QbGF5c0NvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIGhlaWdodDogM3ZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0aW9ue1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0b3Ige1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIxLCAxMzAsIDEzMSwgMC40NDQpO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIGxlZnQ6IDAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dFxcclxcbn1cXHJcXG5cXHJcXG4jc2VsZWN0b3IuY3B1IHtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyoqXHJcbiAqIG1ha2UgYW4gYSBsb2dpYyBmb3IgdGhlIGNwdSBhdHRhY2ssIG5vIHJlcGVhdGluZyBtb3Zlc1xyXG4gKiBAcGFyYW0gIHBsYXllciBcclxuICovXHJcblxyXG5sZXQgcHJldmlvdXNDcHVQbGF5ID0gW11cclxuXHJcbmNvbnN0IGNwdSA9IChwbGF5ZXIpID0+e1xyXG4gICAgY29uc3QgbmV3TW92ZSA9IGdldE5ld1Bvc2l0aW9uKCk7XHJcbiAgICBwcmV2aW91c0NwdVBsYXkucHVzaChuZXdNb3ZlKTtcclxuICAgIGNvbnN0IHBsYXllckJvYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUFwiICsgbmV3TW92ZVswXS50b1N0cmluZygpICsgbmV3TW92ZVsxXS50b1N0cmluZygpKTtcclxuXHJcbiAgICBwbGF5ZXJCb2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImF0dGFja2VkWm9uZVwiKTtcclxuICAgIGNvbnN0IGhpdEFTaGlwID0gcGxheWVyLnBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKG5ld01vdmVbMF0sbmV3TW92ZVsxXSk7XHJcbiAgICBpZiAoaGl0QVNoaXApe1xyXG4gICAgICAgIGF0dGFja2VkU2hpcChoaXRBU2hpcCwgcGxheWVyQm9hcmRFbGVtZW50LCBwbGF5ZXIuc2hpcHMpO1xyXG4gICAgICAgIHJldHVybiBjcHVQbGF5cyhwbGF5ZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjcHVQbGF5cyA9IChwbGF5ZXIpID0+IHsgXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY3B1KHBsYXllcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbm1vZHVsZS5leHBvcnRzID0gY3B1UGxheXM7XHJcblxyXG4vLyBSYW5kb20gbnVtYmVyXHJcbmNvbnN0ICByYW5kb21JbnRGcm9tSW50ZXJ2YWwgPSAobWluLCBtYXgpID0+IHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKVxyXG4gIH1cclxuXHJcbmNvbnN0IGdldENvb3JkZW5hdGVzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeCA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLDcpIC0gMTtcclxuICAgIGNvbnN0IHkgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSw3KSAtIDE7XHJcbiAgICByZXR1cm4gW3gseV07XHJcbn1cclxuXHJcbmNvbnN0IGdldE5ld1Bvc2l0aW9uID0gKCkgPT4ge1xyXG4gICAgbGV0IG5ld1Bvc2l0aW9uID0gZ2V0Q29vcmRlbmF0ZXMoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcHJldmlvdXNDcHVQbGF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmKHByZXZpb3VzQ3B1UGxheVtpbmRleF1bMF0gPT09IG5ld1Bvc2l0aW9uWzBdICYmIHByZXZpb3VzQ3B1UGxheVtpbmRleF1bMV0gPT09IG5ld1Bvc2l0aW9uWzFdKXtcclxuICAgICAgICAgICAgbmV3UG9zaXRpb24gPSBnZXROZXdQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIG5ld1Bvc2l0aW9uO1xyXG59XHJcblxyXG5jb25zdCBhdHRhY2tlZFNoaXAgPSAoc2hpcCwgc2hpcEVsZW1lbnQsIHNoaXBzKSA9PiB7XHJcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrZWRab25lXCIpO1xyXG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpdFNoaXBcIik7XHJcbiAgICBjb25zdCBzaGlwU2VsZWN0b3IgPSB3aGF0U2hpcElzKHNoaXBzLCBzaGlwKTtcclxuXHJcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKHNoaXBTZWxlY3Rvcik7XHJcbiAgICBpZihzaGlwLmlzU3VuaygpKSBtYXJrQXNTdW5rQ3B1U2hpcChzaGlwU2VsZWN0b3IpO1xyXG4gICAgY29uc29sZS5sb2coXCJoaXQsIGlzIHN1bms/XCIgKyBzaGlwLmlzU3VuaygpKTtcclxufVxyXG5cclxuY29uc3Qgd2hhdFNoaXBJcyA9IChzaGlwcywgc2hpcCkgPT4ge1xyXG4gICAgbGV0IHNoaXBJZGVudGlmeWVyO1xyXG4gICAgc3dpdGNoIChzaGlwLmlkKSB7XHJcbiAgICAgICAgY2FzZSBzaGlwc1swXS5pZDpcclxuICAgICAgICAgICAgc2hpcElkZW50aWZ5ZXIgPSBcIlNoaXBBXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNoaXBzWzFdLmlkOlxyXG4gICAgICAgICAgICBzaGlwSWRlbnRpZnllciA9IFwiU2hpcEJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBzaGlwc1syXS5pZDpcclxuICAgICAgICAgICAgc2hpcElkZW50aWZ5ZXIgID0gXCJTaGlwQ1wiOyAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2Ugc2hpcHNbM10uaWQ6XHJcbiAgICAgICAgICAgIHNoaXBJZGVudGlmeWVyID0gXCJTaGlwRFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBzaGlwc1s0XS5pZDpcclxuICAgICAgICAgICAgc2hpcElkZW50aWZ5ZXIgPSBcIlNoaXBFXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBzaGlwSWRlbnRpZnllcjtcclxufVxyXG5cclxuY29uc3QgbWFya0FzU3Vua0NwdVNoaXAgPSAoc2hpcFNlbGVjdG9yKSA9PntcclxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJCb2FyZFwiKVxyXG4gICAgc2hpcFNlbGVjdG9yID0gXCIuXCIgKyBzaGlwU2VsZWN0b3I7XHJcbiAgICBjb25zdCBzaGlwRWxlbWVudHMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKHNoaXBTZWxlY3Rvcik7XHJcbiAgICAvL2NvbnNvbGUubG9nKHtzaGlwRWxlbWVudHN9KTtcclxuICAgIHNoaXBFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSAgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpdFNoaXBcIik7XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic3Vua1NoaXBcIik7XHJcbiAgICB9KSBcclxufSIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcclxuY29uc3QgY3B1UGxheXMgPSByZXF1aXJlKFwiLi9jcHVQbGF5c1wiKTtcclxuXHJcbmNvbnN0IHhTaXplID0gNztcclxuY29uc3QgeVNpemUgPSA3O1xyXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoeFNpemUseVNpemUpO1xyXG5jb25zdCBjcHUgPSBQbGF5ZXIoeFNpemUseVNpemUpO1xyXG5jb25zdCBjcHVTaGlwQSA9IGNwdS5zaGlwc1swXTtcclxuY29uc3QgY3B1U2hpcEIgPSBjcHUuc2hpcHNbMV07XHJcbmNvbnN0IGNwdVNoaXBDID0gY3B1LnNoaXBzWzJdO1xyXG5jb25zdCBjcHVTaGlwRCA9IGNwdS5zaGlwc1szXTtcclxuY29uc3QgY3B1U2hpcEUgPSBjcHUuc2hpcHNbNF07XHJcblxyXG5sZXQgbW92ZXMgPSAxO1xyXG5cclxuY29uc3QgZG9tSW5pdCA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBpbml0IGVsZW1lbnRzXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZm9vdCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAvLyBhc2luZyBpZFxyXG4gICAgdG9wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wXCIpO1xyXG4gICAgZm9vdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RcIik7XHJcbiAgICB3b3Jrc3BhY2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcIndvcmtzcGFjZVwiKTtcclxuXHJcbiAgICAvLyBhcHBlbmQgdG8gYm9keVxyXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0b3ApO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrc3BhY2UpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290KTtcclxuXHJcbiAgICAvLyB3b3Jrc3BhY2UgYm94ZXMgKGF0dGFja2dyb3VuZCwgc2lkZWJhciAocGxheWVyQm9hcmQsIHdob1BsYXlzKSlcclxuXHJcbiAgICBjb25zdCBhdHRhY2tHcm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYXR0YWNrR3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXR0YWNrR3JvdW5kXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyXCIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckJvYXJkICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllckJvYXJkXCIpO1xyXG5cclxuICAgIC8vIHdobyBwbGF5cyBzd2l0Y2hcclxuICAgIGNvbnN0IHdob1BsYXlzQ29uc3RhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aG9QbGF5c0NvbnN0YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3aG9QbGF5c0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb25cIik7XHJcbiAgICBwbGF5ZXJTZWxlY3Rpb24udGV4dENvbnRlbnQgPSBcIlBsYXllclwiO1xyXG5cclxuICAgIGNvbnN0IGNwdVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjcHVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvblwiKTtcclxuICAgIGNwdVNlbGVjdGlvbi50ZXh0Q29udGVudCA9IFwiQ1BVXCI7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VsZWN0b3Iuc2V0QXR0cmlidXRlKFwiaWRcIixcInNlbGVjdG9yXCIpO1xyXG5cclxuICAgIHdob1BsYXlzQ29uc3RhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJTZWxlY3Rpb24pO1xyXG4gICAgd2hvUGxheXNDb25zdGFpbmVyLmFwcGVuZENoaWxkKGNwdVNlbGVjdGlvbik7XHJcbiAgICB3aG9QbGF5c0NvbnN0YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xyXG5cclxuICAgIC8vIHBheWVyYm9hcmQgYW5kIHdob1BsYXlzQ29udGFpbmVyIGFwcGVuZCB0byBzaWRlYmFyXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQod2hvUGxheXNDb25zdGFpbmVyKTtcclxuXHJcbiAgICAvLyBhcHBlbmQgdG8gdGhlIHdvcmtzcGFjZVxyXG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKHNpZGViYXIpO1xyXG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGF0dGFja0dyb3VuZCk7XHJcbiAgICBcclxuICAgIC8vIGJ1aWxkIGJvYXJkIGZvciBhdHRhY2tHcm91bmQgYW5kIHBsYXllckJvYXJkXHJcblxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB4U2l6ZTsgeCsrKSB7XHJcbiAgICAgICAgY29uc3QgWEF0dGFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgWEF0dGFjay5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrRWxlbWVudENvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgWFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgWFBsYXllci5jbGFzc0xpc3QuYWRkKFwicGxheWVyQm9hcmRFbGVtZW50Q29udGFpbmVyXCIpXHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgeVNpemU7IHkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBZQXR0YWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgWUF0dGFjay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkFcIitbeF0rW3ldKTtcclxuICAgICAgICAgICAgWUF0dGFjay5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrRWxlbWVudFwiKTtcclxuICAgICAgICAgICAgWUF0dGFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbEF0dGFjayApO1xyXG4gICAgICAgICAgICBZQXR0YWNrLnRleHRDb250ZW50ID0gW3hdK1t5XTtcclxuICAgICAgICAgICAgWEF0dGFjay5hcHBlbmRDaGlsZChZQXR0YWNrKTsgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBZUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgWVBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlBcIitbeF0rW3ldKTtcclxuICAgICAgICAgICAgWVBsYXllci5jbGFzc0xpc3QuYWRkKFwicGxheWVyQm9hcmRFbGVtZW50XCIpXHJcbiAgICAgICAgICAgIFlQbGF5ZXIudGV4dENvbnRlbnQgPSBbeF0rW3ldO1xyXG4gICAgICAgICAgICBYUGxheWVyLmFwcGVuZENoaWxkKFlQbGF5ZXIpOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYXR0YWNrR3JvdW5kLmFwcGVuZENoaWxkKFhBdHRhY2spO1xyXG4gICAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKFhQbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUluaXQ7XHJcblxyXG5jb25zdCBjYWxsQXR0YWNrID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBib2FyZCA9IHNoaXBFbGVtZW50LmlkWzBdO1xyXG4gICAgY29uc3QgeCA9IHNoaXBFbGVtZW50LmlkWzFdO1xyXG4gICAgY29uc3QgeSA9IHNoaXBFbGVtZW50LmlkWzJdO1xyXG4gICAgaWYobW92ZXMlMil7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgc2hpcEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY2FsbEF0dGFjaylcclxuICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRab25lXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBoaXRBU2hpcCA9IGNwdS5wbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LHkpO1xyXG4gICAgICAgIGlmICghaGl0QVNoaXApIHtcclxuICAgICAgICAgICAgbW92ZXMrKztcclxuICAgICAgICAgICAgY2FsbENwdSgpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgYXR0YWNrZWRTaGlwKGhpdEFTaGlwLCBzaGlwRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coY3B1LnBsYXllckdhbWVib2FyZCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuY29uc3QgYXR0YWNrZWRTaGlwID0gKHNoaXAsIHNoaXBFbGVtZW50KSA9PiB7XHJcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYXR0YWNrZWRab25lXCIpO1xyXG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpdFNoaXBcIik7XHJcbiAgICBjb25zdCBzaGlwU2VsZWN0b3IgPSB3aGF0U2hpcElzKGNwdS5zaGlwcywgc2hpcCk7XHJcbiAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKHNoaXBTZWxlY3Rvcik7XHJcbiAgICBpZihzaGlwLmlzU3VuaygpKSBtYXJrQXNTdW5rQ3B1U2hpcChzaGlwU2VsZWN0b3IpO1xyXG4gICAgY29uc29sZS5sb2coXCJoaXQsIGlzIHN1bms/XCIgKyBzaGlwLmlzU3VuaygpKVxyXG59XHJcblxyXG5jb25zdCB3aGF0U2hpcElzID0gKHNoaXBzLCBzaGlwKSA9PiB7XHJcbiAgICBsZXQgc2hpcElkZW50aWZ5ZXI7XHJcbiAgICBzd2l0Y2ggKHNoaXAuaWQpIHtcclxuICAgICAgICBjYXNlIHNoaXBzWzBdLmlkOlxyXG4gICAgICAgICAgICBzaGlwSWRlbnRpZnllciA9IFwiU2hpcEFcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2Ugc2hpcHNbMV0uaWQ6XHJcbiAgICAgICAgICAgIHNoaXBJZGVudGlmeWVyID0gXCJTaGlwQlwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlIHNoaXBzWzJdLmlkOlxyXG4gICAgICAgICAgICBzaGlwSWRlbnRpZnllciAgPSBcIlNoaXBDXCI7ICBcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBzaGlwc1szXS5pZDpcclxuICAgICAgICAgICAgc2hpcElkZW50aWZ5ZXIgPSBcIlNoaXBEXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNoaXBzWzRdLmlkOlxyXG4gICAgICAgICAgICBzaGlwSWRlbnRpZnllciA9IFwiU2hpcEVcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoaXBJZGVudGlmeWVyO1xyXG59XHJcblxyXG5jb25zdCBtYXJrQXNTdW5rQ3B1U2hpcCA9IChzaGlwU2VsZWN0b3IpID0+e1xyXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2F0dGFja0dyb3VuZFwiKVxyXG4gICAgc2hpcFNlbGVjdG9yID0gXCIuXCIgKyBzaGlwU2VsZWN0b3I7XHJcbiAgICBjb25zdCBzaGlwRWxlbWVudHMgPSBib2FyZC5xdWVyeVNlbGVjdG9yQWxsKHNoaXBTZWxlY3Rvcik7XHJcbiAgICAvL2NvbnNvbGUubG9nKHNoaXBFbGVtZW50cyk7XHJcbiAgICBzaGlwRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRTaGlwXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN1bmtTaGlwXCIpO1xyXG4gICAgfSkgXHJcbn1cclxuXHJcblxyXG5jb25zdCBjYWxsQ3B1ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJjYWxsQ3B1XCIpO1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdG9yXCIpO1xyXG4gICAgc2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImNwdVwiKTtcclxuICAgIGNwdVBsYXlzKHBsYXllcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vdmVzKys7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJjcHVcIik7XHJcbiAgICAgICAgfSk7XHJcbn0iLCJcclxuY29uc3QgR2FtZWJvYXJkID0gKHgseSkgPT4ge1xyXG4gIGNvbnN0IHhCb2FyZCA9IHg7XHJcbiAgY29uc3QgeUJvYXJkID0geTtcclxuXHJcbiAgbGV0IGJvYXJkID0gQXJyYXkoeEJvYXJkKTtcclxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgeEJvYXJkOyBpbmRleCsrKSB7XHJcbiAgICBjb25zdCBhcnJheVkgPSBBcnJheSh5Qm9hcmQpO1xyXG4gICAgYXJyYXlZLmZpbGwoXCJcIik7XHJcbiAgICBib2FyZFtpbmRleF0gPSBhcnJheVk7ICAgIFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHhQb3NpdGlvbiA9IDAsIHlQb3NpdGlvbiA9IDAsIG9yaWVudGF0aW9uICkgPT4ge1xyXG4gICAgY29uc3Qgc2hpcExlbmd0aCA9IHNoaXAuc2hpcFNpemU7XHJcbiAgICBcclxuICAgIGNvbnN0IHNoaXBGaXQgPSBjaGVja1NoaXBGaXQoeFBvc2l0aW9uLCB5UG9zaXRpb24sIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uLCB4Qm9hcmQsIHlCb2FyZCk7XHJcbiAgICBpZiAoIXNoaXBGaXQpIHJldHVybiBmYWxzZTtcclxuICAgIGNvbnN0IG5vU2hpcFBsYWNlID0gY2hlY2tOb3NoaXAoeFBvc2l0aW9uLCB5UG9zaXRpb24sIHNoaXBMZW5ndGgsIG9yaWVudGF0aW9uLCBib2FyZCk7XHJcbiAgICBpZiAoIW5vU2hpcFBsYWNlKSByZXR1cm4gZmFsc2U7XHJcbiAgICBib2FyZCA9IHBsYWNlU2hpcE9uQm9hcmQoeFBvc2l0aW9uLCB5UG9zaXRpb24sIHNoaXAsIG9yaWVudGF0aW9uLCBib2FyZCk7XHJcbiAgICByZXR1cm4gYm9hcmQgXHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgIGNvbnN0IHJlY2VpdmVBdHRhY2sgID0gKHggPSAwLCB5ID0gMCkgPT4ge1xyXG4gICAgaWYodHlwZW9mKGJvYXJkW3hdW3ldKSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICBjb25zdCBzaGlwQXR0YWNrZWQgPSBib2FyZFt4XVt5XTtcclxuICAgICAgc2hpcEF0dGFja2VkLmhpdCgpO1xyXG4gICAgICBib2FyZFt4XVt5XSA9IFwiWFwiO1xyXG4gICAgICByZXR1cm4gc2hpcEF0dGFja2VkO1xyXG4gICAgfSBlbHNleyAgICAgIFxyXG4gICAgICBib2FyZFt4XVt5XSA9IFwiWFwiO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IFxyXG4gICB9XHJcblxyXG4gIFxyXG5cclxuICByZXR1cm4geyBib2FyZCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrIH1cclxufVxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR2FtZWJvYXJkO1xyXG5cclxuXHJcbmNvbnN0IGNoZWNrU2hpcEZpdCA9ICh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24sIHhCb2FyZCwgeUJvYXJkKSA9PiB7XHJcblxyXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2XCIpe1xyXG4gICAgY29uc3QgcG9zaXRpb25QbHVzU2hpcCA9IHlQb3NpdGlvbiArIHNoaXBMZW5ndGg7XHJcbiAgICByZXR1cm4gKCBwb3NpdGlvblBsdXNTaGlwIDw9IHlCb2FyZCApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwb3NpdGlvblBsdXNTaGlwID0geFBvc2l0aW9uICsgc2hpcExlbmd0aFxyXG4gICAgcmV0dXJuICggcG9zaXRpb25QbHVzU2hpcCA8PSB4Qm9hcmQgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBjaGVja05vc2hpcCA9ICh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24sIGJvYXJkKSA9PiB7XHJcbiAgbGV0IG5vU2hpcFBsYWNlID0gdHJ1ZTtcclxuICBpZiAob3JpZW50YXRpb24gPT09IFwidlwiKXtcclxuICAgIGNvbnN0IHBvc2l0aW9uUGx1c1NoaXAgPSB5UG9zaXRpb24gKyBzaGlwTGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgbW92ZU9uWSA9IHlQb3NpdGlvbjsgbW92ZU9uWSA8IHBvc2l0aW9uUGx1c1NoaXA7IG1vdmVPblkrKykge1xyXG4gICAgICBpZiAoYm9hcmRbeFBvc2l0aW9uXVttb3ZlT25ZXSAhPSBcIlwiKXtcclxuICAgICAgICBub1NoaXBQbGFjZSA9IGZhbHNlO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uUGx1c1NoaXAgPSB4UG9zaXRpb24gKyBzaGlwTGVuZ3RoO1xyXG4gICAgZm9yIChsZXQgbW92ZU9uWCA9IHhQb3NpdGlvbjsgbW92ZU9uWCA8IHBvc2l0aW9uUGx1c1NoaXA7IG1vdmVPblgrKykge1xyXG4gICAgICBpZiAoYm9hcmRbbW92ZU9uWF1beVBvc2l0aW9uXSAhPSBcIlwiKXtcclxuICAgICAgICBub1NoaXBQbGFjZSA9IGZhbHNlO1xyXG4gICAgICB9ICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBub1NoaXBQbGFjZTtcclxufVxyXG5cclxuY29uc3QgcGxhY2VTaGlwT25Cb2FyZCA9ICh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc2hpcCwgb3JpZW50YXRpb24sIGJvYXJkKSA9PiB7XHJcbiAgaWYgKG9yaWVudGF0aW9uID09PSBcInZcIil7XHJcbiAgICBjb25zdCBwb3NpdGlvblBsdXNTaGlwID0geVBvc2l0aW9uICsgc2hpcC5zaGlwU2l6ZTtcclxuICAgIGZvciAobGV0IG1vdmVPblkgPSB5UG9zaXRpb247IG1vdmVPblkgPCBwb3NpdGlvblBsdXNTaGlwOyBtb3ZlT25ZKyspIHtcclxuICAgICAgYm9hcmRbeFBvc2l0aW9uXVttb3ZlT25ZXSA9IHNoaXA7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uUGx1c1NoaXAgPSB4UG9zaXRpb24gKyBzaGlwLnNoaXBTaXplO1xyXG4gICAgZm9yIChsZXQgbW92ZU9uWCA9IHhQb3NpdGlvbjsgbW92ZU9uWCA8IHBvc2l0aW9uUGx1c1NoaXA7IG1vdmVPblgrKykge1xyXG4gICAgICBib2FyZFttb3ZlT25YXVt5UG9zaXRpb25dID0gc2hpcDtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkO1xyXG59IiwicmVxdWlyZShcIi4vc3R5bGVzL3N0eWxlLmNzc1wiKTtcclxuY29uc3QgRG9tID0gcmVxdWlyZShcIi4vZG9tSW5pdFwiKTtcclxuLy9jb25zdCBjcHVQbGF5cyA9IHJlcXVpcmUoXCIuL2NwdVBsYXlzXCIpXHJcblxyXG5cclxuLy9jcHVQbGF5cygpO1xyXG5Eb20oKTsiLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XHJcbmNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xyXG5cclxuY29uc3QgcGxheWVyID0gKHgseSkgPT4ge1xyXG5cclxubGV0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCh4LHkpO1xyXG5jb25zdCBzaGlwQSA9IFNoaXAoNCk7XHJcbmNvbnN0IHNoaXBCID0gU2hpcCgzKTtcclxuY29uc3Qgc2hpcEMgPSBTaGlwKDMpO1xyXG5jb25zdCBzaGlwRCA9IFNoaXAoMik7XHJcbmNvbnN0IHNoaXBFID0gU2hpcCgxKTtcclxuXHJcbi8vIEFycmF5IG9mIHNoaXAsIHRvIHBsYWNlbWVudFxyXG5jb25zdCBzaGlwcyA9IFtzaGlwQSwgc2hpcEIsIHNoaXBELCAgc2hpcEMsIHNoaXBFXTtcclxuXHJcbi8vIGNhbGwgcmFuZG9tUGxhY2VTaGlwXHJcblJhbmRvbVNoaXBQbGFjZW1lbnQoc2hpcHMpO1xyXG5cclxuLy8gZnVuY3Rpb24gdG8gcmFuZG9tbHkgcGxhY2UgdGhlIHNoaXBzIGluIHRoZSBib2FyZCBvZiBlYWNoIHBsYXllclxyXG5cclxuZnVuY3Rpb24gUmFuZG9tU2hpcFBsYWNlbWVudCAoYXJyYXlPZlNoaXBzKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFycmF5T2ZTaGlwcyk7XHJcbiAgICBhcnJheU9mU2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICBsZXQgcmVjZWl2ZWQgPSBmYWxzZTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coc2hpcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHhTZXQgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx4KSAtIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IHlTZXQgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx5KSAtIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGhPclYgPSAocmFuZG9tQm9vbGVhbigpKSA/IFwiaFwiIDogXCJ2XCI7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coe3gseSxoT3JWLHNoaXB9KVxyXG4gICAgICAgICAgICByZWNlaXZlZCA9IHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgeFNldCwgeVNldCwgaE9yVik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gd2hpbGUgKCFyZWNlaXZlZCk7ICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vb25seSBleHBvc2UgdGhlIHBsYXllckdhbWVib2FyZCBhbmQgaXRzIG1ldGhvZHMuXHJcbnJldHVybiB7IHBsYXllckdhbWVib2FyZCwgIHNoaXBzIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7XHJcblxyXG4vLyBSYW5kb20gbnVtYmVyXHJcbmNvbnN0ICByYW5kb21JbnRGcm9tSW50ZXJ2YWwgPSAobWluLCBtYXgpID0+IHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcclxufVxyXG5cclxuLy8gUmFuZG9tIGJvb2xlYW5cclxuY29uc3QgcmFuZG9tQm9vbGVhbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSA8IDAuNSk7XHJcbn0gXHJcblxyXG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgID0+IHtcclxuICBjb25zdCBzaGlwU2l6ZSA9IGxlbmd0aDtcclxuICBsZXQgaGl0c0NvdW50ZXIgPSAwO1xyXG4gIGNvbnN0IGlkID0gbWFrZWlkKDUpO1xyXG5cclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBoaXRzQ291bnRlcisrO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChoaXRzQ291bnRlciA+PSAgc2hpcFNpemUpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIHsgc2hpcFNpemUsIGlkLCBpc1N1bmssIGhpdCB9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XHJcblxyXG5mdW5jdGlvbiBtYWtlaWQobGVuZ3RoKSB7XHJcbiAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5JztcclxuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XHJcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xyXG4gICAgY291bnRlciArPSAxO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
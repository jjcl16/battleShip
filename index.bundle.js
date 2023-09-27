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
    transition: all 1s ease-in-out
}

#selector.cpu {
    left: 50%;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,YAAY;IACZ,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,gCAAgC;;AAEpC;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,UAAU;IACV,WAAW;AACf;;AAEA;IACI,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,4CAA4C;IAC5C,UAAU;IACV,YAAY;IACZ,UAAU;IACV,QAAQ;IACR;AACJ;;AAEA;IACI,SAAS;AACb","sourcesContent":[".attackElement{\r\n    border: 2px solid black;\r\n    margin: 10px;\r\n    background-color: white;\r\n    transition: all 0.7s;\r\n}\r\n\r\n.playerBoardElement {\r\n    border: 2px solid black;\r\n    margin: 3px;  \r\n}\r\n\r\n.attackElementContainer, .playerBoardElementContainer {\r\n    display: flex;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n\r\n#top {\r\n    height: 8vh;\r\n}\r\n\r\n#workspace {\r\n    display: grid;\r\n    grid-template: 80vh / 25vw 60vw;\r\n}\r\n\r\n#sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#attackGround {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.attackedZone {\r\n    background-color: rgb(255, 153, 0);\r\n}\r\n\r\n.hitShip {\r\n    background-color: rgb(255, 0, 0);\r\n    \r\n}\r\n\r\n.sunkShip {\r\n    background-color: black;\r\n}\r\n\r\n#whoPlaysContainer{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    position: relative;\r\n    width: 40%;\r\n    height: 3vh;\r\n}\r\n\r\n.selection{\r\n    z-index: 1;\r\n    text-justify: center;\r\n    text-align: center;\r\n    width: 50%;\r\n}\r\n\r\n#selector {\r\n    position: absolute;\r\n    background-color: rgba(121, 130, 131, 0.444);\r\n    width: 50%;\r\n    height: 100%;\r\n    z-index: 2;\r\n    left: 0%;\r\n    transition: all 1s ease-in-out\r\n}\r\n\r\n#selector.cpu {\r\n    left: 50%;\r\n}"],"sourceRoot":""}]);
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

const cpuPlays = (player) => {
    
    console.log(player.playerGameboard.receiveAttack(2,3));
}

module.exports = cpuPlays;

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
        (!hitAShip) ? console.log("miss hit") : attackedShip(hitAShip, shipElement);
        console.log(cpu.playerGameboard);
        moves++;
        callCpu();
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
    const board = document.querySelector(".attackElementContainer")
    shipSelector = "." + shipSelector;
    const shipElements = document.querySelectorAll(shipSelector);
    console.log(shipElements);
    shipElements.forEach((element)  => {
        element.classList.remove("hitShip");
        element.classList.add("sunkShip");
    }) 
}

const callCpu = () => {
    cpuPlays(player);
    moves++;
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
const cpuPlays = __webpack_require__(/*! ./cpuPlays */ "./src/cpuPlays.js")


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkMsYUFBYSxtQkFBTyxDQUFDLDZCQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixjQUFjO0FBQ3pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2NwdVBsYXlzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tSW5pdC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmF0dGFja0VsZW1lbnR7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XHJcbn1cclxuXHJcbi5wbGF5ZXJCb2FyZEVsZW1lbnQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBtYXJnaW46IDNweDsgIFxyXG59XHJcblxyXG4uYXR0YWNrRWxlbWVudENvbnRhaW5lciwgLnBsYXllckJvYXJkRWxlbWVudENvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbiN0b3Age1xyXG4gICAgaGVpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbiN3b3Jrc3BhY2Uge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGU6IDgwdmggLyAyNXZ3IDYwdnc7XHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jYXR0YWNrR3JvdW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYXR0YWNrZWRab25lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1MywgMCk7XHJcbn1cclxuXHJcbi5oaXRTaGlwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xyXG4gICAgXHJcbn1cclxuXHJcbi5zdW5rU2hpcCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI3dob1BsYXlzQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDN2aDtcclxufVxyXG5cclxuLnNlbGVjdGlvbntcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNzZWxlY3RvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMTMwLCAxMzEsIDAuNDQ0KTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgbGVmdDogMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXRcclxufVxyXG5cclxuI3NlbGVjdG9yLmNwdSB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtJQUNWLFFBQVE7SUFDUjtBQUNKOztBQUVBO0lBQ0ksU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5hdHRhY2tFbGVtZW50e1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuN3M7XFxyXFxufVxcclxcblxcclxcbi5wbGF5ZXJCb2FyZEVsZW1lbnQge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luOiAzcHg7ICBcXHJcXG59XFxyXFxuXFxyXFxuLmF0dGFja0VsZW1lbnRDb250YWluZXIsIC5wbGF5ZXJCb2FyZEVsZW1lbnRDb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3RvcCB7XFxyXFxuICAgIGhlaWdodDogOHZoO1xcclxcbn1cXHJcXG5cXHJcXG4jd29ya3NwYWNlIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogODB2aCAvIDI1dncgNjB2dztcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2F0dGFja0dyb3VuZCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0YWNrZWRab25lIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTUzLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpdFNoaXAge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zdW5rU2hpcCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4jd2hvUGxheXNDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNDAlO1xcclxcbiAgICBoZWlnaHQ6IDN2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdGlvbntcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlbGVjdG9yIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMSwgMTMwLCAxMzEsIDAuNDQ0KTtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBsZWZ0OiAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0XFxyXFxufVxcclxcblxcclxcbiNzZWxlY3Rvci5jcHUge1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcHVQbGF5cyA9IChwbGF5ZXIpID0+IHtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2cocGxheWVyLnBsYXllckdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKDIsMykpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGNwdVBsYXlzOyIsImNvbnN0IFBsYXllciA9IHJlcXVpcmUoXCIuL3BsYXllclwiKTtcclxuY29uc3QgY3B1UGxheXMgPSByZXF1aXJlKFwiLi9jcHVQbGF5c1wiKTtcclxuXHJcbmNvbnN0IHhTaXplID0gNztcclxuY29uc3QgeVNpemUgPSA3O1xyXG5jb25zdCBwbGF5ZXIgPSBQbGF5ZXIoeFNpemUseVNpemUpO1xyXG5jb25zdCBjcHUgPSBQbGF5ZXIoeFNpemUseVNpemUpO1xyXG5jb25zdCBjcHVTaGlwQSA9IGNwdS5zaGlwc1swXTtcclxuY29uc3QgY3B1U2hpcEIgPSBjcHUuc2hpcHNbMV07XHJcbmNvbnN0IGNwdVNoaXBDID0gY3B1LnNoaXBzWzJdO1xyXG5jb25zdCBjcHVTaGlwRCA9IGNwdS5zaGlwc1szXTtcclxuY29uc3QgY3B1U2hpcEUgPSBjcHUuc2hpcHNbNF07XHJcblxyXG5sZXQgbW92ZXMgPSAxO1xyXG5cclxuY29uc3QgZG9tSW5pdCA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBpbml0IGVsZW1lbnRzXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbiAgICBjb25zdCB0b3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZm9vdCAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3Qgd29ya3NwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAvLyBhc2luZyBpZFxyXG4gICAgdG9wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9wXCIpO1xyXG4gICAgZm9vdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RcIik7XHJcbiAgICB3b3Jrc3BhY2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcIndvcmtzcGFjZVwiKTtcclxuXHJcbiAgICAvLyBhcHBlbmQgdG8gYm9keVxyXG4gICAgYm9keS5hcHBlbmRDaGlsZCh0b3ApO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZCh3b3Jrc3BhY2UpO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChmb290KTtcclxuXHJcbiAgICAvLyB3b3Jrc3BhY2UgYm94ZXMgKGF0dGFja2dyb3VuZCwgc2lkZWJhciAocGxheWVyQm9hcmQsIHdob1BsYXlzKSlcclxuXHJcbiAgICBjb25zdCBhdHRhY2tHcm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYXR0YWNrR3JvdW5kLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXR0YWNrR3JvdW5kXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHNpZGViYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaWRlYmFyXCIpO1xyXG5cclxuICAgIGNvbnN0IHBsYXllckJvYXJkICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBwbGF5ZXJCb2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBsYXllckJvYXJkXCIpO1xyXG5cclxuICAgIC8vIHdobyBwbGF5cyBzd2l0Y2hcclxuICAgIGNvbnN0IHdob1BsYXlzQ29uc3RhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3aG9QbGF5c0NvbnN0YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ3aG9QbGF5c0NvbnRhaW5lclwiKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJTZWxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcGxheWVyU2VsZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3Rpb25cIik7XHJcbiAgICBwbGF5ZXJTZWxlY3Rpb24udGV4dENvbnRlbnQgPSBcIlBsYXllclwiO1xyXG5cclxuICAgIGNvbnN0IGNwdVNlbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjcHVTZWxlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlbGVjdGlvblwiKTtcclxuICAgIGNwdVNlbGVjdGlvbi50ZXh0Q29udGVudCA9IFwiQ1BVXCI7XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2VsZWN0b3Iuc2V0QXR0cmlidXRlKFwiaWRcIixcInNlbGVjdG9yXCIpO1xyXG5cclxuICAgIHdob1BsYXlzQ29uc3RhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJTZWxlY3Rpb24pO1xyXG4gICAgd2hvUGxheXNDb25zdGFpbmVyLmFwcGVuZENoaWxkKGNwdVNlbGVjdGlvbik7XHJcbiAgICB3aG9QbGF5c0NvbnN0YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0b3IpO1xyXG5cclxuICAgIC8vIHBheWVyYm9hcmQgYW5kIHdob1BsYXlzQ29udGFpbmVyIGFwcGVuZCB0byBzaWRlYmFyXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQod2hvUGxheXNDb25zdGFpbmVyKTtcclxuXHJcbiAgICAvLyBhcHBlbmQgdG8gdGhlIHdvcmtzcGFjZVxyXG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKHNpZGViYXIpO1xyXG4gICAgd29ya3NwYWNlLmFwcGVuZENoaWxkKGF0dGFja0dyb3VuZCk7XHJcbiAgICBcclxuICAgIC8vIGJ1aWxkIGJvYXJkIGZvciBhdHRhY2tHcm91bmQgYW5kIHBsYXllckJvYXJkXHJcblxyXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB4U2l6ZTsgeCsrKSB7XHJcbiAgICAgICAgY29uc3QgWEF0dGFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgWEF0dGFjay5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrRWxlbWVudENvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgWFBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgWFBsYXllci5jbGFzc0xpc3QuYWRkKFwicGxheWVyQm9hcmRFbGVtZW50Q29udGFpbmVyXCIpXHJcblxyXG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgeVNpemU7IHkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBZQXR0YWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgWUF0dGFjay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkFcIitbeF0rW3ldKTtcclxuICAgICAgICAgICAgWUF0dGFjay5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrRWxlbWVudFwiKTtcclxuICAgICAgICAgICAgWUF0dGFjay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FsbEF0dGFjayApO1xyXG4gICAgICAgICAgICBZQXR0YWNrLnRleHRDb250ZW50ID0gW3hdK1t5XTtcclxuICAgICAgICAgICAgWEF0dGFjay5hcHBlbmRDaGlsZChZQXR0YWNrKTsgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBZUGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgWVBsYXllci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlBcIitbeF0rW3ldKTtcclxuICAgICAgICAgICAgWVBsYXllci5jbGFzc0xpc3QuYWRkKFwicGxheWVyQm9hcmRFbGVtZW50XCIpXHJcbiAgICAgICAgICAgIFlQbGF5ZXIudGV4dENvbnRlbnQgPSBbeF0rW3ldO1xyXG4gICAgICAgICAgICBYUGxheWVyLmFwcGVuZENoaWxkKFlQbGF5ZXIpOyAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYXR0YWNrR3JvdW5kLmFwcGVuZENoaWxkKFhBdHRhY2spO1xyXG4gICAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKFhQbGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUluaXQ7XHJcblxyXG5jb25zdCBjYWxsQXR0YWNrID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHNoaXBFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBib2FyZCA9IHNoaXBFbGVtZW50LmlkWzBdO1xyXG4gICAgY29uc3QgeCA9IHNoaXBFbGVtZW50LmlkWzFdO1xyXG4gICAgY29uc3QgeSA9IHNoaXBFbGVtZW50LmlkWzJdO1xyXG4gICAgaWYobW92ZXMlMil7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgc2hpcEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY2FsbEF0dGFjaylcclxuICAgICAgICBzaGlwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRab25lXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBoaXRBU2hpcCA9IGNwdS5wbGF5ZXJHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LHkpO1xyXG4gICAgICAgICghaGl0QVNoaXApID8gY29uc29sZS5sb2coXCJtaXNzIGhpdFwiKSA6IGF0dGFja2VkU2hpcChoaXRBU2hpcCwgc2hpcEVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNwdS5wbGF5ZXJHYW1lYm9hcmQpO1xyXG4gICAgICAgIG1vdmVzKys7XHJcbiAgICAgICAgY2FsbENwdSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmNvbnN0IGF0dGFja2VkU2hpcCA9IChzaGlwLCBzaGlwRWxlbWVudCkgPT4ge1xyXG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImF0dGFja2VkWm9uZVwiKTtcclxuICAgIHNoaXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaXRTaGlwXCIpO1xyXG4gICAgY29uc3Qgc2hpcFNlbGVjdG9yID0gd2hhdFNoaXBJcyhjcHUuc2hpcHMsIHNoaXApO1xyXG4gICAgc2hpcEVsZW1lbnQuY2xhc3NMaXN0LmFkZChzaGlwU2VsZWN0b3IpO1xyXG4gICAgaWYoc2hpcC5pc1N1bmsoKSkgbWFya0FzU3Vua0NwdVNoaXAoc2hpcFNlbGVjdG9yKTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGl0LCBpcyBzdW5rP1wiICsgc2hpcC5pc1N1bmsoKSlcclxufVxyXG5cclxuY29uc3Qgd2hhdFNoaXBJcyA9IChzaGlwcywgc2hpcCkgPT4ge1xyXG4gICAgbGV0IHNoaXBJZGVudGlmeWVyO1xyXG4gICAgc3dpdGNoIChzaGlwLmlkKSB7XHJcbiAgICAgICAgY2FzZSBzaGlwc1swXS5pZDpcclxuICAgICAgICAgICAgc2hpcElkZW50aWZ5ZXIgPSBcIlNoaXBBXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIHNoaXBzWzFdLmlkOlxyXG4gICAgICAgICAgICBzaGlwSWRlbnRpZnllciA9IFwiU2hpcEJcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSBzaGlwc1syXS5pZDpcclxuICAgICAgICAgICAgc2hpcElkZW50aWZ5ZXIgID0gXCJTaGlwQ1wiOyAgXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2Ugc2hpcHNbM10uaWQ6XHJcbiAgICAgICAgICAgIHNoaXBJZGVudGlmeWVyID0gXCJTaGlwRFwiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBzaGlwc1s0XS5pZDpcclxuICAgICAgICAgICAgc2hpcElkZW50aWZ5ZXIgPSBcIlNoaXBFXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBzaGlwSWRlbnRpZnllcjtcclxufVxyXG5cclxuY29uc3QgbWFya0FzU3Vua0NwdVNoaXAgPSAoc2hpcFNlbGVjdG9yKSA9PntcclxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdHRhY2tFbGVtZW50Q29udGFpbmVyXCIpXHJcbiAgICBzaGlwU2VsZWN0b3IgPSBcIi5cIiArIHNoaXBTZWxlY3RvcjtcclxuICAgIGNvbnN0IHNoaXBFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2hpcFNlbGVjdG9yKTtcclxuICAgIGNvbnNvbGUubG9nKHNoaXBFbGVtZW50cyk7XHJcbiAgICBzaGlwRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgID0+IHtcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaXRTaGlwXCIpO1xyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInN1bmtTaGlwXCIpO1xyXG4gICAgfSkgXHJcbn1cclxuXHJcbmNvbnN0IGNhbGxDcHUgPSAoKSA9PiB7XHJcbiAgICBjcHVQbGF5cyhwbGF5ZXIpO1xyXG4gICAgbW92ZXMrKztcclxufSIsIlxyXG5jb25zdCBHYW1lYm9hcmQgPSAoeCx5KSA9PiB7XHJcbiAgY29uc3QgeEJvYXJkID0geDtcclxuICBjb25zdCB5Qm9hcmQgPSB5O1xyXG5cclxuICBsZXQgYm9hcmQgPSBBcnJheSh4Qm9hcmQpO1xyXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB4Qm9hcmQ7IGluZGV4KyspIHtcclxuICAgIGNvbnN0IGFycmF5WSA9IEFycmF5KHlCb2FyZCk7XHJcbiAgICBhcnJheVkuZmlsbChcIlwiKTtcclxuICAgIGJvYXJkW2luZGV4XSA9IGFycmF5WTsgICAgXHJcbiAgfVxyXG5cclxuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeFBvc2l0aW9uID0gMCwgeVBvc2l0aW9uID0gMCwgb3JpZW50YXRpb24gKSA9PiB7XHJcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5zaGlwU2l6ZTtcclxuICAgIFxyXG4gICAgY29uc3Qgc2hpcEZpdCA9IGNoZWNrU2hpcEZpdCh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24sIHhCb2FyZCwgeUJvYXJkKTtcclxuICAgIGlmICghc2hpcEZpdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgY29uc3Qgbm9TaGlwUGxhY2UgPSBjaGVja05vc2hpcCh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc2hpcExlbmd0aCwgb3JpZW50YXRpb24sIGJvYXJkKTtcclxuICAgIGlmICghbm9TaGlwUGxhY2UpIHJldHVybiBmYWxzZTtcclxuICAgIGJvYXJkID0gcGxhY2VTaGlwT25Cb2FyZCh4UG9zaXRpb24sIHlQb3NpdGlvbiwgc2hpcCwgb3JpZW50YXRpb24sIGJvYXJkKTtcclxuICAgIHJldHVybiBib2FyZCBcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAgY29uc3QgcmVjZWl2ZUF0dGFjayAgPSAoeCA9IDAsIHkgPSAwKSA9PiB7XHJcbiAgICBpZih0eXBlb2YoYm9hcmRbeF1beV0pID09PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgIGNvbnN0IHNoaXBBdHRhY2tlZCA9IGJvYXJkW3hdW3ldO1xyXG4gICAgICBzaGlwQXR0YWNrZWQuaGl0KCk7XHJcbiAgICAgIGJvYXJkW3hdW3ldID0gXCJYXCI7XHJcbiAgICAgIHJldHVybiBzaGlwQXR0YWNrZWQ7XHJcbiAgICB9IGVsc2V7ICAgICAgXHJcbiAgICAgIGJvYXJkW3hdW3ldID0gXCJYXCI7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gXHJcbiAgIH1cclxuXHJcbiAgXHJcblxyXG4gIHJldHVybiB7IGJvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2sgfVxyXG59XHJcblxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYW1lYm9hcmQ7XHJcblxyXG5cclxuY29uc3QgY2hlY2tTaGlwRml0ID0gKHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbiwgeEJvYXJkLCB5Qm9hcmQpID0+IHtcclxuXHJcbiAgaWYgKG9yaWVudGF0aW9uID09PSBcInZcIil7XHJcbiAgICBjb25zdCBwb3NpdGlvblBsdXNTaGlwID0geVBvc2l0aW9uICsgc2hpcExlbmd0aDtcclxuICAgIHJldHVybiAoIHBvc2l0aW9uUGx1c1NoaXAgPD0geUJvYXJkICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uUGx1c1NoaXAgPSB4UG9zaXRpb24gKyBzaGlwTGVuZ3RoXHJcbiAgICByZXR1cm4gKCBwb3NpdGlvblBsdXNTaGlwIDw9IHhCb2FyZCApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrTm9zaGlwID0gKHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzaGlwTGVuZ3RoLCBvcmllbnRhdGlvbiwgYm9hcmQpID0+IHtcclxuICBsZXQgbm9TaGlwUGxhY2UgPSB0cnVlO1xyXG4gIGlmIChvcmllbnRhdGlvbiA9PT0gXCJ2XCIpe1xyXG4gICAgY29uc3QgcG9zaXRpb25QbHVzU2hpcCA9IHlQb3NpdGlvbiArIHNoaXBMZW5ndGg7XHJcbiAgICBmb3IgKGxldCBtb3ZlT25ZID0geVBvc2l0aW9uOyBtb3ZlT25ZIDwgcG9zaXRpb25QbHVzU2hpcDsgbW92ZU9uWSsrKSB7XHJcbiAgICAgIGlmIChib2FyZFt4UG9zaXRpb25dW21vdmVPblldICE9IFwiXCIpe1xyXG4gICAgICAgIG5vU2hpcFBsYWNlID0gZmFsc2U7XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcG9zaXRpb25QbHVzU2hpcCA9IHhQb3NpdGlvbiArIHNoaXBMZW5ndGg7XHJcbiAgICBmb3IgKGxldCBtb3ZlT25YID0geFBvc2l0aW9uOyBtb3ZlT25YIDwgcG9zaXRpb25QbHVzU2hpcDsgbW92ZU9uWCsrKSB7XHJcbiAgICAgIGlmIChib2FyZFttb3ZlT25YXVt5UG9zaXRpb25dICE9IFwiXCIpe1xyXG4gICAgICAgIG5vU2hpcFBsYWNlID0gZmFsc2U7XHJcbiAgICAgIH0gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIG5vU2hpcFBsYWNlO1xyXG59XHJcblxyXG5jb25zdCBwbGFjZVNoaXBPbkJvYXJkID0gKHhQb3NpdGlvbiwgeVBvc2l0aW9uLCBzaGlwLCBvcmllbnRhdGlvbiwgYm9hcmQpID0+IHtcclxuICBpZiAob3JpZW50YXRpb24gPT09IFwidlwiKXtcclxuICAgIGNvbnN0IHBvc2l0aW9uUGx1c1NoaXAgPSB5UG9zaXRpb24gKyBzaGlwLnNoaXBTaXplO1xyXG4gICAgZm9yIChsZXQgbW92ZU9uWSA9IHlQb3NpdGlvbjsgbW92ZU9uWSA8IHBvc2l0aW9uUGx1c1NoaXA7IG1vdmVPblkrKykge1xyXG4gICAgICBib2FyZFt4UG9zaXRpb25dW21vdmVPblldID0gc2hpcDtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcG9zaXRpb25QbHVzU2hpcCA9IHhQb3NpdGlvbiArIHNoaXAuc2hpcFNpemU7XHJcbiAgICBmb3IgKGxldCBtb3ZlT25YID0geFBvc2l0aW9uOyBtb3ZlT25YIDwgcG9zaXRpb25QbHVzU2hpcDsgbW92ZU9uWCsrKSB7XHJcbiAgICAgIGJvYXJkW21vdmVPblhdW3lQb3NpdGlvbl0gPSBzaGlwO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gYm9hcmQ7XHJcbn0iLCJyZXF1aXJlKFwiLi9zdHlsZXMvc3R5bGUuY3NzXCIpO1xyXG5jb25zdCBEb20gPSByZXF1aXJlKFwiLi9kb21Jbml0XCIpO1xyXG5jb25zdCBjcHVQbGF5cyA9IHJlcXVpcmUoXCIuL2NwdVBsYXlzXCIpXHJcblxyXG5cclxuLy9jcHVQbGF5cygpO1xyXG5Eb20oKTsiLCJjb25zdCBHYW1lYm9hcmQgPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XHJcbmNvbnN0IFNoaXAgPSByZXF1aXJlKFwiLi9zaGlwXCIpO1xyXG5cclxuY29uc3QgcGxheWVyID0gKHgseSkgPT4ge1xyXG5cclxubGV0IHBsYXllckdhbWVib2FyZCA9IEdhbWVib2FyZCh4LHkpO1xyXG5jb25zdCBzaGlwQSA9IFNoaXAoNCk7XHJcbmNvbnN0IHNoaXBCID0gU2hpcCgzKTtcclxuY29uc3Qgc2hpcEMgPSBTaGlwKDMpO1xyXG5jb25zdCBzaGlwRCA9IFNoaXAoMik7XHJcbmNvbnN0IHNoaXBFID0gU2hpcCgxKTtcclxuXHJcbi8vIEFycmF5IG9mIHNoaXAsIHRvIHBsYWNlbWVudFxyXG5jb25zdCBzaGlwcyA9IFtzaGlwQSwgc2hpcEIsIHNoaXBELCAgc2hpcEMsIHNoaXBFXTtcclxuXHJcbi8vIGNhbGwgcmFuZG9tUGxhY2VTaGlwXHJcblJhbmRvbVNoaXBQbGFjZW1lbnQoc2hpcHMpO1xyXG5cclxuLy8gZnVuY3Rpb24gdG8gcmFuZG9tbHkgcGxhY2UgdGhlIHNoaXBzIGluIHRoZSBib2FyZCBvZiBlYWNoIHBsYXllclxyXG5cclxuZnVuY3Rpb24gUmFuZG9tU2hpcFBsYWNlbWVudCAoYXJyYXlPZlNoaXBzKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKGFycmF5T2ZTaGlwcyk7XHJcbiAgICBhcnJheU9mU2hpcHMuZm9yRWFjaChzaGlwID0+IHtcclxuICAgICAgICBsZXQgcmVjZWl2ZWQgPSBmYWxzZTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coc2hpcCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHhTZXQgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx4KSAtIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IHlTZXQgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx5KSAtIDE7XHJcbiAgICAgICAgICAgIGNvbnN0IGhPclYgPSAocmFuZG9tQm9vbGVhbigpKSA/IFwiaFwiIDogXCJ2XCI7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coe3gseSxoT3JWLHNoaXB9KVxyXG4gICAgICAgICAgICByZWNlaXZlZCA9IHBsYXllckdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcCwgeFNldCwgeVNldCwgaE9yVik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gd2hpbGUgKCFyZWNlaXZlZCk7ICAgICAgICBcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbi8vb25seSBleHBvc2UgdGhlIHBsYXllckdhbWVib2FyZCBhbmQgaXRzIG1ldGhvZHMuXHJcbnJldHVybiB7IHBsYXllckdhbWVib2FyZCwgIHNoaXBzIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXI7XHJcblxyXG4vLyBSYW5kb20gbnVtYmVyXHJcbmNvbnN0ICByYW5kb21JbnRGcm9tSW50ZXJ2YWwgPSAobWluLCBtYXgpID0+IHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcclxufVxyXG5cclxuLy8gUmFuZG9tIGJvb2xlYW5cclxuY29uc3QgcmFuZG9tQm9vbGVhbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSA8IDAuNSk7XHJcbn0gXHJcblxyXG4iLCJjb25zdCBTaGlwID0gKGxlbmd0aCkgID0+IHtcclxuICBjb25zdCBzaGlwU2l6ZSA9IGxlbmd0aDtcclxuICBsZXQgaGl0c0NvdW50ZXIgPSAwO1xyXG4gIGNvbnN0IGlkID0gbWFrZWlkKDUpO1xyXG5cclxuICBjb25zdCBoaXQgPSAoKSA9PiB7XHJcbiAgICBoaXRzQ291bnRlcisrO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChoaXRzQ291bnRlciA+PSAgc2hpcFNpemUpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH07XHJcbiAgXHJcbiAgcmV0dXJuIHsgc2hpcFNpemUsIGlkLCBpc1N1bmssIGhpdCB9XHJcbn1cclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNoaXA7XHJcblxyXG5mdW5jdGlvbiBtYWtlaWQobGVuZ3RoKSB7XHJcbiAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gIGNvbnN0IGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5JztcclxuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG4gIHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XHJcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xyXG4gICAgY291bnRlciArPSAxO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-base.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-base.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ship.jpg */ "./src/img/ship.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ship-sunk.jpg */ "./src/img/ship-sunk.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* cells - buttons - images*/
body {
  min-width: 320px;
  min-height: 100vh;
}

main {
  background-color: #353a45;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 0.7rem;
  border: 1px solid grey;
  background-color: lightyellow;
  cursor: pointer;
  max-width: 100%;
}

.cellShipAdded {
  background-color: #5be734;
  border-color: #84f363;
  color: #207d0e;
}

.cellMissed {
  background-color: #bdf1e8;
  border-color: #effefb;
  color: #0b6461;
}

.cellHit {
  background-color: #fea173;
  border-color: #ffc8a9;
  color: #9b1b11;
}

.cellSunk {
  background-color: black;
  border-color: #3d3d3d;
  color: white;
}

[class^="cell"]:hover {
  animation: opacity 1.5s both;
}

[class^="cell"]:active {
  background-color: #545e75;
}

@keyframes opacity {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.headCell {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  border: 1px solid grey;
  color: lightyellow;
  background: #353a45;
  cursor: pointer;
}

/* buttons */
.hide {
  display: none;
  opacity: 0%;
}

.addShipButton {
  color: black;
  line-height: 2rem;
  padding-left: 10px;
  padding-top: 15px;
  padding-right: 10px;
  padding-bottom: 15px;
  border-radius: 10px;
  font-family: Georgia, serif;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-image: linear-gradient(
    to right,
    rgb(105, 117, 142) 0%,
    rgb(214, 217, 225) 100%
  );
  box-shadow: #edeef1 2px 2px 4px 2px;
  border: 2px solid #353945;
  display: inline-block;

  transition: transform 250ms ease-in-out;
}
.addShipButton:hover {
  background: #545e75;
  color: white;
  transform: scale(1.05);
}
.addShipButton:active {
  background: #454d5f;
  color: white;
}

.resetButton {
  color: #012e32;
  line-height: 13px;
  padding: 15px;
  border-radius: 10px;
  font-family: Georgia, serif;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-image: linear-gradient(to right, #b9fef6 0%, #09c3c1 100%);
  box-shadow: #edeef1 2px 2px 4px 2px;
  border: 2px solid #353945;
  display: inline-block;
  transform: translateY(-100%);
  transition: transform 250ms ease-in-out;
}
.resetButton:hover {
  background: #545e75;
  color: white;
  transform: scale(1.05);
  transform: translateY(-100%);
}
.resetButton:active {
  background: #454d5f;
  color: white;
}

/* score elements */

.scoreTitle {
  display: flex;
  justify-content: center;
  text-align: center;
  color: #3c4350;
  font-weight: bold;
  font-size: 0.9rem;
}

.shipFloat {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
}

.shipSunk {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center;
  border-bottom: 2px solid #09c3c1;
}

/* This is the style of our error messages */
.error {
  width: 100%;
  height: 100%;
  padding: 0;
  font-size: 1rem;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}

/* display base */

.container {
  display: grid;
  grid-template-columns: 0.5fr 6fr 2fr;
  grid-template-rows: 1fr 6fr 1fr;
  max-height: 100%;
}

.turn {
  grid-row: 1 / 2; /* esta linea se asocia al grid del container */
  grid-column: 2 / 4; /* esta linea se asocia al grid del container */
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 3fr 1fr;
  grid-template-rows: 1fr;
}

.turnDiv {
  grid-column: 1 / 2; /* grid turn*/
  grid-row: 1 / 2;
  font-size: 1.7rem;
  color: lightyellow;
}

.turn {
  position: relative;
}

.display {
  padding: 0;
  z-index: 1;
  display: flex;
  place-items: center;
  width: 100px;
  height: 100px;
  font-size: 1rem;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.addships {
  grid-column: 2 / 3; /* grid turn*/
  grid-row: 1 / 2;
  padding-top: 1%;
}

.randomships {
  /* grid turn*/
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  padding-top: 1%;
  align-items: center;
  color: lightyellow;
  display: flex;
  justify-content: flex-start;
  gap: 3px;
}

.result {
  /* grid turn*/
  grid-row: 1/2;
  grid-column: 4/5;
}

.resultMessage {
  font-size: 2rem;
  font-weight: 600;
  color: lightyellow;
}

.gridForAdd {
  grid-column-start: 4; /* esta linea se asocia al grid del board */
  grid-row-start: 2; /* esta linea se asocia al grid del board */
  padding-left: 2%;
  box-sizing: content-box;
  height: 400px;
  width: 120%;
  font-size: 10px;
  overflow-y: scroll;
}

.formInput {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 5fr 1fr 1fr;
}

.formRadio {
  grid-column: 1/2;
  grid-row: 1/2;
  background-color: #b2b9c7;
  line-height: 2;
}

.submitButton {
  grid-column: 2/3;
  grid-row: 1/2;
}

.board-human {
  position: relative; /* for headers purpose */

  grid-column: 2/3; /* esta linea se asocia al grid del board */
  grid-row: 2/3; /* esta linea se asocia al grid del board */
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(13, 1fr);
  border: 5px solid black;
  gap: 2px;
  padding: 2px;
  background-color: #b2b9c7;
}

.board-computer {
  position: relative;

  grid-column: 4/5; /* esta linea se asocia al grid del board */
  grid-row: 2/3; /* esta linea se asocia al grid del board */
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(13, 1fr);
  border: 5px solid black;
  gap: 2px;
  padding: 2px;
  background-color: #b2b9c7;
}

.columnsHead {
  position: absolute; /* in relation parent board-human*/
  transform: translateY(-100%);
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.rowsHead {
  position: absolute; /* in relation parent board-human*/
  transform: translateX(-100%);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.headComputer {
  position: absolute; /* in relation parent board-computer*/
  transform: translateY(-100%);
  color: lightyellow;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.attackMessage {
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

.scoreBoard {
  position: absolute;
  inset: 0px;
  max-width: 115px;
  height: 525px;
  margin-top: 3%;
  margin-left: auto;
  margin-right: 1%;
  background-color: #edeef1;
  border-left: 3px solid #f6f7f9;
  border-right: 3px solid #f6f7f9;
  border-radius: 4px;

  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 5px;
}

.score {
  height: 95%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: repeat(8, 1fr);
}
`, "",{"version":3,"sources":["webpack://./src/style-base.css"],"names":[],"mappings":"AAAA,4BAA4B;AAC5B;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;EACjB,sBAAsB;EACtB,6BAA6B;EAC7B,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,oBAAoB;EACpB,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB;;;;GAIC;EACD,mCAAmC;EACnC,yBAAyB;EACzB,qBAAqB;;EAErB,uCAAuC;AACzC;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;AACxB;AACA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,2BAA2B;EAC3B,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,qEAAqE;EACrE,mCAAmC;EACnC,yBAAyB;EACzB,qBAAqB;EACrB,4BAA4B;EAC5B,uCAAuC;AACzC;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,sBAAsB;EACtB,4BAA4B;AAC9B;AACA;EACE,mBAAmB;EACnB,YAAY;AACd;;AAEA,mBAAmB;;AAEnB;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,yDAAuC;EACvC,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,yDAA4C;EAC5C,sBAAsB;EACtB,2BAA2B;EAC3B,gCAAgC;AAClC;;AAEA,4CAA4C;AAC5C;EACE,WAAW;EACX,YAAY;EACZ,UAAU;EACV,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,cAAc;AAChB;;AAEA,iBAAiB;;AAEjB;EACE,aAAa;EACb,oCAAoC;EACpC,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,eAAe,EAAE,+CAA+C;EAChE,kBAAkB,EAAE,+CAA+C;EACnE,aAAa;EACb,0CAA0C;EAC1C,uBAAuB;AACzB;;AAEA;EACE,kBAAkB,EAAE,aAAa;EACjC,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,kBAAkB,EAAE,aAAa;EACjC,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB,EAAE,2CAA2C;EACjE,iBAAiB,EAAE,2CAA2C;EAC9D,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB,EAAE,wBAAwB;;EAE5C,gBAAgB,EAAE,2CAA2C;EAC7D,aAAa,EAAE,2CAA2C;EAC1D,aAAa;EACb,YAAY;EACZ,WAAW;EACX,sCAAsC;EACtC,mCAAmC;EACnC,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;;EAElB,gBAAgB,EAAE,2CAA2C;EAC7D,aAAa,EAAE,2CAA2C;EAC1D,aAAa;EACb,YAAY;EACZ,WAAW;EACX,sCAAsC;EACtC,mCAAmC;EACnC,uBAAuB;EACvB,QAAQ;EACR,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB,EAAE,kCAAkC;EACtD,4BAA4B;EAC5B,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB,EAAE,kCAAkC;EACtD,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB,EAAE,qCAAqC;EACzD,4BAA4B;EAC5B,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,8BAA8B;EAC9B,+BAA+B;EAC/B,kBAAkB;;EAElB,aAAa;EACb,2BAA2B;EAC3B,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;AACpC","sourcesContent":["/* cells - buttons - images*/\r\nbody {\r\n  min-width: 320px;\r\n  min-height: 100vh;\r\n}\r\n\r\nmain {\r\n  background-color: #353a45;\r\n}\r\n\r\n.cell {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 0.7rem;\r\n  border: 1px solid grey;\r\n  background-color: lightyellow;\r\n  cursor: pointer;\r\n  max-width: 100%;\r\n}\r\n\r\n.cellShipAdded {\r\n  background-color: #5be734;\r\n  border-color: #84f363;\r\n  color: #207d0e;\r\n}\r\n\r\n.cellMissed {\r\n  background-color: #bdf1e8;\r\n  border-color: #effefb;\r\n  color: #0b6461;\r\n}\r\n\r\n.cellHit {\r\n  background-color: #fea173;\r\n  border-color: #ffc8a9;\r\n  color: #9b1b11;\r\n}\r\n\r\n.cellSunk {\r\n  background-color: black;\r\n  border-color: #3d3d3d;\r\n  color: white;\r\n}\r\n\r\n[class^=\"cell\"]:hover {\r\n  animation: opacity 1.5s both;\r\n}\r\n\r\n[class^=\"cell\"]:active {\r\n  background-color: #545e75;\r\n}\r\n\r\n@keyframes opacity {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.headCell {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  border: 1px solid grey;\r\n  color: lightyellow;\r\n  background: #353a45;\r\n  cursor: pointer;\r\n}\r\n\r\n/* buttons */\r\n.hide {\r\n  display: none;\r\n  opacity: 0%;\r\n}\r\n\r\n.addShipButton {\r\n  color: black;\r\n  line-height: 2rem;\r\n  padding-left: 10px;\r\n  padding-top: 15px;\r\n  padding-right: 10px;\r\n  padding-bottom: 15px;\r\n  border-radius: 10px;\r\n  font-family: Georgia, serif;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  background-image: linear-gradient(\r\n    to right,\r\n    rgb(105, 117, 142) 0%,\r\n    rgb(214, 217, 225) 100%\r\n  );\r\n  box-shadow: #edeef1 2px 2px 4px 2px;\r\n  border: 2px solid #353945;\r\n  display: inline-block;\r\n\r\n  transition: transform 250ms ease-in-out;\r\n}\r\n.addShipButton:hover {\r\n  background: #545e75;\r\n  color: white;\r\n  transform: scale(1.05);\r\n}\r\n.addShipButton:active {\r\n  background: #454d5f;\r\n  color: white;\r\n}\r\n\r\n.resetButton {\r\n  color: #012e32;\r\n  line-height: 13px;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  font-family: Georgia, serif;\r\n  font-weight: normal;\r\n  text-decoration: none;\r\n  font-style: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  background-image: linear-gradient(to right, #b9fef6 0%, #09c3c1 100%);\r\n  box-shadow: #edeef1 2px 2px 4px 2px;\r\n  border: 2px solid #353945;\r\n  display: inline-block;\r\n  transform: translateY(-100%);\r\n  transition: transform 250ms ease-in-out;\r\n}\r\n.resetButton:hover {\r\n  background: #545e75;\r\n  color: white;\r\n  transform: scale(1.05);\r\n  transform: translateY(-100%);\r\n}\r\n.resetButton:active {\r\n  background: #454d5f;\r\n  color: white;\r\n}\r\n\r\n/* score elements */\r\n\r\n.scoreTitle {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  color: #3c4350;\r\n  font-weight: bold;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.shipFloat {\r\n  background-image: url(\"./img/ship.jpg\");\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n.shipSunk {\r\n  background-image: url(\"./img/ship-sunk.jpg\");\r\n  background-size: cover;\r\n  background-position: center;\r\n  border-bottom: 2px solid #09c3c1;\r\n}\r\n\r\n/* This is the style of our error messages */\r\n.error {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0;\r\n  font-size: 1rem;\r\n  color: white;\r\n  background-color: #900;\r\n  border-radius: 0 0 5px 5px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.error.active {\r\n  padding: 0.3em;\r\n}\r\n\r\n/* display base */\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 0.5fr 6fr 2fr;\r\n  grid-template-rows: 1fr 6fr 1fr;\r\n  max-height: 100%;\r\n}\r\n\r\n.turn {\r\n  grid-row: 1 / 2; /* esta linea se asocia al grid del container */\r\n  grid-column: 2 / 4; /* esta linea se asocia al grid del container */\r\n  display: grid;\r\n  grid-template-columns: 2fr 1fr 2fr 3fr 1fr;\r\n  grid-template-rows: 1fr;\r\n}\r\n\r\n.turnDiv {\r\n  grid-column: 1 / 2; /* grid turn*/\r\n  grid-row: 1 / 2;\r\n  font-size: 1.7rem;\r\n  color: lightyellow;\r\n}\r\n\r\n.turn {\r\n  position: relative;\r\n}\r\n\r\n.display {\r\n  padding: 0;\r\n  z-index: 1;\r\n  display: flex;\r\n  place-items: center;\r\n  width: 100px;\r\n  height: 100px;\r\n  font-size: 1rem;\r\n  color: white;\r\n  background-color: #900;\r\n  border-radius: 0 0 5px 5px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.addships {\r\n  grid-column: 2 / 3; /* grid turn*/\r\n  grid-row: 1 / 2;\r\n  padding-top: 1%;\r\n}\r\n\r\n.randomships {\r\n  /* grid turn*/\r\n  grid-column: 3 / 4;\r\n  grid-row: 1 / 2;\r\n  padding-top: 1%;\r\n  align-items: center;\r\n  color: lightyellow;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 3px;\r\n}\r\n\r\n.result {\r\n  /* grid turn*/\r\n  grid-row: 1/2;\r\n  grid-column: 4/5;\r\n}\r\n\r\n.resultMessage {\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  color: lightyellow;\r\n}\r\n\r\n.gridForAdd {\r\n  grid-column-start: 4; /* esta linea se asocia al grid del board */\r\n  grid-row-start: 2; /* esta linea se asocia al grid del board */\r\n  padding-left: 2%;\r\n  box-sizing: content-box;\r\n  height: 400px;\r\n  width: 120%;\r\n  font-size: 10px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.formInput {\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: 5fr 1fr 1fr;\r\n}\r\n\r\n.formRadio {\r\n  grid-column: 1/2;\r\n  grid-row: 1/2;\r\n  background-color: #b2b9c7;\r\n  line-height: 2;\r\n}\r\n\r\n.submitButton {\r\n  grid-column: 2/3;\r\n  grid-row: 1/2;\r\n}\r\n\r\n.board-human {\r\n  position: relative; /* for headers purpose */\r\n\r\n  grid-column: 2/3; /* esta linea se asocia al grid del board */\r\n  grid-row: 2/3; /* esta linea se asocia al grid del board */\r\n  display: grid;\r\n  height: 100%;\r\n  width: 100%;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  grid-template-rows: repeat(13, 1fr);\r\n  border: 5px solid black;\r\n  gap: 2px;\r\n  padding: 2px;\r\n  background-color: #b2b9c7;\r\n}\r\n\r\n.board-computer {\r\n  position: relative;\r\n\r\n  grid-column: 4/5; /* esta linea se asocia al grid del board */\r\n  grid-row: 2/3; /* esta linea se asocia al grid del board */\r\n  display: grid;\r\n  height: 100%;\r\n  width: 100%;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  grid-template-rows: repeat(13, 1fr);\r\n  border: 5px solid black;\r\n  gap: 2px;\r\n  padding: 2px;\r\n  background-color: #b2b9c7;\r\n}\r\n\r\n.columnsHead {\r\n  position: absolute; /* in relation parent board-human*/\r\n  transform: translateY(-100%);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.rowsHead {\r\n  position: absolute; /* in relation parent board-human*/\r\n  transform: translateX(-100%);\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.headComputer {\r\n  position: absolute; /* in relation parent board-computer*/\r\n  transform: translateY(-100%);\r\n  color: lightyellow;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.attackMessage {\r\n  grid-row: 1/2;\r\n  grid-column: 2/3;\r\n  display: flex;\r\n  flex-wrap: nowrap;\r\n  align-items: center;\r\n}\r\n\r\n.scoreBoard {\r\n  position: absolute;\r\n  inset: 0px;\r\n  max-width: 115px;\r\n  height: 525px;\r\n  margin-top: 3%;\r\n  margin-left: auto;\r\n  margin-right: 1%;\r\n  background-color: #edeef1;\r\n  border-left: 3px solid #f6f7f9;\r\n  border-right: 3px solid #f6f7f9;\r\n  border-radius: 4px;\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 1fr;\r\n  gap: 5px;\r\n}\r\n\r\n.score {\r\n  height: 95%;\r\n  display: grid;\r\n  grid-template-columns: 3fr 2fr;\r\n  grid-template-rows: repeat(8, 1fr);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-mobile.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-mobile.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (max-width: 620px) {
  main {
    width: 100%;
  }

  .turn {
    width: 100%;
    padding-top: 45px;
    position: relative;
  }

  .result {
    position: fixed;
    top: 5%;
    right: 40%;
  }

  .waitTurn {
    position: fixed;
    top: 60%;
    left: 20%;
  }

  .noFire {
    position: fixed;
    top: 30%;
    left: 10%;
  }

  .result {
    position: absolute;
    transform: translate(4%, -23%);
    width: 100%;
    height: 100%;
  }

  .randomships {
    font-size: 0.7rem;
  }

  .board {
    grid-column: 2/3; /* esta linea se asocia al grid del container */
    grid-row: 2/3; /* esta linea se asocia al grid del container */
    background-color: #454d5f;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    padding-top: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .board-human {
    max-width: 220px;
    max-height: 249px;
  }

  .board-computer {
    max-width: 220px;
    max-height: 249px;
  }

  .scoreBoard {
    margin-top: 70px;
    width: 83px;
    height: 800px;
  }

  .resetButton {
    position: absolute;
    top: 25px;
    left: 15px;
    height: 25px;
    padding: 1px 15px 1px 15px;
  }

  .addships {
    padding: 1px 15px 1px 15px;
  }

  .board {
    position: relative;
    padding-top: 30px;
  }

  .attackMessage {
    position: fixed;
    top: 300px;
    left: 10%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: black;
    height: 30px;
  }

  [class^="cell"] {
    font-size: 4px;
    padding: 1px;
  }

  .addShipButton {
    font-size: 0.6rem;
    line-height: 1rem;
    width: 70px;
    height: 85px;
    text-wrap: wrap;
    padding-left: 5px;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 5px;
  }

  picture {
    width: 50px;
  }

  .error.active {
    height: 90%;
    font-size: 0.7rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style-mobile.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,OAAO;IACP,UAAU;EACZ;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,8BAA8B;IAC9B,WAAW;IACX,YAAY;EACd;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB,EAAE,+CAA+C;IACjE,aAAa,EAAE,+CAA+C;IAC9D,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,2BAA2B;EAC7B;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,WAAW;IACX,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,UAAU;IACV,SAAS;IACT,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,iBAAiB;EACnB;AACF","sourcesContent":["@media screen and (max-width: 620px) {\r\n  main {\r\n    width: 100%;\r\n  }\r\n\r\n  .turn {\r\n    width: 100%;\r\n    padding-top: 45px;\r\n    position: relative;\r\n  }\r\n\r\n  .result {\r\n    position: fixed;\r\n    top: 5%;\r\n    right: 40%;\r\n  }\r\n\r\n  .waitTurn {\r\n    position: fixed;\r\n    top: 60%;\r\n    left: 20%;\r\n  }\r\n\r\n  .noFire {\r\n    position: fixed;\r\n    top: 30%;\r\n    left: 10%;\r\n  }\r\n\r\n  .result {\r\n    position: absolute;\r\n    transform: translate(4%, -23%);\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .randomships {\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .board {\r\n    grid-column: 2/3; /* esta linea se asocia al grid del container */\r\n    grid-row: 2/3; /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    padding-left: 10px;\r\n    padding-top: 10px;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .board-human {\r\n    max-width: 220px;\r\n    max-height: 249px;\r\n  }\r\n\r\n  .board-computer {\r\n    max-width: 220px;\r\n    max-height: 249px;\r\n  }\r\n\r\n  .scoreBoard {\r\n    margin-top: 70px;\r\n    width: 83px;\r\n    height: 800px;\r\n  }\r\n\r\n  .resetButton {\r\n    position: absolute;\r\n    top: 25px;\r\n    left: 15px;\r\n    height: 25px;\r\n    padding: 1px 15px 1px 15px;\r\n  }\r\n\r\n  .addships {\r\n    padding: 1px 15px 1px 15px;\r\n  }\r\n\r\n  .board {\r\n    position: relative;\r\n    padding-top: 30px;\r\n  }\r\n\r\n  .attackMessage {\r\n    position: fixed;\r\n    top: 300px;\r\n    left: 10%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    background-color: black;\r\n    height: 30px;\r\n  }\r\n\r\n  [class^=\"cell\"] {\r\n    font-size: 4px;\r\n    padding: 1px;\r\n  }\r\n\r\n  .addShipButton {\r\n    font-size: 0.6rem;\r\n    line-height: 1rem;\r\n    width: 70px;\r\n    height: 85px;\r\n    text-wrap: wrap;\r\n    padding-left: 5px;\r\n    padding-top: 5px;\r\n    padding-right: 5px;\r\n    padding-bottom: 5px;\r\n  }\r\n\r\n  picture {\r\n    width: 50px;\r\n  }\r\n\r\n  .error.active {\r\n    height: 90%;\r\n    font-size: 0.7rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-reset.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-reset.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* end of reset of style browser */`, "",{"version":3,"sources":["webpack://./src/style-reset.css"],"names":[],"mappings":";CACC;;;CAGA;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,kCAAkC","sourcesContent":["\r\n /* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video, input {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/* end of reset of style browser */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-tablet.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-tablet.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width: 621px) and (max-width: 840px) {
  main {
    width: 100%;
    height: 100%;
  }

  .turn {
    width: 100%;
    padding-top: 45px;
  }

  .randomships {
    font-size: 0.7rem;
  }

  .board {
    grid-column: 2/3; /* esta linea se asocia al grid del container */
    grid-row: 2/3; /* esta linea se asocia al grid del container */
    background-color: #454d5f;
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;
    grid-template-rows: 1fr 14fr;
    column-gap: 2%;
    padding-bottom: 5%;
    padding-right: 10%;
  }

  .board-human {
    max-width: 220px;
    max-height: 325px;
  }

  .board-computer {
    max-width: 220px;
    max-height: 325px;
  }

  .scoreBoard {
    width: 85px;
    height: 800px;
    gap: 1px;
  }

  .score {
    height: 90%;
  }

  .resetButton {
    position: absolute;
    top: 25px;
    left: 15px;
    height: 25px;
    padding: 1px 15px 1px 15px;
  }

  .addships {
    padding: 1px 15px 1px 15px;
  }

  [class^="cell"] {
    font-size: 4px;
    padding: 1px;
  }

  picture {
    width: 50px;
  }

  .waitTurn {
    position: fixed;
    top: 30%;
    left: 40%;
  }

  .noFire {
    position: fixed;
    top: 30%;
    left: 10%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style-tablet.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB,EAAE,+CAA+C;IACjE,aAAa,EAAE,+CAA+C;IAC9D,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,QAAQ;EACV;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;AACF","sourcesContent":["@media screen and (min-width: 621px) and (max-width: 840px) {\r\n  main {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .turn {\r\n    width: 100%;\r\n    padding-top: 45px;\r\n  }\r\n\r\n  .randomships {\r\n    font-size: 0.7rem;\r\n  }\r\n\r\n  .board {\r\n    grid-column: 2/3; /* esta linea se asocia al grid del container */\r\n    grid-row: 2/3; /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height: 90%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\r\n    grid-template-rows: 1fr 14fr;\r\n    column-gap: 2%;\r\n    padding-bottom: 5%;\r\n    padding-right: 10%;\r\n  }\r\n\r\n  .board-human {\r\n    max-width: 220px;\r\n    max-height: 325px;\r\n  }\r\n\r\n  .board-computer {\r\n    max-width: 220px;\r\n    max-height: 325px;\r\n  }\r\n\r\n  .scoreBoard {\r\n    width: 85px;\r\n    height: 800px;\r\n    gap: 1px;\r\n  }\r\n\r\n  .score {\r\n    height: 90%;\r\n  }\r\n\r\n  .resetButton {\r\n    position: absolute;\r\n    top: 25px;\r\n    left: 15px;\r\n    height: 25px;\r\n    padding: 1px 15px 1px 15px;\r\n  }\r\n\r\n  .addships {\r\n    padding: 1px 15px 1px 15px;\r\n  }\r\n\r\n  [class^=\"cell\"] {\r\n    font-size: 4px;\r\n    padding: 1px;\r\n  }\r\n\r\n  picture {\r\n    width: 50px;\r\n  }\r\n\r\n  .waitTurn {\r\n    position: fixed;\r\n    top: 30%;\r\n    left: 40%;\r\n  }\r\n\r\n  .noFire {\r\n    position: fixed;\r\n    top: 30%;\r\n    left: 10%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width: 841px) and (max-width: 1100px) {
  main {
    width: 100%;
    height: 100%;
  }
  .board {
    grid-column: 2/3; /* esta linea se asocia al grid del container */
    grid-row: 2/3; /* esta linea se asocia al grid del container */
    background-color: #454d5f;
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;
    grid-template-rows: 1fr 14fr;
    column-gap: 2%;
    padding-bottom: 5%;
    padding-right: 10%;
  }

  .board-human {
    max-width: 264px;
    max-height: 390px;
  }

  .board-computer {
    max-width: 264px;
    max-height: 390px;
  }

  [class^="cell"] {
    font-size: 6px;
    padding: 1px;
  }

  .waitTurn {
    position: fixed;
    top: 30%;
    left: 60%;
  }

  .noFire {
    position: fixed;
    top: 30%;
    left: 30%;
  }
}

@media screen and (min-width: 1101px) {
  main {
    width: 100%;
    height: 100vh;
  }

  .board {
    grid-column: 2/3; /* esta linea se asocia al grid del container */
    grid-row: 2/3; /* esta linea se asocia al grid del container */
    background-color: #454d5f;
    height: 90%;
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;
    grid-template-rows: 1fr 14fr;
    column-gap: 5%;
    padding-bottom: 5%;
    padding-right: 10%;
  }

  .board-human {
    max-width: 100%;
    max-height: 100%;
  }

  .board-computer {
    max-width: 100%;
    max-height: 100%;
  }

  [class^="cell"] {
    font-size: 8px;
    padding: 3px;
  }

  .waitTurn {
    position: fixed;
    top: 30%;
    left: 60%;
  }

  .noFire {
    position: fixed;
    top: 30%;
    left: 30%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,gBAAgB,EAAE,+CAA+C;IACjE,aAAa,EAAE,+CAA+C;IAC9D,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;AACF;;AAEA;EACE;IACE,WAAW;IACX,aAAa;EACf;;EAEA;IACE,gBAAgB,EAAE,+CAA+C;IACjE,aAAa,EAAE,+CAA+C;IAC9D,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;AACF","sourcesContent":["@media screen and (min-width: 841px) and (max-width: 1100px) {\r\n  main {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  .board {\r\n    grid-column: 2/3; /* esta linea se asocia al grid del container */\r\n    grid-row: 2/3; /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height: 90%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\r\n    grid-template-rows: 1fr 14fr;\r\n    column-gap: 2%;\r\n    padding-bottom: 5%;\r\n    padding-right: 10%;\r\n  }\r\n\r\n  .board-human {\r\n    max-width: 264px;\r\n    max-height: 390px;\r\n  }\r\n\r\n  .board-computer {\r\n    max-width: 264px;\r\n    max-height: 390px;\r\n  }\r\n\r\n  [class^=\"cell\"] {\r\n    font-size: 6px;\r\n    padding: 1px;\r\n  }\r\n\r\n  .waitTurn {\r\n    position: fixed;\r\n    top: 30%;\r\n    left: 60%;\r\n  }\r\n\r\n  .noFire {\r\n    position: fixed;\r\n    top: 30%;\r\n    left: 30%;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1101px) {\r\n  main {\r\n    width: 100%;\r\n    height: 100vh;\r\n  }\r\n\r\n  .board {\r\n    grid-column: 2/3; /* esta linea se asocia al grid del container */\r\n    grid-row: 2/3; /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height: 90%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\r\n    grid-template-rows: 1fr 14fr;\r\n    column-gap: 5%;\r\n    padding-bottom: 5%;\r\n    padding-right: 10%;\r\n  }\r\n\r\n  .board-human {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n  }\r\n\r\n  .board-computer {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n  }\r\n\r\n  [class^=\"cell\"] {\r\n    font-size: 8px;\r\n    padding: 3px;\r\n  }\r\n\r\n  .waitTurn {\r\n    position: fixed;\r\n    top: 30%;\r\n    left: 60%;\r\n  }\r\n\r\n  .noFire {\r\n    position: fixed;\r\n    top: 30%;\r\n    left: 30%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



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

/***/ "./src/style-base.css":
/*!****************************!*\
  !*** ./src/style-base.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_base_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-base.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-base.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_base_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_base_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_base_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style-mobile.css":
/*!******************************!*\
  !*** ./src/style-mobile.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-mobile.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-mobile.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_mobile_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style-reset.css":
/*!*****************************!*\
  !*** ./src/style-reset.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style-tablet.css":
/*!******************************!*\
  !*** ./src/style-tablet.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_tablet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-tablet.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-tablet.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_tablet_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_tablet_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_tablet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_tablet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/components/add-ships.js":
/*!*************************************!*\
  !*** ./src/components/add-ships.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addShips: () => (/* binding */ addShips)
/* harmony export */ });
/* harmony import */ var _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliary-functions */ "./src/components/auxiliary-functions.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update */ "./src/components/update.js");
/* harmony import */ var _update_computer_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-computer-board */ "./src/components/update-computer-board.js");
/* harmony import */ var _show_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-error */ "./src/components/show-error.js");
/* harmony import */ var _delete_div_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-div-error */ "./src/components/delete-div-error.js");
/* harmony import */ var _random_ships__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./random-ships */ "./src/components/random-ships.js");
/* harmony import */ var _score_board_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score-board.js */ "./src/components/score-board.js");








function addShips(arg1,arg2,arg3,arg4,arg5,arg6){
    /* arg is the game  arg2 is the div with the humanboard  
    arg3 to show the options arg4 to show random button
    arg5 is the div with the computerboard arg6 is the content computer board*/
const game = arg1;
const humanBoard = arg2;
const playerHuman = game.getActivePlayer();
const computerBoard = arg5;
const playerComputer = arg6;

// headers for the rows and columns of the human player board
const divColumnsHead = document.createElement('div');
divColumnsHead.classList.add('columnsHead');
  for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.columns; j++) {
  const cellHead = document.createElement("div");
  cellHead.classList.add("headCell");
  cellHead.textContent = _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j].toUpperCase();
  divColumnsHead.appendChild(cellHead);
  }
arg2.appendChild(divColumnsHead);

const divRowsHead = document.createElement('div');
divRowsHead.classList.add('rowsHead');
  for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.rows; i++) {
  const cellHead = document.createElement("div");
  cellHead.classList.add("headCell");
  cellHead.textContent = i+1;
  divRowsHead.appendChild(cellHead);
  }
arg2.appendChild(divRowsHead);

// div for add the ships in the board
const grid = document.getElementById('gridForAdd');
grid.classList.add('gridForAdd');
const divForError = document.createElement('div');
divForError.setAttribute('id','divForError');
divForError.setAttribute('style','grid-row: 1 / 2; grid-column: 4 / 5;');

const shipLength=[5,3,4,6,4,5];
        
for(let i=1; i<=shipLength.length; ++i){
    const form = document.createElement('form');
    form.setAttribute('id',`form${i}`);
    form.classList.add('formInput');
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type','submit');
    submitButton.setAttribute('id',`submit${i}`);
    submitButton.textContent = `ADD N° ${i}`;
    submitButton.classList.add('submitButton');
    submitButton.classList.add('addShipButton');
    const title = document.createElement('div');   
    title.setAttribute('style','text-transform: uppercase;');
    const text = document.createElement('p');
    text.setAttribute('style','color:green; background-color:white; font-weight: 900; display:flex; justify-content: right;');
    text.innerText = `${shipLength[i-1]} squares longitude`;
   

    const radioDiv = document.createElement('div');
    radioDiv.classList.add('formRadio');
    const directionInput = document.createElement('div');
    const labelForHorizontal = document.createElement('label');
    const horizontally = document.createElement('input');
    const labelForVertical = document.createElement('label');
    const vertically = document.createElement('input');
    directionInput.setAttribute('style','display: flex; justify-content: center; font-size: 12px');
    labelForHorizontal.innerText = 'left-to-right';
    labelForHorizontal.setAttribute('for','left-to-right');
    labelForVertical.innerText = 'top-to-down';
    labelForVertical.setAttribute('for','top-to-down');
    horizontally.setAttribute('type','radio');
    horizontally.setAttribute('id','left-to-right');
    horizontally.setAttribute('name','direction');
    horizontally.setAttribute('value','left-to-right');
    vertically.setAttribute('type','radio');
    vertically.setAttribute('id','top-to-down');
    vertically.setAttribute('value','top-to-down');
    vertically.setAttribute('name','direction');

    const coordRow = document.createElement('div');
    coordRow.innerText = 'ROW: ';
    const coordColumn = document.createElement('div');
    coordColumn.innerText = 'COLUMN: ';

    for(let i=0; i<_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.rows; ++i){
        const rowLabel = document.createElement('label');
        const inputRow = document.createElement('input');
        rowLabel.innerText = i+1;
        rowLabel.setAttribute('for',`row${i+1}`);
        inputRow.setAttribute('type','radio');
        inputRow.setAttribute('id',`row${i+1}`);
        inputRow.setAttribute('name','rowSelected');
        inputRow.setAttribute('value',i+1);

        coordRow.appendChild(rowLabel);
        coordRow.appendChild(inputRow);
    }

   
    for(let j=0; j<_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.columns; ++j){
        const columnLabel = document.createElement('label');
        const inputColumn = document.createElement('input');
        columnLabel.innerText = _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j].toUpperCase();
        columnLabel.setAttribute('for',`column${_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j]}`);
        inputColumn.setAttribute('type','radio');
        inputColumn.setAttribute('id',`column${_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j]}`);
        inputColumn.setAttribute('name','columnSelected');
        inputColumn.setAttribute('value',_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j]);

        coordColumn.appendChild(columnLabel);
        coordColumn.appendChild(inputColumn);
    }

    horizontally.addEventListener('change', () => {
        (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
      });

    vertically.addEventListener('change', () => {
        (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
      });

    let directionSelected = '';
    function directionRadioValue() {
            
        let getSelectedValue = document.querySelector( 'input[name="direction"]:checked');   
            
        if(getSelectedValue != null) {   
         directionSelected = getSelectedValue.value;
         
         }else {  
            (0,_show_error__WEBPACK_IMPORTED_MODULE_3__.showError)(radioDiv,'must select direction'.toUpperCase());
         }
 
        return directionSelected;
      };

    let rowSelected = '';
    function rowRadioValue() {
       
        let getSelectedValue = document.querySelector( 'input[name="rowSelected"]:checked');   
            
        if(getSelectedValue != null) {   
         rowSelected = getSelectedValue.value;
         
         }else {  
            rowSelected = 1;
         }
 
        return rowSelected;
      };

    let columnSelected = '';
    function columnRadioValue() {
            
        let getSelectedValue = document.querySelector( 'input[name="columnSelected"]:checked');   
            
        if(getSelectedValue != null) {   
         columnSelected = getSelectedValue.value;
         
         }else {  
         columnSelected = 'a';
         }
 
        return columnSelected;
      };

    form.addEventListener('submit', function(event){
        event.preventDefault()
        ;(0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
        
        let size = shipLength[i-1];

        let shipNumber = i;
    
        let direction = directionRadioValue();

        let rowSelected = rowRadioValue();
    
        let columnSelected = columnRadioValue();

        let coord = [Number(rowSelected),columnSelected];

        let ship = playerHuman['gameboard'].dataShips(coord,direction,size,shipNumber);
    
        if (ship!==null){
            (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
            let newBoard = playerHuman['gameboard'].placeShipsInTheBoard(ship);
            (0,_update__WEBPACK_IMPORTED_MODULE_1__.updateCells)(humanBoard, newBoard);
            const submitReady = document.getElementById(`form${i}`);
            submitReady.remove();

            if(document.querySelectorAll('.formInput').length===0){
                removeAllAddShipsDiv(grid,divForRandom,divColumnsHead,divRowsHead);
                randomShipsForComputerPlayer(computerBoard,shipLength,playerComputer);
                (0,_score_board_js__WEBPACK_IMPORTED_MODULE_6__.scoreBoard)(arg3,playerHuman,playerComputer);
            }
           
        }else{
            (0,_show_error__WEBPACK_IMPORTED_MODULE_3__.showError)(divForError,'SELECT ANOTHER LOCATION');
        }

      });
      
    arg3.appendChild(grid);
    grid.appendChild(form);
    form.appendChild(radioDiv);
    radioDiv.appendChild(title);
    title.appendChild(text);
    radioDiv.appendChild(directionInput);
    radioDiv.appendChild(coordRow);
    radioDiv.appendChild(coordColumn);
    form.appendChild(submitButton);
    directionInput.appendChild(labelForHorizontal);
    directionInput.appendChild(horizontally);
    directionInput.appendChild(labelForVertical);
    directionInput.appendChild(vertically);
    
    }

    const divForRandom = document.createElement('div');
    divForRandom.innerText = '➥ ';
    divForRandom.classList.add('randomships');
    const buttonRandom = document.createElement('button');
    buttonRandom.innerText = 'RANDOM FLEET';
    buttonRandom.classList.add('addShipButton');

    buttonRandom.addEventListener("click", () => {
        (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
        playerHuman['gameboard']['allShips']=[];
        playerHuman['gameboard'].initializeBoard();
        (0,_update__WEBPACK_IMPORTED_MODULE_1__.updateCells)(humanBoard,playerHuman['gameboard']['board']);
        (0,_random_ships__WEBPACK_IMPORTED_MODULE_5__.randomShips)(playerHuman['gameboard'],shipLength);
        (0,_update__WEBPACK_IMPORTED_MODULE_1__.updateCells)(humanBoard,playerHuman['gameboard']['board']);
        removeAllAddShipsDiv(grid,divForRandom,divColumnsHead,divRowsHead);
        randomShipsForComputerPlayer(computerBoard,shipLength,playerComputer);
        (0,_score_board_js__WEBPACK_IMPORTED_MODULE_6__.scoreBoard)(arg3,playerHuman,playerComputer);
      });
    
    arg4.appendChild(divForRandom);
    arg4.appendChild(divForError);
    divForRandom.appendChild(buttonRandom);

}

function removeAllAddShipsDiv(arg1,arg2,arg3,arg4){
    // all the arguments are the divs to will be removed
    arg1.remove();
    arg2.remove();
    arg3.remove();
    arg4.remove();
}

function randomShipsForComputerPlayer(arg1,arg2,arg3){
      /*  arg1 is the div to write the head */
        const computerBoard = arg1;
        const shipLength = arg2;
        const playerComputer = arg3;

        computerBoard.classList.remove('hide');
        computerBoard.classList.add('board-computer');

        const headComputer = document.createElement('div');
        headComputer.innerText = 'this is your enemy '.toUpperCase()+' Click To Attack';
        headComputer.classList.add('headComputer');
        arg1.appendChild(headComputer);

        playerComputer['gameboard'].initializeBoard();
        (0,_update__WEBPACK_IMPORTED_MODULE_1__.updateCells)(computerBoard,playerComputer['gameboard']['board']);
        (0,_random_ships__WEBPACK_IMPORTED_MODULE_5__.randomShips)(playerComputer['gameboard'],shipLength);
        (0,_update_computer_board__WEBPACK_IMPORTED_MODULE_2__.updateCellsComputerBoard)(computerBoard,playerComputer['gameboard']['board']);
}



/***/ }),

/***/ "./src/components/adjacent.js":
/*!************************************!*\
  !*** ./src/components/adjacent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjacent: () => (/* binding */ adjacent)
/* harmony export */ });
const adjacent = new Map();

adjacent.set(0,[1,12]);
adjacent.set(1,[0,2,13]);
adjacent.set(2,[1,3,14]);
adjacent.set(3,[2,4,15]);
adjacent.set(4,[3,5,16]);
adjacent.set(5,[4,6,17]);
adjacent.set(6,[5,7,18]);
adjacent.set(7,[6,8,19]);
adjacent.set(8,[7,9,20]);
adjacent.set(9,[8,10,21]);
adjacent.set(10,[9,11,22]);
adjacent.set(11,[10,23]);
adjacent.set(12,[0,13,24]);
adjacent.set(13,[1,12,14,25]);
adjacent.set(14,[2,13,15,26]);
adjacent.set(15,[3,14,16,27]);
adjacent.set(16,[4,15,17,28]);
adjacent.set(17,[5,16,18,29]);
adjacent.set(18,[6,17,19,30]);
adjacent.set(19,[7,18,20,31]);
adjacent.set(20,[8,19,21,32]);
adjacent.set(21,[9,20,22,33]);
adjacent.set(22,[10,21,23,34]);
adjacent.set(23,[11,22,35]);
adjacent.set(24,[12,25,36]);
adjacent.set(25,[13,24,26,37]);
adjacent.set(26,[14,25,27,38]);
adjacent.set(27,[15,26,28,39]);
adjacent.set(28,[16,27,29,40]);
adjacent.set(29,[17,28,30,41]);
adjacent.set(30,[18,29,31,42]);
adjacent.set(31,[19,30,32,43]);
adjacent.set(32,[20,31,33,44]);
adjacent.set(33,[21,32,34,45]);
adjacent.set(34,[22,33,35,46]);
adjacent.set(35,[23,34,47]);
adjacent.set(36,[24,37,48]);
adjacent.set(37,[25,36,38,49]);
adjacent.set(38,[26,37,39,50]);
adjacent.set(39,[27,38,40,51]);
adjacent.set(40,[28,39,41,52]);
adjacent.set(41,[29,40,42,53]);
adjacent.set(42,[30,41,43,54]);
adjacent.set(43,[31,42,44,55]);
adjacent.set(44,[32,43,45,56]);
adjacent.set(45,[33,44,46,57]);
adjacent.set(46,[34,45,47,58]);
adjacent.set(47,[35,46,59]);
adjacent.set(48,[36,49,60]);
adjacent.set(49,[37,48,50,61]);
adjacent.set(50,[38,49,51,62]);
adjacent.set(51,[39,50,52,63]);
adjacent.set(52,[40,51,53,64]);
adjacent.set(53,[41,52,54,65]);
adjacent.set(54,[42,53,55,66]);
adjacent.set(55,[43,54,56,67]);
adjacent.set(56,[44,55,57,68]);
adjacent.set(57,[45,56,58,69]);
adjacent.set(58,[46,57,59,70]);
adjacent.set(59,[47,58,71]);
adjacent.set(60,[48,61,72]);
adjacent.set(61,[49,60,62,73]);
adjacent.set(62,[50,61,63,74]);
adjacent.set(63,[51,62,64,75]);
adjacent.set(64,[52,63,65,76]);
adjacent.set(65,[53,64,66,77]);
adjacent.set(66,[54,65,67,78]);
adjacent.set(67,[55,66,68,79]);
adjacent.set(68,[56,67,69,80]);
adjacent.set(69,[57,68,70,81]);
adjacent.set(70,[58,69,71,82]);
adjacent.set(71,[59,70,83]);
adjacent.set(72,[60,73,84]);
adjacent.set(73,[61,72,74,85]);
adjacent.set(74,[62,73,75,86]);
adjacent.set(75,[63,74,76,87]);
adjacent.set(76,[64,75,77,88]);
adjacent.set(77,[65,76,78,89]);
adjacent.set(78,[66,77,79,90]);
adjacent.set(79,[67,78,80,91]);
adjacent.set(80,[68,79,81,92]);
adjacent.set(81,[69,80,82,93]);
adjacent.set(82,[70,81,83,94]);
adjacent.set(83,[71,82,95]);
adjacent.set(84,[72,85,96]);
adjacent.set(85,[73,84,86,97]);
adjacent.set(86,[74,85,87,98]);
adjacent.set(87,[75,86,88,99]);
adjacent.set(88,[76,87,89,100]);
adjacent.set(89,[77,88,90,101]);
adjacent.set(90,[78,89,91,102]);
adjacent.set(91,[79,90,92,103]);
adjacent.set(92,[80,91,93,104]);
adjacent.set(93,[81,92,94,105]);
adjacent.set(94,[82,93,95,106]);
adjacent.set(95,[83,94,107]);
adjacent.set(96,[84,97,108]);
adjacent.set(97,[85,96,98,109]);
adjacent.set(98,[86,97,99,110]);
adjacent.set(99,[87,98,100,111]);
adjacent.set(100,[88,99,101,112]);
adjacent.set(101,[89,100,102,113]);
adjacent.set(102,[90,101,103,114]);
adjacent.set(103,[91,102,104,115]);
adjacent.set(104,[92,103,105,116]);
adjacent.set(105,[93,104,106,117]);
adjacent.set(106,[94,105,107,118]);
adjacent.set(107,[95,106,119]);
adjacent.set(108,[96,109,120]);
adjacent.set(109,[97,108,110,121]);
adjacent.set(110,[98,109,111,122]);
adjacent.set(111,[99,110,112,123]);
adjacent.set(112,[100,111,113,124]);
adjacent.set(113,[101,112,114,125]);
adjacent.set(114,[102,113,115,126]);
adjacent.set(115,[103,114,116,127]);
adjacent.set(116,[104,115,117,128]);
adjacent.set(117,[105,116,118,129]);
adjacent.set(118,[106,117,119,130]);
adjacent.set(119,[107,118,131]);
adjacent.set(120,[108,121,132]);
adjacent.set(121,[109,120,122,133]);
adjacent.set(122,[110,121,123,134]);
adjacent.set(123,[111,122,124,135]);
adjacent.set(124,[112,123,125,136]);
adjacent.set(125,[113,124,126,137]);
adjacent.set(126,[114,125,127,138]);
adjacent.set(127,[115,126,128,139]);
adjacent.set(128,[116,127,129,140]);
adjacent.set(129,[117,128,130,141]);
adjacent.set(130,[118,129,131,142]);
adjacent.set(131,[119,130,143]);
adjacent.set(132,[120,133,144]);
adjacent.set(133,[121,132,134,145]);
adjacent.set(134,[122,133,135,146]);
adjacent.set(135,[123,134,136,147]);
adjacent.set(136,[124,135,137,148]);
adjacent.set(137,[125,136,138,149]);
adjacent.set(138,[126,137,139,150]);
adjacent.set(139,[127,138,140,151]);
adjacent.set(140,[128,139,141,152]);
adjacent.set(141,[129,140,142,153]);
adjacent.set(142,[130,141,143,154]);
adjacent.set(143,[131,142,155]);
adjacent.set(144,[132,145]);
adjacent.set(145,[133,144,146]);
adjacent.set(146,[134,145,147]);
adjacent.set(147,[135,146,148]);
adjacent.set(148,[136,147,149]);
adjacent.set(149,[137,148,150]);
adjacent.set(150,[138,149,151]);
adjacent.set(151,[139,150,152]);
adjacent.set(152,[140,151,153]);
adjacent.set(153,[141,152,154]);
adjacent.set(154,[142,153,155]);
adjacent.set(155,[143,154]);





/***/ }),

/***/ "./src/components/auxiliary-functions.js":
/*!***********************************************!*\
  !*** ./src/components/auxiliary-functions.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alf_y: () => (/* binding */ alf_y),
/* harmony export */   allCoordinatesPosibles: () => (/* binding */ allCoordinatesPosibles),
/* harmony export */   assignLocation: () => (/* binding */ assignLocation),
/* harmony export */   checkCoordinates: () => (/* binding */ checkCoordinates),
/* harmony export */   columns: () => (/* binding */ columns),
/* harmony export */   fromCelltoCoordinates: () => (/* binding */ fromCelltoCoordinates),
/* harmony export */   fromCoordinatestoCell: () => (/* binding */ fromCoordinatestoCell),
/* harmony export */   relationCoordVsNodeList: () => (/* binding */ relationCoordVsNodeList),
/* harmony export */   rows: () => (/* binding */ rows),
/* harmony export */   shiftCoordinates: () => (/* binding */ shiftCoordinates)
/* harmony export */ });
const rows = 13;
const columns = 12;

const alf_y = [
    'a','b','c','d','e','f','g','h','i','j','k','l'
     ];

function shiftCoordinates([value_x,value_y]){
       /*  let [x,y] = [1,'a'];  */
        switch(alf_y.includes(value_y.toLowerCase())){
                case true:{
                    let index = alf_y.indexOf(value_y.toLowerCase());
                    return [ value_x-1, index ];
                }
                default:
                    return null;
        }  
    }

function assignLocation([x,y],direction,key){
let arrayOfCoordinates = [];
let initialX = x;
let initialY = alf_y.indexOf(y.toLowerCase());
    switch(direction==='left-to-right'){
        case true:
           if(alf_y.indexOf(y.toLowerCase()) + key > columns) {
                return null;
           } else {
             for ( let i= 0; i < key; ++i ){
                arrayOfCoordinates.push([ x, alf_y[initialY + i] ]);
             }
                return arrayOfCoordinates;
           }

        default:
        switch(direction==='top-to-down'){
            case true:
                if(initialX + key-1 > rows) {
                    return null;
               } else {
                 for ( let i= 0; i < key; ++i ){
                    arrayOfCoordinates.push([ initialX + i, y ]);
                 }
                    return arrayOfCoordinates;
               }

            default:
                return null;
        }
    }
}

function checkCoordinates([x,y]){
    if(x > 0 && x <= rows && alf_y.includes(y.toLowerCase())){
        return true;
    } else {
        return false;
    }
}

function fromCelltoCoordinates(row,column){
  /*   let [x,y] = [1,'a'];     */
    return [ row + 1, alf_y[column] ];
}

function fromCoordinatestoCell(coord){
   /*  let [row,column] = [0,0]; */
    let rowSelected = coord[0]-1;
    let columnSelected = alf_y.indexOf(coord[1].toLowerCase());
        return [Number(rowSelected), Number(columnSelected)];
}

function allCoordinatesPosibles() {
    let array = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
        array.push(`${i+1},${alf_y[j]}`);
    }}
    return array;
}

function relationCoordVsNodeList(){
    let array = [];
    let n= -1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
        n = n + 1;
        array.push([n,[`${i+1},${alf_y[j]}`]]);
    }}
    return array;
}



/***/ }),

/***/ "./src/components/create-container.js":
/*!********************************************!*\
  !*** ./src/components/create-container.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContainers: () => (/* binding */ createContainers)
/* harmony export */ });
function createContainers(arg1) {
    /* the arg1 is the parent container   */
    
        const container = document.createElement('div');
           
        container.classList.add('gridForAdd');
        container.setAttribute('id','gridForAdd');
    
        arg1.appendChild(container);
        
       
    }



/***/ }),

/***/ "./src/components/delete-div-error.js":
/*!********************************************!*\
  !*** ./src/components/delete-div-error.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteErrorMessages: () => (/* binding */ deleteErrorMessages)
/* harmony export */ });
function deleteErrorMessages() {
    const errorMessages = document.querySelectorAll('.error');
    /* para crear un array desde el NodeList */
    const errorMessagesArray = [...errorMessages];
    const iterator = errorMessagesArray.entries();
    errorMessagesArray.forEach(() => {
      let index = iterator.next().value;
    /*   console.log(index[0]);
         console.log(index[1]); */
      let x = index[1];  /* para leer el node dentro del nodeList */
      x.parentNode.removeChild(x);
    });
}


/***/ }),

/***/ "./src/components/game-controller.js":
/*!*******************************************!*\
  !*** ./src/components/game-controller.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameController: () => (/* binding */ gameController)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/components/player.js");
/* harmony import */ var _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliary-functions */ "./src/components/auxiliary-functions.js");



function gameController(
        playerReal = "HUMAN Player",
        playerComputer = "COMPUTER Player",
        winner = false,
        message = '' ){
    
        let players = [
                new _player__WEBPACK_IMPORTED_MODULE_0__.Player(playerReal)
                ,
                new _player__WEBPACK_IMPORTED_MODULE_0__.Player(playerComputer)
              ];

        let activePlayer = players[0];

        const switchPlayerTurn = () => {

            switch (winner) {
                case true:
                    /* the player doesnt change */
                activePlayer = activePlayer;                       
                break;
                default:
                    /* switch player*/
                    activePlayer = activePlayer === players[0] ? players[1] : players[0];             
                };           
           };
           const getActivePlayer = () => activePlayer;

           const boardReal = () => players[0]['gameboard']['board'];
           const boardComputer = () => players[1]['gameboard']['board'];

           const getComputerPlayer = () => players[1];
           const getHumanPlayer = () => players[0];

           const isThereAWinner = () => winner;

    const printNewRound = () => {
       
            boardReal();
            boardComputer();
        
           switch (winner) {
           case true:   
               message =  getActivePlayer().type + ' WON';                      
           break;
           default:
                       message = '';           
           }; 
      /*  console.log(message);  */   
      };

      const getGameMessage = () => message;    

      const checkForWinner = () => {
        if( players[0]['gameboard'].getTotalSunk() === players[0]['gameboard']['allShips'].length ){
            winner = true;
        } else {
            if( players[1]['gameboard'].getTotalSunk() === players[1]['gameboard']['allShips'].length ){
                winner = true;
            }
        }
        return winner;
      }

      const resetGame = () => { 
        winner = false;
        activePlayer = players[0];
        /* this reset is not been used */
        printNewRound();
      }

      const playRound = (row,column) => {
        let board = [];
        if ( winner === true ){ 
            resetGame();
        }else{
            let coord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.fromCelltoCoordinates)(row,column);
            let gameboard = players[1]['gameboard'];
            gameboard.recordedAttack(coord);
           

        checkForWinner();
        switchPlayerTurn();
        printNewRound();
        }
        return ( board ) ;
    }

    const playRoundComputer = (row,column) => {
        let board = [];
     /* console.log('activando juego'); */
        if ( winner === true ){ 
            resetGame();
        }else{
            let coord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.fromCelltoCoordinates)(row,column);
            let gameboard = players[0]['gameboard'];
            gameboard.recordedAttack(coord);
           

        checkForWinner();
        switchPlayerTurn();
        printNewRound();
        }
        return ( board ) ;
    }

    return {playRound,playRoundComputer, getActivePlayer, 
        getGameMessage, boardReal, boardComputer, resetGame,
         getComputerPlayer, getHumanPlayer, isThereAWinner};
}



/***/ }),

/***/ "./src/components/gameboard.js":
/*!*************************************!*\
  !*** ./src/components/gameboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/components/ship.js");
/* harmony import */ var _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliary-functions */ "./src/components/auxiliary-functions.js");




// a class Gameboard
class Gameboard {

    constructor(){
       
        this.board = this.getBoard(_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.rows, _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.columns);
        this.arrayMissed = new Set([]);
        this.arrayAllAttack = new Set([]);
        this.allShips = [];
    }

    getBoard( rows, columns, board=[]){
        for (let i = 0; i < rows; i++) {
            board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(this.cell());
            }
        };
        return board;
    }

    cell(){
   
        let value = 0;
       
        return {value};  
    }



    dataShips([x,y],direction,size,shipNumber) {
        
        let shipCoordinates = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.assignLocation)([x,y],direction,size);
        
        if(shipCoordinates===null){
            return null;
        }else{
            let notAvailable = shipCoordinates.map(
                (x) => this.board[(0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.shiftCoordinates)(x)[0]][(0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.shiftCoordinates)(x)[1]].value === 1
                );
               
            if  (notAvailable.includes(true)){
                return null
                }

            let shipCoordinatesToString = shipCoordinates.map((x) => x.toString());
            let oneShip = { 
                'shipNumber':shipNumber, 
                'shipDetails': new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(size),
                'coordinates': shipCoordinatesToString
                };
            this.allShips.push(oneShip);
            return oneShip;
        }    
    }

    placeShipsInTheBoard( oneShip ){
        let array = oneShip['coordinates'];
        let reverseString = array.map((x)=> x.split(','));
        let arrayInBoard = reverseString.map( (values) => (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.shiftCoordinates)(values));
        arrayInBoard.map(([x,y]) => this.board[x][y].value = 1 );
        return this.board;
    }


    recordedAttack( [x,y], 
                    callback1=(value)=>this.recordedCoord(value),
                    callback2=(value)=>this.recordedMissedCoord(value),
                        ){             
        if(!(0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.checkCoordinates)([x,y]) || this.arrayAllAttack.has([x,y.toLowerCase()].toString()) ){
            return null;
        }else{
            let [boardX,boardY] = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.shiftCoordinates)([x,y]);
            
            switch(this.board[boardX][boardY].value === 0){
                case true:
                callback1([x,y]);
                callback2([x,y]);
                this.board[boardX][boardY].value = 2;
                return this.board;
                default:
                    switch(this.board[boardX][boardY].value === 1){
                        case true:{
                        callback1([x,y]);
                        this.board[boardX][boardY].value = 5;
                        let ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(1);
                        for (let i = 0; i< this.allShips.length; ++i){
                            
                            if(this.allShips[i]['coordinates'].includes([x,y].toString())===true){ 
                                ship = this.allShips[i]['shipDetails'];
                                ship.hit();
                                this.allShips[i]['shipDetails'] = ship;
                            };
                        }
                        return this.board;
                        }
                    }
                }
        }
    }

    recordedCoord( data, set=this.arrayAllAttack){
        set.add(data.toString());
        return set;
     }

     recordedMissedCoord( data, set=this.arrayMissed){
        set.add(data.toString());
        return set;
     } 

    getTotalSunk(){
    
        let  totalSunk = this.allShips.reduce((total, currentItem) => {
                        return currentItem['shipDetails'].beenSunk===true ? total + 1 : total;
                         }, 0)
        return totalSunk;
    }


    getSnapshot(){
        let message = '';
        let totalSunk = this.getTotalSunk();

        if(totalSunk===this.allShips.length){
            message = `All ships have been sunk`;
            return message;
        }else{
            message = `Ships that have been sunk: ${totalSunk} - Ships afloat: ${this.allShips.length-totalSunk}`;
            return message;
        } 
    }

    initializeBoard(){
        for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.rows; i++) {
        for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.columns; j++) {
            this.board[i][j].value = 0;
            }
        };
        return this.board;
    }




      


}



/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/components/gameboard.js");

// a class Player
class Player {

    constructor(value){ 
        this.type = value;
        this.gameboard = this.createGameboard();
    }

    createGameboard(){
        return new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    }

}



/***/ }),

/***/ "./src/components/random-ships.js":
/*!****************************************!*\
  !*** ./src/components/random-ships.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   randomCoordinates: () => (/* binding */ randomCoordinates),
/* harmony export */   randomShips: () => (/* binding */ randomShips)
/* harmony export */ });
/* harmony import */ var _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliary-functions */ "./src/components/auxiliary-functions.js");


function randomShips(arg1,arg2){
    /* arg1 is the playerGameboard arg2 is the array with length*/
   
   const shipLength=arg2;
   const arrayDirection = ['left-to-right','top-to-down'];
   const totalCells = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.allCoordinatesPosibles)();
   

   for ( let i=0; i < shipLength.length; ++i){
    let ship = null; 

    while(ship===null){
    let number = randomIntFromInterval(1,totalCells.length);
    let coord =  totalCells[number-1].split(',');
    coord = [Number(coord[0]),coord[1]];
    let direction = arrayDirection[randomIntFromInterval(1,2)-1];
    ship = arg1.dataShips(coord,direction,shipLength[i],i+1);
    }
    arg1.placeShipsInTheBoard( ship );

   }

return arg1;

}

function randomCoordinates(){
  const totalCells = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.allCoordinatesPosibles)();
  let number = randomIntFromInterval(1,totalCells.length);
    let coord =  totalCells[number-1].split(',');
    coord = [Number(coord[0]),coord[1]];
  return coord;
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }



/***/ }),

/***/ "./src/components/score-board.js":
/*!***************************************!*\
  !*** ./src/components/score-board.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scoreBoard: () => (/* binding */ scoreBoard)
/* harmony export */ });
function scoreBoard(arg1,arg2,arg3){
    /* arg1 is the board div, arg2 is the human player object, arg3 is the computer player object */

const gameContainer = arg1.parentElement;
const playerHuman = arg2;
const playerComputer = arg3;
const scoreBoardDiv = document.createElement('aside');
const humanScore = document.createElement('div');
const computerScore = document.createElement('div');

scoreBoardDiv.classList.add('scoreBoard');
humanScore.setAttribute('style','grid-row: 1/2;');
humanScore.setAttribute('id','human-score');
humanScore.classList.add('score');
computerScore.setAttribute('style','grid-row: 2/3;');
computerScore.setAttribute('id','computer-score');
computerScore.classList.add('score');

const humanTitle = document.createElement('p');
humanTitle.textContent = 'COMPUTER attacks';  /* in the human board */
humanTitle.setAttribute('style','grid-row:1/2;grid-column:1/3;background-color:lightyellow;');
humanTitle.classList.add('scoreTitle');

const success = document.createElement('p');
success.setAttribute('style','grid-row:2/3;grid-column:1/3;color:#09c3c1;background-color:lightyellow;font-weight:bold;');
let rate = 0; /* inicia en 0 */
success.textContent = `success rate: ${rate}%`; 

const imgH1 = document.createElement('picture');
const hitsH1 = document.createElement('p');
imgH1.setAttribute('style','grid-row:3/4;grid-column:1/2;');
imgH1.classList.add('shipFloat');
hitsH1.setAttribute('style','grid-row:3/4;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsH1.innerText = `HITS: ${playerHuman['gameboard']['allShips'][0]['shipDetails']['numberOfHits']} 
                    OF ${playerHuman['gameboard']['allShips'][0]['shipDetails']['length']}`;

const imgH2 = document.createElement('picture');
const hitsH2 = document.createElement('p');
imgH2.setAttribute('style','grid-row:4/5;grid-column:1/2;');
imgH2.classList.add('shipFloat');
hitsH2.setAttribute('style','grid-row:4/5;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsH2.innerText = `HITS: ${playerHuman['gameboard']['allShips'][1]['shipDetails']['numberOfHits']} 
                    OF ${playerHuman['gameboard']['allShips'][1]['shipDetails']['length']}`;

const imgH3 = document.createElement('picture');
const hitsH3 = document.createElement('p');
imgH3.setAttribute('style','grid-row:5/6;grid-column:1/2;');
imgH3.classList.add('shipFloat');
hitsH3.setAttribute('style','grid-row:5/6;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsH3.innerText = `HITS: ${playerHuman['gameboard']['allShips'][2]['shipDetails']['numberOfHits']} 
                    OF ${playerHuman['gameboard']['allShips'][2]['shipDetails']['length']}`;

const imgH4 = document.createElement('picture');
const hitsH4 = document.createElement('p');
imgH4.setAttribute('style','grid-row:6/7;grid-column:1/2;');
imgH4.classList.add('shipFloat');
hitsH4.setAttribute('style','grid-row:6/7;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsH4.innerText = `HITS: ${playerHuman['gameboard']['allShips'][3]['shipDetails']['numberOfHits']} 
                    OF ${playerHuman['gameboard']['allShips'][3]['shipDetails']['length']}`;

const imgH5 = document.createElement('picture');
const hitsH5 = document.createElement('p');
imgH5.setAttribute('style','grid-row:7/8;grid-column:1/2;');
imgH5.classList.add('shipFloat');
hitsH5.setAttribute('style','grid-row:7/8;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsH5.innerText = `HITS: ${playerHuman['gameboard']['allShips'][4]['shipDetails']['numberOfHits']} 
                    OF ${playerHuman['gameboard']['allShips'][4]['shipDetails']['length']}`;

const imgH6 = document.createElement('picture');
const hitsH6 = document.createElement('p');
imgH6.setAttribute('style','grid-row:8/9;grid-column:1/2;');
imgH6.classList.add('shipFloat');
hitsH6.setAttribute('style','grid-row:8/9;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsH6.innerText = `HITS: ${playerHuman['gameboard']['allShips'][5]['shipDetails']['numberOfHits']} 
                    OF ${playerHuman['gameboard']['allShips'][5]['shipDetails']['length']}`;



const computerTitle = document.createElement('p');
computerTitle.textContent = 'HUMAN attacks';  /* in the board computer */
computerTitle.setAttribute('style','grid-row:1/2;grid-column:1/3;background-color:lightyellow;');
computerTitle.classList.add('scoreTitle');

const successComp = document.createElement('p');
successComp.setAttribute('style','grid-row:2/3;grid-column:1/3;color:#09c3c1;background-color:lightyellow;font-weight:bold;');
let rateComp = 0; /* inicia en 0 */
successComp.textContent = `success rate: ${rateComp}%`; 

const imgC1 = document.createElement('picture');
const hitsC1 = document.createElement('p');
imgC1.setAttribute('style','grid-row:3/4;grid-column:1/2;');
imgC1.classList.add('shipFloat');
hitsC1.setAttribute('style','grid-row:3/4;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsC1.innerText = `HITS: ${playerComputer['gameboard']['allShips'][0]['shipDetails']['numberOfHits']} 
                    OF ${playerComputer['gameboard']['allShips'][0]['shipDetails']['length']}`;

const imgC2 = document.createElement('picture');
const hitsC2 = document.createElement('p');
imgC2.setAttribute('style','grid-row:4/5;grid-column:1/2;');
imgC2.classList.add('shipFloat');
hitsC2.setAttribute('style','grid-row:4/5;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsC2.innerText = `HITS: ${playerComputer['gameboard']['allShips'][1]['shipDetails']['numberOfHits']} 
                    OF ${playerComputer['gameboard']['allShips'][1]['shipDetails']['length']}`;

const imgC3 = document.createElement('picture');
const hitsC3 = document.createElement('p');
imgC3.setAttribute('style','grid-row:5/6;grid-column:1/2;');
imgC3.classList.add('shipFloat');
hitsC3.setAttribute('style','grid-row:5/6;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsC3.innerText = `HITS: ${playerComputer['gameboard']['allShips'][2]['shipDetails']['numberOfHits']} 
                    OF ${playerComputer['gameboard']['allShips'][2]['shipDetails']['length']}`;

const imgC4 = document.createElement('picture');
const hitsC4 = document.createElement('p');
imgC4.setAttribute('style','grid-row:6/7;grid-column:1/2;');
imgC4.classList.add('shipFloat');
hitsC4.setAttribute('style','grid-row:6/7;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsC4.innerText = `HITS: ${playerComputer['gameboard']['allShips'][3]['shipDetails']['numberOfHits']} 
                    OF ${playerComputer['gameboard']['allShips'][3]['shipDetails']['length']}`;

const imgC5 = document.createElement('picture');
const hitsC5 = document.createElement('p');
imgC5.setAttribute('style','grid-row:7/8;grid-column:1/2;');
imgC5.classList.add('shipFloat');
hitsC5.setAttribute('style','grid-row:7/8;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsC5.innerText = `HITS: ${playerComputer['gameboard']['allShips'][4]['shipDetails']['numberOfHits']} 
                    OF ${playerComputer['gameboard']['allShips'][4]['shipDetails']['length']}`;

const imgC6 = document.createElement('picture');
const hitsC6 = document.createElement('p');
imgC6.setAttribute('style','grid-row:8/9;grid-column:1/2;');
imgC6.classList.add('shipFloat');
hitsC6.setAttribute('style','grid-row:8/9;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;');
hitsC6.innerText = `HITS: ${playerComputer['gameboard']['allShips'][5]['shipDetails']['numberOfHits']} 
                    OF ${playerComputer['gameboard']['allShips'][5]['shipDetails']['length']}`;

gameContainer.appendChild(scoreBoardDiv);
scoreBoardDiv.appendChild(humanScore);
scoreBoardDiv.appendChild(computerScore);
humanScore.appendChild(humanTitle);
humanScore.appendChild(success);
humanScore.appendChild(imgH1);
humanScore.appendChild(hitsH1);
humanScore.appendChild(imgH2);
humanScore.appendChild(hitsH2);
humanScore.appendChild(imgH3);
humanScore.appendChild(hitsH3);
humanScore.appendChild(imgH4);
humanScore.appendChild(hitsH4);
humanScore.appendChild(imgH5);
humanScore.appendChild(hitsH5);
humanScore.appendChild(imgH6);
humanScore.appendChild(hitsH6);
computerScore.appendChild(computerTitle);
computerScore.appendChild(successComp);
computerScore.appendChild(imgC1);
computerScore.appendChild(hitsC1);
computerScore.appendChild(imgC2);
computerScore.appendChild(hitsC2);
computerScore.appendChild(imgC3);
computerScore.appendChild(hitsC3);
computerScore.appendChild(imgC4);
computerScore.appendChild(hitsC4);
computerScore.appendChild(imgC5);
computerScore.appendChild(hitsC5);
computerScore.appendChild(imgC6);
computerScore.appendChild(hitsC6);


}



/***/ }),

/***/ "./src/components/screen-controller.js":
/*!*********************************************!*\
  !*** ./src/components/screen-controller.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   screenController: () => (/* binding */ screenController)
/* harmony export */ });
/* harmony import */ var _game_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-controller */ "./src/components/game-controller.js");
/* harmony import */ var _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auxiliary-functions */ "./src/components/auxiliary-functions.js");
/* harmony import */ var _create_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-container */ "./src/components/create-container.js");
/* harmony import */ var _add_ships__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-ships */ "./src/components/add-ships.js");
/* harmony import */ var _random_ships__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./random-ships */ "./src/components/random-ships.js");
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update */ "./src/components/update.js");
/* harmony import */ var _update_computer_board__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./update-computer-board */ "./src/components/update-computer-board.js");
/* harmony import */ var _adjacent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./adjacent */ "./src/components/adjacent.js");
/* harmony import */ var _update_score__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-score */ "./src/components/update-score.js");










function screenController(arg) {
  /* arg is the game container */

  const game = (0,_game_controller__WEBPACK_IMPORTED_MODULE_0__.gameController)();
  const totalCells = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.allCoordinatesPosibles)(); // for the computer's attack purpose
  let arrayAdjacent = []; // for the computer's attack purpose

  const gameContainer = arg;
  const turn = document.createElement("div");
  const turnDiv = document.createElement("div");
  const waitTurn = document.createElement("div");
  const boardDiv = document.createElement("div");
  const result = document.createElement("div");
  const humanBoard = document.createElement("div");
  const computerBoard = document.createElement("div");
  const resetButton = document.createElement("button");

  gameContainer.classList.add("container");
  turn.classList.add("turn");
  turn.setAttribute("tabindex", 0);
  turnDiv.classList.add("turnDiv");
  boardDiv.classList.add("board");
  result.classList.add("result");
  humanBoard.classList.add("board-human");
  humanBoard.setAttribute("tabindex", 0);
  computerBoard.classList.add("hide");
  resetButton.setAttribute("style", "grid-row:3/4; grid-column:1/2");
  resetButton.classList.add("resetButton");
  resetButton.textContent = "RESET for NEW GAME";

  const initialScreen = () => {
    // clear the board
    boardDiv.textContent = "";

    const activePlayer = game.getActivePlayer();
    const playerComputer = game.getComputerPlayer();

    // Display player's turn
    turnDiv.textContent = `${activePlayer.type}'s turn...`;

    for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.rows; i++) {
      for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.columns; j++) {
        // Anything clickable should be a button!!
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        cellButton.setAttribute("tabindex", -1);
        // Create a data attribute to identify the column
        cellButton.dataset.row = i;
        cellButton.dataset.column = j;
        humanBoard.appendChild(cellButton);
      }
    }

    for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.rows; i++) {
      for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.columns; j++) {
        // Anything clickable should be a button!!
        const cellButton = document.createElement("button");
        cellButton.classList.add("cell");
        // Create a data attribute to identify the column
        cellButton.dataset.row = i;
        cellButton.dataset.column = j;
        computerBoard.appendChild(cellButton);
      }
    }
    // create a button for add ships and function
    addingShips(turn, playerComputer);
  };
  initialScreen();

  const updateScreen = () => {
    // get the newest version of the board and player turn
    const boardReal = game.boardReal();
    const boardComputer = game.boardComputer();
    const playerHuman = game.getHumanPlayer();
    const playerComputer = game.getComputerPlayer();

    (0,_update__WEBPACK_IMPORTED_MODULE_5__.updateCells)(humanBoard, boardReal, playerHuman);
    (0,_update_computer_board__WEBPACK_IMPORTED_MODULE_6__.updateCellsComputerBoard)(computerBoard, boardComputer, playerComputer);
    (0,_update_score__WEBPACK_IMPORTED_MODULE_8__.updateScore)(playerHuman, playerComputer);

    const activePlayer = game.getActivePlayer();
    // Display player's turn
    turnDiv.textContent = `${activePlayer.type}'s turn...`;
    // check and attacks is there no winner
    let isThereAWinner = game.isThereAWinner();
    switch (isThereAWinner === false) {
      case true:
        if (activePlayer.type === "COMPUTER Player") {
          addDiv(boardDiv);
          setTimeout(computerAttack, 4000);
        }
        // if active player is Human need wait for a click
        break;
      default:
        // game over - disable event listener
        computerBoard.removeEventListener("click", clickHandlerBoard);
        break;
    }
  };

  // add a add-ships Button and the eventlistener
  function addingShips(turn, playerComputer) {
    const addShipsDiv = document.createElement("div");
    const addShipsButton = document.createElement("button");
    addShipsDiv.className = "";
    addShipsDiv.setAttribute("id", "addShipsDiv");
    addShipsDiv.classList.add("addships");
    addShipsButton.classList.add("addShipButton");
    addShipsButton.textContent = "ADD SHIPS";

    addShipsButton.addEventListener("click", () => {
      (0,_create_container__WEBPACK_IMPORTED_MODULE_2__.createContainers)(turn);
    });

    addShipsButton.addEventListener("click", () => {
      (0,_add_ships__WEBPACK_IMPORTED_MODULE_3__.addShips)(game, humanBoard, boardDiv, turn, computerBoard, playerComputer);
      addShipsDiv.classList.remove("addships");
      addShipsDiv.classList.add("hide");
    });

    turn.appendChild(addShipsDiv);
    addShipsDiv.appendChild(addShipsButton);
  }

  // Add event listener for the board computer for Human attacks
  function clickHandlerBoard(e) {
    switch (game.getActivePlayer().type === "HUMAN Player") {
      case true: {
        const selectedRow = e.target.dataset.row;
        const selectedColumn = e.target.dataset.column;
        // Make sure I've clicked a column and not the gaps in between
        if (!selectedRow) return;
        game.playRound(Number(selectedRow), Number(selectedColumn));
        getMessage(activeMessage);
        updateScreen();
        break;
      }
      case false:
        waitTurn.textContent = "wait your turn".toUpperCase();
        waitTurn.classList.add("display");
        waitTurn.classList.add("waitTurn");
        setTimeout(() => {
          waitTurn.textContent = "";
          waitTurn.classList.remove("display");
          waitTurn.classList.remove("waitTurn");
        }, 800);
        break;
    }
  }
  computerBoard.addEventListener("click", clickHandlerBoard);

  // Add a message to avoid click in human board
  function noFireToFriend() {
    waitTurn.textContent = "BE CAREFUL. don't shoot your allies".toUpperCase();
    waitTurn.classList.add("display");
    waitTurn.classList.add("noFire");
    setTimeout(() => {
      waitTurn.textContent = "";
      waitTurn.classList.remove("display");
      waitTurn.classList.remove("noFire");
    }, 800);
  }
  humanBoard.addEventListener("click", noFireToFriend);

  // this attack's function consider adjacents when got a hit
  function computerAttack() {
    let check = true;
    let adj = 0;
    let coord = [];
    let arrayAllAttack = game.getHumanPlayer().gameboard["arrayAllAttack"];
    while (check === true) {
      if (arrayAdjacent.length !== 0) {
        adj = arrayAdjacent.shift();
        coord = totalCells.at(adj).split(",");
        coord = [Number(coord[0]), coord[1]];
      } else {
        coord = (0,_random_ships__WEBPACK_IMPORTED_MODULE_4__.randomCoordinates)();
        adj = totalCells.indexOf(coord.toString());
      }
      check = arrayAllAttack.has(coord.toString());
    }
    let cell = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.fromCoordinatestoCell)(coord);
    game.playRoundComputer(cell[0], cell[1]);
    // if got a hit look for adjacents
    let boardReal = game.boardReal();
    if (boardReal[cell[0]][cell[1]].value === 5) {
      let arrayTemp = _adjacent__WEBPACK_IMPORTED_MODULE_7__.adjacent.get(adj);
      arrayTemp.map((x) => arrayAdjacent.push(x));
      if (arrayAdjacent === undefined) {
        arrayAdjacent = [];
      }
    }
    getMessage(activeMessage);
    updateScreen();
  }

  // add a result game
  const resultGameDiv = document.createElement("div");
  resultGameDiv.classList.add("resultMessage");
  const activeMessage = game.getGameMessage();
  const getMessage = (activeMessage) => {
    activeMessage = game.getGameMessage();
    resultGameDiv.textContent = activeMessage;
  };
  result.appendChild(resultGameDiv);

  // add a div with count down for computer attack and remove it
  function addDiv(arg) {
    const attackMessage = document.createElement("div");
    attackMessage.setAttribute("id", "attackMessage");
    attackMessage.classList.add("attackMessage");
    let text = document.createElement("p");
    text.setAttribute("id", "text");
    text.setAttribute("style", "color:lightyellow;");
    text.innerText = "The computer will attack on ".toUpperCase();
    let text1 = document.createElement("p");
    text1.setAttribute("id", "count");
    text1.setAttribute("style", "font-size:1.1rem; color:red;");
    let number = 4;
    attackMessage.appendChild(text);
    attackMessage.appendChild(text1);
    let id = setInterval(count, 1000);
    function count() {
      number = number - 1;
      document.getElementById("count").innerText = ` => ${number}`;
      if (number <= 0) {
        clearInterval(id);
        document.getElementById("text").innerText = "";
        document.getElementById("count").innerText = "DONE";
        setTimeout(removeDiv, 1000);
      }
    }
    arg.appendChild(attackMessage);
  }
  // remove the count down message div
  function removeDiv() {
    const div = document.getElementById("attackMessage");
    div.remove();
  }

  // eventlistener for reset
  resetButton.addEventListener("click", newDoc);

  function newDoc() {
    window.location.reload();
  }

  gameContainer.appendChild(turn);
  gameContainer.appendChild(boardDiv);
  gameContainer.appendChild(resetButton);
  turn.appendChild(turnDiv);
  turn.appendChild(result);

  boardDiv.appendChild(humanBoard);
  boardDiv.appendChild(computerBoard);

  gameContainer.appendChild(waitTurn);
}




/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
// a class Ship 
class Ship {
    constructor(value){   
        this.length = value;            
        this.numberOfHits = 0;
        this.beenSunk = false; 
      }

      hit(hits=this.numberOfHits){
        this.numberOfHits = hits + 1 ;
        this.beenSunk = this.isSunk();
        return this.numberOfHits;
      }

      isSunk(hits=this.numberOfHits){
        switch(hits===this.length){
            case true:
                this.beenSunk = true;
                return this.beenSunk;
            default:
                return this.beenSunk;
        }
      }

}




/***/ }),

/***/ "./src/components/show-error.js":
/*!**************************************!*\
  !*** ./src/components/show-error.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showError: () => (/* binding */ showError)
/* harmony export */ });
function showError(arg1,arg2){
// arg1 is the div - arg2 is the message for the type of error
      let id = arg1.getAttribute('id');
       
       const inputError = document.createElement('p');
       inputError.classList.add('error');
       inputError.classList.add('active');
       inputError.setAttribute('id',`${id}error`);
       inputError.setAttribute( 'aria-live','polite');
       inputError.textContent = arg2;
    
       const parentElement = arg1.parentNode;
       parentElement.appendChild(inputError);  

}



/***/ }),

/***/ "./src/components/update-computer-board.js":
/*!*************************************************!*\
  !*** ./src/components/update-computer-board.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reinitializeFormatCellsCompBoard: () => (/* binding */ reinitializeFormatCellsCompBoard),
/* harmony export */   updateCellsComputerBoard: () => (/* binding */ updateCellsComputerBoard)
/* harmony export */ });
/* harmony import */ var _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliary-functions */ "./src/components/auxiliary-functions.js");


function updateCellsComputerBoard(arg1,arg2,arg3){
   
    let boardDiv = arg1;
    let boardContent = arg2;
    let arrayCells = boardDiv.querySelectorAll("button");

    const cellsinBoard = [...arrayCells];
    const iterator = cellsinBoard.entries();
    
    cellsinBoard.forEach(() => {
      let index = iterator.next().value;
                                /* (index[0]) (index[1]) para leer el node dentro del nodeList */
      let x = index[1];         
        switch(boardContent[x.dataset.row][x.dataset.column].value===1){
            case true:
                x.className='';
                x.classList.add('cell');
                x.textContent = ''; 
                break;
            default:
                switch(boardContent[x.dataset.row][x.dataset.column].value===0){
                    case true:
                      x.className='';
                      x.classList.add('cell');
                      x.textContent = '';
                      break;
                    default:
                        switch(boardContent[x.dataset.row][x.dataset.column].value===2){
                            case true:
                            x.className='';
                            x.classList.add('cellMissed');
                            x.textContent = `water`;
                            break;
                            default:
                                switch(boardContent[x.dataset.row][x.dataset.column].value===5){
                                case true:
                                x.className='';
                                x.classList.add('cellHit');
                                x.textContent = `HIT`;
                                break;
                                default:
                            }
                        }         
                    }
                }
        
    });

let arrayShips = [];
    if(arg3 !== undefined){
        arrayShips = arg3['gameboard']['allShips'];
    }

let coordShipsSunk = [];

arrayShips.forEach((element) => {
    switch(element['shipDetails']['beenSunk']){
        case true:
            element['coordinates'].forEach( (x) => {
                coordShipsSunk.push(x);
            })
            break;
        case false:
            break;
    }
});

let arrayIndexNodeAndCoord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.relationCoordVsNodeList)();
let indexesSunks = [];
coordShipsSunk.forEach((element)=>{
    arrayIndexNodeAndCoord.forEach((x)=>{
        if(x[1][0]===element){
            indexesSunks.push(x[0]);
        }
    })
})

indexesSunks.forEach((element)=>{
   let cell = cellsinBoard[element];
   cell.classList.add('cellSunk');
   cell.textContent = 'SUNK';
})

}

function reinitializeFormatCellsCompBoard(arg){
/* arg is the div with the button cells */
let boardDiv = arg;
let arrayCells = boardDiv.querySelectorAll("button");
const cellsinBoard = [...arrayCells];
const iterator = cellsinBoard.entries();

cellsinBoard.forEach(() => {
  let index = iterator.next().value;
                            /* (index[0]) (index[1]);  */
  let x = index[1];         
  x.className = '';       // to clear previous class
  x.classList.add('cell');
  x.textContent = '';
})
} 




/***/ }),

/***/ "./src/components/update-score.js":
/*!****************************************!*\
  !*** ./src/components/update-score.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateScore: () => (/* binding */ updateScore)
/* harmony export */ });
function updateScore(arg1,arg2){
 /* arg1 is the playerHuman  arg2 is the playerComputer */
const playerHuman= arg1;
const playerComputer= arg2;

// update the human score
const humanScore = document.getElementById('human-score');
const pHumanScore = humanScore.querySelectorAll('picture');
const tHumanScore = humanScore.querySelectorAll('p');

const picturesInHumanScore = [...pHumanScore];
const iteratorP = picturesInHumanScore.entries();

const textInHumanScore = [...tHumanScore];
const iteratorT = textInHumanScore.entries();

picturesInHumanScore.forEach(() => {
    let index = iteratorP.next().value;
                              /* (index[0]) (index[1]);  */
    let x = index[1]; 
    let sunk = playerHuman['gameboard']['allShips'][index[0]]['shipDetails']['beenSunk'];
    switch(sunk===true){
        case true:
            x.className='';
            x.classList.add('shipSunk');
            break;
    }
})

textInHumanScore.forEach(() => {
    let index = iteratorT.next().value;
    let x = index[1];
    switch (index[0]===1) {
        case true:{
            if (playerHuman['gameboard']['arrayAllAttack'].size > 0){
                let rate = Math.trunc((playerHuman['gameboard']['arrayAllAttack'].size
                     - playerHuman['gameboard']['arrayMissed'].size)
                     /playerHuman['gameboard']['arrayAllAttack'].size*100);
                x.textContent = `success rate: ${rate}%`;
            }
            break;
        }
    }
    switch (index[0] > 1){
        case true:
            x.textContent = `HITS: ${playerHuman['gameboard']['allShips'][index[0]-2]['shipDetails']['numberOfHits']} 
            OF ${playerHuman['gameboard']['allShips'][index[0]-2]['shipDetails']['length']}`;
        break;
    }
})

// update the computer score

const computerScore = document.getElementById('computer-score');
const pComputerScore = computerScore.querySelectorAll('picture');
const tComputerScore = computerScore.querySelectorAll('p');

const picturesInComputerScore = [...pComputerScore];
const iteratorCP = picturesInComputerScore.entries();

const textInComputerScore = [...tComputerScore];
const iteratorCT = textInComputerScore.entries();

picturesInComputerScore.forEach(() => {
    let index = iteratorCP.next().value;
                        /* (index[0]) (index[1]);  */
    let x = index[1]; 
    let sunk = playerComputer['gameboard']['allShips'][index[0]]['shipDetails']['beenSunk'];
    switch(sunk===true){
        case true:
        x.className='';
        x.classList.add('shipSunk');
        break;
        }
})

textInComputerScore.forEach(() => {
    let index = iteratorCT.next().value;
    let x = index[1];
    switch (index[0]===1) {
        case true:{
            if (playerComputer['gameboard']['arrayAllAttack'].size > 0){
                let rate = Math.trunc((playerComputer['gameboard']['arrayAllAttack'].size
                     - playerComputer['gameboard']['arrayMissed'].size)
                     /playerComputer['gameboard']['arrayAllAttack'].size*100);
                x.textContent = `success rate: ${rate}%`;
            }
            break;
        }
    }
    switch (index[0] > 1){
        case true:
            x.textContent = `HITS: ${playerComputer['gameboard']['allShips'][index[0]-2]['shipDetails']['numberOfHits']} 
            OF ${playerComputer['gameboard']['allShips'][index[0]-2]['shipDetails']['length']}`;
        break;
    }
})

}



/***/ }),

/***/ "./src/components/update.js":
/*!**********************************!*\
  !*** ./src/components/update.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reinitializeFormatCells: () => (/* binding */ reinitializeFormatCells),
/* harmony export */   updateCells: () => (/* binding */ updateCells)
/* harmony export */ });
/* harmony import */ var _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxiliary-functions */ "./src/components/auxiliary-functions.js");


function updateCells(arg1,arg2,arg3){

    let boardDiv = arg1;
    let boardContent = arg2;
    let arrayCells = boardDiv.querySelectorAll("button");

    const cellsinBoard = [...arrayCells];
    const iterator = cellsinBoard.entries();
    
    cellsinBoard.forEach(() => {
      let index = iterator.next().value;
                                /* (index[0]) (index[1]);  */
      let x = index[1];         /* para leer el node dentro del nodeList */
      
        switch(boardContent[x.dataset.row][x.dataset.column].value===1){   
            case true:
                x.className='';
                x.classList.add('cellShipAdded');
                x.textContent = `SHIP`;
                break;
            default:
                switch(boardContent[x.dataset.row][x.dataset.column].value===0){
                    case true:
                      x.className='';
                      x.classList.add('cell');
                      x.textContent = '';
                      break;
                    default:
                        switch(boardContent[x.dataset.row][x.dataset.column].value===2){
                            case true:
                            x.className='';
                            x.classList.add('cellMissed');
                            x.textContent = `water`;
                            break;
                            default:
                                switch(boardContent[x.dataset.row][x.dataset.column].value===5){
                                case true:
                                x.className='';
                                x.classList.add('cellHit');
                                x.textContent = `HIT`;
                                break;    
                                default:
                            }
                        }      
                    }
                }
        
    });

    let arrayShips = [];
    if(arg3 !== undefined){
        arrayShips = arg3['gameboard']['allShips'];
    }

let coordShipsSunk = [];

arrayShips.forEach((element) => {
    switch(element['shipDetails']['beenSunk']){
        case true:
            element['coordinates'].forEach( (x) => {
                coordShipsSunk.push(x);
            })
            break;
        case false:
            break;
    }
});

let arrayIndexNodeAndCoord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.relationCoordVsNodeList)();
let indexesSunks = [];
coordShipsSunk.forEach((element)=>{
    arrayIndexNodeAndCoord.forEach((x)=>{
        if(x[1][0]===element){
            indexesSunks.push(x[0]);
        }
    })
})

indexesSunks.forEach((element)=>{
   console.log(cellsinBoard[element]);
   let cell = cellsinBoard[element];
   cell.classList.add('cellSunk');
   cell.textContent = 'SUNK';
})

}

function reinitializeFormatCells(arg){
 /* arg is the div with the button cells */
 let boardDiv = arg;
 let arrayCells = boardDiv.querySelectorAll("button");
 const cellsinBoard = [...arrayCells];
 const iterator = cellsinBoard.entries();
 
 cellsinBoard.forEach(() => {
   let index = iterator.next().value;
                             /* (index[0]) (index[1]);  */
   let x = index[1];         
   x.className = '';       // to clear previous class
   x.classList.add('cell');
   x.textContent = '';
 })
} 




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-reset.css */ "./src/style-reset.css");
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-base.css */ "./src/style-base.css");
/* harmony import */ var _style_mobile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-mobile.css */ "./src/style-mobile.css");
/* harmony import */ var _style_tablet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-tablet.css */ "./src/style-tablet.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_screen_controller_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/screen-controller.js */ "./src/components/screen-controller.js");










function component() { 
    
    const gameContainer = document.createElement('main');
    gameContainer.setAttribute('id','container');
    (0,_components_screen_controller_js__WEBPACK_IMPORTED_MODULE_5__.screenController)(gameContainer);

   
    return gameContainer;
  }
  
document.body.appendChild(component());

/***/ }),

/***/ "./src/img/ship-sunk.jpg":
/*!*******************************!*\
  !*** ./src/img/ship-sunk.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b51579f3c9764e177ae.jpg";

/***/ }),

/***/ "./src/img/ship.jpg":
/*!**************************!*\
  !*** ./src/img/ship.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0d8b0533c8807a7a82e.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0Qyx5R0FBaUM7QUFDN0UsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0Esb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRGQUE0RixNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGNBQWMsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssc0JBQXNCLHlCQUF5QixXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssc0JBQXNCLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLHNCQUFzQixXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLHdCQUF3Qix5QkFBeUIsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLHlCQUF5Qix5QkFBeUIsdUJBQXVCLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCLDZFQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsaUJBQWlCLDBFQUEwRTtBQUMzRjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELEtBQUs7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLGlCQUFpQiw2RUFBNkU7QUFDOUY7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCLDZFQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFHMkI7QUFDRDtBQUNFO0FBQ0E7QUFDUDtBQUNyQjtBQUNBO0FBQ0E7QUFDcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0ZBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS1iYXNlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtbW9iaWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtcmVzZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS10YWJsZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS1iYXNlLmNzcz82NjFkIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS1tb2JpbGUuY3NzP2FmZjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLXJlc2V0LmNzcz84YjU4Iiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS10YWJsZXQuY3NzPzY4NTMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYWRkLXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2FkamFjZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2F1eGlsaWFyeS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGUtZGl2LWVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3JhbmRvbS1zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zY29yZS1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zY3JlZW4tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3Nob3ctZXJyb3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLWNvbXB1dGVyLWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS1zY29yZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9zaGlwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3NoaXAtc3Vuay5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjZWxscyAtIGJ1dHRvbnMgLSBpbWFnZXMqL1xyXG5ib2R5IHtcclxuICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYTQ1O1xyXG59XHJcblxyXG4uY2VsbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jZWxsU2hpcEFkZGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlNzM0O1xyXG4gIGJvcmRlci1jb2xvcjogIzg0ZjM2MztcclxuICBjb2xvcjogIzIwN2QwZTtcclxufVxyXG5cclxuLmNlbGxNaXNzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGYxZTg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZWZmZWZiO1xyXG4gIGNvbG9yOiAjMGI2NDYxO1xyXG59XHJcblxyXG4uY2VsbEhpdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTE3MztcclxuICBib3JkZXItY29sb3I6ICNmZmM4YTk7XHJcbiAgY29sb3I6ICM5YjFiMTE7XHJcbn1cclxuXHJcbi5jZWxsU3VuayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2QzZDNkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuW2NsYXNzXj1cImNlbGxcIl06aG92ZXIge1xyXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAxLjVzIGJvdGg7XHJcbn1cclxuXHJcbltjbGFzc149XCJjZWxsXCJdOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWU3NTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRDZWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICBjb2xvcjogbGlnaHR5ZWxsb3c7XHJcbiAgYmFja2dyb3VuZDogIzM1M2E0NTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIGJ1dHRvbnMgKi9cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgb3BhY2l0eTogMCU7XHJcbn1cclxuXHJcbi5hZGRTaGlwQnV0dG9uIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIHJpZ2h0LFxyXG4gICAgcmdiKDEwNSwgMTE3LCAxNDIpIDAlLFxyXG4gICAgcmdiKDIxNCwgMjE3LCAyMjUpIDEwMCVcclxuICApO1xyXG4gIGJveC1zaGFkb3c6ICNlZGVlZjEgMnB4IDJweCA0cHggMnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmFkZFNoaXBCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1NDVlNzU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuLmFkZFNoaXBCdXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjNDU0ZDVmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnJlc2V0QnV0dG9uIHtcclxuICBjb2xvcjogIzAxMmUzMjtcclxuICBsaW5lLWhlaWdodDogMTNweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcclxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiOWZlZjYgMCUsICMwOWMzYzEgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogI2VkZWVmMSAycHggMnB4IDRweCAycHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzM1Mzk0NTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnJlc2V0QnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTQ1ZTc1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbn1cclxuLnJlc2V0QnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogIzQ1NGQ1ZjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIHNjb3JlIGVsZW1lbnRzICovXHJcblxyXG4uc2NvcmVUaXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICMzYzQzNTA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5zaGlwRmxvYXQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnNoaXBTdW5rIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwOWMzYzE7XHJcbn1cclxuXHJcbi8qIFRoaXMgaXMgdGhlIHN0eWxlIG9mIG91ciBlcnJvciBtZXNzYWdlcyAqL1xyXG4uZXJyb3Ige1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMDtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZXJyb3IuYWN0aXZlIHtcclxuICBwYWRkaW5nOiAwLjNlbTtcclxufVxyXG5cclxuLyogZGlzcGxheSBiYXNlICovXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNmZyIDJmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50dXJuIHtcclxuICBncmlkLXJvdzogMSAvIDI7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xyXG4gIGdyaWQtY29sdW1uOiAyIC8gNDsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMmZyIDNmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbn1cclxuXHJcbi50dXJuRGl2IHtcclxuICBncmlkLWNvbHVtbjogMSAvIDI7IC8qIGdyaWQgdHVybiovXHJcbiAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gIGNvbG9yOiBsaWdodHllbGxvdztcclxufVxyXG5cclxuLnR1cm4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmRpc3BsYXkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5hZGRzaGlwcyB7XHJcbiAgZ3JpZC1jb2x1bW46IDIgLyAzOyAvKiBncmlkIHR1cm4qL1xyXG4gIGdyaWQtcm93OiAxIC8gMjtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbn1cclxuXHJcbi5yYW5kb21zaGlwcyB7XHJcbiAgLyogZ3JpZCB0dXJuKi9cclxuICBncmlkLWNvbHVtbjogMyAvIDQ7XHJcbiAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gIHBhZGRpbmctdG9wOiAxJTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiBsaWdodHllbGxvdztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBnYXA6IDNweDtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgLyogZ3JpZCB0dXJuKi9cclxuICBncmlkLXJvdzogMS8yO1xyXG4gIGdyaWQtY29sdW1uOiA0LzU7XHJcbn1cclxuXHJcbi5yZXN1bHRNZXNzYWdlIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogbGlnaHR5ZWxsb3c7XHJcbn1cclxuXHJcbi5ncmlkRm9yQWRkIHtcclxuICBncmlkLWNvbHVtbi1zdGFydDogNDsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cclxuICBncmlkLXJvdy1zdGFydDogMjsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgd2lkdGg6IDEyMCU7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmZvcm1JbnB1dCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xyXG59XHJcblxyXG4uZm9ybVJhZGlvIHtcclxuICBncmlkLWNvbHVtbjogMS8yO1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcclxuICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5cclxuLnN1Ym1pdEJ1dHRvbiB7XHJcbiAgZ3JpZC1jb2x1bW46IDIvMztcclxuICBncmlkLXJvdzogMS8yO1xyXG59XHJcblxyXG4uYm9hcmQtaHVtYW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogZm9yIGhlYWRlcnMgcHVycG9zZSAqL1xyXG5cclxuICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xyXG4gIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTMsIDFmcik7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgZ2FwOiAycHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI5Yzc7XHJcbn1cclxuXHJcbi5ib2FyZC1jb21wdXRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBncmlkLWNvbHVtbjogNC81OyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xyXG4gIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTMsIDFmcik7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgZ2FwOiAycHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI5Yzc7XHJcbn1cclxuXHJcbi5jb2x1bW5zSGVhZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBpbiByZWxhdGlvbiBwYXJlbnQgYm9hcmQtaHVtYW4qL1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLnJvd3NIZWFkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1odW1hbiovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4uaGVhZENvbXB1dGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1jb21wdXRlciovXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICBjb2xvcjogbGlnaHR5ZWxsb3c7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmF0dGFja01lc3NhZ2Uge1xyXG4gIGdyaWQtcm93OiAxLzI7XHJcbiAgZ3JpZC1jb2x1bW46IDIvMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zY29yZUJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDBweDtcclxuICBtYXgtd2lkdGg6IDExNXB4O1xyXG4gIGhlaWdodDogNTI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWYxO1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y2ZjdmOTtcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZjZmN2Y5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5zY29yZSB7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwgMWZyKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1iYXNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBNEI7QUFD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RUFDbkMsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCOztFQUVsQixnQkFBZ0IsRUFBRSwyQ0FBMkM7RUFDN0QsYUFBYSxFQUFFLDJDQUEyQztFQUMxRCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLGtDQUFrQztFQUN0RCw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSxrQ0FBa0M7RUFDdEQsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQixFQUFFLHFDQUFxQztFQUN6RCw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNlbGxzIC0gYnV0dG9ucyAtIGltYWdlcyovXFxyXFxuYm9keSB7XFxyXFxuICBtaW4td2lkdGg6IDMyMHB4O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2E0NTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFNoaXBBZGRlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlNzM0O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjODRmMzYzO1xcclxcbiAgY29sb3I6ICMyMDdkMGU7XFxyXFxufVxcclxcblxcclxcbi5jZWxsTWlzc2VkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGYxZTg7XFxyXFxuICBib3JkZXItY29sb3I6ICNlZmZlZmI7XFxyXFxuICBjb2xvcjogIzBiNjQ2MTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGxIaXQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTE3MztcXHJcXG4gIGJvcmRlci1jb2xvcjogI2ZmYzhhOTtcXHJcXG4gIGNvbG9yOiAjOWIxYjExO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VsbFN1bmsge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICBib3JkZXItY29sb3I6ICMzZDNkM2Q7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbltjbGFzc149XFxcImNlbGxcXFwiXTpob3ZlciB7XFxyXFxuICBhbmltYXRpb246IG9wYWNpdHkgMS41cyBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5bY2xhc3NePVxcXCJjZWxsXFxcIl06YWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVlNzU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgb3BhY2l0eSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZWFkQ2VsbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xcclxcbiAgYmFja2dyb3VuZDogIzM1M2E0NTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogYnV0dG9ucyAqL1xcclxcbi5oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvcGFjaXR5OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZFNoaXBCdXR0b24ge1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgdG8gcmlnaHQsXFxyXFxuICAgIHJnYigxMDUsIDExNywgMTQyKSAwJSxcXHJcXG4gICAgcmdiKDIxNCwgMjE3LCAyMjUpIDEwMCVcXHJcXG4gICk7XFxyXFxuICBib3gtc2hhZG93OiAjZWRlZWYxIDJweCAycHggNHB4IDJweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5hZGRTaGlwQnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NDVlNzU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbn1cXHJcXG4uYWRkU2hpcEJ1dHRvbjphY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZDogIzQ1NGQ1ZjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2V0QnV0dG9uIHtcXHJcXG4gIGNvbG9yOiAjMDEyZTMyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjlmZWY2IDAlLCAjMDljM2MxIDEwMCUpO1xcclxcbiAgYm94LXNoYWRvdzogI2VkZWVmMSAycHggMnB4IDRweCAycHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjMzUzOTQ1O1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLnJlc2V0QnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICM1NDVlNzU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG59XFxyXFxuLnJlc2V0QnV0dG9uOmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjNDU0ZDVmO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzY29yZSBlbGVtZW50cyAqL1xcclxcblxcclxcbi5zY29yZVRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjM2M0MzUwO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNoaXBGbG9hdCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1nL3NoaXAuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hpcFN1bmsge1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZy9zaGlwLXN1bmsuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwOWMzYzE7XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgaXMgdGhlIHN0eWxlIG9mIG91ciBlcnJvciBtZXNzYWdlcyAqL1xcclxcbi5lcnJvciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3IuYWN0aXZlIHtcXHJcXG4gIHBhZGRpbmc6IDAuM2VtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBkaXNwbGF5IGJhc2UgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDZmciAyZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xcclxcbiAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnR1cm4ge1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDJmciAzZnIgMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxufVxcclxcblxcclxcbi50dXJuRGl2IHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjsgLyogZ3JpZCB0dXJuKi9cXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4udHVybiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHNoaXBzIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyIC8gMzsgLyogZ3JpZCB0dXJuKi9cXHJcXG4gIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gIHBhZGRpbmctdG9wOiAxJTtcXHJcXG59XFxyXFxuXFxyXFxuLnJhbmRvbXNoaXBzIHtcXHJcXG4gIC8qIGdyaWQgdHVybiovXFxyXFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxyXFxuICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGdhcDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0IHtcXHJcXG4gIC8qIGdyaWQgdHVybiovXFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdE1lc3NhZ2Uge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiBsaWdodHllbGxvdztcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRGb3JBZGQge1xcclxcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXFxyXFxuICBncmlkLXJvdy1zdGFydDogMjsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cXHJcXG4gIHBhZGRpbmctbGVmdDogMiU7XFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxuICB3aWR0aDogMTIwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm1JbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybVJhZGlvIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VibWl0QnV0dG9uIHtcXHJcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtaHVtYW4ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBmb3IgaGVhZGVycyBwdXJwb3NlICovXFxyXFxuXFxyXFxuICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcclxcbiAgZ3JpZC1yb3c6IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTMsIDFmcik7XFxyXFxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXHJcXG4gIGdhcDogMnB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbXB1dGVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIGdyaWQtY29sdW1uOiA0LzU7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXFxyXFxuICBncmlkLXJvdzogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMywgMWZyKTtcXHJcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgZ2FwOiAycHg7XFxyXFxuICBwYWRkaW5nOiAycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOWM3O1xcclxcbn1cXHJcXG5cXHJcXG4uY29sdW1uc0hlYWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBpbiByZWxhdGlvbiBwYXJlbnQgYm9hcmQtaHVtYW4qL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93c0hlYWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBpbiByZWxhdGlvbiBwYXJlbnQgYm9hcmQtaHVtYW4qL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkQ29tcHV0ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBpbiByZWxhdGlvbiBwYXJlbnQgYm9hcmQtY29tcHV0ZXIqL1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gIGNvbG9yOiBsaWdodHllbGxvdztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uYXR0YWNrTWVzc2FnZSB7XFxyXFxuICBncmlkLXJvdzogMS8yO1xcclxcbiAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zY29yZUJvYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGluc2V0OiAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDExNXB4O1xcclxcbiAgaGVpZ2h0OiA1MjVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDElO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVmMTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y2ZjdmOTtcXHJcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNmY3Zjk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zY29yZSB7XFxyXFxuICBoZWlnaHQ6IDk1JTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgbWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC50dXJuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAucmVzdWx0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNSU7XHJcbiAgICByaWdodDogNDAlO1xyXG4gIH1cclxuXHJcbiAgLndhaXRUdXJuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gIH1cclxuXHJcbiAgLm5vRmlyZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDEwJTtcclxuICB9XHJcblxyXG4gIC5yZXN1bHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNCUsIC0yMyUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAucmFuZG9tc2hpcHMge1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG5cclxuICAuYm9hcmQge1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgICBncmlkLXJvdzogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNWY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuYm9hcmQtaHVtYW4ge1xyXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDI0OXB4O1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkLWNvbXB1dGVyIHtcclxuICAgIG1heC13aWR0aDogMjIwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNDlweDtcclxuICB9XHJcblxyXG4gIC5zY29yZUJvYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICB3aWR0aDogODNweDtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgfVxyXG5cclxuICAucmVzZXRCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyNXB4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmFkZHNoaXBzIHtcclxuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmF0dGFja01lc3NhZ2Uge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMDBweDtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIFtjbGFzc149XCJjZWxsXCJdIHtcclxuICAgIGZvbnQtc2l6ZTogNHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLmFkZFNoaXBCdXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgdGV4dC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIHBpY3R1cmUge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuZXJyb3IuYWN0aXZlIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLW1vYmlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLE9BQU87SUFDUCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCLEVBQUUsK0NBQStDO0lBQ2pFLGFBQWEsRUFBRSwrQ0FBK0M7SUFDOUQseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudHVybiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJlc3VsdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA1JTtcXHJcXG4gICAgcmlnaHQ6IDQwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53YWl0VHVybiB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA2MCU7XFxyXFxuICAgIGxlZnQ6IDIwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ub0ZpcmUge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMzAlO1xcclxcbiAgICBsZWZ0OiAxMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzdWx0IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0JSwgLTIzJSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmFuZG9tc2hpcHMge1xcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcclxcbiAgICBncmlkLXJvdzogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm9hcmQtaHVtYW4ge1xcclxcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAyNDlweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZC1jb21wdXRlciB7XFxyXFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDI0OXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlQm9hcmQge1xcclxcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xcclxcbiAgICB3aWR0aDogODNweDtcXHJcXG4gICAgaGVpZ2h0OiA4MDBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXNldEJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZHNoaXBzIHtcXHJcXG4gICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm9hcmQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmF0dGFja01lc3NhZ2Uge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMzAwcHg7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBbY2xhc3NePVxcXCJjZWxsXFxcIl0ge1xcclxcbiAgICBmb250LXNpemU6IDRweDtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZFNoaXBCdXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XFxyXFxuICAgIHdpZHRoOiA3MHB4O1xcclxcbiAgICBoZWlnaHQ6IDg1cHg7XFxyXFxuICAgIHRleHQtd3JhcDogd3JhcDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHBpY3R1cmUge1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lcnJvci5hY3RpdmUge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXHJcbiAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcclxuICAgdjIuMCB8IDIwMTEwMTI2XHJcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXHJcbiovXHJcblxyXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxyXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXHJcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbmIsIHUsIGksIGNlbnRlcixcclxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcclxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxyXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXHJcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXHJcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxyXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8sIGlucHV0IHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Zm9udC1zaXplOiAxMDAlO1xyXG5cdGZvbnQ6IGluaGVyaXQ7XHJcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuYm9keSB7XHJcblx0bGluZS1oZWlnaHQ6IDE7XHJcbn1cclxub2wsIHVsIHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGUsIHEge1xyXG5cdHF1b3Rlczogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxucTpiZWZvcmUsIHE6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdGNvbnRlbnQ6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi8qIGVuZCBvZiByZXNldCBvZiBzdHlsZSBicm93c2VyICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUtcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Q0FDQzs7O0NBR0E7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLGtDQUFrQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXHJcXG4gLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxyXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxyXFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXHJcXG4qL1xcclxcblxcclxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXHJcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxyXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcclxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXHJcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcclxcbmIsIHUsIGksIGNlbnRlcixcXHJcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcclxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcclxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcclxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXHJcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcclxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcclxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbywgaW5wdXQge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxub2wsIHVsIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlLCBxIHtcXHJcXG5cXHRxdW90ZXM6IG5vbmU7XFxyXFxufVxcclxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcclxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXHJcXG5cXHRjb250ZW50OiAnJztcXHJcXG5cXHRjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG50YWJsZSB7XFxyXFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZW5kIG9mIHJlc2V0IG9mIHN0eWxlIGJyb3dzZXIgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMXB4KSBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcclxuICBtYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnR1cm4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICB9XHJcblxyXG4gIC5yYW5kb21zaGlwcyB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5ib2FyZCB7XHJcbiAgICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cclxuICAgIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxNGZyIDAuMWZyIDE0ZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xyXG4gICAgY29sdW1uLWdhcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuYm9hcmQtaHVtYW4ge1xyXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkLWNvbXB1dGVyIHtcclxuICAgIG1heC13aWR0aDogMjIwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMjVweDtcclxuICB9XHJcblxyXG4gIC5zY29yZUJvYXJkIHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIGdhcDogMXB4O1xyXG4gIH1cclxuXHJcbiAgLnNjb3JlIHtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLnJlc2V0QnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjVweDtcclxuICAgIGxlZnQ6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcclxuICB9XHJcblxyXG4gIC5hZGRzaGlwcyB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcclxuICB9XHJcblxyXG4gIFtjbGFzc149XCJjZWxsXCJdIHtcclxuICAgIGZvbnQtc2l6ZTogNHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgcGljdHVyZSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICB9XHJcblxyXG4gIC53YWl0VHVybiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDQwJTtcclxuICB9XHJcblxyXG4gIC5ub0ZpcmUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLXRhYmxldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCLEVBQUUsK0NBQStDO0lBQ2pFLGFBQWEsRUFBRSwrQ0FBK0M7SUFDOUQseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsUUFBUTtFQUNWOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztFQUNYO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjIxcHgpIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xcclxcbiAgbWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudHVybiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yYW5kb21zaGlwcyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvYXJkIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxyXFxuICAgIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMTRmciAwLjFmciAxNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAyJTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm9hcmQtaHVtYW4ge1xcclxcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAzMjVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZC1jb21wdXRlciB7XFxyXFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMyNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNjb3JlQm9hcmQge1xcclxcbiAgICB3aWR0aDogODVweDtcXHJcXG4gICAgaGVpZ2h0OiA4MDBweDtcXHJcXG4gICAgZ2FwOiAxcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc2NvcmUge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXNldEJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNXB4O1xcclxcbiAgICBsZWZ0OiAxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFkZHNoaXBzIHtcXHJcXG4gICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBbY2xhc3NePVxcXCJjZWxsXFxcIl0ge1xcclxcbiAgICBmb250LXNpemU6IDRweDtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgcGljdHVyZSB7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLndhaXRUdXJuIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDMwJTtcXHJcXG4gICAgbGVmdDogNDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5vRmlyZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAzMCU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDFweCkgYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIG1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5ib2FyZCB7XHJcbiAgICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cclxuICAgIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxNGZyIDAuMWZyIDE0ZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xyXG4gICAgY29sdW1uLWdhcDogMiU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgfVxyXG5cclxuICAuYm9hcmQtaHVtYW4ge1xyXG4gICAgbWF4LXdpZHRoOiAyNjRweDtcclxuICAgIG1heC1oZWlnaHQ6IDM5MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkLWNvbXB1dGVyIHtcclxuICAgIG1heC13aWR0aDogMjY0cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzOTBweDtcclxuICB9XHJcblxyXG4gIFtjbGFzc149XCJjZWxsXCJdIHtcclxuICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gIH1cclxuXHJcbiAgLndhaXRUdXJuIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogNjAlO1xyXG4gIH1cclxuXHJcbiAgLm5vRmlyZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDFweCkge1xyXG4gIG1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkIHtcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xyXG4gICAgZ3JpZC1yb3c6IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDE0ZnIgMC4xZnIgMTRmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XHJcbiAgICBjb2x1bW4tZ2FwOiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICB9XHJcblxyXG4gIC5ib2FyZC1odW1hbiB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmJvYXJkLWNvbXB1dGVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBbY2xhc3NePVwiY2VsbFwiXSB7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICB9XHJcblxyXG4gIC53YWl0VHVybiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDYwJTtcclxuICB9XHJcblxyXG4gIC5ub0ZpcmUge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgfVxyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCLEVBQUUsK0NBQStDO0lBQ2pFLGFBQWEsRUFBRSwrQ0FBK0M7SUFDOUQseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0IsRUFBRSwrQ0FBK0M7SUFDakUsYUFBYSxFQUFFLCtDQUErQztJQUM5RCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0VBQ1g7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDFweCkgYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgbWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuYm9hcmQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gICAgZ3JpZC1yb3c6IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNWY7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxNGZyIDAuMWZyIDE0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDIlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZC1odW1hbiB7XFxyXFxuICAgIG1heC13aWR0aDogMjY0cHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDM5MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvYXJkLWNvbXB1dGVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNjRweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMzkwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBbY2xhc3NePVxcXCJjZWxsXFxcIl0ge1xcclxcbiAgICBmb250LXNpemU6IDZweDtcXHJcXG4gICAgcGFkZGluZzogMXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLndhaXRUdXJuIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDMwJTtcXHJcXG4gICAgbGVmdDogNjAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5vRmlyZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAzMCU7XFxyXFxuICAgIGxlZnQ6IDMwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMXB4KSB7XFxyXFxuICBtYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYm9hcmQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gICAgZ3JpZC1yb3c6IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNWY7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxNGZyIDAuMWZyIDE0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDUlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZC1odW1hbiB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5ib2FyZC1jb21wdXRlciB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFtjbGFzc149XFxcImNlbGxcXFwiXSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcclxcbiAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud2FpdFR1cm4ge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMzAlO1xcclxcbiAgICBsZWZ0OiA2MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubm9GaXJlIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDMwJTtcXHJcXG4gICAgbGVmdDogMzAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtYmFzZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1iYXNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1tb2JpbGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtbW9iaWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtdGFibGV0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXRhYmxldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeX0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHN9IGZyb20gJy4vdXBkYXRlJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkIH0gZnJvbSAnLi91cGRhdGUtY29tcHV0ZXItYm9hcmQnO1xyXG5pbXBvcnQgeyBzaG93RXJyb3IgfSBmcm9tICcuL3Nob3ctZXJyb3InO1xyXG5pbXBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH0gZnJvbSAnLi9kZWxldGUtZGl2LWVycm9yJztcclxuaW1wb3J0IHsgcmFuZG9tU2hpcHMgfSBmcm9tICcuL3JhbmRvbS1zaGlwcyc7XHJcbmltcG9ydCB7IHNjb3JlQm9hcmQgfSBmcm9tICcuL3Njb3JlLWJvYXJkLmpzJztcclxuXHJcbmZ1bmN0aW9uIGFkZFNoaXBzKGFyZzEsYXJnMixhcmczLGFyZzQsYXJnNSxhcmc2KXtcclxuICAgIC8qIGFyZyBpcyB0aGUgZ2FtZSAgYXJnMiBpcyB0aGUgZGl2IHdpdGggdGhlIGh1bWFuYm9hcmQgIFxyXG4gICAgYXJnMyB0byBzaG93IHRoZSBvcHRpb25zIGFyZzQgdG8gc2hvdyByYW5kb20gYnV0dG9uXHJcbiAgICBhcmc1IGlzIHRoZSBkaXYgd2l0aCB0aGUgY29tcHV0ZXJib2FyZCBhcmc2IGlzIHRoZSBjb250ZW50IGNvbXB1dGVyIGJvYXJkKi9cclxuY29uc3QgZ2FtZSA9IGFyZzE7XHJcbmNvbnN0IGh1bWFuQm9hcmQgPSBhcmcyO1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmc1O1xyXG5jb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzY7XHJcblxyXG4vLyBoZWFkZXJzIGZvciB0aGUgcm93cyBhbmQgY29sdW1ucyBvZiB0aGUgaHVtYW4gcGxheWVyIGJvYXJkXHJcbmNvbnN0IGRpdkNvbHVtbnNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdkNvbHVtbnNIZWFkLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbnNIZWFkJyk7XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICBjb25zdCBjZWxsSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2VsbEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRDZWxsXCIpO1xyXG4gIGNlbGxIZWFkLnRleHRDb250ZW50ID0gYWxmX3lbal0udG9VcHBlckNhc2UoKTtcclxuICBkaXZDb2x1bW5zSGVhZC5hcHBlbmRDaGlsZChjZWxsSGVhZCk7XHJcbiAgfVxyXG5hcmcyLmFwcGVuZENoaWxkKGRpdkNvbHVtbnNIZWFkKTtcclxuXHJcbmNvbnN0IGRpdlJvd3NIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdlJvd3NIZWFkLmNsYXNzTGlzdC5hZGQoJ3Jvd3NIZWFkJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICBjb25zdCBjZWxsSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2VsbEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRDZWxsXCIpO1xyXG4gIGNlbGxIZWFkLnRleHRDb250ZW50ID0gaSsxO1xyXG4gIGRpdlJvd3NIZWFkLmFwcGVuZENoaWxkKGNlbGxIZWFkKTtcclxuICB9XHJcbmFyZzIuYXBwZW5kQ2hpbGQoZGl2Um93c0hlYWQpO1xyXG5cclxuLy8gZGl2IGZvciBhZGQgdGhlIHNoaXBzIGluIHRoZSBib2FyZFxyXG5jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWRGb3JBZGQnKTtcclxuZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkRm9yQWRkJyk7XHJcbmNvbnN0IGRpdkZvckVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdkZvckVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCdkaXZGb3JFcnJvcicpO1xyXG5kaXZGb3JFcnJvci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDEgLyAyOyBncmlkLWNvbHVtbjogNCAvIDU7Jyk7XHJcblxyXG5jb25zdCBzaGlwTGVuZ3RoPVs1LDMsNCw2LDQsNV07XHJcbiAgICAgICAgXHJcbmZvcihsZXQgaT0xOyBpPD1zaGlwTGVuZ3RoLmxlbmd0aDsgKytpKXtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLGBmb3JtJHtpfWApO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtSW5wdXQnKTtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLGBzdWJtaXQke2l9YCk7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBgQUREIE7CsCAke2l9YDtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRTaGlwQnV0dG9uJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6Z3JlZW47IGJhY2tncm91bmQtY29sb3I6d2hpdGU7IGZvbnQtd2VpZ2h0OiA5MDA7IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiByaWdodDsnKTtcclxuICAgIHRleHQuaW5uZXJUZXh0ID0gYCR7c2hpcExlbmd0aFtpLTFdfSBzcXVhcmVzIGxvbmdpdHVkZWA7XHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IHJhZGlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JtUmFkaW8nKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvckhvcml6b250YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgaG9yaXpvbnRhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9yVmVydGljYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgdmVydGljYWxseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMTJweCcpO1xyXG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLmlubmVyVGV4dCA9ICdsZWZ0LXRvLXJpZ2h0JztcclxuICAgIGxhYmVsRm9ySG9yaXpvbnRhbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIGxhYmVsRm9yVmVydGljYWwuaW5uZXJUZXh0ID0gJ3RvcC10by1kb3duJztcclxuICAgIGxhYmVsRm9yVmVydGljYWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b3AtdG8tZG93bicpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCdpZCcsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkaXJlY3Rpb24nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9wLXRvLWRvd24nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3RvcC10by1kb3duJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2RpcmVjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvb3JkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb29yZFJvdy5pbm5lclRleHQgPSAnUk9XOiAnO1xyXG4gICAgY29uc3QgY29vcmRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvb3JkQ29sdW1uLmlubmVyVGV4dCA9ICdDT0xVTU46ICc7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8cm93czsgKytpKXtcclxuICAgICAgICBjb25zdCByb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJvd0xhYmVsLmlubmVyVGV4dCA9IGkrMTtcclxuICAgICAgICByb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYHJvdyR7aSsxfWApO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCdpZCcsYHJvdyR7aSsxfWApO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Jvd1NlbGVjdGVkJyk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsaSsxKTtcclxuXHJcbiAgICAgICAgY29vcmRSb3cuYXBwZW5kQ2hpbGQocm93TGFiZWwpO1xyXG4gICAgICAgIGNvb3JkUm93LmFwcGVuZENoaWxkKGlucHV0Um93KTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgZm9yKGxldCBqPTA7IGo8Y29sdW1uczsgKytqKXtcclxuICAgICAgICBjb25zdCBjb2x1bW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbHVtbkxhYmVsLmlubmVyVGV4dCA9IGFsZl95W2pdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgY29sdW1uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGBjb2x1bW4ke2FsZl95W2pdfWApO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCdpZCcsYGNvbHVtbiR7YWxmX3lbal19YCk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCduYW1lJywnY29sdW1uU2VsZWN0ZWQnKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxhbGZfeVtqXSk7XHJcblxyXG4gICAgICAgIGNvb3JkQ29sdW1uLmFwcGVuZENoaWxkKGNvbHVtbkxhYmVsKTtcclxuICAgICAgICBjb29yZENvbHVtbi5hcHBlbmRDaGlsZChpbnB1dENvbHVtbik7XHJcbiAgICB9XHJcblxyXG4gICAgaG9yaXpvbnRhbGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHZlcnRpY2FsbHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvblNlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiBkaXJlY3Rpb25SYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiZGlyZWN0aW9uXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIGRpcmVjdGlvblNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICAgICBzaG93RXJyb3IocmFkaW9EaXYsJ211c3Qgc2VsZWN0IGRpcmVjdGlvbicudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBsZXQgcm93U2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIHJvd1JhZGlvVmFsdWUoKSB7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwicm93U2VsZWN0ZWRcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgcm93U2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkID0gMTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIHJvd1NlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gY29sdW1uUmFkaW9WYWx1ZSgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImNvbHVtblNlbGVjdGVkXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIGNvbHVtblNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICBjb2x1bW5TZWxlY3RlZCA9ICdhJztcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGNvbHVtblNlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNpemUgPSBzaGlwTGVuZ3RoW2ktMV07XHJcblxyXG4gICAgICAgIGxldCBzaGlwTnVtYmVyID0gaTtcclxuICAgIFxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25SYWRpb1ZhbHVlKCk7XHJcblxyXG4gICAgICAgIGxldCByb3dTZWxlY3RlZCA9IHJvd1JhZGlvVmFsdWUoKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9IGNvbHVtblJhZGlvVmFsdWUoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvb3JkID0gW051bWJlcihyb3dTZWxlY3RlZCksY29sdW1uU2VsZWN0ZWRdO1xyXG5cclxuICAgICAgICBsZXQgc2hpcCA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5kYXRhU2hpcHMoY29vcmQsZGlyZWN0aW9uLHNpemUsc2hpcE51bWJlcik7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2hpcCE9PW51bGwpe1xyXG4gICAgICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdCb2FyZCA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5wbGFjZVNoaXBzSW5UaGVCb2FyZChzaGlwKTtcclxuICAgICAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCwgbmV3Qm9hcmQpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmb3JtJHtpfWApO1xyXG4gICAgICAgICAgICBzdWJtaXRSZWFkeS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtSW5wdXQnKS5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGdyaWQsZGl2Rm9yUmFuZG9tLGRpdkNvbHVtbnNIZWFkLGRpdlJvd3NIZWFkKTtcclxuICAgICAgICAgICAgICAgIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoY29tcHV0ZXJCb2FyZCxzaGlwTGVuZ3RoLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgICAgICAgIHNjb3JlQm9hcmQoYXJnMyxwbGF5ZXJIdW1hbixwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2hvd0Vycm9yKGRpdkZvckVycm9yLCdTRUxFQ1QgQU5PVEhFUiBMT0NBVElPTicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIGFyZzMuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0Rpdik7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGRpcmVjdGlvbklucHV0KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGNvb3JkUm93KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGNvb3JkQ29sdW1uKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9ySG9yaXpvbnRhbCk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChob3Jpem9udGFsbHkpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JWZXJ0aWNhbCk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZCh2ZXJ0aWNhbGx5KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpdkZvclJhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Rm9yUmFuZG9tLmlubmVyVGV4dCA9ICfinqUgJztcclxuICAgIGRpdkZvclJhbmRvbS5jbGFzc0xpc3QuYWRkKCdyYW5kb21zaGlwcycpO1xyXG4gICAgY29uc3QgYnV0dG9uUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25SYW5kb20uaW5uZXJUZXh0ID0gJ1JBTkRPTSBGTEVFVCc7XHJcbiAgICBidXR0b25SYW5kb20uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG5cclxuICAgIGJ1dHRvblJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgICBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ109W107XHJcbiAgICAgICAgcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQscGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByYW5kb21TaGlwcyhwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10sc2hpcExlbmd0aCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG4gICAgICAgIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGdyaWQsZGl2Rm9yUmFuZG9tLGRpdkNvbHVtbnNIZWFkLGRpdlJvd3NIZWFkKTtcclxuICAgICAgICByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGNvbXB1dGVyQm9hcmQsc2hpcExlbmd0aCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgc2NvcmVCb2FyZChhcmczLHBsYXllckh1bWFuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGFyZzQuYXBwZW5kQ2hpbGQoZGl2Rm9yUmFuZG9tKTtcclxuICAgIGFyZzQuYXBwZW5kQ2hpbGQoZGl2Rm9yRXJyb3IpO1xyXG4gICAgZGl2Rm9yUmFuZG9tLmFwcGVuZENoaWxkKGJ1dHRvblJhbmRvbSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxBZGRTaGlwc0RpdihhcmcxLGFyZzIsYXJnMyxhcmc0KXtcclxuICAgIC8vIGFsbCB0aGUgYXJndW1lbnRzIGFyZSB0aGUgZGl2cyB0byB3aWxsIGJlIHJlbW92ZWRcclxuICAgIGFyZzEucmVtb3ZlKCk7XHJcbiAgICBhcmcyLnJlbW92ZSgpO1xyXG4gICAgYXJnMy5yZW1vdmUoKTtcclxuICAgIGFyZzQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoYXJnMSxhcmcyLGFyZzMpe1xyXG4gICAgICAvKiAgYXJnMSBpcyB0aGUgZGl2IHRvIHdyaXRlIHRoZSBoZWFkICovXHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGFyZzE7XHJcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGFyZzI7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBhcmczO1xyXG5cclxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNvbXB1dGVyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRDb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWRDb21wdXRlci5pbm5lclRleHQgPSAndGhpcyBpcyB5b3VyIGVuZW15ICcudG9VcHBlckNhc2UoKSsnIENsaWNrIFRvIEF0dGFjayc7XHJcbiAgICAgICAgaGVhZENvbXB1dGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRDb21wdXRlcicpO1xyXG4gICAgICAgIGFyZzEuYXBwZW5kQ2hpbGQoaGVhZENvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByYW5kb21TaGlwcyhwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ10sc2hpcExlbmd0aCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkU2hpcHN9OyIsImNvbnN0IGFkamFjZW50ID0gbmV3IE1hcCgpO1xyXG5cclxuYWRqYWNlbnQuc2V0KDAsWzEsMTJdKTtcclxuYWRqYWNlbnQuc2V0KDEsWzAsMiwxM10pO1xyXG5hZGphY2VudC5zZXQoMixbMSwzLDE0XSk7XHJcbmFkamFjZW50LnNldCgzLFsyLDQsMTVdKTtcclxuYWRqYWNlbnQuc2V0KDQsWzMsNSwxNl0pO1xyXG5hZGphY2VudC5zZXQoNSxbNCw2LDE3XSk7XHJcbmFkamFjZW50LnNldCg2LFs1LDcsMThdKTtcclxuYWRqYWNlbnQuc2V0KDcsWzYsOCwxOV0pO1xyXG5hZGphY2VudC5zZXQoOCxbNyw5LDIwXSk7XHJcbmFkamFjZW50LnNldCg5LFs4LDEwLDIxXSk7XHJcbmFkamFjZW50LnNldCgxMCxbOSwxMSwyMl0pO1xyXG5hZGphY2VudC5zZXQoMTEsWzEwLDIzXSk7XHJcbmFkamFjZW50LnNldCgxMixbMCwxMywyNF0pO1xyXG5hZGphY2VudC5zZXQoMTMsWzEsMTIsMTQsMjVdKTtcclxuYWRqYWNlbnQuc2V0KDE0LFsyLDEzLDE1LDI2XSk7XHJcbmFkamFjZW50LnNldCgxNSxbMywxNCwxNiwyN10pO1xyXG5hZGphY2VudC5zZXQoMTYsWzQsMTUsMTcsMjhdKTtcclxuYWRqYWNlbnQuc2V0KDE3LFs1LDE2LDE4LDI5XSk7XHJcbmFkamFjZW50LnNldCgxOCxbNiwxNywxOSwzMF0pO1xyXG5hZGphY2VudC5zZXQoMTksWzcsMTgsMjAsMzFdKTtcclxuYWRqYWNlbnQuc2V0KDIwLFs4LDE5LDIxLDMyXSk7XHJcbmFkamFjZW50LnNldCgyMSxbOSwyMCwyMiwzM10pO1xyXG5hZGphY2VudC5zZXQoMjIsWzEwLDIxLDIzLDM0XSk7XHJcbmFkamFjZW50LnNldCgyMyxbMTEsMjIsMzVdKTtcclxuYWRqYWNlbnQuc2V0KDI0LFsxMiwyNSwzNl0pO1xyXG5hZGphY2VudC5zZXQoMjUsWzEzLDI0LDI2LDM3XSk7XHJcbmFkamFjZW50LnNldCgyNixbMTQsMjUsMjcsMzhdKTtcclxuYWRqYWNlbnQuc2V0KDI3LFsxNSwyNiwyOCwzOV0pO1xyXG5hZGphY2VudC5zZXQoMjgsWzE2LDI3LDI5LDQwXSk7XHJcbmFkamFjZW50LnNldCgyOSxbMTcsMjgsMzAsNDFdKTtcclxuYWRqYWNlbnQuc2V0KDMwLFsxOCwyOSwzMSw0Ml0pO1xyXG5hZGphY2VudC5zZXQoMzEsWzE5LDMwLDMyLDQzXSk7XHJcbmFkamFjZW50LnNldCgzMixbMjAsMzEsMzMsNDRdKTtcclxuYWRqYWNlbnQuc2V0KDMzLFsyMSwzMiwzNCw0NV0pO1xyXG5hZGphY2VudC5zZXQoMzQsWzIyLDMzLDM1LDQ2XSk7XHJcbmFkamFjZW50LnNldCgzNSxbMjMsMzQsNDddKTtcclxuYWRqYWNlbnQuc2V0KDM2LFsyNCwzNyw0OF0pO1xyXG5hZGphY2VudC5zZXQoMzcsWzI1LDM2LDM4LDQ5XSk7XHJcbmFkamFjZW50LnNldCgzOCxbMjYsMzcsMzksNTBdKTtcclxuYWRqYWNlbnQuc2V0KDM5LFsyNywzOCw0MCw1MV0pO1xyXG5hZGphY2VudC5zZXQoNDAsWzI4LDM5LDQxLDUyXSk7XHJcbmFkamFjZW50LnNldCg0MSxbMjksNDAsNDIsNTNdKTtcclxuYWRqYWNlbnQuc2V0KDQyLFszMCw0MSw0Myw1NF0pO1xyXG5hZGphY2VudC5zZXQoNDMsWzMxLDQyLDQ0LDU1XSk7XHJcbmFkamFjZW50LnNldCg0NCxbMzIsNDMsNDUsNTZdKTtcclxuYWRqYWNlbnQuc2V0KDQ1LFszMyw0NCw0Niw1N10pO1xyXG5hZGphY2VudC5zZXQoNDYsWzM0LDQ1LDQ3LDU4XSk7XHJcbmFkamFjZW50LnNldCg0NyxbMzUsNDYsNTldKTtcclxuYWRqYWNlbnQuc2V0KDQ4LFszNiw0OSw2MF0pO1xyXG5hZGphY2VudC5zZXQoNDksWzM3LDQ4LDUwLDYxXSk7XHJcbmFkamFjZW50LnNldCg1MCxbMzgsNDksNTEsNjJdKTtcclxuYWRqYWNlbnQuc2V0KDUxLFszOSw1MCw1Miw2M10pO1xyXG5hZGphY2VudC5zZXQoNTIsWzQwLDUxLDUzLDY0XSk7XHJcbmFkamFjZW50LnNldCg1MyxbNDEsNTIsNTQsNjVdKTtcclxuYWRqYWNlbnQuc2V0KDU0LFs0Miw1Myw1NSw2Nl0pO1xyXG5hZGphY2VudC5zZXQoNTUsWzQzLDU0LDU2LDY3XSk7XHJcbmFkamFjZW50LnNldCg1NixbNDQsNTUsNTcsNjhdKTtcclxuYWRqYWNlbnQuc2V0KDU3LFs0NSw1Niw1OCw2OV0pO1xyXG5hZGphY2VudC5zZXQoNTgsWzQ2LDU3LDU5LDcwXSk7XHJcbmFkamFjZW50LnNldCg1OSxbNDcsNTgsNzFdKTtcclxuYWRqYWNlbnQuc2V0KDYwLFs0OCw2MSw3Ml0pO1xyXG5hZGphY2VudC5zZXQoNjEsWzQ5LDYwLDYyLDczXSk7XHJcbmFkamFjZW50LnNldCg2MixbNTAsNjEsNjMsNzRdKTtcclxuYWRqYWNlbnQuc2V0KDYzLFs1MSw2Miw2NCw3NV0pO1xyXG5hZGphY2VudC5zZXQoNjQsWzUyLDYzLDY1LDc2XSk7XHJcbmFkamFjZW50LnNldCg2NSxbNTMsNjQsNjYsNzddKTtcclxuYWRqYWNlbnQuc2V0KDY2LFs1NCw2NSw2Nyw3OF0pO1xyXG5hZGphY2VudC5zZXQoNjcsWzU1LDY2LDY4LDc5XSk7XHJcbmFkamFjZW50LnNldCg2OCxbNTYsNjcsNjksODBdKTtcclxuYWRqYWNlbnQuc2V0KDY5LFs1Nyw2OCw3MCw4MV0pO1xyXG5hZGphY2VudC5zZXQoNzAsWzU4LDY5LDcxLDgyXSk7XHJcbmFkamFjZW50LnNldCg3MSxbNTksNzAsODNdKTtcclxuYWRqYWNlbnQuc2V0KDcyLFs2MCw3Myw4NF0pO1xyXG5hZGphY2VudC5zZXQoNzMsWzYxLDcyLDc0LDg1XSk7XHJcbmFkamFjZW50LnNldCg3NCxbNjIsNzMsNzUsODZdKTtcclxuYWRqYWNlbnQuc2V0KDc1LFs2Myw3NCw3Niw4N10pO1xyXG5hZGphY2VudC5zZXQoNzYsWzY0LDc1LDc3LDg4XSk7XHJcbmFkamFjZW50LnNldCg3NyxbNjUsNzYsNzgsODldKTtcclxuYWRqYWNlbnQuc2V0KDc4LFs2Niw3Nyw3OSw5MF0pO1xyXG5hZGphY2VudC5zZXQoNzksWzY3LDc4LDgwLDkxXSk7XHJcbmFkamFjZW50LnNldCg4MCxbNjgsNzksODEsOTJdKTtcclxuYWRqYWNlbnQuc2V0KDgxLFs2OSw4MCw4Miw5M10pO1xyXG5hZGphY2VudC5zZXQoODIsWzcwLDgxLDgzLDk0XSk7XHJcbmFkamFjZW50LnNldCg4MyxbNzEsODIsOTVdKTtcclxuYWRqYWNlbnQuc2V0KDg0LFs3Miw4NSw5Nl0pO1xyXG5hZGphY2VudC5zZXQoODUsWzczLDg0LDg2LDk3XSk7XHJcbmFkamFjZW50LnNldCg4NixbNzQsODUsODcsOThdKTtcclxuYWRqYWNlbnQuc2V0KDg3LFs3NSw4Niw4OCw5OV0pO1xyXG5hZGphY2VudC5zZXQoODgsWzc2LDg3LDg5LDEwMF0pO1xyXG5hZGphY2VudC5zZXQoODksWzc3LDg4LDkwLDEwMV0pO1xyXG5hZGphY2VudC5zZXQoOTAsWzc4LDg5LDkxLDEwMl0pO1xyXG5hZGphY2VudC5zZXQoOTEsWzc5LDkwLDkyLDEwM10pO1xyXG5hZGphY2VudC5zZXQoOTIsWzgwLDkxLDkzLDEwNF0pO1xyXG5hZGphY2VudC5zZXQoOTMsWzgxLDkyLDk0LDEwNV0pO1xyXG5hZGphY2VudC5zZXQoOTQsWzgyLDkzLDk1LDEwNl0pO1xyXG5hZGphY2VudC5zZXQoOTUsWzgzLDk0LDEwN10pO1xyXG5hZGphY2VudC5zZXQoOTYsWzg0LDk3LDEwOF0pO1xyXG5hZGphY2VudC5zZXQoOTcsWzg1LDk2LDk4LDEwOV0pO1xyXG5hZGphY2VudC5zZXQoOTgsWzg2LDk3LDk5LDExMF0pO1xyXG5hZGphY2VudC5zZXQoOTksWzg3LDk4LDEwMCwxMTFdKTtcclxuYWRqYWNlbnQuc2V0KDEwMCxbODgsOTksMTAxLDExMl0pO1xyXG5hZGphY2VudC5zZXQoMTAxLFs4OSwxMDAsMTAyLDExM10pO1xyXG5hZGphY2VudC5zZXQoMTAyLFs5MCwxMDEsMTAzLDExNF0pO1xyXG5hZGphY2VudC5zZXQoMTAzLFs5MSwxMDIsMTA0LDExNV0pO1xyXG5hZGphY2VudC5zZXQoMTA0LFs5MiwxMDMsMTA1LDExNl0pO1xyXG5hZGphY2VudC5zZXQoMTA1LFs5MywxMDQsMTA2LDExN10pO1xyXG5hZGphY2VudC5zZXQoMTA2LFs5NCwxMDUsMTA3LDExOF0pO1xyXG5hZGphY2VudC5zZXQoMTA3LFs5NSwxMDYsMTE5XSk7XHJcbmFkamFjZW50LnNldCgxMDgsWzk2LDEwOSwxMjBdKTtcclxuYWRqYWNlbnQuc2V0KDEwOSxbOTcsMTA4LDExMCwxMjFdKTtcclxuYWRqYWNlbnQuc2V0KDExMCxbOTgsMTA5LDExMSwxMjJdKTtcclxuYWRqYWNlbnQuc2V0KDExMSxbOTksMTEwLDExMiwxMjNdKTtcclxuYWRqYWNlbnQuc2V0KDExMixbMTAwLDExMSwxMTMsMTI0XSk7XHJcbmFkamFjZW50LnNldCgxMTMsWzEwMSwxMTIsMTE0LDEyNV0pO1xyXG5hZGphY2VudC5zZXQoMTE0LFsxMDIsMTEzLDExNSwxMjZdKTtcclxuYWRqYWNlbnQuc2V0KDExNSxbMTAzLDExNCwxMTYsMTI3XSk7XHJcbmFkamFjZW50LnNldCgxMTYsWzEwNCwxMTUsMTE3LDEyOF0pO1xyXG5hZGphY2VudC5zZXQoMTE3LFsxMDUsMTE2LDExOCwxMjldKTtcclxuYWRqYWNlbnQuc2V0KDExOCxbMTA2LDExNywxMTksMTMwXSk7XHJcbmFkamFjZW50LnNldCgxMTksWzEwNywxMTgsMTMxXSk7XHJcbmFkamFjZW50LnNldCgxMjAsWzEwOCwxMjEsMTMyXSk7XHJcbmFkamFjZW50LnNldCgxMjEsWzEwOSwxMjAsMTIyLDEzM10pO1xyXG5hZGphY2VudC5zZXQoMTIyLFsxMTAsMTIxLDEyMywxMzRdKTtcclxuYWRqYWNlbnQuc2V0KDEyMyxbMTExLDEyMiwxMjQsMTM1XSk7XHJcbmFkamFjZW50LnNldCgxMjQsWzExMiwxMjMsMTI1LDEzNl0pO1xyXG5hZGphY2VudC5zZXQoMTI1LFsxMTMsMTI0LDEyNiwxMzddKTtcclxuYWRqYWNlbnQuc2V0KDEyNixbMTE0LDEyNSwxMjcsMTM4XSk7XHJcbmFkamFjZW50LnNldCgxMjcsWzExNSwxMjYsMTI4LDEzOV0pO1xyXG5hZGphY2VudC5zZXQoMTI4LFsxMTYsMTI3LDEyOSwxNDBdKTtcclxuYWRqYWNlbnQuc2V0KDEyOSxbMTE3LDEyOCwxMzAsMTQxXSk7XHJcbmFkamFjZW50LnNldCgxMzAsWzExOCwxMjksMTMxLDE0Ml0pO1xyXG5hZGphY2VudC5zZXQoMTMxLFsxMTksMTMwLDE0M10pO1xyXG5hZGphY2VudC5zZXQoMTMyLFsxMjAsMTMzLDE0NF0pO1xyXG5hZGphY2VudC5zZXQoMTMzLFsxMjEsMTMyLDEzNCwxNDVdKTtcclxuYWRqYWNlbnQuc2V0KDEzNCxbMTIyLDEzMywxMzUsMTQ2XSk7XHJcbmFkamFjZW50LnNldCgxMzUsWzEyMywxMzQsMTM2LDE0N10pO1xyXG5hZGphY2VudC5zZXQoMTM2LFsxMjQsMTM1LDEzNywxNDhdKTtcclxuYWRqYWNlbnQuc2V0KDEzNyxbMTI1LDEzNiwxMzgsMTQ5XSk7XHJcbmFkamFjZW50LnNldCgxMzgsWzEyNiwxMzcsMTM5LDE1MF0pO1xyXG5hZGphY2VudC5zZXQoMTM5LFsxMjcsMTM4LDE0MCwxNTFdKTtcclxuYWRqYWNlbnQuc2V0KDE0MCxbMTI4LDEzOSwxNDEsMTUyXSk7XHJcbmFkamFjZW50LnNldCgxNDEsWzEyOSwxNDAsMTQyLDE1M10pO1xyXG5hZGphY2VudC5zZXQoMTQyLFsxMzAsMTQxLDE0MywxNTRdKTtcclxuYWRqYWNlbnQuc2V0KDE0MyxbMTMxLDE0MiwxNTVdKTtcclxuYWRqYWNlbnQuc2V0KDE0NCxbMTMyLDE0NV0pO1xyXG5hZGphY2VudC5zZXQoMTQ1LFsxMzMsMTQ0LDE0Nl0pO1xyXG5hZGphY2VudC5zZXQoMTQ2LFsxMzQsMTQ1LDE0N10pO1xyXG5hZGphY2VudC5zZXQoMTQ3LFsxMzUsMTQ2LDE0OF0pO1xyXG5hZGphY2VudC5zZXQoMTQ4LFsxMzYsMTQ3LDE0OV0pO1xyXG5hZGphY2VudC5zZXQoMTQ5LFsxMzcsMTQ4LDE1MF0pO1xyXG5hZGphY2VudC5zZXQoMTUwLFsxMzgsMTQ5LDE1MV0pO1xyXG5hZGphY2VudC5zZXQoMTUxLFsxMzksMTUwLDE1Ml0pO1xyXG5hZGphY2VudC5zZXQoMTUyLFsxNDAsMTUxLDE1M10pO1xyXG5hZGphY2VudC5zZXQoMTUzLFsxNDEsMTUyLDE1NF0pO1xyXG5hZGphY2VudC5zZXQoMTU0LFsxNDIsMTUzLDE1NV0pO1xyXG5hZGphY2VudC5zZXQoMTU1LFsxNDMsMTU0XSk7XHJcblxyXG5cclxuZXhwb3J0IHthZGphY2VudH07XHJcbiIsImNvbnN0IHJvd3MgPSAxMztcclxuY29uc3QgY29sdW1ucyA9IDEyO1xyXG5cclxuY29uc3QgYWxmX3kgPSBbXHJcbiAgICAnYScsJ2InLCdjJywnZCcsJ2UnLCdmJywnZycsJ2gnLCdpJywnaicsJ2snLCdsJ1xyXG4gICAgIF07XHJcblxyXG5mdW5jdGlvbiBzaGlmdENvb3JkaW5hdGVzKFt2YWx1ZV94LHZhbHVlX3ldKXtcclxuICAgICAgIC8qICBsZXQgW3gseV0gPSBbMSwnYSddOyAgKi9cclxuICAgICAgICBzd2l0Y2goYWxmX3kuaW5jbHVkZXModmFsdWVfeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFsZl95LmluZGV4T2YodmFsdWVfeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyB2YWx1ZV94LTEsIGluZGV4IF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLGtleSl7XHJcbmxldCBhcnJheU9mQ29vcmRpbmF0ZXMgPSBbXTtcclxubGV0IGluaXRpYWxYID0geDtcclxubGV0IGluaXRpYWxZID0gYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgc3dpdGNoKGRpcmVjdGlvbj09PSdsZWZ0LXRvLXJpZ2h0Jyl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgIGlmKGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKSArIGtleSA+IGNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIHgsIGFsZl95W2luaXRpYWxZICsgaV0gXSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uPT09J3RvcC10by1kb3duJyl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGlmKGluaXRpYWxYICsga2V5LTEgPiByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgaW5pdGlhbFggKyBpLCB5IF0pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0Nvb3JkaW5hdGVzKFt4LHldKXtcclxuICAgIGlmKHggPiAwICYmIHggPD0gcm93cyAmJiBhbGZfeS5pbmNsdWRlcyh5LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbil7XHJcbiAgLyogICBsZXQgW3gseV0gPSBbMSwnYSddOyAgICAgKi9cclxuICAgIHJldHVybiBbIHJvdyArIDEsIGFsZl95W2NvbHVtbl0gXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKXtcclxuICAgLyogIGxldCBbcm93LGNvbHVtbl0gPSBbMCwwXTsgKi9cclxuICAgIGxldCByb3dTZWxlY3RlZCA9IGNvb3JkWzBdLTE7XHJcbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBhbGZfeS5pbmRleE9mKGNvb3JkWzFdLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHJldHVybiBbTnVtYmVyKHJvd1NlbGVjdGVkKSwgTnVtYmVyKGNvbHVtblNlbGVjdGVkKV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKSB7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBhcnJheS5wdXNoKGAke2krMX0sJHthbGZfeVtqXX1gKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCl7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGxldCBuPSAtMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBuID0gbiArIDE7XHJcbiAgICAgICAgYXJyYXkucHVzaChbbixbYCR7aSsxfSwke2FsZl95W2pdfWBdXSk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeSwgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIFxyXG4gICAgY2hlY2tDb29yZGluYXRlcywgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzLCBhbGxDb29yZGluYXRlc1Bvc2libGVzLFxyXG4gICAgICAgIGZyb21Db29yZGluYXRlc3RvQ2VsbCwgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWluZXJzKGFyZzEpIHtcclxuICAgIC8qIHRoZSBhcmcxIGlzIHRoZSBwYXJlbnQgY29udGFpbmVyICAgKi9cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkRm9yQWRkJyk7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdncmlkRm9yQWRkJyk7XHJcbiAgICBcclxuICAgICAgICBhcmcxLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRhaW5lcnMgfTsiLCJmdW5jdGlvbiBkZWxldGVFcnJvck1lc3NhZ2VzKCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvcicpO1xyXG4gICAgLyogcGFyYSBjcmVhciB1biBhcnJheSBkZXNkZSBlbCBOb2RlTGlzdCAqL1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlc0FycmF5ID0gWy4uLmVycm9yTWVzc2FnZXNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBlcnJvck1lc3NhZ2VzQXJyYXkuZW50cmllcygpO1xyXG4gICAgZXJyb3JNZXNzYWdlc0FycmF5LmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAvKiAgIGNvbnNvbGUubG9nKGluZGV4WzBdKTtcclxuICAgICAgICAgY29uc29sZS5sb2coaW5kZXhbMV0pOyAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICB4LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKFxyXG4gICAgICAgIHBsYXllclJlYWwgPSBcIkhVTUFOIFBsYXllclwiLFxyXG4gICAgICAgIHBsYXllckNvbXB1dGVyID0gXCJDT01QVVRFUiBQbGF5ZXJcIixcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlID0gJycgKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgbmV3IFBsYXllcihwbGF5ZXJSZWFsKVxyXG4gICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBsYXllcihwbGF5ZXJDb21wdXRlcilcclxuICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAod2lubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogdGhlIHBsYXllciBkb2VzbnQgY2hhbmdlICovXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXI7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvKiBzd2l0Y2ggcGxheWVyKi9cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfTtcclxuICAgICAgICAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGJvYXJkUmVhbCA9ICgpID0+IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddWydib2FyZCddO1xyXG4gICAgICAgICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSAoKSA9PiBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuXHJcbiAgICAgICAgICAgY29uc3QgZ2V0Q29tcHV0ZXJQbGF5ZXIgPSAoKSA9PiBwbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgIGNvbnN0IGdldEh1bWFuUGxheWVyID0gKCkgPT4gcGxheWVyc1swXTtcclxuXHJcbiAgICAgICAgICAgY29uc3QgaXNUaGVyZUFXaW5uZXIgPSAoKSA9PiB3aW5uZXI7XHJcblxyXG4gICAgY29uc3QgcHJpbnROZXdSb3VuZCA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBib2FyZFJlYWwoKTtcclxuICAgICAgICAgICAgYm9hcmRDb21wdXRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIHN3aXRjaCAod2lubmVyKSB7XHJcbiAgICAgICAgICAgY2FzZSB0cnVlOiAgIFxyXG4gICAgICAgICAgICAgICBtZXNzYWdlID0gIGdldEFjdGl2ZVBsYXllcigpLnR5cGUgKyAnIFdPTic7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICcnOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfTsgXHJcbiAgICAgIC8qICBjb25zb2xlLmxvZyhtZXNzYWdlKTsgICovICAgXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBnZXRHYW1lTWVzc2FnZSA9ICgpID0+IG1lc3NhZ2U7ICAgIFxyXG5cclxuICAgICAgY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHBsYXllcnNbMF1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiggcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ10uZ2V0VG90YWxTdW5rKCkgPT09IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddLmxlbmd0aCApe1xyXG4gICAgICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2lubmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7IFxyXG4gICAgICAgIHdpbm5lciA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcbiAgICAgICAgLyogdGhpcyByZXNldCBpcyBub3QgYmVlbiB1c2VkICovXHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwbGF5Um91bmQgPSAocm93LGNvbHVtbikgPT4ge1xyXG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgICAgIGlmICggd2lubmVyID09PSB0cnVlICl7IFxyXG4gICAgICAgICAgICByZXNldEdhbWUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGNvb3JkID0gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pO1xyXG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkID0gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ107XHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNvcmRlZEF0dGFjayhjb29yZCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNoZWNrRm9yV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICggYm9hcmQgKSA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGxheVJvdW5kQ29tcHV0ZXIgPSAocm93LGNvbHVtbikgPT4ge1xyXG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgIC8qIGNvbnNvbGUubG9nKCdhY3RpdmFuZG8ganVlZ28nKTsgKi9cclxuICAgICAgICBpZiAoIHdpbm5lciA9PT0gdHJ1ZSApeyBcclxuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKTtcclxuICAgICAgICAgICAgbGV0IGdhbWVib2FyZCA9IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cGxheVJvdW5kLHBsYXlSb3VuZENvbXB1dGVyLCBnZXRBY3RpdmVQbGF5ZXIsIFxyXG4gICAgICAgIGdldEdhbWVNZXNzYWdlLCBib2FyZFJlYWwsIGJvYXJkQ29tcHV0ZXIsIHJlc2V0R2FtZSxcclxuICAgICAgICAgZ2V0Q29tcHV0ZXJQbGF5ZXIsIGdldEh1bWFuUGxheWVyLCBpc1RoZXJlQVdpbm5lcn07XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2FtZUNvbnRyb2xsZXJ9OyIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xyXG5pbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBzaGlmdENvb3JkaW5hdGVzLCBhc3NpZ25Mb2NhdGlvbiwgY2hlY2tDb29yZGluYXRlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcblxyXG5cclxuLy8gYSBjbGFzcyBHYW1lYm9hcmRcclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuZ2V0Qm9hcmQocm93cywgY29sdW1ucyk7XHJcbiAgICAgICAgdGhpcy5hcnJheU1pc3NlZCA9IG5ldyBTZXQoW10pO1xyXG4gICAgICAgIHRoaXMuYXJyYXlBbGxBdHRhY2sgPSBuZXcgU2V0KFtdKTtcclxuICAgICAgICB0aGlzLmFsbFNoaXBzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9hcmQoIHJvd3MsIGNvbHVtbnMsIGJvYXJkPVtdKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBib2FyZFtpXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2godGhpcy5jZWxsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2VsbCgpe1xyXG4gICBcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHt2YWx1ZX07ICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRhdGFTaGlwcyhbeCx5XSxkaXJlY3Rpb24sc2l6ZSxzaGlwTnVtYmVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IGFzc2lnbkxvY2F0aW9uKFt4LHldLGRpcmVjdGlvbixzaXplKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihzaGlwQ29vcmRpbmF0ZXM9PT1udWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBub3RBdmFpbGFibGUgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgKHgpID0+IHRoaXMuYm9hcmRbc2hpZnRDb29yZGluYXRlcyh4KVswXV1bc2hpZnRDb29yZGluYXRlcyh4KVsxXV0udmFsdWUgPT09IDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAgKG5vdEF2YWlsYWJsZS5pbmNsdWRlcyh0cnVlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlc1RvU3RyaW5nID0gc2hpcENvb3JkaW5hdGVzLm1hcCgoeCkgPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgbGV0IG9uZVNoaXAgPSB7IFxyXG4gICAgICAgICAgICAgICAgJ3NoaXBOdW1iZXInOnNoaXBOdW1iZXIsIFxyXG4gICAgICAgICAgICAgICAgJ3NoaXBEZXRhaWxzJzogbmV3IFNoaXAoc2l6ZSksXHJcbiAgICAgICAgICAgICAgICAnY29vcmRpbmF0ZXMnOiBzaGlwQ29vcmRpbmF0ZXNUb1N0cmluZ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKG9uZVNoaXApO1xyXG4gICAgICAgICAgICByZXR1cm4gb25lU2hpcDtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcHNJblRoZUJvYXJkKCBvbmVTaGlwICl7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gb25lU2hpcFsnY29vcmRpbmF0ZXMnXTtcclxuICAgICAgICBsZXQgcmV2ZXJzZVN0cmluZyA9IGFycmF5Lm1hcCgoeCk9PiB4LnNwbGl0KCcsJykpO1xyXG4gICAgICAgIGxldCBhcnJheUluQm9hcmQgPSByZXZlcnNlU3RyaW5nLm1hcCggKHZhbHVlcykgPT4gc2hpZnRDb29yZGluYXRlcyh2YWx1ZXMpKTtcclxuICAgICAgICBhcnJheUluQm9hcmQubWFwKChbeCx5XSkgPT4gdGhpcy5ib2FyZFt4XVt5XS52YWx1ZSA9IDEgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVjb3JkZWRBdHRhY2soIFt4LHldLCBcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazE9KHZhbHVlKT0+dGhpcy5yZWNvcmRlZENvb3JkKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazI9KHZhbHVlKT0+dGhpcy5yZWNvcmRlZE1pc3NlZENvb3JkKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKXsgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoIWNoZWNrQ29vcmRpbmF0ZXMoW3gseV0pIHx8IHRoaXMuYXJyYXlBbGxBdHRhY2suaGFzKFt4LHkudG9Mb3dlckNhc2UoKV0udG9TdHJpbmcoKSkgKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBbYm9hcmRYLGJvYXJkWV0gPSBzaGlmdENvb3JkaW5hdGVzKFt4LHldKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCh0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazEoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2syKFt4LHldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID0gMjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazEoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCB0aGlzLmFsbFNoaXBzLmxlbmd0aDsgKytpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hbGxTaGlwc1tpXVsnY29vcmRpbmF0ZXMnXS5pbmNsdWRlcyhbeCx5XS50b1N0cmluZygpKT09PXRydWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwID0gdGhpcy5hbGxTaGlwc1tpXVsnc2hpcERldGFpbHMnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsU2hpcHNbaV1bJ3NoaXBEZXRhaWxzJ10gPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb3JkZWRDb29yZCggZGF0YSwgc2V0PXRoaXMuYXJyYXlBbGxBdHRhY2spe1xyXG4gICAgICAgIHNldC5hZGQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgIH1cclxuXHJcbiAgICAgcmVjb3JkZWRNaXNzZWRDb29yZCggZGF0YSwgc2V0PXRoaXMuYXJyYXlNaXNzZWQpe1xyXG4gICAgICAgIHNldC5hZGQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgIH0gXHJcblxyXG4gICAgZ2V0VG90YWxTdW5rKCl7XHJcbiAgICBcclxuICAgICAgICBsZXQgIHRvdGFsU3VuayA9IHRoaXMuYWxsU2hpcHMucmVkdWNlKCh0b3RhbCwgY3VycmVudEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtWydzaGlwRGV0YWlscyddLmJlZW5TdW5rPT09dHJ1ZSA/IHRvdGFsICsgMSA6IHRvdGFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICByZXR1cm4gdG90YWxTdW5rO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRTbmFwc2hvdCgpe1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XHJcbiAgICAgICAgbGV0IHRvdGFsU3VuayA9IHRoaXMuZ2V0VG90YWxTdW5rKCk7XHJcblxyXG4gICAgICAgIGlmKHRvdGFsU3Vuaz09PXRoaXMuYWxsU2hpcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IGBBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmtgO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IGBTaGlwcyB0aGF0IGhhdmUgYmVlbiBzdW5rOiAke3RvdGFsU3Vua30gLSBTaGlwcyBhZmxvYXQ6ICR7dGhpcy5hbGxTaGlwcy5sZW5ndGgtdG90YWxTdW5rfWA7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZUJvYXJkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQge0dhbWVib2FyZH07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbi8vIGEgY2xhc3MgUGxheWVyXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWUpeyBcclxuICAgICAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IHRoaXMuY3JlYXRlR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2FtZWJvYXJkKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7UGxheWVyfTsiLCJpbXBvcnQge2FsbENvb3JkaW5hdGVzUG9zaWJsZXN9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucycgO1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tU2hpcHMoYXJnMSxhcmcyKXtcclxuICAgIC8qIGFyZzEgaXMgdGhlIHBsYXllckdhbWVib2FyZCBhcmcyIGlzIHRoZSBhcnJheSB3aXRoIGxlbmd0aCovXHJcbiAgIFxyXG4gICBjb25zdCBzaGlwTGVuZ3RoPWFyZzI7XHJcbiAgIGNvbnN0IGFycmF5RGlyZWN0aW9uID0gWydsZWZ0LXRvLXJpZ2h0JywndG9wLXRvLWRvd24nXTtcclxuICAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICAgXHJcblxyXG4gICBmb3IgKCBsZXQgaT0wOyBpIDwgc2hpcExlbmd0aC5sZW5ndGg7ICsraSl7XHJcbiAgICBsZXQgc2hpcCA9IG51bGw7IFxyXG5cclxuICAgIHdoaWxlKHNoaXA9PT1udWxsKXtcclxuICAgIGxldCBudW1iZXIgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx0b3RhbENlbGxzLmxlbmd0aCk7XHJcbiAgICBsZXQgY29vcmQgPSAgdG90YWxDZWxsc1tudW1iZXItMV0uc3BsaXQoJywnKTtcclxuICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGFycmF5RGlyZWN0aW9uW3JhbmRvbUludEZyb21JbnRlcnZhbCgxLDIpLTFdO1xyXG4gICAgc2hpcCA9IGFyZzEuZGF0YVNoaXBzKGNvb3JkLGRpcmVjdGlvbixzaGlwTGVuZ3RoW2ldLGkrMSk7XHJcbiAgICB9XHJcbiAgICBhcmcxLnBsYWNlU2hpcHNJblRoZUJvYXJkKCBzaGlwICk7XHJcblxyXG4gICB9XHJcblxyXG5yZXR1cm4gYXJnMTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzKCl7XHJcbiAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICBsZXQgbnVtYmVyID0gcmFuZG9tSW50RnJvbUludGVydmFsKDEsdG90YWxDZWxscy5sZW5ndGgpO1xyXG4gICAgbGV0IGNvb3JkID0gIHRvdGFsQ2VsbHNbbnVtYmVyLTFdLnNwbGl0KCcsJyk7XHJcbiAgICBjb29yZCA9IFtOdW1iZXIoY29vcmRbMF0pLGNvb3JkWzFdXTtcclxuICByZXR1cm4gY29vcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUludEZyb21JbnRlcnZhbChtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbmV4cG9ydCB7cmFuZG9tU2hpcHMsIHJhbmRvbUNvb3JkaW5hdGVzfTsiLCJmdW5jdGlvbiBzY29yZUJvYXJkKGFyZzEsYXJnMixhcmczKXtcclxuICAgIC8qIGFyZzEgaXMgdGhlIGJvYXJkIGRpdiwgYXJnMiBpcyB0aGUgaHVtYW4gcGxheWVyIG9iamVjdCwgYXJnMyBpcyB0aGUgY29tcHV0ZXIgcGxheWVyIG9iamVjdCAqL1xyXG5cclxuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGFyZzEucGFyZW50RWxlbWVudDtcclxuY29uc3QgcGxheWVySHVtYW4gPSBhcmcyO1xyXG5jb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzM7XHJcbmNvbnN0IHNjb3JlQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG5jb25zdCBodW1hblNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGNvbXB1dGVyU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbnNjb3JlQm9hcmREaXYuY2xhc3NMaXN0LmFkZCgnc2NvcmVCb2FyZCcpO1xyXG5odW1hblNjb3JlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMS8yOycpO1xyXG5odW1hblNjb3JlLnNldEF0dHJpYnV0ZSgnaWQnLCdodW1hbi1zY29yZScpO1xyXG5odW1hblNjb3JlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlJyk7XHJcbmNvbXB1dGVyU2NvcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAyLzM7Jyk7XHJcbmNvbXB1dGVyU2NvcmUuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbXB1dGVyLXNjb3JlJyk7XHJcbmNvbXB1dGVyU2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcclxuXHJcbmNvbnN0IGh1bWFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmh1bWFuVGl0bGUudGV4dENvbnRlbnQgPSAnQ09NUFVURVIgYXR0YWNrcyc7ICAvKiBpbiB0aGUgaHVtYW4gYm9hcmQgKi9cclxuaHVtYW5UaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6MS8yO2dyaWQtY29sdW1uOjEvMztiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0eWVsbG93OycpO1xyXG5odW1hblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlVGl0bGUnKTtcclxuXHJcbmNvbnN0IHN1Y2Nlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnN1Y2Nlc3Muc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjIvMztncmlkLWNvbHVtbjoxLzM7Y29sb3I6IzA5YzNjMTtiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0eWVsbG93O2ZvbnQtd2VpZ2h0OmJvbGQ7Jyk7XHJcbmxldCByYXRlID0gMDsgLyogaW5pY2lhIGVuIDAgKi9cclxuc3VjY2Vzcy50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZX0lYDsgXHJcblxyXG5jb25zdCBpbWdIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDEuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDEuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDIuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDIuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDMuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDMuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMl1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDQuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDQuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bM11bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDUuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDUuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDYuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDYuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbXB1dGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbXB1dGVyVGl0bGUudGV4dENvbnRlbnQgPSAnSFVNQU4gYXR0YWNrcyc7ICAvKiBpbiB0aGUgYm9hcmQgY29tcHV0ZXIgKi9cclxuY29tcHV0ZXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6MS8yO2dyaWQtY29sdW1uOjEvMztiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0eWVsbG93OycpO1xyXG5jb21wdXRlclRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlVGl0bGUnKTtcclxuXHJcbmNvbnN0IHN1Y2Nlc3NDb21wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5zdWNjZXNzQ29tcC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Mi8zO2dyaWQtY29sdW1uOjEvMztjb2xvcjojMDljM2MxO2JhY2tncm91bmQtY29sb3I6bGlnaHR5ZWxsb3c7Zm9udC13ZWlnaHQ6Ym9sZDsnKTtcclxubGV0IHJhdGVDb21wID0gMDsgLyogaW5pY2lhIGVuIDAgKi9cclxuc3VjY2Vzc0NvbXAudGV4dENvbnRlbnQgPSBgc3VjY2VzcyByYXRlOiAke3JhdGVDb21wfSVgOyBcclxuXHJcbmNvbnN0IGltZ0MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzQzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0MxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdDMS5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0MxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNDMS5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMF1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVswXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzQzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0MyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo0LzU7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdDMi5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0MyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo0LzU7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNDMi5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMV1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsxXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzQzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0MzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo1LzY7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdDMy5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0MzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo1LzY7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNDMy5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMl1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsyXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0M0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzQzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0M0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdDNC5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0M0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNDNC5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bM11bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVszXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0M1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzQzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0M1LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo3Lzg7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdDNS5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0M1LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo3Lzg7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNDNS5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNF1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs0XVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0M2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzQzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0M2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo4Lzk7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdDNi5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0M2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo4Lzk7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNDNi5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNV1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs1XVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2NvcmVCb2FyZERpdik7XHJcbnNjb3JlQm9hcmREaXYuYXBwZW5kQ2hpbGQoaHVtYW5TY29yZSk7XHJcbnNjb3JlQm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcHV0ZXJTY29yZSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaHVtYW5UaXRsZSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoc3VjY2Vzcyk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaW1nSDEpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGhpdHNIMSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaW1nSDIpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGhpdHNIMik7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaW1nSDMpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGhpdHNIMyk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaW1nSDQpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGhpdHNINCk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaW1nSDUpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGhpdHNINSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaW1nSDYpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGhpdHNINik7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoY29tcHV0ZXJUaXRsZSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoc3VjY2Vzc0NvbXApO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGltZ0MxKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChoaXRzQzEpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGltZ0MyKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChoaXRzQzIpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGltZ0MzKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChoaXRzQzMpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGltZ0M0KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChoaXRzQzQpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGltZ0M1KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChoaXRzQzUpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGltZ0M2KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChoaXRzQzYpO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7c2NvcmVCb2FyZH07IiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9nYW1lLWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtcclxuICByb3dzLFxyXG4gIGNvbHVtbnMsXHJcbiAgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLFxyXG4gIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMsXHJcbn0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWluZXJzIH0gZnJvbSBcIi4vY3JlYXRlLWNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBhZGRTaGlwcyB9IGZyb20gXCIuL2FkZC1zaGlwc1wiO1xyXG5pbXBvcnQgeyByYW5kb21Db29yZGluYXRlcyB9IGZyb20gXCIuL3JhbmRvbS1zaGlwc1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxscyB9IGZyb20gXCIuL3VwZGF0ZVwiO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQgfSBmcm9tIFwiLi91cGRhdGUtY29tcHV0ZXItYm9hcmRcIjtcclxuaW1wb3J0IHsgYWRqYWNlbnQgfSBmcm9tIFwiLi9hZGphY2VudFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVTY29yZSB9IGZyb20gXCIuL3VwZGF0ZS1zY29yZVwiO1xyXG5cclxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcihhcmcpIHtcclxuICAvKiBhcmcgaXMgdGhlIGdhbWUgY29udGFpbmVyICovXHJcblxyXG4gIGNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpO1xyXG4gIGNvbnN0IHRvdGFsQ2VsbHMgPSBhbGxDb29yZGluYXRlc1Bvc2libGVzKCk7IC8vIGZvciB0aGUgY29tcHV0ZXIncyBhdHRhY2sgcHVycG9zZVxyXG4gIGxldCBhcnJheUFkamFjZW50ID0gW107IC8vIGZvciB0aGUgY29tcHV0ZXIncyBhdHRhY2sgcHVycG9zZVxyXG5cclxuICBjb25zdCBnYW1lQ29udGFpbmVyID0gYXJnO1xyXG4gIGNvbnN0IHR1cm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHdhaXRUdXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBodW1hbkJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICB0dXJuLmNsYXNzTGlzdC5hZGQoXCJ0dXJuXCIpO1xyXG4gIHR1cm4uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XHJcbiAgdHVybkRpdi5jbGFzc0xpc3QuYWRkKFwidHVybkRpdlwiKTtcclxuICBib2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XHJcbiAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJyZXN1bHRcIik7XHJcbiAgaHVtYW5Cb2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtaHVtYW5cIik7XHJcbiAgaHVtYW5Cb2FyZC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcclxuICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gIHJlc2V0QnV0dG9uLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6My80OyBncmlkLWNvbHVtbjoxLzJcIik7XHJcbiAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2V0QnV0dG9uXCIpO1xyXG4gIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJSRVNFVCBmb3IgTkVXIEdBTUVcIjtcclxuXHJcbiAgY29uc3QgaW5pdGlhbFNjcmVlbiA9ICgpID0+IHtcclxuICAgIC8vIGNsZWFyIHRoZSBib2FyZFxyXG4gICAgYm9hcmREaXYudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbiAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGdhbWUuZ2V0Q29tcHV0ZXJQbGF5ZXIoKTtcclxuXHJcbiAgICAvLyBEaXNwbGF5IHBsYXllcidzIHR1cm5cclxuICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBgJHthY3RpdmVQbGF5ZXIudHlwZX0ncyB0dXJuLi4uYDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIC8vIEFueXRoaW5nIGNsaWNrYWJsZSBzaG91bGQgYmUgYSBidXR0b24hIVxyXG4gICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgY2VsbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZGF0YSBhdHRyaWJ1dGUgdG8gaWRlbnRpZnkgdGhlIGNvbHVtblxyXG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqO1xyXG4gICAgICAgIGh1bWFuQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIC8vIEFueXRoaW5nIGNsaWNrYWJsZSBzaG91bGQgYmUgYSBidXR0b24hIVxyXG4gICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgZGF0YSBhdHRyaWJ1dGUgdG8gaWRlbnRpZnkgdGhlIGNvbHVtblxyXG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIGNyZWF0ZSBhIGJ1dHRvbiBmb3IgYWRkIHNoaXBzIGFuZCBmdW5jdGlvblxyXG4gICAgYWRkaW5nU2hpcHModHVybiwgcGxheWVyQ29tcHV0ZXIpO1xyXG4gIH07XHJcbiAgaW5pdGlhbFNjcmVlbigpO1xyXG5cclxuICBjb25zdCB1cGRhdGVTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICAvLyBnZXQgdGhlIG5ld2VzdCB2ZXJzaW9uIG9mIHRoZSBib2FyZCBhbmQgcGxheWVyIHR1cm5cclxuICAgIGNvbnN0IGJvYXJkUmVhbCA9IGdhbWUuYm9hcmRSZWFsKCk7XHJcbiAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZ2FtZS5ib2FyZENvbXB1dGVyKCk7XHJcbiAgICBjb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0SHVtYW5QbGF5ZXIoKTtcclxuICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlclBsYXllcigpO1xyXG5cclxuICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQsIGJvYXJkUmVhbCwgcGxheWVySHVtYW4pO1xyXG4gICAgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQsIGJvYXJkQ29tcHV0ZXIsIHBsYXllckNvbXB1dGVyKTtcclxuICAgIHVwZGF0ZVNjb3JlKHBsYXllckh1bWFuLCBwbGF5ZXJDb21wdXRlcik7XHJcblxyXG4gICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgIC8vIERpc3BsYXkgcGxheWVyJ3MgdHVyblxyXG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xyXG4gICAgLy8gY2hlY2sgYW5kIGF0dGFja3MgaXMgdGhlcmUgbm8gd2lubmVyXHJcbiAgICBsZXQgaXNUaGVyZUFXaW5uZXIgPSBnYW1lLmlzVGhlcmVBV2lubmVyKCk7XHJcbiAgICBzd2l0Y2ggKGlzVGhlcmVBV2lubmVyID09PSBmYWxzZSkge1xyXG4gICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgaWYgKGFjdGl2ZVBsYXllci50eXBlID09PSBcIkNPTVBVVEVSIFBsYXllclwiKSB7XHJcbiAgICAgICAgICBhZGREaXYoYm9hcmREaXYpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChjb21wdXRlckF0dGFjaywgNDAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIGFjdGl2ZSBwbGF5ZXIgaXMgSHVtYW4gbmVlZCB3YWl0IGZvciBhIGNsaWNrXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgLy8gZ2FtZSBvdmVyIC0gZGlzYWJsZSBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBhZGQgYSBhZGQtc2hpcHMgQnV0dG9uIGFuZCB0aGUgZXZlbnRsaXN0ZW5lclxyXG4gIGZ1bmN0aW9uIGFkZGluZ1NoaXBzKHR1cm4sIHBsYXllckNvbXB1dGVyKSB7XHJcbiAgICBjb25zdCBhZGRTaGlwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBhZGRTaGlwc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRTaGlwc0Rpdi5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgYWRkU2hpcHNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRTaGlwc0RpdlwiKTtcclxuICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoXCJhZGRzaGlwc1wiKTtcclxuICAgIGFkZFNoaXBzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRTaGlwQnV0dG9uXCIpO1xyXG4gICAgYWRkU2hpcHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBTSElQU1wiO1xyXG5cclxuICAgIGFkZFNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNyZWF0ZUNvbnRhaW5lcnModHVybik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhZGRTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBhZGRTaGlwcyhnYW1lLCBodW1hbkJvYXJkLCBib2FyZERpdiwgdHVybiwgY29tcHV0ZXJCb2FyZCwgcGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKFwiYWRkc2hpcHNcIik7XHJcbiAgICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdHVybi5hcHBlbmRDaGlsZChhZGRTaGlwc0Rpdik7XHJcbiAgICBhZGRTaGlwc0Rpdi5hcHBlbmRDaGlsZChhZGRTaGlwc0J1dHRvbik7XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBib2FyZCBjb21wdXRlciBmb3IgSHVtYW4gYXR0YWNrc1xyXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlckJvYXJkKGUpIHtcclxuICAgIHN3aXRjaCAoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS50eXBlID09PSBcIkhVTUFOIFBsYXllclwiKSB7XHJcbiAgICAgIGNhc2UgdHJ1ZToge1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcclxuICAgICAgICAvLyBNYWtlIHN1cmUgSSd2ZSBjbGlja2VkIGEgY29sdW1uIGFuZCBub3QgdGhlIGdhcHMgaW4gYmV0d2VlblxyXG4gICAgICAgIGlmICghc2VsZWN0ZWRSb3cpIHJldHVybjtcclxuICAgICAgICBnYW1lLnBsYXlSb3VuZChOdW1iZXIoc2VsZWN0ZWRSb3cpLCBOdW1iZXIoc2VsZWN0ZWRDb2x1bW4pKTtcclxuICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgd2FpdFR1cm4udGV4dENvbnRlbnQgPSBcIndhaXQgeW91ciB0dXJuXCIudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB3YWl0VHVybi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcclxuICAgICAgICB3YWl0VHVybi5jbGFzc0xpc3QuYWRkKFwid2FpdFR1cm5cIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB3YWl0VHVybi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgICB3YWl0VHVybi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKTtcclxuICAgICAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5yZW1vdmUoXCJ3YWl0VHVyblwiKTtcclxuICAgICAgICB9LCA4MDApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXJCb2FyZCk7XHJcblxyXG4gIC8vIEFkZCBhIG1lc3NhZ2UgdG8gYXZvaWQgY2xpY2sgaW4gaHVtYW4gYm9hcmRcclxuICBmdW5jdGlvbiBub0ZpcmVUb0ZyaWVuZCgpIHtcclxuICAgIHdhaXRUdXJuLnRleHRDb250ZW50ID0gXCJCRSBDQVJFRlVMLiBkb24ndCBzaG9vdCB5b3VyIGFsbGllc1wiLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB3YWl0VHVybi5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheVwiKTtcclxuICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5hZGQoXCJub0ZpcmVcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd2FpdFR1cm4udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB3YWl0VHVybi5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheVwiKTtcclxuICAgICAgd2FpdFR1cm4uY2xhc3NMaXN0LnJlbW92ZShcIm5vRmlyZVwiKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgfVxyXG4gIGh1bWFuQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5vRmlyZVRvRnJpZW5kKTtcclxuXHJcbiAgLy8gdGhpcyBhdHRhY2sncyBmdW5jdGlvbiBjb25zaWRlciBhZGphY2VudHMgd2hlbiBnb3QgYSBoaXRcclxuICBmdW5jdGlvbiBjb21wdXRlckF0dGFjaygpIHtcclxuICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICBsZXQgYWRqID0gMDtcclxuICAgIGxldCBjb29yZCA9IFtdO1xyXG4gICAgbGV0IGFycmF5QWxsQXR0YWNrID0gZ2FtZS5nZXRIdW1hblBsYXllcigpLmdhbWVib2FyZFtcImFycmF5QWxsQXR0YWNrXCJdO1xyXG4gICAgd2hpbGUgKGNoZWNrID09PSB0cnVlKSB7XHJcbiAgICAgIGlmIChhcnJheUFkamFjZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGFkaiA9IGFycmF5QWRqYWNlbnQuc2hpZnQoKTtcclxuICAgICAgICBjb29yZCA9IHRvdGFsQ2VsbHMuYXQoYWRqKS5zcGxpdChcIixcIik7XHJcbiAgICAgICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSwgY29vcmRbMV1dO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICBhZGogPSB0b3RhbENlbGxzLmluZGV4T2YoY29vcmQudG9TdHJpbmcoKSk7XHJcbiAgICAgIH1cclxuICAgICAgY2hlY2sgPSBhcnJheUFsbEF0dGFjay5oYXMoY29vcmQudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbiAgICBsZXQgY2VsbCA9IGZyb21Db29yZGluYXRlc3RvQ2VsbChjb29yZCk7XHJcbiAgICBnYW1lLnBsYXlSb3VuZENvbXB1dGVyKGNlbGxbMF0sIGNlbGxbMV0pO1xyXG4gICAgLy8gaWYgZ290IGEgaGl0IGxvb2sgZm9yIGFkamFjZW50c1xyXG4gICAgbGV0IGJvYXJkUmVhbCA9IGdhbWUuYm9hcmRSZWFsKCk7XHJcbiAgICBpZiAoYm9hcmRSZWFsW2NlbGxbMF1dW2NlbGxbMV1dLnZhbHVlID09PSA1KSB7XHJcbiAgICAgIGxldCBhcnJheVRlbXAgPSBhZGphY2VudC5nZXQoYWRqKTtcclxuICAgICAgYXJyYXlUZW1wLm1hcCgoeCkgPT4gYXJyYXlBZGphY2VudC5wdXNoKHgpKTtcclxuICAgICAgaWYgKGFycmF5QWRqYWNlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGFycmF5QWRqYWNlbnQgPSBbXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gIH1cclxuXHJcbiAgLy8gYWRkIGEgcmVzdWx0IGdhbWVcclxuICBjb25zdCByZXN1bHRHYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXN1bHRHYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJyZXN1bHRNZXNzYWdlXCIpO1xyXG4gIGNvbnN0IGFjdGl2ZU1lc3NhZ2UgPSBnYW1lLmdldEdhbWVNZXNzYWdlKCk7XHJcbiAgY29uc3QgZ2V0TWVzc2FnZSA9IChhY3RpdmVNZXNzYWdlKSA9PiB7XHJcbiAgICBhY3RpdmVNZXNzYWdlID0gZ2FtZS5nZXRHYW1lTWVzc2FnZSgpO1xyXG4gICAgcmVzdWx0R2FtZURpdi50ZXh0Q29udGVudCA9IGFjdGl2ZU1lc3NhZ2U7XHJcbiAgfTtcclxuICByZXN1bHQuYXBwZW5kQ2hpbGQocmVzdWx0R2FtZURpdik7XHJcblxyXG4gIC8vIGFkZCBhIGRpdiB3aXRoIGNvdW50IGRvd24gZm9yIGNvbXB1dGVyIGF0dGFjayBhbmQgcmVtb3ZlIGl0XHJcbiAgZnVuY3Rpb24gYWRkRGl2KGFyZykge1xyXG4gICAgY29uc3QgYXR0YWNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBhdHRhY2tNZXNzYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXR0YWNrTWVzc2FnZVwiKTtcclxuICAgIGF0dGFja01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImF0dGFja01lc3NhZ2VcIik7XHJcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRleHRcIik7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6bGlnaHR5ZWxsb3c7XCIpO1xyXG4gICAgdGV4dC5pbm5lclRleHQgPSBcIlRoZSBjb21wdXRlciB3aWxsIGF0dGFjayBvbiBcIi50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvdW50XCIpO1xyXG4gICAgdGV4dDEuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJmb250LXNpemU6MS4xcmVtOyBjb2xvcjpyZWQ7XCIpO1xyXG4gICAgbGV0IG51bWJlciA9IDQ7XHJcbiAgICBhdHRhY2tNZXNzYWdlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgYXR0YWNrTWVzc2FnZS5hcHBlbmRDaGlsZCh0ZXh0MSk7XHJcbiAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChjb3VudCwgMTAwMCk7XHJcbiAgICBmdW5jdGlvbiBjb3VudCgpIHtcclxuICAgICAgbnVtYmVyID0gbnVtYmVyIC0gMTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3VudFwiKS5pbm5lclRleHQgPSBgID0+ICR7bnVtYmVyfWA7XHJcbiAgICAgIGlmIChudW1iZXIgPD0gMCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dFwiKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRcIikuaW5uZXJUZXh0ID0gXCJET05FXCI7XHJcbiAgICAgICAgc2V0VGltZW91dChyZW1vdmVEaXYsIDEwMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBhcmcuYXBwZW5kQ2hpbGQoYXR0YWNrTWVzc2FnZSk7XHJcbiAgfVxyXG4gIC8vIHJlbW92ZSB0aGUgY291bnQgZG93biBtZXNzYWdlIGRpdlxyXG4gIGZ1bmN0aW9uIHJlbW92ZURpdigpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXR0YWNrTWVzc2FnZVwiKTtcclxuICAgIGRpdi5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIC8vIGV2ZW50bGlzdGVuZXIgZm9yIHJlc2V0XHJcbiAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld0RvYyk7XHJcblxyXG4gIGZ1bmN0aW9uIG5ld0RvYygpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcblxyXG4gIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodHVybik7XHJcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZERpdik7XHJcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XHJcbiAgdHVybi5hcHBlbmRDaGlsZCh0dXJuRGl2KTtcclxuICB0dXJuLmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcblxyXG4gIGJvYXJkRGl2LmFwcGVuZENoaWxkKGh1bWFuQm9hcmQpO1xyXG4gIGJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xyXG5cclxuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHdhaXRUdXJuKTtcclxufVxyXG5cclxuZXhwb3J0IHsgc2NyZWVuQ29udHJvbGxlciB9O1xyXG4iLCIvLyBhIGNsYXNzIFNoaXAgXHJcbmNsYXNzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpeyAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gdmFsdWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSAwO1xyXG4gICAgICAgIHRoaXMuYmVlblN1bmsgPSBmYWxzZTsgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpdChoaXRzPXRoaXMubnVtYmVyT2ZIaXRzKXtcclxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyA9IGhpdHMgKyAxIDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gdGhpcy5pc1N1bmsoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJPZkhpdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlzU3VuayhoaXRzPXRoaXMubnVtYmVyT2ZIaXRzKXtcclxuICAgICAgICBzd2l0Y2goaGl0cz09PXRoaXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZW5TdW5rO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtTaGlwfTtcclxuIiwiZnVuY3Rpb24gc2hvd0Vycm9yKGFyZzEsYXJnMil7XHJcbi8vIGFyZzEgaXMgdGhlIGRpdiAtIGFyZzIgaXMgdGhlIG1lc3NhZ2UgZm9yIHRoZSB0eXBlIG9mIGVycm9yXHJcbiAgICAgIGxldCBpZCA9IGFyZzEuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBpbnB1dEVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgaW5wdXRFcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgaW5wdXRFcnJvci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgIGlucHV0RXJyb3Iuc2V0QXR0cmlidXRlKCdpZCcsYCR7aWR9ZXJyb3JgKTtcclxuICAgICAgIGlucHV0RXJyb3Iuc2V0QXR0cmlidXRlKCAnYXJpYS1saXZlJywncG9saXRlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnRleHRDb250ZW50ID0gYXJnMjtcclxuICAgIFxyXG4gICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGFyZzEucGFyZW50Tm9kZTtcclxuICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFcnJvcik7ICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dFcnJvciB9OyIsImltcG9ydCB7IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGFyZzEsYXJnMixhcmczKXtcclxuICAgXHJcbiAgICBsZXQgYm9hcmREaXYgPSBhcmcxO1xyXG4gICAgbGV0IGJvYXJkQ29udGVudCA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcblxyXG4gICAgY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gICAgXHJcbiAgICBjZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSkgcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnJzsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTmFtZT0nJztcclxuICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbmxldCBhcnJheVNoaXBzID0gW107XHJcbiAgICBpZihhcmczICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFycmF5U2hpcHMgPSBhcmczWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXTtcclxuICAgIH1cclxuXHJcbmxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xyXG5cclxuYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZWxlbWVudFsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBlbGVtZW50Wydjb29yZGluYXRlcyddLmZvckVhY2goICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgYXJyYXlJbmRleE5vZGVBbmRDb29yZCA9IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCk7XHJcbmxldCBpbmRleGVzU3Vua3MgPSBbXTtcclxuY29vcmRTaGlwc1N1bmsuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgIGFycmF5SW5kZXhOb2RlQW5kQ29vcmQuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICBpZih4WzFdWzBdPT09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5pbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgbGV0IGNlbGwgPSBjZWxsc2luQm9hcmRbZWxlbWVudF07XHJcbiAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFN1bmsnKTtcclxuICAgY2VsbC50ZXh0Q29udGVudCA9ICdTVU5LJztcclxufSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkKGFyZyl7XHJcbi8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG5sZXQgYm9hcmREaXYgPSBhcmc7XHJcbmxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG5jb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcblxyXG5jZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gIHguY2xhc3NOYW1lID0gJyc7ICAgICAgIC8vIHRvIGNsZWFyIHByZXZpb3VzIGNsYXNzXHJcbiAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG59KVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7dXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZH07IiwiZnVuY3Rpb24gdXBkYXRlU2NvcmUoYXJnMSxhcmcyKXtcclxuIC8qIGFyZzEgaXMgdGhlIHBsYXllckh1bWFuICBhcmcyIGlzIHRoZSBwbGF5ZXJDb21wdXRlciAqL1xyXG5jb25zdCBwbGF5ZXJIdW1hbj0gYXJnMTtcclxuY29uc3QgcGxheWVyQ29tcHV0ZXI9IGFyZzI7XHJcblxyXG4vLyB1cGRhdGUgdGhlIGh1bWFuIHNjb3JlXHJcbmNvbnN0IGh1bWFuU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tc2NvcmUnKTtcclxuY29uc3QgcEh1bWFuU2NvcmUgPSBodW1hblNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BpY3R1cmUnKTtcclxuY29uc3QgdEh1bWFuU2NvcmUgPSBodW1hblNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcclxuXHJcbmNvbnN0IHBpY3R1cmVzSW5IdW1hblNjb3JlID0gWy4uLnBIdW1hblNjb3JlXTtcclxuY29uc3QgaXRlcmF0b3JQID0gcGljdHVyZXNJbkh1bWFuU2NvcmUuZW50cmllcygpO1xyXG5cclxuY29uc3QgdGV4dEluSHVtYW5TY29yZSA9IFsuLi50SHVtYW5TY29yZV07XHJcbmNvbnN0IGl0ZXJhdG9yVCA9IHRleHRJbkh1bWFuU2NvcmUuZW50cmllcygpO1xyXG5cclxucGljdHVyZXNJbkh1bWFuU2NvcmUuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvclAubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTsgXHJcbiAgICBsZXQgc3VuayA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXV1bJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ107XHJcbiAgICBzd2l0Y2goc3Vuaz09PXRydWUpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnc2hpcFN1bmsnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pXHJcblxyXG50ZXh0SW5IdW1hblNjb3JlLmZvckVhY2goKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gaXRlcmF0b3JULm5leHQoKS52YWx1ZTtcclxuICAgIGxldCB4ID0gaW5kZXhbMV07XHJcbiAgICBzd2l0Y2ggKGluZGV4WzBdPT09MSkge1xyXG4gICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhdGUgPSBNYXRoLnRydW5jKChwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAtIHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYXJyYXlNaXNzZWQnXS5zaXplKVxyXG4gICAgICAgICAgICAgICAgICAgICAvcGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhcnJheUFsbEF0dGFjayddLnNpemUqMTAwKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgc3VjY2VzcyByYXRlOiAke3JhdGV9JWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChpbmRleFswXSA+IDEpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXS0yXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXS0yXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufSlcclxuXHJcbi8vIHVwZGF0ZSB0aGUgY29tcHV0ZXIgc2NvcmVcclxuXHJcbmNvbnN0IGNvbXB1dGVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItc2NvcmUnKTtcclxuY29uc3QgcENvbXB1dGVyU2NvcmUgPSBjb21wdXRlclNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BpY3R1cmUnKTtcclxuY29uc3QgdENvbXB1dGVyU2NvcmUgPSBjb21wdXRlclNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcclxuXHJcbmNvbnN0IHBpY3R1cmVzSW5Db21wdXRlclNjb3JlID0gWy4uLnBDb21wdXRlclNjb3JlXTtcclxuY29uc3QgaXRlcmF0b3JDUCA9IHBpY3R1cmVzSW5Db21wdXRlclNjb3JlLmVudHJpZXMoKTtcclxuXHJcbmNvbnN0IHRleHRJbkNvbXB1dGVyU2NvcmUgPSBbLi4udENvbXB1dGVyU2NvcmVdO1xyXG5jb25zdCBpdGVyYXRvckNUID0gdGV4dEluQ29tcHV0ZXJTY29yZS5lbnRyaWVzKCk7XHJcblxyXG5waWN0dXJlc0luQ29tcHV0ZXJTY29yZS5mb3JFYWNoKCgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yQ1AubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTsgXHJcbiAgICBsZXQgc3VuayA9IHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXV1bJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ107XHJcbiAgICBzd2l0Y2goc3Vuaz09PXRydWUpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICB4LmNsYXNzTmFtZT0nJztcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ3NoaXBTdW5rJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KVxyXG5cclxudGV4dEluQ29tcHV0ZXJTY29yZS5mb3JFYWNoKCgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yQ1QubmV4dCgpLnZhbHVlO1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTtcclxuICAgIHN3aXRjaCAoaW5kZXhbMF09PT0xKSB7XHJcbiAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgaWYgKHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF0ZSA9IE1hdGgudHJ1bmMoKHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgIC0gcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhcnJheU1pc3NlZCddLnNpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgIC9wbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZSoxMDApO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZX0lYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGluZGV4WzBdID4gMSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdLTJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdLTJdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHt1cGRhdGVTY29yZX07IiwiaW1wb3J0IHsgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfSBmcm9tIFwiLi9hdXhpbGlhcnktZnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDZWxscyhhcmcxLGFyZzIsYXJnMyl7XHJcblxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIFxyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXsgICBcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxTaGlwQWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgU0hJUGA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTmFtZT0nJztcclxuICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGFycmF5U2hpcHMgPSBbXTtcclxuICAgIGlmKGFyZzMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYXJyYXlTaGlwcyA9IGFyZzNbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddO1xyXG4gICAgfVxyXG5cclxubGV0IGNvb3JkU2hpcHNTdW5rID0gW107XHJcblxyXG5hcnJheVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHN3aXRjaChlbGVtZW50WydzaGlwRGV0YWlscyddWydiZWVuU3VuayddKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIGVsZW1lbnRbJ2Nvb3JkaW5hdGVzJ10uZm9yRWFjaCggKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBhcnJheUluZGV4Tm9kZUFuZENvb3JkID0gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKTtcclxubGV0IGluZGV4ZXNTdW5rcyA9IFtdO1xyXG5jb29yZFNoaXBzU3Vuay5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgYXJyYXlJbmRleE5vZGVBbmRDb29yZC5mb3JFYWNoKCh4KT0+e1xyXG4gICAgICAgIGlmKHhbMV1bMF09PT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaW5kZXhlc1N1bmtzLnB1c2goeFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmluZGV4ZXNTdW5rcy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICBjb25zb2xlLmxvZyhjZWxsc2luQm9hcmRbZWxlbWVudF0pO1xyXG4gICBsZXQgY2VsbCA9IGNlbGxzaW5Cb2FyZFtlbGVtZW50XTtcclxuICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsU3VuaycpO1xyXG4gICBjZWxsLnRleHRDb250ZW50ID0gJ1NVTksnO1xyXG59KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVpbml0aWFsaXplRm9ybWF0Q2VsbHMoYXJnKXtcclxuIC8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG4gbGV0IGJvYXJkRGl2ID0gYXJnO1xyXG4gbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG4gY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gXHJcbiBjZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gICB4LmNsYXNzTmFtZSA9ICcnOyAgICAgICAvLyB0byBjbGVhciBwcmV2aW91cyBjbGFzc1xyXG4gICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gfSlcclxufSBcclxuXHJcblxyXG5leHBvcnQge3VwZGF0ZUNlbGxzLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc307IiwiaW1wb3J0ICcuL3N0eWxlLXJlc2V0LmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS1iYXNlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS1tb2JpbGUuY3NzJztcclxuaW1wb3J0ICcuL3N0eWxlLXRhYmxldC5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgc2NyZWVuQ29udHJvbGxlciB9IGZyb20gJy4vY29tcG9uZW50cy9zY3JlZW4tY29udHJvbGxlci5qcyc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7IFxyXG4gICAgXHJcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyJyk7XHJcbiAgICBzY3JlZW5Db250cm9sbGVyKGdhbWVDb250YWluZXIpO1xyXG5cclxuICAgXHJcbiAgICByZXR1cm4gZ2FtZUNvbnRhaW5lcjtcclxuICB9XHJcbiAgXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
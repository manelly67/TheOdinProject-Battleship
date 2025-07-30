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
  min-width: 360px;
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

.gameOver {
  padding: 0;
  z-index: 1;
  display: flex;
  place-items: center;
  width: 190px;
  height: 150px;
  font-size: 2rem;
  color: white;
  background-color: #545e75;
  border-radius: 5px 5px 5px 5px;
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
  font-size: 1.7rem;
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
  background-color: #353a45;
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
`, "",{"version":3,"sources":["webpack://./src/style-base.css"],"names":[],"mappings":"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","sourcesContent":["/* cells - buttons - images*/\nbody {\n  min-width: 360px;\n  min-height: 100vh;\n}\n\nmain {\n  background-color: #353a45;\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 0.7rem;\n  border: 1px solid grey;\n  background-color: lightyellow;\n  cursor: pointer;\n  max-width: 100%;\n}\n\n.cellShipAdded {\n  background-color: #5be734;\n  border-color: #84f363;\n  color: #207d0e;\n}\n\n.cellMissed {\n  background-color: #bdf1e8;\n  border-color: #effefb;\n  color: #0b6461;\n}\n\n.cellHit {\n  background-color: #fea173;\n  border-color: #ffc8a9;\n  color: #9b1b11;\n}\n\n.cellSunk {\n  background-color: black;\n  border-color: #3d3d3d;\n  color: white;\n}\n\n[class^=\"cell\"]:hover {\n  animation: opacity 1.5s both;\n}\n\n[class^=\"cell\"]:active {\n  background-color: #545e75;\n}\n\n@keyframes opacity {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.headCell {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  text-align: center;\n  font-size: 1rem;\n  border: 1px solid grey;\n  color: lightyellow;\n  background: #353a45;\n  cursor: pointer;\n}\n\n/* buttons */\n.hide {\n  display: none;\n  opacity: 0%;\n}\n\n.addShipButton {\n  color: black;\n  line-height: 2rem;\n  padding-left: 10px;\n  padding-top: 15px;\n  padding-right: 10px;\n  padding-bottom: 15px;\n  border-radius: 10px;\n  font-family: Georgia, serif;\n  font-weight: normal;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  background-image: linear-gradient(\n    to right,\n    rgb(105, 117, 142) 0%,\n    rgb(214, 217, 225) 100%\n  );\n  box-shadow: #edeef1 2px 2px 4px 2px;\n  border: 2px solid #353945;\n  display: inline-block;\n\n  transition: transform 250ms ease-in-out;\n}\n.addShipButton:hover {\n  background: #545e75;\n  color: white;\n  transform: scale(1.05);\n}\n.addShipButton:active {\n  background: #454d5f;\n  color: white;\n}\n\n.resetButton {\n  color: #012e32;\n  line-height: 13px;\n  padding: 15px;\n  border-radius: 10px;\n  font-family: Georgia, serif;\n  font-weight: normal;\n  text-decoration: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  background-image: linear-gradient(to right, #b9fef6 0%, #09c3c1 100%);\n  box-shadow: #edeef1 2px 2px 4px 2px;\n  border: 2px solid #353945;\n  display: inline-block;\n  transform: translateY(-100%);\n  transition: transform 250ms ease-in-out;\n}\n.resetButton:hover {\n  background: #545e75;\n  color: white;\n  transform: scale(1.05);\n  transform: translateY(-100%);\n}\n.resetButton:active {\n  background: #454d5f;\n  color: white;\n}\n\n/* score elements */\n\n.scoreTitle {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  color: #3c4350;\n  font-weight: bold;\n  font-size: 0.9rem;\n}\n\n.shipFloat {\n  background-image: url(\"./img/ship.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.shipSunk {\n  background-image: url(\"./img/ship-sunk.jpg\");\n  background-size: cover;\n  background-position: center;\n  border-bottom: 2px solid #09c3c1;\n}\n\n/* This is the style of our error messages */\n.error {\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  font-size: 1rem;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n  box-sizing: border-box;\n}\n\n.error.active {\n  padding: 0.3em;\n}\n\n/* display base */\n\n.container {\n  display: grid;\n  grid-template-columns: 0.5fr 6fr 2fr;\n  grid-template-rows: 1fr 6fr 1fr;\n  max-height: 100%;\n}\n\n.turn {\n  grid-row: 1 / 2; /* esta linea se asocia al grid del container */\n  grid-column: 2 / 4; /* esta linea se asocia al grid del container */\n  display: grid;\n  grid-template-columns: 2fr 1fr 2fr 3fr 1fr;\n  grid-template-rows: 1fr;\n}\n\n.turnDiv {\n  grid-column: 1 / 2; /* grid turn*/\n  grid-row: 1 / 2;\n  font-size: 1.7rem;\n  color: lightyellow;\n}\n\n.turn {\n  position: relative;\n}\n\n.display {\n  padding: 0;\n  z-index: 1;\n  display: flex;\n  place-items: center;\n  width: 100px;\n  height: 100px;\n  font-size: 1rem;\n  color: white;\n  background-color: #900;\n  border-radius: 0 0 5px 5px;\n  box-sizing: border-box;\n}\n\n.gameOver {\n  padding: 0;\n  z-index: 1;\n  display: flex;\n  place-items: center;\n  width: 190px;\n  height: 150px;\n  font-size: 2rem;\n  color: white;\n  background-color: #545e75;\n  border-radius: 5px 5px 5px 5px;\n  box-sizing: border-box;\n}\n\n.addships {\n  grid-column: 2 / 3; /* grid turn*/\n  grid-row: 1 / 2;\n  padding-top: 1%;\n}\n\n.randomships {\n  /* grid turn*/\n  grid-column: 3 / 4;\n  grid-row: 1 / 2;\n  padding-top: 1%;\n  align-items: center;\n  color: lightyellow;\n  display: flex;\n  justify-content: flex-start;\n  gap: 3px;\n}\n\n.result {\n  /* grid turn*/\n  grid-row: 1/2;\n  grid-column: 4/5;\n}\n\n.resultMessage {\n  font-size: 1.7rem;\n  font-weight: 600;\n  color: lightyellow;\n}\n\n.gridForAdd {\n  grid-column-start: 4; /* esta linea se asocia al grid del board */\n  grid-row-start: 2; /* esta linea se asocia al grid del board */\n  padding-left: 2%;\n  box-sizing: content-box;\n  height: 400px;\n  width: 120%;\n  font-size: 10px;\n  overflow-y: scroll;\n}\n\n.formInput {\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 5fr 1fr 1fr;\n}\n\n.formRadio {\n  grid-column: 1/2;\n  grid-row: 1/2;\n  background-color: #b2b9c7;\n  line-height: 2;\n}\n\n.submitButton {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n\n.board-human {\n  position: relative; /* for headers purpose */\n\n  grid-column: 2/3; /* esta linea se asocia al grid del board */\n  grid-row: 2/3; /* esta linea se asocia al grid del board */\n  display: grid;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(13, 1fr);\n  border: 5px solid black;\n  gap: 2px;\n  padding: 2px;\n  background-color: #b2b9c7;\n}\n\n.board-computer {\n  position: relative;\n\n  grid-column: 4/5; /* esta linea se asocia al grid del board */\n  grid-row: 2/3; /* esta linea se asocia al grid del board */\n  display: grid;\n  height: 100%;\n  width: 100%;\n  grid-template-columns: repeat(12, 1fr);\n  grid-template-rows: repeat(13, 1fr);\n  border: 5px solid black;\n  gap: 2px;\n  padding: 2px;\n  background-color: #b2b9c7;\n}\n\n.columnsHead {\n  position: absolute; /* in relation parent board-human*/\n  transform: translateY(-100%);\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.rowsHead {\n  position: absolute; /* in relation parent board-human*/\n  transform: translateX(-100%);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n\n.headComputer {\n  position: absolute; /* in relation parent board-computer*/\n  transform: translateY(-100%);\n  color: lightyellow;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.attackMessage {\n  grid-row: 1/2;\n  grid-column: 2/3;\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  background-color: #353a45;\n}\n\n.scoreBoard {\n  position: absolute;\n  inset: 0px;\n  max-width: 115px;\n  height: 525px;\n  margin-top: 3%;\n  margin-left: auto;\n  margin-right: 1%;\n  background-color: #edeef1;\n  border-left: 3px solid #f6f7f9;\n  border-right: 3px solid #f6f7f9;\n  border-radius: 4px;\n\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  gap: 5px;\n}\n\n.score {\n  height: 95%;\n  display: grid;\n  grid-template-columns: 3fr 2fr;\n  grid-template-rows: repeat(8, 1fr);\n}\n"],"sourceRoot":""}]);
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
    top: 3.5%;
    left: 35%;
    z-index: 1;
    background-color: #353a45;
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
    max-width: 225px;
    max-height: 249px;
  }

  .board-computer {
    max-width: 225px;
    max-height: 249px;
  }

  .scoreBoard {
    margin-top: 70px;
    width: 80px;
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
    left: 2%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #353a45;
    height: 30px;
    width: 220px;
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
`, "",{"version":3,"sources":["webpack://./src/style-mobile.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,SAAS;IACT,SAAS;IACT,UAAU;IACV,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB,EAAE,+CAA+C;IACjE,aAAa,EAAE,+CAA+C;IAC9D,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,2BAA2B;EAC7B;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,WAAW;IACX,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,UAAU;IACV,QAAQ;IACR,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,YAAY;EACd;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,iBAAiB;EACnB;AACF","sourcesContent":["@media screen and (max-width: 620px) {\n  main {\n    width: 100%;\n  }\n\n  .turn {\n    width: 100%;\n    padding-top: 45px;\n    position: relative;\n  }\n\n  .result {\n    position: fixed;\n    top: 3.5%;\n    left: 35%;\n    z-index: 1;\n    background-color: #353a45;\n  }\n\n  .waitTurn {\n    position: fixed;\n    top: 60%;\n    left: 20%;\n  }\n\n  .noFire {\n    position: fixed;\n    top: 30%;\n    left: 10%;\n  }\n\n  .randomships {\n    font-size: 0.7rem;\n  }\n\n  .board {\n    grid-column: 2/3; /* esta linea se asocia al grid del container */\n    grid-row: 2/3; /* esta linea se asocia al grid del container */\n    background-color: #454d5f;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    padding-left: 10px;\n    padding-top: 10px;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n  }\n\n  .board-human {\n    max-width: 225px;\n    max-height: 249px;\n  }\n\n  .board-computer {\n    max-width: 225px;\n    max-height: 249px;\n  }\n\n  .scoreBoard {\n    margin-top: 70px;\n    width: 80px;\n    height: 800px;\n  }\n\n  .resetButton {\n    position: absolute;\n    top: 25px;\n    left: 15px;\n    height: 25px;\n    padding: 1px 15px 1px 15px;\n  }\n\n  .addships {\n    padding: 1px 15px 1px 15px;\n  }\n\n  .board {\n    position: relative;\n    padding-top: 30px;\n  }\n\n  .attackMessage {\n    position: fixed;\n    top: 300px;\n    left: 2%;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    background-color: #353a45;\n    height: 30px;\n    width: 220px;\n  }\n\n  [class^=\"cell\"] {\n    font-size: 4px;\n    padding: 1px;\n  }\n\n  .addShipButton {\n    font-size: 0.6rem;\n    line-height: 1rem;\n    width: 70px;\n    height: 85px;\n    text-wrap: wrap;\n    padding-left: 5px;\n    padding-top: 5px;\n    padding-right: 5px;\n    padding-bottom: 5px;\n  }\n\n  picture {\n    width: 50px;\n  }\n\n  .error.active {\n    height: 90%;\n    font-size: 0.7rem;\n  }\n}\n"],"sourceRoot":""}]);
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

/* end of reset of style browser */`, "",{"version":3,"sources":["webpack://./src/style-reset.css"],"names":[],"mappings":";CACC;;;CAGA;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,kCAAkC","sourcesContent":["\n /* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video, input {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n/* end of reset of style browser */"],"sourceRoot":""}]);
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
    column-gap: 1%;
    padding-bottom: 5%;
    padding-right: 10%;
  }

  .board-human {
    max-width: 250px;
    max-height: 325px;
  }

  .board-computer {
    max-width: 250px;
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

  .result {
    position: fixed;
    top: 5%;
    left: 28%;
    z-index: 1;
    background-color: #353a45;
  }

  .attackMessage {
    position: fixed;
    top: 200px;
    left: 2%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    background-color: #353a45;
    height: 30px;
    width: 220px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style-tablet.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,gBAAgB,EAAE,+CAA+C;IACjE,aAAa,EAAE,+CAA+C;IAC9D,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,QAAQ;EACV;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,0BAA0B;EAC5B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,OAAO;IACP,SAAS;IACT,UAAU;IACV,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,UAAU;IACV,QAAQ;IACR,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,yBAAyB;IACzB,YAAY;IACZ,YAAY;EACd;AACF","sourcesContent":["@media screen and (min-width: 621px) and (max-width: 840px) {\n  main {\n    width: 100%;\n    height: 100%;\n  }\n\n  .turn {\n    width: 100%;\n    padding-top: 45px;\n  }\n\n  .randomships {\n    font-size: 0.7rem;\n  }\n\n  .board {\n    grid-column: 2/3; /* esta linea se asocia al grid del container */\n    grid-row: 2/3; /* esta linea se asocia al grid del container */\n    background-color: #454d5f;\n    height: 90%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\n    grid-template-rows: 1fr 14fr;\n    column-gap: 1%;\n    padding-bottom: 5%;\n    padding-right: 10%;\n  }\n\n  .board-human {\n    max-width: 250px;\n    max-height: 325px;\n  }\n\n  .board-computer {\n    max-width: 250px;\n    max-height: 325px;\n  }\n\n  .scoreBoard {\n    width: 85px;\n    height: 800px;\n    gap: 1px;\n  }\n\n  .score {\n    height: 90%;\n  }\n\n  .resetButton {\n    position: absolute;\n    top: 25px;\n    left: 15px;\n    height: 25px;\n    padding: 1px 15px 1px 15px;\n  }\n\n  .addships {\n    padding: 1px 15px 1px 15px;\n  }\n\n  [class^=\"cell\"] {\n    font-size: 4px;\n    padding: 1px;\n  }\n\n  picture {\n    width: 50px;\n  }\n\n  .waitTurn {\n    position: fixed;\n    top: 30%;\n    left: 40%;\n  }\n\n  .noFire {\n    position: fixed;\n    top: 30%;\n    left: 10%;\n  }\n\n  .result {\n    position: fixed;\n    top: 5%;\n    left: 28%;\n    z-index: 1;\n    background-color: #353a45;\n  }\n\n  .attackMessage {\n    position: fixed;\n    top: 200px;\n    left: 2%;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    background-color: #353a45;\n    height: 30px;\n    width: 220px;\n  }\n}\n"],"sourceRoot":""}]);
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
    column-gap: 1%;
    padding-bottom: 5%;
    padding-right: 10%;
  }

  .board-human {
    max-width: 290px;
    max-height: 390px;
  }

  .board-computer {
    max-width: 290px;
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
    column-gap: 3%;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,gBAAgB,EAAE,+CAA+C;IACjE,aAAa,EAAE,+CAA+C;IAC9D,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;AACF;;AAEA;EACE;IACE,WAAW;IACX,aAAa;EACf;;EAEA;IACE,gBAAgB,EAAE,+CAA+C;IACjE,aAAa,EAAE,+CAA+C;IAC9D,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,YAAY;EACd;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;;EAEA;IACE,eAAe;IACf,QAAQ;IACR,SAAS;EACX;AACF","sourcesContent":["@media screen and (min-width: 841px) and (max-width: 1100px) {\n  main {\n    width: 100%;\n    height: 100%;\n  }\n  .board {\n    grid-column: 2/3; /* esta linea se asocia al grid del container */\n    grid-row: 2/3; /* esta linea se asocia al grid del container */\n    background-color: #454d5f;\n    height: 90%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\n    grid-template-rows: 1fr 14fr;\n    column-gap: 1%;\n    padding-bottom: 5%;\n    padding-right: 10%;\n  }\n\n  .board-human {\n    max-width: 290px;\n    max-height: 390px;\n  }\n\n  .board-computer {\n    max-width: 290px;\n    max-height: 390px;\n  }\n\n  [class^=\"cell\"] {\n    font-size: 6px;\n    padding: 1px;\n  }\n\n  .waitTurn {\n    position: fixed;\n    top: 30%;\n    left: 60%;\n  }\n\n  .noFire {\n    position: fixed;\n    top: 30%;\n    left: 30%;\n  }\n}\n\n@media screen and (min-width: 1101px) {\n  main {\n    width: 100%;\n    height: 100vh;\n  }\n\n  .board {\n    grid-column: 2/3; /* esta linea se asocia al grid del container */\n    grid-row: 2/3; /* esta linea se asocia al grid del container */\n    background-color: #454d5f;\n    height: 90%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\n    grid-template-rows: 1fr 14fr;\n    column-gap: 3%;\n    padding-bottom: 5%;\n    padding-right: 10%;\n  }\n\n  .board-human {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n  .board-computer {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n  [class^=\"cell\"] {\n    font-size: 8px;\n    padding: 3px;\n  }\n\n  .waitTurn {\n    position: fixed;\n    top: 30%;\n    left: 60%;\n  }\n\n  .noFire {\n    position: fixed;\n    top: 30%;\n    left: 30%;\n  }\n}\n"],"sourceRoot":""}]);
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








function addShips(arg1, arg2, arg3, arg4, arg5, arg6) {
  /* arg is the game  arg2 is the div with the humanboard  
    arg3 to show the options arg4 to show random button
    arg5 is the div with the computerboard arg6 is the content computer board*/
  const game = arg1;
  const humanBoard = arg2;
  const playerHuman = game.getActivePlayer();
  const computerBoard = arg5;
  const playerComputer = arg6;

  // headers for the rows and columns of the human player board
  const divColumnsHead = document.createElement("div");
  divColumnsHead.classList.add("columnsHead");
  for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.columns; j++) {
    const cellHead = document.createElement("div");
    cellHead.classList.add("headCell");
    cellHead.textContent = _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j].toUpperCase();
    divColumnsHead.appendChild(cellHead);
  }
  arg2.appendChild(divColumnsHead);

  const divRowsHead = document.createElement("div");
  divRowsHead.classList.add("rowsHead");
  for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.rows; i++) {
    const cellHead = document.createElement("div");
    cellHead.classList.add("headCell");
    cellHead.textContent = i + 1;
    divRowsHead.appendChild(cellHead);
  }
  arg2.appendChild(divRowsHead);

  // div for add the ships in the board
  const grid = document.getElementById("gridForAdd");
  grid.classList.add("gridForAdd");
  const divForError = document.createElement("div");
  divForError.setAttribute("id", "divForError");
  divForError.setAttribute("style", "grid-row: 1 / 2; grid-column: 4 / 5;");

  const shipLength = [5, 3, 4, 6, 4, 5];

  for (let i = 1; i <= shipLength.length; ++i) {
    const form = document.createElement("form");
    form.setAttribute("id", `form${i}`);
    form.classList.add("formInput");
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", `submit${i}`);
    submitButton.textContent = `ADD N° ${i}`;
    submitButton.classList.add("submitButton");
    submitButton.classList.add("addShipButton");
    const title = document.createElement("div");
    title.setAttribute("style", "text-transform: uppercase;");
    const text = document.createElement("p");
    text.setAttribute(
      "style",
      "color:green; background-color:white; font-weight: 900; display:flex; justify-content: right;"
    );
    text.innerText = `${shipLength[i - 1]} squares longitude`;

    const radioDiv = document.createElement("div");
    radioDiv.classList.add("formRadio");
    const directionInput = document.createElement("div");
    const labelForHorizontal = document.createElement("label");
    const horizontally = document.createElement("input");
    const labelForVertical = document.createElement("label");
    const vertically = document.createElement("input");
    directionInput.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 12px"
    );
    labelForHorizontal.innerText = "left-to-right";
    labelForHorizontal.setAttribute("for", "left-to-right");
    labelForVertical.innerText = "top-to-down";
    labelForVertical.setAttribute("for", "top-to-down");
    horizontally.setAttribute("type", "radio");
    horizontally.setAttribute("id", "left-to-right");
    horizontally.setAttribute("name", "direction");
    horizontally.setAttribute("value", "left-to-right");
    vertically.setAttribute("type", "radio");
    vertically.setAttribute("id", "top-to-down");
    vertically.setAttribute("value", "top-to-down");
    vertically.setAttribute("name", "direction");

    const coordRow = document.createElement("div");
    coordRow.innerText = "ROW: ";
    const coordColumn = document.createElement("div");
    coordColumn.innerText = "COLUMN: ";

    for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.rows; ++i) {
      const rowLabel = document.createElement("label");
      const inputRow = document.createElement("input");
      rowLabel.innerText = i + 1;
      rowLabel.setAttribute("for", `row${i + 1}`);
      inputRow.setAttribute("type", "radio");
      inputRow.setAttribute("id", `row${i + 1}`);
      inputRow.setAttribute("name", "rowSelected");
      inputRow.setAttribute("value", i + 1);

      coordRow.appendChild(rowLabel);
      coordRow.appendChild(inputRow);
    }

    for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.columns; ++j) {
      const columnLabel = document.createElement("label");
      const inputColumn = document.createElement("input");
      columnLabel.innerText = _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j].toUpperCase();
      columnLabel.setAttribute("for", `column${_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j]}`);
      inputColumn.setAttribute("type", "radio");
      inputColumn.setAttribute("id", `column${_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j]}`);
      inputColumn.setAttribute("name", "columnSelected");
      inputColumn.setAttribute("value", _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j]);

      coordColumn.appendChild(columnLabel);
      coordColumn.appendChild(inputColumn);
    }

    horizontally.addEventListener("change", () => {
      (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
    });

    vertically.addEventListener("change", () => {
      (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
    });

    let directionSelected = "";
    function directionRadioValue() {
      let getSelectedValue = document.querySelector(
        'input[name="direction"]:checked'
      );

      if (getSelectedValue != null) {
        directionSelected = getSelectedValue.value;
      } else {
        (0,_show_error__WEBPACK_IMPORTED_MODULE_3__.showError)(radioDiv, "must select direction".toUpperCase());
      }

      return directionSelected;
    }

    let rowSelected = "";
    function rowRadioValue() {
      let getSelectedValue = document.querySelector(
        'input[name="rowSelected"]:checked'
      );

      if (getSelectedValue != null) {
        rowSelected = getSelectedValue.value;
      } else {
        rowSelected = 1;
      }

      return rowSelected;
    }

    let columnSelected = "";
    function columnRadioValue() {
      let getSelectedValue = document.querySelector(
        'input[name="columnSelected"]:checked'
      );

      if (getSelectedValue != null) {
        columnSelected = getSelectedValue.value;
      } else {
        columnSelected = "a";
      }

      return columnSelected;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();

      let size = shipLength[i - 1];

      let shipNumber = i;

      let direction = directionRadioValue();

      let rowSelected = rowRadioValue();

      let columnSelected = columnRadioValue();

      let coord = [Number(rowSelected), columnSelected];

      let ship = playerHuman["gameboard"].dataShips(
        coord,
        direction,
        size,
        shipNumber
      );

      if (ship !== null) {
        (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
        let newBoard = playerHuman["gameboard"].placeShipsInTheBoard(ship);
        (0,_update__WEBPACK_IMPORTED_MODULE_1__.updateCells)(humanBoard, newBoard);
        const submitReady = document.getElementById(`form${i}`);
        submitReady.remove();

        if (document.querySelectorAll(".formInput").length === 0) {
          removeAllAddShipsDiv(grid, divForRandom, divColumnsHead, divRowsHead);
          randomShipsForComputerPlayer(
            computerBoard,
            shipLength,
            playerComputer
          );
          (0,_score_board_js__WEBPACK_IMPORTED_MODULE_6__.scoreBoard)(arg3, playerHuman, playerComputer);
        }
      } else {
        (0,_show_error__WEBPACK_IMPORTED_MODULE_3__.showError)(divForError, "SELECT ANOTHER LOCATION");
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

  const divForRandom = document.createElement("div");
  divForRandom.innerText = "➥ ";
  divForRandom.classList.add("randomships");
  const buttonRandom = document.createElement("button");
  buttonRandom.innerText = "RANDOM FLEET";
  buttonRandom.classList.add("addShipButton");

  buttonRandom.addEventListener("click", () => {
    (0,_delete_div_error__WEBPACK_IMPORTED_MODULE_4__.deleteErrorMessages)();
    playerHuman["gameboard"]["allShips"] = [];
    playerHuman["gameboard"].initializeBoard();
    (0,_update__WEBPACK_IMPORTED_MODULE_1__.updateCells)(humanBoard, playerHuman["gameboard"]["board"]);
    (0,_random_ships__WEBPACK_IMPORTED_MODULE_5__.randomShips)(playerHuman["gameboard"], shipLength);
    (0,_update__WEBPACK_IMPORTED_MODULE_1__.updateCells)(humanBoard, playerHuman["gameboard"]["board"]);
    removeAllAddShipsDiv(grid, divForRandom, divColumnsHead, divRowsHead);
    randomShipsForComputerPlayer(computerBoard, shipLength, playerComputer);
    (0,_score_board_js__WEBPACK_IMPORTED_MODULE_6__.scoreBoard)(arg3, playerHuman, playerComputer);
  });

  arg4.appendChild(divForRandom);
  arg4.appendChild(divForError);
  divForRandom.appendChild(buttonRandom);
}

function removeAllAddShipsDiv(arg1, arg2, arg3, arg4) {
  // all the arguments are the divs to will be removed
  arg1.remove();
  arg2.remove();
  arg3.remove();
  arg4.remove();
}

function randomShipsForComputerPlayer(arg1, arg2, arg3) {
  /*  arg1 is the div to write the head */
  const computerBoard = arg1;
  const shipLength = arg2;
  const playerComputer = arg3;

  computerBoard.classList.remove("hide");
  computerBoard.classList.add("board-computer");

  const headComputer = document.createElement("div");
  headComputer.innerText =
    "this is your enemy ".toUpperCase() + " Click To Attack";
  headComputer.classList.add("headComputer");
  arg1.appendChild(headComputer);

  playerComputer["gameboard"].initializeBoard();
  (0,_update__WEBPACK_IMPORTED_MODULE_1__.updateCells)(computerBoard, playerComputer["gameboard"]["board"]);
  (0,_random_ships__WEBPACK_IMPORTED_MODULE_5__.randomShips)(playerComputer["gameboard"], shipLength);
  (0,_update_computer_board__WEBPACK_IMPORTED_MODULE_2__.updateCellsComputerBoard)(computerBoard, playerComputer["gameboard"]["board"]);
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

const alf_y = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];

function shiftCoordinates([value_x, value_y]) {
  /*  let [x,y] = [1,'a'];  */
  switch (alf_y.includes(value_y.toLowerCase())) {
    case true: {
      let index = alf_y.indexOf(value_y.toLowerCase());
      return [value_x - 1, index];
    }
    default:
      return null;
  }
}

function assignLocation([x, y], direction, key) {
  let arrayOfCoordinates = [];
  let initialX = x;
  let initialY = alf_y.indexOf(y.toLowerCase());
  switch (direction === "left-to-right") {
    case true:
      if (alf_y.indexOf(y.toLowerCase()) + key > columns) {
        return null;
      } else {
        for (let i = 0; i < key; ++i) {
          arrayOfCoordinates.push([x, alf_y[initialY + i]]);
        }
        return arrayOfCoordinates;
      }

    default:
      switch (direction === "top-to-down") {
        case true:
          if (initialX + key - 1 > rows) {
            return null;
          } else {
            for (let i = 0; i < key; ++i) {
              arrayOfCoordinates.push([initialX + i, y]);
            }
            return arrayOfCoordinates;
          }

        default:
          return null;
      }
  }
}

function checkCoordinates([x, y]) {
  if (x > 0 && x <= rows && alf_y.includes(y.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

function fromCelltoCoordinates(row, column) {
  /*   let [x,y] = [1,'a'];     */
  return [row + 1, alf_y[column]];
}

function fromCoordinatestoCell(coord) {
  /*  let [row,column] = [0,0]; */
  let rowSelected = coord[0] - 1;
  let columnSelected = alf_y.indexOf(coord[1].toLowerCase());
  return [Number(rowSelected), Number(columnSelected)];
}

function allCoordinatesPosibles() {
  let array = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      array.push(`${i + 1},${alf_y[j]}`);
    }
  }
  return array;
}

function relationCoordVsNodeList() {
  let array = [];
  let n = -1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      n = n + 1;
      array.push([n, [`${i + 1},${alf_y[j]}`]]);
    }
  }
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

  const container = document.createElement("div");

  container.classList.add("gridForAdd");
  container.setAttribute("id", "gridForAdd");

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
  const errorMessages = document.querySelectorAll(".error");
  /* para crear un array desde el NodeList */
  const errorMessagesArray = [...errorMessages];
  const iterator = errorMessagesArray.entries();
  errorMessagesArray.forEach(() => {
    let index = iterator.next().value;
    let x = index[1]; /* para leer el node dentro del nodeList */
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
  message = ""
) {
  let players = [new _player__WEBPACK_IMPORTED_MODULE_0__.Player(playerReal), new _player__WEBPACK_IMPORTED_MODULE_0__.Player(playerComputer)];

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
    }
  };
  const getActivePlayer = () => activePlayer;

  const boardReal = () => players[0]["gameboard"]["board"];
  const boardComputer = () => players[1]["gameboard"]["board"];

  const getComputerPlayer = () => players[1];
  const getHumanPlayer = () => players[0];

  const isThereAWinner = () => winner;

  const printNewRound = () => {
    boardReal();
    boardComputer();

    switch (winner) {
      case true:
        message = getActivePlayer().type + " WON";
        break;
      default:
        message = "";
    }
    
  };

  const getGameMessage = () => message;

  const checkForWinner = () => {
    if (
      players[0]["gameboard"].getTotalSunk() ===
      players[0]["gameboard"]["allShips"].length
    ) {
      winner = true;
    } else {
      if (
        players[1]["gameboard"].getTotalSunk() ===
        players[1]["gameboard"]["allShips"].length
      ) {
        winner = true;
      }
    }
    return winner;
  };

  const resetGame = () => {
    winner = false;
    activePlayer = players[0];
    printNewRound();
  };

  const playRound = (row, column) => {
    let board = [];
    if (winner === true) {
      resetGame();
    } else {
      let coord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.fromCelltoCoordinates)(row, column);
      let gameboard = players[1]["gameboard"];
      gameboard.recordedAttack(coord);

      checkForWinner();
      switchPlayerTurn();
      printNewRound();
    }
    return board;
  };

  const playRoundComputer = (row, column) => {
    let board = [];

    if (winner === true) {
      resetGame();
    } else {
      let coord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.fromCelltoCoordinates)(row, column);
      let gameboard = players[0]["gameboard"];
      gameboard.recordedAttack(coord);

      checkForWinner();
      switchPlayerTurn();
      printNewRound();
    }
    return board;
  };

  return {
    playRound,
    playRoundComputer,
    getActivePlayer,
    getGameMessage,
    boardReal,
    boardComputer,
    resetGame,
    getComputerPlayer,
    getHumanPlayer,
    isThereAWinner,
  };
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
  constructor() {
    this.board = this.getBoard(_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.rows, _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.columns);
    this.arrayMissed = new Set([]);
    this.arrayAllAttack = new Set([]);
    this.allShips = [];
  }

  getBoard(rows, columns, board = []) {
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(this.cell());
      }
    }
    return board;
  }

  cell() {
    let value = 0;

    return { value };
  }

  dataShips([x, y], direction, size, shipNumber) {
    let shipCoordinates = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.assignLocation)([x, y], direction, size);

    if (shipCoordinates === null) {
      return null;
    } else {
      let notAvailable = shipCoordinates.map(
        (x) =>
          this.board[(0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.shiftCoordinates)(x)[0]][(0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.shiftCoordinates)(x)[1]].value === 1
      );

      if (notAvailable.includes(true)) {
        return null;
      }

      let shipCoordinatesToString = shipCoordinates.map((x) => x.toString());
      let oneShip = {
        shipNumber: shipNumber,
        shipDetails: new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(size),
        coordinates: shipCoordinatesToString,
      };
      this.allShips.push(oneShip);
      return oneShip;
    }
  }

  placeShipsInTheBoard(oneShip) {
    let array = oneShip["coordinates"];
    let reverseString = array.map((x) => x.split(","));
    let arrayInBoard = reverseString.map((values) => (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.shiftCoordinates)(values));
    arrayInBoard.map(([x, y]) => (this.board[x][y].value = 1));
    return this.board;
  }

  recordedAttack(
    [x, y],
    callback1 = (value) => this.recordedCoord(value),
    callback2 = (value) => this.recordedMissedCoord(value)
  ) {
    if (
      !(0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.checkCoordinates)([x, y]) ||
      this.arrayAllAttack.has([x, y.toLowerCase()].toString())
    ) {
      return null;
    } else {
      let [boardX, boardY] = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.shiftCoordinates)([x, y]);

      switch (this.board[boardX][boardY].value === 0) {
        case true:
          callback1([x, y]);
          callback2([x, y]);
          this.board[boardX][boardY].value = 2;
          return this.board;
        default:
          switch (this.board[boardX][boardY].value === 1) {
            case true: {
              callback1([x, y]);
              this.board[boardX][boardY].value = 5;
              let ship = new _ship__WEBPACK_IMPORTED_MODULE_0__.Ship(1);
              for (let i = 0; i < this.allShips.length; ++i) {
                if (
                  this.allShips[i]["coordinates"].includes(
                    [x, y].toString()
                  ) === true
                ) {
                  ship = this.allShips[i]["shipDetails"];
                  ship.hit();
                  this.allShips[i]["shipDetails"] = ship;
                }
              }
              return this.board;
            }
          }
      }
    }
  }

  recordedCoord(data, set = this.arrayAllAttack) {
    set.add(data.toString());
    return set;
  }

  recordedMissedCoord(data, set = this.arrayMissed) {
    set.add(data.toString());
    return set;
  }

  getTotalSunk() {
    let totalSunk = this.allShips.reduce((total, currentItem) => {
      return currentItem["shipDetails"].beenSunk === true ? total + 1 : total;
    }, 0);
    return totalSunk;
  }

  getSnapshot() {
    let message = "";
    let totalSunk = this.getTotalSunk();

    if (totalSunk === this.allShips.length) {
      message = `All ships have been sunk`;
      return message;
    } else {
      message = `Ships that have been sunk: ${totalSunk} - Ships afloat: ${
        this.allShips.length - totalSunk
      }`;
      return message;
    }
  }

  initializeBoard() {
    for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.rows; i++) {
      for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.columns; j++) {
        this.board[i][j].value = 0;
      }
    }
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
  constructor(value) {
    this.type = value;
    this.gameboard = this.createGameboard();
  }

  createGameboard() {
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


function randomShips(arg1, arg2) {
  /* arg1 is the playerGameboard arg2 is the array with length*/

  const shipLength = arg2;
  const arrayDirection = ["left-to-right", "top-to-down"];
  const totalCells = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.allCoordinatesPosibles)();

  for (let i = 0; i < shipLength.length; ++i) {
    let ship = null;

    while (ship === null) {
      let number = randomIntFromInterval(1, totalCells.length);
      let coord = totalCells[number - 1].split(",");
      coord = [Number(coord[0]), coord[1]];
      let direction = arrayDirection[randomIntFromInterval(1, 2) - 1];
      ship = arg1.dataShips(coord, direction, shipLength[i], i + 1);
    }
    arg1.placeShipsInTheBoard(ship);
  }

  return arg1;
}

function randomCoordinates() {
  const totalCells = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.allCoordinatesPosibles)();
  let number = randomIntFromInterval(1, totalCells.length);
  let coord = totalCells[number - 1].split(",");
  coord = [Number(coord[0]), coord[1]];
  return coord;
}

function randomIntFromInterval(min, max) {
  // min and max included
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
function scoreBoard(arg1, arg2, arg3) {
  /* arg1 is the board div, arg2 is the human player object, arg3 is the computer player object */

  const gameContainer = arg1.parentElement;
  const playerHuman = arg2;
  const playerComputer = arg3;
  const scoreBoardDiv = document.createElement("aside");
  const humanScore = document.createElement("div");
  const computerScore = document.createElement("div");

  scoreBoardDiv.classList.add("scoreBoard");
  humanScore.setAttribute("style", "grid-row: 1/2;");
  humanScore.setAttribute("id", "human-score");
  humanScore.classList.add("score");
  computerScore.setAttribute("style", "grid-row: 2/3;");
  computerScore.setAttribute("id", "computer-score");
  computerScore.classList.add("score");

  const humanTitle = document.createElement("p");
  humanTitle.textContent = "COMPUTER attacks"; /* in the human board */
  humanTitle.setAttribute(
    "style",
    "grid-row:1/2;grid-column:1/3;background-color:lightyellow;"
  );
  humanTitle.classList.add("scoreTitle");

  const success = document.createElement("p");
  success.setAttribute(
    "style",
    "grid-row:2/3;grid-column:1/3;color:#09c3c1;background-color:lightyellow;font-weight:bold;"
  );
  let rate = 0; /* inicia en 0 */
  success.textContent = `success rate: ${rate}%`;

  const imgH1 = document.createElement("picture");
  const hitsH1 = document.createElement("p");
  imgH1.setAttribute("style", "grid-row:3/4;grid-column:1/2;");
  imgH1.classList.add("shipFloat");
  hitsH1.setAttribute(
    "style",
    "grid-row:3/4;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsH1.innerText = `HITS: ${playerHuman["gameboard"]["allShips"][0]["shipDetails"]["numberOfHits"]} 
                    OF ${playerHuman["gameboard"]["allShips"][0]["shipDetails"]["length"]}`;

  const imgH2 = document.createElement("picture");
  const hitsH2 = document.createElement("p");
  imgH2.setAttribute("style", "grid-row:4/5;grid-column:1/2;");
  imgH2.classList.add("shipFloat");
  hitsH2.setAttribute(
    "style",
    "grid-row:4/5;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsH2.innerText = `HITS: ${playerHuman["gameboard"]["allShips"][1]["shipDetails"]["numberOfHits"]} 
                    OF ${playerHuman["gameboard"]["allShips"][1]["shipDetails"]["length"]}`;

  const imgH3 = document.createElement("picture");
  const hitsH3 = document.createElement("p");
  imgH3.setAttribute("style", "grid-row:5/6;grid-column:1/2;");
  imgH3.classList.add("shipFloat");
  hitsH3.setAttribute(
    "style",
    "grid-row:5/6;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsH3.innerText = `HITS: ${playerHuman["gameboard"]["allShips"][2]["shipDetails"]["numberOfHits"]} 
                    OF ${playerHuman["gameboard"]["allShips"][2]["shipDetails"]["length"]}`;

  const imgH4 = document.createElement("picture");
  const hitsH4 = document.createElement("p");
  imgH4.setAttribute("style", "grid-row:6/7;grid-column:1/2;");
  imgH4.classList.add("shipFloat");
  hitsH4.setAttribute(
    "style",
    "grid-row:6/7;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsH4.innerText = `HITS: ${playerHuman["gameboard"]["allShips"][3]["shipDetails"]["numberOfHits"]} 
                    OF ${playerHuman["gameboard"]["allShips"][3]["shipDetails"]["length"]}`;

  const imgH5 = document.createElement("picture");
  const hitsH5 = document.createElement("p");
  imgH5.setAttribute("style", "grid-row:7/8;grid-column:1/2;");
  imgH5.classList.add("shipFloat");
  hitsH5.setAttribute(
    "style",
    "grid-row:7/8;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsH5.innerText = `HITS: ${playerHuman["gameboard"]["allShips"][4]["shipDetails"]["numberOfHits"]} 
                    OF ${playerHuman["gameboard"]["allShips"][4]["shipDetails"]["length"]}`;

  const imgH6 = document.createElement("picture");
  const hitsH6 = document.createElement("p");
  imgH6.setAttribute("style", "grid-row:8/9;grid-column:1/2;");
  imgH6.classList.add("shipFloat");
  hitsH6.setAttribute(
    "style",
    "grid-row:8/9;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsH6.innerText = `HITS: ${playerHuman["gameboard"]["allShips"][5]["shipDetails"]["numberOfHits"]} 
                    OF ${playerHuman["gameboard"]["allShips"][5]["shipDetails"]["length"]}`;

  const computerTitle = document.createElement("p");
  computerTitle.textContent = "HUMAN attacks"; /* in the board computer */
  computerTitle.setAttribute(
    "style",
    "grid-row:1/2;grid-column:1/3;background-color:lightyellow;"
  );
  computerTitle.classList.add("scoreTitle");

  const successComp = document.createElement("p");
  successComp.setAttribute(
    "style",
    "grid-row:2/3;grid-column:1/3;color:#09c3c1;background-color:lightyellow;font-weight:bold;"
  );
  let rateComp = 0; /* inicia en 0 */
  successComp.textContent = `success rate: ${rateComp}%`;

  const imgC1 = document.createElement("picture");
  const hitsC1 = document.createElement("p");
  imgC1.setAttribute("style", "grid-row:3/4;grid-column:1/2;");
  imgC1.classList.add("shipFloat");
  hitsC1.setAttribute(
    "style",
    "grid-row:3/4;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsC1.innerText = `HITS: ${playerComputer["gameboard"]["allShips"][0]["shipDetails"]["numberOfHits"]} 
                    OF ${playerComputer["gameboard"]["allShips"][0]["shipDetails"]["length"]}`;

  const imgC2 = document.createElement("picture");
  const hitsC2 = document.createElement("p");
  imgC2.setAttribute("style", "grid-row:4/5;grid-column:1/2;");
  imgC2.classList.add("shipFloat");
  hitsC2.setAttribute(
    "style",
    "grid-row:4/5;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsC2.innerText = `HITS: ${playerComputer["gameboard"]["allShips"][1]["shipDetails"]["numberOfHits"]} 
                    OF ${playerComputer["gameboard"]["allShips"][1]["shipDetails"]["length"]}`;

  const imgC3 = document.createElement("picture");
  const hitsC3 = document.createElement("p");
  imgC3.setAttribute("style", "grid-row:5/6;grid-column:1/2;");
  imgC3.classList.add("shipFloat");
  hitsC3.setAttribute(
    "style",
    "grid-row:5/6;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsC3.innerText = `HITS: ${playerComputer["gameboard"]["allShips"][2]["shipDetails"]["numberOfHits"]} 
                    OF ${playerComputer["gameboard"]["allShips"][2]["shipDetails"]["length"]}`;

  const imgC4 = document.createElement("picture");
  const hitsC4 = document.createElement("p");
  imgC4.setAttribute("style", "grid-row:6/7;grid-column:1/2;");
  imgC4.classList.add("shipFloat");
  hitsC4.setAttribute(
    "style",
    "grid-row:6/7;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsC4.innerText = `HITS: ${playerComputer["gameboard"]["allShips"][3]["shipDetails"]["numberOfHits"]} 
                    OF ${playerComputer["gameboard"]["allShips"][3]["shipDetails"]["length"]}`;

  const imgC5 = document.createElement("picture");
  const hitsC5 = document.createElement("p");
  imgC5.setAttribute("style", "grid-row:7/8;grid-column:1/2;");
  imgC5.classList.add("shipFloat");
  hitsC5.setAttribute(
    "style",
    "grid-row:7/8;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsC5.innerText = `HITS: ${playerComputer["gameboard"]["allShips"][4]["shipDetails"]["numberOfHits"]} 
                    OF ${playerComputer["gameboard"]["allShips"][4]["shipDetails"]["length"]}`;

  const imgC6 = document.createElement("picture");
  const hitsC6 = document.createElement("p");
  imgC6.setAttribute("style", "grid-row:8/9;grid-column:1/2;");
  imgC6.classList.add("shipFloat");
  hitsC6.setAttribute(
    "style",
    "grid-row:8/9;grid-column:2/3;font-size:12px;padding-left:3px;text-align:center;"
  );
  hitsC6.innerText = `HITS: ${playerComputer["gameboard"]["allShips"][5]["shipDetails"]["numberOfHits"]} 
                    OF ${playerComputer["gameboard"]["allShips"][5]["shipDetails"]["length"]}`;

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
        cellButton.setAttribute("aria-label",`row:${i} column:${j}`);
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
        cellButton.setAttribute("aria-label",`row:${i} column:${j}`);
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
        waitTurn.textContent = "GAME OVER".toUpperCase();
        waitTurn.classList.add("gameOver");
        waitTurn.classList.add("waitTurn");
        setTimeout(() => {
          waitTurn.textContent = "";
          waitTurn.classList.remove("gameOver");
          waitTurn.classList.remove("waitTurn");
        }, 1200);
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
  constructor(value) {
    this.length = value;
    this.numberOfHits = 0;
    this.beenSunk = false;
  }

  hit(hits = this.numberOfHits) {
    this.numberOfHits = hits + 1;
    this.beenSunk = this.isSunk();
    return this.numberOfHits;
  }

  isSunk(hits = this.numberOfHits) {
    switch (hits === this.length) {
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
function showError(arg1, arg2) {
  // arg1 is the div - arg2 is the message for the type of error
  let id = arg1.getAttribute("id");

  const inputError = document.createElement("p");
  inputError.classList.add("error");
  inputError.classList.add("active");
  inputError.setAttribute("id", `${id}error`);
  inputError.setAttribute("aria-live", "polite");
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


function updateCellsComputerBoard(arg1, arg2, arg3) {
  let boardDiv = arg1;
  let boardContent = arg2;
  let arrayCells = boardDiv.querySelectorAll("button");

  const cellsinBoard = [...arrayCells];
  const iterator = cellsinBoard.entries();

  cellsinBoard.forEach(() => {
    let index = iterator.next().value;
    /* (index[0]) (index[1]) para leer el node dentro del nodeList */
    let x = index[1];
    switch (boardContent[x.dataset.row][x.dataset.column].value === 1) {
      case true:
        x.className = "";
        x.classList.add("cell");
        x.textContent = "";
        break;
      default:
        switch (boardContent[x.dataset.row][x.dataset.column].value === 0) {
          case true:
            x.className = "";
            x.classList.add("cell");
            x.textContent = "";
            break;
          default:
            switch (boardContent[x.dataset.row][x.dataset.column].value === 2) {
              case true:
                x.className = "";
                x.classList.add("cellMissed");
                x.textContent = `water`;
                break;
              default:
                switch (
                  boardContent[x.dataset.row][x.dataset.column].value === 5
                ) {
                  case true:
                    x.className = "";
                    x.classList.add("cellHit");
                    x.textContent = `HIT`;
                    break;
                  default:
                }
            }
        }
    }
  });

  let arrayShips = [];
  if (arg3 !== undefined) {
    arrayShips = arg3["gameboard"]["allShips"];
  }

  let coordShipsSunk = [];

  arrayShips.forEach((element) => {
    switch (element["shipDetails"]["beenSunk"]) {
      case true:
        element["coordinates"].forEach((x) => {
          coordShipsSunk.push(x);
        });
        break;
      case false:
        break;
    }
  });

  let arrayIndexNodeAndCoord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.relationCoordVsNodeList)();
  let indexesSunks = [];
  coordShipsSunk.forEach((element) => {
    arrayIndexNodeAndCoord.forEach((x) => {
      if (x[1][0] === element) {
        indexesSunks.push(x[0]);
      }
    });
  });

  indexesSunks.forEach((element) => {
    let cell = cellsinBoard[element];
    cell.classList.add("cellSunk");
    cell.textContent = "SUNK";
  });
}

function reinitializeFormatCellsCompBoard(arg) {
  /* arg is the div with the button cells */
  let boardDiv = arg;
  let arrayCells = boardDiv.querySelectorAll("button");
  const cellsinBoard = [...arrayCells];
  const iterator = cellsinBoard.entries();

  cellsinBoard.forEach(() => {
    let index = iterator.next().value;
    /* (index[0]) (index[1]);  */
    let x = index[1];
    x.className = ""; // to clear previous class
    x.classList.add("cell");
    x.textContent = "";
  });
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
function updateScore(arg1, arg2) {
  /* arg1 is the playerHuman  arg2 is the playerComputer */
  const playerHuman = arg1;
  const playerComputer = arg2;

  // update the human score
  const humanScore = document.getElementById("human-score");
  const pHumanScore = humanScore.querySelectorAll("picture");
  const tHumanScore = humanScore.querySelectorAll("p");

  const picturesInHumanScore = [...pHumanScore];
  const iteratorP = picturesInHumanScore.entries();

  const textInHumanScore = [...tHumanScore];
  const iteratorT = textInHumanScore.entries();

  picturesInHumanScore.forEach(() => {
    let index = iteratorP.next().value;
    /* (index[0]) (index[1]);  */
    let x = index[1];
    let sunk =
      playerHuman["gameboard"]["allShips"][index[0]]["shipDetails"]["beenSunk"];
    switch (sunk === true) {
      case true:
        x.className = "";
        x.classList.add("shipSunk");
        break;
    }
  });

  textInHumanScore.forEach(() => {
    let index = iteratorT.next().value;
    let x = index[1];
    switch (index[0] === 1) {
      case true: {
        if (playerHuman["gameboard"]["arrayAllAttack"].size > 0) {
          let rate = Math.trunc(
            ((playerHuman["gameboard"]["arrayAllAttack"].size -
              playerHuman["gameboard"]["arrayMissed"].size) /
              playerHuman["gameboard"]["arrayAllAttack"].size) *
              100
          );
          x.textContent = `success rate: ${rate}%`;
        }
        break;
      }
    }
    switch (index[0] > 1) {
      case true:
        x.textContent = `HITS: ${
          playerHuman["gameboard"]["allShips"][index[0] - 2]["shipDetails"][
            "numberOfHits"
          ]
        } 
            OF ${
              playerHuman["gameboard"]["allShips"][index[0] - 2]["shipDetails"][
                "length"
              ]
            }`;
        break;
    }
  });

  // update the computer score

  const computerScore = document.getElementById("computer-score");
  const pComputerScore = computerScore.querySelectorAll("picture");
  const tComputerScore = computerScore.querySelectorAll("p");

  const picturesInComputerScore = [...pComputerScore];
  const iteratorCP = picturesInComputerScore.entries();

  const textInComputerScore = [...tComputerScore];
  const iteratorCT = textInComputerScore.entries();

  picturesInComputerScore.forEach(() => {
    let index = iteratorCP.next().value;
    /* (index[0]) (index[1]);  */
    let x = index[1];
    let sunk =
      playerComputer["gameboard"]["allShips"][index[0]]["shipDetails"][
        "beenSunk"
      ];
    switch (sunk === true) {
      case true:
        x.className = "";
        x.classList.add("shipSunk");
        break;
    }
  });

  textInComputerScore.forEach(() => {
    let index = iteratorCT.next().value;
    let x = index[1];
    switch (index[0] === 1) {
      case true: {
        if (playerComputer["gameboard"]["arrayAllAttack"].size > 0) {
          let rate = Math.trunc(
            ((playerComputer["gameboard"]["arrayAllAttack"].size -
              playerComputer["gameboard"]["arrayMissed"].size) /
              playerComputer["gameboard"]["arrayAllAttack"].size) *
              100
          );
          x.textContent = `success rate: ${rate}%`;
        }
        break;
      }
    }
    switch (index[0] > 1) {
      case true:
        x.textContent = `HITS: ${
          playerComputer["gameboard"]["allShips"][index[0] - 2]["shipDetails"][
            "numberOfHits"
          ]
        } 
            OF ${
              playerComputer["gameboard"]["allShips"][index[0] - 2][
                "shipDetails"
              ]["length"]
            }`;
        break;
    }
  });
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


function updateCells(arg1, arg2, arg3) {
  let boardDiv = arg1;
  let boardContent = arg2;
  let arrayCells = boardDiv.querySelectorAll("button");

  const cellsinBoard = [...arrayCells];
  const iterator = cellsinBoard.entries();

  cellsinBoard.forEach(() => {
    let index = iterator.next().value;
    /* (index[0]) (index[1]);  */
    let x = index[1]; /* para leer el node dentro del nodeList */

    switch (boardContent[x.dataset.row][x.dataset.column].value === 1) {
      case true:
        x.className = "";
        x.classList.add("cellShipAdded");
        x.textContent = `SHIP`;
        break;
      default:
        switch (boardContent[x.dataset.row][x.dataset.column].value === 0) {
          case true:
            x.className = "";
            x.classList.add("cell");
            x.textContent = "";
            break;
          default:
            switch (boardContent[x.dataset.row][x.dataset.column].value === 2) {
              case true:
                x.className = "";
                x.classList.add("cellMissed");
                x.textContent = `water`;
                break;
              default:
                switch (
                  boardContent[x.dataset.row][x.dataset.column].value === 5
                ) {
                  case true:
                    x.className = "";
                    x.classList.add("cellHit");
                    x.textContent = `HIT`;
                    break;
                  default:
                }
            }
        }
    }
  });

  let arrayShips = [];
  if (arg3 !== undefined) {
    arrayShips = arg3["gameboard"]["allShips"];
  }

  let coordShipsSunk = [];

  arrayShips.forEach((element) => {
    switch (element["shipDetails"]["beenSunk"]) {
      case true:
        element["coordinates"].forEach((x) => {
          coordShipsSunk.push(x);
        });
        break;
      case false:
        break;
    }
  });

  let arrayIndexNodeAndCoord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.relationCoordVsNodeList)();
  let indexesSunks = [];
  coordShipsSunk.forEach((element) => {
    arrayIndexNodeAndCoord.forEach((x) => {
      if (x[1][0] === element) {
        indexesSunks.push(x[0]);
      }
    });
  });

  indexesSunks.forEach((element) => {
    console.log(cellsinBoard[element]);
    let cell = cellsinBoard[element];
    cell.classList.add("cellSunk");
    cell.textContent = "SUNK";
  });
}

function reinitializeFormatCells(arg) {
  /* arg is the div with the button cells */
  let boardDiv = arg;
  let arrayCells = boardDiv.querySelectorAll("button");
  const cellsinBoard = [...arrayCells];
  const iterator = cellsinBoard.entries();

  cellsinBoard.forEach(() => {
    let index = iterator.next().value;
    /* (index[0]) (index[1]);  */
    let x = index[1];
    x.className = ""; // to clear previous class
    x.classList.add("cell");
    x.textContent = "";
  });
}




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








const meta = document.createElement("meta");
meta.setAttribute("name", "description");
meta.setAttribute("content", "manelly67\'s exercise study project: Battleship within the curriculum The Odin Project");

function component() {
  const gameContainer = document.createElement("main");
  gameContainer.setAttribute("id", "container");
  gameContainer.setAttribute("translate", "no");
  (0,_components_screen_controller_js__WEBPACK_IMPORTED_MODULE_5__.screenController)(gameContainer);

  return gameContainer;
}

document.head.appendChild(meta);
document.body.appendChild(component());


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IseUJBQXlCLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyx3QkFBd0IseUJBQXlCLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyx5QkFBeUIseUJBQXlCLHVCQUF1QixXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssYUFBYSx5QkFBeUIsdUJBQXVC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OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLDRGQUFPLElBQUksNEZBQU8sVUFBVSw0RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QjdFLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNkZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSw2RkFBTyxJQUFJLDZGQUFPLFVBQVUsNkZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLWJhc2UuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS1tb2JpbGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLXRhYmxldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hZGQtc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYWRqYWNlbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYXV4aWxpYXJ5LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtY29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZS1kaXYtZXJyb3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcmFuZG9tLXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3Njb3JlLWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NjcmVlbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2hvdy1lcnJvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUtY29tcHV0ZXItYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLXNjb3JlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLWJhc2UuY3NzPzY2MWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLW1vYmlsZS5jc3M/YWZmMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtcmVzZXQuY3NzPzhiNTgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLXRhYmxldC5jc3M/Njg1MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL3NoaXAuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvc2hpcC1zdW5rLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGNlbGxzIC0gYnV0dG9ucyAtIGltYWdlcyovXG5ib2R5IHtcbiAgbWluLXdpZHRoOiAzNjBweDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYTQ1O1xufVxuXG4uY2VsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5jZWxsU2hpcEFkZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViZTczNDtcbiAgYm9yZGVyLWNvbG9yOiAjODRmMzYzO1xuICBjb2xvcjogIzIwN2QwZTtcbn1cblxuLmNlbGxNaXNzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRmMWU4O1xuICBib3JkZXItY29sb3I6ICNlZmZlZmI7XG4gIGNvbG9yOiAjMGI2NDYxO1xufVxuXG4uY2VsbEhpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWExNzM7XG4gIGJvcmRlci1jb2xvcjogI2ZmYzhhOTtcbiAgY29sb3I6ICM5YjFiMTE7XG59XG5cbi5jZWxsU3VuayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXItY29sb3I6ICMzZDNkM2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuW2NsYXNzXj1cImNlbGxcIl06aG92ZXIge1xuICBhbmltYXRpb246IG9wYWNpdHkgMS41cyBib3RoO1xufVxuXG5bY2xhc3NePVwiY2VsbFwiXTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1ZTc1O1xufVxuXG5Aa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uaGVhZENlbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gIGNvbG9yOiBsaWdodHllbGxvdztcbiAgYmFja2dyb3VuZDogIzM1M2E0NTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBidXR0b25zICovXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDAlO1xufVxuXG4uYWRkU2hpcEJ1dHRvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byByaWdodCxcbiAgICByZ2IoMTA1LCAxMTcsIDE0MikgMCUsXG4gICAgcmdiKDIxNCwgMjE3LCAyMjUpIDEwMCVcbiAgKTtcbiAgYm94LXNoYWRvdzogI2VkZWVmMSAycHggMnB4IDRweCAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG4uYWRkU2hpcEJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1NDVlNzU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cbi5hZGRTaGlwQnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM0NTRkNWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlc2V0QnV0dG9uIHtcbiAgY29sb3I6ICMwMTJlMzI7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I5ZmVmNiAwJSwgIzA5YzNjMSAxMDAlKTtcbiAgYm94LXNoYWRvdzogI2VkZWVmMSAycHggMnB4IDRweCAycHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuLnJlc2V0QnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzU0NWU3NTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xufVxuLnJlc2V0QnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM0NTRkNWY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogc2NvcmUgZWxlbWVudHMgKi9cblxuLnNjb3JlVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzNjNDM1MDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uc2hpcEZsb2F0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5zaGlwU3VuayB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA5YzNjMTtcbn1cblxuLyogVGhpcyBpcyB0aGUgc3R5bGUgb2Ygb3VyIGVycm9yIG1lc3NhZ2VzICovXG4uZXJyb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5lcnJvci5hY3RpdmUge1xuICBwYWRkaW5nOiAwLjNlbTtcbn1cblxuLyogZGlzcGxheSBiYXNlICovXG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDZmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciAxZnI7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi50dXJuIHtcbiAgZ3JpZC1yb3c6IDEgLyAyOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cbiAgZ3JpZC1jb2x1bW46IDIgLyA0OyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDJmciAzZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbn1cblxuLnR1cm5EaXYge1xuICBncmlkLWNvbHVtbjogMSAvIDI7IC8qIGdyaWQgdHVybiovXG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGNvbG9yOiBsaWdodHllbGxvdztcbn1cblxuLnR1cm4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXNwbGF5IHtcbiAgcGFkZGluZzogMDtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkwMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5nYW1lT3ZlciB7XG4gIHBhZGRpbmc6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVlNzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmFkZHNoaXBzIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyAzOyAvKiBncmlkIHR1cm4qL1xuICBncmlkLXJvdzogMSAvIDI7XG4gIHBhZGRpbmctdG9wOiAxJTtcbn1cblxuLnJhbmRvbXNoaXBzIHtcbiAgLyogZ3JpZCB0dXJuKi9cbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xuICBncmlkLXJvdzogMSAvIDI7XG4gIHBhZGRpbmctdG9wOiAxJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGdhcDogM3B4O1xufVxuXG4ucmVzdWx0IHtcbiAgLyogZ3JpZCB0dXJuKi9cbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDQvNTtcbn1cblxuLnJlc3VsdE1lc3NhZ2Uge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG4uZ3JpZEZvckFkZCB7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0OyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xuICBncmlkLXJvdy1zdGFydDogMjsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cbiAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMjAlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmZvcm1JbnB1dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xufVxuXG4uZm9ybVJhZGlvIHtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbi5zdWJtaXRCdXR0b24ge1xuICBncmlkLWNvbHVtbjogMi8zO1xuICBncmlkLXJvdzogMS8yO1xufVxuXG4uYm9hcmQtaHVtYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIGZvciBoZWFkZXJzIHB1cnBvc2UgKi9cblxuICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xuICBncmlkLXJvdzogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTMsIDFmcik7XG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICBnYXA6IDJweDtcbiAgcGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOWM3O1xufVxuXG4uYm9hcmQtY29tcHV0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZ3JpZC1jb2x1bW46IDQvNTsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cbiAgZ3JpZC1yb3c6IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgZ2FwOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcbn1cblxuLmNvbHVtbnNIZWFkIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiBpbiByZWxhdGlvbiBwYXJlbnQgYm9hcmQtaHVtYW4qL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5yb3dzSGVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogaW4gcmVsYXRpb24gcGFyZW50IGJvYXJkLWh1bWFuKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmhlYWRDb21wdXRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogaW4gcmVsYXRpb24gcGFyZW50IGJvYXJkLWNvbXB1dGVyKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5hdHRhY2tNZXNzYWdlIHtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTNhNDU7XG59XG5cbi5zY29yZUJvYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMHB4O1xuICBtYXgtd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDUyNXB4O1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZjE7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y2ZjdmOTtcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2Y2ZjdmOTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5zY29yZSB7XG4gIGhlaWdodDogOTUlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsIDFmcik7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1iYXNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEI7Ozs7R0FJQztFQUNELG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQix1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLHFFQUFxRTtFQUNyRSxtQ0FBbUM7RUFDbkMseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsdUNBQXVDO0FBQ3pDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseURBQXVDO0VBQ3ZDLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5REFBNEM7RUFDNUMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEM7O0FBRUEsNENBQTRDO0FBQzVDO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtFQUNmLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWUsRUFBRSwrQ0FBK0M7RUFDaEUsa0JBQWtCLEVBQUUsK0NBQStDO0VBQ25FLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsYUFBYTtFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsYUFBYTtFQUNqQyxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQixFQUFFLDJDQUEyQztFQUNqRSxpQkFBaUIsRUFBRSwyQ0FBMkM7RUFDOUQsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsd0JBQXdCOztFQUU1QyxnQkFBZ0IsRUFBRSwyQ0FBMkM7RUFDN0QsYUFBYSxFQUFFLDJDQUEyQztFQUMxRCxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjs7RUFFbEIsZ0JBQWdCLEVBQUUsMkNBQTJDO0VBQzdELGFBQWEsRUFBRSwyQ0FBMkM7RUFDMUQsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSxrQ0FBa0M7RUFDdEQsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCLEVBQUUsa0NBQWtDO0VBQ3RELDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0IsRUFBRSxxQ0FBcUM7RUFDekQsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixrQ0FBa0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY2VsbHMgLSBidXR0b25zIC0gaW1hZ2VzKi9cXG5ib2R5IHtcXG4gIG1pbi13aWR0aDogMzYwcHg7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYTQ1O1xcbn1cXG5cXG4uY2VsbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jZWxsU2hpcEFkZGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmU3MzQ7XFxuICBib3JkZXItY29sb3I6ICM4NGYzNjM7XFxuICBjb2xvcjogIzIwN2QwZTtcXG59XFxuXFxuLmNlbGxNaXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkZjFlODtcXG4gIGJvcmRlci1jb2xvcjogI2VmZmVmYjtcXG4gIGNvbG9yOiAjMGI2NDYxO1xcbn1cXG5cXG4uY2VsbEhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhMTczO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZjOGE5O1xcbiAgY29sb3I6ICM5YjFiMTE7XFxufVxcblxcbi5jZWxsU3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1jb2xvcjogIzNkM2QzZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuW2NsYXNzXj1cXFwiY2VsbFxcXCJdOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAxLjVzIGJvdGg7XFxufVxcblxcbltjbGFzc149XFxcImNlbGxcXFwiXTphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWU3NTtcXG59XFxuXFxuQGtleWZyYW1lcyBvcGFjaXR5IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuLmhlYWRDZWxsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBjb2xvcjogbGlnaHR5ZWxsb3c7XFxuICBiYWNrZ3JvdW5kOiAjMzUzYTQ1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBidXR0b25zICovXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG9wYWNpdHk6IDAlO1xcbn1cXG5cXG4uYWRkU2hpcEJ1dHRvbiB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBsaW5lLWhlaWdodDogMnJlbTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICB0byByaWdodCxcXG4gICAgcmdiKDEwNSwgMTE3LCAxNDIpIDAlLFxcbiAgICByZ2IoMjE0LCAyMTcsIDIyNSkgMTAwJVxcbiAgKTtcXG4gIGJveC1zaGFkb3c6ICNlZGVlZjEgMnB4IDJweCA0cHggMnB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgIzM1Mzk0NTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXG59XFxuLmFkZFNoaXBCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU0NWU3NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcbi5hZGRTaGlwQnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjNDU0ZDVmO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVzZXRCdXR0b24ge1xcbiAgY29sb3I6ICMwMTJlMzI7XFxuICBsaW5lLWhlaWdodDogMTNweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNiOWZlZjYgMCUsICMwOWMzYzEgMTAwJSk7XFxuICBib3gtc2hhZG93OiAjZWRlZWYxIDJweCAycHggNHB4IDJweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4ucmVzZXRCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzU0NWU3NTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbn1cXG4ucmVzZXRCdXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICM0NTRkNWY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIHNjb3JlIGVsZW1lbnRzICovXFxuXFxuLnNjb3JlVGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMzYzQzNTA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG4uc2hpcEZsb2F0IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWcvc2hpcC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwU3VuayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1nL3NoaXAtc3Vuay5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA5YzNjMTtcXG59XFxuXFxuLyogVGhpcyBpcyB0aGUgc3R5bGUgb2Ygb3VyIGVycm9yIG1lc3NhZ2VzICovXFxuLmVycm9yIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5MDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5lcnJvci5hY3RpdmUge1xcbiAgcGFkZGluZzogMC4zZW07XFxufVxcblxcbi8qIGRpc3BsYXkgYmFzZSAqL1xcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNmZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciAxZnI7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udHVybiB7XFxuICBncmlkLXJvdzogMSAvIDI7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0OyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMmZyIDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLnR1cm5EaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyOyAvKiBncmlkIHR1cm4qL1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBjb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi50dXJuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgcGFkZGluZzogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZ2FtZU92ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxOTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1ZTc1O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmFkZHNoaXBzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMzsgLyogZ3JpZCB0dXJuKi9cXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHBhZGRpbmctdG9wOiAxJTtcXG59XFxuXFxuLnJhbmRvbXNoaXBzIHtcXG4gIC8qIGdyaWQgdHVybiovXFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBwYWRkaW5nLXRvcDogMSU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGdhcDogM3B4O1xcbn1cXG5cXG4ucmVzdWx0IHtcXG4gIC8qIGdyaWQgdHVybiovXFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDQvNTtcXG59XFxuXFxuLnJlc3VsdE1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xcbn1cXG5cXG4uZ3JpZEZvckFkZCB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNDsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cXG4gIGdyaWQtcm93LXN0YXJ0OiAyOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcbiAgcGFkZGluZy1sZWZ0OiAyJTtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgaGVpZ2h0OiA0MDBweDtcXG4gIHdpZHRoOiAxMjAlO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4uZm9ybUlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciAxZnI7XFxufVxcblxcbi5mb3JtUmFkaW8ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOWM3O1xcbiAgbGluZS1oZWlnaHQ6IDI7XFxufVxcblxcbi5zdWJtaXRCdXR0b24ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxufVxcblxcbi5ib2FyZC1odW1hbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIGZvciBoZWFkZXJzIHB1cnBvc2UgKi9cXG5cXG4gIGdyaWQtY29sdW1uOiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXFxuICBncmlkLXJvdzogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMywgMWZyKTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcbiAgZ2FwOiAycHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOWM3O1xcbn1cXG5cXG4uYm9hcmQtY29tcHV0ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZ3JpZC1jb2x1bW46IDQvNTsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cXG4gIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxuICBnYXA6IDJweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMmI5Yzc7XFxufVxcblxcbi5jb2x1bW5zSGVhZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1odW1hbiovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5yb3dzSGVhZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1odW1hbiovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmhlYWRDb21wdXRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1jb21wdXRlciovXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5hdHRhY2tNZXNzYWdlIHtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNTNhNDU7XFxufVxcblxcbi5zY29yZUJvYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwcHg7XFxuICBtYXgtd2lkdGg6IDExNXB4O1xcbiAgaGVpZ2h0OiA1MjVweDtcXG4gIG1hcmdpbi10b3A6IDMlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDElO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVmMTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y2ZjdmOTtcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNmY3Zjk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5zY29yZSB7XFxuICBoZWlnaHQ6IDk1JTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg4LCAxZnIpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIG1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnR1cm4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5yZXN1bHQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMuNSU7XG4gICAgbGVmdDogMzUlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2E0NTtcbiAgfVxuXG4gIC53YWl0VHVybiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNjAlO1xuICAgIGxlZnQ6IDIwJTtcbiAgfVxuXG4gIC5ub0ZpcmUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiAxMCU7XG4gIH1cblxuICAucmFuZG9tc2hpcHMge1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICB9XG5cbiAgLmJvYXJkIHtcbiAgICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cbiAgICBncmlkLXJvdzogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAuYm9hcmQtaHVtYW4ge1xuICAgIG1heC13aWR0aDogMjI1cHg7XG4gICAgbWF4LWhlaWdodDogMjQ5cHg7XG4gIH1cblxuICAuYm9hcmQtY29tcHV0ZXIge1xuICAgIG1heC13aWR0aDogMjI1cHg7XG4gICAgbWF4LWhlaWdodDogMjQ5cHg7XG4gIH1cblxuICAuc2NvcmVCb2FyZCB7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICB9XG5cbiAgLnJlc2V0QnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyNXB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4O1xuICB9XG5cbiAgLmFkZHNoaXBzIHtcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcbiAgfVxuXG4gIC5ib2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICB9XG5cbiAgLmF0dGFja01lc3NhZ2Uge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMwMHB4O1xuICAgIGxlZnQ6IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYTQ1O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gIH1cblxuICBbY2xhc3NePVwiY2VsbFwiXSB7XG4gICAgZm9udC1zaXplOiA0cHg7XG4gICAgcGFkZGluZzogMXB4O1xuICB9XG5cbiAgLmFkZFNoaXBCdXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogODVweDtcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuXG4gIHBpY3R1cmUge1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG5cbiAgLmVycm9yLmFjdGl2ZSB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLW1vYmlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0IsRUFBRSwrQ0FBK0M7SUFDakUsYUFBYSxFQUFFLCtDQUErQztJQUM5RCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixVQUFVO0lBQ1YsUUFBUTtJQUNSLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XFxuICBtYWluIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAudHVybiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgLnJlc3VsdCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzLjUlO1xcbiAgICBsZWZ0OiAzNSU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNhNDU7XFxuICB9XFxuXFxuICAud2FpdFR1cm4ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNjAlO1xcbiAgICBsZWZ0OiAyMCU7XFxuICB9XFxuXFxuICAubm9GaXJlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDogMTAlO1xcbiAgfVxcblxcbiAgLnJhbmRvbXNoaXBzIHtcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxuICB9XFxuXFxuICAuYm9hcmQge1xcbiAgICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXG4gICAgZ3JpZC1yb3c6IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNWY7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgfVxcblxcbiAgLmJvYXJkLWh1bWFuIHtcXG4gICAgbWF4LXdpZHRoOiAyMjVweDtcXG4gICAgbWF4LWhlaWdodDogMjQ5cHg7XFxuICB9XFxuXFxuICAuYm9hcmQtY29tcHV0ZXIge1xcbiAgICBtYXgtd2lkdGg6IDIyNXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyNDlweDtcXG4gIH1cXG5cXG4gIC5zY29yZUJvYXJkIHtcXG4gICAgbWFyZ2luLXRvcDogNzBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICB9XFxuXFxuICAucmVzZXRCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjVweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcXG4gIH1cXG5cXG4gIC5hZGRzaGlwcyB7XFxuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4O1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIH1cXG5cXG4gIC5hdHRhY2tNZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDMwMHB4O1xcbiAgICBsZWZ0OiAyJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNhNDU7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgfVxcblxcbiAgW2NsYXNzXj1cXFwiY2VsbFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiA0cHg7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gIH1cXG5cXG4gIC5hZGRTaGlwQnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjZyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiA4NXB4O1xcbiAgICB0ZXh0LXdyYXA6IHdyYXA7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICB9XFxuXFxuICBwaWN0dXJlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICB9XFxuXFxuICAuZXJyb3IuYWN0aXZlIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxuIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBpbnB1dCB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbi8qIGVuZCBvZiByZXNldCBvZiBzdHlsZSBicm93c2VyICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUtcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7Q0FDQzs7O0NBR0E7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCOztBQUVBLGtDQUFrQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG4gLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbywgaW5wdXQge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogZW5kIG9mIHJlc2V0IG9mIHN0eWxlIGJyb3dzZXIgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMXB4KSBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgbWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnR1cm4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICB9XG5cbiAgLnJhbmRvbXNoaXBzIHtcbiAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgfVxuXG4gIC5ib2FyZCB7XG4gICAgZ3JpZC1jb2x1bW46IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXG4gICAgZ3JpZC1yb3c6IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMTRmciAwLjFmciAxNGZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XG4gICAgY29sdW1uLWdhcDogMSU7XG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgfVxuXG4gIC5ib2FyZC1odW1hbiB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMjVweDtcbiAgfVxuXG4gIC5ib2FyZC1jb21wdXRlciB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMjVweDtcbiAgfVxuXG4gIC5zY29yZUJvYXJkIHtcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIGdhcDogMXB4O1xuICB9XG5cbiAgLnNjb3JlIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgfVxuXG4gIC5yZXNldEJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjVweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcbiAgfVxuXG4gIC5hZGRzaGlwcyB7XG4gICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7XG4gIH1cblxuICBbY2xhc3NePVwiY2VsbFwiXSB7XG4gICAgZm9udC1zaXplOiA0cHg7XG4gICAgcGFkZGluZzogMXB4O1xuICB9XG5cbiAgcGljdHVyZSB7XG4gICAgd2lkdGg6IDUwcHg7XG4gIH1cblxuICAud2FpdFR1cm4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiA0MCU7XG4gIH1cblxuICAubm9GaXJlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAzMCU7XG4gICAgbGVmdDogMTAlO1xuICB9XG5cbiAgLnJlc3VsdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNSU7XG4gICAgbGVmdDogMjglO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2E0NTtcbiAgfVxuXG4gIC5hdHRhY2tNZXNzYWdlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAyMDBweDtcbiAgICBsZWZ0OiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2E0NTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS10YWJsZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQixFQUFFLCtDQUErQztJQUNqRSxhQUFhLEVBQUUsK0NBQStDO0lBQzlELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFFBQVE7RUFDVjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixPQUFPO0lBQ1AsU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFFBQVE7SUFDUixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYyMXB4KSBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcXG4gIG1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgLnR1cm4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XFxuICB9XFxuXFxuICAucmFuZG9tc2hpcHMge1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gIH1cXG5cXG4gIC5ib2FyZCB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcbiAgICBncmlkLXJvdzogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDE0ZnIgMC4xZnIgMTRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTRmcjtcXG4gICAgY29sdW1uLWdhcDogMSU7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgfVxcblxcbiAgLmJvYXJkLWh1bWFuIHtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gICAgbWF4LWhlaWdodDogMzI1cHg7XFxuICB9XFxuXFxuICAuYm9hcmQtY29tcHV0ZXIge1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzMjVweDtcXG4gIH1cXG5cXG4gIC5zY29yZUJvYXJkIHtcXG4gICAgd2lkdGg6IDg1cHg7XFxuICAgIGhlaWdodDogODAwcHg7XFxuICAgIGdhcDogMXB4O1xcbiAgfVxcblxcbiAgLnNjb3JlIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICB9XFxuXFxuICAucmVzZXRCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjVweDtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcXG4gIH1cXG5cXG4gIC5hZGRzaGlwcyB7XFxuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4O1xcbiAgfVxcblxcbiAgW2NsYXNzXj1cXFwiY2VsbFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiA0cHg7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gIH1cXG5cXG4gIHBpY3R1cmUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gIH1cXG5cXG4gIC53YWl0VHVybiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gIH1cXG5cXG4gIC5ub0ZpcmUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAxMCU7XFxuICB9XFxuXFxuICAucmVzdWx0IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUlO1xcbiAgICBsZWZ0OiAyOCU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNhNDU7XFxuICB9XFxuXFxuICAuYXR0YWNrTWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMDBweDtcXG4gICAgbGVmdDogMiU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzYTQ1O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NDFweCkgYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xuICBtYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmJvYXJkIHtcbiAgICBncmlkLWNvbHVtbjogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cbiAgICBncmlkLXJvdzogMi8zOyAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxNGZyIDAuMWZyIDE0ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTRmcjtcbiAgICBjb2x1bW4tZ2FwOiAxJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xuICB9XG5cbiAgLmJvYXJkLWh1bWFuIHtcbiAgICBtYXgtd2lkdGg6IDI5MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM5MHB4O1xuICB9XG5cbiAgLmJvYXJkLWNvbXB1dGVyIHtcbiAgICBtYXgtd2lkdGg6IDI5MHB4O1xuICAgIG1heC1oZWlnaHQ6IDM5MHB4O1xuICB9XG5cbiAgW2NsYXNzXj1cImNlbGxcIl0ge1xuICAgIGZvbnQtc2l6ZTogNnB4O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgfVxuXG4gIC53YWl0VHVybiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDYwJTtcbiAgfVxuXG4gIC5ub0ZpcmUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiAzMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMXB4KSB7XG4gIG1haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cblxuICAuYm9hcmQge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xuICAgIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNWY7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDE0ZnIgMC4xZnIgMTRmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xuICAgIGNvbHVtbi1nYXA6IDMlO1xuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIH1cblxuICAuYm9hcmQtaHVtYW4ge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmJvYXJkLWNvbXB1dGVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIFtjbGFzc149XCJjZWxsXCJdIHtcbiAgICBmb250LXNpemU6IDhweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gIH1cblxuICAud2FpdFR1cm4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiA2MCU7XG4gIH1cblxuICAubm9GaXJlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAzMCU7XG4gICAgbGVmdDogMzAlO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQixFQUFFLCtDQUErQztJQUNqRSxhQUFhLEVBQUUsK0NBQStDO0lBQzlELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7RUFDWDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCLEVBQUUsK0NBQStDO0lBQ2pFLGFBQWEsRUFBRSwrQ0FBK0M7SUFDOUQseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztFQUNYO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODQxcHgpIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXG4gIG1haW4ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcbiAgLmJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxuICAgIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMTRmciAwLjFmciAxNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICB9XFxuXFxuICAuYm9hcmQtaHVtYW4ge1xcbiAgICBtYXgtd2lkdGg6IDI5MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAzOTBweDtcXG4gIH1cXG5cXG4gIC5ib2FyZC1jb21wdXRlciB7XFxuICAgIG1heC13aWR0aDogMjkwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDM5MHB4O1xcbiAgfVxcblxcbiAgW2NsYXNzXj1cXFwiY2VsbFxcXCJdIHtcXG4gICAgZm9udC1zaXplOiA2cHg7XFxuICAgIHBhZGRpbmc6IDFweDtcXG4gIH1cXG5cXG4gIC53YWl0VHVybiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDYwJTtcXG4gIH1cXG5cXG4gIC5ub0ZpcmUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExMDFweCkge1xcbiAgbWFpbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgfVxcblxcbiAgLmJvYXJkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMzsgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxuICAgIGdyaWQtcm93OiAyLzM7IC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMTRmciAwLjFmciAxNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xcbiAgICBjb2x1bW4tZ2FwOiAzJTtcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICB9XFxuXFxuICAuYm9hcmQtaHVtYW4ge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICAuYm9hcmQtY29tcHV0ZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICBbY2xhc3NePVxcXCJjZWxsXFxcIl0ge1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgfVxcblxcbiAgLndhaXRUdXJuIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDogNjAlO1xcbiAgfVxcblxcbiAgLm5vRmlyZSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDMwJTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeSB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHVwZGF0ZUNlbGxzIH0gZnJvbSBcIi4vdXBkYXRlXCI7XG5pbXBvcnQgeyB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQgfSBmcm9tIFwiLi91cGRhdGUtY29tcHV0ZXItYm9hcmRcIjtcbmltcG9ydCB7IHNob3dFcnJvciB9IGZyb20gXCIuL3Nob3ctZXJyb3JcIjtcbmltcG9ydCB7IGRlbGV0ZUVycm9yTWVzc2FnZXMgfSBmcm9tIFwiLi9kZWxldGUtZGl2LWVycm9yXCI7XG5pbXBvcnQgeyByYW5kb21TaGlwcyB9IGZyb20gXCIuL3JhbmRvbS1zaGlwc1wiO1xuaW1wb3J0IHsgc2NvcmVCb2FyZCB9IGZyb20gXCIuL3Njb3JlLWJvYXJkLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZFNoaXBzKGFyZzEsIGFyZzIsIGFyZzMsIGFyZzQsIGFyZzUsIGFyZzYpIHtcbiAgLyogYXJnIGlzIHRoZSBnYW1lICBhcmcyIGlzIHRoZSBkaXYgd2l0aCB0aGUgaHVtYW5ib2FyZCAgXG4gICAgYXJnMyB0byBzaG93IHRoZSBvcHRpb25zIGFyZzQgdG8gc2hvdyByYW5kb20gYnV0dG9uXG4gICAgYXJnNSBpcyB0aGUgZGl2IHdpdGggdGhlIGNvbXB1dGVyYm9hcmQgYXJnNiBpcyB0aGUgY29udGVudCBjb21wdXRlciBib2FyZCovXG4gIGNvbnN0IGdhbWUgPSBhcmcxO1xuICBjb25zdCBodW1hbkJvYXJkID0gYXJnMjtcbiAgY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xuICBjb25zdCBjb21wdXRlckJvYXJkID0gYXJnNTtcbiAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBhcmc2O1xuXG4gIC8vIGhlYWRlcnMgZm9yIHRoZSByb3dzIGFuZCBjb2x1bW5zIG9mIHRoZSBodW1hbiBwbGF5ZXIgYm9hcmRcbiAgY29uc3QgZGl2Q29sdW1uc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXZDb2x1bW5zSGVhZC5jbGFzc0xpc3QuYWRkKFwiY29sdW1uc0hlYWRcIik7XG4gIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgY29uc3QgY2VsbEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbGxIZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkQ2VsbFwiKTtcbiAgICBjZWxsSGVhZC50ZXh0Q29udGVudCA9IGFsZl95W2pdLnRvVXBwZXJDYXNlKCk7XG4gICAgZGl2Q29sdW1uc0hlYWQuYXBwZW5kQ2hpbGQoY2VsbEhlYWQpO1xuICB9XG4gIGFyZzIuYXBwZW5kQ2hpbGQoZGl2Q29sdW1uc0hlYWQpO1xuXG4gIGNvbnN0IGRpdlJvd3NIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Um93c0hlYWQuY2xhc3NMaXN0LmFkZChcInJvd3NIZWFkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIGNvbnN0IGNlbGxIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsSGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZENlbGxcIik7XG4gICAgY2VsbEhlYWQudGV4dENvbnRlbnQgPSBpICsgMTtcbiAgICBkaXZSb3dzSGVhZC5hcHBlbmRDaGlsZChjZWxsSGVhZCk7XG4gIH1cbiAgYXJnMi5hcHBlbmRDaGlsZChkaXZSb3dzSGVhZCk7XG5cbiAgLy8gZGl2IGZvciBhZGQgdGhlIHNoaXBzIGluIHRoZSBib2FyZFxuICBjb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmlkRm9yQWRkXCIpO1xuICBncmlkLmNsYXNzTGlzdC5hZGQoXCJncmlkRm9yQWRkXCIpO1xuICBjb25zdCBkaXZGb3JFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdkZvckVycm9yLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGl2Rm9yRXJyb3JcIik7XG4gIGRpdkZvckVycm9yLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6IDEgLyAyOyBncmlkLWNvbHVtbjogNCAvIDU7XCIpO1xuXG4gIGNvbnN0IHNoaXBMZW5ndGggPSBbNSwgMywgNCwgNiwgNCwgNV07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcExlbmd0aC5sZW5ndGg7ICsraSkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIGBmb3JtJHtpfWApO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImZvcm1JbnB1dFwiKTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgc3VibWl0JHtpfWApO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IGBBREQgTsKwICR7aX1gO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkU2hpcEJ1dHRvblwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJ0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1wiKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInN0eWxlXCIsXG4gICAgICBcImNvbG9yOmdyZWVuOyBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBmb250LXdlaWdodDogOTAwOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogcmlnaHQ7XCJcbiAgICApO1xuICAgIHRleHQuaW5uZXJUZXh0ID0gYCR7c2hpcExlbmd0aFtpIC0gMV19IHNxdWFyZXMgbG9uZ2l0dWRlYDtcblxuICAgIGNvbnN0IHJhZGlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybVJhZGlvXCIpO1xuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsYWJlbEZvckhvcml6b250YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgaG9yaXpvbnRhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IGxhYmVsRm9yVmVydGljYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdmVydGljYWxseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkaXJlY3Rpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInN0eWxlXCIsXG4gICAgICBcImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDEycHhcIlxuICAgICk7XG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLmlubmVyVGV4dCA9IFwibGVmdC10by1yaWdodFwiO1xuICAgIGxhYmVsRm9ySG9yaXpvbnRhbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJsZWZ0LXRvLXJpZ2h0XCIpO1xuICAgIGxhYmVsRm9yVmVydGljYWwuaW5uZXJUZXh0ID0gXCJ0b3AtdG8tZG93blwiO1xuICAgIGxhYmVsRm9yVmVydGljYWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9wLXRvLWRvd25cIik7XG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsZWZ0LXRvLXJpZ2h0XCIpO1xuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGlyZWN0aW9uXCIpO1xuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxlZnQtdG8tcmlnaHRcIik7XG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC10by1kb3duXCIpO1xuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJ0b3AtdG8tZG93blwiKTtcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkaXJlY3Rpb25cIik7XG5cbiAgICBjb25zdCBjb29yZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29vcmRSb3cuaW5uZXJUZXh0ID0gXCJST1c6IFwiO1xuICAgIGNvbnN0IGNvb3JkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb29yZENvbHVtbi5pbm5lclRleHQgPSBcIkNPTFVNTjogXCI7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7ICsraSkge1xuICAgICAgY29uc3Qgcm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBjb25zdCBpbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIHJvd0xhYmVsLmlubmVyVGV4dCA9IGkgKyAxO1xuICAgICAgcm93TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGByb3cke2kgKyAxfWApO1xuICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xuICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHJvdyR7aSArIDF9YCk7XG4gICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicm93U2VsZWN0ZWRcIik7XG4gICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpICsgMSk7XG5cbiAgICAgIGNvb3JkUm93LmFwcGVuZENoaWxkKHJvd0xhYmVsKTtcbiAgICAgIGNvb3JkUm93LmFwcGVuZENoaWxkKGlucHV0Um93KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7ICsraikge1xuICAgICAgY29uc3QgY29sdW1uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBjb25zdCBpbnB1dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbHVtbkxhYmVsLmlubmVyVGV4dCA9IGFsZl95W2pdLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjb2x1bW5MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgYGNvbHVtbiR7YWxmX3lbal19YCk7XG4gICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XG4gICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY29sdW1uJHthbGZfeVtqXX1gKTtcbiAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb2x1bW5TZWxlY3RlZFwiKTtcbiAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGFsZl95W2pdKTtcblxuICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoY29sdW1uTGFiZWwpO1xuICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoaW5wdXRDb2x1bW4pO1xuICAgIH1cblxuICAgIGhvcml6b250YWxseS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcbiAgICB9KTtcblxuICAgIHZlcnRpY2FsbHkuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XG4gICAgfSk7XG5cbiAgICBsZXQgZGlyZWN0aW9uU2VsZWN0ZWQgPSBcIlwiO1xuICAgIGZ1bmN0aW9uIGRpcmVjdGlvblJhZGlvVmFsdWUoKSB7XG4gICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdpbnB1dFtuYW1lPVwiZGlyZWN0aW9uXCJdOmNoZWNrZWQnXG4gICAgICApO1xuXG4gICAgICBpZiAoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIGRpcmVjdGlvblNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dFcnJvcihyYWRpb0RpdiwgXCJtdXN0IHNlbGVjdCBkaXJlY3Rpb25cIi50b1VwcGVyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRpcmVjdGlvblNlbGVjdGVkO1xuICAgIH1cblxuICAgIGxldCByb3dTZWxlY3RlZCA9IFwiXCI7XG4gICAgZnVuY3Rpb24gcm93UmFkaW9WYWx1ZSgpIHtcbiAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2lucHV0W25hbWU9XCJyb3dTZWxlY3RlZFwiXTpjaGVja2VkJ1xuICAgICAgKTtcblxuICAgICAgaWYgKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICByb3dTZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3dTZWxlY3RlZCA9IDE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3dTZWxlY3RlZDtcbiAgICB9XG5cbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBcIlwiO1xuICAgIGZ1bmN0aW9uIGNvbHVtblJhZGlvVmFsdWUoKSB7XG4gICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdpbnB1dFtuYW1lPVwiY29sdW1uU2VsZWN0ZWRcIl06Y2hlY2tlZCdcbiAgICAgICk7XG5cbiAgICAgIGlmIChnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSBcImFcIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbHVtblNlbGVjdGVkO1xuICAgIH1cblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XG5cbiAgICAgIGxldCBzaXplID0gc2hpcExlbmd0aFtpIC0gMV07XG5cbiAgICAgIGxldCBzaGlwTnVtYmVyID0gaTtcblxuICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJhZGlvVmFsdWUoKTtcblxuICAgICAgbGV0IHJvd1NlbGVjdGVkID0gcm93UmFkaW9WYWx1ZSgpO1xuXG4gICAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBjb2x1bW5SYWRpb1ZhbHVlKCk7XG5cbiAgICAgIGxldCBjb29yZCA9IFtOdW1iZXIocm93U2VsZWN0ZWQpLCBjb2x1bW5TZWxlY3RlZF07XG5cbiAgICAgIGxldCBzaGlwID0gcGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl0uZGF0YVNoaXBzKFxuICAgICAgICBjb29yZCxcbiAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICBzaXplLFxuICAgICAgICBzaGlwTnVtYmVyXG4gICAgICApO1xuXG4gICAgICBpZiAoc2hpcCAhPT0gbnVsbCkge1xuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XG4gICAgICAgIGxldCBuZXdCb2FyZCA9IHBsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdLnBsYWNlU2hpcHNJblRoZUJvYXJkKHNoaXApO1xuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLCBuZXdCb2FyZCk7XG4gICAgICAgIGNvbnN0IHN1Ym1pdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZvcm0ke2l9YCk7XG4gICAgICAgIHN1Ym1pdFJlYWR5LnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1JbnB1dFwiKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLCBkaXZGb3JSYW5kb20sIGRpdkNvbHVtbnNIZWFkLCBkaXZSb3dzSGVhZCk7XG4gICAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQsXG4gICAgICAgICAgICBzaGlwTGVuZ3RoLFxuICAgICAgICAgICAgcGxheWVyQ29tcHV0ZXJcbiAgICAgICAgICApO1xuICAgICAgICAgIHNjb3JlQm9hcmQoYXJnMywgcGxheWVySHVtYW4sIHBsYXllckNvbXB1dGVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0Vycm9yKGRpdkZvckVycm9yLCBcIlNFTEVDVCBBTk9USEVSIExPQ0FUSU9OXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXJnMy5hcHBlbmRDaGlsZChncmlkKTtcbiAgICBncmlkLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9EaXYpO1xuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChkaXJlY3Rpb25JbnB1dCk7XG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRSb3cpO1xuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGNvb3JkQ29sdW1uKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JIb3Jpem9udGFsKTtcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChob3Jpem9udGFsbHkpO1xuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9yVmVydGljYWwpO1xuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKHZlcnRpY2FsbHkpO1xuICB9XG5cbiAgY29uc3QgZGl2Rm9yUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Rm9yUmFuZG9tLmlubmVyVGV4dCA9IFwi4p6lIFwiO1xuICBkaXZGb3JSYW5kb20uY2xhc3NMaXN0LmFkZChcInJhbmRvbXNoaXBzXCIpO1xuICBjb25zdCBidXR0b25SYW5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b25SYW5kb20uaW5uZXJUZXh0ID0gXCJSQU5ET00gRkxFRVRcIjtcbiAgYnV0dG9uUmFuZG9tLmNsYXNzTGlzdC5hZGQoXCJhZGRTaGlwQnV0dG9uXCIpO1xuXG4gIGJ1dHRvblJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcbiAgICBwbGF5ZXJIdW1hbltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdID0gW107XG4gICAgcGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl0uaW5pdGlhbGl6ZUJvYXJkKCk7XG4gICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCwgcGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl1bXCJib2FyZFwiXSk7XG4gICAgcmFuZG9tU2hpcHMocGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl0sIHNoaXBMZW5ndGgpO1xuICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQsIHBsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYm9hcmRcIl0pO1xuICAgIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGdyaWQsIGRpdkZvclJhbmRvbSwgZGl2Q29sdW1uc0hlYWQsIGRpdlJvd3NIZWFkKTtcbiAgICByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGNvbXB1dGVyQm9hcmQsIHNoaXBMZW5ndGgsIHBsYXllckNvbXB1dGVyKTtcbiAgICBzY29yZUJvYXJkKGFyZzMsIHBsYXllckh1bWFuLCBwbGF5ZXJDb21wdXRlcik7XG4gIH0pO1xuXG4gIGFyZzQuYXBwZW5kQ2hpbGQoZGl2Rm9yUmFuZG9tKTtcbiAgYXJnNC5hcHBlbmRDaGlsZChkaXZGb3JFcnJvcik7XG4gIGRpdkZvclJhbmRvbS5hcHBlbmRDaGlsZChidXR0b25SYW5kb20pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxBZGRTaGlwc0RpdihhcmcxLCBhcmcyLCBhcmczLCBhcmc0KSB7XG4gIC8vIGFsbCB0aGUgYXJndW1lbnRzIGFyZSB0aGUgZGl2cyB0byB3aWxsIGJlIHJlbW92ZWRcbiAgYXJnMS5yZW1vdmUoKTtcbiAgYXJnMi5yZW1vdmUoKTtcbiAgYXJnMy5yZW1vdmUoKTtcbiAgYXJnNC5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihhcmcxLCBhcmcyLCBhcmczKSB7XG4gIC8qICBhcmcxIGlzIHRoZSBkaXYgdG8gd3JpdGUgdGhlIGhlYWQgKi9cbiAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGFyZzE7XG4gIGNvbnN0IHNoaXBMZW5ndGggPSBhcmcyO1xuICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzM7XG5cbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmQtY29tcHV0ZXJcIik7XG5cbiAgY29uc3QgaGVhZENvbXB1dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZENvbXB1dGVyLmlubmVyVGV4dCA9XG4gICAgXCJ0aGlzIGlzIHlvdXIgZW5lbXkgXCIudG9VcHBlckNhc2UoKSArIFwiIENsaWNrIFRvIEF0dGFja1wiO1xuICBoZWFkQ29tcHV0ZXIuY2xhc3NMaXN0LmFkZChcImhlYWRDb21wdXRlclwiKTtcbiAgYXJnMS5hcHBlbmRDaGlsZChoZWFkQ29tcHV0ZXIpO1xuXG4gIHBsYXllckNvbXB1dGVyW1wiZ2FtZWJvYXJkXCJdLmluaXRpYWxpemVCb2FyZCgpO1xuICB1cGRhdGVDZWxscyhjb21wdXRlckJvYXJkLCBwbGF5ZXJDb21wdXRlcltcImdhbWVib2FyZFwiXVtcImJvYXJkXCJdKTtcbiAgcmFuZG9tU2hpcHMocGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl0sIHNoaXBMZW5ndGgpO1xuICB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQoY29tcHV0ZXJCb2FyZCwgcGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl1bXCJib2FyZFwiXSk7XG59XG5cbmV4cG9ydCB7IGFkZFNoaXBzIH07XG4iLCJjb25zdCBhZGphY2VudCA9IG5ldyBNYXAoKTtcblxuYWRqYWNlbnQuc2V0KDAsWzEsMTJdKTtcbmFkamFjZW50LnNldCgxLFswLDIsMTNdKTtcbmFkamFjZW50LnNldCgyLFsxLDMsMTRdKTtcbmFkamFjZW50LnNldCgzLFsyLDQsMTVdKTtcbmFkamFjZW50LnNldCg0LFszLDUsMTZdKTtcbmFkamFjZW50LnNldCg1LFs0LDYsMTddKTtcbmFkamFjZW50LnNldCg2LFs1LDcsMThdKTtcbmFkamFjZW50LnNldCg3LFs2LDgsMTldKTtcbmFkamFjZW50LnNldCg4LFs3LDksMjBdKTtcbmFkamFjZW50LnNldCg5LFs4LDEwLDIxXSk7XG5hZGphY2VudC5zZXQoMTAsWzksMTEsMjJdKTtcbmFkamFjZW50LnNldCgxMSxbMTAsMjNdKTtcbmFkamFjZW50LnNldCgxMixbMCwxMywyNF0pO1xuYWRqYWNlbnQuc2V0KDEzLFsxLDEyLDE0LDI1XSk7XG5hZGphY2VudC5zZXQoMTQsWzIsMTMsMTUsMjZdKTtcbmFkamFjZW50LnNldCgxNSxbMywxNCwxNiwyN10pO1xuYWRqYWNlbnQuc2V0KDE2LFs0LDE1LDE3LDI4XSk7XG5hZGphY2VudC5zZXQoMTcsWzUsMTYsMTgsMjldKTtcbmFkamFjZW50LnNldCgxOCxbNiwxNywxOSwzMF0pO1xuYWRqYWNlbnQuc2V0KDE5LFs3LDE4LDIwLDMxXSk7XG5hZGphY2VudC5zZXQoMjAsWzgsMTksMjEsMzJdKTtcbmFkamFjZW50LnNldCgyMSxbOSwyMCwyMiwzM10pO1xuYWRqYWNlbnQuc2V0KDIyLFsxMCwyMSwyMywzNF0pO1xuYWRqYWNlbnQuc2V0KDIzLFsxMSwyMiwzNV0pO1xuYWRqYWNlbnQuc2V0KDI0LFsxMiwyNSwzNl0pO1xuYWRqYWNlbnQuc2V0KDI1LFsxMywyNCwyNiwzN10pO1xuYWRqYWNlbnQuc2V0KDI2LFsxNCwyNSwyNywzOF0pO1xuYWRqYWNlbnQuc2V0KDI3LFsxNSwyNiwyOCwzOV0pO1xuYWRqYWNlbnQuc2V0KDI4LFsxNiwyNywyOSw0MF0pO1xuYWRqYWNlbnQuc2V0KDI5LFsxNywyOCwzMCw0MV0pO1xuYWRqYWNlbnQuc2V0KDMwLFsxOCwyOSwzMSw0Ml0pO1xuYWRqYWNlbnQuc2V0KDMxLFsxOSwzMCwzMiw0M10pO1xuYWRqYWNlbnQuc2V0KDMyLFsyMCwzMSwzMyw0NF0pO1xuYWRqYWNlbnQuc2V0KDMzLFsyMSwzMiwzNCw0NV0pO1xuYWRqYWNlbnQuc2V0KDM0LFsyMiwzMywzNSw0Nl0pO1xuYWRqYWNlbnQuc2V0KDM1LFsyMywzNCw0N10pO1xuYWRqYWNlbnQuc2V0KDM2LFsyNCwzNyw0OF0pO1xuYWRqYWNlbnQuc2V0KDM3LFsyNSwzNiwzOCw0OV0pO1xuYWRqYWNlbnQuc2V0KDM4LFsyNiwzNywzOSw1MF0pO1xuYWRqYWNlbnQuc2V0KDM5LFsyNywzOCw0MCw1MV0pO1xuYWRqYWNlbnQuc2V0KDQwLFsyOCwzOSw0MSw1Ml0pO1xuYWRqYWNlbnQuc2V0KDQxLFsyOSw0MCw0Miw1M10pO1xuYWRqYWNlbnQuc2V0KDQyLFszMCw0MSw0Myw1NF0pO1xuYWRqYWNlbnQuc2V0KDQzLFszMSw0Miw0NCw1NV0pO1xuYWRqYWNlbnQuc2V0KDQ0LFszMiw0Myw0NSw1Nl0pO1xuYWRqYWNlbnQuc2V0KDQ1LFszMyw0NCw0Niw1N10pO1xuYWRqYWNlbnQuc2V0KDQ2LFszNCw0NSw0Nyw1OF0pO1xuYWRqYWNlbnQuc2V0KDQ3LFszNSw0Niw1OV0pO1xuYWRqYWNlbnQuc2V0KDQ4LFszNiw0OSw2MF0pO1xuYWRqYWNlbnQuc2V0KDQ5LFszNyw0OCw1MCw2MV0pO1xuYWRqYWNlbnQuc2V0KDUwLFszOCw0OSw1MSw2Ml0pO1xuYWRqYWNlbnQuc2V0KDUxLFszOSw1MCw1Miw2M10pO1xuYWRqYWNlbnQuc2V0KDUyLFs0MCw1MSw1Myw2NF0pO1xuYWRqYWNlbnQuc2V0KDUzLFs0MSw1Miw1NCw2NV0pO1xuYWRqYWNlbnQuc2V0KDU0LFs0Miw1Myw1NSw2Nl0pO1xuYWRqYWNlbnQuc2V0KDU1LFs0Myw1NCw1Niw2N10pO1xuYWRqYWNlbnQuc2V0KDU2LFs0NCw1NSw1Nyw2OF0pO1xuYWRqYWNlbnQuc2V0KDU3LFs0NSw1Niw1OCw2OV0pO1xuYWRqYWNlbnQuc2V0KDU4LFs0Niw1Nyw1OSw3MF0pO1xuYWRqYWNlbnQuc2V0KDU5LFs0Nyw1OCw3MV0pO1xuYWRqYWNlbnQuc2V0KDYwLFs0OCw2MSw3Ml0pO1xuYWRqYWNlbnQuc2V0KDYxLFs0OSw2MCw2Miw3M10pO1xuYWRqYWNlbnQuc2V0KDYyLFs1MCw2MSw2Myw3NF0pO1xuYWRqYWNlbnQuc2V0KDYzLFs1MSw2Miw2NCw3NV0pO1xuYWRqYWNlbnQuc2V0KDY0LFs1Miw2Myw2NSw3Nl0pO1xuYWRqYWNlbnQuc2V0KDY1LFs1Myw2NCw2Niw3N10pO1xuYWRqYWNlbnQuc2V0KDY2LFs1NCw2NSw2Nyw3OF0pO1xuYWRqYWNlbnQuc2V0KDY3LFs1NSw2Niw2OCw3OV0pO1xuYWRqYWNlbnQuc2V0KDY4LFs1Niw2Nyw2OSw4MF0pO1xuYWRqYWNlbnQuc2V0KDY5LFs1Nyw2OCw3MCw4MV0pO1xuYWRqYWNlbnQuc2V0KDcwLFs1OCw2OSw3MSw4Ml0pO1xuYWRqYWNlbnQuc2V0KDcxLFs1OSw3MCw4M10pO1xuYWRqYWNlbnQuc2V0KDcyLFs2MCw3Myw4NF0pO1xuYWRqYWNlbnQuc2V0KDczLFs2MSw3Miw3NCw4NV0pO1xuYWRqYWNlbnQuc2V0KDc0LFs2Miw3Myw3NSw4Nl0pO1xuYWRqYWNlbnQuc2V0KDc1LFs2Myw3NCw3Niw4N10pO1xuYWRqYWNlbnQuc2V0KDc2LFs2NCw3NSw3Nyw4OF0pO1xuYWRqYWNlbnQuc2V0KDc3LFs2NSw3Niw3OCw4OV0pO1xuYWRqYWNlbnQuc2V0KDc4LFs2Niw3Nyw3OSw5MF0pO1xuYWRqYWNlbnQuc2V0KDc5LFs2Nyw3OCw4MCw5MV0pO1xuYWRqYWNlbnQuc2V0KDgwLFs2OCw3OSw4MSw5Ml0pO1xuYWRqYWNlbnQuc2V0KDgxLFs2OSw4MCw4Miw5M10pO1xuYWRqYWNlbnQuc2V0KDgyLFs3MCw4MSw4Myw5NF0pO1xuYWRqYWNlbnQuc2V0KDgzLFs3MSw4Miw5NV0pO1xuYWRqYWNlbnQuc2V0KDg0LFs3Miw4NSw5Nl0pO1xuYWRqYWNlbnQuc2V0KDg1LFs3Myw4NCw4Niw5N10pO1xuYWRqYWNlbnQuc2V0KDg2LFs3NCw4NSw4Nyw5OF0pO1xuYWRqYWNlbnQuc2V0KDg3LFs3NSw4Niw4OCw5OV0pO1xuYWRqYWNlbnQuc2V0KDg4LFs3Niw4Nyw4OSwxMDBdKTtcbmFkamFjZW50LnNldCg4OSxbNzcsODgsOTAsMTAxXSk7XG5hZGphY2VudC5zZXQoOTAsWzc4LDg5LDkxLDEwMl0pO1xuYWRqYWNlbnQuc2V0KDkxLFs3OSw5MCw5MiwxMDNdKTtcbmFkamFjZW50LnNldCg5MixbODAsOTEsOTMsMTA0XSk7XG5hZGphY2VudC5zZXQoOTMsWzgxLDkyLDk0LDEwNV0pO1xuYWRqYWNlbnQuc2V0KDk0LFs4Miw5Myw5NSwxMDZdKTtcbmFkamFjZW50LnNldCg5NSxbODMsOTQsMTA3XSk7XG5hZGphY2VudC5zZXQoOTYsWzg0LDk3LDEwOF0pO1xuYWRqYWNlbnQuc2V0KDk3LFs4NSw5Niw5OCwxMDldKTtcbmFkamFjZW50LnNldCg5OCxbODYsOTcsOTksMTEwXSk7XG5hZGphY2VudC5zZXQoOTksWzg3LDk4LDEwMCwxMTFdKTtcbmFkamFjZW50LnNldCgxMDAsWzg4LDk5LDEwMSwxMTJdKTtcbmFkamFjZW50LnNldCgxMDEsWzg5LDEwMCwxMDIsMTEzXSk7XG5hZGphY2VudC5zZXQoMTAyLFs5MCwxMDEsMTAzLDExNF0pO1xuYWRqYWNlbnQuc2V0KDEwMyxbOTEsMTAyLDEwNCwxMTVdKTtcbmFkamFjZW50LnNldCgxMDQsWzkyLDEwMywxMDUsMTE2XSk7XG5hZGphY2VudC5zZXQoMTA1LFs5MywxMDQsMTA2LDExN10pO1xuYWRqYWNlbnQuc2V0KDEwNixbOTQsMTA1LDEwNywxMThdKTtcbmFkamFjZW50LnNldCgxMDcsWzk1LDEwNiwxMTldKTtcbmFkamFjZW50LnNldCgxMDgsWzk2LDEwOSwxMjBdKTtcbmFkamFjZW50LnNldCgxMDksWzk3LDEwOCwxMTAsMTIxXSk7XG5hZGphY2VudC5zZXQoMTEwLFs5OCwxMDksMTExLDEyMl0pO1xuYWRqYWNlbnQuc2V0KDExMSxbOTksMTEwLDExMiwxMjNdKTtcbmFkamFjZW50LnNldCgxMTIsWzEwMCwxMTEsMTEzLDEyNF0pO1xuYWRqYWNlbnQuc2V0KDExMyxbMTAxLDExMiwxMTQsMTI1XSk7XG5hZGphY2VudC5zZXQoMTE0LFsxMDIsMTEzLDExNSwxMjZdKTtcbmFkamFjZW50LnNldCgxMTUsWzEwMywxMTQsMTE2LDEyN10pO1xuYWRqYWNlbnQuc2V0KDExNixbMTA0LDExNSwxMTcsMTI4XSk7XG5hZGphY2VudC5zZXQoMTE3LFsxMDUsMTE2LDExOCwxMjldKTtcbmFkamFjZW50LnNldCgxMTgsWzEwNiwxMTcsMTE5LDEzMF0pO1xuYWRqYWNlbnQuc2V0KDExOSxbMTA3LDExOCwxMzFdKTtcbmFkamFjZW50LnNldCgxMjAsWzEwOCwxMjEsMTMyXSk7XG5hZGphY2VudC5zZXQoMTIxLFsxMDksMTIwLDEyMiwxMzNdKTtcbmFkamFjZW50LnNldCgxMjIsWzExMCwxMjEsMTIzLDEzNF0pO1xuYWRqYWNlbnQuc2V0KDEyMyxbMTExLDEyMiwxMjQsMTM1XSk7XG5hZGphY2VudC5zZXQoMTI0LFsxMTIsMTIzLDEyNSwxMzZdKTtcbmFkamFjZW50LnNldCgxMjUsWzExMywxMjQsMTI2LDEzN10pO1xuYWRqYWNlbnQuc2V0KDEyNixbMTE0LDEyNSwxMjcsMTM4XSk7XG5hZGphY2VudC5zZXQoMTI3LFsxMTUsMTI2LDEyOCwxMzldKTtcbmFkamFjZW50LnNldCgxMjgsWzExNiwxMjcsMTI5LDE0MF0pO1xuYWRqYWNlbnQuc2V0KDEyOSxbMTE3LDEyOCwxMzAsMTQxXSk7XG5hZGphY2VudC5zZXQoMTMwLFsxMTgsMTI5LDEzMSwxNDJdKTtcbmFkamFjZW50LnNldCgxMzEsWzExOSwxMzAsMTQzXSk7XG5hZGphY2VudC5zZXQoMTMyLFsxMjAsMTMzLDE0NF0pO1xuYWRqYWNlbnQuc2V0KDEzMyxbMTIxLDEzMiwxMzQsMTQ1XSk7XG5hZGphY2VudC5zZXQoMTM0LFsxMjIsMTMzLDEzNSwxNDZdKTtcbmFkamFjZW50LnNldCgxMzUsWzEyMywxMzQsMTM2LDE0N10pO1xuYWRqYWNlbnQuc2V0KDEzNixbMTI0LDEzNSwxMzcsMTQ4XSk7XG5hZGphY2VudC5zZXQoMTM3LFsxMjUsMTM2LDEzOCwxNDldKTtcbmFkamFjZW50LnNldCgxMzgsWzEyNiwxMzcsMTM5LDE1MF0pO1xuYWRqYWNlbnQuc2V0KDEzOSxbMTI3LDEzOCwxNDAsMTUxXSk7XG5hZGphY2VudC5zZXQoMTQwLFsxMjgsMTM5LDE0MSwxNTJdKTtcbmFkamFjZW50LnNldCgxNDEsWzEyOSwxNDAsMTQyLDE1M10pO1xuYWRqYWNlbnQuc2V0KDE0MixbMTMwLDE0MSwxNDMsMTU0XSk7XG5hZGphY2VudC5zZXQoMTQzLFsxMzEsMTQyLDE1NV0pO1xuYWRqYWNlbnQuc2V0KDE0NCxbMTMyLDE0NV0pO1xuYWRqYWNlbnQuc2V0KDE0NSxbMTMzLDE0NCwxNDZdKTtcbmFkamFjZW50LnNldCgxNDYsWzEzNCwxNDUsMTQ3XSk7XG5hZGphY2VudC5zZXQoMTQ3LFsxMzUsMTQ2LDE0OF0pO1xuYWRqYWNlbnQuc2V0KDE0OCxbMTM2LDE0NywxNDldKTtcbmFkamFjZW50LnNldCgxNDksWzEzNywxNDgsMTUwXSk7XG5hZGphY2VudC5zZXQoMTUwLFsxMzgsMTQ5LDE1MV0pO1xuYWRqYWNlbnQuc2V0KDE1MSxbMTM5LDE1MCwxNTJdKTtcbmFkamFjZW50LnNldCgxNTIsWzE0MCwxNTEsMTUzXSk7XG5hZGphY2VudC5zZXQoMTUzLFsxNDEsMTUyLDE1NF0pO1xuYWRqYWNlbnQuc2V0KDE1NCxbMTQyLDE1MywxNTVdKTtcbmFkamFjZW50LnNldCgxNTUsWzE0MywxNTRdKTtcblxuXG5leHBvcnQge2FkamFjZW50fTtcbiIsImNvbnN0IHJvd3MgPSAxMztcbmNvbnN0IGNvbHVtbnMgPSAxMjtcblxuY29uc3QgYWxmX3kgPSBbXCJhXCIsIFwiYlwiLCBcImNcIiwgXCJkXCIsIFwiZVwiLCBcImZcIiwgXCJnXCIsIFwiaFwiLCBcImlcIiwgXCJqXCIsIFwia1wiLCBcImxcIl07XG5cbmZ1bmN0aW9uIHNoaWZ0Q29vcmRpbmF0ZXMoW3ZhbHVlX3gsIHZhbHVlX3ldKSB7XG4gIC8qICBsZXQgW3gseV0gPSBbMSwnYSddOyAgKi9cbiAgc3dpdGNoIChhbGZfeS5pbmNsdWRlcyh2YWx1ZV95LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgY2FzZSB0cnVlOiB7XG4gICAgICBsZXQgaW5kZXggPSBhbGZfeS5pbmRleE9mKHZhbHVlX3kudG9Mb3dlckNhc2UoKSk7XG4gICAgICByZXR1cm4gW3ZhbHVlX3ggLSAxLCBpbmRleF07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ25Mb2NhdGlvbihbeCwgeV0sIGRpcmVjdGlvbiwga2V5KSB7XG4gIGxldCBhcnJheU9mQ29vcmRpbmF0ZXMgPSBbXTtcbiAgbGV0IGluaXRpYWxYID0geDtcbiAgbGV0IGluaXRpYWxZID0gYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpO1xuICBzd2l0Y2ggKGRpcmVjdGlvbiA9PT0gXCJsZWZ0LXRvLXJpZ2h0XCIpIHtcbiAgICBjYXNlIHRydWU6XG4gICAgICBpZiAoYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpICsga2V5ID4gY29sdW1ucykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5OyArK2kpIHtcbiAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbeCwgYWxmX3lbaW5pdGlhbFkgKyBpXV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24gPT09IFwidG9wLXRvLWRvd25cIikge1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgaWYgKGluaXRpYWxYICsga2V5IC0gMSA+IHJvd3MpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleTsgKytpKSB7XG4gICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFtpbml0aWFsWCArIGksIHldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tDb29yZGluYXRlcyhbeCwgeV0pIHtcbiAgaWYgKHggPiAwICYmIHggPD0gcm93cyAmJiBhbGZfeS5pbmNsdWRlcyh5LnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csIGNvbHVtbikge1xuICAvKiAgIGxldCBbeCx5XSA9IFsxLCdhJ107ICAgICAqL1xuICByZXR1cm4gW3JvdyArIDEsIGFsZl95W2NvbHVtbl1dO1xufVxuXG5mdW5jdGlvbiBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpIHtcbiAgLyogIGxldCBbcm93LGNvbHVtbl0gPSBbMCwwXTsgKi9cbiAgbGV0IHJvd1NlbGVjdGVkID0gY29vcmRbMF0gLSAxO1xuICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBhbGZfeS5pbmRleE9mKGNvb3JkWzFdLnRvTG93ZXJDYXNlKCkpO1xuICByZXR1cm4gW051bWJlcihyb3dTZWxlY3RlZCksIE51bWJlcihjb2x1bW5TZWxlY3RlZCldO1xufVxuXG5mdW5jdGlvbiBhbGxDb29yZGluYXRlc1Bvc2libGVzKCkge1xuICBsZXQgYXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xuICAgICAgYXJyYXkucHVzaChgJHtpICsgMX0sJHthbGZfeVtqXX1gKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpIHtcbiAgbGV0IGFycmF5ID0gW107XG4gIGxldCBuID0gLTE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgIG4gPSBuICsgMTtcbiAgICAgIGFycmF5LnB1c2goW24sIFtgJHtpICsgMX0sJHthbGZfeVtqXX1gXV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmV4cG9ydCB7XG4gIHJvd3MsXG4gIGNvbHVtbnMsXG4gIGFsZl95LFxuICBzaGlmdENvb3JkaW5hdGVzLFxuICBhc3NpZ25Mb2NhdGlvbixcbiAgY2hlY2tDb29yZGluYXRlcyxcbiAgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzLFxuICBhbGxDb29yZGluYXRlc1Bvc2libGVzLFxuICBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwsXG4gIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0LFxufTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcnMoYXJnMSkge1xuICAvKiB0aGUgYXJnMSBpcyB0aGUgcGFyZW50IGNvbnRhaW5lciAgICovXG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdyaWRGb3JBZGRcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdyaWRGb3JBZGRcIik7XG5cbiAgYXJnMS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVDb250YWluZXJzIH07XG4iLCJmdW5jdGlvbiBkZWxldGVFcnJvck1lc3NhZ2VzKCkge1xuICBjb25zdCBlcnJvck1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5lcnJvclwiKTtcbiAgLyogcGFyYSBjcmVhciB1biBhcnJheSBkZXNkZSBlbCBOb2RlTGlzdCAqL1xuICBjb25zdCBlcnJvck1lc3NhZ2VzQXJyYXkgPSBbLi4uZXJyb3JNZXNzYWdlc107XG4gIGNvbnN0IGl0ZXJhdG9yID0gZXJyb3JNZXNzYWdlc0FycmF5LmVudHJpZXMoKTtcbiAgZXJyb3JNZXNzYWdlc0FycmF5LmZvckVhY2goKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgICBsZXQgeCA9IGluZGV4WzFdOyAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXG4gICAgeC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHgpO1xuICB9KTtcbn1cbmV4cG9ydCB7IGRlbGV0ZUVycm9yTWVzc2FnZXMgfTtcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHsgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzIH0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xuXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcihcbiAgcGxheWVyUmVhbCA9IFwiSFVNQU4gUGxheWVyXCIsXG4gIHBsYXllckNvbXB1dGVyID0gXCJDT01QVVRFUiBQbGF5ZXJcIixcbiAgd2lubmVyID0gZmFsc2UsXG4gIG1lc3NhZ2UgPSBcIlwiXG4pIHtcbiAgbGV0IHBsYXllcnMgPSBbbmV3IFBsYXllcihwbGF5ZXJSZWFsKSwgbmV3IFBsYXllcihwbGF5ZXJDb21wdXRlcildO1xuXG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuXG4gIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XG4gICAgc3dpdGNoICh3aW5uZXIpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgLyogdGhlIHBsYXllciBkb2VzbnQgY2hhbmdlICovXG4gICAgICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvKiBzd2l0Y2ggcGxheWVyKi9cbiAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XG5cbiAgY29uc3QgYm9hcmRSZWFsID0gKCkgPT4gcGxheWVyc1swXVtcImdhbWVib2FyZFwiXVtcImJvYXJkXCJdO1xuICBjb25zdCBib2FyZENvbXB1dGVyID0gKCkgPT4gcGxheWVyc1sxXVtcImdhbWVib2FyZFwiXVtcImJvYXJkXCJdO1xuXG4gIGNvbnN0IGdldENvbXB1dGVyUGxheWVyID0gKCkgPT4gcGxheWVyc1sxXTtcbiAgY29uc3QgZ2V0SHVtYW5QbGF5ZXIgPSAoKSA9PiBwbGF5ZXJzWzBdO1xuXG4gIGNvbnN0IGlzVGhlcmVBV2lubmVyID0gKCkgPT4gd2lubmVyO1xuXG4gIGNvbnN0IHByaW50TmV3Um91bmQgPSAoKSA9PiB7XG4gICAgYm9hcmRSZWFsKCk7XG4gICAgYm9hcmRDb21wdXRlcigpO1xuXG4gICAgc3dpdGNoICh3aW5uZXIpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgbWVzc2FnZSA9IGdldEFjdGl2ZVBsYXllcigpLnR5cGUgKyBcIiBXT05cIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBtZXNzYWdlID0gXCJcIjtcbiAgICB9XG4gICAgXG4gIH07XG5cbiAgY29uc3QgZ2V0R2FtZU1lc3NhZ2UgPSAoKSA9PiBtZXNzYWdlO1xuXG4gIGNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHBsYXllcnNbMF1bXCJnYW1lYm9hcmRcIl0uZ2V0VG90YWxTdW5rKCkgPT09XG4gICAgICBwbGF5ZXJzWzBdW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl0ubGVuZ3RoXG4gICAgKSB7XG4gICAgICB3aW5uZXIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllcnNbMV1bXCJnYW1lYm9hcmRcIl0uZ2V0VG90YWxTdW5rKCkgPT09XG4gICAgICAgIHBsYXllcnNbMV1bXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICB3aW5uZXIgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd2lubmVyO1xuICB9O1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICB3aW5uZXIgPSBmYWxzZTtcbiAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xuICAgIHByaW50TmV3Um91bmQoKTtcbiAgfTtcblxuICBjb25zdCBwbGF5Um91bmQgPSAocm93LCBjb2x1bW4pID0+IHtcbiAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICBpZiAod2lubmVyID09PSB0cnVlKSB7XG4gICAgICByZXNldEdhbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvb3JkID0gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdywgY29sdW1uKTtcbiAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzFdW1wiZ2FtZWJvYXJkXCJdO1xuICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcblxuICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgIHByaW50TmV3Um91bmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IHBsYXlSb3VuZENvbXB1dGVyID0gKHJvdywgY29sdW1uKSA9PiB7XG4gICAgbGV0IGJvYXJkID0gW107XG5cbiAgICBpZiAod2lubmVyID09PSB0cnVlKSB7XG4gICAgICByZXNldEdhbWUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGNvb3JkID0gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdywgY29sdW1uKTtcbiAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzBdW1wiZ2FtZWJvYXJkXCJdO1xuICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcblxuICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcbiAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcbiAgICAgIHByaW50TmV3Um91bmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIGJvYXJkO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcGxheVJvdW5kLFxuICAgIHBsYXlSb3VuZENvbXB1dGVyLFxuICAgIGdldEFjdGl2ZVBsYXllcixcbiAgICBnZXRHYW1lTWVzc2FnZSxcbiAgICBib2FyZFJlYWwsXG4gICAgYm9hcmRDb21wdXRlcixcbiAgICByZXNldEdhbWUsXG4gICAgZ2V0Q29tcHV0ZXJQbGF5ZXIsXG4gICAgZ2V0SHVtYW5QbGF5ZXIsXG4gICAgaXNUaGVyZUFXaW5uZXIsXG4gIH07XG59XG5cbmV4cG9ydCB7IGdhbWVDb250cm9sbGVyIH07XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHtcbiAgcm93cyxcbiAgY29sdW1ucyxcbiAgc2hpZnRDb29yZGluYXRlcyxcbiAgYXNzaWduTG9jYXRpb24sXG4gIGNoZWNrQ29vcmRpbmF0ZXMsXG59IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcblxuLy8gYSBjbGFzcyBHYW1lYm9hcmRcbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdldEJvYXJkKHJvd3MsIGNvbHVtbnMpO1xuICAgIHRoaXMuYXJyYXlNaXNzZWQgPSBuZXcgU2V0KFtdKTtcbiAgICB0aGlzLmFycmF5QWxsQXR0YWNrID0gbmV3IFNldChbXSk7XG4gICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xuICB9XG5cbiAgZ2V0Qm9hcmQocm93cywgY29sdW1ucywgYm9hcmQgPSBbXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICBib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgYm9hcmRbaV0ucHVzaCh0aGlzLmNlbGwoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBib2FyZDtcbiAgfVxuXG4gIGNlbGwoKSB7XG4gICAgbGV0IHZhbHVlID0gMDtcblxuICAgIHJldHVybiB7IHZhbHVlIH07XG4gIH1cblxuICBkYXRhU2hpcHMoW3gsIHldLCBkaXJlY3Rpb24sIHNpemUsIHNoaXBOdW1iZXIpIHtcbiAgICBsZXQgc2hpcENvb3JkaW5hdGVzID0gYXNzaWduTG9jYXRpb24oW3gsIHldLCBkaXJlY3Rpb24sIHNpemUpO1xuXG4gICAgaWYgKHNoaXBDb29yZGluYXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBub3RBdmFpbGFibGUgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKFxuICAgICAgICAoeCkgPT5cbiAgICAgICAgICB0aGlzLmJvYXJkW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMF1dW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMV1dLnZhbHVlID09PSAxXG4gICAgICApO1xuXG4gICAgICBpZiAobm90QXZhaWxhYmxlLmluY2x1ZGVzKHRydWUpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2hpcENvb3JkaW5hdGVzVG9TdHJpbmcgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKCh4KSA9PiB4LnRvU3RyaW5nKCkpO1xuICAgICAgbGV0IG9uZVNoaXAgPSB7XG4gICAgICAgIHNoaXBOdW1iZXI6IHNoaXBOdW1iZXIsXG4gICAgICAgIHNoaXBEZXRhaWxzOiBuZXcgU2hpcChzaXplKSxcbiAgICAgICAgY29vcmRpbmF0ZXM6IHNoaXBDb29yZGluYXRlc1RvU3RyaW5nLFxuICAgICAgfTtcbiAgICAgIHRoaXMuYWxsU2hpcHMucHVzaChvbmVTaGlwKTtcbiAgICAgIHJldHVybiBvbmVTaGlwO1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcHNJblRoZUJvYXJkKG9uZVNoaXApIHtcbiAgICBsZXQgYXJyYXkgPSBvbmVTaGlwW1wiY29vcmRpbmF0ZXNcIl07XG4gICAgbGV0IHJldmVyc2VTdHJpbmcgPSBhcnJheS5tYXAoKHgpID0+IHguc3BsaXQoXCIsXCIpKTtcbiAgICBsZXQgYXJyYXlJbkJvYXJkID0gcmV2ZXJzZVN0cmluZy5tYXAoKHZhbHVlcykgPT4gc2hpZnRDb29yZGluYXRlcyh2YWx1ZXMpKTtcbiAgICBhcnJheUluQm9hcmQubWFwKChbeCwgeV0pID0+ICh0aGlzLmJvYXJkW3hdW3ldLnZhbHVlID0gMSkpO1xuICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICB9XG5cbiAgcmVjb3JkZWRBdHRhY2soXG4gICAgW3gsIHldLFxuICAgIGNhbGxiYWNrMSA9ICh2YWx1ZSkgPT4gdGhpcy5yZWNvcmRlZENvb3JkKHZhbHVlKSxcbiAgICBjYWxsYmFjazIgPSAodmFsdWUpID0+IHRoaXMucmVjb3JkZWRNaXNzZWRDb29yZCh2YWx1ZSlcbiAgKSB7XG4gICAgaWYgKFxuICAgICAgIWNoZWNrQ29vcmRpbmF0ZXMoW3gsIHldKSB8fFxuICAgICAgdGhpcy5hcnJheUFsbEF0dGFjay5oYXMoW3gsIHkudG9Mb3dlckNhc2UoKV0udG9TdHJpbmcoKSlcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgW2JvYXJkWCwgYm9hcmRZXSA9IHNoaWZ0Q29vcmRpbmF0ZXMoW3gsIHldKTtcblxuICAgICAgc3dpdGNoICh0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9PT0gMCkge1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgY2FsbGJhY2sxKFt4LCB5XSk7XG4gICAgICAgICAgY2FsbGJhY2syKFt4LCB5XSk7XG4gICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSAyO1xuICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN3aXRjaCAodGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDEpIHtcbiAgICAgICAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICAgICAgICBjYWxsYmFjazEoW3gsIHldKTtcbiAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSA1O1xuICAgICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKDEpO1xuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWxsU2hpcHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICB0aGlzLmFsbFNoaXBzW2ldW1wiY29vcmRpbmF0ZXNcIl0uaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgIFt4LCB5XS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICApID09PSB0cnVlXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBzaGlwID0gdGhpcy5hbGxTaGlwc1tpXVtcInNoaXBEZXRhaWxzXCJdO1xuICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxsU2hpcHNbaV1bXCJzaGlwRGV0YWlsc1wiXSA9IHNoaXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWNvcmRlZENvb3JkKGRhdGEsIHNldCA9IHRoaXMuYXJyYXlBbGxBdHRhY2spIHtcbiAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIHJlY29yZGVkTWlzc2VkQ29vcmQoZGF0YSwgc2V0ID0gdGhpcy5hcnJheU1pc3NlZCkge1xuICAgIHNldC5hZGQoZGF0YS50b1N0cmluZygpKTtcbiAgICByZXR1cm4gc2V0O1xuICB9XG5cbiAgZ2V0VG90YWxTdW5rKCkge1xuICAgIGxldCB0b3RhbFN1bmsgPSB0aGlzLmFsbFNoaXBzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XG4gICAgICByZXR1cm4gY3VycmVudEl0ZW1bXCJzaGlwRGV0YWlsc1wiXS5iZWVuU3VuayA9PT0gdHJ1ZSA/IHRvdGFsICsgMSA6IHRvdGFsO1xuICAgIH0sIDApO1xuICAgIHJldHVybiB0b3RhbFN1bms7XG4gIH1cblxuICBnZXRTbmFwc2hvdCgpIHtcbiAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XG4gICAgbGV0IHRvdGFsU3VuayA9IHRoaXMuZ2V0VG90YWxTdW5rKCk7XG5cbiAgICBpZiAodG90YWxTdW5rID09PSB0aGlzLmFsbFNoaXBzLmxlbmd0aCkge1xuICAgICAgbWVzc2FnZSA9IGBBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmtgO1xuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2UgPSBgU2hpcHMgdGhhdCBoYXZlIGJlZW4gc3VuazogJHt0b3RhbFN1bmt9IC0gU2hpcHMgYWZsb2F0OiAke1xuICAgICAgICB0aGlzLmFsbFNoaXBzLmxlbmd0aCAtIHRvdGFsU3Vua1xuICAgICAgfWA7XG4gICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG4gIH1cblxuICBpbml0aWFsaXplQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0udmFsdWUgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgfVxufVxuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuLy8gYSBjbGFzcyBQbGF5ZXJcbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy50eXBlID0gdmFsdWU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xuICB9XG5cbiAgY3JlYXRlR2FtZWJvYXJkKCkge1xuICAgIHJldHVybiBuZXcgR2FtZWJvYXJkKCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJpbXBvcnQgeyBhbGxDb29yZGluYXRlc1Bvc2libGVzIH0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xuXG5mdW5jdGlvbiByYW5kb21TaGlwcyhhcmcxLCBhcmcyKSB7XG4gIC8qIGFyZzEgaXMgdGhlIHBsYXllckdhbWVib2FyZCBhcmcyIGlzIHRoZSBhcnJheSB3aXRoIGxlbmd0aCovXG5cbiAgY29uc3Qgc2hpcExlbmd0aCA9IGFyZzI7XG4gIGNvbnN0IGFycmF5RGlyZWN0aW9uID0gW1wibGVmdC10by1yaWdodFwiLCBcInRvcC10by1kb3duXCJdO1xuICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aC5sZW5ndGg7ICsraSkge1xuICAgIGxldCBzaGlwID0gbnVsbDtcblxuICAgIHdoaWxlIChzaGlwID09PSBudWxsKSB7XG4gICAgICBsZXQgbnVtYmVyID0gcmFuZG9tSW50RnJvbUludGVydmFsKDEsIHRvdGFsQ2VsbHMubGVuZ3RoKTtcbiAgICAgIGxldCBjb29yZCA9IHRvdGFsQ2VsbHNbbnVtYmVyIC0gMV0uc3BsaXQoXCIsXCIpO1xuICAgICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSwgY29vcmRbMV1dO1xuICAgICAgbGV0IGRpcmVjdGlvbiA9IGFycmF5RGlyZWN0aW9uW3JhbmRvbUludEZyb21JbnRlcnZhbCgxLCAyKSAtIDFdO1xuICAgICAgc2hpcCA9IGFyZzEuZGF0YVNoaXBzKGNvb3JkLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGhbaV0sIGkgKyAxKTtcbiAgICB9XG4gICAgYXJnMS5wbGFjZVNoaXBzSW5UaGVCb2FyZChzaGlwKTtcbiAgfVxuXG4gIHJldHVybiBhcmcxO1xufVxuXG5mdW5jdGlvbiByYW5kb21Db29yZGluYXRlcygpIHtcbiAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcbiAgbGV0IG51bWJlciA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLCB0b3RhbENlbGxzLmxlbmd0aCk7XG4gIGxldCBjb29yZCA9IHRvdGFsQ2VsbHNbbnVtYmVyIC0gMV0uc3BsaXQoXCIsXCIpO1xuICBjb29yZCA9IFtOdW1iZXIoY29vcmRbMF0pLCBjb29yZFsxXV07XG4gIHJldHVybiBjb29yZDtcbn1cblxuZnVuY3Rpb24gcmFuZG9tSW50RnJvbUludGVydmFsKG1pbiwgbWF4KSB7XG4gIC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufVxuXG5leHBvcnQgeyByYW5kb21TaGlwcywgcmFuZG9tQ29vcmRpbmF0ZXMgfTtcbiIsImZ1bmN0aW9uIHNjb3JlQm9hcmQoYXJnMSwgYXJnMiwgYXJnMykge1xuICAvKiBhcmcxIGlzIHRoZSBib2FyZCBkaXYsIGFyZzIgaXMgdGhlIGh1bWFuIHBsYXllciBvYmplY3QsIGFyZzMgaXMgdGhlIGNvbXB1dGVyIHBsYXllciBvYmplY3QgKi9cblxuICBjb25zdCBnYW1lQ29udGFpbmVyID0gYXJnMS5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBwbGF5ZXJIdW1hbiA9IGFyZzI7XG4gIGNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnMztcbiAgY29uc3Qgc2NvcmVCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiKTtcbiAgY29uc3QgaHVtYW5TY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbXB1dGVyU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHNjb3JlQm9hcmREaXYuY2xhc3NMaXN0LmFkZChcInNjb3JlQm9hcmRcIik7XG4gIGh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLXJvdzogMS8yO1wiKTtcbiAgaHVtYW5TY29yZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImh1bWFuLXNjb3JlXCIpO1xuICBodW1hblNjb3JlLmNsYXNzTGlzdC5hZGQoXCJzY29yZVwiKTtcbiAgY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtcm93OiAyLzM7XCIpO1xuICBjb21wdXRlclNjb3JlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29tcHV0ZXItc2NvcmVcIik7XG4gIGNvbXB1dGVyU2NvcmUuY2xhc3NMaXN0LmFkZChcInNjb3JlXCIpO1xuXG4gIGNvbnN0IGh1bWFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaHVtYW5UaXRsZS50ZXh0Q29udGVudCA9IFwiQ09NUFVURVIgYXR0YWNrc1wiOyAvKiBpbiB0aGUgaHVtYW4gYm9hcmQgKi9cbiAgaHVtYW5UaXRsZS5zZXRBdHRyaWJ1dGUoXG4gICAgXCJzdHlsZVwiLFxuICAgIFwiZ3JpZC1yb3c6MS8yO2dyaWQtY29sdW1uOjEvMztiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0eWVsbG93O1wiXG4gICk7XG4gIGh1bWFuVGl0bGUuY2xhc3NMaXN0LmFkZChcInNjb3JlVGl0bGVcIik7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBzdWNjZXNzLnNldEF0dHJpYnV0ZShcbiAgICBcInN0eWxlXCIsXG4gICAgXCJncmlkLXJvdzoyLzM7Z3JpZC1jb2x1bW46MS8zO2NvbG9yOiMwOWMzYzE7YmFja2dyb3VuZC1jb2xvcjpsaWdodHllbGxvdztmb250LXdlaWdodDpib2xkO1wiXG4gICk7XG4gIGxldCByYXRlID0gMDsgLyogaW5pY2lhIGVuIDAgKi9cbiAgc3VjY2Vzcy50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZX0lYDtcblxuICBjb25zdCBpbWdIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwaWN0dXJlXCIpO1xuICBjb25zdCBoaXRzSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW1nSDEuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46MS8yO1wiKTtcbiAgaW1nSDEuY2xhc3NMaXN0LmFkZChcInNoaXBGbG9hdFwiKTtcbiAgaGl0c0gxLnNldEF0dHJpYnV0ZShcbiAgICBcInN0eWxlXCIsXG4gICAgXCJncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCJcbiAgKTtcbiAgaGl0c0gxLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1bMF1bXCJzaGlwRGV0YWlsc1wiXVtcIm51bWJlck9mSGl0c1wiXX0gXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVswXVtcInNoaXBEZXRhaWxzXCJdW1wibGVuZ3RoXCJdfWA7XG5cbiAgY29uc3QgaW1nSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGljdHVyZVwiKTtcbiAgY29uc3QgaGl0c0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGltZ0gyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjEvMjtcIik7XG4gIGltZ0gyLmNsYXNzTGlzdC5hZGQoXCJzaGlwRmxvYXRcIik7XG4gIGhpdHNIMi5zZXRBdHRyaWJ1dGUoXG4gICAgXCJzdHlsZVwiLFxuICAgIFwiZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyO1wiXG4gICk7XG4gIGhpdHNIMi5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hbltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdWzFdW1wic2hpcERldGFpbHNcIl1bXCJudW1iZXJPZkhpdHNcIl19IFxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1bMV1bXCJzaGlwRGV0YWlsc1wiXVtcImxlbmd0aFwiXX1gO1xuXG4gIGNvbnN0IGltZ0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBpY3R1cmVcIik7XG4gIGNvbnN0IGhpdHNIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbWdIMy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoxLzI7XCIpO1xuICBpbWdIMy5jbGFzc0xpc3QuYWRkKFwic2hpcEZsb2F0XCIpO1xuICBoaXRzSDMuc2V0QXR0cmlidXRlKFxuICAgIFwic3R5bGVcIixcbiAgICBcImdyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjtcIlxuICApO1xuICBoaXRzSDMuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVsyXVtcInNoaXBEZXRhaWxzXCJdW1wibnVtYmVyT2ZIaXRzXCJdfSBcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hbltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdWzJdW1wic2hpcERldGFpbHNcIl1bXCJsZW5ndGhcIl19YDtcblxuICBjb25zdCBpbWdINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwaWN0dXJlXCIpO1xuICBjb25zdCBoaXRzSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW1nSDQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46MS8yO1wiKTtcbiAgaW1nSDQuY2xhc3NMaXN0LmFkZChcInNoaXBGbG9hdFwiKTtcbiAgaGl0c0g0LnNldEF0dHJpYnV0ZShcbiAgICBcInN0eWxlXCIsXG4gICAgXCJncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCJcbiAgKTtcbiAgaGl0c0g0LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1bM11bXCJzaGlwRGV0YWlsc1wiXVtcIm51bWJlck9mSGl0c1wiXX0gXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVszXVtcInNoaXBEZXRhaWxzXCJdW1wibGVuZ3RoXCJdfWA7XG5cbiAgY29uc3QgaW1nSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGljdHVyZVwiKTtcbiAgY29uc3QgaGl0c0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGltZ0g1LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjEvMjtcIik7XG4gIGltZ0g1LmNsYXNzTGlzdC5hZGQoXCJzaGlwRmxvYXRcIik7XG4gIGhpdHNINS5zZXRBdHRyaWJ1dGUoXG4gICAgXCJzdHlsZVwiLFxuICAgIFwiZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyO1wiXG4gICk7XG4gIGhpdHNINS5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hbltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdWzRdW1wic2hpcERldGFpbHNcIl1bXCJudW1iZXJPZkhpdHNcIl19IFxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1bNF1bXCJzaGlwRGV0YWlsc1wiXVtcImxlbmd0aFwiXX1gO1xuXG4gIGNvbnN0IGltZ0g2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBpY3R1cmVcIik7XG4gIGNvbnN0IGhpdHNINiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbWdINi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoxLzI7XCIpO1xuICBpbWdINi5jbGFzc0xpc3QuYWRkKFwic2hpcEZsb2F0XCIpO1xuICBoaXRzSDYuc2V0QXR0cmlidXRlKFxuICAgIFwic3R5bGVcIixcbiAgICBcImdyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjtcIlxuICApO1xuICBoaXRzSDYuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVs1XVtcInNoaXBEZXRhaWxzXCJdW1wibnVtYmVyT2ZIaXRzXCJdfSBcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hbltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdWzVdW1wic2hpcERldGFpbHNcIl1bXCJsZW5ndGhcIl19YDtcblxuICBjb25zdCBjb21wdXRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbXB1dGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkhVTUFOIGF0dGFja3NcIjsgLyogaW4gdGhlIGJvYXJkIGNvbXB1dGVyICovXG4gIGNvbXB1dGVyVGl0bGUuc2V0QXR0cmlidXRlKFxuICAgIFwic3R5bGVcIixcbiAgICBcImdyaWQtcm93OjEvMjtncmlkLWNvbHVtbjoxLzM7YmFja2dyb3VuZC1jb2xvcjpsaWdodHllbGxvdztcIlxuICApO1xuICBjb21wdXRlclRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzY29yZVRpdGxlXCIpO1xuXG4gIGNvbnN0IHN1Y2Nlc3NDb21wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHN1Y2Nlc3NDb21wLnNldEF0dHJpYnV0ZShcbiAgICBcInN0eWxlXCIsXG4gICAgXCJncmlkLXJvdzoyLzM7Z3JpZC1jb2x1bW46MS8zO2NvbG9yOiMwOWMzYzE7YmFja2dyb3VuZC1jb2xvcjpsaWdodHllbGxvdztmb250LXdlaWdodDpib2xkO1wiXG4gICk7XG4gIGxldCByYXRlQ29tcCA9IDA7IC8qIGluaWNpYSBlbiAwICovXG4gIHN1Y2Nlc3NDb21wLnRleHRDb250ZW50ID0gYHN1Y2Nlc3MgcmF0ZTogJHtyYXRlQ29tcH0lYDtcblxuICBjb25zdCBpbWdDMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwaWN0dXJlXCIpO1xuICBjb25zdCBoaXRzQzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW1nQzEuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46MS8yO1wiKTtcbiAgaW1nQzEuY2xhc3NMaXN0LmFkZChcInNoaXBGbG9hdFwiKTtcbiAgaGl0c0MxLnNldEF0dHJpYnV0ZShcbiAgICBcInN0eWxlXCIsXG4gICAgXCJncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCJcbiAgKTtcbiAgaGl0c0MxLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1bMF1bXCJzaGlwRGV0YWlsc1wiXVtcIm51bWJlck9mSGl0c1wiXX0gXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVswXVtcInNoaXBEZXRhaWxzXCJdW1wibGVuZ3RoXCJdfWA7XG5cbiAgY29uc3QgaW1nQzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGljdHVyZVwiKTtcbiAgY29uc3QgaGl0c0MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGltZ0MyLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjEvMjtcIik7XG4gIGltZ0MyLmNsYXNzTGlzdC5hZGQoXCJzaGlwRmxvYXRcIik7XG4gIGhpdHNDMi5zZXRBdHRyaWJ1dGUoXG4gICAgXCJzdHlsZVwiLFxuICAgIFwiZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyO1wiXG4gICk7XG4gIGhpdHNDMi5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlcltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdWzFdW1wic2hpcERldGFpbHNcIl1bXCJudW1iZXJPZkhpdHNcIl19IFxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1bMV1bXCJzaGlwRGV0YWlsc1wiXVtcImxlbmd0aFwiXX1gO1xuXG4gIGNvbnN0IGltZ0MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBpY3R1cmVcIik7XG4gIGNvbnN0IGhpdHNDMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbWdDMy5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoxLzI7XCIpO1xuICBpbWdDMy5jbGFzc0xpc3QuYWRkKFwic2hpcEZsb2F0XCIpO1xuICBoaXRzQzMuc2V0QXR0cmlidXRlKFxuICAgIFwic3R5bGVcIixcbiAgICBcImdyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjtcIlxuICApO1xuICBoaXRzQzMuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVsyXVtcInNoaXBEZXRhaWxzXCJdW1wibnVtYmVyT2ZIaXRzXCJdfSBcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlcltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdWzJdW1wic2hpcERldGFpbHNcIl1bXCJsZW5ndGhcIl19YDtcblxuICBjb25zdCBpbWdDNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwaWN0dXJlXCIpO1xuICBjb25zdCBoaXRzQzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgaW1nQzQuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46MS8yO1wiKTtcbiAgaW1nQzQuY2xhc3NMaXN0LmFkZChcInNoaXBGbG9hdFwiKTtcbiAgaGl0c0M0LnNldEF0dHJpYnV0ZShcbiAgICBcInN0eWxlXCIsXG4gICAgXCJncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCJcbiAgKTtcbiAgaGl0c0M0LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1bM11bXCJzaGlwRGV0YWlsc1wiXVtcIm51bWJlck9mSGl0c1wiXX0gXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVszXVtcInNoaXBEZXRhaWxzXCJdW1wibGVuZ3RoXCJdfWA7XG5cbiAgY29uc3QgaW1nQzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicGljdHVyZVwiKTtcbiAgY29uc3QgaGl0c0M1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGltZ0M1LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjEvMjtcIik7XG4gIGltZ0M1LmNsYXNzTGlzdC5hZGQoXCJzaGlwRmxvYXRcIik7XG4gIGhpdHNDNS5zZXRBdHRyaWJ1dGUoXG4gICAgXCJzdHlsZVwiLFxuICAgIFwiZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyO1wiXG4gICk7XG4gIGhpdHNDNS5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlcltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdWzRdW1wic2hpcERldGFpbHNcIl1bXCJudW1iZXJPZkhpdHNcIl19IFxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1bNF1bXCJzaGlwRGV0YWlsc1wiXVtcImxlbmd0aFwiXX1gO1xuXG4gIGNvbnN0IGltZ0M2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBpY3R1cmVcIik7XG4gIGNvbnN0IGhpdHNDNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbWdDNi5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCBcImdyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoxLzI7XCIpO1xuICBpbWdDNi5jbGFzc0xpc3QuYWRkKFwic2hpcEZsb2F0XCIpO1xuICBoaXRzQzYuc2V0QXR0cmlidXRlKFxuICAgIFwic3R5bGVcIixcbiAgICBcImdyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjtcIlxuICApO1xuICBoaXRzQzYuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVs1XVtcInNoaXBEZXRhaWxzXCJdW1wibnVtYmVyT2ZIaXRzXCJdfSBcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlcltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdWzVdW1wic2hpcERldGFpbHNcIl1bXCJsZW5ndGhcIl19YDtcblxuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlQm9hcmREaXYpO1xuICBzY29yZUJvYXJkRGl2LmFwcGVuZENoaWxkKGh1bWFuU2NvcmUpO1xuICBzY29yZUJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyU2NvcmUpO1xuICBodW1hblNjb3JlLmFwcGVuZENoaWxkKGh1bWFuVGl0bGUpO1xuICBodW1hblNjb3JlLmFwcGVuZENoaWxkKHN1Y2Nlc3MpO1xuICBodW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gxKTtcbiAgaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDEpO1xuICBodW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gyKTtcbiAgaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDIpO1xuICBodW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gzKTtcbiAgaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDMpO1xuICBodW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g0KTtcbiAgaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDQpO1xuICBodW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g1KTtcbiAgaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDUpO1xuICBodW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g2KTtcbiAgaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDYpO1xuICBjb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGNvbXB1dGVyVGl0bGUpO1xuICBjb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKHN1Y2Nlc3NDb21wKTtcbiAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMSk7XG4gIGNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MxKTtcbiAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMik7XG4gIGNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MyKTtcbiAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMyk7XG4gIGNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MzKTtcbiAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNCk7XG4gIGNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M0KTtcbiAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNSk7XG4gIGNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M1KTtcbiAgY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNik7XG4gIGNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M2KTtcbn1cblxuZXhwb3J0IHsgc2NvcmVCb2FyZCB9O1xuIiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9nYW1lLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7XG4gIHJvd3MsXG4gIGNvbHVtbnMsXG4gIGZyb21Db29yZGluYXRlc3RvQ2VsbCxcbiAgYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcyxcbn0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9IGZyb20gXCIuL2NyZWF0ZS1jb250YWluZXJcIjtcbmltcG9ydCB7IGFkZFNoaXBzIH0gZnJvbSBcIi4vYWRkLXNoaXBzXCI7XG5pbXBvcnQgeyByYW5kb21Db29yZGluYXRlcyB9IGZyb20gXCIuL3JhbmRvbS1zaGlwc1wiO1xuaW1wb3J0IHsgdXBkYXRlQ2VsbHMgfSBmcm9tIFwiLi91cGRhdGVcIjtcbmltcG9ydCB7IHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCB9IGZyb20gXCIuL3VwZGF0ZS1jb21wdXRlci1ib2FyZFwiO1xuaW1wb3J0IHsgYWRqYWNlbnQgfSBmcm9tIFwiLi9hZGphY2VudFwiO1xuaW1wb3J0IHsgdXBkYXRlU2NvcmUgfSBmcm9tIFwiLi91cGRhdGUtc2NvcmVcIjtcblxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcihhcmcpIHtcbiAgLyogYXJnIGlzIHRoZSBnYW1lIGNvbnRhaW5lciAqL1xuXG4gIGNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpO1xuICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpOyAvLyBmb3IgdGhlIGNvbXB1dGVyJ3MgYXR0YWNrIHB1cnBvc2VcbiAgbGV0IGFycmF5QWRqYWNlbnQgPSBbXTsgLy8gZm9yIHRoZSBjb21wdXRlcidzIGF0dGFjayBwdXJwb3NlXG5cbiAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGFyZztcbiAgY29uc3QgdHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB3YWl0VHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuICB0dXJuLmNsYXNzTGlzdC5hZGQoXCJ0dXJuXCIpO1xuICB0dXJuLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuICB0dXJuRGl2LmNsYXNzTGlzdC5hZGQoXCJ0dXJuRGl2XCIpO1xuICBib2FyZERpdi5jbGFzc0xpc3QuYWRkKFwiYm9hcmRcIik7XG4gIHJlc3VsdC5jbGFzc0xpc3QuYWRkKFwicmVzdWx0XCIpO1xuICBodW1hbkJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZC1odW1hblwiKTtcbiAgaHVtYW5Cb2FyZC5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAwKTtcbiAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgcmVzZXRCdXR0b24uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJncmlkLXJvdzozLzQ7IGdyaWQtY29sdW1uOjEvMlwiKTtcbiAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlc2V0QnV0dG9uXCIpO1xuICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUkVTRVQgZm9yIE5FVyBHQU1FXCI7XG5cbiAgY29uc3QgaW5pdGlhbFNjcmVlbiA9ICgpID0+IHtcbiAgICAvLyBjbGVhciB0aGUgYm9hcmRcbiAgICBib2FyZERpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xuICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlclBsYXllcigpO1xuXG4gICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIC8vIEFueXRoaW5nIGNsaWNrYWJsZSBzaG91bGQgYmUgYSBidXR0b24hIVxuICAgICAgICBjb25zdCBjZWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgY2VsbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCAtMSk7XG4gICAgICAgIC8vIENyZWF0ZSBhIGRhdGEgYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW5cbiAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LnJvdyA9IGk7XG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqO1xuICAgICAgICBjZWxsQnV0dG9uLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIixgcm93OiR7aX0gY29sdW1uOiR7an1gKTtcbiAgICAgICAgaHVtYW5Cb2FyZC5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcbiAgICAgICAgLy8gQW55dGhpbmcgY2xpY2thYmxlIHNob3VsZCBiZSBhIGJ1dHRvbiEhXG4gICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXG4gICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xuICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajtcbiAgICAgICAgY2VsbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsYHJvdzoke2l9IGNvbHVtbjoke2p9YCk7XG4gICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBhIGJ1dHRvbiBmb3IgYWRkIHNoaXBzIGFuZCBmdW5jdGlvblxuICAgIGFkZGluZ1NoaXBzKHR1cm4sIHBsYXllckNvbXB1dGVyKTtcbiAgfTtcbiAgaW5pdGlhbFNjcmVlbigpO1xuXG4gIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcbiAgICAvLyBnZXQgdGhlIG5ld2VzdCB2ZXJzaW9uIG9mIHRoZSBib2FyZCBhbmQgcGxheWVyIHR1cm5cbiAgICBjb25zdCBib2FyZFJlYWwgPSBnYW1lLmJvYXJkUmVhbCgpO1xuICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBnYW1lLmJvYXJkQ29tcHV0ZXIoKTtcbiAgICBjb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0SHVtYW5QbGF5ZXIoKTtcbiAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGdhbWUuZ2V0Q29tcHV0ZXJQbGF5ZXIoKTtcblxuICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQsIGJvYXJkUmVhbCwgcGxheWVySHVtYW4pO1xuICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLCBib2FyZENvbXB1dGVyLCBwbGF5ZXJDb21wdXRlcik7XG4gICAgdXBkYXRlU2NvcmUocGxheWVySHVtYW4sIHBsYXllckNvbXB1dGVyKTtcblxuICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XG4gICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXG4gICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xuICAgIC8vIGNoZWNrIGFuZCBhdHRhY2tzIGlzIHRoZXJlIG5vIHdpbm5lclxuICAgIGxldCBpc1RoZXJlQVdpbm5lciA9IGdhbWUuaXNUaGVyZUFXaW5uZXIoKTtcbiAgICBzd2l0Y2ggKGlzVGhlcmVBV2lubmVyID09PSBmYWxzZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBpZiAoYWN0aXZlUGxheWVyLnR5cGUgPT09IFwiQ09NUFVURVIgUGxheWVyXCIpIHtcbiAgICAgICAgICBhZGREaXYoYm9hcmREaXYpO1xuICAgICAgICAgIHNldFRpbWVvdXQoY29tcHV0ZXJBdHRhY2ssIDQwMDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIGFjdGl2ZSBwbGF5ZXIgaXMgSHVtYW4gbmVlZCB3YWl0IGZvciBhIGNsaWNrXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gZ2FtZSBvdmVyIC0gZGlzYWJsZSBldmVudCBsaXN0ZW5lclxuICAgICAgICBjb21wdXRlckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXJCb2FyZCk7XG4gICAgICAgIHdhaXRUdXJuLnRleHRDb250ZW50ID0gXCJHQU1FIE9WRVJcIi50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB3YWl0VHVybi5jbGFzc0xpc3QuYWRkKFwiZ2FtZU92ZXJcIik7XG4gICAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5hZGQoXCJ3YWl0VHVyblwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2FpdFR1cm4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5yZW1vdmUoXCJnYW1lT3ZlclwiKTtcbiAgICAgICAgICB3YWl0VHVybi5jbGFzc0xpc3QucmVtb3ZlKFwid2FpdFR1cm5cIik7XG4gICAgICAgIH0sIDEyMDApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgLy8gYWRkIGEgYWRkLXNoaXBzIEJ1dHRvbiBhbmQgdGhlIGV2ZW50bGlzdGVuZXJcbiAgZnVuY3Rpb24gYWRkaW5nU2hpcHModHVybiwgcGxheWVyQ29tcHV0ZXIpIHtcbiAgICBjb25zdCBhZGRTaGlwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkU2hpcHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFNoaXBzRGl2LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgYWRkU2hpcHNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRTaGlwc0RpdlwiKTtcbiAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKFwiYWRkc2hpcHNcIik7XG4gICAgYWRkU2hpcHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFNoaXBCdXR0b25cIik7XG4gICAgYWRkU2hpcHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBTSElQU1wiO1xuXG4gICAgYWRkU2hpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNyZWF0ZUNvbnRhaW5lcnModHVybik7XG4gICAgfSk7XG5cbiAgICBhZGRTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgYWRkU2hpcHMoZ2FtZSwgaHVtYW5Cb2FyZCwgYm9hcmREaXYsIHR1cm4sIGNvbXB1dGVyQm9hcmQsIHBsYXllckNvbXB1dGVyKTtcbiAgICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJhZGRzaGlwc1wiKTtcbiAgICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICAgIH0pO1xuXG4gICAgdHVybi5hcHBlbmRDaGlsZChhZGRTaGlwc0Rpdik7XG4gICAgYWRkU2hpcHNEaXYuYXBwZW5kQ2hpbGQoYWRkU2hpcHNCdXR0b24pO1xuICB9XG5cbiAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgYm9hcmQgY29tcHV0ZXIgZm9yIEh1bWFuIGF0dGFja3NcbiAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyQm9hcmQoZSkge1xuICAgIHN3aXRjaCAoZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS50eXBlID09PSBcIkhVTUFOIFBsYXllclwiKSB7XG4gICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvdztcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcbiAgICAgICAgLy8gTWFrZSBzdXJlIEkndmUgY2xpY2tlZCBhIGNvbHVtbiBhbmQgbm90IHRoZSBnYXBzIGluIGJldHdlZW5cbiAgICAgICAgaWYgKCFzZWxlY3RlZFJvdykgcmV0dXJuO1xuICAgICAgICBnYW1lLnBsYXlSb3VuZChOdW1iZXIoc2VsZWN0ZWRSb3cpLCBOdW1iZXIoc2VsZWN0ZWRDb2x1bW4pKTtcbiAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgd2FpdFR1cm4udGV4dENvbnRlbnQgPSBcIndhaXQgeW91ciB0dXJuXCIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgd2FpdFR1cm4uY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5hZGQoXCJ3YWl0VHVyblwiKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgd2FpdFR1cm4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5yZW1vdmUoXCJ3YWl0VHVyblwiKTtcbiAgICAgICAgfSwgODAwKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGNvbXB1dGVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlckJvYXJkKTtcblxuICAvLyBBZGQgYSBtZXNzYWdlIHRvIGF2b2lkIGNsaWNrIGluIGh1bWFuIGJvYXJkXG4gIGZ1bmN0aW9uIG5vRmlyZVRvRnJpZW5kKCkge1xuICAgIHdhaXRUdXJuLnRleHRDb250ZW50ID0gXCJCRSBDQVJFRlVMLiBkb24ndCBzaG9vdCB5b3VyIGFsbGllc1wiLnRvVXBwZXJDYXNlKCk7XG4gICAgd2FpdFR1cm4uY2xhc3NMaXN0LmFkZChcImRpc3BsYXlcIik7XG4gICAgd2FpdFR1cm4uY2xhc3NMaXN0LmFkZChcIm5vRmlyZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHdhaXRUdXJuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5XCIpO1xuICAgICAgd2FpdFR1cm4uY2xhc3NMaXN0LnJlbW92ZShcIm5vRmlyZVwiKTtcbiAgICB9LCA4MDApO1xuICB9XG4gIGh1bWFuQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5vRmlyZVRvRnJpZW5kKTtcblxuICAvLyB0aGlzIGF0dGFjaydzIGZ1bmN0aW9uIGNvbnNpZGVyIGFkamFjZW50cyB3aGVuIGdvdCBhIGhpdFxuICBmdW5jdGlvbiBjb21wdXRlckF0dGFjaygpIHtcbiAgICBsZXQgY2hlY2sgPSB0cnVlO1xuICAgIGxldCBhZGogPSAwO1xuICAgIGxldCBjb29yZCA9IFtdO1xuICAgIGxldCBhcnJheUFsbEF0dGFjayA9IGdhbWUuZ2V0SHVtYW5QbGF5ZXIoKS5nYW1lYm9hcmRbXCJhcnJheUFsbEF0dGFja1wiXTtcbiAgICB3aGlsZSAoY2hlY2sgPT09IHRydWUpIHtcbiAgICAgIGlmIChhcnJheUFkamFjZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBhZGogPSBhcnJheUFkamFjZW50LnNoaWZ0KCk7XG4gICAgICAgIGNvb3JkID0gdG90YWxDZWxscy5hdChhZGopLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSwgY29vcmRbMV1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29vcmQgPSByYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgICBhZGogPSB0b3RhbENlbGxzLmluZGV4T2YoY29vcmQudG9TdHJpbmcoKSk7XG4gICAgICB9XG4gICAgICBjaGVjayA9IGFycmF5QWxsQXR0YWNrLmhhcyhjb29yZC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgbGV0IGNlbGwgPSBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpO1xuICAgIGdhbWUucGxheVJvdW5kQ29tcHV0ZXIoY2VsbFswXSwgY2VsbFsxXSk7XG4gICAgLy8gaWYgZ290IGEgaGl0IGxvb2sgZm9yIGFkamFjZW50c1xuICAgIGxldCBib2FyZFJlYWwgPSBnYW1lLmJvYXJkUmVhbCgpO1xuICAgIGlmIChib2FyZFJlYWxbY2VsbFswXV1bY2VsbFsxXV0udmFsdWUgPT09IDUpIHtcbiAgICAgIGxldCBhcnJheVRlbXAgPSBhZGphY2VudC5nZXQoYWRqKTtcbiAgICAgIGFycmF5VGVtcC5tYXAoKHgpID0+IGFycmF5QWRqYWNlbnQucHVzaCh4KSk7XG4gICAgICBpZiAoYXJyYXlBZGphY2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGFycmF5QWRqYWNlbnQgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcbiAgICB1cGRhdGVTY3JlZW4oKTtcbiAgfVxuXG4gIC8vIGFkZCBhIHJlc3VsdCBnYW1lXG4gIGNvbnN0IHJlc3VsdEdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZXN1bHRHYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJyZXN1bHRNZXNzYWdlXCIpO1xuICBjb25zdCBhY3RpdmVNZXNzYWdlID0gZ2FtZS5nZXRHYW1lTWVzc2FnZSgpO1xuICBjb25zdCBnZXRNZXNzYWdlID0gKGFjdGl2ZU1lc3NhZ2UpID0+IHtcbiAgICBhY3RpdmVNZXNzYWdlID0gZ2FtZS5nZXRHYW1lTWVzc2FnZSgpO1xuICAgIHJlc3VsdEdhbWVEaXYudGV4dENvbnRlbnQgPSBhY3RpdmVNZXNzYWdlO1xuICB9O1xuICByZXN1bHQuYXBwZW5kQ2hpbGQocmVzdWx0R2FtZURpdik7XG5cbiAgLy8gYWRkIGEgZGl2IHdpdGggY291bnQgZG93biBmb3IgY29tcHV0ZXIgYXR0YWNrIGFuZCByZW1vdmUgaXRcbiAgZnVuY3Rpb24gYWRkRGl2KGFyZykge1xuICAgIGNvbnN0IGF0dGFja01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGF0dGFja01lc3NhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhdHRhY2tNZXNzYWdlXCIpO1xuICAgIGF0dGFja01lc3NhZ2UuY2xhc3NMaXN0LmFkZChcImF0dGFja01lc3NhZ2VcIik7XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGV4dFwiKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiY29sb3I6bGlnaHR5ZWxsb3c7XCIpO1xuICAgIHRleHQuaW5uZXJUZXh0ID0gXCJUaGUgY29tcHV0ZXIgd2lsbCBhdHRhY2sgb24gXCIudG9VcHBlckNhc2UoKTtcbiAgICBsZXQgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvdW50XCIpO1xuICAgIHRleHQxLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIFwiZm9udC1zaXplOjEuMXJlbTsgY29sb3I6cmVkO1wiKTtcbiAgICBsZXQgbnVtYmVyID0gNDtcbiAgICBhdHRhY2tNZXNzYWdlLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGF0dGFja01lc3NhZ2UuYXBwZW5kQ2hpbGQodGV4dDEpO1xuICAgIGxldCBpZCA9IHNldEludGVydmFsKGNvdW50LCAxMDAwKTtcbiAgICBmdW5jdGlvbiBjb3VudCgpIHtcbiAgICAgIG51bWJlciA9IG51bWJlciAtIDE7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvdW50XCIpLmlubmVyVGV4dCA9IGAgPT4gJHtudW1iZXJ9YDtcbiAgICAgIGlmIChudW1iZXIgPD0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0XCIpLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY291bnRcIikuaW5uZXJUZXh0ID0gXCJET05FXCI7XG4gICAgICAgIHNldFRpbWVvdXQocmVtb3ZlRGl2LCAxMDAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYXJnLmFwcGVuZENoaWxkKGF0dGFja01lc3NhZ2UpO1xuICB9XG4gIC8vIHJlbW92ZSB0aGUgY291bnQgZG93biBtZXNzYWdlIGRpdlxuICBmdW5jdGlvbiByZW1vdmVEaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdHRhY2tNZXNzYWdlXCIpO1xuICAgIGRpdi5yZW1vdmUoKTtcbiAgfVxuXG4gIC8vIGV2ZW50bGlzdGVuZXIgZm9yIHJlc2V0XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdEb2MpO1xuXG4gIGZ1bmN0aW9uIG5ld0RvYygpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHR1cm4pO1xuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkRGl2KTtcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG4gIHR1cm4uYXBwZW5kQ2hpbGQodHVybkRpdik7XG4gIHR1cm4uYXBwZW5kQ2hpbGQocmVzdWx0KTtcblxuICBib2FyZERpdi5hcHBlbmRDaGlsZChodW1hbkJvYXJkKTtcbiAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZCk7XG5cbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3YWl0VHVybik7XG59XG5cbmV4cG9ydCB7IHNjcmVlbkNvbnRyb2xsZXIgfTtcbiIsIi8vIGEgY2xhc3MgU2hpcFxuY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgdGhpcy5sZW5ndGggPSB2YWx1ZTtcbiAgICB0aGlzLm51bWJlck9mSGl0cyA9IDA7XG4gICAgdGhpcy5iZWVuU3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaGl0KGhpdHMgPSB0aGlzLm51bWJlck9mSGl0cykge1xuICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gaGl0cyArIDE7XG4gICAgdGhpcy5iZWVuU3VuayA9IHRoaXMuaXNTdW5rKCk7XG4gICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZIaXRzO1xuICB9XG5cbiAgaXNTdW5rKGhpdHMgPSB0aGlzLm51bWJlck9mSGl0cykge1xuICAgIHN3aXRjaCAoaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRydWU7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZW5TdW5rO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsImZ1bmN0aW9uIHNob3dFcnJvcihhcmcxLCBhcmcyKSB7XG4gIC8vIGFyZzEgaXMgdGhlIGRpdiAtIGFyZzIgaXMgdGhlIG1lc3NhZ2UgZm9yIHRoZSB0eXBlIG9mIGVycm9yXG4gIGxldCBpZCA9IGFyZzEuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG5cbiAgY29uc3QgaW5wdXRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcbiAgaW5wdXRFcnJvci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2lkfWVycm9yYCk7XG4gIGlucHV0RXJyb3Iuc2V0QXR0cmlidXRlKFwiYXJpYS1saXZlXCIsIFwicG9saXRlXCIpO1xuICBpbnB1dEVycm9yLnRleHRDb250ZW50ID0gYXJnMjtcblxuICBjb25zdCBwYXJlbnRFbGVtZW50ID0gYXJnMS5wYXJlbnROb2RlO1xuICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RXJyb3IpO1xufVxuXG5leHBvcnQgeyBzaG93RXJyb3IgfTtcbiIsImltcG9ydCB7IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xuXG5mdW5jdGlvbiB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQoYXJnMSwgYXJnMiwgYXJnMykge1xuICBsZXQgYm9hcmREaXYgPSBhcmcxO1xuICBsZXQgYm9hcmRDb250ZW50ID0gYXJnMjtcbiAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuXG4gIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcbiAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xuXG4gIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cbiAgICBsZXQgeCA9IGluZGV4WzFdO1xuICAgIHN3aXRjaCAoYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlID09PSAxKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHguY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgeC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgeC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3dpdGNoIChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWUgPT09IDApIHtcbiAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICB4LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc3dpdGNoIChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWUgPT09IDIpIHtcbiAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgIHguY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoXCJjZWxsTWlzc2VkXCIpO1xuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoXG4gICAgICAgICAgICAgICAgICBib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWUgPT09IDVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgeC5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoXCJjZWxsSGl0XCIpO1xuICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVGA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGxldCBhcnJheVNoaXBzID0gW107XG4gIGlmIChhcmczICE9PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheVNoaXBzID0gYXJnM1tcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdO1xuICB9XG5cbiAgbGV0IGNvb3JkU2hpcHNTdW5rID0gW107XG5cbiAgYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgc3dpdGNoIChlbGVtZW50W1wic2hpcERldGFpbHNcIl1bXCJiZWVuU3Vua1wiXSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBlbGVtZW50W1wiY29vcmRpbmF0ZXNcIl0uZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XG4gICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IGFycmF5SW5kZXhOb2RlQW5kQ29vcmQgPSByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpO1xuICBsZXQgaW5kZXhlc1N1bmtzID0gW107XG4gIGNvb3JkU2hpcHNTdW5rLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBhcnJheUluZGV4Tm9kZUFuZENvb3JkLmZvckVhY2goKHgpID0+IHtcbiAgICAgIGlmICh4WzFdWzBdID09PSBlbGVtZW50KSB7XG4gICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBpbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGxldCBjZWxsID0gY2VsbHNpbkJvYXJkW2VsZW1lbnRdO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxTdW5rXCIpO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlNVTktcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkKGFyZykge1xuICAvKiBhcmcgaXMgdGhlIGRpdiB3aXRoIHRoZSBidXR0b24gY2VsbHMgKi9cbiAgbGV0IGJvYXJkRGl2ID0gYXJnO1xuICBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcbiAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xuXG4gIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cbiAgICBsZXQgeCA9IGluZGV4WzFdO1xuICAgIHguY2xhc3NOYW1lID0gXCJcIjsgLy8gdG8gY2xlYXIgcHJldmlvdXMgY2xhc3NcbiAgICB4LmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIHgudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZCB9O1xuIiwiZnVuY3Rpb24gdXBkYXRlU2NvcmUoYXJnMSwgYXJnMikge1xuICAvKiBhcmcxIGlzIHRoZSBwbGF5ZXJIdW1hbiAgYXJnMiBpcyB0aGUgcGxheWVyQ29tcHV0ZXIgKi9cbiAgY29uc3QgcGxheWVySHVtYW4gPSBhcmcxO1xuICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzI7XG5cbiAgLy8gdXBkYXRlIHRoZSBodW1hbiBzY29yZVxuICBjb25zdCBodW1hblNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1hbi1zY29yZVwiKTtcbiAgY29uc3QgcEh1bWFuU2NvcmUgPSBodW1hblNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwaWN0dXJlXCIpO1xuICBjb25zdCB0SHVtYW5TY29yZSA9IGh1bWFuU2NvcmUucXVlcnlTZWxlY3RvckFsbChcInBcIik7XG5cbiAgY29uc3QgcGljdHVyZXNJbkh1bWFuU2NvcmUgPSBbLi4ucEh1bWFuU2NvcmVdO1xuICBjb25zdCBpdGVyYXRvclAgPSBwaWN0dXJlc0luSHVtYW5TY29yZS5lbnRyaWVzKCk7XG5cbiAgY29uc3QgdGV4dEluSHVtYW5TY29yZSA9IFsuLi50SHVtYW5TY29yZV07XG4gIGNvbnN0IGl0ZXJhdG9yVCA9IHRleHRJbkh1bWFuU2NvcmUuZW50cmllcygpO1xuXG4gIHBpY3R1cmVzSW5IdW1hblNjb3JlLmZvckVhY2goKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yUC5uZXh0KCkudmFsdWU7XG4gICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cbiAgICBsZXQgeCA9IGluZGV4WzFdO1xuICAgIGxldCBzdW5rID1cbiAgICAgIHBsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYWxsU2hpcHNcIl1baW5kZXhbMF1dW1wic2hpcERldGFpbHNcIl1bXCJiZWVuU3Vua1wiXTtcbiAgICBzd2l0Y2ggKHN1bmsgPT09IHRydWUpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgeC5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoXCJzaGlwU3Vua1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcblxuICB0ZXh0SW5IdW1hblNjb3JlLmZvckVhY2goKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yVC5uZXh0KCkudmFsdWU7XG4gICAgbGV0IHggPSBpbmRleFsxXTtcbiAgICBzd2l0Y2ggKGluZGV4WzBdID09PSAxKSB7XG4gICAgICBjYXNlIHRydWU6IHtcbiAgICAgICAgaWYgKHBsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYXJyYXlBbGxBdHRhY2tcIl0uc2l6ZSA+IDApIHtcbiAgICAgICAgICBsZXQgcmF0ZSA9IE1hdGgudHJ1bmMoXG4gICAgICAgICAgICAoKHBsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYXJyYXlBbGxBdHRhY2tcIl0uc2l6ZSAtXG4gICAgICAgICAgICAgIHBsYXllckh1bWFuW1wiZ2FtZWJvYXJkXCJdW1wiYXJyYXlNaXNzZWRcIl0uc2l6ZSkgL1xuICAgICAgICAgICAgICBwbGF5ZXJIdW1hbltcImdhbWVib2FyZFwiXVtcImFycmF5QWxsQXR0YWNrXCJdLnNpemUpICpcbiAgICAgICAgICAgICAgMTAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICB4LnRleHRDb250ZW50ID0gYHN1Y2Nlc3MgcmF0ZTogJHtyYXRlfSVgO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBzd2l0Y2ggKGluZGV4WzBdID4gMSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVFM6ICR7XG4gICAgICAgICAgcGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVtpbmRleFswXSAtIDJdW1wic2hpcERldGFpbHNcIl1bXG4gICAgICAgICAgICBcIm51bWJlck9mSGl0c1wiXG4gICAgICAgICAgXVxuICAgICAgICB9IFxuICAgICAgICAgICAgT0YgJHtcbiAgICAgICAgICAgICAgcGxheWVySHVtYW5bXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXVtpbmRleFswXSAtIDJdW1wic2hpcERldGFpbHNcIl1bXG4gICAgICAgICAgICAgICAgXCJsZW5ndGhcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9YDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcblxuICAvLyB1cGRhdGUgdGhlIGNvbXB1dGVyIHNjb3JlXG5cbiAgY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcHV0ZXItc2NvcmVcIik7XG4gIGNvbnN0IHBDb21wdXRlclNjb3JlID0gY29tcHV0ZXJTY29yZS5xdWVyeVNlbGVjdG9yQWxsKFwicGljdHVyZVwiKTtcbiAgY29uc3QgdENvbXB1dGVyU2NvcmUgPSBjb21wdXRlclNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpO1xuXG4gIGNvbnN0IHBpY3R1cmVzSW5Db21wdXRlclNjb3JlID0gWy4uLnBDb21wdXRlclNjb3JlXTtcbiAgY29uc3QgaXRlcmF0b3JDUCA9IHBpY3R1cmVzSW5Db21wdXRlclNjb3JlLmVudHJpZXMoKTtcblxuICBjb25zdCB0ZXh0SW5Db21wdXRlclNjb3JlID0gWy4uLnRDb21wdXRlclNjb3JlXTtcbiAgY29uc3QgaXRlcmF0b3JDVCA9IHRleHRJbkNvbXB1dGVyU2NvcmUuZW50cmllcygpO1xuXG4gIHBpY3R1cmVzSW5Db21wdXRlclNjb3JlLmZvckVhY2goKCkgPT4ge1xuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yQ1AubmV4dCgpLnZhbHVlO1xuICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXG4gICAgbGV0IHggPSBpbmRleFsxXTtcbiAgICBsZXQgc3VuayA9XG4gICAgICBwbGF5ZXJDb21wdXRlcltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdW2luZGV4WzBdXVtcInNoaXBEZXRhaWxzXCJdW1xuICAgICAgICBcImJlZW5TdW5rXCJcbiAgICAgIF07XG4gICAgc3dpdGNoIChzdW5rID09PSB0cnVlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHguY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgeC5jbGFzc0xpc3QuYWRkKFwic2hpcFN1bmtcIik7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSk7XG5cbiAgdGV4dEluQ29tcHV0ZXJTY29yZS5mb3JFYWNoKCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvckNULm5leHQoKS52YWx1ZTtcbiAgICBsZXQgeCA9IGluZGV4WzFdO1xuICAgIHN3aXRjaCAoaW5kZXhbMF0gPT09IDEpIHtcbiAgICAgIGNhc2UgdHJ1ZToge1xuICAgICAgICBpZiAocGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl1bXCJhcnJheUFsbEF0dGFja1wiXS5zaXplID4gMCkge1xuICAgICAgICAgIGxldCByYXRlID0gTWF0aC50cnVuYyhcbiAgICAgICAgICAgICgocGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl1bXCJhcnJheUFsbEF0dGFja1wiXS5zaXplIC1cbiAgICAgICAgICAgICAgcGxheWVyQ29tcHV0ZXJbXCJnYW1lYm9hcmRcIl1bXCJhcnJheU1pc3NlZFwiXS5zaXplKSAvXG4gICAgICAgICAgICAgIHBsYXllckNvbXB1dGVyW1wiZ2FtZWJvYXJkXCJdW1wiYXJyYXlBbGxBdHRhY2tcIl0uc2l6ZSkgKlxuICAgICAgICAgICAgICAxMDBcbiAgICAgICAgICApO1xuICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgc3VjY2VzcyByYXRlOiAke3JhdGV9JWA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHN3aXRjaCAoaW5kZXhbMF0gPiAxKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUUzogJHtcbiAgICAgICAgICBwbGF5ZXJDb21wdXRlcltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdW2luZGV4WzBdIC0gMl1bXCJzaGlwRGV0YWlsc1wiXVtcbiAgICAgICAgICAgIFwibnVtYmVyT2ZIaXRzXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0gXG4gICAgICAgICAgICBPRiAke1xuICAgICAgICAgICAgICBwbGF5ZXJDb21wdXRlcltcImdhbWVib2FyZFwiXVtcImFsbFNoaXBzXCJdW2luZGV4WzBdIC0gMl1bXG4gICAgICAgICAgICAgICAgXCJzaGlwRGV0YWlsc1wiXG4gICAgICAgICAgICAgIF1bXCJsZW5ndGhcIl1cbiAgICAgICAgICAgIH1gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgeyB1cGRhdGVTY29yZSB9O1xuIiwiaW1wb3J0IHsgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfSBmcm9tIFwiLi9hdXhpbGlhcnktZnVuY3Rpb25zXCI7XG5cbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzKGFyZzEsIGFyZzIsIGFyZzMpIHtcbiAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcbiAgbGV0IGJvYXJkQ29udGVudCA9IGFyZzI7XG4gIGxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcblxuICBjb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XG4gIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcblxuICBjZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XG4gICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xuICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXG4gICAgbGV0IHggPSBpbmRleFsxXTsgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xuXG4gICAgc3dpdGNoIChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWUgPT09IDEpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgeC5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoXCJjZWxsU2hpcEFkZGVkXCIpO1xuICAgICAgICB4LnRleHRDb250ZW50ID0gYFNISVBgO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHN3aXRjaCAoYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlID09PSAwKSB7XG4gICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgeC5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN3aXRjaCAoYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlID09PSAyKSB7XG4gICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICB4LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKFwiY2VsbE1pc3NlZFwiKTtcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYHdhdGVyYDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKFxuICAgICAgICAgICAgICAgICAgYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlID09PSA1XG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgICAgICAgICAgIHguY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKFwiY2VsbEhpdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9KTtcblxuICBsZXQgYXJyYXlTaGlwcyA9IFtdO1xuICBpZiAoYXJnMyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXlTaGlwcyA9IGFyZzNbXCJnYW1lYm9hcmRcIl1bXCJhbGxTaGlwc1wiXTtcbiAgfVxuXG4gIGxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xuXG4gIGFycmF5U2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHN3aXRjaCAoZWxlbWVudFtcInNoaXBEZXRhaWxzXCJdW1wiYmVlblN1bmtcIl0pIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgZWxlbWVudFtcImNvb3JkaW5hdGVzXCJdLmZvckVhY2goKHgpID0+IHtcbiAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBhcnJheUluZGV4Tm9kZUFuZENvb3JkID0gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKTtcbiAgbGV0IGluZGV4ZXNTdW5rcyA9IFtdO1xuICBjb29yZFNoaXBzU3Vuay5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgYXJyYXlJbmRleE5vZGVBbmRDb29yZC5mb3JFYWNoKCh4KSA9PiB7XG4gICAgICBpZiAoeFsxXVswXSA9PT0gZWxlbWVudCkge1xuICAgICAgICBpbmRleGVzU3Vua3MucHVzaCh4WzBdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgaW5kZXhlc1N1bmtzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjZWxsc2luQm9hcmRbZWxlbWVudF0pO1xuICAgIGxldCBjZWxsID0gY2VsbHNpbkJvYXJkW2VsZW1lbnRdO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxTdW5rXCIpO1xuICAgIGNlbGwudGV4dENvbnRlbnQgPSBcIlNVTktcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzKGFyZykge1xuICAvKiBhcmcgaXMgdGhlIGRpdiB3aXRoIHRoZSBidXR0b24gY2VsbHMgKi9cbiAgbGV0IGJvYXJkRGl2ID0gYXJnO1xuICBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcbiAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xuXG4gIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XG4gICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cbiAgICBsZXQgeCA9IGluZGV4WzFdO1xuICAgIHguY2xhc3NOYW1lID0gXCJcIjsgLy8gdG8gY2xlYXIgcHJldmlvdXMgY2xhc3NcbiAgICB4LmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgIHgudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlQ2VsbHMsIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzIH07XG4iLCJpbXBvcnQgXCIuL3N0eWxlLXJlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS1iYXNlLmNzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS1tb2JpbGUuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLXRhYmxldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBzY3JlZW5Db250cm9sbGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9zY3JlZW4tY29udHJvbGxlci5qc1wiO1xuXG5cbmNvbnN0IG1ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWV0YVwiKTtcbm1ldGEuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xubWV0YS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIsIFwibWFuZWxseTY3XFwncyBleGVyY2lzZSBzdHVkeSBwcm9qZWN0OiBCYXR0bGVzaGlwIHdpdGhpbiB0aGUgY3VycmljdWx1bSBUaGUgT2RpbiBQcm9qZWN0XCIpO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgZ2FtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhaW5lclwiKTtcbiAgZ2FtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2xhdGVcIiwgXCJub1wiKTtcbiAgc2NyZWVuQ29udHJvbGxlcihnYW1lQ29udGFpbmVyKTtcblxuICByZXR1cm4gZ2FtZUNvbnRhaW5lcjtcbn1cblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtZXRhKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLWJhc2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtYmFzZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtbW9iaWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLW1vYmlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXRhYmxldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS10YWJsZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
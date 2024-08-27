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
.cell {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-size: 0.7rem;
	border: 1px solid grey;
	background: lightyellow;
	cursor: pointer;
	max-width: 100%;
  }

  .cellShipAdded {
	  background-color: #5be734; 
	  color: #207d0e;
	  font-size: 8px;
  }

  .cellMissed {
	  background-color: #effefb; 
	  color: #087b7d;
	  font-size: 8px;
  }

  .cellHit {
	  background-color: #fea173; 
	  color: #9b1b11;
	  font-size: 9px;
  }

  .cellSunk {
	  background-color: black; 
	  color: white;
	  font-size: 9px;
  }

 [class^='cell']:hover{
  background-color: #545e75;
	}

 [class^='cell']:active{
	  background-color: #b2b9c7;
	}

.headCell {
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 100%;
	height: 100%;
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
    color: black; line-height: 2rem; padding-left: 10px; padding-top: 15px; padding-right: 10px; 
	padding-bottom: 15px;
    border-radius: 10px; font-family: Georgia, serif; font-weight: normal; text-decoration: none;
    font-style: normal; font-variant: normal; text-transform: none; 
    background-image: linear-gradient(to right, rgb(105,117,142) 0%, rgb(214,217,225) 100%) ; 
    box-shadow: #edeef1 2px 2px 4px 2px; border: 2px solid #353945; display: inline-block;

	transition: transform 250ms ease-in-out;
}
.addShipButton:hover {
    background: #545e75; color: white;
	transform: scale(1.05);
 }
.addShipButton:active {
    background: #454d5f; color: white; }

.resetButton {    
	color: #012e32; line-height: 13px; padding: 15px;
	border-radius: 10px; font-family: Georgia, serif; font-weight: normal; text-decoration: none;
	font-style: normal; font-variant: normal; text-transform: none; 
	background-image: linear-gradient(to right, #b9fef6 0%, #09c3c1 100%) ; 
	box-shadow: #edeef1 2px 2px 4px 2px; border: 2px solid #353945; display: inline-block;
	transform: translateY(-100%);
	transition: transform 250ms ease-in-out;
}
.resetButton:hover {
	background: #545e75; color: white; 
	transform: scale(1.05);
	transform: translateY(-100%);
}
.resetButton:active {
	background: #454d5f; color: white; }

/* score elements */

.scoreTitle{
	display: flex;
	justify-content: center;
	text-align: center;
	color: #3c4350;
	font-weight: bold;
	font-size: 0.9rem;
}

.shipFloat{
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: cover;
  	background-position: center;
}

.shipSunk{
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	background-size: cover;
  	background-position: center;
	border-bottom: 2px solid #09c3c1;
}
	 
/* This is the style of our error messages */
	  .error {
		width: 100%;
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
	
`, "",{"version":3,"sources":["webpack://./src/style-base.css"],"names":[],"mappings":"AAAA,4BAA4B;AAC5B;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,sBAAsB;CACtB,uBAAuB;CACvB,eAAe;CACf,eAAe;EACd;;EAEA;GACC,yBAAyB;GACzB,cAAc;GACd,cAAc;EACf;;EAEA;GACC,yBAAyB;GACzB,cAAc;GACd,cAAc;EACf;;EAEA;GACC,yBAAyB;GACzB,cAAc;GACd,cAAc;EACf;;EAEA;GACC,uBAAuB;GACvB,YAAY;GACZ,cAAc;EACf;;CAED;EACC,yBAAyB;CAC1B;;CAEA;GACE,yBAAyB;CAC3B;;AAED;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,eAAe;CACf,sBAAsB;CACtB,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;EACd;;AAEF,YAAY;AACZ;CACC,aAAa;CACb,WAAW;EACV;;AAEF;IACI,YAAY,EAAE,iBAAiB,EAAE,kBAAkB,EAAE,iBAAiB,EAAE,mBAAmB;CAC9F,oBAAoB;IACjB,mBAAmB,EAAE,2BAA2B,EAAE,mBAAmB,EAAE,qBAAqB;IAC5F,kBAAkB,EAAE,oBAAoB,EAAE,oBAAoB;IAC9D,wFAAwF;IACxF,mCAAmC,EAAE,yBAAyB,EAAE,qBAAqB;;CAExF,uCAAuC;AACxC;AACA;IACI,mBAAmB,EAAE,YAAY;CACpC,sBAAsB;CACtB;AACD;IACI,mBAAmB,EAAE,YAAY,EAAE;;AAEvC;CACC,cAAc,EAAE,iBAAiB,EAAE,aAAa;CAChD,mBAAmB,EAAE,2BAA2B,EAAE,mBAAmB,EAAE,qBAAqB;CAC5F,kBAAkB,EAAE,oBAAoB,EAAE,oBAAoB;CAC9D,sEAAsE;CACtE,mCAAmC,EAAE,yBAAyB,EAAE,qBAAqB;CACrF,4BAA4B;CAC5B,uCAAuC;AACxC;AACA;CACC,mBAAmB,EAAE,YAAY;CACjC,sBAAsB;CACtB,4BAA4B;AAC7B;AACA;CACC,mBAAmB,EAAE,YAAY,EAAE;;AAEpC,mBAAmB;;AAEnB;CACC,aAAa;CACb,uBAAuB;CACvB,kBAAkB;CAClB,cAAc;CACd,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,yDAAuC;CACvC,sBAAsB;GACpB,2BAA2B;AAC9B;;AAEA;CACC,yDAA4C;CAC5C,sBAAsB;GACpB,2BAA2B;CAC7B,gCAAgC;AACjC;;AAEA,4CAA4C;GACzC;EACD,WAAW;EACX,UAAU;EACV,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,sBAAsB;GACrB;;GAEA;EACD,cAAc;GACb","sourcesContent":["/* cells - buttons - images*/\r\n.cell {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tfont-size: 0.7rem;\r\n\tborder: 1px solid grey;\r\n\tbackground: lightyellow;\r\n\tcursor: pointer;\r\n\tmax-width: 100%;\r\n  }\r\n\r\n  .cellShipAdded {\r\n\t  background-color: #5be734; \r\n\t  color: #207d0e;\r\n\t  font-size: 8px;\r\n  }\r\n\r\n  .cellMissed {\r\n\t  background-color: #effefb; \r\n\t  color: #087b7d;\r\n\t  font-size: 8px;\r\n  }\r\n\r\n  .cellHit {\r\n\t  background-color: #fea173; \r\n\t  color: #9b1b11;\r\n\t  font-size: 9px;\r\n  }\r\n\r\n  .cellSunk {\r\n\t  background-color: black; \r\n\t  color: white;\r\n\t  font-size: 9px;\r\n  }\r\n\r\n [class^='cell']:hover{\r\n  background-color: #545e75;\r\n\t}\r\n\r\n [class^='cell']:active{\r\n\t  background-color: #b2b9c7;\r\n\t}\r\n\r\n.headCell {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tfont-size: 1rem;\r\n\tborder: 1px solid grey;\r\n\tcolor: lightyellow;\r\n\tbackground: #353a45;\r\n\tcursor: pointer;\r\n  }\r\n\r\n/* buttons */\r\n.hide {\r\n\tdisplay: none;\r\n\topacity: 0%;\r\n  }\r\n\r\n.addShipButton {       \r\n    color: black; line-height: 2rem; padding-left: 10px; padding-top: 15px; padding-right: 10px; \r\n\tpadding-bottom: 15px;\r\n    border-radius: 10px; font-family: Georgia, serif; font-weight: normal; text-decoration: none;\r\n    font-style: normal; font-variant: normal; text-transform: none; \r\n    background-image: linear-gradient(to right, rgb(105,117,142) 0%, rgb(214,217,225) 100%) ; \r\n    box-shadow: #edeef1 2px 2px 4px 2px; border: 2px solid #353945; display: inline-block;\r\n\r\n\ttransition: transform 250ms ease-in-out;\r\n}\r\n.addShipButton:hover {\r\n    background: #545e75; color: white;\r\n\ttransform: scale(1.05);\r\n }\r\n.addShipButton:active {\r\n    background: #454d5f; color: white; }\r\n\r\n.resetButton {    \r\n\tcolor: #012e32; line-height: 13px; padding: 15px;\r\n\tborder-radius: 10px; font-family: Georgia, serif; font-weight: normal; text-decoration: none;\r\n\tfont-style: normal; font-variant: normal; text-transform: none; \r\n\tbackground-image: linear-gradient(to right, #b9fef6 0%, #09c3c1 100%) ; \r\n\tbox-shadow: #edeef1 2px 2px 4px 2px; border: 2px solid #353945; display: inline-block;\r\n\ttransform: translateY(-100%);\r\n\ttransition: transform 250ms ease-in-out;\r\n}\r\n.resetButton:hover {\r\n\tbackground: #545e75; color: white; \r\n\ttransform: scale(1.05);\r\n\ttransform: translateY(-100%);\r\n}\r\n.resetButton:active {\r\n\tbackground: #454d5f; color: white; }\r\n\r\n/* score elements */\r\n\r\n.scoreTitle{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\ttext-align: center;\r\n\tcolor: #3c4350;\r\n\tfont-weight: bold;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.shipFloat{\r\n\tbackground-image: url('./img/ship.jpg');\r\n\tbackground-size: cover;\r\n  \tbackground-position: center;\r\n}\r\n\r\n.shipSunk{\r\n\tbackground-image: url('./img/ship-sunk.jpg');\r\n\tbackground-size: cover;\r\n  \tbackground-position: center;\r\n\tborder-bottom: 2px solid #09c3c1;\r\n}\r\n\t \r\n/* This is the style of our error messages */\r\n\t  .error {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0;\r\n\t\tfont-size: 1rem;\r\n\t\tcolor: white;\r\n\t\tbackground-color: #900;\r\n\t\tborder-radius: 0 0 5px 5px;\r\n\t\tbox-sizing: border-box;\r\n\t  }\r\n\t  \r\n\t  .error.active {\r\n\t\tpadding: 0.3em;\r\n\t  }\r\n\t\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (max-width: 620px){

  main {
    width: 100%;
  }
    
  .turn {
    width: 100%;
    padding-top: 45px;
    position: relative;
  }
  
  .waitTurn {
    position: absolute;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
  }

  .result { 
    position: absolute;
    transform: translateY(-50%);
    width: 100%;
    height: 100%;
  }

  .randomships {   
    font-size: 0.7rem;
   }
  
   .board{
    grid-column: 2/3;   /* esta linea se asocia al grid del container */
    grid-row: 2/3;     /* esta linea se asocia al grid del container */
    background-color: #454d5f;
    height:100%;
    width: 100%;
    display: flex;
    flex-direction:row;
    padding-left: 10px;
    padding-top: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
    }
  
  .board-human{
    max-width: 220px;
    max-height: 249px;
  }
  
  .board-computer{
    max-width: 220px;
    max-height: 249px;
  }
  
  .scoreBoard{
    width: 85px;
    height: auto;
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
    position: absolute;
    transform: translateY(-100%);
    width: 75% ;
    }
  
}
  
@media screen and (max-width: 620px){
	.cell{
	   display: flex;
	   justify-content: center;
	   align-items: center;
	   text-align: center;
	   font-size: 0.7rem;
	   border: 1px solid grey;
	   background: lightyellow;
	   cursor: pointer;
	   max-width: 17px;
	   max-height: 19.2px;
	 }

	.cellShipAdded {
		background-color: #5be734; 
		color: #207d0e;
		font-size: 4px;
		width: 17px;
	    height: 19.2px;
	}
	.cellMissed {
		background-color: #effefb; 
		color: #087b7d;
		font-size: 4px;
		width: 17px;
	    height: 19.2px;
	}
  
	.cellHit {
		background-color: #fea173; 
		color: #9b1b11;
		font-size: 5px;
		width: 17px;
	    height: 19.2px;
	}
  
	.cellSunk {
		background-color: black; 
		color: white;
		font-size: 5px;
		width: 17px;
	    height: 19.2px;
	}

	.addShipButton {     
		font-size: 0.4rem;
		width: 70px; height: 85px;
		text-wrap: nowrap;
	}

	picture {
		width: 50px;
	}

	.error.active {
		height: 60px;
	  }
   }
`, "",{"version":3,"sources":["webpack://./src/style-mobile.css"],"names":[],"mappings":"AAAA;;EAEE;IACE,WAAW;EACb;;EAEA;IACE,WAAW;IACX,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,kBAAkB;IAClB,2BAA2B;IAC3B,WAAW;IACX,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,2BAA2B;IAC3B,WAAW;IACX,YAAY;EACd;;EAEA;IACE,iBAAiB;GAClB;;GAEA;IACC,gBAAgB,IAAI,+CAA+C;IACnE,aAAa,MAAM,+CAA+C;IAClE,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,2BAA2B;IAC3B;;EAEF;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;GACC,kBAAkB;GAClB,SAAS;GACT,UAAU;GACV,YAAY;GACZ,0BAA0B;EAC3B;;EAEA;IACE,0BAA0B;EAC5B;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;IACjB;;AAEJ;IACI,kBAAkB;IAClB,4BAA4B;IAC5B,WAAW;IACX;;AAEJ;;AAEA;CACC;IACG,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,sBAAsB;IACtB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,kBAAkB;EACpB;;CAED;EACC,yBAAyB;EACzB,cAAc;EACd,cAAc;EACd,WAAW;KACR,cAAc;CAClB;CACA;EACC,yBAAyB;EACzB,cAAc;EACd,cAAc;EACd,WAAW;KACR,cAAc;CAClB;;CAEA;EACC,yBAAyB;EACzB,cAAc;EACd,cAAc;EACd,WAAW;KACR,cAAc;CAClB;;CAEA;EACC,uBAAuB;EACvB,YAAY;EACZ,cAAc;EACd,WAAW;KACR,cAAc;CAClB;;CAEA;EACC,iBAAiB;EACjB,WAAW,EAAE,YAAY;EACzB,iBAAiB;CAClB;;CAEA;EACC,WAAW;CACZ;;CAEA;EACC,YAAY;GACX;GACA","sourcesContent":["@media screen and (max-width: 620px){\r\n\r\n  main {\r\n    width: 100%;\r\n  }\r\n    \r\n  .turn {\r\n    width: 100%;\r\n    padding-top: 45px;\r\n    position: relative;\r\n  }\r\n  \r\n  .waitTurn {\r\n    position: absolute;\r\n    transform: translateY(-50%);\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .result { \r\n    position: absolute;\r\n    transform: translateY(-50%);\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .randomships {   \r\n    font-size: 0.7rem;\r\n   }\r\n  \r\n   .board{\r\n    grid-column: 2/3;   /* esta linea se asocia al grid del container */\r\n    grid-row: 2/3;     /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height:100%;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction:row;\r\n    padding-left: 10px;\r\n    padding-top: 10px;\r\n    flex-wrap: wrap;\r\n    justify-content: flex-start;\r\n    }\r\n  \r\n  .board-human{\r\n    max-width: 220px;\r\n    max-height: 249px;\r\n  }\r\n  \r\n  .board-computer{\r\n    max-width: 220px;\r\n    max-height: 249px;\r\n  }\r\n  \r\n  .scoreBoard{\r\n    width: 85px;\r\n    height: auto;\r\n  }\r\n  \r\n  .resetButton {\r\n   position: absolute;\r\n   top: 25px;\r\n   left: 15px;\r\n   height: 25px;\r\n   padding: 1px 15px 1px 15px;\r\n  }\r\n  \r\n  .addships {\r\n    padding: 1px 15px 1px 15px;\r\n  }\r\n\r\n  .board {\r\n    position: relative;\r\n    padding-top: 30px;\r\n    }\r\n\r\n.attackMessage {\r\n    position: absolute;\r\n    transform: translateY(-100%);\r\n    width: 75% ;\r\n    }\r\n  \r\n}\r\n  \r\n@media screen and (max-width: 620px){\r\n\t.cell{\r\n\t   display: flex;\r\n\t   justify-content: center;\r\n\t   align-items: center;\r\n\t   text-align: center;\r\n\t   font-size: 0.7rem;\r\n\t   border: 1px solid grey;\r\n\t   background: lightyellow;\r\n\t   cursor: pointer;\r\n\t   max-width: 17px;\r\n\t   max-height: 19.2px;\r\n\t }\r\n\r\n\t.cellShipAdded {\r\n\t\tbackground-color: #5be734; \r\n\t\tcolor: #207d0e;\r\n\t\tfont-size: 4px;\r\n\t\twidth: 17px;\r\n\t    height: 19.2px;\r\n\t}\r\n\t.cellMissed {\r\n\t\tbackground-color: #effefb; \r\n\t\tcolor: #087b7d;\r\n\t\tfont-size: 4px;\r\n\t\twidth: 17px;\r\n\t    height: 19.2px;\r\n\t}\r\n  \r\n\t.cellHit {\r\n\t\tbackground-color: #fea173; \r\n\t\tcolor: #9b1b11;\r\n\t\tfont-size: 5px;\r\n\t\twidth: 17px;\r\n\t    height: 19.2px;\r\n\t}\r\n  \r\n\t.cellSunk {\r\n\t\tbackground-color: black; \r\n\t\tcolor: white;\r\n\t\tfont-size: 5px;\r\n\t\twidth: 17px;\r\n\t    height: 19.2px;\r\n\t}\r\n\r\n\t.addShipButton {     \r\n\t\tfont-size: 0.4rem;\r\n\t\twidth: 70px; height: 85px;\r\n\t\ttext-wrap: nowrap;\r\n\t}\r\n\r\n\tpicture {\r\n\t\twidth: 50px;\r\n\t}\r\n\r\n\t.error.active {\r\n\t\theight: 60px;\r\n\t  }\r\n   }\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width:621px) and (max-width:980px){

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
  
   .board{
    grid-column: 2/3;   /* esta linea se asocia al grid del container */
    grid-row: 2/3;      /* esta linea se asocia al grid del container */
    background-color: #454d5f;
    height:90%;
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;
    grid-template-rows: 1fr 14fr;
    column-gap: 2%;
    padding-bottom: 5%;
    padding-right: 10%;
    }
  
  .board-human{
    max-width: 220px;
    max-height: 325px;
  }
  
  .board-computer{
    max-width: 220px;
    max-height: 325px;
  }
  
  .scoreBoard{
    width: 85px;
    height: 620px;
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
  
}

@media screen and (min-width:621px) and (max-width:980px){
    .cell{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 0.7rem;
        border: 1px solid grey;
        background: lightyellow;
        cursor: pointer;
        max-width: 17px;
        max-height: 23px;
      }
 
     .cellShipAdded {
         background-color: #5be734; 
         color: #207d0e;
         font-size: 4px;
         width: 17px;
         height: 23px;
     }
     .cellMissed {
         background-color: #effefb; 
         color: #087b7d;
         font-size: 4px;
         width: 17px;
         height: 23px;
     }
   
     .cellHit {
         background-color: #fea173; 
         color: #9b1b11;
         font-size: 5px;
         width: 17px;
         height: 23px;
     }
   
     .cellSunk {
         background-color: black; 
         color: white;
         font-size: 5px;
         width: 17px;
         height: 23px;
     }

     picture {
         width: 50px;
     }
 
 /*     .shipFloat{
         background-image: url('./img/ship.jpg');
         background-size: cover;
           background-position: center;
     }
     
     .shipSunk{
         background-image: url('./img/ship-sunk.jpg');
         background-size: cover;
         background-position: center;
         border-bottom: 2px solid #09c3c1;
     } */
}`, "",{"version":3,"sources":["webpack://./src/style-tablet.css"],"names":[],"mappings":"AAAA;;IAEI;MACE,WAAW;MACX,YAAY;IACd;;EAEF;IACE,WAAW;IACX,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;GAClB;;GAEA;IACC,gBAAgB,IAAI,+CAA+C;IACnE,aAAa,OAAO,+CAA+C;IACnE,yBAAyB;IACzB,UAAU;IACV,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB;;EAEF;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,aAAa;EACf;;EAEA;GACC,kBAAkB;GAClB,SAAS;GACT,UAAU;GACV,YAAY;GACZ,0BAA0B;EAC3B;;EAEA;IACE,0BAA0B;EAC5B;;AAEF;;AAEA;IACI;QACI,aAAa;QACb,uBAAuB;QACvB,mBAAmB;QACnB,kBAAkB;QAClB,iBAAiB;QACjB,sBAAsB;QACtB,uBAAuB;QACvB,eAAe;QACf,eAAe;QACf,gBAAgB;MAClB;;KAED;SACI,yBAAyB;SACzB,cAAc;SACd,cAAc;SACd,WAAW;SACX,YAAY;KAChB;KACA;SACI,yBAAyB;SACzB,cAAc;SACd,cAAc;SACd,WAAW;SACX,YAAY;KAChB;;KAEA;SACI,yBAAyB;SACzB,cAAc;SACd,cAAc;SACd,WAAW;SACX,YAAY;KAChB;;KAEA;SACI,uBAAuB;SACvB,YAAY;SACZ,cAAc;SACd,WAAW;SACX,YAAY;KAChB;;KAEA;SACI,WAAW;KACf;;CAEJ;;;;;;;;;;;QAWO;AACR","sourcesContent":["@media screen and (min-width:621px) and (max-width:980px){\r\n\r\n    main {\r\n      width: 100%;\r\n      height: 100%;\r\n    }\r\n    \r\n  .turn {\r\n    width: 100%;\r\n    padding-top: 45px;\r\n  }\r\n  \r\n  .randomships {   \r\n    font-size: 0.7rem;\r\n   }\r\n  \r\n   .board{\r\n    grid-column: 2/3;   /* esta linea se asocia al grid del container */\r\n    grid-row: 2/3;      /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height:90%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\r\n    grid-template-rows: 1fr 14fr;\r\n    column-gap: 2%;\r\n    padding-bottom: 5%;\r\n    padding-right: 10%;\r\n    }\r\n  \r\n  .board-human{\r\n    max-width: 220px;\r\n    max-height: 325px;\r\n  }\r\n  \r\n  .board-computer{\r\n    max-width: 220px;\r\n    max-height: 325px;\r\n  }\r\n  \r\n  .scoreBoard{\r\n    width: 85px;\r\n    height: 620px;\r\n  }\r\n  \r\n  .resetButton {\r\n   position: absolute;\r\n   top: 25px;\r\n   left: 15px;\r\n   height: 25px;\r\n   padding: 1px 15px 1px 15px;\r\n  }\r\n  \r\n  .addships {\r\n    padding: 1px 15px 1px 15px;\r\n  }\r\n  \r\n}\r\n\r\n@media screen and (min-width:621px) and (max-width:980px){\r\n    .cell{\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n        font-size: 0.7rem;\r\n        border: 1px solid grey;\r\n        background: lightyellow;\r\n        cursor: pointer;\r\n        max-width: 17px;\r\n        max-height: 23px;\r\n      }\r\n \r\n     .cellShipAdded {\r\n         background-color: #5be734; \r\n         color: #207d0e;\r\n         font-size: 4px;\r\n         width: 17px;\r\n         height: 23px;\r\n     }\r\n     .cellMissed {\r\n         background-color: #effefb; \r\n         color: #087b7d;\r\n         font-size: 4px;\r\n         width: 17px;\r\n         height: 23px;\r\n     }\r\n   \r\n     .cellHit {\r\n         background-color: #fea173; \r\n         color: #9b1b11;\r\n         font-size: 5px;\r\n         width: 17px;\r\n         height: 23px;\r\n     }\r\n   \r\n     .cellSunk {\r\n         background-color: black; \r\n         color: white;\r\n         font-size: 5px;\r\n         width: 17px;\r\n         height: 23px;\r\n     }\r\n\r\n     picture {\r\n         width: 50px;\r\n     }\r\n \r\n /*     .shipFloat{\r\n         background-image: url('./img/ship.jpg');\r\n         background-size: cover;\r\n           background-position: center;\r\n     }\r\n     \r\n     .shipSunk{\r\n         background-image: url('./img/ship-sunk.jpg');\r\n         background-size: cover;\r\n         background-position: center;\r\n         border-bottom: 2px solid #09c3c1;\r\n     } */\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `/* grids and locations */
@media screen and (min-width: 981px) {  
  .board{
    grid-column: 2/3;   /* esta linea se asocia al grid del container */
    grid-row: 2/3;      /* esta linea se asocia al grid del container */
    background-color: #454d5f;
    height:90%;
    width: 100%;
    display: grid;
    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;
    grid-template-rows: 1fr 14fr;
    column-gap: 5%;
    padding-bottom: 5%;
    padding-right: 10%;
    }
}

.container {
    display: grid;
    grid-template-columns: 0.5fr 6fr 2fr;
    grid-template-rows: 1fr 6fr 1fr;
    background-color: #353a45;
    max-height: 100%;
  }

  .turn {
      grid-row: 1 / 2;      /* esta linea se asocia al grid del container */
      grid-column: 2 / 4;   /* esta linea se asocia al grid del container */
      display: grid;
      grid-template-columns: 2fr 1fr 4fr 1fr 1fr;
      grid-template-rows: 1fr;
  }

  .turnDiv {
    grid-column: 1 / 2;      /* grid turn*/
    grid-row: 1 / 2;
    font-size: 1.7rem;
    color: lightyellow;
  }

  .waitTurn {
    grid-column:4/5;     /* grid turn*/
  }

  .addships {
      grid-column: 2 / 3;      /* grid turn*/
      grid-row: 1 / 2;       
      padding-top: 1%;
  }

  .randomships {              /* grid turn*/
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    padding-top: 1%;
    color: lightyellow;
    display: flex;
    justify-content:flex-start;
  }

  .result {                     /* grid turn*/
  grid-row: 1 / 2;      
  grid-column: 4/ 6; 
  display: grid;
  grid-template-columns: 1fr;
}

.resultMessage {  
  font-size: 2rem ;
  font-weight: 600;
  color: lightyellow;
}

.gridForAdd {
        grid-column-start: 4;   /* esta linea se asocia al grid del board */
        grid-row-start: 2;      /* esta linea se asocia al grid del board */
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

  .formRadio{
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: #b2b9c7;
    line-height: 2;
  }
  
  .submitButton{
    grid-column: 2/3;
    grid-row: 1/2;
  }

  
  
  .board-human {
      position: relative;   /* for headers purpose */

      grid-column: 2/3;   /* esta linea se asocia al grid del board */
      grid-row: 2/3;      /* esta linea se asocia al grid del board */
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
        
        grid-column: 4/5;   /* esta linea se asocia al grid del board */
        grid-row: 2/3;      /* esta linea se asocia al grid del board */
        display: grid;
        height: 100%;
        width: 100%;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(13, 1fr);
        border: 5px solid black;
        gap: 2px;
        padding: 2px;
        background-color: #edeef1; 
        
      }

    .columnsHead {
      position: absolute;    /* in relation parent board-human*/
      transform: translateY(-100%); 
      width: 100% ;
      display:flex; 
      justify-content: space-around;
    }

    .rowsHead{
      position: absolute;    /* in relation parent board-human*/
      transform: translateX(-100%); 
      height: 100%;
    }

    .headComputer {
      position: absolute;    /* in relation parent board-computer*/
      transform: translateY(-100%); 
      color: lightyellow;
      width: 100% ;
      display:flex; 
      justify-content: space-around;
    }

    .attackMessage {
      grid-row: 1/2; 
      grid-column: 2/3; 
      display:flex; 
      flex-wrap:nowrap;
    }
    

    .scoreBoard{
      position: absolute;
      inset: 0px;
      max-width: 115px;
      max-height: 82%;
      margin-top: 6.4rem;
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
      display: grid;
      grid-template-columns: 3fr 2fr;
      grid-template-rows: repeat(8,1fr);
    }


  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;EACE;IACE,gBAAgB,IAAI,+CAA+C;IACnE,aAAa,OAAO,+CAA+C;IACnE,yBAAyB;IACzB,UAAU;IACV,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB;AACJ;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,+BAA+B;IAC/B,yBAAyB;IACzB,gBAAgB;EAClB;;EAEA;MACI,eAAe,OAAO,+CAA+C;MACrE,kBAAkB,IAAI,+CAA+C;MACrE,aAAa;MACb,0CAA0C;MAC1C,uBAAuB;EAC3B;;EAEA;IACE,kBAAkB,OAAO,aAAa;IACtC,eAAe;IACf,iBAAiB;IACjB,kBAAkB;EACpB;;EAEA;IACE,eAAe,MAAM,aAAa;EACpC;;EAEA;MACI,kBAAkB,OAAO,aAAa;MACtC,eAAe;MACf,eAAe;EACnB;;EAEA,4BAA4B,aAAa;IACvC,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,0BAA0B;EAC5B;;EAEA,8BAA8B,aAAa;EAC3C,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;QACQ,oBAAoB,IAAI,2CAA2C;QACnE,iBAAiB,OAAO,2CAA2C;QACnE,gBAAgB;QAChB,uBAAuB;QACvB,aAAa;QACb,WAAW;QACX,eAAe;QACf,kBAAkB;EACxB;;;EAGA;IACE,aAAa;IACb,uBAAuB;IACvB,kCAAkC;;EAEpC;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,aAAa;EACf;;;;EAIA;MACI,kBAAkB,IAAI,wBAAwB;;MAE9C,gBAAgB,IAAI,2CAA2C;MAC/D,aAAa,OAAO,2CAA2C;MAC/D,aAAa;MACb,YAAY;MACZ,WAAW;MACX,sCAAsC;MACtC,mCAAmC;MACnC,uBAAuB;MACvB,QAAQ;MACR,YAAY;MACZ,yBAAyB;IAC3B;;IAEA;QACI,kBAAkB;;QAElB,gBAAgB,IAAI,2CAA2C;QAC/D,aAAa,OAAO,2CAA2C;QAC/D,aAAa;QACb,YAAY;QACZ,WAAW;QACX,sCAAsC;QACtC,mCAAmC;QACnC,uBAAuB;QACvB,QAAQ;QACR,YAAY;QACZ,yBAAyB;;MAE3B;;IAEF;MACE,kBAAkB,KAAK,kCAAkC;MACzD,4BAA4B;MAC5B,YAAY;MACZ,YAAY;MACZ,6BAA6B;IAC/B;;IAEA;MACE,kBAAkB,KAAK,kCAAkC;MACzD,4BAA4B;MAC5B,YAAY;IACd;;IAEA;MACE,kBAAkB,KAAK,qCAAqC;MAC5D,4BAA4B;MAC5B,kBAAkB;MAClB,YAAY;MACZ,YAAY;MACZ,6BAA6B;IAC/B;;IAEA;MACE,aAAa;MACb,gBAAgB;MAChB,YAAY;MACZ,gBAAgB;IAClB;;;IAGA;MACE,kBAAkB;MAClB,UAAU;MACV,gBAAgB;MAChB,eAAe;MACf,kBAAkB;MAClB,iBAAiB;MACjB,gBAAgB;MAChB,yBAAyB;MACzB,8BAA8B;MAC9B,+BAA+B;MAC/B,kBAAkB;;MAElB,aAAa;MACb,2BAA2B;MAC3B,QAAQ;IACV;;IAEA;MACE,aAAa;MACb,8BAA8B;MAC9B,iCAAiC;IACnC","sourcesContent":["/* grids and locations */\r\n@media screen and (min-width: 981px) {  \r\n  .board{\r\n    grid-column: 2/3;   /* esta linea se asocia al grid del container */\r\n    grid-row: 2/3;      /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height:90%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\r\n    grid-template-rows: 1fr 14fr;\r\n    column-gap: 5%;\r\n    padding-bottom: 5%;\r\n    padding-right: 10%;\r\n    }\r\n}\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 6fr 2fr;\r\n    grid-template-rows: 1fr 6fr 1fr;\r\n    background-color: #353a45;\r\n    max-height: 100%;\r\n  }\r\n\r\n  .turn {\r\n      grid-row: 1 / 2;      /* esta linea se asocia al grid del container */\r\n      grid-column: 2 / 4;   /* esta linea se asocia al grid del container */\r\n      display: grid;\r\n      grid-template-columns: 2fr 1fr 4fr 1fr 1fr;\r\n      grid-template-rows: 1fr;\r\n  }\r\n\r\n  .turnDiv {\r\n    grid-column: 1 / 2;      /* grid turn*/\r\n    grid-row: 1 / 2;\r\n    font-size: 1.7rem;\r\n    color: lightyellow;\r\n  }\r\n\r\n  .waitTurn {\r\n    grid-column:4/5;     /* grid turn*/\r\n  }\r\n\r\n  .addships {\r\n      grid-column: 2 / 3;      /* grid turn*/\r\n      grid-row: 1 / 2;       \r\n      padding-top: 1%;\r\n  }\r\n\r\n  .randomships {              /* grid turn*/\r\n    grid-column: 3 / 4;\r\n    grid-row: 1 / 2;\r\n    padding-top: 1%;\r\n    color: lightyellow;\r\n    display: flex;\r\n    justify-content:flex-start;\r\n  }\r\n\r\n  .result {                     /* grid turn*/\r\n  grid-row: 1 / 2;      \r\n  grid-column: 4/ 6; \r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n.resultMessage {  \r\n  font-size: 2rem ;\r\n  font-weight: 600;\r\n  color: lightyellow;\r\n}\r\n\r\n.gridForAdd {\r\n        grid-column-start: 4;   /* esta linea se asocia al grid del board */\r\n        grid-row-start: 2;      /* esta linea se asocia al grid del board */\r\n        padding-left: 2%;\r\n        box-sizing: content-box;\r\n        height: 400px;\r\n        width: 120%;\r\n        font-size: 10px;\r\n        overflow-y: scroll;     \r\n  }\r\n\r\n\r\n  .formInput {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    \r\n  }\r\n\r\n  .formRadio{\r\n    grid-column: 1/2;\r\n    grid-row: 1/2;\r\n    background-color: #b2b9c7;\r\n    line-height: 2;\r\n  }\r\n  \r\n  .submitButton{\r\n    grid-column: 2/3;\r\n    grid-row: 1/2;\r\n  }\r\n\r\n  \r\n  \r\n  .board-human {\r\n      position: relative;   /* for headers purpose */\r\n\r\n      grid-column: 2/3;   /* esta linea se asocia al grid del board */\r\n      grid-row: 2/3;      /* esta linea se asocia al grid del board */\r\n      display: grid;\r\n      height: 100%;\r\n      width: 100%;\r\n      grid-template-columns: repeat(12, 1fr);\r\n      grid-template-rows: repeat(13, 1fr);\r\n      border: 5px solid black;\r\n      gap: 2px;\r\n      padding: 2px;\r\n      background-color: #b2b9c7;\r\n    }\r\n    \r\n    .board-computer {\r\n        position: relative;\r\n        \r\n        grid-column: 4/5;   /* esta linea se asocia al grid del board */\r\n        grid-row: 2/3;      /* esta linea se asocia al grid del board */\r\n        display: grid;\r\n        height: 100%;\r\n        width: 100%;\r\n        grid-template-columns: repeat(12, 1fr);\r\n        grid-template-rows: repeat(13, 1fr);\r\n        border: 5px solid black;\r\n        gap: 2px;\r\n        padding: 2px;\r\n        background-color: #edeef1; \r\n        \r\n      }\r\n\r\n    .columnsHead {\r\n      position: absolute;    /* in relation parent board-human*/\r\n      transform: translateY(-100%); \r\n      width: 100% ;\r\n      display:flex; \r\n      justify-content: space-around;\r\n    }\r\n\r\n    .rowsHead{\r\n      position: absolute;    /* in relation parent board-human*/\r\n      transform: translateX(-100%); \r\n      height: 100%;\r\n    }\r\n\r\n    .headComputer {\r\n      position: absolute;    /* in relation parent board-computer*/\r\n      transform: translateY(-100%); \r\n      color: lightyellow;\r\n      width: 100% ;\r\n      display:flex; \r\n      justify-content: space-around;\r\n    }\r\n\r\n    .attackMessage {\r\n      grid-row: 1/2; \r\n      grid-column: 2/3; \r\n      display:flex; \r\n      flex-wrap:nowrap;\r\n    }\r\n    \r\n\r\n    .scoreBoard{\r\n      position: absolute;\r\n      inset: 0px;\r\n      max-width: 115px;\r\n      max-height: 82%;\r\n      margin-top: 6.4rem;\r\n      margin-left: auto;\r\n      margin-right: 1%;\r\n      background-color: #edeef1;\r\n      border-left: 3px solid #f6f7f9;\r\n      border-right: 3px solid #f6f7f9;\r\n      border-radius: 4px;\r\n\r\n      display: grid;\r\n      grid-template-rows: 1fr 1fr;\r\n      gap: 5px;\r\n    }\r\n\r\n    .score {\r\n      display: grid;\r\n      grid-template-columns: 3fr 2fr;\r\n      grid-template-rows: repeat(8,1fr);\r\n    }\r\n\r\n\r\n  "],"sourceRoot":""}]);
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
  cellHead.setAttribute('style','height:7.25%;');
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
    divForRandom.innerText = 'Click here for a random fleet of ships';
    divForRandom.classList.add('randomships');
    const buttonRandom = document.createElement('button');
    buttonRandom.innerText = 'RANDOM FLEET';
    buttonRandom.classList.add('addShipButton');

    buttonRandom.addEventListener("click", () => {
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


function randomShips(arg1){
    /* arg1 is the playerGameboard arg2 is the array with length*/
   
   const shipLength=[5,3,4,6,4,5];
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
/* harmony import */ var _show_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-error */ "./src/components/show-error.js");
/* harmony import */ var _delete_div_error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./delete-div-error */ "./src/components/delete-div-error.js");
/* harmony import */ var _adjacent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adjacent */ "./src/components/adjacent.js");
/* harmony import */ var _update_score__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-score */ "./src/components/update-score.js");












function screenController(arg) {
    /* arg is the game container */

    const game = (0,_game_controller__WEBPACK_IMPORTED_MODULE_0__.gameController)();
    const totalCells = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.allCoordinatesPosibles)();   // for the computer's attack purpose
    let arrayAdjacent = [];        // for the computer's attack purpose

        const gameContainer = arg;
        const turn = document.createElement('div');
        const turnDiv = document.createElement('div');
        const waitTurn = document.createElement('div');
        const boardDiv = document.createElement('div');
        const result = document.createElement('div');
        const humanBoard = document.createElement('div');
        const computerBoard = document.createElement('div');
        const resetButton = document.createElement('button');
    
        gameContainer.classList.add('container');
        turn.classList.add('turn');
        turn.setAttribute('tabindex', 0);
        turnDiv.classList.add('turnDiv');
        waitTurn.classList.add('waitTurn');
        boardDiv.classList.add('board');
        result.classList.add('result');
        humanBoard.classList.add('board-human');
        humanBoard.setAttribute('tabindex', 0);
        computerBoard.classList.add('hide');
        resetButton.setAttribute('style','grid-row:3/4; grid-column:1/2');
        resetButton.classList.add('resetButton');
        resetButton.textContent = 'RESET for NEW GAME';
        

    const initialScreen = () => {
        
        // clear the board
        boardDiv.textContent = "";

        const activePlayer = game.getActivePlayer();
        console.log(activePlayer);
        const playerComputer = game.getComputerPlayer();
        console.log(playerComputer);

        // Display player's turn
        turnDiv.textContent = `${activePlayer.type}'s turn...`;

        for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.rows; i++) {
            for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.columns; j++) {
            // Anything clickable should be a button!!
            const cellButton = document.createElement("button");
            cellButton.classList.add("cell");
            cellButton.setAttribute('tabindex',-1);
            // Create a data attribute to identify the column
            cellButton.dataset.row = i;
            cellButton.dataset.column = j; 
            humanBoard.appendChild(cellButton);
        }}

        for (let i = 0; i < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.rows; i++) {
            for (let j = 0; j < _auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.columns; j++) {
            // Anything clickable should be a button!!
            const cellButton = document.createElement("button");
            cellButton.classList.add("cell");
            // Create a data attribute to identify the column
            cellButton.dataset.row = i;
            cellButton.dataset.column = j; 
            computerBoard.appendChild(cellButton);
        }}
        // create a button for add ships and function
        addingShips(turn,playerComputer);
          
    }
    initialScreen();

    const updateScreen = () => {

        // get the newest version of the board and player turn
        const boardReal = game.boardReal();
        const boardComputer = game.boardComputer();
        const playerHuman = game.getHumanPlayer();
        const playerComputer = game.getComputerPlayer();
        
        (0,_update__WEBPACK_IMPORTED_MODULE_5__.updateCells)(humanBoard,boardReal,playerHuman);
        (0,_update_computer_board__WEBPACK_IMPORTED_MODULE_6__.updateCellsComputerBoard)(computerBoard,boardComputer,playerComputer);
        (0,_update_score__WEBPACK_IMPORTED_MODULE_10__.updateScore)(playerHuman,playerComputer);

        const activePlayer = game.getActivePlayer();
        // Display player's turn
        turnDiv.textContent = `${activePlayer.type}'s turn...`;
        console.log(game.isThereAWinner());
        // check and attacks is there no winner
        let isThereAWinner = game.isThereAWinner();
        switch(isThereAWinner===false){
            case true:
                if (activePlayer.type==='COMPUTER Player'){
                    addDiv(boardDiv);
                    setTimeout(computerAttack, 4000);
                }
                // if active player is Human need wait for a click
            break;
            default:
                // game over - disable event listener
                computerBoard.removeEventListener('click', clickHandlerBoard);
            break;
        }  
    }
    
// add a add-ships Button and the eventlistener
    function addingShips(turn,playerComputer){
    const addShipsDiv = document.createElement("div");  
    const addShipsButton = document.createElement("button");
    addShipsDiv.className = '';
    addShipsDiv.setAttribute('id','addShipsDiv');
    addShipsDiv.classList.add('addships');
    addShipsButton.classList.add('addShipButton');
    addShipsButton.textContent = "ADD SHIPS";

    addShipsButton.addEventListener("click", () => {
        (0,_create_container__WEBPACK_IMPORTED_MODULE_2__.createContainers)(turn);
      });
    
    addShipsButton.addEventListener("click", () => {
        (0,_add_ships__WEBPACK_IMPORTED_MODULE_3__.addShips)(game,humanBoard,boardDiv,turn,computerBoard,playerComputer);
        addShipsDiv.classList.remove('addships');
        addShipsDiv.classList.add('hide');
      });
    
    turn.appendChild(addShipsDiv);
    addShipsDiv.appendChild(addShipsButton);
    }

        // Add event listener for the board computer for Human attacks
        function clickHandlerBoard(e) {
        switch(game.getActivePlayer().type==='HUMAN Player'){
            case true:{
                const selectedRow = e.target.dataset.row;
                const selectedColumn = e.target.dataset.column;
                // Make sure I've clicked a column and not the gaps in between
                if (!selectedRow) return;
                game.playRound(Number(selectedRow),Number(selectedColumn));
                getMessage(activeMessage);
                updateScreen();
                break;
                }
            case false:
                (0,_show_error__WEBPACK_IMPORTED_MODULE_7__.showError)(waitTurn,'wait your turn'.toUpperCase());
                setTimeout(_delete_div_error__WEBPACK_IMPORTED_MODULE_8__.deleteErrorMessages,800);
                break;
            }   
        }
        computerBoard.addEventListener('click', clickHandlerBoard);

        // Add a message to avoid click in human board
        function noFireToFriend(){
            (0,_show_error__WEBPACK_IMPORTED_MODULE_7__.showError)(waitTurn,'BE CAREFUL. don\'t shoot your allies'.toUpperCase());
            setTimeout(_delete_div_error__WEBPACK_IMPORTED_MODULE_8__.deleteErrorMessages,1000);
        }
        humanBoard.addEventListener('click',noFireToFriend);

       // this attack's function consider adjacents when got a hit
       function computerAttack(){
        let check = true;
        let adj = 0;
        let coord = [];
        let arrayAllAttack = game.getHumanPlayer().gameboard['arrayAllAttack'];
        while ( check === true){
            if( arrayAdjacent.length!==0 ){
                adj = arrayAdjacent.shift();
                coord = totalCells.at(adj).split(',');
                coord = [Number(coord[0]),coord[1]];
            }else{
                coord = (0,_random_ships__WEBPACK_IMPORTED_MODULE_4__.randomCoordinates)();
                adj = totalCells.indexOf(coord.toString());
            }
            check = arrayAllAttack.has(coord.toString());
        }
        let cell = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.fromCoordinatestoCell)(coord);
        game.playRoundComputer(cell[0],cell[1]);
        // if got a hit look for adjacents
        let boardReal = game.boardReal();
        if(boardReal[cell[0]][cell[1]].value===5){
            let arrayTemp = _adjacent__WEBPACK_IMPORTED_MODULE_9__.adjacent.get(adj);
            arrayTemp.map((x) => arrayAdjacent.push(x));
            if(arrayAdjacent===undefined){
                arrayAdjacent=[];
            }
        }
        getMessage(activeMessage);
        updateScreen();  
    }
    
            // add a result game
        const resultGameDiv = document.createElement("div");
        resultGameDiv.classList.add('resultMessage');
        const activeMessage = game.getGameMessage();
         const getMessage = (activeMessage) => { 
            activeMessage = game.getGameMessage();
            resultGameDiv.textContent = activeMessage;
        };
        result.appendChild(resultGameDiv);

        // add a div with count down for computer attack and remove it 
        function addDiv(arg){
            const attackMessage = document.createElement('div');
            attackMessage.setAttribute('id','attackMessage');
            attackMessage.classList.add('attackMessage');
            let text = document.createElement('p');
            text.setAttribute('id','text');
            text.setAttribute('style','color:lightyellow;');
            text.innerText = 'The computer will attack on '.toUpperCase(); 
            let text1 = document.createElement('p');
            text1.setAttribute('id','count');
            text1.setAttribute('style','font-size:1.1rem; color:red;');
            let number = 4; 
            attackMessage.appendChild(text);
            attackMessage.appendChild(text1);
            let id = setInterval(count, 1000);
            function count(){
                number = number-1;
                document.getElementById('count').innerText = ` => ${number}`;
                if (number <= 0) {
                    clearInterval(id);
                    document.getElementById('text').innerText = '';
                    document.getElementById('count').innerText = "DONE";
                    setTimeout(removeDiv,1000);
                  }
            }
             arg.appendChild(attackMessage);
         }
        // remove the count down message div
         function removeDiv(){
            const div = document.getElementById('attackMessage');
            div.remove();
         }

         // eventlistener for reset
         resetButton.addEventListener('click',newDoc);

         function newDoc() {
            window.location.reload();
          }

    gameContainer.appendChild(turn);
    gameContainer.appendChild(boardDiv); 
    gameContainer.appendChild(resetButton);
    turn.appendChild(turnDiv);
    turn.appendChild(result);
    turn.appendChild(waitTurn);
    boardDiv.appendChild(humanBoard);
    boardDiv.appendChild(computerBoard);
   
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
     /*    x.textContent = boardContent[x.dataset.row][x.dataset.column].value; */
        switch(boardContent[x.dataset.row][x.dataset.column].value===1){
            case true:
                x.classList.add('cell');
                x.textContent = ''; 
                break;
            default:
                switch(boardContent[x.dataset.row][x.dataset.column].value===0){
                    case true:
                      x.classList.add('cell');
                      x.textContent = '';
                      break;
                    default:
                        switch(boardContent[x.dataset.row][x.dataset.column].value===2){
                            case true:
                            x.classList.add('cellMissed');
                            x.textContent = `water`;
                            break;
                            default:
                                switch(boardContent[x.dataset.row][x.dataset.column].value===5){
                                case true:
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
                x.classList.add('cellShipAdded');
                x.textContent = `SHIP`;
                break;
            default:
                switch(boardContent[x.dataset.row][x.dataset.column].value===0){
                    case true:
                      x.classList.add('cell');
                      x.textContent = '';
                      break;
                    default:
                        switch(boardContent[x.dataset.row][x.dataset.column].value===2){
                            case true:
                            x.classList.add('cellMissed');
                            x.textContent = `water`;
                            break;
                            default:
                                switch(boardContent[x.dataset.row][x.dataset.column].value===5){
                                case true:
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _style_tablet_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style-tablet.css */ "./src/style-tablet.css");
/* harmony import */ var _style_mobile_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-mobile.css */ "./src/style-mobile.css");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDBEQUFXO0FBQ25CLFFBQVEsb0RBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsMkRBQVU7QUFDbEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVc7QUFDbkIsUUFBUSwwREFBVztBQUNuQixRQUFRLGdGQUF3QjtBQUNoQztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQSxJQUFJLGtGQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtYmFzZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLW1vYmlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLXJlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtdGFibGV0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtYmFzZS5jc3M/NjYxZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtbW9iaWxlLmNzcz9hZmYyIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS1yZXNldC5jc3M/OGI1OCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtdGFibGV0LmNzcz82ODUzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2FkZC1zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hZGphY2VudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hdXhpbGlhcnktZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVsZXRlLWRpdi1lcnJvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9yYW5kb20tc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2NvcmUtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaG93LWVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS1jb21wdXRlci1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUtc2NvcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvc2hpcC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9zaGlwLXN1bmsuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogY2VsbHMgLSBidXR0b25zIC0gaW1hZ2VzKi9cclxuLmNlbGwge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAwLjdyZW07XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuXHRiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmNlbGxTaGlwQWRkZWQge1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogIzViZTczNDsgXHJcblx0ICBjb2xvcjogIzIwN2QwZTtcclxuXHQgIGZvbnQtc2l6ZTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbGxNaXNzZWQge1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmVmYjsgXHJcblx0ICBjb2xvcjogIzA4N2I3ZDtcclxuXHQgIGZvbnQtc2l6ZTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbGxIaXQge1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTE3MzsgXHJcblx0ICBjb2xvcjogIzliMWIxMTtcclxuXHQgIGZvbnQtc2l6ZTogOXB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbGxTdW5rIHtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxuXHQgIGNvbG9yOiB3aGl0ZTtcclxuXHQgIGZvbnQtc2l6ZTogOXB4O1xyXG4gIH1cclxuXHJcbiBbY2xhc3NePSdjZWxsJ106aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWU3NTtcclxuXHR9XHJcblxyXG4gW2NsYXNzXj0nY2VsbCddOmFjdGl2ZXtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6ICNiMmI5Yzc7XHJcblx0fVxyXG5cclxuLmhlYWRDZWxsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuXHRjb2xvcjogbGlnaHR5ZWxsb3c7XHJcblx0YmFja2dyb3VuZDogIzM1M2E0NTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLyogYnV0dG9ucyAqL1xyXG4uaGlkZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRvcGFjaXR5OiAwJTtcclxuICB9XHJcblxyXG4uYWRkU2hpcEJ1dHRvbiB7ICAgICAgIFxyXG4gICAgY29sb3I6IGJsYWNrOyBsaW5lLWhlaWdodDogMnJlbTsgcGFkZGluZy1sZWZ0OiAxMHB4OyBwYWRkaW5nLXRvcDogMTVweDsgcGFkZGluZy1yaWdodDogMTBweDsgXHJcblx0cGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IHRleHQtdHJhbnNmb3JtOiBub25lOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDEwNSwxMTcsMTQyKSAwJSwgcmdiKDIxNCwyMTcsMjI1KSAxMDAlKSA7IFxyXG4gICAgYm94LXNoYWRvdzogI2VkZWVmMSAycHggMnB4IDRweCAycHg7IGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5hZGRTaGlwQnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NDVlNzU7IGNvbG9yOiB3aGl0ZTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gfVxyXG4uYWRkU2hpcEJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzQ1NGQ1ZjsgY29sb3I6IHdoaXRlOyB9XHJcblxyXG4ucmVzZXRCdXR0b24geyAgICBcclxuXHRjb2xvcjogIzAxMmUzMjsgbGluZS1oZWlnaHQ6IDEzcHg7IHBhZGRpbmc6IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDsgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmOyBmb250LXdlaWdodDogbm9ybWFsOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgdGV4dC10cmFuc2Zvcm06IG5vbmU7IFxyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I5ZmVmNiAwJSwgIzA5YzNjMSAxMDAlKSA7IFxyXG5cdGJveC1zaGFkb3c6ICNlZGVlZjEgMnB4IDJweCA0cHggMnB4OyBib3JkZXI6IDJweCBzb2xpZCAjMzUzOTQ1OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnJlc2V0QnV0dG9uOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAjNTQ1ZTc1OyBjb2xvcjogd2hpdGU7IFxyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxufVxyXG4ucmVzZXRCdXR0b246YWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kOiAjNDU0ZDVmOyBjb2xvcjogd2hpdGU7IH1cclxuXHJcbi8qIHNjb3JlIGVsZW1lbnRzICovXHJcblxyXG4uc2NvcmVUaXRsZXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjb2xvcjogIzNjNDM1MDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuXHRmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnNoaXBGbG9hdHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnNoaXBTdW5re1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDljM2MxO1xyXG59XHJcblx0IFxyXG4vKiBUaGlzIGlzIHRoZSBzdHlsZSBvZiBvdXIgZXJyb3IgbWVzc2FnZXMgKi9cclxuXHQgIC5lcnJvciB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDFyZW07XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgfVxyXG5cdCAgXHJcblx0ICAuZXJyb3IuYWN0aXZlIHtcclxuXHRcdHBhZGRpbmc6IDAuM2VtO1xyXG5cdCAgfVxyXG5cdFxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS1iYXNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBNEI7QUFDNUI7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGVBQWU7RUFDZDs7RUFFQTtHQUNDLHlCQUF5QjtHQUN6QixjQUFjO0dBQ2QsY0FBYztFQUNmOztFQUVBO0dBQ0MseUJBQXlCO0dBQ3pCLGNBQWM7R0FDZCxjQUFjO0VBQ2Y7O0VBRUE7R0FDQyx5QkFBeUI7R0FDekIsY0FBYztHQUNkLGNBQWM7RUFDZjs7RUFFQTtHQUNDLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1osY0FBYztFQUNmOztDQUVEO0VBQ0MseUJBQXlCO0NBQzFCOztDQUVBO0dBQ0UseUJBQXlCO0NBQzNCOztBQUVEO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGVBQWU7RUFDZDs7QUFFRixZQUFZO0FBQ1o7Q0FDQyxhQUFhO0NBQ2IsV0FBVztFQUNWOztBQUVGO0lBQ0ksWUFBWSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQjtDQUM5RixvQkFBb0I7SUFDakIsbUJBQW1CLEVBQUUsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCO0lBQzVGLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtJQUM5RCx3RkFBd0Y7SUFDeEYsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCOztDQUV4Rix1Q0FBdUM7QUFDeEM7QUFDQTtJQUNJLG1CQUFtQixFQUFFLFlBQVk7Q0FDcEMsc0JBQXNCO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUIsRUFBRSxZQUFZLEVBQUU7O0FBRXZDO0NBQ0MsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGFBQWE7Q0FDaEQsbUJBQW1CLEVBQUUsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCO0NBQzVGLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtDQUM5RCxzRUFBc0U7Q0FDdEUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCO0NBQ3JGLDRCQUE0QjtDQUM1Qix1Q0FBdUM7QUFDeEM7QUFDQTtDQUNDLG1CQUFtQixFQUFFLFlBQVk7Q0FDakMsc0JBQXNCO0NBQ3RCLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsbUJBQW1CLEVBQUUsWUFBWSxFQUFFOztBQUVwQyxtQkFBbUI7O0FBRW5CO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx5REFBdUM7Q0FDdkMsc0JBQXNCO0dBQ3BCLDJCQUEyQjtBQUM5Qjs7QUFFQTtDQUNDLHlEQUE0QztDQUM1QyxzQkFBc0I7R0FDcEIsMkJBQTJCO0NBQzdCLGdDQUFnQztBQUNqQzs7QUFFQSw0Q0FBNEM7R0FDekM7RUFDRCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixzQkFBc0I7R0FDckI7O0dBRUE7RUFDRCxjQUFjO0dBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY2VsbHMgLSBidXR0b25zIC0gaW1hZ2VzKi9cXHJcXG4uY2VsbCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250LXNpemU6IDAuN3JlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcblxcdGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2VsbFNoaXBBZGRlZCB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlNzM0OyBcXHJcXG5cXHQgIGNvbG9yOiAjMjA3ZDBlO1xcclxcblxcdCAgZm9udC1zaXplOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2VsbE1pc3NlZCB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZWZiOyBcXHJcXG5cXHQgIGNvbG9yOiAjMDg3YjdkO1xcclxcblxcdCAgZm9udC1zaXplOiA4cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2VsbEhpdCB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhMTczOyBcXHJcXG5cXHQgIGNvbG9yOiAjOWIxYjExO1xcclxcblxcdCAgZm9udC1zaXplOiA5cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2VsbFN1bmsge1xcclxcblxcdCAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcclxcblxcdCAgY29sb3I6IHdoaXRlO1xcclxcblxcdCAgZm9udC1zaXplOiA5cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuIFtjbGFzc149J2NlbGwnXTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVlNzU7XFxyXFxuXFx0fVxcclxcblxcclxcbiBbY2xhc3NePSdjZWxsJ106YWN0aXZle1xcclxcblxcdCAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuLmhlYWRDZWxsIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG5cXHRjb2xvcjogbGlnaHR5ZWxsb3c7XFxyXFxuXFx0YmFja2dyb3VuZDogIzM1M2E0NTtcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuLyogYnV0dG9ucyAqL1xcclxcbi5oaWRlIHtcXHJcXG5cXHRkaXNwbGF5OiBub25lO1xcclxcblxcdG9wYWNpdHk6IDAlO1xcclxcbiAgfVxcclxcblxcclxcbi5hZGRTaGlwQnV0dG9uIHsgICAgICAgXFxyXFxuICAgIGNvbG9yOiBibGFjazsgbGluZS1oZWlnaHQ6IDJyZW07IHBhZGRpbmctbGVmdDogMTBweDsgcGFkZGluZy10b3A6IDE1cHg7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IFxcclxcblxcdHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgdGV4dC10cmFuc2Zvcm06IG5vbmU7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxMDUsMTE3LDE0MikgMCUsIHJnYigyMTQsMjE3LDIyNSkgMTAwJSkgOyBcXHJcXG4gICAgYm94LXNoYWRvdzogI2VkZWVmMSAycHggMnB4IDRweCAycHg7IGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5hZGRTaGlwQnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzU0NWU3NTsgY29sb3I6IHdoaXRlO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxyXFxuIH1cXHJcXG4uYWRkU2hpcEJ1dHRvbjphY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNDU0ZDVmOyBjb2xvcjogd2hpdGU7IH1cXHJcXG5cXHJcXG4ucmVzZXRCdXR0b24geyAgICBcXHJcXG5cXHRjb2xvcjogIzAxMmUzMjsgbGluZS1oZWlnaHQ6IDEzcHg7IHBhZGRpbmc6IDE1cHg7XFxyXFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDsgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmOyBmb250LXdlaWdodDogbm9ybWFsOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgdGV4dC10cmFuc2Zvcm06IG5vbmU7IFxcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I5ZmVmNiAwJSwgIzA5YzNjMSAxMDAlKSA7IFxcclxcblxcdGJveC1zaGFkb3c6ICNlZGVlZjEgMnB4IDJweCA0cHggMnB4OyBib3JkZXI6IDJweCBzb2xpZCAjMzUzOTQ1OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbi5yZXNldEJ1dHRvbjpob3ZlciB7XFxyXFxuXFx0YmFja2dyb3VuZDogIzU0NWU3NTsgY29sb3I6IHdoaXRlOyBcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcclxcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxufVxcclxcbi5yZXNldEJ1dHRvbjphY3RpdmUge1xcclxcblxcdGJhY2tncm91bmQ6ICM0NTRkNWY7IGNvbG9yOiB3aGl0ZTsgfVxcclxcblxcclxcbi8qIHNjb3JlIGVsZW1lbnRzICovXFxyXFxuXFxyXFxuLnNjb3JlVGl0bGV7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6ICMzYzQzNTA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwRmxvYXR7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9zaGlwLmpwZycpO1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwU3Vua3tcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL3NoaXAtc3Vuay5qcGcnKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDljM2MxO1xcclxcbn1cXHJcXG5cXHQgXFxyXFxuLyogVGhpcyBpcyB0aGUgc3R5bGUgb2Ygb3VyIGVycm9yIG1lc3NhZ2VzICovXFxyXFxuXFx0ICAuZXJyb3Ige1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0ICB9XFxyXFxuXFx0ICBcXHJcXG5cXHQgIC5lcnJvci5hY3RpdmUge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuM2VtO1xcclxcblxcdCAgfVxcclxcblxcdFxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpe1xyXG5cclxuICBtYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAgIFxyXG4gIC50dXJuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC53YWl0VHVybiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5yZXN1bHQgeyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnJhbmRvbXNoaXBzIHsgICBcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICB9XHJcbiAgXHJcbiAgIC5ib2FyZHtcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7ICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgICBncmlkLXJvdzogMi8zOyAgICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIH1cclxuICBcclxuICAuYm9hcmQtaHVtYW57XHJcbiAgICBtYXgtd2lkdGg6IDIyMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjQ5cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib2FyZC1jb21wdXRlcntcclxuICAgIG1heC13aWR0aDogMjIwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNDlweDtcclxuICB9XHJcbiAgXHJcbiAgLnNjb3JlQm9hcmR7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLnJlc2V0QnV0dG9uIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDI1cHg7XHJcbiAgIGxlZnQ6IDE1cHg7XHJcbiAgIGhlaWdodDogMjVweDtcclxuICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRzaGlwcyB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcclxuICB9XHJcblxyXG4gIC5ib2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbi5hdHRhY2tNZXNzYWdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICB3aWR0aDogNzUlIDtcclxuICAgIH1cclxuICBcclxufVxyXG4gIFxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCl7XHJcblx0LmNlbGx7XHJcblx0ICAgZGlzcGxheTogZmxleDtcclxuXHQgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHQgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdCAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHQgICBmb250LXNpemU6IDAuN3JlbTtcclxuXHQgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG5cdCAgIGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xyXG5cdCAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHQgICBtYXgtd2lkdGg6IDE3cHg7XHJcblx0ICAgbWF4LWhlaWdodDogMTkuMnB4O1xyXG5cdCB9XHJcblxyXG5cdC5jZWxsU2hpcEFkZGVkIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM1YmU3MzQ7IFxyXG5cdFx0Y29sb3I6ICMyMDdkMGU7XHJcblx0XHRmb250LXNpemU6IDRweDtcclxuXHRcdHdpZHRoOiAxN3B4O1xyXG5cdCAgICBoZWlnaHQ6IDE5LjJweDtcclxuXHR9XHJcblx0LmNlbGxNaXNzZWQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZmVmYjsgXHJcblx0XHRjb2xvcjogIzA4N2I3ZDtcclxuXHRcdGZvbnQtc2l6ZTogNHB4O1xyXG5cdFx0d2lkdGg6IDE3cHg7XHJcblx0ICAgIGhlaWdodDogMTkuMnB4O1xyXG5cdH1cclxuICBcclxuXHQuY2VsbEhpdCB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhMTczOyBcclxuXHRcdGNvbG9yOiAjOWIxYjExO1xyXG5cdFx0Zm9udC1zaXplOiA1cHg7XHJcblx0XHR3aWR0aDogMTdweDtcclxuXHQgICAgaGVpZ2h0OiAxOS4ycHg7XHJcblx0fVxyXG4gIFxyXG5cdC5jZWxsU3VuayB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgXHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRmb250LXNpemU6IDVweDtcclxuXHRcdHdpZHRoOiAxN3B4O1xyXG5cdCAgICBoZWlnaHQ6IDE5LjJweDtcclxuXHR9XHJcblxyXG5cdC5hZGRTaGlwQnV0dG9uIHsgICAgIFxyXG5cdFx0Zm9udC1zaXplOiAwLjRyZW07XHJcblx0XHR3aWR0aDogNzBweDsgaGVpZ2h0OiA4NXB4O1xyXG5cdFx0dGV4dC13cmFwOiBub3dyYXA7XHJcblx0fVxyXG5cclxuXHRwaWN0dXJlIHtcclxuXHRcdHdpZHRoOiA1MHB4O1xyXG5cdH1cclxuXHJcblx0LmVycm9yLmFjdGl2ZSB7XHJcblx0XHRoZWlnaHQ6IDYwcHg7XHJcblx0ICB9XHJcbiAgIH1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUtbW9iaWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0dBQ2xCOztHQUVBO0lBQ0MsZ0JBQWdCLElBQUksK0NBQStDO0lBQ25FLGFBQWEsTUFBTSwrQ0FBK0M7SUFDbEUseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0I7O0VBRUY7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7R0FDQyxrQkFBa0I7R0FDbEIsU0FBUztHQUNULFVBQVU7R0FDVixZQUFZO0dBQ1osMEJBQTBCO0VBQzNCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQjs7QUFFSjtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsV0FBVztJQUNYOztBQUVKOztBQUVBO0NBQ0M7SUFDRyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0NBRUQ7RUFDQyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7RUFDZCxXQUFXO0tBQ1IsY0FBYztDQUNsQjtDQUNBO0VBQ0MseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztLQUNSLGNBQWM7Q0FDbEI7O0NBRUE7RUFDQyx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7RUFDZCxXQUFXO0tBQ1IsY0FBYztDQUNsQjs7Q0FFQTtFQUNDLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7S0FDUixjQUFjO0NBQ2xCOztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBRSxZQUFZO0VBQ3pCLGlCQUFpQjtDQUNsQjs7Q0FFQTtFQUNDLFdBQVc7Q0FDWjs7Q0FFQTtFQUNDLFlBQVk7R0FDWDtHQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KXtcXHJcXG5cXHJcXG4gIG1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gICAgXFxyXFxuICAudHVybiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAud2FpdFR1cm4ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yZXN1bHQgeyBcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmFuZG9tc2hpcHMgeyAgIFxcclxcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gICB9XFxyXFxuICBcXHJcXG4gICAuYm9hcmR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7ICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxyXFxuICAgIGdyaWQtcm93OiAyLzM7ICAgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcXHJcXG4gICAgaGVpZ2h0OjEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gIC5ib2FyZC1odW1hbntcXHJcXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMjQ5cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5ib2FyZC1jb21wdXRlcntcXHJcXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcXHJcXG4gICAgbWF4LWhlaWdodDogMjQ5cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zY29yZUJvYXJke1xcclxcbiAgICB3aWR0aDogODVweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAucmVzZXRCdXR0b24ge1xcclxcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICB0b3A6IDI1cHg7XFxyXFxuICAgbGVmdDogMTVweDtcXHJcXG4gICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5hZGRzaGlwcyB7XFxyXFxuICAgIHBhZGRpbmc6IDFweCAxNXB4IDFweCAxNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmJvYXJkIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbi5hdHRhY2tNZXNzYWdlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO1xcclxcbiAgICB3aWR0aDogNzUlIDtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxufVxcclxcbiAgXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjIwcHgpe1xcclxcblxcdC5jZWxse1xcclxcblxcdCAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0ICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHQgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0ICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuXFx0ICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG5cXHQgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcXHJcXG5cXHQgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0ICAgbWF4LXdpZHRoOiAxN3B4O1xcclxcblxcdCAgIG1heC1oZWlnaHQ6IDE5LjJweDtcXHJcXG5cXHQgfVxcclxcblxcclxcblxcdC5jZWxsU2hpcEFkZGVkIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlNzM0OyBcXHJcXG5cXHRcXHRjb2xvcjogIzIwN2QwZTtcXHJcXG5cXHRcXHRmb250LXNpemU6IDRweDtcXHJcXG5cXHRcXHR3aWR0aDogMTdweDtcXHJcXG5cXHQgICAgaGVpZ2h0OiAxOS4ycHg7XFxyXFxuXFx0fVxcclxcblxcdC5jZWxsTWlzc2VkIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZWZiOyBcXHJcXG5cXHRcXHRjb2xvcjogIzA4N2I3ZDtcXHJcXG5cXHRcXHRmb250LXNpemU6IDRweDtcXHJcXG5cXHRcXHR3aWR0aDogMTdweDtcXHJcXG5cXHQgICAgaGVpZ2h0OiAxOS4ycHg7XFxyXFxuXFx0fVxcclxcbiAgXFxyXFxuXFx0LmNlbGxIaXQge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZWExNzM7IFxcclxcblxcdFxcdGNvbG9yOiAjOWIxYjExO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogNXB4O1xcclxcblxcdFxcdHdpZHRoOiAxN3B4O1xcclxcblxcdCAgICBoZWlnaHQ6IDE5LjJweDtcXHJcXG5cXHR9XFxyXFxuICBcXHJcXG5cXHQuY2VsbFN1bmsge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcXHJcXG5cXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiA1cHg7XFxyXFxuXFx0XFx0d2lkdGg6IDE3cHg7XFxyXFxuXFx0ICAgIGhlaWdodDogMTkuMnB4O1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQuYWRkU2hpcEJ1dHRvbiB7ICAgICBcXHJcXG5cXHRcXHRmb250LXNpemU6IDAuNHJlbTtcXHJcXG5cXHRcXHR3aWR0aDogNzBweDsgaGVpZ2h0OiA4NXB4O1xcclxcblxcdFxcdHRleHQtd3JhcDogbm93cmFwO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHRwaWN0dXJlIHtcXHJcXG5cXHRcXHR3aWR0aDogNTBweDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LmVycm9yLmFjdGl2ZSB7XFxyXFxuXFx0XFx0aGVpZ2h0OiA2MHB4O1xcclxcblxcdCAgfVxcclxcbiAgIH1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYFxyXG4gLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXHJcbiAgIHYyLjAgfCAyMDExMDEyNlxyXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxyXG4qL1xyXG5cclxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXHJcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxyXG5iLCB1LCBpLCBjZW50ZXIsXHJcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxyXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxyXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBpbnB1dCB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbmJvZHkge1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbm9sLCB1bCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5ibG9ja3F1b3RlLCBxIHtcclxuXHRxdW90ZXM6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRjb250ZW50OiBub25lO1xyXG59XHJcbnRhYmxlIHtcclxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG5cdGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4vKiBlbmQgb2YgcmVzZXQgb2Ygc3R5bGUgYnJvd3NlciAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0NBQ0M7OztDQUdBOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQSxrQ0FBa0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8sIGlucHV0IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBvZiByZXNldCBvZiBzdHlsZSBicm93c2VyICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYyMXB4KSBhbmQgKG1heC13aWR0aDo5ODBweCl7XHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAudHVybiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIH1cclxuICBcclxuICAucmFuZG9tc2hpcHMgeyAgIFxyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgIH1cclxuICBcclxuICAgLmJvYXJke1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMzsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cclxuICAgIGdyaWQtcm93OiAyLzM7ICAgICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xyXG4gICAgaGVpZ2h0OjkwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMTRmciAwLjFmciAxNGZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTRmcjtcclxuICAgIGNvbHVtbi1nYXA6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgfVxyXG4gIFxyXG4gIC5ib2FyZC1odW1hbntcclxuICAgIG1heC13aWR0aDogMjIwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvYXJkLWNvbXB1dGVye1xyXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMyNXB4O1xyXG4gIH1cclxuICBcclxuICAuc2NvcmVCb2FyZHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgaGVpZ2h0OiA2MjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJlc2V0QnV0dG9uIHtcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICB0b3A6IDI1cHg7XHJcbiAgIGxlZnQ6IDE1cHg7XHJcbiAgIGhlaWdodDogMjVweDtcclxuICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGRzaGlwcyB7XHJcbiAgICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NjIxcHgpIGFuZCAobWF4LXdpZHRoOjk4MHB4KXtcclxuICAgIC5jZWxse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxN3B4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgIH1cclxuIFxyXG4gICAgIC5jZWxsU2hpcEFkZGVkIHtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzViZTczNDsgXHJcbiAgICAgICAgIGNvbG9yOiAjMjA3ZDBlO1xyXG4gICAgICAgICBmb250LXNpemU6IDRweDtcclxuICAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICB9XHJcbiAgICAgLmNlbGxNaXNzZWQge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZWZiOyBcclxuICAgICAgICAgY29sb3I6ICMwODdiN2Q7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogNHB4O1xyXG4gICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgIH1cclxuICAgXHJcbiAgICAgLmNlbGxIaXQge1xyXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVhMTczOyBcclxuICAgICAgICAgY29sb3I6ICM5YjFiMTE7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogNXB4O1xyXG4gICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgIH1cclxuICAgXHJcbiAgICAgLmNlbGxTdW5rIHtcclxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG4gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogNXB4O1xyXG4gICAgICAgICB3aWR0aDogMTdweDtcclxuICAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgIH1cclxuXHJcbiAgICAgcGljdHVyZSB7XHJcbiAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgIH1cclxuIFxyXG4gLyogICAgIC5zaGlwRmxvYXR7XHJcbiAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvc2hpcC5qcGcnKTtcclxuICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgfVxyXG4gICAgIFxyXG4gICAgIC5zaGlwU3Vua3tcclxuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9zaGlwLXN1bmsuanBnJyk7XHJcbiAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwOWMzYzE7XHJcbiAgICAgfSAqL1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUtdGFibGV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSTtNQUNFLFdBQVc7TUFDWCxZQUFZO0lBQ2Q7O0VBRUY7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0dBQ2xCOztHQUVBO0lBQ0MsZ0JBQWdCLElBQUksK0NBQStDO0lBQ25FLGFBQWEsT0FBTywrQ0FBK0M7SUFDbkUseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7O0VBRUY7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0VBRUE7R0FDQyxrQkFBa0I7R0FDbEIsU0FBUztHQUNULFVBQVU7R0FDVixZQUFZO0dBQ1osMEJBQTBCO0VBQzNCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztBQUVGOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsZUFBZTtRQUNmLGVBQWU7UUFDZixnQkFBZ0I7TUFDbEI7O0tBRUQ7U0FDSSx5QkFBeUI7U0FDekIsY0FBYztTQUNkLGNBQWM7U0FDZCxXQUFXO1NBQ1gsWUFBWTtLQUNoQjtLQUNBO1NBQ0kseUJBQXlCO1NBQ3pCLGNBQWM7U0FDZCxjQUFjO1NBQ2QsV0FBVztTQUNYLFlBQVk7S0FDaEI7O0tBRUE7U0FDSSx5QkFBeUI7U0FDekIsY0FBYztTQUNkLGNBQWM7U0FDZCxXQUFXO1NBQ1gsWUFBWTtLQUNoQjs7S0FFQTtTQUNJLHVCQUF1QjtTQUN2QixZQUFZO1NBQ1osY0FBYztTQUNkLFdBQVc7U0FDWCxZQUFZO0tBQ2hCOztLQUVBO1NBQ0ksV0FBVztLQUNmOztDQUVKOzs7Ozs7Ozs7OztRQVdPO0FBQ1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MjFweCkgYW5kIChtYXgtd2lkdGg6OTgwcHgpe1xcclxcblxcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAudHVybiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnJhbmRvbXNoaXBzIHsgICBcXHJcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxyXFxuICAgfVxcclxcbiAgXFxyXFxuICAgLmJvYXJke1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zOyAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcclxcbiAgICBncmlkLXJvdzogMi8zOyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xcclxcbiAgICBoZWlnaHQ6OTAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAxNGZyIDAuMWZyIDE0ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDIlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAuYm9hcmQtaHVtYW57XFxyXFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuYm9hcmQtY29tcHV0ZXJ7XFxyXFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDMyNXB4O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc2NvcmVCb2FyZHtcXHJcXG4gICAgd2lkdGg6IDg1cHg7XFxyXFxuICAgIGhlaWdodDogNjIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5yZXNldEJ1dHRvbiB7XFxyXFxuICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgIHRvcDogMjVweDtcXHJcXG4gICBsZWZ0OiAxNXB4O1xcclxcbiAgIGhlaWdodDogMjVweDtcXHJcXG4gICBwYWRkaW5nOiAxcHggMTVweCAxcHggMTVweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmFkZHNoaXBzIHtcXHJcXG4gICAgcGFkZGluZzogMXB4IDE1cHggMXB4IDE1cHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo2MjFweCkgYW5kIChtYXgtd2lkdGg6OTgwcHgpe1xcclxcbiAgICAuY2VsbHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTdweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDIzcHg7XFxyXFxuICAgICAgfVxcclxcbiBcXHJcXG4gICAgIC5jZWxsU2hpcEFkZGVkIHtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlNzM0OyBcXHJcXG4gICAgICAgICBjb2xvcjogIzIwN2QwZTtcXHJcXG4gICAgICAgICBmb250LXNpemU6IDRweDtcXHJcXG4gICAgICAgICB3aWR0aDogMTdweDtcXHJcXG4gICAgICAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgICB9XFxyXFxuICAgICAuY2VsbE1pc3NlZCB7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZmVmYjsgXFxyXFxuICAgICAgICAgY29sb3I6ICMwODdiN2Q7XFxyXFxuICAgICAgICAgZm9udC1zaXplOiA0cHg7XFxyXFxuICAgICAgICAgd2lkdGg6IDE3cHg7XFxyXFxuICAgICAgICAgaGVpZ2h0OiAyM3B4O1xcclxcbiAgICAgfVxcclxcbiAgIFxcclxcbiAgICAgLmNlbGxIaXQge1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWExNzM7IFxcclxcbiAgICAgICAgIGNvbG9yOiAjOWIxYjExO1xcclxcbiAgICAgICAgIGZvbnQtc2l6ZTogNXB4O1xcclxcbiAgICAgICAgIHdpZHRoOiAxN3B4O1xcclxcbiAgICAgICAgIGhlaWdodDogMjNweDtcXHJcXG4gICAgIH1cXHJcXG4gICBcXHJcXG4gICAgIC5jZWxsU3VuayB7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxcclxcbiAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICBmb250LXNpemU6IDVweDtcXHJcXG4gICAgICAgICB3aWR0aDogMTdweDtcXHJcXG4gICAgICAgICBoZWlnaHQ6IDIzcHg7XFxyXFxuICAgICB9XFxyXFxuXFxyXFxuICAgICBwaWN0dXJlIHtcXHJcXG4gICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgIH1cXHJcXG4gXFxyXFxuIC8qICAgICAuc2hpcEZsb2F0e1xcclxcbiAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvc2hpcC5qcGcnKTtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICAgfVxcclxcbiAgICAgXFxyXFxuICAgICAuc2hpcFN1bmt7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9zaGlwLXN1bmsuanBnJyk7XFxyXFxuICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwOWMzYzE7XFxyXFxuICAgICB9ICovXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogZ3JpZHMgYW5kIGxvY2F0aW9ucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODFweCkgeyAgXHJcbiAgLmJvYXJke1xyXG4gICAgZ3JpZC1jb2x1bW46IDIvMzsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cclxuICAgIGdyaWQtcm93OiAyLzM7ICAgICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xyXG4gICAgaGVpZ2h0OjkwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMTRmciAwLjFmciAxNGZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTRmcjtcclxuICAgIGNvbHVtbi1nYXA6IDUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDZmciAyZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1M2E0NTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAudHVybiB7XHJcbiAgICAgIGdyaWQtcm93OiAxIC8gMjsgICAgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cclxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0OyAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgNGZyIDFmciAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIH1cclxuXHJcbiAgLnR1cm5EaXYge1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyOyAgICAgIC8qIGdyaWQgdHVybiovXHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgIGNvbG9yOiBsaWdodHllbGxvdztcclxuICB9XHJcblxyXG4gIC53YWl0VHVybiB7XHJcbiAgICBncmlkLWNvbHVtbjo0LzU7ICAgICAvKiBncmlkIHR1cm4qL1xyXG4gIH1cclxuXHJcbiAgLmFkZHNoaXBzIHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzOyAgICAgIC8qIGdyaWQgdHVybiovXHJcbiAgICAgIGdyaWQtcm93OiAxIC8gMjsgICAgICAgXHJcbiAgICAgIHBhZGRpbmctdG9wOiAxJTtcclxuICB9XHJcblxyXG4gIC5yYW5kb21zaGlwcyB7ICAgICAgICAgICAgICAvKiBncmlkIHR1cm4qL1xyXG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xyXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gICAgcGFkZGluZy10b3A6IDElO1xyXG4gICAgY29sb3I6IGxpZ2h0eWVsbG93O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLnJlc3VsdCB7ICAgICAgICAgICAgICAgICAgICAgLyogZ3JpZCB0dXJuKi9cclxuICBncmlkLXJvdzogMSAvIDI7ICAgICAgXHJcbiAgZ3JpZC1jb2x1bW46IDQvIDY7IFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbn1cclxuXHJcbi5yZXN1bHRNZXNzYWdlIHsgIFxyXG4gIGZvbnQtc2l6ZTogMnJlbSA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogbGlnaHR5ZWxsb3c7XHJcbn1cclxuXHJcbi5ncmlkRm9yQWRkIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyOyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7ICAgICBcclxuICB9XHJcblxyXG5cclxuICAuZm9ybUlucHV0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciAxZnI7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5mb3JtUmFkaW97XHJcbiAgICBncmlkLWNvbHVtbjogMS8yO1xyXG4gICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmI5Yzc7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICB9XHJcbiAgXHJcbiAgLnN1Ym1pdEJ1dHRvbntcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICBncmlkLXJvdzogMS8yO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgLmJvYXJkLWh1bWFuIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgIC8qIGZvciBoZWFkZXJzIHB1cnBvc2UgKi9cclxuXHJcbiAgICAgIGdyaWQtY29sdW1uOiAyLzM7ICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cclxuICAgICAgZ3JpZC1yb3c6IDIvMzsgICAgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTMsIDFmcik7XHJcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICBnYXA6IDJweDtcclxuICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOWM3O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9hcmQtY29tcHV0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBcclxuICAgICAgICBncmlkLWNvbHVtbjogNC81OyAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXHJcbiAgICAgICAgZ3JpZC1yb3c6IDIvMzsgICAgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGdhcDogMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWYxOyBcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIC5jb2x1bW5zSGVhZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgLyogaW4gcmVsYXRpb24gcGFyZW50IGJvYXJkLWh1bWFuKi9cclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgXHJcbiAgICAgIHdpZHRoOiAxMDAlIDtcclxuICAgICAgZGlzcGxheTpmbGV4OyBcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvd3NIZWFke1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1odW1hbiovXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRDb21wdXRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgLyogaW4gcmVsYXRpb24gcGFyZW50IGJvYXJkLWNvbXB1dGVyKi9cclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgXHJcbiAgICAgIGNvbG9yOiBsaWdodHllbGxvdztcclxuICAgICAgd2lkdGg6IDEwMCUgO1xyXG4gICAgICBkaXNwbGF5OmZsZXg7IFxyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAuYXR0YWNrTWVzc2FnZSB7XHJcbiAgICAgIGdyaWQtcm93OiAxLzI7IFxyXG4gICAgICBncmlkLWNvbHVtbjogMi8zOyBcclxuICAgICAgZGlzcGxheTpmbGV4OyBcclxuICAgICAgZmxleC13cmFwOm5vd3JhcDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC5zY29yZUJvYXJke1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGluc2V0OiAwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTE1cHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDgyJTtcclxuICAgICAgbWFyZ2luLXRvcDogNi40cmVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWVmMTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZjZmN2Y5O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZjZmN2Y5O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcblxyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XHJcbiAgICAgIGdhcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zY29yZSB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwxZnIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUF3QjtBQUN4QjtFQUNFO0lBQ0UsZ0JBQWdCLElBQUksK0NBQStDO0lBQ25FLGFBQWEsT0FBTywrQ0FBK0M7SUFDbkUseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtJQUNiLDRDQUE0QztJQUM1Qyw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7O0VBRUE7TUFDSSxlQUFlLE9BQU8sK0NBQStDO01BQ3JFLGtCQUFrQixJQUFJLCtDQUErQztNQUNyRSxhQUFhO01BQ2IsMENBQTBDO01BQzFDLHVCQUF1QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQixPQUFPLGFBQWE7SUFDdEMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlLE1BQU0sYUFBYTtFQUNwQzs7RUFFQTtNQUNJLGtCQUFrQixPQUFPLGFBQWE7TUFDdEMsZUFBZTtNQUNmLGVBQWU7RUFDbkI7O0VBRUEsNEJBQTRCLGFBQWE7SUFDdkMsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwwQkFBMEI7RUFDNUI7O0VBRUEsOEJBQThCLGFBQWE7RUFDM0MsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7UUFDUSxvQkFBb0IsSUFBSSwyQ0FBMkM7UUFDbkUsaUJBQWlCLE9BQU8sMkNBQTJDO1FBQ25FLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsYUFBYTtRQUNiLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysa0JBQWtCO0VBQ3hCOzs7RUFHQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0NBQWtDOztFQUVwQzs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOzs7O0VBSUE7TUFDSSxrQkFBa0IsSUFBSSx3QkFBd0I7O01BRTlDLGdCQUFnQixJQUFJLDJDQUEyQztNQUMvRCxhQUFhLE9BQU8sMkNBQTJDO01BQy9ELGFBQWE7TUFDYixZQUFZO01BQ1osV0FBVztNQUNYLHNDQUFzQztNQUN0QyxtQ0FBbUM7TUFDbkMsdUJBQXVCO01BQ3ZCLFFBQVE7TUFDUixZQUFZO01BQ1oseUJBQXlCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCOztRQUVsQixnQkFBZ0IsSUFBSSwyQ0FBMkM7UUFDL0QsYUFBYSxPQUFPLDJDQUEyQztRQUMvRCxhQUFhO1FBQ2IsWUFBWTtRQUNaLFdBQVc7UUFDWCxzQ0FBc0M7UUFDdEMsbUNBQW1DO1FBQ25DLHVCQUF1QjtRQUN2QixRQUFRO1FBQ1IsWUFBWTtRQUNaLHlCQUF5Qjs7TUFFM0I7O0lBRUY7TUFDRSxrQkFBa0IsS0FBSyxrQ0FBa0M7TUFDekQsNEJBQTRCO01BQzVCLFlBQVk7TUFDWixZQUFZO01BQ1osNkJBQTZCO0lBQy9COztJQUVBO01BQ0Usa0JBQWtCLEtBQUssa0NBQWtDO01BQ3pELDRCQUE0QjtNQUM1QixZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxrQkFBa0IsS0FBSyxxQ0FBcUM7TUFDNUQsNEJBQTRCO01BQzVCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWTtNQUNaLDZCQUE2QjtJQUMvQjs7SUFFQTtNQUNFLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGdCQUFnQjtJQUNsQjs7O0lBR0E7TUFDRSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIseUJBQXlCO01BQ3pCLDhCQUE4QjtNQUM5QiwrQkFBK0I7TUFDL0Isa0JBQWtCOztNQUVsQixhQUFhO01BQ2IsMkJBQTJCO01BQzNCLFFBQVE7SUFDVjs7SUFFQTtNQUNFLGFBQWE7TUFDYiw4QkFBOEI7TUFDOUIsaUNBQWlDO0lBQ25DXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGdyaWRzIGFuZCBsb2NhdGlvbnMgKi9cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODFweCkgeyAgXFxyXFxuICAuYm9hcmR7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7ICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxyXFxuICAgIGdyaWQtcm93OiAyLzM7ICAgICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTRkNWY7XFxyXFxuICAgIGhlaWdodDo5MCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDE0ZnIgMC4xZnIgMTRmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTRmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogNSU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDZmciAyZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNhNDU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudHVybiB7XFxyXFxuICAgICAgZ3JpZC1yb3c6IDEgLyAyOyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciA0ZnIgMWZyIDFmcjtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50dXJuRGl2IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyOyAgICAgIC8qIGdyaWQgdHVybiovXFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICAgIGNvbG9yOiBsaWdodHllbGxvdztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC53YWl0VHVybiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOjQvNTsgICAgIC8qIGdyaWQgdHVybiovXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkc2hpcHMge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMzsgICAgICAvKiBncmlkIHR1cm4qL1xcclxcbiAgICAgIGdyaWQtcm93OiAxIC8gMjsgICAgICAgXFxyXFxuICAgICAgcGFkZGluZy10b3A6IDElO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnJhbmRvbXNoaXBzIHsgICAgICAgICAgICAgIC8qIGdyaWQgdHVybiovXFxyXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNDtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMSU7XFxyXFxuICAgIGNvbG9yOiBsaWdodHllbGxvdztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucmVzdWx0IHsgICAgICAgICAgICAgICAgICAgICAvKiBncmlkIHR1cm4qL1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAyOyAgICAgIFxcclxcbiAgZ3JpZC1jb2x1bW46IDQvIDY7IFxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdWx0TWVzc2FnZSB7ICBcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbSA7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZEZvckFkZCB7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcclxcbiAgICAgICAgZ3JpZC1yb3ctc3RhcnQ6IDI7ICAgICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMiU7XFxyXFxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgICAgICB3aWR0aDogMTIwJTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcXHJcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgICAgIFxcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLmZvcm1JbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mb3JtUmFkaW97XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmI5Yzc7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc3VibWl0QnV0dG9ue1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICBncmlkLXJvdzogMS8yO1xcclxcbiAgfVxcclxcblxcclxcbiAgXFxyXFxuICBcXHJcXG4gIC5ib2FyZC1odW1hbiB7XFxyXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgIC8qIGZvciBoZWFkZXJzIHB1cnBvc2UgKi9cXHJcXG5cXHJcXG4gICAgICBncmlkLWNvbHVtbjogMi8zOyAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXFxyXFxuICAgICAgZ3JpZC1yb3c6IDIvMzsgICAgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xcclxcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgIGdhcDogMnB4O1xcclxcbiAgICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOWM3O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuYm9hcmQtY29tcHV0ZXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogNC81OyAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXFxyXFxuICAgICAgICBncmlkLXJvdzogMi8zOyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xcclxcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICAgICAgICBnYXA6IDJweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZjE7IFxcclxcbiAgICAgICAgXFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAuY29sdW1uc0hlYWQge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgLyogaW4gcmVsYXRpb24gcGFyZW50IGJvYXJkLWh1bWFuKi9cXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOyBcXHJcXG4gICAgICB3aWR0aDogMTAwJSA7XFxyXFxuICAgICAgZGlzcGxheTpmbGV4OyBcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucm93c0hlYWR7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICAvKiBpbiByZWxhdGlvbiBwYXJlbnQgYm9hcmQtaHVtYW4qL1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IFxcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaGVhZENvbXB1dGVyIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1jb21wdXRlciovXFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgXFxyXFxuICAgICAgY29sb3I6IGxpZ2h0eWVsbG93O1xcclxcbiAgICAgIHdpZHRoOiAxMDAlIDtcXHJcXG4gICAgICBkaXNwbGF5OmZsZXg7IFxcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hdHRhY2tNZXNzYWdlIHtcXHJcXG4gICAgICBncmlkLXJvdzogMS8yOyBcXHJcXG4gICAgICBncmlkLWNvbHVtbjogMi8zOyBcXHJcXG4gICAgICBkaXNwbGF5OmZsZXg7IFxcclxcbiAgICAgIGZsZXgtd3JhcDpub3dyYXA7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIC5zY29yZUJvYXJke1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICBpbnNldDogMHB4O1xcclxcbiAgICAgIG1heC13aWR0aDogMTE1cHg7XFxyXFxuICAgICAgbWF4LWhlaWdodDogODIlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDYuNHJlbTtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDElO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZjE7XFxyXFxuICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZjZmN2Y5O1xcclxcbiAgICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmNmY3Zjk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcblxcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zY29yZSB7XFxyXFxuICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoOCwxZnIpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtYmFzZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1iYXNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1tb2JpbGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtbW9iaWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtdGFibGV0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLXRhYmxldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeX0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHN9IGZyb20gJy4vdXBkYXRlJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkIH0gZnJvbSAnLi91cGRhdGUtY29tcHV0ZXItYm9hcmQnO1xyXG5pbXBvcnQgeyBzaG93RXJyb3IgfSBmcm9tICcuL3Nob3ctZXJyb3InO1xyXG5pbXBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH0gZnJvbSAnLi9kZWxldGUtZGl2LWVycm9yJztcclxuaW1wb3J0IHsgcmFuZG9tU2hpcHMgfSBmcm9tICcuL3JhbmRvbS1zaGlwcyc7XHJcbmltcG9ydCB7IHNjb3JlQm9hcmQgfSBmcm9tICcuL3Njb3JlLWJvYXJkLmpzJztcclxuXHJcbmZ1bmN0aW9uIGFkZFNoaXBzKGFyZzEsYXJnMixhcmczLGFyZzQsYXJnNSxhcmc2KXtcclxuICAgIC8qIGFyZyBpcyB0aGUgZ2FtZSAgYXJnMiBpcyB0aGUgZGl2IHdpdGggdGhlIGh1bWFuYm9hcmQgIFxyXG4gICAgYXJnMyB0byBzaG93IHRoZSBvcHRpb25zIGFyZzQgdG8gc2hvdyByYW5kb20gYnV0dG9uXHJcbiAgICBhcmc1IGlzIHRoZSBkaXYgd2l0aCB0aGUgY29tcHV0ZXJib2FyZCBhcmc2IGlzIHRoZSBjb250ZW50IGNvbXB1dGVyIGJvYXJkKi9cclxuY29uc3QgZ2FtZSA9IGFyZzE7XHJcbmNvbnN0IGh1bWFuQm9hcmQgPSBhcmcyO1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmc1O1xyXG5jb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzY7XHJcblxyXG4vLyBoZWFkZXJzIGZvciB0aGUgcm93cyBhbmQgY29sdW1ucyBvZiB0aGUgaHVtYW4gcGxheWVyIGJvYXJkXHJcbmNvbnN0IGRpdkNvbHVtbnNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdkNvbHVtbnNIZWFkLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbnNIZWFkJyk7XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICBjb25zdCBjZWxsSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2VsbEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRDZWxsXCIpO1xyXG4gIGNlbGxIZWFkLnRleHRDb250ZW50ID0gYWxmX3lbal0udG9VcHBlckNhc2UoKTtcclxuICBkaXZDb2x1bW5zSGVhZC5hcHBlbmRDaGlsZChjZWxsSGVhZCk7XHJcbiAgfVxyXG5hcmcyLmFwcGVuZENoaWxkKGRpdkNvbHVtbnNIZWFkKTtcclxuXHJcbmNvbnN0IGRpdlJvd3NIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdlJvd3NIZWFkLmNsYXNzTGlzdC5hZGQoJ3Jvd3NIZWFkJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICBjb25zdCBjZWxsSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2VsbEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRDZWxsXCIpO1xyXG4gIGNlbGxIZWFkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6Ny4yNSU7Jyk7XHJcbiAgY2VsbEhlYWQudGV4dENvbnRlbnQgPSBpKzE7XHJcbiAgZGl2Um93c0hlYWQuYXBwZW5kQ2hpbGQoY2VsbEhlYWQpO1xyXG4gIH1cclxuYXJnMi5hcHBlbmRDaGlsZChkaXZSb3dzSGVhZCk7XHJcblxyXG4vLyBkaXYgZm9yIGFkZCB0aGUgc2hpcHMgaW4gdGhlIGJvYXJkXHJcbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZEZvckFkZCcpO1xyXG5ncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWRGb3JBZGQnKTtcclxuY29uc3QgZGl2Rm9yRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGl2Rm9yRXJyb3Iuc2V0QXR0cmlidXRlKCdpZCcsJ2RpdkZvckVycm9yJyk7XHJcbmRpdkZvckVycm9yLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMSAvIDI7IGdyaWQtY29sdW1uOiA0IC8gNTsnKTtcclxuXHJcbmNvbnN0IHNoaXBMZW5ndGg9WzUsMyw0LDYsNCw1XTtcclxuICAgICAgICBcclxuZm9yKGxldCBpPTE7IGk8PXNoaXBMZW5ndGgubGVuZ3RoOyArK2kpe1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsYGZvcm0ke2l9YCk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1JbnB1dCcpO1xyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsYHN1Ym1pdCR7aX1gKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IGBBREQgTsKwICR7aX1gO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpncmVlbjsgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgZm9udC13ZWlnaHQ6IDkwMDsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0OycpO1xyXG4gICAgdGV4dC5pbm5lclRleHQgPSBgJHtzaGlwTGVuZ3RoW2ktMV19IHNxdWFyZXMgbG9uZ2l0dWRlYDtcclxuICAgXHJcblxyXG4gICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJhZGlvRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1SYWRpbycpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9ySG9yaXpvbnRhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBob3Jpem9udGFsbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JWZXJ0aWNhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRpcmVjdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxMnB4Jyk7XHJcbiAgICBsYWJlbEZvckhvcml6b250YWwuaW5uZXJUZXh0ID0gJ2xlZnQtdG8tcmlnaHQnO1xyXG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLnNldEF0dHJpYnV0ZSgnZm9yJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgbGFiZWxGb3JWZXJ0aWNhbC5pbm5lclRleHQgPSAndG9wLXRvLWRvd24nO1xyXG4gICAgbGFiZWxGb3JWZXJ0aWNhbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvcC10by1kb3duJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ2lkJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2RpcmVjdGlvbicpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsZWZ0LXRvLXJpZ2h0Jyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b3AtdG8tZG93bicpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywndG9wLXRvLWRvd24nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCduYW1lJywnZGlyZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgY29vcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvb3JkUm93LmlubmVyVGV4dCA9ICdST1c6ICc7XHJcbiAgICBjb25zdCBjb29yZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29vcmRDb2x1bW4uaW5uZXJUZXh0ID0gJ0NPTFVNTjogJztcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxyb3dzOyArK2kpe1xyXG4gICAgICAgIGNvbnN0IHJvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcm93TGFiZWwuaW5uZXJUZXh0ID0gaSsxO1xyXG4gICAgICAgIHJvd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgcm93JHtpKzF9YCk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ2lkJyxgcm93JHtpKzF9YCk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCduYW1lJywncm93U2VsZWN0ZWQnKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxpKzEpO1xyXG5cclxuICAgICAgICBjb29yZFJvdy5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XHJcbiAgICAgICAgY29vcmRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBmb3IobGV0IGo9MDsgajxjb2x1bW5zOyArK2ope1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29sdW1uTGFiZWwuaW5uZXJUZXh0ID0gYWxmX3lbal0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBjb2x1bW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYGNvbHVtbiR7YWxmX3lbal19YCk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgY29sdW1uJHthbGZfeVtqXX1gKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjb2x1bW5TZWxlY3RlZCcpO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgndmFsdWUnLGFsZl95W2pdKTtcclxuXHJcbiAgICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoY29sdW1uTGFiZWwpO1xyXG4gICAgICAgIGNvb3JkQ29sdW1uLmFwcGVuZENoaWxkKGlucHV0Q29sdW1uKTtcclxuICAgIH1cclxuXHJcbiAgICBob3Jpem9udGFsbHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdmVydGljYWxseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uU2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIGRpcmVjdGlvblJhZGlvVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJkaXJlY3Rpb25cIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgZGlyZWN0aW9uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgIHNob3dFcnJvcihyYWRpb0RpdiwnbXVzdCBzZWxlY3QgZGlyZWN0aW9uJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblNlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGxldCByb3dTZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gcm93UmFkaW9WYWx1ZSgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJyb3dTZWxlY3RlZFwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICByb3dTZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgcm93U2VsZWN0ZWQgPSAxO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gcm93U2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgbGV0IGNvbHVtblNlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiBjb2x1bW5SYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiY29sdW1uU2VsZWN0ZWRcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgIGNvbHVtblNlbGVjdGVkID0gJ2EnO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gY29sdW1uU2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2l6ZSA9IHNoaXBMZW5ndGhbaS0xXTtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBOdW1iZXIgPSBpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJhZGlvVmFsdWUoKTtcclxuXHJcbiAgICAgICAgbGV0IHJvd1NlbGVjdGVkID0gcm93UmFkaW9WYWx1ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvbHVtblNlbGVjdGVkID0gY29sdW1uUmFkaW9WYWx1ZSgpO1xyXG5cclxuICAgICAgICBsZXQgY29vcmQgPSBbTnVtYmVyKHJvd1NlbGVjdGVkKSxjb2x1bW5TZWxlY3RlZF07XHJcblxyXG4gICAgICAgIGxldCBzaGlwID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLmRhdGFTaGlwcyhjb29yZCxkaXJlY3Rpb24sc2l6ZSxzaGlwTnVtYmVyKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChzaGlwIT09bnVsbCl7XHJcbiAgICAgICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgbGV0IG5ld0JvYXJkID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLnBsYWNlU2hpcHNJblRoZUJvYXJkKHNoaXApO1xyXG4gICAgICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLCBuZXdCb2FyZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZvcm0ke2l9YCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFJlYWR5LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1JbnB1dCcpLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsQWRkU2hpcHNEaXYoZ3JpZCxkaXZGb3JSYW5kb20sZGl2Q29sdW1uc0hlYWQsZGl2Um93c0hlYWQpO1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihjb21wdXRlckJvYXJkLHNoaXBMZW5ndGgscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc2NvcmVCb2FyZChhcmczLHBsYXllckh1bWFuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzaG93RXJyb3IoZGl2Rm9yRXJyb3IsJ1NFTEVDVCBBTk9USEVSIExPQ0FUSU9OJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgYXJnMy5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRGl2KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRSb3cpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRDb2x1bW4pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JIb3Jpem9udGFsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGhvcml6b250YWxseSk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvclZlcnRpY2FsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKHZlcnRpY2FsbHkpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGl2Rm9yUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZGb3JSYW5kb20uaW5uZXJUZXh0ID0gJ0NsaWNrIGhlcmUgZm9yIGEgcmFuZG9tIGZsZWV0IG9mIHNoaXBzJztcclxuICAgIGRpdkZvclJhbmRvbS5jbGFzc0xpc3QuYWRkKCdyYW5kb21zaGlwcycpO1xyXG4gICAgY29uc3QgYnV0dG9uUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25SYW5kb20uaW5uZXJUZXh0ID0gJ1JBTkRPTSBGTEVFVCc7XHJcbiAgICBidXR0b25SYW5kb20uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG5cclxuICAgIGJ1dHRvblJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVySHVtYW5bJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQscGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLGRpdkZvclJhbmRvbSxkaXZDb2x1bW5zSGVhZCxkaXZSb3dzSGVhZCk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihjb21wdXRlckJvYXJkLHNoaXBMZW5ndGgscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIHNjb3JlQm9hcmQoYXJnMyxwbGF5ZXJIdW1hbixwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvclJhbmRvbSk7XHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvckVycm9yKTtcclxuICAgIGRpdkZvclJhbmRvbS5hcHBlbmRDaGlsZChidXR0b25SYW5kb20pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQWRkU2hpcHNEaXYoYXJnMSxhcmcyLGFyZzMsYXJnNCl7XHJcbiAgICAvLyBhbGwgdGhlIGFyZ3VtZW50cyBhcmUgdGhlIGRpdnMgdG8gd2lsbCBiZSByZW1vdmVkXHJcbiAgICBhcmcxLnJlbW92ZSgpO1xyXG4gICAgYXJnMi5yZW1vdmUoKTtcclxuICAgIGFyZzMucmVtb3ZlKCk7XHJcbiAgICBhcmc0LnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzEsYXJnMixhcmczKXtcclxuICAgICAgLyogIGFyZzEgaXMgdGhlIGRpdiB0byB3cml0ZSB0aGUgaGVhZCAqL1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmcxO1xyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBhcmcyO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnMztcclxuXHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jb21wdXRlcicpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkQ29tcHV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkQ29tcHV0ZXIuaW5uZXJUZXh0ID0gJ3RoaXMgaXMgeW91ciBlbmVteSAnLnRvVXBwZXJDYXNlKCkrJyBDbGljayBUbyBBdHRhY2snO1xyXG4gICAgICAgIGhlYWRDb21wdXRlci5jbGFzc0xpc3QuYWRkKCdoZWFkQ29tcHV0ZXInKTtcclxuICAgICAgICBhcmcxLmFwcGVuZENoaWxkKGhlYWRDb21wdXRlcik7XHJcblxyXG4gICAgICAgIHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFNoaXBzfTsiLCJjb25zdCBhZGphY2VudCA9IG5ldyBNYXAoKTtcclxuXHJcbmFkamFjZW50LnNldCgwLFsxLDEyXSk7XHJcbmFkamFjZW50LnNldCgxLFswLDIsMTNdKTtcclxuYWRqYWNlbnQuc2V0KDIsWzEsMywxNF0pO1xyXG5hZGphY2VudC5zZXQoMyxbMiw0LDE1XSk7XHJcbmFkamFjZW50LnNldCg0LFszLDUsMTZdKTtcclxuYWRqYWNlbnQuc2V0KDUsWzQsNiwxN10pO1xyXG5hZGphY2VudC5zZXQoNixbNSw3LDE4XSk7XHJcbmFkamFjZW50LnNldCg3LFs2LDgsMTldKTtcclxuYWRqYWNlbnQuc2V0KDgsWzcsOSwyMF0pO1xyXG5hZGphY2VudC5zZXQoOSxbOCwxMCwyMV0pO1xyXG5hZGphY2VudC5zZXQoMTAsWzksMTEsMjJdKTtcclxuYWRqYWNlbnQuc2V0KDExLFsxMCwyM10pO1xyXG5hZGphY2VudC5zZXQoMTIsWzAsMTMsMjRdKTtcclxuYWRqYWNlbnQuc2V0KDEzLFsxLDEyLDE0LDI1XSk7XHJcbmFkamFjZW50LnNldCgxNCxbMiwxMywxNSwyNl0pO1xyXG5hZGphY2VudC5zZXQoMTUsWzMsMTQsMTYsMjddKTtcclxuYWRqYWNlbnQuc2V0KDE2LFs0LDE1LDE3LDI4XSk7XHJcbmFkamFjZW50LnNldCgxNyxbNSwxNiwxOCwyOV0pO1xyXG5hZGphY2VudC5zZXQoMTgsWzYsMTcsMTksMzBdKTtcclxuYWRqYWNlbnQuc2V0KDE5LFs3LDE4LDIwLDMxXSk7XHJcbmFkamFjZW50LnNldCgyMCxbOCwxOSwyMSwzMl0pO1xyXG5hZGphY2VudC5zZXQoMjEsWzksMjAsMjIsMzNdKTtcclxuYWRqYWNlbnQuc2V0KDIyLFsxMCwyMSwyMywzNF0pO1xyXG5hZGphY2VudC5zZXQoMjMsWzExLDIyLDM1XSk7XHJcbmFkamFjZW50LnNldCgyNCxbMTIsMjUsMzZdKTtcclxuYWRqYWNlbnQuc2V0KDI1LFsxMywyNCwyNiwzN10pO1xyXG5hZGphY2VudC5zZXQoMjYsWzE0LDI1LDI3LDM4XSk7XHJcbmFkamFjZW50LnNldCgyNyxbMTUsMjYsMjgsMzldKTtcclxuYWRqYWNlbnQuc2V0KDI4LFsxNiwyNywyOSw0MF0pO1xyXG5hZGphY2VudC5zZXQoMjksWzE3LDI4LDMwLDQxXSk7XHJcbmFkamFjZW50LnNldCgzMCxbMTgsMjksMzEsNDJdKTtcclxuYWRqYWNlbnQuc2V0KDMxLFsxOSwzMCwzMiw0M10pO1xyXG5hZGphY2VudC5zZXQoMzIsWzIwLDMxLDMzLDQ0XSk7XHJcbmFkamFjZW50LnNldCgzMyxbMjEsMzIsMzQsNDVdKTtcclxuYWRqYWNlbnQuc2V0KDM0LFsyMiwzMywzNSw0Nl0pO1xyXG5hZGphY2VudC5zZXQoMzUsWzIzLDM0LDQ3XSk7XHJcbmFkamFjZW50LnNldCgzNixbMjQsMzcsNDhdKTtcclxuYWRqYWNlbnQuc2V0KDM3LFsyNSwzNiwzOCw0OV0pO1xyXG5hZGphY2VudC5zZXQoMzgsWzI2LDM3LDM5LDUwXSk7XHJcbmFkamFjZW50LnNldCgzOSxbMjcsMzgsNDAsNTFdKTtcclxuYWRqYWNlbnQuc2V0KDQwLFsyOCwzOSw0MSw1Ml0pO1xyXG5hZGphY2VudC5zZXQoNDEsWzI5LDQwLDQyLDUzXSk7XHJcbmFkamFjZW50LnNldCg0MixbMzAsNDEsNDMsNTRdKTtcclxuYWRqYWNlbnQuc2V0KDQzLFszMSw0Miw0NCw1NV0pO1xyXG5hZGphY2VudC5zZXQoNDQsWzMyLDQzLDQ1LDU2XSk7XHJcbmFkamFjZW50LnNldCg0NSxbMzMsNDQsNDYsNTddKTtcclxuYWRqYWNlbnQuc2V0KDQ2LFszNCw0NSw0Nyw1OF0pO1xyXG5hZGphY2VudC5zZXQoNDcsWzM1LDQ2LDU5XSk7XHJcbmFkamFjZW50LnNldCg0OCxbMzYsNDksNjBdKTtcclxuYWRqYWNlbnQuc2V0KDQ5LFszNyw0OCw1MCw2MV0pO1xyXG5hZGphY2VudC5zZXQoNTAsWzM4LDQ5LDUxLDYyXSk7XHJcbmFkamFjZW50LnNldCg1MSxbMzksNTAsNTIsNjNdKTtcclxuYWRqYWNlbnQuc2V0KDUyLFs0MCw1MSw1Myw2NF0pO1xyXG5hZGphY2VudC5zZXQoNTMsWzQxLDUyLDU0LDY1XSk7XHJcbmFkamFjZW50LnNldCg1NCxbNDIsNTMsNTUsNjZdKTtcclxuYWRqYWNlbnQuc2V0KDU1LFs0Myw1NCw1Niw2N10pO1xyXG5hZGphY2VudC5zZXQoNTYsWzQ0LDU1LDU3LDY4XSk7XHJcbmFkamFjZW50LnNldCg1NyxbNDUsNTYsNTgsNjldKTtcclxuYWRqYWNlbnQuc2V0KDU4LFs0Niw1Nyw1OSw3MF0pO1xyXG5hZGphY2VudC5zZXQoNTksWzQ3LDU4LDcxXSk7XHJcbmFkamFjZW50LnNldCg2MCxbNDgsNjEsNzJdKTtcclxuYWRqYWNlbnQuc2V0KDYxLFs0OSw2MCw2Miw3M10pO1xyXG5hZGphY2VudC5zZXQoNjIsWzUwLDYxLDYzLDc0XSk7XHJcbmFkamFjZW50LnNldCg2MyxbNTEsNjIsNjQsNzVdKTtcclxuYWRqYWNlbnQuc2V0KDY0LFs1Miw2Myw2NSw3Nl0pO1xyXG5hZGphY2VudC5zZXQoNjUsWzUzLDY0LDY2LDc3XSk7XHJcbmFkamFjZW50LnNldCg2NixbNTQsNjUsNjcsNzhdKTtcclxuYWRqYWNlbnQuc2V0KDY3LFs1NSw2Niw2OCw3OV0pO1xyXG5hZGphY2VudC5zZXQoNjgsWzU2LDY3LDY5LDgwXSk7XHJcbmFkamFjZW50LnNldCg2OSxbNTcsNjgsNzAsODFdKTtcclxuYWRqYWNlbnQuc2V0KDcwLFs1OCw2OSw3MSw4Ml0pO1xyXG5hZGphY2VudC5zZXQoNzEsWzU5LDcwLDgzXSk7XHJcbmFkamFjZW50LnNldCg3MixbNjAsNzMsODRdKTtcclxuYWRqYWNlbnQuc2V0KDczLFs2MSw3Miw3NCw4NV0pO1xyXG5hZGphY2VudC5zZXQoNzQsWzYyLDczLDc1LDg2XSk7XHJcbmFkamFjZW50LnNldCg3NSxbNjMsNzQsNzYsODddKTtcclxuYWRqYWNlbnQuc2V0KDc2LFs2NCw3NSw3Nyw4OF0pO1xyXG5hZGphY2VudC5zZXQoNzcsWzY1LDc2LDc4LDg5XSk7XHJcbmFkamFjZW50LnNldCg3OCxbNjYsNzcsNzksOTBdKTtcclxuYWRqYWNlbnQuc2V0KDc5LFs2Nyw3OCw4MCw5MV0pO1xyXG5hZGphY2VudC5zZXQoODAsWzY4LDc5LDgxLDkyXSk7XHJcbmFkamFjZW50LnNldCg4MSxbNjksODAsODIsOTNdKTtcclxuYWRqYWNlbnQuc2V0KDgyLFs3MCw4MSw4Myw5NF0pO1xyXG5hZGphY2VudC5zZXQoODMsWzcxLDgyLDk1XSk7XHJcbmFkamFjZW50LnNldCg4NCxbNzIsODUsOTZdKTtcclxuYWRqYWNlbnQuc2V0KDg1LFs3Myw4NCw4Niw5N10pO1xyXG5hZGphY2VudC5zZXQoODYsWzc0LDg1LDg3LDk4XSk7XHJcbmFkamFjZW50LnNldCg4NyxbNzUsODYsODgsOTldKTtcclxuYWRqYWNlbnQuc2V0KDg4LFs3Niw4Nyw4OSwxMDBdKTtcclxuYWRqYWNlbnQuc2V0KDg5LFs3Nyw4OCw5MCwxMDFdKTtcclxuYWRqYWNlbnQuc2V0KDkwLFs3OCw4OSw5MSwxMDJdKTtcclxuYWRqYWNlbnQuc2V0KDkxLFs3OSw5MCw5MiwxMDNdKTtcclxuYWRqYWNlbnQuc2V0KDkyLFs4MCw5MSw5MywxMDRdKTtcclxuYWRqYWNlbnQuc2V0KDkzLFs4MSw5Miw5NCwxMDVdKTtcclxuYWRqYWNlbnQuc2V0KDk0LFs4Miw5Myw5NSwxMDZdKTtcclxuYWRqYWNlbnQuc2V0KDk1LFs4Myw5NCwxMDddKTtcclxuYWRqYWNlbnQuc2V0KDk2LFs4NCw5NywxMDhdKTtcclxuYWRqYWNlbnQuc2V0KDk3LFs4NSw5Niw5OCwxMDldKTtcclxuYWRqYWNlbnQuc2V0KDk4LFs4Niw5Nyw5OSwxMTBdKTtcclxuYWRqYWNlbnQuc2V0KDk5LFs4Nyw5OCwxMDAsMTExXSk7XHJcbmFkamFjZW50LnNldCgxMDAsWzg4LDk5LDEwMSwxMTJdKTtcclxuYWRqYWNlbnQuc2V0KDEwMSxbODksMTAwLDEwMiwxMTNdKTtcclxuYWRqYWNlbnQuc2V0KDEwMixbOTAsMTAxLDEwMywxMTRdKTtcclxuYWRqYWNlbnQuc2V0KDEwMyxbOTEsMTAyLDEwNCwxMTVdKTtcclxuYWRqYWNlbnQuc2V0KDEwNCxbOTIsMTAzLDEwNSwxMTZdKTtcclxuYWRqYWNlbnQuc2V0KDEwNSxbOTMsMTA0LDEwNiwxMTddKTtcclxuYWRqYWNlbnQuc2V0KDEwNixbOTQsMTA1LDEwNywxMThdKTtcclxuYWRqYWNlbnQuc2V0KDEwNyxbOTUsMTA2LDExOV0pO1xyXG5hZGphY2VudC5zZXQoMTA4LFs5NiwxMDksMTIwXSk7XHJcbmFkamFjZW50LnNldCgxMDksWzk3LDEwOCwxMTAsMTIxXSk7XHJcbmFkamFjZW50LnNldCgxMTAsWzk4LDEwOSwxMTEsMTIyXSk7XHJcbmFkamFjZW50LnNldCgxMTEsWzk5LDExMCwxMTIsMTIzXSk7XHJcbmFkamFjZW50LnNldCgxMTIsWzEwMCwxMTEsMTEzLDEyNF0pO1xyXG5hZGphY2VudC5zZXQoMTEzLFsxMDEsMTEyLDExNCwxMjVdKTtcclxuYWRqYWNlbnQuc2V0KDExNCxbMTAyLDExMywxMTUsMTI2XSk7XHJcbmFkamFjZW50LnNldCgxMTUsWzEwMywxMTQsMTE2LDEyN10pO1xyXG5hZGphY2VudC5zZXQoMTE2LFsxMDQsMTE1LDExNywxMjhdKTtcclxuYWRqYWNlbnQuc2V0KDExNyxbMTA1LDExNiwxMTgsMTI5XSk7XHJcbmFkamFjZW50LnNldCgxMTgsWzEwNiwxMTcsMTE5LDEzMF0pO1xyXG5hZGphY2VudC5zZXQoMTE5LFsxMDcsMTE4LDEzMV0pO1xyXG5hZGphY2VudC5zZXQoMTIwLFsxMDgsMTIxLDEzMl0pO1xyXG5hZGphY2VudC5zZXQoMTIxLFsxMDksMTIwLDEyMiwxMzNdKTtcclxuYWRqYWNlbnQuc2V0KDEyMixbMTEwLDEyMSwxMjMsMTM0XSk7XHJcbmFkamFjZW50LnNldCgxMjMsWzExMSwxMjIsMTI0LDEzNV0pO1xyXG5hZGphY2VudC5zZXQoMTI0LFsxMTIsMTIzLDEyNSwxMzZdKTtcclxuYWRqYWNlbnQuc2V0KDEyNSxbMTEzLDEyNCwxMjYsMTM3XSk7XHJcbmFkamFjZW50LnNldCgxMjYsWzExNCwxMjUsMTI3LDEzOF0pO1xyXG5hZGphY2VudC5zZXQoMTI3LFsxMTUsMTI2LDEyOCwxMzldKTtcclxuYWRqYWNlbnQuc2V0KDEyOCxbMTE2LDEyNywxMjksMTQwXSk7XHJcbmFkamFjZW50LnNldCgxMjksWzExNywxMjgsMTMwLDE0MV0pO1xyXG5hZGphY2VudC5zZXQoMTMwLFsxMTgsMTI5LDEzMSwxNDJdKTtcclxuYWRqYWNlbnQuc2V0KDEzMSxbMTE5LDEzMCwxNDNdKTtcclxuYWRqYWNlbnQuc2V0KDEzMixbMTIwLDEzMywxNDRdKTtcclxuYWRqYWNlbnQuc2V0KDEzMyxbMTIxLDEzMiwxMzQsMTQ1XSk7XHJcbmFkamFjZW50LnNldCgxMzQsWzEyMiwxMzMsMTM1LDE0Nl0pO1xyXG5hZGphY2VudC5zZXQoMTM1LFsxMjMsMTM0LDEzNiwxNDddKTtcclxuYWRqYWNlbnQuc2V0KDEzNixbMTI0LDEzNSwxMzcsMTQ4XSk7XHJcbmFkamFjZW50LnNldCgxMzcsWzEyNSwxMzYsMTM4LDE0OV0pO1xyXG5hZGphY2VudC5zZXQoMTM4LFsxMjYsMTM3LDEzOSwxNTBdKTtcclxuYWRqYWNlbnQuc2V0KDEzOSxbMTI3LDEzOCwxNDAsMTUxXSk7XHJcbmFkamFjZW50LnNldCgxNDAsWzEyOCwxMzksMTQxLDE1Ml0pO1xyXG5hZGphY2VudC5zZXQoMTQxLFsxMjksMTQwLDE0MiwxNTNdKTtcclxuYWRqYWNlbnQuc2V0KDE0MixbMTMwLDE0MSwxNDMsMTU0XSk7XHJcbmFkamFjZW50LnNldCgxNDMsWzEzMSwxNDIsMTU1XSk7XHJcbmFkamFjZW50LnNldCgxNDQsWzEzMiwxNDVdKTtcclxuYWRqYWNlbnQuc2V0KDE0NSxbMTMzLDE0NCwxNDZdKTtcclxuYWRqYWNlbnQuc2V0KDE0NixbMTM0LDE0NSwxNDddKTtcclxuYWRqYWNlbnQuc2V0KDE0NyxbMTM1LDE0NiwxNDhdKTtcclxuYWRqYWNlbnQuc2V0KDE0OCxbMTM2LDE0NywxNDldKTtcclxuYWRqYWNlbnQuc2V0KDE0OSxbMTM3LDE0OCwxNTBdKTtcclxuYWRqYWNlbnQuc2V0KDE1MCxbMTM4LDE0OSwxNTFdKTtcclxuYWRqYWNlbnQuc2V0KDE1MSxbMTM5LDE1MCwxNTJdKTtcclxuYWRqYWNlbnQuc2V0KDE1MixbMTQwLDE1MSwxNTNdKTtcclxuYWRqYWNlbnQuc2V0KDE1MyxbMTQxLDE1MiwxNTRdKTtcclxuYWRqYWNlbnQuc2V0KDE1NCxbMTQyLDE1MywxNTVdKTtcclxuYWRqYWNlbnQuc2V0KDE1NSxbMTQzLDE1NF0pO1xyXG5cclxuXHJcbmV4cG9ydCB7YWRqYWNlbnR9O1xyXG4iLCJjb25zdCByb3dzID0gMTM7XHJcbmNvbnN0IGNvbHVtbnMgPSAxMjtcclxuXHJcbmNvbnN0IGFsZl95ID0gW1xyXG4gICAgJ2EnLCdiJywnYycsJ2QnLCdlJywnZicsJ2cnLCdoJywnaScsJ2onLCdrJywnbCdcclxuICAgICBdO1xyXG5cclxuZnVuY3Rpb24gc2hpZnRDb29yZGluYXRlcyhbdmFsdWVfeCx2YWx1ZV95XSl7XHJcbiAgICAgICAvKiAgbGV0IFt4LHldID0gWzEsJ2EnXTsgICovXHJcbiAgICAgICAgc3dpdGNoKGFsZl95LmluY2x1ZGVzKHZhbHVlX3kudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhbGZfeS5pbmRleE9mKHZhbHVlX3kudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsgdmFsdWVfeC0xLCBpbmRleCBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkxvY2F0aW9uKFt4LHldLGRpcmVjdGlvbixrZXkpe1xyXG5sZXQgYXJyYXlPZkNvb3JkaW5hdGVzID0gW107XHJcbmxldCBpbml0aWFsWCA9IHg7XHJcbmxldCBpbml0aWFsWSA9IGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHN3aXRjaChkaXJlY3Rpb249PT0nbGVmdC10by1yaWdodCcpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICBpZihhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSkgKyBrZXkgPiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyB4LCBhbGZfeVtpbml0aWFsWSArIGldIF0pO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbj09PSd0b3AtdG8tZG93bicpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBpZihpbml0aWFsWCArIGtleS0xID4gcm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIGluaXRpYWxYICsgaSwgeSBdKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDb29yZGluYXRlcyhbeCx5XSl7XHJcbiAgICBpZih4ID4gMCAmJiB4IDw9IHJvd3MgJiYgYWxmX3kuaW5jbHVkZXMoeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pe1xyXG4gIC8qICAgbGV0IFt4LHldID0gWzEsJ2EnXTsgICAgICovXHJcbiAgICByZXR1cm4gWyByb3cgKyAxLCBhbGZfeVtjb2x1bW5dIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21Db29yZGluYXRlc3RvQ2VsbChjb29yZCl7XHJcbiAgIC8qICBsZXQgW3Jvdyxjb2x1bW5dID0gWzAsMF07ICovXHJcbiAgICBsZXQgcm93U2VsZWN0ZWQgPSBjb29yZFswXS0xO1xyXG4gICAgbGV0IGNvbHVtblNlbGVjdGVkID0gYWxmX3kuaW5kZXhPZihjb29yZFsxXS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICByZXR1cm4gW051bWJlcihyb3dTZWxlY3RlZCksIE51bWJlcihjb2x1bW5TZWxlY3RlZCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxDb29yZGluYXRlc1Bvc2libGVzKCkge1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChgJHtpKzF9LCR7YWxmX3lbal19YCk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpe1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBsZXQgbj0gLTE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgbiA9IG4gKyAxO1xyXG4gICAgICAgIGFycmF5LnB1c2goW24sW2Ake2krMX0sJHthbGZfeVtqXX1gXV0pO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZXhwb3J0IHsgcm93cywgY29sdW1ucywgYWxmX3ksIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBcclxuICAgIGNoZWNrQ29vcmRpbmF0ZXMsIGZyb21DZWxsdG9Db29yZGluYXRlcywgYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcyxcclxuICAgICAgICBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwsIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVycyhhcmcxKSB7XHJcbiAgICAvKiB0aGUgYXJnMSBpcyB0aGUgcGFyZW50IGNvbnRhaW5lciAgICovXHJcbiAgICBcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZEZvckFkZCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnZ3JpZEZvckFkZCcpO1xyXG4gICAgXHJcbiAgICAgICAgYXJnMS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWluZXJzIH07IiwiZnVuY3Rpb24gZGVsZXRlRXJyb3JNZXNzYWdlcygpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcclxuICAgIC8qIHBhcmEgY3JlYXIgdW4gYXJyYXkgZGVzZGUgZWwgTm9kZUxpc3QgKi9cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXNBcnJheSA9IFsuLi5lcnJvck1lc3NhZ2VzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gZXJyb3JNZXNzYWdlc0FycmF5LmVudHJpZXMoKTtcclxuICAgIGVycm9yTWVzc2FnZXNBcnJheS5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgLyogICBjb25zb2xlLmxvZyhpbmRleFswXSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4WzFdKTsgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgIC8qIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgeC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9OyIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IGZyb21DZWxsdG9Db29yZGluYXRlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcihcclxuICAgICAgICBwbGF5ZXJSZWFsID0gXCJIVU1BTiBQbGF5ZXJcIixcclxuICAgICAgICBwbGF5ZXJDb21wdXRlciA9IFwiQ09NUFVURVIgUGxheWVyXCIsXHJcbiAgICAgICAgd2lubmVyID0gZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZSA9ICcnICl7XHJcbiAgICBcclxuICAgICAgICBsZXQgcGxheWVycyA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyUmVhbClcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyQ29tcHV0ZXIpXHJcbiAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHRoZSBwbGF5ZXIgZG9lc250IGNoYW5nZSAqL1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogc3dpdGNoIHBsYXllciovXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07XHJcbiAgICAgICAgICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xyXG5cclxuICAgICAgICAgICBjb25zdCBib2FyZFJlYWwgPSAoKSA9PiBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuICAgICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gKCkgPT4gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGdldENvbXB1dGVyUGxheWVyID0gKCkgPT4gcGxheWVyc1sxXTtcclxuICAgICAgICAgICBjb25zdCBnZXRIdW1hblBsYXllciA9ICgpID0+IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGlzVGhlcmVBV2lubmVyID0gKCkgPT4gd2lubmVyO1xyXG5cclxuICAgIGNvbnN0IHByaW50TmV3Um91bmQgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgYm9hcmRSZWFsKCk7XHJcbiAgICAgICAgICAgIGJvYXJkQ29tcHV0ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgIGNhc2UgdHJ1ZTogICBcclxuICAgICAgICAgICAgICAgbWVzc2FnZSA9ICBnZXRBY3RpdmVQbGF5ZXIoKS50eXBlICsgJyBXT04nOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnJzsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07IFxyXG4gICAgICAvKiAgY29uc29sZS5sb2cobWVzc2FnZSk7ICAqLyAgIFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZ2V0R2FtZU1lc3NhZ2UgPSAoKSA9PiBtZXNzYWdlOyAgICBcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXS5nZXRUb3RhbFN1bmsoKSA9PT0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ10ubGVuZ3RoICl7XHJcbiAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIHBsYXllcnNbMV1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4geyBcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xyXG4gICAgICAgIC8qIHRoaXMgcmVzZXQgaXMgbm90IGJlZW4gdXNlZCAqL1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGxheVJvdW5kID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBpZiAoIHdpbm5lciA9PT0gdHJ1ZSApeyBcclxuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKTtcclxuICAgICAgICAgICAgbGV0IGdhbWVib2FyZCA9IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXlSb3VuZENvbXB1dGVyID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAvKiBjb25zb2xlLmxvZygnYWN0aXZhbmRvIGp1ZWdvJyk7ICovXHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCBib2FyZCApIDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3BsYXlSb3VuZCxwbGF5Um91bmRDb21wdXRlciwgZ2V0QWN0aXZlUGxheWVyLCBcclxuICAgICAgICBnZXRHYW1lTWVzc2FnZSwgYm9hcmRSZWFsLCBib2FyZENvbXB1dGVyLCByZXNldEdhbWUsXHJcbiAgICAgICAgIGdldENvbXB1dGVyUGxheWVyLCBnZXRIdW1hblBsYXllciwgaXNUaGVyZUFXaW5uZXJ9O1xyXG59XHJcblxyXG5leHBvcnQge2dhbWVDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIGNoZWNrQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5cclxuXHJcbi8vIGEgY2xhc3MgR2FtZWJvYXJkXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdldEJvYXJkKHJvd3MsIGNvbHVtbnMpO1xyXG4gICAgICAgIHRoaXMuYXJyYXlNaXNzZWQgPSBuZXcgU2V0KFtdKTtcclxuICAgICAgICB0aGlzLmFycmF5QWxsQXR0YWNrID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvYXJkKCByb3dzLCBjb2x1bW5zLCBib2FyZD1bXSl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKHRoaXMuY2VsbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbGwoKXtcclxuICAgXHJcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7dmFsdWV9OyAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBkYXRhU2hpcHMoW3gseV0sZGlyZWN0aW9uLHNpemUsc2hpcE51bWJlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sc2l6ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoc2hpcENvb3JkaW5hdGVzPT09bnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgbm90QXZhaWxhYmxlID0gc2hpcENvb3JkaW5hdGVzLm1hcChcclxuICAgICAgICAgICAgICAgICh4KSA9PiB0aGlzLmJvYXJkW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMF1dW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMV1dLnZhbHVlID09PSAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgIChub3RBdmFpbGFibGUuaW5jbHVkZXModHJ1ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXNUb1N0cmluZyA9IHNoaXBDb29yZGluYXRlcy5tYXAoKHgpID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGxldCBvbmVTaGlwID0geyBcclxuICAgICAgICAgICAgICAgICdzaGlwTnVtYmVyJzpzaGlwTnVtYmVyLCBcclxuICAgICAgICAgICAgICAgICdzaGlwRGV0YWlscyc6IG5ldyBTaGlwKHNpemUpLFxyXG4gICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogc2hpcENvb3JkaW5hdGVzVG9TdHJpbmdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaChvbmVTaGlwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9uZVNoaXA7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzSW5UaGVCb2FyZCggb25lU2hpcCApe1xyXG4gICAgICAgIGxldCBhcnJheSA9IG9uZVNoaXBbJ2Nvb3JkaW5hdGVzJ107XHJcbiAgICAgICAgbGV0IHJldmVyc2VTdHJpbmcgPSBhcnJheS5tYXAoKHgpPT4geC5zcGxpdCgnLCcpKTtcclxuICAgICAgICBsZXQgYXJyYXlJbkJvYXJkID0gcmV2ZXJzZVN0cmluZy5tYXAoICh2YWx1ZXMpID0+IHNoaWZ0Q29vcmRpbmF0ZXModmFsdWVzKSk7XHJcbiAgICAgICAgYXJyYXlJbkJvYXJkLm1hcCgoW3gseV0pID0+IHRoaXMuYm9hcmRbeF1beV0udmFsdWUgPSAxICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlY29yZGVkQXR0YWNrKCBbeCx5XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2syPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRNaXNzZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl7ICAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKCFjaGVja0Nvb3JkaW5hdGVzKFt4LHldKSB8fCB0aGlzLmFycmF5QWxsQXR0YWNrLmhhcyhbeCx5LnRvTG93ZXJDYXNlKCldLnRvU3RyaW5nKCkpICl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgW2JvYXJkWCxib2FyZFldID0gc2hpZnRDb29yZGluYXRlcyhbeCx5XSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMihbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgdGhpcy5hbGxTaGlwcy5sZW5ndGg7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYWxsU2hpcHNbaV1bJ2Nvb3JkaW5hdGVzJ10uaW5jbHVkZXMoW3gseV0udG9TdHJpbmcoKSk9PT10cnVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCA9IHRoaXMuYWxsU2hpcHNbaV1bJ3NoaXBEZXRhaWxzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddID0gc2hpcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY29yZGVkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5QWxsQXR0YWNrKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG4gICAgIHJlY29yZGVkTWlzc2VkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5TWlzc2VkKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9IFxyXG5cclxuICAgIGdldFRvdGFsU3Vuaygpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0ICB0b3RhbFN1bmsgPSB0aGlzLmFsbFNoaXBzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbVsnc2hpcERldGFpbHMnXS5iZWVuU3Vuaz09PXRydWUgPyB0b3RhbCArIDEgOiB0b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VuaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U25hcHNob3QoKXtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIGxldCB0b3RhbFN1bmsgPSB0aGlzLmdldFRvdGFsU3VuaygpO1xyXG5cclxuICAgICAgICBpZih0b3RhbFN1bms9PT10aGlzLmFsbFNoaXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rYDtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgU2hpcHMgdGhhdCBoYXZlIGJlZW4gc3VuazogJHt0b3RhbFN1bmt9IC0gU2hpcHMgYWZsb2F0OiAke3RoaXMuYWxsU2hpcHMubGVuZ3RoLXRvdGFsU3Vua31gO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVCb2FyZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtHYW1lYm9hcmR9OyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG4vLyBhIGNsYXNzIFBsYXllclxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgXHJcbiAgICAgICAgdGhpcy50eXBlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWVib2FyZCgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1BsYXllcn07IiwiaW1wb3J0IHthbGxDb29yZGluYXRlc1Bvc2libGVzfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnIDtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNoaXBzKGFyZzEpe1xyXG4gICAgLyogYXJnMSBpcyB0aGUgcGxheWVyR2FtZWJvYXJkIGFyZzIgaXMgdGhlIGFycmF5IHdpdGggbGVuZ3RoKi9cclxuICAgXHJcbiAgIGNvbnN0IHNoaXBMZW5ndGg9WzUsMyw0LDYsNCw1XTtcclxuICAgY29uc3QgYXJyYXlEaXJlY3Rpb24gPSBbJ2xlZnQtdG8tcmlnaHQnLCd0b3AtdG8tZG93biddO1xyXG4gICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xyXG4gICBcclxuXHJcbiAgIGZvciAoIGxldCBpPTA7IGkgPCBzaGlwTGVuZ3RoLmxlbmd0aDsgKytpKXtcclxuICAgIGxldCBzaGlwID0gbnVsbDsgXHJcblxyXG4gICAgd2hpbGUoc2hpcD09PW51bGwpe1xyXG4gICAgbGV0IG51bWJlciA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLHRvdGFsQ2VsbHMubGVuZ3RoKTtcclxuICAgIGxldCBjb29yZCA9ICB0b3RhbENlbGxzW251bWJlci0xXS5zcGxpdCgnLCcpO1xyXG4gICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSxjb29yZFsxXV07XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gYXJyYXlEaXJlY3Rpb25bcmFuZG9tSW50RnJvbUludGVydmFsKDEsMiktMV07XHJcbiAgICBzaGlwID0gYXJnMS5kYXRhU2hpcHMoY29vcmQsZGlyZWN0aW9uLHNoaXBMZW5ndGhbaV0saSsxKTtcclxuICAgIH1cclxuICAgIGFyZzEucGxhY2VTaGlwc0luVGhlQm9hcmQoIHNoaXAgKTtcclxuXHJcbiAgIH1cclxuXHJcbnJldHVybiBhcmcxO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZXMoKXtcclxuICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xyXG4gIGxldCBudW1iZXIgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx0b3RhbENlbGxzLmxlbmd0aCk7XHJcbiAgICBsZXQgY29vcmQgPSAgdG90YWxDZWxsc1tudW1iZXItMV0uc3BsaXQoJywnKTtcclxuICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gIHJldHVybiBjb29yZDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW50RnJvbUludGVydmFsKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgfVxyXG5cclxuZXhwb3J0IHtyYW5kb21TaGlwcywgcmFuZG9tQ29vcmRpbmF0ZXN9OyIsImZ1bmN0aW9uIHNjb3JlQm9hcmQoYXJnMSxhcmcyLGFyZzMpe1xyXG4gICAgLyogYXJnMSBpcyB0aGUgYm9hcmQgZGl2LCBhcmcyIGlzIHRoZSBodW1hbiBwbGF5ZXIgb2JqZWN0LCBhcmczIGlzIHRoZSBjb21wdXRlciBwbGF5ZXIgb2JqZWN0ICovXHJcblxyXG5jb25zdCBnYW1lQ29udGFpbmVyID0gYXJnMS5wYXJlbnRFbGVtZW50O1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGFyZzI7XHJcbmNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnMztcclxuY29uc3Qgc2NvcmVCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbmNvbnN0IGh1bWFuU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2NvcmVCb2FyZERpdi5jbGFzc0xpc3QuYWRkKCdzY29yZUJvYXJkJyk7XHJcbmh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7Jyk7XHJcbmh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKCdpZCcsJ2h1bWFuLXNjb3JlJyk7XHJcbmh1bWFuU2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcclxuY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDIvMzsnKTtcclxuY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXItc2NvcmUnKTtcclxuY29tcHV0ZXJTY29yZS5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xyXG5cclxuY29uc3QgaHVtYW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaHVtYW5UaXRsZS50ZXh0Q29udGVudCA9ICdDT01QVVRFUiBhdHRhY2tzJzsgIC8qIGluIHRoZSBodW1hbiBib2FyZCAqL1xyXG5odW1hblRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoxLzI7Z3JpZC1jb2x1bW46MS8zO2JhY2tncm91bmQtY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbmh1bWFuVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2NvcmVUaXRsZScpO1xyXG5cclxuY29uc3Qgc3VjY2VzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuc3VjY2Vzcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Mi8zO2dyaWQtY29sdW1uOjEvMztjb2xvcjojMDljM2MxO2JhY2tncm91bmQtY29sb3I6bGlnaHR5ZWxsb3c7Zm9udC13ZWlnaHQ6Ym9sZDsnKTtcclxubGV0IHJhdGUgPSAwOyAvKiBpbmljaWEgZW4gMCAqL1xyXG5zdWNjZXNzLnRleHRDb250ZW50ID0gYHN1Y2Nlc3MgcmF0ZTogJHtyYXRlfSVgOyBcclxuXHJcbmNvbnN0IGltZ0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0gxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdIMS5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0gxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNIMS5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMF1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVswXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0gyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo0LzU7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdIMi5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0gyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo0LzU7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNIMi5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMV1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsxXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0gzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo1LzY7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdIMy5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0gzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo1LzY7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNIMy5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMl1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsyXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0g0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdINC5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0g0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNINC5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bM11bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVszXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0g1LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo3Lzg7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdINS5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0g1LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo3Lzg7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNINS5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNF1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs0XVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0g2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0g2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo4Lzk7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdINi5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0g2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo4Lzk7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNINi5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNV1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs1XVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcblxyXG5cclxuY29uc3QgY29tcHV0ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29tcHV0ZXJUaXRsZS50ZXh0Q29udGVudCA9ICdIVU1BTiBhdHRhY2tzJzsgIC8qIGluIHRoZSBib2FyZCBjb21wdXRlciAqL1xyXG5jb21wdXRlclRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoxLzI7Z3JpZC1jb2x1bW46MS8zO2JhY2tncm91bmQtY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbmNvbXB1dGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2NvcmVUaXRsZScpO1xyXG5cclxuY29uc3Qgc3VjY2Vzc0NvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnN1Y2Nlc3NDb21wLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoyLzM7Z3JpZC1jb2x1bW46MS8zO2NvbG9yOiMwOWMzYzE7YmFja2dyb3VuZC1jb2xvcjpsaWdodHllbGxvdztmb250LXdlaWdodDpib2xkOycpO1xyXG5sZXQgcmF0ZUNvbXAgPSAwOyAvKiBpbmljaWEgZW4gMCAqL1xyXG5zdWNjZXNzQ29tcC50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZUNvbXB9JWA7IFxyXG5cclxuY29uc3QgaW1nQzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MxLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MxLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVswXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjQvNTtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MyLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjQvNTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MyLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsxXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MzLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MzLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsyXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjYvNztncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M0LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjYvNztncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M0LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVszXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjcvODtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M1LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjcvODtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M1LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs0XVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M2LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M2LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs1XVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZUJvYXJkRGl2KTtcclxuc2NvcmVCb2FyZERpdi5hcHBlbmRDaGlsZChodW1hblNjb3JlKTtcclxuc2NvcmVCb2FyZERpdi5hcHBlbmRDaGlsZChjb21wdXRlclNjb3JlKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChodW1hblRpdGxlKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChzdWNjZXNzKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gxKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMik7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gyKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMyk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gzKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINCk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g0KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g1KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINik7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g2KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChjb21wdXRlclRpdGxlKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChzdWNjZXNzQ29tcCk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzEpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzIpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMik7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzMpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMyk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzQpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNCk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzUpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzYpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNik7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtzY29yZUJvYXJkfTsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vZ2FtZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCBhbGxDb29yZGluYXRlc1Bvc2libGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9IGZyb20gJy4vY3JlYXRlLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IGFkZFNoaXBzIH0gZnJvbSAnLi9hZGQtc2hpcHMnO1xyXG5pbXBvcnQgeyByYW5kb21Db29yZGluYXRlcyB9IGZyb20gJy4vcmFuZG9tLXNoaXBzJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHMgfSBmcm9tICcuL3VwZGF0ZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCB9IGZyb20gJy4vdXBkYXRlLWNvbXB1dGVyLWJvYXJkJztcclxuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi9zaG93LWVycm9yJztcclxuaW1wb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vZGVsZXRlLWRpdi1lcnJvcic7XHJcbmltcG9ydCB7IGFkamFjZW50IH0gZnJvbSAnLi9hZGphY2VudCc7XHJcbmltcG9ydCB7IHVwZGF0ZVNjb3JlfSBmcm9tICcuL3VwZGF0ZS1zY29yZSc7XHJcblxyXG5mdW5jdGlvbiBzY3JlZW5Db250cm9sbGVyKGFyZykge1xyXG4gICAgLyogYXJnIGlzIHRoZSBnYW1lIGNvbnRhaW5lciAqL1xyXG5cclxuICAgIGNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpO1xyXG4gICAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTsgICAvLyBmb3IgdGhlIGNvbXB1dGVyJ3MgYXR0YWNrIHB1cnBvc2VcclxuICAgIGxldCBhcnJheUFkamFjZW50ID0gW107ICAgICAgICAvLyBmb3IgdGhlIGNvbXB1dGVyJ3MgYXR0YWNrIHB1cnBvc2VcclxuXHJcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGFyZztcclxuICAgICAgICBjb25zdCB0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHdhaXRUdXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBodW1hbkJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBcclxuICAgICAgICBnYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHR1cm4uY2xhc3NMaXN0LmFkZCgndHVybicpO1xyXG4gICAgICAgIHR1cm4uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xyXG4gICAgICAgIHR1cm5EaXYuY2xhc3NMaXN0LmFkZCgndHVybkRpdicpO1xyXG4gICAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5hZGQoJ3dhaXRUdXJuJyk7XHJcbiAgICAgICAgYm9hcmREaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZCgncmVzdWx0Jyk7XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1odW1hbicpO1xyXG4gICAgICAgIGh1bWFuQm9hcmQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7IGdyaWQtY29sdW1uOjEvMicpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0QnV0dG9uJyk7XHJcbiAgICAgICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUkVTRVQgZm9yIE5FVyBHQU1FJztcclxuICAgICAgICBcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNsZWFyIHRoZSBib2FyZFxyXG4gICAgICAgIGJvYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlclBsYXllcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllckNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXHJcbiAgICAgICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICAvLyBBbnl0aGluZyBjbGlja2FibGUgc2hvdWxkIGJlIGEgYnV0dG9uISFcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsLTEpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGh1bWFuQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgLy8gQW55dGhpbmcgY2xpY2thYmxlIHNob3VsZCBiZSBhIGJ1dHRvbiEhXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICAvLyBjcmVhdGUgYSBidXR0b24gZm9yIGFkZCBzaGlwcyBhbmQgZnVuY3Rpb25cclxuICAgICAgICBhZGRpbmdTaGlwcyh0dXJuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdGlhbFNjcmVlbigpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBuZXdlc3QgdmVyc2lvbiBvZiB0aGUgYm9hcmQgYW5kIHBsYXllciB0dXJuXHJcbiAgICAgICAgY29uc3QgYm9hcmRSZWFsID0gZ2FtZS5ib2FyZFJlYWwoKTtcclxuICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZ2FtZS5ib2FyZENvbXB1dGVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEh1bWFuUGxheWVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBnYW1lLmdldENvbXB1dGVyUGxheWVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxib2FyZFJlYWwscGxheWVySHVtYW4pO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLGJvYXJkQ29tcHV0ZXIscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIHVwZGF0ZVNjb3JlKHBsYXllckh1bWFuLHBsYXllckNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICAvLyBEaXNwbGF5IHBsYXllcidzIHR1cm5cclxuICAgICAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gYCR7YWN0aXZlUGxheWVyLnR5cGV9J3MgdHVybi4uLmA7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZS5pc1RoZXJlQVdpbm5lcigpKTtcclxuICAgICAgICAvLyBjaGVjayBhbmQgYXR0YWNrcyBpcyB0aGVyZSBubyB3aW5uZXJcclxuICAgICAgICBsZXQgaXNUaGVyZUFXaW5uZXIgPSBnYW1lLmlzVGhlcmVBV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoKGlzVGhlcmVBV2lubmVyPT09ZmFsc2Upe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlUGxheWVyLnR5cGU9PT0nQ09NUFVURVIgUGxheWVyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRGl2KGJvYXJkRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyQXR0YWNrLCA0MDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIGFjdGl2ZSBwbGF5ZXIgaXMgSHVtYW4gbmVlZCB3YWl0IGZvciBhIGNsaWNrXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gZ2FtZSBvdmVyIC0gZGlzYWJsZSBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBcclxuLy8gYWRkIGEgYWRkLXNoaXBzIEJ1dHRvbiBhbmQgdGhlIGV2ZW50bGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFkZGluZ1NoaXBzKHR1cm4scGxheWVyQ29tcHV0ZXIpe1xyXG4gICAgY29uc3QgYWRkU2hpcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXHJcbiAgICBjb25zdCBhZGRTaGlwc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRTaGlwc0Rpdi5jbGFzc05hbWUgPSAnJztcclxuICAgIGFkZFNoaXBzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdhZGRTaGlwc0RpdicpO1xyXG4gICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LmFkZCgnYWRkc2hpcHMnKTtcclxuICAgIGFkZFNoaXBzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuICAgIGFkZFNoaXBzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgU0hJUFNcIjtcclxuXHJcbiAgICBhZGRTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcnModHVybik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhZGRTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFNoaXBzKGdhbWUsaHVtYW5Cb2FyZCxib2FyZERpdix0dXJuLGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FkZHNoaXBzJyk7XHJcbiAgICAgICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgdHVybi5hcHBlbmRDaGlsZChhZGRTaGlwc0Rpdik7XHJcbiAgICBhZGRTaGlwc0Rpdi5hcHBlbmRDaGlsZChhZGRTaGlwc0J1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGJvYXJkIGNvbXB1dGVyIGZvciBIdW1hbiBhdHRhY2tzXHJcbiAgICAgICAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyQm9hcmQoZSkge1xyXG4gICAgICAgIHN3aXRjaChnYW1lLmdldEFjdGl2ZVBsYXllcigpLnR5cGU9PT0nSFVNQU4gUGxheWVyJyl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBJJ3ZlIGNsaWNrZWQgYSBjb2x1bW4gYW5kIG5vdCB0aGUgZ2FwcyBpbiBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkUm93KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXlSb3VuZChOdW1iZXIoc2VsZWN0ZWRSb3cpLE51bWJlcihzZWxlY3RlZENvbHVtbikpO1xyXG4gICAgICAgICAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3Iod2FpdFR1cm4sJ3dhaXQgeW91ciB0dXJuJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcyw4MDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGEgbWVzc2FnZSB0byBhdm9pZCBjbGljayBpbiBodW1hbiBib2FyZFxyXG4gICAgICAgIGZ1bmN0aW9uIG5vRmlyZVRvRnJpZW5kKCl7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcih3YWl0VHVybiwnQkUgQ0FSRUZVTC4gZG9uXFwndCBzaG9vdCB5b3VyIGFsbGllcycudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcywxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbm9GaXJlVG9GcmllbmQpO1xyXG5cclxuICAgICAgIC8vIHRoaXMgYXR0YWNrJ3MgZnVuY3Rpb24gY29uc2lkZXIgYWRqYWNlbnRzIHdoZW4gZ290IGEgaGl0XHJcbiAgICAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjaygpe1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgbGV0IGFkaiA9IDA7XHJcbiAgICAgICAgbGV0IGNvb3JkID0gW107XHJcbiAgICAgICAgbGV0IGFycmF5QWxsQXR0YWNrID0gZ2FtZS5nZXRIdW1hblBsYXllcigpLmdhbWVib2FyZFsnYXJyYXlBbGxBdHRhY2snXTtcclxuICAgICAgICB3aGlsZSAoIGNoZWNrID09PSB0cnVlKXtcclxuICAgICAgICAgICAgaWYoIGFycmF5QWRqYWNlbnQubGVuZ3RoIT09MCApe1xyXG4gICAgICAgICAgICAgICAgYWRqID0gYXJyYXlBZGphY2VudC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSB0b3RhbENlbGxzLmF0KGFkaikuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGFkaiA9IHRvdGFsQ2VsbHMuaW5kZXhPZihjb29yZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGVjayA9IGFycmF5QWxsQXR0YWNrLmhhcyhjb29yZC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNlbGwgPSBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpO1xyXG4gICAgICAgIGdhbWUucGxheVJvdW5kQ29tcHV0ZXIoY2VsbFswXSxjZWxsWzFdKTtcclxuICAgICAgICAvLyBpZiBnb3QgYSBoaXQgbG9vayBmb3IgYWRqYWNlbnRzXHJcbiAgICAgICAgbGV0IGJvYXJkUmVhbCA9IGdhbWUuYm9hcmRSZWFsKCk7XHJcbiAgICAgICAgaWYoYm9hcmRSZWFsW2NlbGxbMF1dW2NlbGxbMV1dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgIGxldCBhcnJheVRlbXAgPSBhZGphY2VudC5nZXQoYWRqKTtcclxuICAgICAgICAgICAgYXJyYXlUZW1wLm1hcCgoeCkgPT4gYXJyYXlBZGphY2VudC5wdXNoKHgpKTtcclxuICAgICAgICAgICAgaWYoYXJyYXlBZGphY2VudD09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBhcnJheUFkamFjZW50PVtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE1lc3NhZ2UoYWN0aXZlTWVzc2FnZSk7XHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBhZGQgYSByZXN1bHQgZ2FtZVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdEdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJlc3VsdEdhbWVEaXYuY2xhc3NMaXN0LmFkZCgncmVzdWx0TWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZU1lc3NhZ2UgPSBnYW1lLmdldEdhbWVNZXNzYWdlKCk7XHJcbiAgICAgICAgIGNvbnN0IGdldE1lc3NhZ2UgPSAoYWN0aXZlTWVzc2FnZSkgPT4geyBcclxuICAgICAgICAgICAgYWN0aXZlTWVzc2FnZSA9IGdhbWUuZ2V0R2FtZU1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgcmVzdWx0R2FtZURpdi50ZXh0Q29udGVudCA9IGFjdGl2ZU1lc3NhZ2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHQuYXBwZW5kQ2hpbGQocmVzdWx0R2FtZURpdik7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhIGRpdiB3aXRoIGNvdW50IGRvd24gZm9yIGNvbXB1dGVyIGF0dGFjayBhbmQgcmVtb3ZlIGl0IFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZERpdihhcmcpe1xyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsJ2F0dGFja01lc3NhZ2UnKTtcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tNZXNzYWdlJyk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCd0ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmxpZ2h0eWVsbG93OycpO1xyXG4gICAgICAgICAgICB0ZXh0LmlubmVyVGV4dCA9ICdUaGUgY29tcHV0ZXIgd2lsbCBhdHRhY2sgb24gJy50b1VwcGVyQ2FzZSgpOyBcclxuICAgICAgICAgICAgbGV0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoJ2lkJywnY291bnQnKTtcclxuICAgICAgICAgICAgdGV4dDEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2ZvbnQtc2l6ZToxLjFyZW07IGNvbG9yOnJlZDsnKTtcclxuICAgICAgICAgICAgbGV0IG51bWJlciA9IDQ7IFxyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLmFwcGVuZENoaWxkKHRleHQxKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwoY291bnQsIDEwMDApO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudCgpe1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyLTE7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKS5pbm5lclRleHQgPSBgID0+ICR7bnVtYmVyfWA7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpLmlubmVyVGV4dCA9IFwiRE9ORVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlRGl2LDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGFyZy5hcHBlbmRDaGlsZChhdHRhY2tNZXNzYWdlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgY291bnQgZG93biBtZXNzYWdlIGRpdlxyXG4gICAgICAgICBmdW5jdGlvbiByZW1vdmVEaXYoKXtcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja01lc3NhZ2UnKTtcclxuICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciByZXNldFxyXG4gICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbmV3RG9jKTtcclxuXHJcbiAgICAgICAgIGZ1bmN0aW9uIG5ld0RvYygpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodHVybik7XHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkRGl2KTsgXHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQodHVybkRpdik7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHdhaXRUdXJuKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGh1bWFuQm9hcmQpO1xyXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZCk7XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQge3NjcmVlbkNvbnRyb2xsZXJ9IiwiLy8gYSBjbGFzcyBTaGlwIFxyXG5jbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgICBcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbHVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gMDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gZmFsc2U7IFxyXG4gICAgICB9XHJcblxyXG4gICAgICBoaXQoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSBoaXRzICsgMSA7XHJcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRoaXMuaXNTdW5rKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZIaXRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpc1N1bmsoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgc3dpdGNoKGhpdHM9PT10aGlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVlblN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7U2hpcH07XHJcbiIsImZ1bmN0aW9uIHNob3dFcnJvcihhcmcxLGFyZzIpe1xyXG4vLyBhcmcxIGlzIHRoZSBkaXYgLSBhcmcyIGlzIHRoZSBtZXNzYWdlIGZvciB0aGUgdHlwZSBvZiBlcnJvclxyXG4gICAgICBsZXQgaWQgPSBhcmcxLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgaW5wdXRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLGAke2lkfWVycm9yYCk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGl2ZScsJ3BvbGl0ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci50ZXh0Q29udGVudCA9IGFyZzI7XHJcbiAgICBcclxuICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBhcmcxLnBhcmVudE5vZGU7XHJcbiAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RXJyb3IpOyAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBzaG93RXJyb3IgfTsiLCJpbXBvcnQgeyByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChhcmcxLGFyZzIsYXJnMyl7XHJcbiAgIFxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICBcclxuICAgICAvKiAgICB4LnRleHRDb250ZW50ID0gYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlOyAqL1xyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbmxldCBhcnJheVNoaXBzID0gW107XHJcbiAgICBpZihhcmczICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFycmF5U2hpcHMgPSBhcmczWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXTtcclxuICAgIH1cclxuXHJcbmxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xyXG5cclxuYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZWxlbWVudFsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBlbGVtZW50Wydjb29yZGluYXRlcyddLmZvckVhY2goICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgYXJyYXlJbmRleE5vZGVBbmRDb29yZCA9IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCk7XHJcbmxldCBpbmRleGVzU3Vua3MgPSBbXTtcclxuY29vcmRTaGlwc1N1bmsuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgIGFycmF5SW5kZXhOb2RlQW5kQ29vcmQuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICBpZih4WzFdWzBdPT09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5pbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgbGV0IGNlbGwgPSBjZWxsc2luQm9hcmRbZWxlbWVudF07XHJcbiAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFN1bmsnKTtcclxuICAgY2VsbC50ZXh0Q29udGVudCA9ICdTVU5LJztcclxufSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkKGFyZyl7XHJcbi8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG5sZXQgYm9hcmREaXYgPSBhcmc7XHJcbmxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG5jb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcblxyXG5jZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gIHguY2xhc3NOYW1lID0gJyc7ICAgICAgIC8vIHRvIGNsZWFyIHByZXZpb3VzIGNsYXNzXHJcbiAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG59KVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7dXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZH07IiwiZnVuY3Rpb24gdXBkYXRlU2NvcmUoYXJnMSxhcmcyKXtcclxuIC8qIGFyZzEgaXMgdGhlIHBsYXllckh1bWFuICBhcmcyIGlzIHRoZSBwbGF5ZXJDb21wdXRlciAqL1xyXG5jb25zdCBwbGF5ZXJIdW1hbj0gYXJnMTtcclxuY29uc3QgcGxheWVyQ29tcHV0ZXI9IGFyZzI7XHJcblxyXG4vLyB1cGRhdGUgdGhlIGh1bWFuIHNjb3JlXHJcbmNvbnN0IGh1bWFuU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tc2NvcmUnKTtcclxuY29uc3QgcEh1bWFuU2NvcmUgPSBodW1hblNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BpY3R1cmUnKTtcclxuY29uc3QgdEh1bWFuU2NvcmUgPSBodW1hblNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcclxuXHJcbmNvbnN0IHBpY3R1cmVzSW5IdW1hblNjb3JlID0gWy4uLnBIdW1hblNjb3JlXTtcclxuY29uc3QgaXRlcmF0b3JQID0gcGljdHVyZXNJbkh1bWFuU2NvcmUuZW50cmllcygpO1xyXG5cclxuY29uc3QgdGV4dEluSHVtYW5TY29yZSA9IFsuLi50SHVtYW5TY29yZV07XHJcbmNvbnN0IGl0ZXJhdG9yVCA9IHRleHRJbkh1bWFuU2NvcmUuZW50cmllcygpO1xyXG5cclxucGljdHVyZXNJbkh1bWFuU2NvcmUuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvclAubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTsgXHJcbiAgICBsZXQgc3VuayA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXV1bJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ107XHJcbiAgICBzd2l0Y2goc3Vuaz09PXRydWUpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnc2hpcFN1bmsnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pXHJcblxyXG50ZXh0SW5IdW1hblNjb3JlLmZvckVhY2goKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gaXRlcmF0b3JULm5leHQoKS52YWx1ZTtcclxuICAgIGxldCB4ID0gaW5kZXhbMV07XHJcbiAgICBzd2l0Y2ggKGluZGV4WzBdPT09MSkge1xyXG4gICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhdGUgPSBNYXRoLnRydW5jKChwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAtIHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYXJyYXlNaXNzZWQnXS5zaXplKVxyXG4gICAgICAgICAgICAgICAgICAgICAvcGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhcnJheUFsbEF0dGFjayddLnNpemUqMTAwKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgc3VjY2VzcyByYXRlOiAke3JhdGV9JWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChpbmRleFswXSA+IDEpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXS0yXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXS0yXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufSlcclxuXHJcbi8vIHVwZGF0ZSB0aGUgY29tcHV0ZXIgc2NvcmVcclxuXHJcbmNvbnN0IGNvbXB1dGVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItc2NvcmUnKTtcclxuY29uc3QgcENvbXB1dGVyU2NvcmUgPSBjb21wdXRlclNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BpY3R1cmUnKTtcclxuY29uc3QgdENvbXB1dGVyU2NvcmUgPSBjb21wdXRlclNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcclxuXHJcbmNvbnN0IHBpY3R1cmVzSW5Db21wdXRlclNjb3JlID0gWy4uLnBDb21wdXRlclNjb3JlXTtcclxuY29uc3QgaXRlcmF0b3JDUCA9IHBpY3R1cmVzSW5Db21wdXRlclNjb3JlLmVudHJpZXMoKTtcclxuXHJcbmNvbnN0IHRleHRJbkNvbXB1dGVyU2NvcmUgPSBbLi4udENvbXB1dGVyU2NvcmVdO1xyXG5jb25zdCBpdGVyYXRvckNUID0gdGV4dEluQ29tcHV0ZXJTY29yZS5lbnRyaWVzKCk7XHJcblxyXG5waWN0dXJlc0luQ29tcHV0ZXJTY29yZS5mb3JFYWNoKCgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yQ1AubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTsgXHJcbiAgICBsZXQgc3VuayA9IHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXV1bJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ107XHJcbiAgICBzd2l0Y2goc3Vuaz09PXRydWUpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICB4LmNsYXNzTmFtZT0nJztcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ3NoaXBTdW5rJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KVxyXG5cclxudGV4dEluQ29tcHV0ZXJTY29yZS5mb3JFYWNoKCgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yQ1QubmV4dCgpLnZhbHVlO1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTtcclxuICAgIHN3aXRjaCAoaW5kZXhbMF09PT0xKSB7XHJcbiAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgaWYgKHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF0ZSA9IE1hdGgudHJ1bmMoKHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgIC0gcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhcnJheU1pc3NlZCddLnNpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgIC9wbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZSoxMDApO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZX0lYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGluZGV4WzBdID4gMSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdLTJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdLTJdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHt1cGRhdGVTY29yZX07IiwiaW1wb3J0IHsgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfSBmcm9tIFwiLi9hdXhpbGlhcnktZnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDZWxscyhhcmcxLGFyZzIsYXJnMyl7XHJcblxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIFxyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXsgICBcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsU2hpcEFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYFNISVBgO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGFycmF5U2hpcHMgPSBbXTtcclxuICAgIGlmKGFyZzMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYXJyYXlTaGlwcyA9IGFyZzNbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddO1xyXG4gICAgfVxyXG5cclxubGV0IGNvb3JkU2hpcHNTdW5rID0gW107XHJcblxyXG5hcnJheVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHN3aXRjaChlbGVtZW50WydzaGlwRGV0YWlscyddWydiZWVuU3VuayddKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIGVsZW1lbnRbJ2Nvb3JkaW5hdGVzJ10uZm9yRWFjaCggKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBhcnJheUluZGV4Tm9kZUFuZENvb3JkID0gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKTtcclxubGV0IGluZGV4ZXNTdW5rcyA9IFtdO1xyXG5jb29yZFNoaXBzU3Vuay5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgYXJyYXlJbmRleE5vZGVBbmRDb29yZC5mb3JFYWNoKCh4KT0+e1xyXG4gICAgICAgIGlmKHhbMV1bMF09PT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaW5kZXhlc1N1bmtzLnB1c2goeFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmluZGV4ZXNTdW5rcy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICBjb25zb2xlLmxvZyhjZWxsc2luQm9hcmRbZWxlbWVudF0pO1xyXG4gICBsZXQgY2VsbCA9IGNlbGxzaW5Cb2FyZFtlbGVtZW50XTtcclxuICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsU3VuaycpO1xyXG4gICBjZWxsLnRleHRDb250ZW50ID0gJ1NVTksnO1xyXG59KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVpbml0aWFsaXplRm9ybWF0Q2VsbHMoYXJnKXtcclxuIC8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG4gbGV0IGJvYXJkRGl2ID0gYXJnO1xyXG4gbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG4gY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gXHJcbiBjZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gICB4LmNsYXNzTmFtZSA9ICcnOyAgICAgICAvLyB0byBjbGVhciBwcmV2aW91cyBjbGFzc1xyXG4gICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gfSlcclxufSBcclxuXHJcblxyXG5leHBvcnQge3VwZGF0ZUNlbGxzLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc307IiwiaW1wb3J0ICcuL3N0eWxlLXJlc2V0LmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS1iYXNlLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUtdGFibGV0LmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS1tb2JpbGUuY3NzJztcclxuXHJcbmltcG9ydCB7IHNjcmVlbkNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvc2NyZWVuLWNvbnRyb2xsZXIuanMnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCkgeyBcclxuICAgIFxyXG4gICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIGdhbWVDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhaW5lcicpO1xyXG4gICAgc2NyZWVuQ29udHJvbGxlcihnYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgIFxyXG4gICAgcmV0dXJuIGdhbWVDb250YWluZXI7XHJcbiAgfVxyXG4gIFxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
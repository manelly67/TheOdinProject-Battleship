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

/* end of reset of style browser */

/* cells  */
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
	  font-size: 8px
  }

  .cellMissed {
	  background-color: #effefb; 
	  color: #087b7d;
	  font-size: 8px
  }

  .cellHit {
	  background-color: #fea173; 
	  color: #9b1b11;
	  font-size: 9px
  }

  .cellSunk {
	  background-color: black; 
	  color: white;
	  font-size: 9px
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
    color: black; line-height: 2rem; padding: 15px; 
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
	transform: translateY(-10%);
	transition: transform 250ms ease-in-out;
}
.resetButton:hover {
	background: #545e75; color: white; 
	transform: scale(1.05);
	transform: translateY(-10%);
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
	
`, "",{"version":3,"sources":["webpack://./src/style-base.css"],"names":[],"mappings":";CACC;;;CAGA;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB;;AAEA,kCAAkC;;AAElC,WAAW;AACX;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,iBAAiB;CACjB,sBAAsB;CACtB,uBAAuB;CACvB,eAAe;CACf,eAAe;EACd;;EAEA;GACC,yBAAyB;GACzB,cAAc;GACd;EACD;;EAEA;GACC,yBAAyB;GACzB,cAAc;GACd;EACD;;EAEA;GACC,yBAAyB;GACzB,cAAc;GACd;EACD;;EAEA;GACC,uBAAuB;GACvB,YAAY;GACZ;EACD;;CAED;EACC,yBAAyB;CAC1B;;CAEA;GACE,yBAAyB;CAC3B;;AAED;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;CAClB,WAAW;CACX,eAAe;CACf,sBAAsB;CACtB,kBAAkB;CAClB,mBAAmB;CACnB,eAAe;EACd;;AAEF,YAAY;AACZ;CACC,aAAa;CACb,WAAW;EACV;;AAEF;IACI,YAAY,EAAE,iBAAiB,EAAE,aAAa;IAC9C,mBAAmB,EAAE,2BAA2B,EAAE,mBAAmB,EAAE,qBAAqB;IAC5F,kBAAkB,EAAE,oBAAoB,EAAE,oBAAoB;IAC9D,wFAAwF;IACxF,mCAAmC,EAAE,yBAAyB,EAAE,qBAAqB;;CAExF,uCAAuC;AACxC;AACA;IACI,mBAAmB,EAAE,YAAY;CACpC,sBAAsB;CACtB;AACD;IACI,mBAAmB,EAAE,YAAY,EAAE;;AAEvC;CACC,cAAc,EAAE,iBAAiB,EAAE,aAAa;CAChD,mBAAmB,EAAE,2BAA2B,EAAE,mBAAmB,EAAE,qBAAqB;CAC5F,kBAAkB,EAAE,oBAAoB,EAAE,oBAAoB;CAC9D,sEAAsE;CACtE,mCAAmC,EAAE,yBAAyB,EAAE,qBAAqB;CACrF,2BAA2B;CAC3B,uCAAuC;AACxC;AACA;CACC,mBAAmB,EAAE,YAAY;CACjC,sBAAsB;CACtB,2BAA2B;AAC5B;AACA;CACC,mBAAmB,EAAE,YAAY,EAAE;;AAEpC,mBAAmB;;AAEnB;CACC,aAAa;CACb,uBAAuB;CACvB,kBAAkB;CAClB,cAAc;CACd,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,yDAAuC;CACvC,sBAAsB;GACpB,2BAA2B;AAC9B;;AAEA;CACC,yDAA4C;CAC5C,sBAAsB;GACpB,2BAA2B;CAC7B,gCAAgC;AACjC;;AAEA,4CAA4C;GACzC;EACD,WAAW;EACX,UAAU;EACV,eAAe;EACf,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,sBAAsB;GACrB;;GAEA;EACD,cAAc;GACb","sourcesContent":["\r\n /* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video, input {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\n/* end of reset of style browser */\r\n\r\n/* cells  */\r\n.cell {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tfont-size: 0.7rem;\r\n\tborder: 1px solid grey;\r\n\tbackground: lightyellow;\r\n\tcursor: pointer;\r\n\tmax-width: 100%;\r\n  }\r\n\r\n  .cellShipAdded {\r\n\t  background-color: #5be734; \r\n\t  color: #207d0e;\r\n\t  font-size: 8px\r\n  }\r\n\r\n  .cellMissed {\r\n\t  background-color: #effefb; \r\n\t  color: #087b7d;\r\n\t  font-size: 8px\r\n  }\r\n\r\n  .cellHit {\r\n\t  background-color: #fea173; \r\n\t  color: #9b1b11;\r\n\t  font-size: 9px\r\n  }\r\n\r\n  .cellSunk {\r\n\t  background-color: black; \r\n\t  color: white;\r\n\t  font-size: 9px\r\n  }\r\n\r\n [class^='cell']:hover{\r\n  background-color: #545e75;\r\n\t}\r\n\r\n [class^='cell']:active{\r\n\t  background-color: #b2b9c7;\r\n\t}\r\n\r\n.headCell {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tfont-size: 1rem;\r\n\tborder: 1px solid grey;\r\n\tcolor: lightyellow;\r\n\tbackground: #353a45;\r\n\tcursor: pointer;\r\n  }\r\n\r\n/* buttons */\r\n.hide {\r\n\tdisplay: none;\r\n\topacity: 0%;\r\n  }\r\n\r\n.addShipButton {       \r\n    color: black; line-height: 2rem; padding: 15px; \r\n    border-radius: 10px; font-family: Georgia, serif; font-weight: normal; text-decoration: none;\r\n    font-style: normal; font-variant: normal; text-transform: none; \r\n    background-image: linear-gradient(to right, rgb(105,117,142) 0%, rgb(214,217,225) 100%) ; \r\n    box-shadow: #edeef1 2px 2px 4px 2px; border: 2px solid #353945; display: inline-block;\r\n\r\n\ttransition: transform 250ms ease-in-out;\r\n}\r\n.addShipButton:hover {\r\n    background: #545e75; color: white;\r\n\ttransform: scale(1.05);\r\n }\r\n.addShipButton:active {\r\n    background: #454d5f; color: white; }\r\n\r\n.resetButton {    \r\n\tcolor: #012e32; line-height: 13px; padding: 15px;\r\n\tborder-radius: 10px; font-family: Georgia, serif; font-weight: normal; text-decoration: none;\r\n\tfont-style: normal; font-variant: normal; text-transform: none; \r\n\tbackground-image: linear-gradient(to right, #b9fef6 0%, #09c3c1 100%) ; \r\n\tbox-shadow: #edeef1 2px 2px 4px 2px; border: 2px solid #353945; display: inline-block;\r\n\ttransform: translateY(-10%);\r\n\ttransition: transform 250ms ease-in-out;\r\n}\r\n.resetButton:hover {\r\n\tbackground: #545e75; color: white; \r\n\ttransform: scale(1.05);\r\n\ttransform: translateY(-10%);\r\n}\r\n.resetButton:active {\r\n\tbackground: #454d5f; color: white; }\r\n\r\n/* score elements */\r\n\r\n.scoreTitle{\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\ttext-align: center;\r\n\tcolor: #3c4350;\r\n\tfont-weight: bold;\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.shipFloat{\r\n\tbackground-image: url('./img/ship.jpg');\r\n\tbackground-size: cover;\r\n  \tbackground-position: center;\r\n}\r\n\r\n.shipSunk{\r\n\tbackground-image: url('./img/ship-sunk.jpg');\r\n\tbackground-size: cover;\r\n  \tbackground-position: center;\r\n\tborder-bottom: 2px solid #09c3c1;\r\n}\r\n\t \r\n/* This is the style of our error messages */\r\n\t  .error {\r\n\t\twidth: 100%;\r\n\t\tpadding: 0;\r\n\t\tfont-size: 1rem;\r\n\t\tcolor: white;\r\n\t\tbackground-color: #900;\r\n\t\tborder-radius: 0 0 5px 5px;\r\n\t\tbox-sizing: border-box;\r\n\t  }\r\n\t  \r\n\t  .error.active {\r\n\t\tpadding: 0.3em;\r\n\t  }\r\n\t\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `
@media screen and (max-width: 480px){
 
 .container{
  display: flex;
  flex: 1;
  flex-direction:row;
  flex-wrap: wrap;
  height: 100vh;
} 

.turn {
  width: 100%;
}

  .board-human{
  width: 50%;
  height: 50%;
}

.board-computer{
  width: 50%;
  height: 50%;
}

.scoreBoard{
  width: 90%;
  position: relative;
}
.resetButton {
  transform: translateY(+10%);
}

}




.container {
    display: grid;
    grid-template-columns: 0.5fr 6fr 1.5fr;
    grid-template-rows: 1fr 6fr 1fr;
    background-color: #353a45;
    height: 100vh;
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
    font-size: 2rem;
    color: lightyellow;
  }

  .addships {
      grid-column: 2 / 3;      /* grid turn*/
      grid-row: 1 / 2;       
      padding-top: 2%;
    
  }

  .randomships {              /* grid turn*/
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    padding-top: 2%;
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

  @media screen and (min-width: 481px) {  
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

  @media screen and (max-width: 480px) {  
    .board{
   /*  grid-column: 2/3;  */  /* esta linea se asocia al grid del container */
   /*  grid-row: 2/3; */      /* esta linea se asocia al grid del container */
    background-color: #454d5f;
    height:100%;
    width: 100%;
    display: flex;
  flex-direction:row;
  
  flex-wrap: wrap;
  justify-content: flex-start;

   /*  display: grid;
    grid-template-columns: 0.5fr minmax(150px, 200px) 0.1fr minmax(150px, 200px);
    grid-template-rows: 1fr 14fr;
    column-gap: 5%; */
   /*  padding-bottom: 5%;
    padding-right: 10%; */
    }
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

    .scoreBoard{
      position: fixed;
      inset: 0px;
      max-width: 9.5%;
      max-height: 80%;
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


  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;;CAEC;EACC,aAAa;EACb,OAAO;EACP,kBAAkB;EAClB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;EAEE;EACA,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;AACA;EACE,2BAA2B;AAC7B;;AAEA;;;;;AAKA;IACI,aAAa;IACb,sCAAsC;IACtC,+BAA+B;IAC/B,yBAAyB;IACzB,aAAa;EACf;;EAEA;MACI,eAAe,OAAO,+CAA+C;MACrE,kBAAkB,IAAI,+CAA+C;MACrE,aAAa;MACb,0CAA0C;MAC1C,uBAAuB;EAC3B;;EAEA;IACE,kBAAkB,OAAO,aAAa;IACtC,eAAe;IACf,eAAe;IACf,kBAAkB;EACpB;;EAEA;MACI,kBAAkB,OAAO,aAAa;MACtC,eAAe;MACf,eAAe;;EAEnB;;EAEA,4BAA4B,aAAa;IACvC,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,0BAA0B;;AAE9B;;EAEE,8BAA8B,aAAa;EAC3C,eAAe;EACf,iBAAiB;EACjB,aAAa;EACb,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;EAEE;QACM,oBAAoB,IAAI,2CAA2C;QACnE,iBAAiB,OAAO,2CAA2C;QACnE,gBAAgB;QAChB,uBAAuB;QACvB,aAAa;QACb,WAAW;QACX,eAAe;QACf,kBAAkB;;EAExB;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,kCAAkC;;EAEpC;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,cAAc;EAChB;;EAEA;IACE,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE;IACA,gBAAgB,IAAI,+CAA+C;IACnE,aAAa,OAAO,+CAA+C;IACnE,yBAAyB;IACzB,UAAU;IACV,WAAW;IACX,aAAa;IACb,4CAA4C;IAC5C,4BAA4B;IAC5B,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB;EACF;;EAEA;IACE;GACD,wBAAwB,GAAG,+CAA+C;GAC1E,oBAAoB,OAAO,+CAA+C;IACzE,yBAAyB;IACzB,WAAW;IACX,WAAW;IACX,aAAa;EACf,kBAAkB;;EAElB,eAAe;EACf,2BAA2B;;GAE1B;;;qBAGkB;GAClB;yBACsB;IACrB;EACF;;;EAGA;MACI,kBAAkB,IAAI,wBAAwB;;MAE9C,gBAAgB,IAAI,2CAA2C;MAC/D,aAAa,OAAO,2CAA2C;MAC/D,aAAa;MACb,YAAY;MACZ,WAAW;MACX,sCAAsC;MACtC,mCAAmC;MACnC,uBAAuB;MACvB,QAAQ;MACR,YAAY;MACZ,yBAAyB;IAC3B;;IAEA;;QAEI,gBAAgB,IAAI,2CAA2C;QAC/D,aAAa,OAAO,2CAA2C;QAC/D,aAAa;QACb,YAAY;QACZ,WAAW;QACX,sCAAsC;QACtC,mCAAmC;QACnC,uBAAuB;QACvB,QAAQ;QACR,YAAY;QACZ,yBAAyB;;MAE3B;;IAEF;MACE,kBAAkB,KAAK,kCAAkC;MACzD,4BAA4B;MAC5B,YAAY;MACZ,YAAY;MACZ,6BAA6B;IAC/B;;IAEA;MACE,kBAAkB,KAAK,kCAAkC;MACzD,4BAA4B;MAC5B,YAAY;IACd;;IAEA;MACE,eAAe;MACf,UAAU;MACV,eAAe;MACf,eAAe;MACf,kBAAkB;MAClB,iBAAiB;MACjB,gBAAgB;MAChB,yBAAyB;MACzB,8BAA8B;MAC9B,+BAA+B;MAC/B,kBAAkB;;MAElB,aAAa;MACb,2BAA2B;MAC3B,QAAQ;IACV;;IAEA;MACE,aAAa;MACb,8BAA8B;MAC9B,iCAAiC;IACnC","sourcesContent":["\r\n@media screen and (max-width: 480px){\r\n \r\n .container{\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction:row;\r\n  flex-wrap: wrap;\r\n  height: 100vh;\r\n} \r\n\r\n.turn {\r\n  width: 100%;\r\n}\r\n\r\n  .board-human{\r\n  width: 50%;\r\n  height: 50%;\r\n}\r\n\r\n.board-computer{\r\n  width: 50%;\r\n  height: 50%;\r\n}\r\n\r\n.scoreBoard{\r\n  width: 90%;\r\n  position: relative;\r\n}\r\n.resetButton {\r\n  transform: translateY(+10%);\r\n}\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.container {\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 6fr 1.5fr;\r\n    grid-template-rows: 1fr 6fr 1fr;\r\n    background-color: #353a45;\r\n    height: 100vh;\r\n  }\r\n\r\n  .turn {\r\n      grid-row: 1 / 2;      /* esta linea se asocia al grid del container */\r\n      grid-column: 2 / 4;   /* esta linea se asocia al grid del container */\r\n      display: grid;\r\n      grid-template-columns: 2fr 1fr 4fr 1fr 1fr;\r\n      grid-template-rows: 1fr;\r\n  }\r\n\r\n  .turnDiv {\r\n    grid-column: 1 / 2;      /* grid turn*/\r\n    grid-row: 1 / 2;\r\n    font-size: 2rem;\r\n    color: lightyellow;\r\n  }\r\n\r\n  .addships {\r\n      grid-column: 2 / 3;      /* grid turn*/\r\n      grid-row: 1 / 2;       \r\n      padding-top: 2%;\r\n    \r\n  }\r\n\r\n  .randomships {              /* grid turn*/\r\n    grid-column: 3 / 4;\r\n    grid-row: 1 / 2;\r\n    padding-top: 2%;\r\n    color: lightyellow;\r\n    display: flex;\r\n    justify-content:flex-start;\r\n\r\n}\r\n\r\n  .result {                     /* grid turn*/\r\n  grid-row: 1 / 2;      \r\n  grid-column: 4/ 6; \r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n}\r\n\r\n.resultMessage {  \r\n  font-size: 2rem ;\r\n  font-weight: 600;\r\n  color: lightyellow;\r\n}\r\n\r\n  .gridForAdd {\r\n        grid-column-start: 4;   /* esta linea se asocia al grid del board */\r\n        grid-row-start: 2;      /* esta linea se asocia al grid del board */\r\n        padding-left: 2%;\r\n        box-sizing: content-box;\r\n        height: 400px;\r\n        width: 120%;\r\n        font-size: 10px;\r\n        overflow-y: scroll;\r\n      \r\n  }\r\n\r\n  .formInput {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    \r\n  }\r\n\r\n  .formRadio{\r\n    grid-column: 1/2;\r\n    grid-row: 1/2;\r\n    background-color: #b2b9c7;\r\n    line-height: 2;\r\n  }\r\n  \r\n  .submitButton{\r\n    grid-column: 2/3;\r\n    grid-row: 1/2;\r\n  }\r\n\r\n  @media screen and (min-width: 481px) {  \r\n    .board{\r\n    grid-column: 2/3;   /* esta linea se asocia al grid del container */\r\n    grid-row: 2/3;      /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height:90%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 14fr 0.1fr 14fr;\r\n    grid-template-rows: 1fr 14fr;\r\n    column-gap: 5%;\r\n    padding-bottom: 5%;\r\n    padding-right: 10%;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 480px) {  \r\n    .board{\r\n   /*  grid-column: 2/3;  */  /* esta linea se asocia al grid del container */\r\n   /*  grid-row: 2/3; */      /* esta linea se asocia al grid del container */\r\n    background-color: #454d5f;\r\n    height:100%;\r\n    width: 100%;\r\n    display: flex;\r\n  flex-direction:row;\r\n  \r\n  flex-wrap: wrap;\r\n  justify-content: flex-start;\r\n\r\n   /*  display: grid;\r\n    grid-template-columns: 0.5fr minmax(150px, 200px) 0.1fr minmax(150px, 200px);\r\n    grid-template-rows: 1fr 14fr;\r\n    column-gap: 5%; */\r\n   /*  padding-bottom: 5%;\r\n    padding-right: 10%; */\r\n    }\r\n  }\r\n\r\n\r\n  .board-human {\r\n      position: relative;   /* for headers purpose */\r\n\r\n      grid-column: 2/3;   /* esta linea se asocia al grid del board */\r\n      grid-row: 2/3;      /* esta linea se asocia al grid del board */\r\n      display: grid;\r\n      height: 100%;\r\n      width: 100%;\r\n      grid-template-columns: repeat(12, 1fr);\r\n      grid-template-rows: repeat(13, 1fr);\r\n      border: 5px solid black;\r\n      gap: 2px;\r\n      padding: 2px;\r\n      background-color: #b2b9c7;\r\n    }\r\n    \r\n    .board-computer {\r\n        \r\n        grid-column: 4/5;   /* esta linea se asocia al grid del board */\r\n        grid-row: 2/3;      /* esta linea se asocia al grid del board */\r\n        display: grid;\r\n        height: 100%;\r\n        width: 100%;\r\n        grid-template-columns: repeat(12, 1fr);\r\n        grid-template-rows: repeat(13, 1fr);\r\n        border: 5px solid black;\r\n        gap: 2px;\r\n        padding: 2px;\r\n        background-color: #edeef1; \r\n        \r\n      }\r\n\r\n    .columnsHead {\r\n      position: absolute;    /* in relation parent board-human*/\r\n      transform: translateY(-100%); \r\n      width: 100% ;\r\n      display:flex; \r\n      justify-content: space-around;\r\n    }\r\n\r\n    .rowsHead{\r\n      position: absolute;    /* in relation parent board-human*/\r\n      transform: translateX(-100%); \r\n      height: 100%;\r\n    }\r\n\r\n    .scoreBoard{\r\n      position: fixed;\r\n      inset: 0px;\r\n      max-width: 9.5%;\r\n      max-height: 80%;\r\n      margin-top: 6.4rem;\r\n      margin-left: auto;\r\n      margin-right: 1%;\r\n      background-color: #edeef1;\r\n      border-left: 3px solid #f6f7f9;\r\n      border-right: 3px solid #f6f7f9;\r\n      border-radius: 4px;\r\n\r\n      display: grid;\r\n      grid-template-rows: 1fr 1fr;\r\n      gap: 5px;\r\n    }\r\n\r\n    .score {\r\n      display: grid;\r\n      grid-template-columns: 3fr 2fr;\r\n      grid-template-rows: repeat(8,1fr);\r\n    }\r\n\r\n\r\n  "],"sourceRoot":""}]);
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
                randomShipsForComputerPlayer(arg3,computerBoard,shipLength,playerComputer);
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
        randomShipsForComputerPlayer(arg3,computerBoard,shipLength,playerComputer);
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

function randomShipsForComputerPlayer(arg1,arg2,arg3,arg4){
      /*  arg1 is the div to write the head */
        const computerBoard = arg2;
        const shipLength = arg3;
        const playerComputer = arg4;

        computerBoard.classList.remove('hide');
        computerBoard.classList.add('board-computer');

        const headComputer = document.createElement('div');
        headComputer.innerText = 'this is your enemy '.toUpperCase()+' Click To Attack';
        headComputer.setAttribute('style','grid-row: 1/2; grid-column: 4/5; padding-left:25%; color:lightyellow;');
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
humanTitle.setAttribute('style','grid-row:1/2;grid-column:1/3;');
humanTitle.classList.add('scoreTitle');

const success = document.createElement('p');
success.setAttribute('style','grid-row:2/3;grid-column:1/3;');
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
computerTitle.setAttribute('style','grid-row:1/2;grid-column:1/3;');
computerTitle.classList.add('scoreTitle');

const successComp = document.createElement('p');
successComp.setAttribute('style','grid-row:2/3;grid-column:1/3;');
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
        waitTurn.setAttribute('style','grid-column:4/5;');
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
    
        // Esta es la funcion de ataque de computadora unicamente aleatorio
        /*
         function computerAttack(){
            let check = true;
            let coord = [];
            let arrayAllAttack = game.getHumanPlayer().gameboard['arrayAllAttack'];
            while ( check === true){
                coord = randomCoordinates();
                check = arrayAllAttack.has(coord.toString());
            }
            let cell = fromCoordinatestoCell(coord);
            game.playRoundComputer(cell[0],cell[1]);
            getMessage(activeMessage);
            updateScreen();  
        }

         */


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
            attackMessage.setAttribute('style','grid-row: 1/2; grid-column: 2/3; display:flex; flex-wrap:nowrap;');
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
/* harmony import */ var _style_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-base.css */ "./src/style-base.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_screen_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/screen-controller.js */ "./src/components/screen-controller.js");




function component() { 
    
    const gameContainer = document.createElement('main');
    gameContainer.setAttribute('id','container');
    (0,_components_screen_controller_js__WEBPACK_IMPORTED_MODULE_2__.screenController)(gameContainer);

   
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2QkFBNkIsNkVBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEcwQjtBQUNMO0FBQ2dEO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtGQUFnQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvc3R5bGUtYmFzZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLWJhc2UuY3NzPzY2MWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYWRkLXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2FkamFjZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2F1eGlsaWFyeS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGUtZGl2LWVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3JhbmRvbS1zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zY29yZS1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zY3JlZW4tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3Nob3ctZXJyb3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLWNvbXB1dGVyLWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS1zY29yZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9zaGlwLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3NoaXAtc3Vuay5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcclxuIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxyXG4gICB2Mi4wIHwgMjAxMTAxMjZcclxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcclxuKi9cclxuXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcclxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbywgaW5wdXQge1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogMDtcclxuXHRmb250LXNpemU6IDEwMCU7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbn1cclxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xyXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcclxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5ib2R5IHtcclxuXHRsaW5lLWhlaWdodDogMTtcclxufVxyXG5vbCwgdWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuYmxvY2txdW90ZSwgcSB7XHJcblx0cXVvdGVzOiBub25lO1xyXG59XHJcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG5xOmJlZm9yZSwgcTphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0Y29udGVudDogbm9uZTtcclxufVxyXG50YWJsZSB7XHJcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHRib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxuLyogZW5kIG9mIHJlc2V0IG9mIHN0eWxlIGJyb3dzZXIgKi9cclxuXHJcbi8qIGNlbGxzICAqL1xyXG4uY2VsbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRmb250LXNpemU6IDAuN3JlbTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG5cdGJhY2tncm91bmQ6IGxpZ2h0eWVsbG93O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuY2VsbFNoaXBBZGRlZCB7XHJcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJlNzM0OyBcclxuXHQgIGNvbG9yOiAjMjA3ZDBlO1xyXG5cdCAgZm9udC1zaXplOiA4cHhcclxuICB9XHJcblxyXG4gIC5jZWxsTWlzc2VkIHtcclxuXHQgIGJhY2tncm91bmQtY29sb3I6ICNlZmZlZmI7IFxyXG5cdCAgY29sb3I6ICMwODdiN2Q7XHJcblx0ICBmb250LXNpemU6IDhweFxyXG4gIH1cclxuXHJcbiAgLmNlbGxIaXQge1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYTE3MzsgXHJcblx0ICBjb2xvcjogIzliMWIxMTtcclxuXHQgIGZvbnQtc2l6ZTogOXB4XHJcbiAgfVxyXG5cclxuICAuY2VsbFN1bmsge1xyXG5cdCAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG5cdCAgY29sb3I6IHdoaXRlO1xyXG5cdCAgZm9udC1zaXplOiA5cHhcclxuICB9XHJcblxyXG4gW2NsYXNzXj0nY2VsbCddOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVlNzU7XHJcblx0fVxyXG5cclxuIFtjbGFzc149J2NlbGwnXTphY3RpdmV7XHJcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOWM3O1xyXG5cdH1cclxuXHJcbi5oZWFkQ2VsbCB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuXHRjb2xvcjogbGlnaHR5ZWxsb3c7XHJcblx0YmFja2dyb3VuZDogIzM1M2E0NTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuLyogYnV0dG9ucyAqL1xyXG4uaGlkZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRvcGFjaXR5OiAwJTtcclxuICB9XHJcblxyXG4uYWRkU2hpcEJ1dHRvbiB7ICAgICAgIFxyXG4gICAgY29sb3I6IGJsYWNrOyBsaW5lLWhlaWdodDogMnJlbTsgcGFkZGluZzogMTVweDsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7IHRleHQtdHJhbnNmb3JtOiBub25lOyBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDEwNSwxMTcsMTQyKSAwJSwgcmdiKDIxNCwyMTcsMjI1KSAxMDAlKSA7IFxyXG4gICAgYm94LXNoYWRvdzogI2VkZWVmMSAycHggMnB4IDRweCAycHg7IGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5hZGRTaGlwQnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NDVlNzU7IGNvbG9yOiB3aGl0ZTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gfVxyXG4uYWRkU2hpcEJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzQ1NGQ1ZjsgY29sb3I6IHdoaXRlOyB9XHJcblxyXG4ucmVzZXRCdXR0b24geyAgICBcclxuXHRjb2xvcjogIzAxMmUzMjsgbGluZS1oZWlnaHQ6IDEzcHg7IHBhZGRpbmc6IDE1cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDsgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmOyBmb250LXdlaWdodDogbm9ybWFsOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Zm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgdGV4dC10cmFuc2Zvcm06IG5vbmU7IFxyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2I5ZmVmNiAwJSwgIzA5YzNjMSAxMDAlKSA7IFxyXG5cdGJveC1zaGFkb3c6ICNlZGVlZjEgMnB4IDJweCA0cHggMnB4OyBib3JkZXI6IDJweCBzb2xpZCAjMzUzOTQ1OyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcclxufVxyXG4ucmVzZXRCdXR0b246aG92ZXIge1xyXG5cdGJhY2tncm91bmQ6ICM1NDVlNzU7IGNvbG9yOiB3aGl0ZTsgXHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XHJcbn1cclxuLnJlc2V0QnV0dG9uOmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZDogIzQ1NGQ1ZjsgY29sb3I6IHdoaXRlOyB9XHJcblxyXG4vKiBzY29yZSBlbGVtZW50cyAqL1xyXG5cclxuLnNjb3JlVGl0bGV7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y29sb3I6ICMzYzQzNTA7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0Zm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5zaGlwRmxvYXR7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaGlwU3Vua3tcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzA5YzNjMTtcclxufVxyXG5cdCBcclxuLyogVGhpcyBpcyB0aGUgc3R5bGUgb2Ygb3VyIGVycm9yIG1lc3NhZ2VzICovXHJcblx0ICAuZXJyb3Ige1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzkwMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgIH1cclxuXHQgIFxyXG5cdCAgLmVycm9yLmFjdGl2ZSB7XHJcblx0XHRwYWRkaW5nOiAwLjNlbTtcclxuXHQgIH1cclxuXHRcclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUtYmFzZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtDQUNDOzs7Q0FHQTs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUEsa0NBQWtDOztBQUVsQyxXQUFXO0FBQ1g7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGVBQWU7RUFDZDs7RUFFQTtHQUNDLHlCQUF5QjtHQUN6QixjQUFjO0dBQ2Q7RUFDRDs7RUFFQTtHQUNDLHlCQUF5QjtHQUN6QixjQUFjO0dBQ2Q7RUFDRDs7RUFFQTtHQUNDLHlCQUF5QjtHQUN6QixjQUFjO0dBQ2Q7RUFDRDs7RUFFQTtHQUNDLHVCQUF1QjtHQUN2QixZQUFZO0dBQ1o7RUFDRDs7Q0FFRDtFQUNDLHlCQUF5QjtDQUMxQjs7Q0FFQTtHQUNFLHlCQUF5QjtDQUMzQjs7QUFFRDtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZUFBZTtDQUNmLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGVBQWU7RUFDZDs7QUFFRixZQUFZO0FBQ1o7Q0FDQyxhQUFhO0NBQ2IsV0FBVztFQUNWOztBQUVGO0lBQ0ksWUFBWSxFQUFFLGlCQUFpQixFQUFFLGFBQWE7SUFDOUMsbUJBQW1CLEVBQUUsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCO0lBQzVGLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtJQUM5RCx3RkFBd0Y7SUFDeEYsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCOztDQUV4Rix1Q0FBdUM7QUFDeEM7QUFDQTtJQUNJLG1CQUFtQixFQUFFLFlBQVk7Q0FDcEMsc0JBQXNCO0NBQ3RCO0FBQ0Q7SUFDSSxtQkFBbUIsRUFBRSxZQUFZLEVBQUU7O0FBRXZDO0NBQ0MsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGFBQWE7Q0FDaEQsbUJBQW1CLEVBQUUsMkJBQTJCLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCO0NBQzVGLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLG9CQUFvQjtDQUM5RCxzRUFBc0U7Q0FDdEUsbUNBQW1DLEVBQUUseUJBQXlCLEVBQUUscUJBQXFCO0NBQ3JGLDJCQUEyQjtDQUMzQix1Q0FBdUM7QUFDeEM7QUFDQTtDQUNDLG1CQUFtQixFQUFFLFlBQVk7Q0FDakMsc0JBQXNCO0NBQ3RCLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsbUJBQW1CLEVBQUUsWUFBWSxFQUFFOztBQUVwQyxtQkFBbUI7O0FBRW5CO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx5REFBdUM7Q0FDdkMsc0JBQXNCO0dBQ3BCLDJCQUEyQjtBQUM5Qjs7QUFFQTtDQUNDLHlEQUE0QztDQUM1QyxzQkFBc0I7R0FDcEIsMkJBQTJCO0NBQzdCLGdDQUFnQztBQUNqQzs7QUFFQSw0Q0FBNEM7R0FDekM7RUFDRCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixzQkFBc0I7R0FDckI7O0dBRUE7RUFDRCxjQUFjO0dBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuIC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcclxcbiAgIHYyLjAgfCAyMDExMDEyNlxcclxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxyXFxuKi9cXHJcXG5cXHJcXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxyXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcclxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXHJcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxyXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXHJcXG5iLCB1LCBpLCBjZW50ZXIsXFxyXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXHJcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXHJcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXHJcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxyXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXHJcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXHJcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8sIGlucHV0IHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcbm9sLCB1bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuYmxvY2txdW90ZSwgcSB7XFxyXFxuXFx0cXVvdGVzOiBub25lO1xcclxcbn1cXHJcXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXHJcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxyXFxuXFx0Y29udGVudDogJyc7XFxyXFxuXFx0Y29udGVudDogbm9uZTtcXHJcXG59XFxyXFxudGFibGUge1xcclxcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxyXFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBvZiByZXNldCBvZiBzdHlsZSBicm93c2VyICovXFxyXFxuXFxyXFxuLyogY2VsbHMgICovXFxyXFxuLmNlbGwge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjdyZW07XFxyXFxuXFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG5cXHRiYWNrZ3JvdW5kOiBsaWdodHllbGxvdztcXHJcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNlbGxTaGlwQWRkZWQge1xcclxcblxcdCAgYmFja2dyb3VuZC1jb2xvcjogIzViZTczNDsgXFxyXFxuXFx0ICBjb2xvcjogIzIwN2QwZTtcXHJcXG5cXHQgIGZvbnQtc2l6ZTogOHB4XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY2VsbE1pc3NlZCB7XFxyXFxuXFx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZmZWZiOyBcXHJcXG5cXHQgIGNvbG9yOiAjMDg3YjdkO1xcclxcblxcdCAgZm9udC1zaXplOiA4cHhcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jZWxsSGl0IHtcXHJcXG5cXHQgIGJhY2tncm91bmQtY29sb3I6ICNmZWExNzM7IFxcclxcblxcdCAgY29sb3I6ICM5YjFiMTE7XFxyXFxuXFx0ICBmb250LXNpemU6IDlweFxcclxcbiAgfVxcclxcblxcclxcbiAgLmNlbGxTdW5rIHtcXHJcXG5cXHQgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcXHJcXG5cXHQgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHQgIGZvbnQtc2l6ZTogOXB4XFxyXFxuICB9XFxyXFxuXFxyXFxuIFtjbGFzc149J2NlbGwnXTpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDVlNzU7XFxyXFxuXFx0fVxcclxcblxcclxcbiBbY2xhc3NePSdjZWxsJ106YWN0aXZle1xcclxcblxcdCAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcXHJcXG5cXHR9XFxyXFxuXFxyXFxuLmhlYWRDZWxsIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdHdpZHRoOiAxMDAlO1xcclxcblxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcblxcdGNvbG9yOiBsaWdodHllbGxvdztcXHJcXG5cXHRiYWNrZ3JvdW5kOiAjMzUzYTQ1O1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4vKiBidXR0b25zICovXFxyXFxuLmhpZGUge1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0b3BhY2l0eTogMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmFkZFNoaXBCdXR0b24geyAgICAgICBcXHJcXG4gICAgY29sb3I6IGJsYWNrOyBsaW5lLWhlaWdodDogMnJlbTsgcGFkZGluZzogMTVweDsgXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgXFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDEwNSwxMTcsMTQyKSAwJSwgcmdiKDIxNCwyMTcsMjI1KSAxMDAlKSA7IFxcclxcbiAgICBib3gtc2hhZG93OiAjZWRlZWYxIDJweCAycHggNHB4IDJweDsgYm9yZGVyOiAycHggc29saWQgIzM1Mzk0NTsgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcclxcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLmFkZFNoaXBCdXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNTQ1ZTc1OyBjb2xvcjogd2hpdGU7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gfVxcclxcbi5hZGRTaGlwQnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0NTRkNWY7IGNvbG9yOiB3aGl0ZTsgfVxcclxcblxcclxcbi5yZXNldEJ1dHRvbiB7ICAgIFxcclxcblxcdGNvbG9yOiAjMDEyZTMyOyBsaW5lLWhlaWdodDogMTNweDsgcGFkZGluZzogMTVweDtcXHJcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4OyBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IGZvbnQtd2VpZ2h0OiBub3JtYWw7IHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyB0ZXh0LXRyYW5zZm9ybTogbm9uZTsgXFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjYjlmZWY2IDAlLCAjMDljM2MxIDEwMCUpIDsgXFxyXFxuXFx0Ym94LXNoYWRvdzogI2VkZWVmMSAycHggMnB4IDRweCAycHg7IGJvcmRlcjogMnB4IHNvbGlkICMzNTM5NDU7IGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4ucmVzZXRCdXR0b246aG92ZXIge1xcclxcblxcdGJhY2tncm91bmQ6ICM1NDVlNzU7IGNvbG9yOiB3aGl0ZTsgXFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxyXFxufVxcclxcbi5yZXNldEJ1dHRvbjphY3RpdmUge1xcclxcblxcdGJhY2tncm91bmQ6ICM0NTRkNWY7IGNvbG9yOiB3aGl0ZTsgfVxcclxcblxcclxcbi8qIHNjb3JlIGVsZW1lbnRzICovXFxyXFxuXFxyXFxuLnNjb3JlVGl0bGV7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6ICMzYzQzNTA7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxufVxcclxcblxcclxcbi5zaGlwRmxvYXR7XFxyXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltZy9zaGlwLmpwZycpO1xcclxcblxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5zaGlwU3Vua3tcXHJcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL3NoaXAtc3Vuay5qcGcnKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgXFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDljM2MxO1xcclxcbn1cXHJcXG5cXHQgXFxyXFxuLyogVGhpcyBpcyB0aGUgc3R5bGUgb2Ygb3VyIGVycm9yIG1lc3NhZ2VzICovXFxyXFxuXFx0ICAuZXJyb3Ige1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTAwO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcclxcblxcdFxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0ICB9XFxyXFxuXFx0ICBcXHJcXG5cXHQgIC5lcnJvci5hY3RpdmUge1xcclxcblxcdFxcdHBhZGRpbmc6IDAuM2VtO1xcclxcblxcdCAgfVxcclxcblxcdFxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcclxuIFxyXG4gLmNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59IFxyXG5cclxuLnR1cm4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIC5ib2FyZC1odW1hbntcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4uYm9hcmQtY29tcHV0ZXJ7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDUwJTtcclxufVxyXG5cclxuLnNjb3JlQm9hcmR7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJlc2V0QnV0dG9uIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoKzEwJSk7XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgNmZyIDEuNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNhNDU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgLnR1cm4ge1xyXG4gICAgICBncmlkLXJvdzogMSAvIDI7ICAgICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyIDRmciAxZnIgMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICB9XHJcblxyXG4gIC50dXJuRGl2IHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjsgICAgICAvKiBncmlkIHR1cm4qL1xyXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY29sb3I6IGxpZ2h0eWVsbG93O1xyXG4gIH1cclxuXHJcbiAgLmFkZHNoaXBzIHtcclxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyAzOyAgICAgIC8qIGdyaWQgdHVybiovXHJcbiAgICAgIGdyaWQtcm93OiAxIC8gMjsgICAgICAgXHJcbiAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLnJhbmRvbXNoaXBzIHsgICAgICAgICAgICAgIC8qIGdyaWQgdHVybiovXHJcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICBjb2xvcjogbGlnaHR5ZWxsb3c7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcblxyXG59XHJcblxyXG4gIC5yZXN1bHQgeyAgICAgICAgICAgICAgICAgICAgIC8qIGdyaWQgdHVybiovXHJcbiAgZ3JpZC1yb3c6IDEgLyAyOyAgICAgIFxyXG4gIGdyaWQtY29sdW1uOiA0LyA2OyBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG59XHJcblxyXG4ucmVzdWx0TWVzc2FnZSB7ICBcclxuICBmb250LXNpemU6IDJyZW0gO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IGxpZ2h0eWVsbG93O1xyXG59XHJcblxyXG4gIC5ncmlkRm9yQWRkIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogNDsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyOyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgLmZvcm1JbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAxZnIgMWZyO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuZm9ybVJhZGlve1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcclxuICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiOWM3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJtaXRCdXR0b257XHJcbiAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgZ3JpZC1yb3c6IDEvMjtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7ICBcclxuICAgIC5ib2FyZHtcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7ICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgICBncmlkLXJvdzogMi8zOyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDE0ZnIgMC4xZnIgMTRmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDE0ZnI7XHJcbiAgICBjb2x1bW4tZ2FwOiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7ICBcclxuICAgIC5ib2FyZHtcclxuICAgLyogIGdyaWQtY29sdW1uOiAyLzM7ICAqLyAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgY29udGFpbmVyICovXHJcbiAgIC8qICBncmlkLXJvdzogMi8zOyAqLyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICBcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgLyogIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIG1pbm1heCgxNTBweCwgMjAwcHgpIDAuMWZyIG1pbm1heCgxNTBweCwgMjAwcHgpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTRmcjtcclxuICAgIGNvbHVtbi1nYXA6IDUlOyAqL1xyXG4gICAvKiAgcGFkZGluZy1ib3R0b206IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlOyAqL1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5ib2FyZC1odW1hbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAvKiBmb3IgaGVhZGVycyBwdXJwb3NlICovXHJcblxyXG4gICAgICBncmlkLWNvbHVtbjogMi8zOyAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXHJcbiAgICAgIGdyaWQtcm93OiAyLzM7ICAgICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xyXG4gICAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxuICAgICAgZ2FwOiAycHg7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvYXJkLWNvbXB1dGVyIHtcclxuICAgICAgICBcclxuICAgICAgICBncmlkLWNvbHVtbjogNC81OyAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXHJcbiAgICAgICAgZ3JpZC1yb3c6IDIvMzsgICAgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCAxZnIpO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEzLCAxZnIpO1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGdhcDogMnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWYxOyBcclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIC5jb2x1bW5zSGVhZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgLyogaW4gcmVsYXRpb24gcGFyZW50IGJvYXJkLWh1bWFuKi9cclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgXHJcbiAgICAgIHdpZHRoOiAxMDAlIDtcclxuICAgICAgZGlzcGxheTpmbGV4OyBcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvd3NIZWFke1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1odW1hbiovXHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IFxyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNjb3JlQm9hcmR7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgaW5zZXQ6IDBweDtcclxuICAgICAgbWF4LXdpZHRoOiA5LjUlO1xyXG4gICAgICBtYXgtaGVpZ2h0OiA4MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYuNHJlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVlZjE7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y2ZjdmOTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2Y2ZjdmOTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgICBnYXA6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2NvcmUge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsMWZyKTtcclxuICAgIH1cclxuXHJcblxyXG4gIGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wi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NkI7SUFDL0I7O0lBRUE7TUFDRSxrQkFBa0IsS0FBSyxrQ0FBa0M7TUFDekQsNEJBQTRCO01BQzVCLFlBQVk7SUFDZDs7SUFFQTtNQUNFLGVBQWU7TUFDZixVQUFVO01BQ1YsZUFBZTtNQUNmLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQix5QkFBeUI7TUFDekIsOEJBQThCO01BQzlCLCtCQUErQjtNQUMvQixrQkFBa0I7O01BRWxCLGFBQWE7TUFDYiwyQkFBMkI7TUFDM0IsUUFBUTtJQUNWOztJQUVBO01BQ0UsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixpQ0FBaUM7SUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpe1xcclxcbiBcXHJcXG4gLmNvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZmxleC1kaXJlY3Rpb246cm93O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59IFxcclxcblxcclxcbi50dXJuIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4gIC5ib2FyZC1odW1hbntcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNvbXB1dGVye1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2NvcmVCb2FyZHtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5yZXNldEJ1dHRvbiB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoKzEwJSk7XFxyXFxufVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA2ZnIgMS41ZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTNhNDU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudHVybiB7XFxyXFxuICAgICAgZ3JpZC1yb3c6IDEgLyAyOyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciA0ZnIgMWZyIDFmcjtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50dXJuRGl2IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyOyAgICAgIC8qIGdyaWQgdHVybiovXFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBjb2xvcjogbGlnaHR5ZWxsb3c7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWRkc2hpcHMge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMzsgICAgICAvKiBncmlkIHR1cm4qL1xcclxcbiAgICAgIGdyaWQtcm93OiAxIC8gMjsgICAgICAgXFxyXFxuICAgICAgcGFkZGluZy10b3A6IDIlO1xcclxcbiAgICBcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5yYW5kb21zaGlwcyB7ICAgICAgICAgICAgICAvKiBncmlkIHR1cm4qL1xcclxcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDIlO1xcclxcbiAgICBjb2xvcjogbGlnaHR5ZWxsb3c7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4gIC5yZXN1bHQgeyAgICAgICAgICAgICAgICAgICAgIC8qIGdyaWQgdHVybiovXFxyXFxuICBncmlkLXJvdzogMSAvIDI7ICAgICAgXFxyXFxuICBncmlkLWNvbHVtbjogNC8gNjsgXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxufVxcclxcblxcclxcbi5yZXN1bHRNZXNzYWdlIHsgIFxcclxcbiAgZm9udC1zaXplOiAycmVtIDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogbGlnaHR5ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbiAgLmdyaWRGb3JBZGQge1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7ICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cXHJcXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAyOyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGJvYXJkICovXFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIlO1xcclxcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEyMCU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEwcHg7XFxyXFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICAgICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZm9ybUlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciAxZnI7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbiAgLmZvcm1SYWRpb3tcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zdWJtaXRCdXR0b257XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgIGdyaWQtcm93OiAxLzI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODFweCkgeyAgXFxyXFxuICAgIC5ib2FyZHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvMzsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gICAgZ3JpZC1yb3c6IDIvMzsgICAgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBjb250YWluZXIgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NGQ1ZjtcXHJcXG4gICAgaGVpZ2h0OjkwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMTRmciAwLjFmciAxNGZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxNGZyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiA1JTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7ICBcXHJcXG4gICAgLmJvYXJke1xcclxcbiAgIC8qICBncmlkLWNvbHVtbjogMi8zOyAgKi8gIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcclxcbiAgIC8qICBncmlkLXJvdzogMi8zOyAqLyAgICAgIC8qIGVzdGEgbGluZWEgc2UgYXNvY2lhIGFsIGdyaWQgZGVsIGNvbnRhaW5lciAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU0ZDVmO1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjpyb3c7XFxyXFxuICBcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG5cXHJcXG4gICAvKiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciBtaW5tYXgoMTUwcHgsIDIwMHB4KSAwLjFmciBtaW5tYXgoMTUwcHgsIDIwMHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTRmcjtcXHJcXG4gICAgY29sdW1uLWdhcDogNSU7ICovXFxyXFxuICAgLyogIHBhZGRpbmctYm90dG9tOiA1JTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAlOyAqL1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICAuYm9hcmQtaHVtYW4ge1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAvKiBmb3IgaGVhZGVycyBwdXJwb3NlICovXFxyXFxuXFxyXFxuICAgICAgZ3JpZC1jb2x1bW46IDIvMzsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcclxcbiAgICAgIGdyaWQtcm93OiAyLzM7ICAgICAgLyogZXN0YSBsaW5lYSBzZSBhc29jaWEgYWwgZ3JpZCBkZWwgYm9hcmQgKi9cXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcXHJcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMywgMWZyKTtcXHJcXG4gICAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcXHJcXG4gICAgICBnYXA6IDJweDtcXHJcXG4gICAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IyYjljNztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLmJvYXJkLWNvbXB1dGVyIHtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgZ3JpZC1jb2x1bW46IDQvNTsgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDIvMzsgICAgICAvKiBlc3RhIGxpbmVhIHNlIGFzb2NpYSBhbCBncmlkIGRlbCBib2FyZCAqL1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIDFmcik7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMywgMWZyKTtcXHJcXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICAgICAgZ2FwOiAycHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWYxOyBcXHJcXG4gICAgICAgIFxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgLmNvbHVtbnNIZWFkIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIC8qIGluIHJlbGF0aW9uIHBhcmVudCBib2FyZC1odW1hbiovXFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgXFxyXFxuICAgICAgd2lkdGg6IDEwMCUgO1xcclxcbiAgICAgIGRpc3BsYXk6ZmxleDsgXFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnJvd3NIZWFke1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgLyogaW4gcmVsYXRpb24gcGFyZW50IGJvYXJkLWh1bWFuKi9cXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpOyBcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNjb3JlQm9hcmR7XFxyXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgIGluc2V0OiAwcHg7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA5LjUlO1xcclxcbiAgICAgIG1heC1oZWlnaHQ6IDgwJTtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiA2LjRyZW07XFxyXFxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWYxO1xcclxcbiAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2Y2ZjdmOTtcXHJcXG4gICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZjZmN2Y5O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG5cXHJcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgICBnYXA6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2NvcmUge1xcclxcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xcclxcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDgsMWZyKTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLWJhc2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtYmFzZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeX0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHN9IGZyb20gJy4vdXBkYXRlJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkIH0gZnJvbSAnLi91cGRhdGUtY29tcHV0ZXItYm9hcmQnO1xyXG5pbXBvcnQgeyBzaG93RXJyb3IgfSBmcm9tICcuL3Nob3ctZXJyb3InO1xyXG5pbXBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH0gZnJvbSAnLi9kZWxldGUtZGl2LWVycm9yJztcclxuaW1wb3J0IHsgcmFuZG9tU2hpcHMgfSBmcm9tICcuL3JhbmRvbS1zaGlwcyc7XHJcbmltcG9ydCB7IHNjb3JlQm9hcmQgfSBmcm9tICcuL3Njb3JlLWJvYXJkLmpzJztcclxuXHJcbmZ1bmN0aW9uIGFkZFNoaXBzKGFyZzEsYXJnMixhcmczLGFyZzQsYXJnNSxhcmc2KXtcclxuICAgIC8qIGFyZyBpcyB0aGUgZ2FtZSAgYXJnMiBpcyB0aGUgZGl2IHdpdGggdGhlIGh1bWFuYm9hcmQgIFxyXG4gICAgYXJnMyB0byBzaG93IHRoZSBvcHRpb25zIGFyZzQgdG8gc2hvdyByYW5kb20gYnV0dG9uXHJcbiAgICBhcmc1IGlzIHRoZSBkaXYgd2l0aCB0aGUgY29tcHV0ZXJib2FyZCBhcmc2IGlzIHRoZSBjb250ZW50IGNvbXB1dGVyIGJvYXJkKi9cclxuY29uc3QgZ2FtZSA9IGFyZzE7XHJcbmNvbnN0IGh1bWFuQm9hcmQgPSBhcmcyO1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmc1O1xyXG5jb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzY7XHJcblxyXG4vLyBoZWFkZXJzIGZvciB0aGUgcm93cyBhbmQgY29sdW1ucyBvZiB0aGUgaHVtYW4gcGxheWVyIGJvYXJkXHJcbmNvbnN0IGRpdkNvbHVtbnNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdkNvbHVtbnNIZWFkLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbnNIZWFkJyk7XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICBjb25zdCBjZWxsSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2VsbEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRDZWxsXCIpO1xyXG4gIGNlbGxIZWFkLnRleHRDb250ZW50ID0gYWxmX3lbal0udG9VcHBlckNhc2UoKTtcclxuICBkaXZDb2x1bW5zSGVhZC5hcHBlbmRDaGlsZChjZWxsSGVhZCk7XHJcbiAgfVxyXG5hcmcyLmFwcGVuZENoaWxkKGRpdkNvbHVtbnNIZWFkKTtcclxuXHJcbmNvbnN0IGRpdlJvd3NIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdlJvd3NIZWFkLmNsYXNzTGlzdC5hZGQoJ3Jvd3NIZWFkJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICBjb25zdCBjZWxsSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2VsbEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRDZWxsXCIpO1xyXG4gIGNlbGxIZWFkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6Ny4yNSU7Jyk7XHJcbiAgY2VsbEhlYWQudGV4dENvbnRlbnQgPSBpKzE7XHJcbiAgZGl2Um93c0hlYWQuYXBwZW5kQ2hpbGQoY2VsbEhlYWQpO1xyXG4gIH1cclxuYXJnMi5hcHBlbmRDaGlsZChkaXZSb3dzSGVhZCk7XHJcblxyXG4vLyBkaXYgZm9yIGFkZCB0aGUgc2hpcHMgaW4gdGhlIGJvYXJkXHJcbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZEZvckFkZCcpO1xyXG5ncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWRGb3JBZGQnKTtcclxuY29uc3QgZGl2Rm9yRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGl2Rm9yRXJyb3Iuc2V0QXR0cmlidXRlKCdpZCcsJ2RpdkZvckVycm9yJyk7XHJcbmRpdkZvckVycm9yLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMSAvIDI7IGdyaWQtY29sdW1uOiA0IC8gNTsnKTtcclxuXHJcbmNvbnN0IHNoaXBMZW5ndGg9WzUsMyw0LDYsNCw1XTtcclxuICAgICAgICBcclxuZm9yKGxldCBpPTE7IGk8PXNoaXBMZW5ndGgubGVuZ3RoOyArK2kpe1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsYGZvcm0ke2l9YCk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1JbnB1dCcpO1xyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsYHN1Ym1pdCR7aX1gKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IGBBREQgTsKwICR7aX1gO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpncmVlbjsgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgZm9udC13ZWlnaHQ6IDkwMDsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0OycpO1xyXG4gICAgdGV4dC5pbm5lclRleHQgPSBgJHtzaGlwTGVuZ3RoW2ktMV19IHNxdWFyZXMgbG9uZ2l0dWRlYDtcclxuICAgXHJcblxyXG4gICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJhZGlvRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1SYWRpbycpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9ySG9yaXpvbnRhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBob3Jpem9udGFsbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JWZXJ0aWNhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRpcmVjdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxMnB4Jyk7XHJcbiAgICBsYWJlbEZvckhvcml6b250YWwuaW5uZXJUZXh0ID0gJ2xlZnQtdG8tcmlnaHQnO1xyXG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLnNldEF0dHJpYnV0ZSgnZm9yJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgbGFiZWxGb3JWZXJ0aWNhbC5pbm5lclRleHQgPSAndG9wLXRvLWRvd24nO1xyXG4gICAgbGFiZWxGb3JWZXJ0aWNhbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvcC10by1kb3duJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ2lkJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2RpcmVjdGlvbicpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsZWZ0LXRvLXJpZ2h0Jyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b3AtdG8tZG93bicpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywndG9wLXRvLWRvd24nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCduYW1lJywnZGlyZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgY29vcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvb3JkUm93LmlubmVyVGV4dCA9ICdST1c6ICc7XHJcbiAgICBjb25zdCBjb29yZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29vcmRDb2x1bW4uaW5uZXJUZXh0ID0gJ0NPTFVNTjogJztcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxyb3dzOyArK2kpe1xyXG4gICAgICAgIGNvbnN0IHJvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcm93TGFiZWwuaW5uZXJUZXh0ID0gaSsxO1xyXG4gICAgICAgIHJvd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgcm93JHtpKzF9YCk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ2lkJyxgcm93JHtpKzF9YCk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCduYW1lJywncm93U2VsZWN0ZWQnKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxpKzEpO1xyXG5cclxuICAgICAgICBjb29yZFJvdy5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XHJcbiAgICAgICAgY29vcmRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBmb3IobGV0IGo9MDsgajxjb2x1bW5zOyArK2ope1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29sdW1uTGFiZWwuaW5uZXJUZXh0ID0gYWxmX3lbal0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBjb2x1bW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYGNvbHVtbiR7YWxmX3lbal19YCk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgY29sdW1uJHthbGZfeVtqXX1gKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjb2x1bW5TZWxlY3RlZCcpO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgndmFsdWUnLGFsZl95W2pdKTtcclxuXHJcbiAgICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoY29sdW1uTGFiZWwpO1xyXG4gICAgICAgIGNvb3JkQ29sdW1uLmFwcGVuZENoaWxkKGlucHV0Q29sdW1uKTtcclxuICAgIH1cclxuXHJcbiAgICBob3Jpem9udGFsbHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdmVydGljYWxseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uU2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIGRpcmVjdGlvblJhZGlvVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJkaXJlY3Rpb25cIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgZGlyZWN0aW9uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgIHNob3dFcnJvcihyYWRpb0RpdiwnbXVzdCBzZWxlY3QgZGlyZWN0aW9uJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblNlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGxldCByb3dTZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gcm93UmFkaW9WYWx1ZSgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJyb3dTZWxlY3RlZFwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICByb3dTZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgcm93U2VsZWN0ZWQgPSAxO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gcm93U2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgbGV0IGNvbHVtblNlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiBjb2x1bW5SYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiY29sdW1uU2VsZWN0ZWRcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgIGNvbHVtblNlbGVjdGVkID0gJ2EnO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gY29sdW1uU2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2l6ZSA9IHNoaXBMZW5ndGhbaS0xXTtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBOdW1iZXIgPSBpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJhZGlvVmFsdWUoKTtcclxuXHJcbiAgICAgICAgbGV0IHJvd1NlbGVjdGVkID0gcm93UmFkaW9WYWx1ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvbHVtblNlbGVjdGVkID0gY29sdW1uUmFkaW9WYWx1ZSgpO1xyXG5cclxuICAgICAgICBsZXQgY29vcmQgPSBbTnVtYmVyKHJvd1NlbGVjdGVkKSxjb2x1bW5TZWxlY3RlZF07XHJcblxyXG4gICAgICAgIGxldCBzaGlwID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLmRhdGFTaGlwcyhjb29yZCxkaXJlY3Rpb24sc2l6ZSxzaGlwTnVtYmVyKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChzaGlwIT09bnVsbCl7XHJcbiAgICAgICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgbGV0IG5ld0JvYXJkID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLnBsYWNlU2hpcHNJblRoZUJvYXJkKHNoaXApO1xyXG4gICAgICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLCBuZXdCb2FyZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZvcm0ke2l9YCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFJlYWR5LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1JbnB1dCcpLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsQWRkU2hpcHNEaXYoZ3JpZCxkaXZGb3JSYW5kb20sZGl2Q29sdW1uc0hlYWQsZGl2Um93c0hlYWQpO1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihhcmczLGNvbXB1dGVyQm9hcmQsc2hpcExlbmd0aCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgICAgICAgICBzY29yZUJvYXJkKGFyZzMscGxheWVySHVtYW4scGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcihkaXZGb3JFcnJvciwnU0VMRUNUIEFOT1RIRVIgTE9DQVRJT04nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICBhcmczLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9EaXYpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChkaXJlY3Rpb25JbnB1dCk7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChjb29yZFJvdyk7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChjb29yZENvbHVtbik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvckhvcml6b250YWwpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbGx5KTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9yVmVydGljYWwpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQodmVydGljYWxseSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXZGb3JSYW5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkZvclJhbmRvbS5pbm5lclRleHQgPSAnQ2xpY2sgaGVyZSBmb3IgYSByYW5kb20gZmxlZXQgb2Ygc2hpcHMnO1xyXG4gICAgZGl2Rm9yUmFuZG9tLmNsYXNzTGlzdC5hZGQoJ3JhbmRvbXNoaXBzJyk7XHJcbiAgICBjb25zdCBidXR0b25SYW5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvblJhbmRvbS5pbm5lclRleHQgPSAnUkFORE9NIEZMRUVUJztcclxuICAgIGJ1dHRvblJhbmRvbS5jbGFzc0xpc3QuYWRkKCdhZGRTaGlwQnV0dG9uJyk7XHJcblxyXG4gICAgYnV0dG9uUmFuZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQscGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByYW5kb21TaGlwcyhwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10sc2hpcExlbmd0aCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG4gICAgICAgIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGdyaWQsZGl2Rm9yUmFuZG9tLGRpdkNvbHVtbnNIZWFkLGRpdlJvd3NIZWFkKTtcclxuICAgICAgICByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzMsY29tcHV0ZXJCb2FyZCxzaGlwTGVuZ3RoLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICBzY29yZUJvYXJkKGFyZzMscGxheWVySHVtYW4scGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgYXJnNC5hcHBlbmRDaGlsZChkaXZGb3JSYW5kb20pO1xyXG4gICAgYXJnNC5hcHBlbmRDaGlsZChkaXZGb3JFcnJvcik7XHJcbiAgICBkaXZGb3JSYW5kb20uYXBwZW5kQ2hpbGQoYnV0dG9uUmFuZG9tKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGFyZzEsYXJnMixhcmczLGFyZzQpe1xyXG4gICAgLy8gYWxsIHRoZSBhcmd1bWVudHMgYXJlIHRoZSBkaXZzIHRvIHdpbGwgYmUgcmVtb3ZlZFxyXG4gICAgYXJnMS5yZW1vdmUoKTtcclxuICAgIGFyZzIucmVtb3ZlKCk7XHJcbiAgICBhcmczLnJlbW92ZSgpO1xyXG4gICAgYXJnNC5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihhcmcxLGFyZzIsYXJnMyxhcmc0KXtcclxuICAgICAgLyogIGFyZzEgaXMgdGhlIGRpdiB0byB3cml0ZSB0aGUgaGVhZCAqL1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmcyO1xyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBhcmczO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnNDtcclxuXHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jb21wdXRlcicpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkQ29tcHV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkQ29tcHV0ZXIuaW5uZXJUZXh0ID0gJ3RoaXMgaXMgeW91ciBlbmVteSAnLnRvVXBwZXJDYXNlKCkrJyBDbGljayBUbyBBdHRhY2snO1xyXG4gICAgICAgIGhlYWRDb21wdXRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDEvMjsgZ3JpZC1jb2x1bW46IDQvNTsgcGFkZGluZy1sZWZ0OjI1JTsgY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbiAgICAgICAgYXJnMS5hcHBlbmRDaGlsZChoZWFkQ29tcHV0ZXIpO1xyXG5cclxuICAgICAgICBwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ10uaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoY29tcHV0ZXJCb2FyZCxwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG4gICAgICAgIHJhbmRvbVNoaXBzKHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXSxzaGlwTGVuZ3RoKTtcclxuICAgICAgICB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQoY29tcHV0ZXJCb2FyZCxwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG59XHJcblxyXG5leHBvcnQgeyBhZGRTaGlwc307IiwiY29uc3QgYWRqYWNlbnQgPSBuZXcgTWFwKCk7XHJcblxyXG5hZGphY2VudC5zZXQoMCxbMSwxMl0pO1xyXG5hZGphY2VudC5zZXQoMSxbMCwyLDEzXSk7XHJcbmFkamFjZW50LnNldCgyLFsxLDMsMTRdKTtcclxuYWRqYWNlbnQuc2V0KDMsWzIsNCwxNV0pO1xyXG5hZGphY2VudC5zZXQoNCxbMyw1LDE2XSk7XHJcbmFkamFjZW50LnNldCg1LFs0LDYsMTddKTtcclxuYWRqYWNlbnQuc2V0KDYsWzUsNywxOF0pO1xyXG5hZGphY2VudC5zZXQoNyxbNiw4LDE5XSk7XHJcbmFkamFjZW50LnNldCg4LFs3LDksMjBdKTtcclxuYWRqYWNlbnQuc2V0KDksWzgsMTAsMjFdKTtcclxuYWRqYWNlbnQuc2V0KDEwLFs5LDExLDIyXSk7XHJcbmFkamFjZW50LnNldCgxMSxbMTAsMjNdKTtcclxuYWRqYWNlbnQuc2V0KDEyLFswLDEzLDI0XSk7XHJcbmFkamFjZW50LnNldCgxMyxbMSwxMiwxNCwyNV0pO1xyXG5hZGphY2VudC5zZXQoMTQsWzIsMTMsMTUsMjZdKTtcclxuYWRqYWNlbnQuc2V0KDE1LFszLDE0LDE2LDI3XSk7XHJcbmFkamFjZW50LnNldCgxNixbNCwxNSwxNywyOF0pO1xyXG5hZGphY2VudC5zZXQoMTcsWzUsMTYsMTgsMjldKTtcclxuYWRqYWNlbnQuc2V0KDE4LFs2LDE3LDE5LDMwXSk7XHJcbmFkamFjZW50LnNldCgxOSxbNywxOCwyMCwzMV0pO1xyXG5hZGphY2VudC5zZXQoMjAsWzgsMTksMjEsMzJdKTtcclxuYWRqYWNlbnQuc2V0KDIxLFs5LDIwLDIyLDMzXSk7XHJcbmFkamFjZW50LnNldCgyMixbMTAsMjEsMjMsMzRdKTtcclxuYWRqYWNlbnQuc2V0KDIzLFsxMSwyMiwzNV0pO1xyXG5hZGphY2VudC5zZXQoMjQsWzEyLDI1LDM2XSk7XHJcbmFkamFjZW50LnNldCgyNSxbMTMsMjQsMjYsMzddKTtcclxuYWRqYWNlbnQuc2V0KDI2LFsxNCwyNSwyNywzOF0pO1xyXG5hZGphY2VudC5zZXQoMjcsWzE1LDI2LDI4LDM5XSk7XHJcbmFkamFjZW50LnNldCgyOCxbMTYsMjcsMjksNDBdKTtcclxuYWRqYWNlbnQuc2V0KDI5LFsxNywyOCwzMCw0MV0pO1xyXG5hZGphY2VudC5zZXQoMzAsWzE4LDI5LDMxLDQyXSk7XHJcbmFkamFjZW50LnNldCgzMSxbMTksMzAsMzIsNDNdKTtcclxuYWRqYWNlbnQuc2V0KDMyLFsyMCwzMSwzMyw0NF0pO1xyXG5hZGphY2VudC5zZXQoMzMsWzIxLDMyLDM0LDQ1XSk7XHJcbmFkamFjZW50LnNldCgzNCxbMjIsMzMsMzUsNDZdKTtcclxuYWRqYWNlbnQuc2V0KDM1LFsyMywzNCw0N10pO1xyXG5hZGphY2VudC5zZXQoMzYsWzI0LDM3LDQ4XSk7XHJcbmFkamFjZW50LnNldCgzNyxbMjUsMzYsMzgsNDldKTtcclxuYWRqYWNlbnQuc2V0KDM4LFsyNiwzNywzOSw1MF0pO1xyXG5hZGphY2VudC5zZXQoMzksWzI3LDM4LDQwLDUxXSk7XHJcbmFkamFjZW50LnNldCg0MCxbMjgsMzksNDEsNTJdKTtcclxuYWRqYWNlbnQuc2V0KDQxLFsyOSw0MCw0Miw1M10pO1xyXG5hZGphY2VudC5zZXQoNDIsWzMwLDQxLDQzLDU0XSk7XHJcbmFkamFjZW50LnNldCg0MyxbMzEsNDIsNDQsNTVdKTtcclxuYWRqYWNlbnQuc2V0KDQ0LFszMiw0Myw0NSw1Nl0pO1xyXG5hZGphY2VudC5zZXQoNDUsWzMzLDQ0LDQ2LDU3XSk7XHJcbmFkamFjZW50LnNldCg0NixbMzQsNDUsNDcsNThdKTtcclxuYWRqYWNlbnQuc2V0KDQ3LFszNSw0Niw1OV0pO1xyXG5hZGphY2VudC5zZXQoNDgsWzM2LDQ5LDYwXSk7XHJcbmFkamFjZW50LnNldCg0OSxbMzcsNDgsNTAsNjFdKTtcclxuYWRqYWNlbnQuc2V0KDUwLFszOCw0OSw1MSw2Ml0pO1xyXG5hZGphY2VudC5zZXQoNTEsWzM5LDUwLDUyLDYzXSk7XHJcbmFkamFjZW50LnNldCg1MixbNDAsNTEsNTMsNjRdKTtcclxuYWRqYWNlbnQuc2V0KDUzLFs0MSw1Miw1NCw2NV0pO1xyXG5hZGphY2VudC5zZXQoNTQsWzQyLDUzLDU1LDY2XSk7XHJcbmFkamFjZW50LnNldCg1NSxbNDMsNTQsNTYsNjddKTtcclxuYWRqYWNlbnQuc2V0KDU2LFs0NCw1NSw1Nyw2OF0pO1xyXG5hZGphY2VudC5zZXQoNTcsWzQ1LDU2LDU4LDY5XSk7XHJcbmFkamFjZW50LnNldCg1OCxbNDYsNTcsNTksNzBdKTtcclxuYWRqYWNlbnQuc2V0KDU5LFs0Nyw1OCw3MV0pO1xyXG5hZGphY2VudC5zZXQoNjAsWzQ4LDYxLDcyXSk7XHJcbmFkamFjZW50LnNldCg2MSxbNDksNjAsNjIsNzNdKTtcclxuYWRqYWNlbnQuc2V0KDYyLFs1MCw2MSw2Myw3NF0pO1xyXG5hZGphY2VudC5zZXQoNjMsWzUxLDYyLDY0LDc1XSk7XHJcbmFkamFjZW50LnNldCg2NCxbNTIsNjMsNjUsNzZdKTtcclxuYWRqYWNlbnQuc2V0KDY1LFs1Myw2NCw2Niw3N10pO1xyXG5hZGphY2VudC5zZXQoNjYsWzU0LDY1LDY3LDc4XSk7XHJcbmFkamFjZW50LnNldCg2NyxbNTUsNjYsNjgsNzldKTtcclxuYWRqYWNlbnQuc2V0KDY4LFs1Niw2Nyw2OSw4MF0pO1xyXG5hZGphY2VudC5zZXQoNjksWzU3LDY4LDcwLDgxXSk7XHJcbmFkamFjZW50LnNldCg3MCxbNTgsNjksNzEsODJdKTtcclxuYWRqYWNlbnQuc2V0KDcxLFs1OSw3MCw4M10pO1xyXG5hZGphY2VudC5zZXQoNzIsWzYwLDczLDg0XSk7XHJcbmFkamFjZW50LnNldCg3MyxbNjEsNzIsNzQsODVdKTtcclxuYWRqYWNlbnQuc2V0KDc0LFs2Miw3Myw3NSw4Nl0pO1xyXG5hZGphY2VudC5zZXQoNzUsWzYzLDc0LDc2LDg3XSk7XHJcbmFkamFjZW50LnNldCg3NixbNjQsNzUsNzcsODhdKTtcclxuYWRqYWNlbnQuc2V0KDc3LFs2NSw3Niw3OCw4OV0pO1xyXG5hZGphY2VudC5zZXQoNzgsWzY2LDc3LDc5LDkwXSk7XHJcbmFkamFjZW50LnNldCg3OSxbNjcsNzgsODAsOTFdKTtcclxuYWRqYWNlbnQuc2V0KDgwLFs2OCw3OSw4MSw5Ml0pO1xyXG5hZGphY2VudC5zZXQoODEsWzY5LDgwLDgyLDkzXSk7XHJcbmFkamFjZW50LnNldCg4MixbNzAsODEsODMsOTRdKTtcclxuYWRqYWNlbnQuc2V0KDgzLFs3MSw4Miw5NV0pO1xyXG5hZGphY2VudC5zZXQoODQsWzcyLDg1LDk2XSk7XHJcbmFkamFjZW50LnNldCg4NSxbNzMsODQsODYsOTddKTtcclxuYWRqYWNlbnQuc2V0KDg2LFs3NCw4NSw4Nyw5OF0pO1xyXG5hZGphY2VudC5zZXQoODcsWzc1LDg2LDg4LDk5XSk7XHJcbmFkamFjZW50LnNldCg4OCxbNzYsODcsODksMTAwXSk7XHJcbmFkamFjZW50LnNldCg4OSxbNzcsODgsOTAsMTAxXSk7XHJcbmFkamFjZW50LnNldCg5MCxbNzgsODksOTEsMTAyXSk7XHJcbmFkamFjZW50LnNldCg5MSxbNzksOTAsOTIsMTAzXSk7XHJcbmFkamFjZW50LnNldCg5MixbODAsOTEsOTMsMTA0XSk7XHJcbmFkamFjZW50LnNldCg5MyxbODEsOTIsOTQsMTA1XSk7XHJcbmFkamFjZW50LnNldCg5NCxbODIsOTMsOTUsMTA2XSk7XHJcbmFkamFjZW50LnNldCg5NSxbODMsOTQsMTA3XSk7XHJcbmFkamFjZW50LnNldCg5NixbODQsOTcsMTA4XSk7XHJcbmFkamFjZW50LnNldCg5NyxbODUsOTYsOTgsMTA5XSk7XHJcbmFkamFjZW50LnNldCg5OCxbODYsOTcsOTksMTEwXSk7XHJcbmFkamFjZW50LnNldCg5OSxbODcsOTgsMTAwLDExMV0pO1xyXG5hZGphY2VudC5zZXQoMTAwLFs4OCw5OSwxMDEsMTEyXSk7XHJcbmFkamFjZW50LnNldCgxMDEsWzg5LDEwMCwxMDIsMTEzXSk7XHJcbmFkamFjZW50LnNldCgxMDIsWzkwLDEwMSwxMDMsMTE0XSk7XHJcbmFkamFjZW50LnNldCgxMDMsWzkxLDEwMiwxMDQsMTE1XSk7XHJcbmFkamFjZW50LnNldCgxMDQsWzkyLDEwMywxMDUsMTE2XSk7XHJcbmFkamFjZW50LnNldCgxMDUsWzkzLDEwNCwxMDYsMTE3XSk7XHJcbmFkamFjZW50LnNldCgxMDYsWzk0LDEwNSwxMDcsMTE4XSk7XHJcbmFkamFjZW50LnNldCgxMDcsWzk1LDEwNiwxMTldKTtcclxuYWRqYWNlbnQuc2V0KDEwOCxbOTYsMTA5LDEyMF0pO1xyXG5hZGphY2VudC5zZXQoMTA5LFs5NywxMDgsMTEwLDEyMV0pO1xyXG5hZGphY2VudC5zZXQoMTEwLFs5OCwxMDksMTExLDEyMl0pO1xyXG5hZGphY2VudC5zZXQoMTExLFs5OSwxMTAsMTEyLDEyM10pO1xyXG5hZGphY2VudC5zZXQoMTEyLFsxMDAsMTExLDExMywxMjRdKTtcclxuYWRqYWNlbnQuc2V0KDExMyxbMTAxLDExMiwxMTQsMTI1XSk7XHJcbmFkamFjZW50LnNldCgxMTQsWzEwMiwxMTMsMTE1LDEyNl0pO1xyXG5hZGphY2VudC5zZXQoMTE1LFsxMDMsMTE0LDExNiwxMjddKTtcclxuYWRqYWNlbnQuc2V0KDExNixbMTA0LDExNSwxMTcsMTI4XSk7XHJcbmFkamFjZW50LnNldCgxMTcsWzEwNSwxMTYsMTE4LDEyOV0pO1xyXG5hZGphY2VudC5zZXQoMTE4LFsxMDYsMTE3LDExOSwxMzBdKTtcclxuYWRqYWNlbnQuc2V0KDExOSxbMTA3LDExOCwxMzFdKTtcclxuYWRqYWNlbnQuc2V0KDEyMCxbMTA4LDEyMSwxMzJdKTtcclxuYWRqYWNlbnQuc2V0KDEyMSxbMTA5LDEyMCwxMjIsMTMzXSk7XHJcbmFkamFjZW50LnNldCgxMjIsWzExMCwxMjEsMTIzLDEzNF0pO1xyXG5hZGphY2VudC5zZXQoMTIzLFsxMTEsMTIyLDEyNCwxMzVdKTtcclxuYWRqYWNlbnQuc2V0KDEyNCxbMTEyLDEyMywxMjUsMTM2XSk7XHJcbmFkamFjZW50LnNldCgxMjUsWzExMywxMjQsMTI2LDEzN10pO1xyXG5hZGphY2VudC5zZXQoMTI2LFsxMTQsMTI1LDEyNywxMzhdKTtcclxuYWRqYWNlbnQuc2V0KDEyNyxbMTE1LDEyNiwxMjgsMTM5XSk7XHJcbmFkamFjZW50LnNldCgxMjgsWzExNiwxMjcsMTI5LDE0MF0pO1xyXG5hZGphY2VudC5zZXQoMTI5LFsxMTcsMTI4LDEzMCwxNDFdKTtcclxuYWRqYWNlbnQuc2V0KDEzMCxbMTE4LDEyOSwxMzEsMTQyXSk7XHJcbmFkamFjZW50LnNldCgxMzEsWzExOSwxMzAsMTQzXSk7XHJcbmFkamFjZW50LnNldCgxMzIsWzEyMCwxMzMsMTQ0XSk7XHJcbmFkamFjZW50LnNldCgxMzMsWzEyMSwxMzIsMTM0LDE0NV0pO1xyXG5hZGphY2VudC5zZXQoMTM0LFsxMjIsMTMzLDEzNSwxNDZdKTtcclxuYWRqYWNlbnQuc2V0KDEzNSxbMTIzLDEzNCwxMzYsMTQ3XSk7XHJcbmFkamFjZW50LnNldCgxMzYsWzEyNCwxMzUsMTM3LDE0OF0pO1xyXG5hZGphY2VudC5zZXQoMTM3LFsxMjUsMTM2LDEzOCwxNDldKTtcclxuYWRqYWNlbnQuc2V0KDEzOCxbMTI2LDEzNywxMzksMTUwXSk7XHJcbmFkamFjZW50LnNldCgxMzksWzEyNywxMzgsMTQwLDE1MV0pO1xyXG5hZGphY2VudC5zZXQoMTQwLFsxMjgsMTM5LDE0MSwxNTJdKTtcclxuYWRqYWNlbnQuc2V0KDE0MSxbMTI5LDE0MCwxNDIsMTUzXSk7XHJcbmFkamFjZW50LnNldCgxNDIsWzEzMCwxNDEsMTQzLDE1NF0pO1xyXG5hZGphY2VudC5zZXQoMTQzLFsxMzEsMTQyLDE1NV0pO1xyXG5hZGphY2VudC5zZXQoMTQ0LFsxMzIsMTQ1XSk7XHJcbmFkamFjZW50LnNldCgxNDUsWzEzMywxNDQsMTQ2XSk7XHJcbmFkamFjZW50LnNldCgxNDYsWzEzNCwxNDUsMTQ3XSk7XHJcbmFkamFjZW50LnNldCgxNDcsWzEzNSwxNDYsMTQ4XSk7XHJcbmFkamFjZW50LnNldCgxNDgsWzEzNiwxNDcsMTQ5XSk7XHJcbmFkamFjZW50LnNldCgxNDksWzEzNywxNDgsMTUwXSk7XHJcbmFkamFjZW50LnNldCgxNTAsWzEzOCwxNDksMTUxXSk7XHJcbmFkamFjZW50LnNldCgxNTEsWzEzOSwxNTAsMTUyXSk7XHJcbmFkamFjZW50LnNldCgxNTIsWzE0MCwxNTEsMTUzXSk7XHJcbmFkamFjZW50LnNldCgxNTMsWzE0MSwxNTIsMTU0XSk7XHJcbmFkamFjZW50LnNldCgxNTQsWzE0MiwxNTMsMTU1XSk7XHJcbmFkamFjZW50LnNldCgxNTUsWzE0MywxNTRdKTtcclxuXHJcblxyXG5leHBvcnQge2FkamFjZW50fTtcclxuIiwiY29uc3Qgcm93cyA9IDEzO1xyXG5jb25zdCBjb2x1bW5zID0gMTI7XHJcblxyXG5jb25zdCBhbGZfeSA9IFtcclxuICAgICdhJywnYicsJ2MnLCdkJywnZScsJ2YnLCdnJywnaCcsJ2knLCdqJywnaycsJ2wnXHJcbiAgICAgXTtcclxuXHJcbmZ1bmN0aW9uIHNoaWZ0Q29vcmRpbmF0ZXMoW3ZhbHVlX3gsdmFsdWVfeV0pe1xyXG4gICAgICAgLyogIGxldCBbeCx5XSA9IFsxLCdhJ107ICAqL1xyXG4gICAgICAgIHN3aXRjaChhbGZfeS5pbmNsdWRlcyh2YWx1ZV95LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYWxmX3kuaW5kZXhPZih2YWx1ZV95LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbIHZhbHVlX3gtMSwgaW5kZXggXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sa2V5KXtcclxubGV0IGFycmF5T2ZDb29yZGluYXRlcyA9IFtdO1xyXG5sZXQgaW5pdGlhbFggPSB4O1xyXG5sZXQgaW5pdGlhbFkgPSBhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBzd2l0Y2goZGlyZWN0aW9uPT09J2xlZnQtdG8tcmlnaHQnKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgaWYoYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpICsga2V5ID4gY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgeCwgYWxmX3lbaW5pdGlhbFkgKyBpXSBdKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb249PT0ndG9wLXRvLWRvd24nKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgaWYoaW5pdGlhbFggKyBrZXktMSA+IHJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyBpbml0aWFsWCArIGksIHkgXSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29vcmRpbmF0ZXMoW3gseV0pe1xyXG4gICAgaWYoeCA+IDAgJiYgeCA8PSByb3dzICYmIGFsZl95LmluY2x1ZGVzKHkudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKXtcclxuICAvKiAgIGxldCBbeCx5XSA9IFsxLCdhJ107ICAgICAqL1xyXG4gICAgcmV0dXJuIFsgcm93ICsgMSwgYWxmX3lbY29sdW1uXSBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpe1xyXG4gICAvKiAgbGV0IFtyb3csY29sdW1uXSA9IFswLDBdOyAqL1xyXG4gICAgbGV0IHJvd1NlbGVjdGVkID0gY29vcmRbMF0tMTtcclxuICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9IGFsZl95LmluZGV4T2YoY29vcmRbMV0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIocm93U2VsZWN0ZWQpLCBOdW1iZXIoY29sdW1uU2VsZWN0ZWQpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpIHtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIGFycmF5LnB1c2goYCR7aSsxfSwke2FsZl95W2pdfWApO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKXtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgbGV0IG49IC0xO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIG4gPSBuICsgMTtcclxuICAgICAgICBhcnJheS5wdXNoKFtuLFtgJHtpKzF9LCR7YWxmX3lbal19YF1dKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJvd3MsIGNvbHVtbnMsIGFsZl95LCBzaGlmdENvb3JkaW5hdGVzLCBhc3NpZ25Mb2NhdGlvbiwgXHJcbiAgICBjaGVja0Nvb3JkaW5hdGVzLCBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMsIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMsXHJcbiAgICAgICAgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9OyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcnMoYXJnMSkge1xyXG4gICAgLyogdGhlIGFyZzEgaXMgdGhlIHBhcmVudCBjb250YWluZXIgICAqL1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRGb3JBZGQnKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2dyaWRGb3JBZGQnKTtcclxuICAgIFxyXG4gICAgICAgIGFyZzEuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9OyIsImZ1bmN0aW9uIGRlbGV0ZUVycm9yTWVzc2FnZXMoKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJyk7XHJcbiAgICAvKiBwYXJhIGNyZWFyIHVuIGFycmF5IGRlc2RlIGVsIE5vZGVMaXN0ICovXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzQXJyYXkgPSBbLi4uZXJyb3JNZXNzYWdlc107XHJcbiAgICBjb25zdCBpdGVyYXRvciA9IGVycm9yTWVzc2FnZXNBcnJheS5lbnRyaWVzKCk7XHJcbiAgICBlcnJvck1lc3NhZ2VzQXJyYXkuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgIC8qICAgY29uc29sZS5sb2coaW5kZXhbMF0pO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhpbmRleFsxXSk7ICovXHJcbiAgICAgIGxldCB4ID0gaW5kZXhbMV07ICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIHgucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCB7IGRlbGV0ZUVycm9yTWVzc2FnZXMgfTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gZ2FtZUNvbnRyb2xsZXIoXHJcbiAgICAgICAgcGxheWVyUmVhbCA9IFwiSFVNQU4gUGxheWVyXCIsXHJcbiAgICAgICAgcGxheWVyQ29tcHV0ZXIgPSBcIkNPTVBVVEVSIFBsYXllclwiLFxyXG4gICAgICAgIHdpbm5lciA9IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2UgPSAnJyApe1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHBsYXllcnMgPSBbXHJcbiAgICAgICAgICAgICAgICBuZXcgUGxheWVyKHBsYXllclJlYWwpXHJcbiAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICBuZXcgUGxheWVyKHBsYXllckNvbXB1dGVyKVxyXG4gICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xyXG5cclxuICAgICAgICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh3aW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAvKiB0aGUgcGxheWVyIGRvZXNudCBjaGFuZ2UgKi9cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllcjsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHN3aXRjaCBwbGF5ZXIqL1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH07ICAgICAgICAgICBcclxuICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcclxuXHJcbiAgICAgICAgICAgY29uc3QgYm9hcmRSZWFsID0gKCkgPT4gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107XHJcbiAgICAgICAgICAgY29uc3QgYm9hcmRDb21wdXRlciA9ICgpID0+IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydib2FyZCddO1xyXG5cclxuICAgICAgICAgICBjb25zdCBnZXRDb21wdXRlclBsYXllciA9ICgpID0+IHBsYXllcnNbMV07XHJcbiAgICAgICAgICAgY29uc3QgZ2V0SHVtYW5QbGF5ZXIgPSAoKSA9PiBwbGF5ZXJzWzBdO1xyXG5cclxuICAgICAgICAgICBjb25zdCBpc1RoZXJlQVdpbm5lciA9ICgpID0+IHdpbm5lcjtcclxuXHJcbiAgICBjb25zdCBwcmludE5ld1JvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGJvYXJkUmVhbCgpO1xyXG4gICAgICAgICAgICBib2FyZENvbXB1dGVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgc3dpdGNoICh3aW5uZXIpIHtcclxuICAgICAgICAgICBjYXNlIHRydWU6ICAgXHJcbiAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAgZ2V0QWN0aXZlUGxheWVyKCkudHlwZSArICcgV09OJzsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gJyc7ICAgICAgICAgICBcclxuICAgICAgICAgICB9OyBcclxuICAgICAgLyogIGNvbnNvbGUubG9nKG1lc3NhZ2UpOyAgKi8gICBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGdldEdhbWVNZXNzYWdlID0gKCkgPT4gbWVzc2FnZTsgICAgXHJcblxyXG4gICAgICBjb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcclxuICAgICAgICBpZiggcGxheWVyc1swXVsnZ2FtZWJvYXJkJ10uZ2V0VG90YWxTdW5rKCkgPT09IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddLmxlbmd0aCApe1xyXG4gICAgICAgICAgICB3aW5uZXIgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXS5nZXRUb3RhbFN1bmsoKSA9PT0gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ10ubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICAgICB3aW5uZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3aW5uZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHsgXHJcbiAgICAgICAgd2lubmVyID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcclxuICAgICAgICAvKiB0aGlzIHJlc2V0IGlzIG5vdCBiZWVuIHVzZWQgKi9cclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBsYXlSb3VuZCA9IChyb3csY29sdW1uKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCBib2FyZCApIDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwbGF5Um91bmRDb21wdXRlciA9IChyb3csY29sdW1uKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgLyogY29uc29sZS5sb2coJ2FjdGl2YW5kbyBqdWVnbycpOyAqL1xyXG4gICAgICAgIGlmICggd2lubmVyID09PSB0cnVlICl7IFxyXG4gICAgICAgICAgICByZXNldEdhbWUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGNvb3JkID0gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pO1xyXG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkID0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ107XHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNvcmRlZEF0dGFjayhjb29yZCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNoZWNrRm9yV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICggYm9hcmQgKSA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtwbGF5Um91bmQscGxheVJvdW5kQ29tcHV0ZXIsIGdldEFjdGl2ZVBsYXllciwgXHJcbiAgICAgICAgZ2V0R2FtZU1lc3NhZ2UsIGJvYXJkUmVhbCwgYm9hcmRDb21wdXRlciwgcmVzZXRHYW1lLFxyXG4gICAgICAgICBnZXRDb21wdXRlclBsYXllciwgZ2V0SHVtYW5QbGF5ZXIsIGlzVGhlcmVBV2lubmVyfTtcclxufVxyXG5cclxuZXhwb3J0IHtnYW1lQ29udHJvbGxlcn07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XHJcbmltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBjaGVja0Nvb3JkaW5hdGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuXHJcblxyXG4vLyBhIGNsYXNzIEdhbWVib2FyZFxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5nZXRCb2FyZChyb3dzLCBjb2x1bW5zKTtcclxuICAgICAgICB0aGlzLmFycmF5TWlzc2VkID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hcnJheUFsbEF0dGFjayA9IG5ldyBTZXQoW10pO1xyXG4gICAgICAgIHRoaXMuYWxsU2hpcHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2FyZCggcm93cywgY29sdW1ucywgYm9hcmQ9W10pe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkW2ldID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaCh0aGlzLmNlbGwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjZWxsKCl7XHJcbiAgIFxyXG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4ge3ZhbHVlfTsgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZGF0YVNoaXBzKFt4LHldLGRpcmVjdGlvbixzaXplLHNoaXBOdW1iZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzID0gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLHNpemUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNoaXBDb29yZGluYXRlcz09PW51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IG5vdEF2YWlsYWJsZSA9IHNoaXBDb29yZGluYXRlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoeCkgPT4gdGhpcy5ib2FyZFtzaGlmdENvb3JkaW5hdGVzKHgpWzBdXVtzaGlmdENvb3JkaW5hdGVzKHgpWzFdXS52YWx1ZSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICAobm90QXZhaWxhYmxlLmluY2x1ZGVzKHRydWUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzVG9TdHJpbmcgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKCh4KSA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBsZXQgb25lU2hpcCA9IHsgXHJcbiAgICAgICAgICAgICAgICAnc2hpcE51bWJlcic6c2hpcE51bWJlciwgXHJcbiAgICAgICAgICAgICAgICAnc2hpcERldGFpbHMnOiBuZXcgU2hpcChzaXplKSxcclxuICAgICAgICAgICAgICAgICdjb29yZGluYXRlcyc6IHNoaXBDb29yZGluYXRlc1RvU3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2gob25lU2hpcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbmVTaGlwO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwc0luVGhlQm9hcmQoIG9uZVNoaXAgKXtcclxuICAgICAgICBsZXQgYXJyYXkgPSBvbmVTaGlwWydjb29yZGluYXRlcyddO1xyXG4gICAgICAgIGxldCByZXZlcnNlU3RyaW5nID0gYXJyYXkubWFwKCh4KT0+IHguc3BsaXQoJywnKSk7XHJcbiAgICAgICAgbGV0IGFycmF5SW5Cb2FyZCA9IHJldmVyc2VTdHJpbmcubWFwKCAodmFsdWVzKSA9PiBzaGlmdENvb3JkaW5hdGVzKHZhbHVlcykpO1xyXG4gICAgICAgIGFycmF5SW5Cb2FyZC5tYXAoKFt4LHldKSA9PiB0aGlzLmJvYXJkW3hdW3ldLnZhbHVlID0gMSApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWNvcmRlZEF0dGFjayggW3gseV0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMT0odmFsdWUpPT50aGlzLnJlY29yZGVkQ29vcmQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMj0odmFsdWUpPT50aGlzLnJlY29yZGVkTWlzc2VkQ29vcmQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApeyAgICAgICAgICAgICBcclxuICAgICAgICBpZighY2hlY2tDb29yZGluYXRlcyhbeCx5XSkgfHwgdGhpcy5hcnJheUFsbEF0dGFjay5oYXMoW3gseS50b0xvd2VyQ2FzZSgpXS50b1N0cmluZygpKSApe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IFtib2FyZFgsYm9hcmRZXSA9IHNoaWZ0Q29vcmRpbmF0ZXMoW3gseV0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAwKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMShbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazIoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSAyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMShbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IHRoaXMuYWxsU2hpcHMubGVuZ3RoOyArK2kpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFsbFNoaXBzW2ldWydjb29yZGluYXRlcyddLmluY2x1ZGVzKFt4LHldLnRvU3RyaW5nKCkpPT09dHJ1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAgPSB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxTaGlwc1tpXVsnc2hpcERldGFpbHMnXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWNvcmRlZENvb3JkKCBkYXRhLCBzZXQ9dGhpcy5hcnJheUFsbEF0dGFjayl7XHJcbiAgICAgICAgc2V0LmFkZChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiBzZXQ7XHJcbiAgICAgfVxyXG5cclxuICAgICByZWNvcmRlZE1pc3NlZENvb3JkKCBkYXRhLCBzZXQ9dGhpcy5hcnJheU1pc3NlZCl7XHJcbiAgICAgICAgc2V0LmFkZChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiBzZXQ7XHJcbiAgICAgfSBcclxuXHJcbiAgICBnZXRUb3RhbFN1bmsoKXtcclxuICAgIFxyXG4gICAgICAgIGxldCAgdG90YWxTdW5rID0gdGhpcy5hbGxTaGlwcy5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW1bJ3NoaXBEZXRhaWxzJ10uYmVlblN1bms9PT10cnVlID8gdG90YWwgKyAxIDogdG90YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgIHJldHVybiB0b3RhbFN1bms7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFNuYXBzaG90KCl7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcclxuICAgICAgICBsZXQgdG90YWxTdW5rID0gdGhpcy5nZXRUb3RhbFN1bmsoKTtcclxuXHJcbiAgICAgICAgaWYodG90YWxTdW5rPT09dGhpcy5hbGxTaGlwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gYEFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vua2A7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtZXNzYWdlID0gYFNoaXBzIHRoYXQgaGF2ZSBiZWVuIHN1bms6ICR7dG90YWxTdW5rfSAtIFNoaXBzIGFmbG9hdDogJHt0aGlzLmFsbFNoaXBzLmxlbmd0aC10b3RhbFN1bmt9YDtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQm9hcmQoKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0udmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7R2FtZWJvYXJkfTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuLy8gYSBjbGFzcyBQbGF5ZXJcclxuY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7IFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gdGhpcy5jcmVhdGVHYW1lYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVHYW1lYm9hcmQoKXtcclxuICAgICAgICByZXR1cm4gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtQbGF5ZXJ9OyIsImltcG9ydCB7YWxsQ29vcmRpbmF0ZXNQb3NpYmxlc30gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJyA7XHJcblxyXG5mdW5jdGlvbiByYW5kb21TaGlwcyhhcmcxKXtcclxuICAgIC8qIGFyZzEgaXMgdGhlIHBsYXllckdhbWVib2FyZCBhcmcyIGlzIHRoZSBhcnJheSB3aXRoIGxlbmd0aCovXHJcbiAgIFxyXG4gICBjb25zdCBzaGlwTGVuZ3RoPVs1LDMsNCw2LDQsNV07XHJcbiAgIGNvbnN0IGFycmF5RGlyZWN0aW9uID0gWydsZWZ0LXRvLXJpZ2h0JywndG9wLXRvLWRvd24nXTtcclxuICAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICAgXHJcblxyXG4gICBmb3IgKCBsZXQgaT0wOyBpIDwgc2hpcExlbmd0aC5sZW5ndGg7ICsraSl7XHJcbiAgICBsZXQgc2hpcCA9IG51bGw7IFxyXG5cclxuICAgIHdoaWxlKHNoaXA9PT1udWxsKXtcclxuICAgIGxldCBudW1iZXIgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx0b3RhbENlbGxzLmxlbmd0aCk7XHJcbiAgICBsZXQgY29vcmQgPSAgdG90YWxDZWxsc1tudW1iZXItMV0uc3BsaXQoJywnKTtcclxuICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGFycmF5RGlyZWN0aW9uW3JhbmRvbUludEZyb21JbnRlcnZhbCgxLDIpLTFdO1xyXG4gICAgc2hpcCA9IGFyZzEuZGF0YVNoaXBzKGNvb3JkLGRpcmVjdGlvbixzaGlwTGVuZ3RoW2ldLGkrMSk7XHJcbiAgICB9XHJcbiAgICBhcmcxLnBsYWNlU2hpcHNJblRoZUJvYXJkKCBzaGlwICk7XHJcblxyXG4gICB9XHJcblxyXG5yZXR1cm4gYXJnMTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzKCl7XHJcbiAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICBsZXQgbnVtYmVyID0gcmFuZG9tSW50RnJvbUludGVydmFsKDEsdG90YWxDZWxscy5sZW5ndGgpO1xyXG4gICAgbGV0IGNvb3JkID0gIHRvdGFsQ2VsbHNbbnVtYmVyLTFdLnNwbGl0KCcsJyk7XHJcbiAgICBjb29yZCA9IFtOdW1iZXIoY29vcmRbMF0pLGNvb3JkWzFdXTtcclxuICByZXR1cm4gY29vcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUludEZyb21JbnRlcnZhbChtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbmV4cG9ydCB7cmFuZG9tU2hpcHMsIHJhbmRvbUNvb3JkaW5hdGVzfTsiLCJmdW5jdGlvbiBzY29yZUJvYXJkKGFyZzEsYXJnMixhcmczKXtcclxuICAgIC8qIGFyZzEgaXMgdGhlIGJvYXJkIGRpdiwgYXJnMiBpcyB0aGUgaHVtYW4gcGxheWVyIG9iamVjdCwgYXJnMyBpcyB0aGUgY29tcHV0ZXIgcGxheWVyIG9iamVjdCAqL1xyXG5cclxuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGFyZzEucGFyZW50RWxlbWVudDtcclxuY29uc3QgcGxheWVySHVtYW4gPSBhcmcyO1xyXG5jb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzM7XHJcbmNvbnN0IHNjb3JlQm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG5jb25zdCBodW1hblNjb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnN0IGNvbXB1dGVyU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbnNjb3JlQm9hcmREaXYuY2xhc3NMaXN0LmFkZCgnc2NvcmVCb2FyZCcpO1xyXG5odW1hblNjb3JlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMS8yOycpO1xyXG5odW1hblNjb3JlLnNldEF0dHJpYnV0ZSgnaWQnLCdodW1hbi1zY29yZScpO1xyXG5odW1hblNjb3JlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlJyk7XHJcbmNvbXB1dGVyU2NvcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAyLzM7Jyk7XHJcbmNvbXB1dGVyU2NvcmUuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbXB1dGVyLXNjb3JlJyk7XHJcbmNvbXB1dGVyU2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcclxuXHJcbmNvbnN0IGh1bWFuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmh1bWFuVGl0bGUudGV4dENvbnRlbnQgPSAnQ09NUFVURVIgYXR0YWNrcyc7ICAvKiBpbiB0aGUgaHVtYW4gYm9hcmQgKi9cclxuaHVtYW5UaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6MS8yO2dyaWQtY29sdW1uOjEvMzsnKTtcclxuaHVtYW5UaXRsZS5jbGFzc0xpc3QuYWRkKCdzY29yZVRpdGxlJyk7XHJcblxyXG5jb25zdCBzdWNjZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5zdWNjZXNzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoyLzM7Z3JpZC1jb2x1bW46MS8zOycpO1xyXG5sZXQgcmF0ZSA9IDA7IC8qIGluaWNpYSBlbiAwICovXHJcbnN1Y2Nlc3MudGV4dENvbnRlbnQgPSBgc3VjY2VzcyByYXRlOiAke3JhdGV9JWA7IFxyXG5cclxuY29uc3QgaW1nSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nSDEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0gxLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzSDEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0gxLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVswXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nSDIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjQvNTtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0gyLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzSDIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjQvNTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0gyLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsxXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nSDMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0gzLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzSDMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0gzLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsyXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nSDQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjYvNztncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0g0LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzSDQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjYvNztncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0g0LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVszXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nSDUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjcvODtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0g1LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzSDUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjcvODtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0g1LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs0XVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nSDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNINiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nSDYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0g2LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzSDYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0g2LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs1XVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuXHJcblxyXG5jb25zdCBjb21wdXRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5jb21wdXRlclRpdGxlLnRleHRDb250ZW50ID0gJ0hVTUFOIGF0dGFja3MnOyAgLyogaW4gdGhlIGJvYXJkIGNvbXB1dGVyICovXHJcbmNvbXB1dGVyVGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjEvMjtncmlkLWNvbHVtbjoxLzM7Jyk7XHJcbmNvbXB1dGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2NvcmVUaXRsZScpO1xyXG5cclxuY29uc3Qgc3VjY2Vzc0NvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnN1Y2Nlc3NDb21wLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoyLzM7Z3JpZC1jb2x1bW46MS8zOycpO1xyXG5sZXQgcmF0ZUNvbXAgPSAwOyAvKiBpbmljaWEgZW4gMCAqL1xyXG5zdWNjZXNzQ29tcC50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZUNvbXB9JWA7IFxyXG5cclxuY29uc3QgaW1nQzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MxLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MxLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVswXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjQvNTtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MyLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjQvNTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MyLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsxXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MzLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MzLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsyXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjYvNztncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M0LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjYvNztncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M0LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVszXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjcvODtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M1LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjcvODtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M1LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs0XVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M2LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M2LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs1XVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZUJvYXJkRGl2KTtcclxuc2NvcmVCb2FyZERpdi5hcHBlbmRDaGlsZChodW1hblNjb3JlKTtcclxuc2NvcmVCb2FyZERpdi5hcHBlbmRDaGlsZChjb21wdXRlclNjb3JlKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChodW1hblRpdGxlKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChzdWNjZXNzKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gxKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMik7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gyKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMyk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gzKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINCk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g0KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g1KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINik7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g2KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChjb21wdXRlclRpdGxlKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChzdWNjZXNzQ29tcCk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzEpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzIpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMik7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzMpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMyk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzQpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNCk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzUpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzYpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNik7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtzY29yZUJvYXJkfTsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vZ2FtZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCBhbGxDb29yZGluYXRlc1Bvc2libGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9IGZyb20gJy4vY3JlYXRlLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IGFkZFNoaXBzIH0gZnJvbSAnLi9hZGQtc2hpcHMnO1xyXG5pbXBvcnQgeyByYW5kb21Db29yZGluYXRlcyB9IGZyb20gJy4vcmFuZG9tLXNoaXBzJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHMgfSBmcm9tICcuL3VwZGF0ZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCB9IGZyb20gJy4vdXBkYXRlLWNvbXB1dGVyLWJvYXJkJztcclxuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi9zaG93LWVycm9yJztcclxuaW1wb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vZGVsZXRlLWRpdi1lcnJvcic7XHJcbmltcG9ydCB7IGFkamFjZW50IH0gZnJvbSAnLi9hZGphY2VudCc7XHJcbmltcG9ydCB7IHVwZGF0ZVNjb3JlfSBmcm9tICcuL3VwZGF0ZS1zY29yZSc7XHJcblxyXG5mdW5jdGlvbiBzY3JlZW5Db250cm9sbGVyKGFyZykge1xyXG4gICAgLyogYXJnIGlzIHRoZSBnYW1lIGNvbnRhaW5lciAqL1xyXG5cclxuICAgIGNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpO1xyXG4gICAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTsgICAvLyBmb3IgdGhlIGNvbXB1dGVyJ3MgYXR0YWNrIHB1cnBvc2VcclxuICAgIGxldCBhcnJheUFkamFjZW50ID0gW107ICAgICAgICAvLyBmb3IgdGhlIGNvbXB1dGVyJ3MgYXR0YWNrIHB1cnBvc2VcclxuXHJcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGFyZztcclxuICAgICAgICBjb25zdCB0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHdhaXRUdXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBodW1hbkJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBcclxuICAgICAgICBnYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHR1cm4uY2xhc3NMaXN0LmFkZCgndHVybicpO1xyXG4gICAgICAgIHR1cm4uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xyXG4gICAgICAgIHR1cm5EaXYuY2xhc3NMaXN0LmFkZCgndHVybkRpdicpO1xyXG4gICAgICAgIHdhaXRUdXJuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLWNvbHVtbjo0LzU7Jyk7XHJcbiAgICAgICAgYm9hcmREaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZCgncmVzdWx0Jyk7XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1odW1hbicpO1xyXG4gICAgICAgIGh1bWFuQm9hcmQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7IGdyaWQtY29sdW1uOjEvMicpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0QnV0dG9uJyk7XHJcbiAgICAgICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUkVTRVQgZm9yIE5FVyBHQU1FJztcclxuICAgICAgICBcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNsZWFyIHRoZSBib2FyZFxyXG4gICAgICAgIGJvYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlclBsYXllcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllckNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXHJcbiAgICAgICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICAvLyBBbnl0aGluZyBjbGlja2FibGUgc2hvdWxkIGJlIGEgYnV0dG9uISFcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsLTEpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGh1bWFuQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgLy8gQW55dGhpbmcgY2xpY2thYmxlIHNob3VsZCBiZSBhIGJ1dHRvbiEhXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICAvLyBjcmVhdGUgYSBidXR0b24gZm9yIGFkZCBzaGlwcyBhbmQgZnVuY3Rpb25cclxuICAgICAgICBhZGRpbmdTaGlwcyh0dXJuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdGlhbFNjcmVlbigpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBuZXdlc3QgdmVyc2lvbiBvZiB0aGUgYm9hcmQgYW5kIHBsYXllciB0dXJuXHJcbiAgICAgICAgY29uc3QgYm9hcmRSZWFsID0gZ2FtZS5ib2FyZFJlYWwoKTtcclxuICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZ2FtZS5ib2FyZENvbXB1dGVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEh1bWFuUGxheWVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBnYW1lLmdldENvbXB1dGVyUGxheWVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxib2FyZFJlYWwscGxheWVySHVtYW4pO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLGJvYXJkQ29tcHV0ZXIscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIHVwZGF0ZVNjb3JlKHBsYXllckh1bWFuLHBsYXllckNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICAvLyBEaXNwbGF5IHBsYXllcidzIHR1cm5cclxuICAgICAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gYCR7YWN0aXZlUGxheWVyLnR5cGV9J3MgdHVybi4uLmA7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZS5pc1RoZXJlQVdpbm5lcigpKTtcclxuICAgICAgICAvLyBjaGVjayBhbmQgYXR0YWNrcyBpcyB0aGVyZSBubyB3aW5uZXJcclxuICAgICAgICBsZXQgaXNUaGVyZUFXaW5uZXIgPSBnYW1lLmlzVGhlcmVBV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoKGlzVGhlcmVBV2lubmVyPT09ZmFsc2Upe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlUGxheWVyLnR5cGU9PT0nQ09NUFVURVIgUGxheWVyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRGl2KGJvYXJkRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyQXR0YWNrLCA0MDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIGFjdGl2ZSBwbGF5ZXIgaXMgSHVtYW4gbmVlZCB3YWl0IGZvciBhIGNsaWNrXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gZ2FtZSBvdmVyIC0gZGlzYWJsZSBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBcclxuLy8gYWRkIGEgYWRkLXNoaXBzIEJ1dHRvbiBhbmQgdGhlIGV2ZW50bGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFkZGluZ1NoaXBzKHR1cm4scGxheWVyQ29tcHV0ZXIpe1xyXG4gICAgY29uc3QgYWRkU2hpcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXHJcbiAgICBjb25zdCBhZGRTaGlwc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRTaGlwc0Rpdi5jbGFzc05hbWUgPSAnJztcclxuICAgIGFkZFNoaXBzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdhZGRTaGlwc0RpdicpO1xyXG4gICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LmFkZCgnYWRkc2hpcHMnKTtcclxuICAgIGFkZFNoaXBzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuICAgIGFkZFNoaXBzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgU0hJUFNcIjtcclxuXHJcbiAgICBhZGRTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcnModHVybik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhZGRTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFNoaXBzKGdhbWUsaHVtYW5Cb2FyZCxib2FyZERpdix0dXJuLGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FkZHNoaXBzJyk7XHJcbiAgICAgICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgdHVybi5hcHBlbmRDaGlsZChhZGRTaGlwc0Rpdik7XHJcbiAgICBhZGRTaGlwc0Rpdi5hcHBlbmRDaGlsZChhZGRTaGlwc0J1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGJvYXJkIGNvbXB1dGVyIGZvciBIdW1hbiBhdHRhY2tzXHJcbiAgICAgICAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyQm9hcmQoZSkge1xyXG4gICAgICAgIHN3aXRjaChnYW1lLmdldEFjdGl2ZVBsYXllcigpLnR5cGU9PT0nSFVNQU4gUGxheWVyJyl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBJJ3ZlIGNsaWNrZWQgYSBjb2x1bW4gYW5kIG5vdCB0aGUgZ2FwcyBpbiBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkUm93KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXlSb3VuZChOdW1iZXIoc2VsZWN0ZWRSb3cpLE51bWJlcihzZWxlY3RlZENvbHVtbikpO1xyXG4gICAgICAgICAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3Iod2FpdFR1cm4sJ3dhaXQgeW91ciB0dXJuJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcyw4MDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGEgbWVzc2FnZSB0byBhdm9pZCBjbGljayBpbiBodW1hbiBib2FyZFxyXG4gICAgICAgIGZ1bmN0aW9uIG5vRmlyZVRvRnJpZW5kKCl7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcih3YWl0VHVybiwnQkUgQ0FSRUZVTC4gZG9uXFwndCBzaG9vdCB5b3VyIGFsbGllcycudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcywxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbm9GaXJlVG9GcmllbmQpO1xyXG5cclxuICAgICAgIC8vIHRoaXMgYXR0YWNrJ3MgZnVuY3Rpb24gY29uc2lkZXIgYWRqYWNlbnRzIHdoZW4gZ290IGEgaGl0XHJcbiAgICAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjaygpe1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgbGV0IGFkaiA9IDA7XHJcbiAgICAgICAgbGV0IGNvb3JkID0gW107XHJcbiAgICAgICAgbGV0IGFycmF5QWxsQXR0YWNrID0gZ2FtZS5nZXRIdW1hblBsYXllcigpLmdhbWVib2FyZFsnYXJyYXlBbGxBdHRhY2snXTtcclxuICAgICAgICB3aGlsZSAoIGNoZWNrID09PSB0cnVlKXtcclxuICAgICAgICAgICAgaWYoIGFycmF5QWRqYWNlbnQubGVuZ3RoIT09MCApe1xyXG4gICAgICAgICAgICAgICAgYWRqID0gYXJyYXlBZGphY2VudC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSB0b3RhbENlbGxzLmF0KGFkaikuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGFkaiA9IHRvdGFsQ2VsbHMuaW5kZXhPZihjb29yZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGVjayA9IGFycmF5QWxsQXR0YWNrLmhhcyhjb29yZC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNlbGwgPSBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpO1xyXG4gICAgICAgIGdhbWUucGxheVJvdW5kQ29tcHV0ZXIoY2VsbFswXSxjZWxsWzFdKTtcclxuICAgICAgICAvLyBpZiBnb3QgYSBoaXQgbG9vayBmb3IgYWRqYWNlbnRzXHJcbiAgICAgICAgbGV0IGJvYXJkUmVhbCA9IGdhbWUuYm9hcmRSZWFsKCk7XHJcbiAgICAgICAgaWYoYm9hcmRSZWFsW2NlbGxbMF1dW2NlbGxbMV1dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgIGxldCBhcnJheVRlbXAgPSBhZGphY2VudC5nZXQoYWRqKTtcclxuICAgICAgICAgICAgYXJyYXlUZW1wLm1hcCgoeCkgPT4gYXJyYXlBZGphY2VudC5wdXNoKHgpKTtcclxuICAgICAgICAgICAgaWYoYXJyYXlBZGphY2VudD09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBhcnJheUFkamFjZW50PVtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE1lc3NhZ2UoYWN0aXZlTWVzc2FnZSk7XHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIEVzdGEgZXMgbGEgZnVuY2lvbiBkZSBhdGFxdWUgZGUgY29tcHV0YWRvcmEgdW5pY2FtZW50ZSBhbGVhdG9yaW9cclxuICAgICAgICAvKlxyXG4gICAgICAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjaygpe1xyXG4gICAgICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGFycmF5QWxsQXR0YWNrID0gZ2FtZS5nZXRIdW1hblBsYXllcigpLmdhbWVib2FyZFsnYXJyYXlBbGxBdHRhY2snXTtcclxuICAgICAgICAgICAgd2hpbGUgKCBjaGVjayA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IHJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IGFycmF5QWxsQXR0YWNrLmhhcyhjb29yZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY2VsbCA9IGZyb21Db29yZGluYXRlc3RvQ2VsbChjb29yZCk7XHJcbiAgICAgICAgICAgIGdhbWUucGxheVJvdW5kQ29tcHV0ZXIoY2VsbFswXSxjZWxsWzFdKTtcclxuICAgICAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgICAgICAgICAgdXBkYXRlU2NyZWVuKCk7ICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICAqL1xyXG5cclxuXHJcbiAgICAgICAgLy8gYWRkIGEgcmVzdWx0IGdhbWVcclxuICAgICAgICBjb25zdCByZXN1bHRHYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXN1bHRHYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdE1lc3NhZ2UnKTtcclxuICAgICAgICBjb25zdCBhY3RpdmVNZXNzYWdlID0gZ2FtZS5nZXRHYW1lTWVzc2FnZSgpO1xyXG4gICAgICAgICBjb25zdCBnZXRNZXNzYWdlID0gKGFjdGl2ZU1lc3NhZ2UpID0+IHsgXHJcbiAgICAgICAgICAgIGFjdGl2ZU1lc3NhZ2UgPSBnYW1lLmdldEdhbWVNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdEdhbWVEaXYudGV4dENvbnRlbnQgPSBhY3RpdmVNZXNzYWdlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKHJlc3VsdEdhbWVEaXYpO1xyXG5cclxuICAgICAgICAvLyBhZGQgYSBkaXYgd2l0aCBjb3VudCBkb3duIGZvciBjb21wdXRlciBhdHRhY2sgYW5kIHJlbW92ZSBpdCBcclxuICAgICAgICBmdW5jdGlvbiBhZGREaXYoYXJnKXtcclxuICAgICAgICAgICAgY29uc3QgYXR0YWNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCdhdHRhY2tNZXNzYWdlJyk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7IGdyaWQtY29sdW1uOiAyLzM7IGRpc3BsYXk6ZmxleDsgZmxleC13cmFwOm5vd3JhcDsnKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdpZCcsJ3RleHQnKTtcclxuICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ1RoZSBjb21wdXRlciB3aWxsIGF0dGFjayBvbiAnLnRvVXBwZXJDYXNlKCk7IFxyXG4gICAgICAgICAgICBsZXQgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRleHQxLnNldEF0dHJpYnV0ZSgnaWQnLCdjb3VudCcpO1xyXG4gICAgICAgICAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZm9udC1zaXplOjEuMXJlbTsgY29sb3I6cmVkOycpO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gNDsgXHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2UuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2UuYXBwZW5kQ2hpbGQodGV4dDEpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChjb3VudCwgMTAwMCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50KCl7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgPSBudW1iZXItMTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpLmlubmVyVGV4dCA9IGAgPT4gJHtudW1iZXJ9YDtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50JykuaW5uZXJUZXh0ID0gXCJET05FXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChyZW1vdmVEaXYsMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYXJnLmFwcGVuZENoaWxkKGF0dGFja01lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBjb3VudCBkb3duIG1lc3NhZ2UgZGl2XHJcbiAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZURpdigpe1xyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrTWVzc2FnZScpO1xyXG4gICAgICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIGV2ZW50bGlzdGVuZXIgZm9yIHJlc2V0XHJcbiAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxuZXdEb2MpO1xyXG5cclxuICAgICAgICAgZnVuY3Rpb24gbmV3RG9jKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmREaXYpOyBcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xyXG4gICAgdHVybi5hcHBlbmRDaGlsZCh0dXJuRGl2KTtcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQod2FpdFR1cm4pO1xyXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoaHVtYW5Cb2FyZCk7XHJcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKTtcclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7c2NyZWVuQ29udHJvbGxlcn0iLCIvLyBhIGNsYXNzIFNoaXAgXHJcbmNsYXNzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpeyAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gdmFsdWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSAwO1xyXG4gICAgICAgIHRoaXMuYmVlblN1bmsgPSBmYWxzZTsgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpdChoaXRzPXRoaXMubnVtYmVyT2ZIaXRzKXtcclxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyA9IGhpdHMgKyAxIDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gdGhpcy5pc1N1bmsoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJPZkhpdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlzU3VuayhoaXRzPXRoaXMubnVtYmVyT2ZIaXRzKXtcclxuICAgICAgICBzd2l0Y2goaGl0cz09PXRoaXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZW5TdW5rO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtTaGlwfTtcclxuIiwiZnVuY3Rpb24gc2hvd0Vycm9yKGFyZzEsYXJnMil7XHJcbi8vIGFyZzEgaXMgdGhlIGRpdiAtIGFyZzIgaXMgdGhlIG1lc3NhZ2UgZm9yIHRoZSB0eXBlIG9mIGVycm9yXHJcbiAgICAgIGxldCBpZCA9IGFyZzEuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBpbnB1dEVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgaW5wdXRFcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgaW5wdXRFcnJvci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgIGlucHV0RXJyb3Iuc2V0QXR0cmlidXRlKCdpZCcsYCR7aWR9ZXJyb3JgKTtcclxuICAgICAgIGlucHV0RXJyb3Iuc2V0QXR0cmlidXRlKCAnYXJpYS1saXZlJywncG9saXRlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnRleHRDb250ZW50ID0gYXJnMjtcclxuICAgIFxyXG4gICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGFyZzEucGFyZW50Tm9kZTtcclxuICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFcnJvcik7ICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dFcnJvciB9OyIsImltcG9ydCB7IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGFyZzEsYXJnMixhcmczKXtcclxuICAgXHJcbiAgICBsZXQgYm9hcmREaXYgPSBhcmcxO1xyXG4gICAgbGV0IGJvYXJkQ29udGVudCA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcblxyXG4gICAgY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gICAgXHJcbiAgICBjZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSkgcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gICAgIC8qICAgIHgudGV4dENvbnRlbnQgPSBib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU7ICovXHJcbiAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTEpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnJzsgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbE1pc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGB3YXRlcmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxIaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxubGV0IGFycmF5U2hpcHMgPSBbXTtcclxuICAgIGlmKGFyZzMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYXJyYXlTaGlwcyA9IGFyZzNbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddO1xyXG4gICAgfVxyXG5cclxubGV0IGNvb3JkU2hpcHNTdW5rID0gW107XHJcblxyXG5hcnJheVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHN3aXRjaChlbGVtZW50WydzaGlwRGV0YWlscyddWydiZWVuU3VuayddKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIGVsZW1lbnRbJ2Nvb3JkaW5hdGVzJ10uZm9yRWFjaCggKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBhcnJheUluZGV4Tm9kZUFuZENvb3JkID0gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKTtcclxubGV0IGluZGV4ZXNTdW5rcyA9IFtdO1xyXG5jb29yZFNoaXBzU3Vuay5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgYXJyYXlJbmRleE5vZGVBbmRDb29yZC5mb3JFYWNoKCh4KT0+e1xyXG4gICAgICAgIGlmKHhbMV1bMF09PT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaW5kZXhlc1N1bmtzLnB1c2goeFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmluZGV4ZXNTdW5rcy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICBsZXQgY2VsbCA9IGNlbGxzaW5Cb2FyZFtlbGVtZW50XTtcclxuICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsU3VuaycpO1xyXG4gICBjZWxsLnRleHRDb250ZW50ID0gJ1NVTksnO1xyXG59KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVpbml0aWFsaXplRm9ybWF0Q2VsbHNDb21wQm9hcmQoYXJnKXtcclxuLyogYXJnIGlzIHRoZSBkaXYgd2l0aCB0aGUgYnV0dG9uIGNlbGxzICovXHJcbmxldCBib2FyZERpdiA9IGFyZztcclxubGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5jb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XHJcbmNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuXHJcbmNlbGxzaW5Cb2FyZC5mb3JFYWNoKCgpID0+IHtcclxuICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgXHJcbiAgeC5jbGFzc05hbWUgPSAnJzsgICAgICAgLy8gdG8gY2xlYXIgcHJldmlvdXMgY2xhc3NcclxuICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICB4LnRleHRDb250ZW50ID0gJyc7XHJcbn0pXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHt1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQsIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkfTsiLCJmdW5jdGlvbiB1cGRhdGVTY29yZShhcmcxLGFyZzIpe1xyXG4gLyogYXJnMSBpcyB0aGUgcGxheWVySHVtYW4gIGFyZzIgaXMgdGhlIHBsYXllckNvbXB1dGVyICovXHJcbmNvbnN0IHBsYXllckh1bWFuPSBhcmcxO1xyXG5jb25zdCBwbGF5ZXJDb21wdXRlcj0gYXJnMjtcclxuXHJcbi8vIHVwZGF0ZSB0aGUgaHVtYW4gc2NvcmVcclxuY29uc3QgaHVtYW5TY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbi1zY29yZScpO1xyXG5jb25zdCBwSHVtYW5TY29yZSA9IGh1bWFuU2NvcmUucXVlcnlTZWxlY3RvckFsbCgncGljdHVyZScpO1xyXG5jb25zdCB0SHVtYW5TY29yZSA9IGh1bWFuU2NvcmUucXVlcnlTZWxlY3RvckFsbCgncCcpO1xyXG5cclxuY29uc3QgcGljdHVyZXNJbkh1bWFuU2NvcmUgPSBbLi4ucEh1bWFuU2NvcmVdO1xyXG5jb25zdCBpdGVyYXRvclAgPSBwaWN0dXJlc0luSHVtYW5TY29yZS5lbnRyaWVzKCk7XHJcblxyXG5jb25zdCB0ZXh0SW5IdW1hblNjb3JlID0gWy4uLnRIdW1hblNjb3JlXTtcclxuY29uc3QgaXRlcmF0b3JUID0gdGV4dEluSHVtYW5TY29yZS5lbnRyaWVzKCk7XHJcblxyXG5waWN0dXJlc0luSHVtYW5TY29yZS5mb3JFYWNoKCgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yUC5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgICBsZXQgeCA9IGluZGV4WzFdOyBcclxuICAgIGxldCBzdW5rID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdXVsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXTtcclxuICAgIHN3aXRjaChzdW5rPT09dHJ1ZSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICB4LmNsYXNzTmFtZT0nJztcclxuICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdzaGlwU3VuaycpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSlcclxuXHJcbnRleHRJbkh1bWFuU2NvcmUuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvclQubmV4dCgpLnZhbHVlO1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTtcclxuICAgIHN3aXRjaCAoaW5kZXhbMF09PT0xKSB7XHJcbiAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgaWYgKHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF0ZSA9IE1hdGgudHJ1bmMoKHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgIC0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhcnJheU1pc3NlZCddLnNpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgIC9wbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZSoxMDApO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZX0lYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGluZGV4WzBdID4gMSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdLTJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgIE9GICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdLTJdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KVxyXG5cclxuLy8gdXBkYXRlIHRoZSBjb21wdXRlciBzY29yZVxyXG5cclxuY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1zY29yZScpO1xyXG5jb25zdCBwQ29tcHV0ZXJTY29yZSA9IGNvbXB1dGVyU2NvcmUucXVlcnlTZWxlY3RvckFsbCgncGljdHVyZScpO1xyXG5jb25zdCB0Q29tcHV0ZXJTY29yZSA9IGNvbXB1dGVyU2NvcmUucXVlcnlTZWxlY3RvckFsbCgncCcpO1xyXG5cclxuY29uc3QgcGljdHVyZXNJbkNvbXB1dGVyU2NvcmUgPSBbLi4ucENvbXB1dGVyU2NvcmVdO1xyXG5jb25zdCBpdGVyYXRvckNQID0gcGljdHVyZXNJbkNvbXB1dGVyU2NvcmUuZW50cmllcygpO1xyXG5cclxuY29uc3QgdGV4dEluQ29tcHV0ZXJTY29yZSA9IFsuLi50Q29tcHV0ZXJTY29yZV07XHJcbmNvbnN0IGl0ZXJhdG9yQ1QgPSB0ZXh0SW5Db21wdXRlclNjb3JlLmVudHJpZXMoKTtcclxuXHJcbnBpY3R1cmVzSW5Db21wdXRlclNjb3JlLmZvckVhY2goKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gaXRlcmF0b3JDUC5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgICBsZXQgeCA9IGluZGV4WzFdOyBcclxuICAgIGxldCBzdW5rID0gcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdXVsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXTtcclxuICAgIHN3aXRjaChzdW5rPT09dHJ1ZSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgIHguY2xhc3NOYW1lPScnO1xyXG4gICAgICAgIHguY2xhc3NMaXN0LmFkZCgnc2hpcFN1bmsnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbn0pXHJcblxyXG50ZXh0SW5Db21wdXRlclNjb3JlLmZvckVhY2goKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gaXRlcmF0b3JDVC5uZXh0KCkudmFsdWU7XHJcbiAgICBsZXQgeCA9IGluZGV4WzFdO1xyXG4gICAgc3dpdGNoIChpbmRleFswXT09PTEpIHtcclxuICAgICAgICBjYXNlIHRydWU6e1xyXG4gICAgICAgICAgICBpZiAocGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhcnJheUFsbEF0dGFjayddLnNpemUgPiAwKXtcclxuICAgICAgICAgICAgICAgIGxldCByYXRlID0gTWF0aC50cnVuYygocGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhcnJheUFsbEF0dGFjayddLnNpemVcclxuICAgICAgICAgICAgICAgICAgICAgLSBwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FycmF5TWlzc2VkJ10uc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICAgL3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplKjEwMCk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYHN1Y2Nlc3MgcmF0ZTogJHtyYXRlfSVgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN3aXRjaCAoaW5kZXhbMF0gPiAxKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUUzogJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11baW5kZXhbMF0tMl1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11baW5kZXhbMF0tMl1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pXHJcblxyXG59XHJcblxyXG5leHBvcnQge3VwZGF0ZVNjb3JlfTsiLCJpbXBvcnQgeyByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzKGFyZzEsYXJnMixhcmczKXtcclxuXHJcbiAgICBsZXQgYm9hcmREaXYgPSBhcmcxO1xyXG4gICAgbGV0IGJvYXJkQ29udGVudCA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcblxyXG4gICAgY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gICAgXHJcbiAgICBjZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIC8qIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgXHJcbiAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTEpeyAgIFxyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxTaGlwQWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgU0hJUGA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbE1pc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGB3YXRlcmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxIaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgYXJyYXlTaGlwcyA9IFtdO1xyXG4gICAgaWYoYXJnMyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBhcnJheVNoaXBzID0gYXJnM1snZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ107XHJcbiAgICB9XHJcblxyXG5sZXQgY29vcmRTaGlwc1N1bmsgPSBbXTtcclxuXHJcbmFycmF5U2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgc3dpdGNoKGVsZW1lbnRbJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ10pe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgZWxlbWVudFsnY29vcmRpbmF0ZXMnXS5mb3JFYWNoKCAoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29vcmRTaGlwc1N1bmsucHVzaCh4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGV0IGFycmF5SW5kZXhOb2RlQW5kQ29vcmQgPSByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpO1xyXG5sZXQgaW5kZXhlc1N1bmtzID0gW107XHJcbmNvb3JkU2hpcHNTdW5rLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICBhcnJheUluZGV4Tm9kZUFuZENvb3JkLmZvckVhY2goKHgpPT57XHJcbiAgICAgICAgaWYoeFsxXVswXT09PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICBpbmRleGVzU3Vua3MucHVzaCh4WzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuaW5kZXhlc1N1bmtzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgIGNvbnNvbGUubG9nKGNlbGxzaW5Cb2FyZFtlbGVtZW50XSk7XHJcbiAgIGxldCBjZWxsID0gY2VsbHNpbkJvYXJkW2VsZW1lbnRdO1xyXG4gICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGxTdW5rJyk7XHJcbiAgIGNlbGwudGV4dENvbnRlbnQgPSAnU1VOSyc7XHJcbn0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZWluaXRpYWxpemVGb3JtYXRDZWxscyhhcmcpe1xyXG4gLyogYXJnIGlzIHRoZSBkaXYgd2l0aCB0aGUgYnV0dG9uIGNlbGxzICovXHJcbiBsZXQgYm9hcmREaXYgPSBhcmc7XHJcbiBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcbiBjb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XHJcbiBjb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcbiBcclxuIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKCgpID0+IHtcclxuICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgXHJcbiAgIHguY2xhc3NOYW1lID0gJyc7ICAgICAgIC8vIHRvIGNsZWFyIHByZXZpb3VzIGNsYXNzXHJcbiAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiB9KVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7dXBkYXRlQ2VsbHMsIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzfTsiLCJpbXBvcnQgJy4vc3R5bGUtYmFzZS5jc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgc2NyZWVuQ29udHJvbGxlciB9IGZyb20gJy4vY29tcG9uZW50cy9zY3JlZW4tY29udHJvbGxlci5qcyc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7IFxyXG4gICAgXHJcbiAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyJyk7XHJcbiAgICBzY3JlZW5Db250cm9sbGVyKGdhbWVDb250YWluZXIpO1xyXG5cclxuICAgXHJcbiAgICByZXR1cm4gZ2FtZUNvbnRhaW5lcjtcclxuICB9XHJcbiAgXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
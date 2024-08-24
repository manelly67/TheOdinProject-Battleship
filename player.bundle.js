"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["player"],{

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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/player.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYXV4aWxpYXJ5LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm93cyA9IDEzO1xyXG5jb25zdCBjb2x1bW5zID0gMTI7XHJcblxyXG5jb25zdCBhbGZfeSA9IFtcclxuICAgICdhJywnYicsJ2MnLCdkJywnZScsJ2YnLCdnJywnaCcsJ2knLCdqJywnaycsJ2wnXHJcbiAgICAgXTtcclxuXHJcbmZ1bmN0aW9uIHNoaWZ0Q29vcmRpbmF0ZXMoW3ZhbHVlX3gsdmFsdWVfeV0pe1xyXG4gICAgICAgLyogIGxldCBbeCx5XSA9IFsxLCdhJ107ICAqL1xyXG4gICAgICAgIHN3aXRjaChhbGZfeS5pbmNsdWRlcyh2YWx1ZV95LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYWxmX3kuaW5kZXhPZih2YWx1ZV95LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbIHZhbHVlX3gtMSwgaW5kZXggXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sa2V5KXtcclxubGV0IGFycmF5T2ZDb29yZGluYXRlcyA9IFtdO1xyXG5sZXQgaW5pdGlhbFggPSB4O1xyXG5sZXQgaW5pdGlhbFkgPSBhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBzd2l0Y2goZGlyZWN0aW9uPT09J2xlZnQtdG8tcmlnaHQnKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgaWYoYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpICsga2V5ID4gY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgeCwgYWxmX3lbaW5pdGlhbFkgKyBpXSBdKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb249PT0ndG9wLXRvLWRvd24nKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgaWYoaW5pdGlhbFggKyBrZXktMSA+IHJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyBpbml0aWFsWCArIGksIHkgXSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29vcmRpbmF0ZXMoW3gseV0pe1xyXG4gICAgaWYoeCA+IDAgJiYgeCA8PSByb3dzICYmIGFsZl95LmluY2x1ZGVzKHkudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKXtcclxuICAvKiAgIGxldCBbeCx5XSA9IFsxLCdhJ107ICAgICAqL1xyXG4gICAgcmV0dXJuIFsgcm93ICsgMSwgYWxmX3lbY29sdW1uXSBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpe1xyXG4gICAvKiAgbGV0IFtyb3csY29sdW1uXSA9IFswLDBdOyAqL1xyXG4gICAgbGV0IHJvd1NlbGVjdGVkID0gY29vcmRbMF0tMTtcclxuICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9IGFsZl95LmluZGV4T2YoY29vcmRbMV0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIocm93U2VsZWN0ZWQpLCBOdW1iZXIoY29sdW1uU2VsZWN0ZWQpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpIHtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIGFycmF5LnB1c2goYCR7aSsxfSwke2FsZl95W2pdfWApO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKXtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgbGV0IG49IC0xO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIG4gPSBuICsgMTtcclxuICAgICAgICBhcnJheS5wdXNoKFtuLFtgJHtpKzF9LCR7YWxmX3lbal19YF1dKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJvd3MsIGNvbHVtbnMsIGFsZl95LCBzaGlmdENvb3JkaW5hdGVzLCBhc3NpZ25Mb2NhdGlvbiwgXHJcbiAgICBjaGVja0Nvb3JkaW5hdGVzLCBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMsIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMsXHJcbiAgICAgICAgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9OyIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xyXG5pbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBzaGlmdENvb3JkaW5hdGVzLCBhc3NpZ25Mb2NhdGlvbiwgY2hlY2tDb29yZGluYXRlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcblxyXG5cclxuLy8gYSBjbGFzcyBHYW1lYm9hcmRcclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuZ2V0Qm9hcmQocm93cywgY29sdW1ucyk7XHJcbiAgICAgICAgdGhpcy5hcnJheU1pc3NlZCA9IG5ldyBTZXQoW10pO1xyXG4gICAgICAgIHRoaXMuYXJyYXlBbGxBdHRhY2sgPSBuZXcgU2V0KFtdKTtcclxuICAgICAgICB0aGlzLmFsbFNoaXBzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9hcmQoIHJvd3MsIGNvbHVtbnMsIGJvYXJkPVtdKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBib2FyZFtpXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2godGhpcy5jZWxsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2VsbCgpe1xyXG4gICBcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHt2YWx1ZX07ICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRhdGFTaGlwcyhbeCx5XSxkaXJlY3Rpb24sc2l6ZSxzaGlwTnVtYmVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IGFzc2lnbkxvY2F0aW9uKFt4LHldLGRpcmVjdGlvbixzaXplKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihzaGlwQ29vcmRpbmF0ZXM9PT1udWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBub3RBdmFpbGFibGUgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgKHgpID0+IHRoaXMuYm9hcmRbc2hpZnRDb29yZGluYXRlcyh4KVswXV1bc2hpZnRDb29yZGluYXRlcyh4KVsxXV0udmFsdWUgPT09IDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAgKG5vdEF2YWlsYWJsZS5pbmNsdWRlcyh0cnVlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlc1RvU3RyaW5nID0gc2hpcENvb3JkaW5hdGVzLm1hcCgoeCkgPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgbGV0IG9uZVNoaXAgPSB7IFxyXG4gICAgICAgICAgICAgICAgJ3NoaXBOdW1iZXInOnNoaXBOdW1iZXIsIFxyXG4gICAgICAgICAgICAgICAgJ3NoaXBEZXRhaWxzJzogbmV3IFNoaXAoc2l6ZSksXHJcbiAgICAgICAgICAgICAgICAnY29vcmRpbmF0ZXMnOiBzaGlwQ29vcmRpbmF0ZXNUb1N0cmluZ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKG9uZVNoaXApO1xyXG4gICAgICAgICAgICByZXR1cm4gb25lU2hpcDtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcHNJblRoZUJvYXJkKCBvbmVTaGlwICl7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gb25lU2hpcFsnY29vcmRpbmF0ZXMnXTtcclxuICAgICAgICBsZXQgcmV2ZXJzZVN0cmluZyA9IGFycmF5Lm1hcCgoeCk9PiB4LnNwbGl0KCcsJykpO1xyXG4gICAgICAgIGxldCBhcnJheUluQm9hcmQgPSByZXZlcnNlU3RyaW5nLm1hcCggKHZhbHVlcykgPT4gc2hpZnRDb29yZGluYXRlcyh2YWx1ZXMpKTtcclxuICAgICAgICBhcnJheUluQm9hcmQubWFwKChbeCx5XSkgPT4gdGhpcy5ib2FyZFt4XVt5XS52YWx1ZSA9IDEgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVjb3JkZWRBdHRhY2soIFt4LHldLCBcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazE9KHZhbHVlKT0+dGhpcy5yZWNvcmRlZENvb3JkKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazI9KHZhbHVlKT0+dGhpcy5yZWNvcmRlZE1pc3NlZENvb3JkKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKXsgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoIWNoZWNrQ29vcmRpbmF0ZXMoW3gseV0pIHx8IHRoaXMuYXJyYXlBbGxBdHRhY2suaGFzKFt4LHkudG9Mb3dlckNhc2UoKV0udG9TdHJpbmcoKSkgKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBbYm9hcmRYLGJvYXJkWV0gPSBzaGlmdENvb3JkaW5hdGVzKFt4LHldKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCh0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazEoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2syKFt4LHldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID0gMjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazEoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCB0aGlzLmFsbFNoaXBzLmxlbmd0aDsgKytpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hbGxTaGlwc1tpXVsnY29vcmRpbmF0ZXMnXS5pbmNsdWRlcyhbeCx5XS50b1N0cmluZygpKT09PXRydWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwID0gdGhpcy5hbGxTaGlwc1tpXVsnc2hpcERldGFpbHMnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsU2hpcHNbaV1bJ3NoaXBEZXRhaWxzJ10gPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb3JkZWRDb29yZCggZGF0YSwgc2V0PXRoaXMuYXJyYXlBbGxBdHRhY2spe1xyXG4gICAgICAgIHNldC5hZGQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgIH1cclxuXHJcbiAgICAgcmVjb3JkZWRNaXNzZWRDb29yZCggZGF0YSwgc2V0PXRoaXMuYXJyYXlNaXNzZWQpe1xyXG4gICAgICAgIHNldC5hZGQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgIH0gXHJcblxyXG4gICAgZ2V0VG90YWxTdW5rKCl7XHJcbiAgICBcclxuICAgICAgICBsZXQgIHRvdGFsU3VuayA9IHRoaXMuYWxsU2hpcHMucmVkdWNlKCh0b3RhbCwgY3VycmVudEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtWydzaGlwRGV0YWlscyddLmJlZW5TdW5rPT09dHJ1ZSA/IHRvdGFsICsgMSA6IHRvdGFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICByZXR1cm4gdG90YWxTdW5rO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRTbmFwc2hvdCgpe1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XHJcbiAgICAgICAgbGV0IHRvdGFsU3VuayA9IHRoaXMuZ2V0VG90YWxTdW5rKCk7XHJcblxyXG4gICAgICAgIGlmKHRvdGFsU3Vuaz09PXRoaXMuYWxsU2hpcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IGBBbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmtgO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IGBTaGlwcyB0aGF0IGhhdmUgYmVlbiBzdW5rOiAke3RvdGFsU3Vua30gLSBTaGlwcyBhZmxvYXQ6ICR7dGhpcy5hbGxTaGlwcy5sZW5ndGgtdG90YWxTdW5rfWA7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZUJvYXJkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQge0dhbWVib2FyZH07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbi8vIGEgY2xhc3MgUGxheWVyXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWUpeyBcclxuICAgICAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IHRoaXMuY3JlYXRlR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2FtZWJvYXJkKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7UGxheWVyfTsiLCIvLyBhIGNsYXNzIFNoaXAgXHJcbmNsYXNzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpeyAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gdmFsdWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSAwO1xyXG4gICAgICAgIHRoaXMuYmVlblN1bmsgPSBmYWxzZTsgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpdChoaXRzPXRoaXMubnVtYmVyT2ZIaXRzKXtcclxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyA9IGhpdHMgKyAxIDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gdGhpcy5pc1N1bmsoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJPZkhpdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlzU3VuayhoaXRzPXRoaXMubnVtYmVyT2ZIaXRzKXtcclxuICAgICAgICBzd2l0Y2goaGl0cz09PXRoaXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZW5TdW5rO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtTaGlwfTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
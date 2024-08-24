"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["gameController"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/game-controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hdXhpbGlhcnktZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm93cyA9IDEzO1xyXG5jb25zdCBjb2x1bW5zID0gMTI7XHJcblxyXG5jb25zdCBhbGZfeSA9IFtcclxuICAgICdhJywnYicsJ2MnLCdkJywnZScsJ2YnLCdnJywnaCcsJ2knLCdqJywnaycsJ2wnXHJcbiAgICAgXTtcclxuXHJcbmZ1bmN0aW9uIHNoaWZ0Q29vcmRpbmF0ZXMoW3ZhbHVlX3gsdmFsdWVfeV0pe1xyXG4gICAgICAgLyogIGxldCBbeCx5XSA9IFsxLCdhJ107ICAqL1xyXG4gICAgICAgIHN3aXRjaChhbGZfeS5pbmNsdWRlcyh2YWx1ZV95LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYWxmX3kuaW5kZXhPZih2YWx1ZV95LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbIHZhbHVlX3gtMSwgaW5kZXggXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sa2V5KXtcclxubGV0IGFycmF5T2ZDb29yZGluYXRlcyA9IFtdO1xyXG5sZXQgaW5pdGlhbFggPSB4O1xyXG5sZXQgaW5pdGlhbFkgPSBhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBzd2l0Y2goZGlyZWN0aW9uPT09J2xlZnQtdG8tcmlnaHQnKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgaWYoYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpICsga2V5ID4gY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgeCwgYWxmX3lbaW5pdGlhbFkgKyBpXSBdKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb249PT0ndG9wLXRvLWRvd24nKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgaWYoaW5pdGlhbFggKyBrZXktMSA+IHJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyBpbml0aWFsWCArIGksIHkgXSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29vcmRpbmF0ZXMoW3gseV0pe1xyXG4gICAgaWYoeCA+IDAgJiYgeCA8PSByb3dzICYmIGFsZl95LmluY2x1ZGVzKHkudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKXtcclxuICAvKiAgIGxldCBbeCx5XSA9IFsxLCdhJ107ICAgICAqL1xyXG4gICAgcmV0dXJuIFsgcm93ICsgMSwgYWxmX3lbY29sdW1uXSBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpe1xyXG4gICAvKiAgbGV0IFtyb3csY29sdW1uXSA9IFswLDBdOyAqL1xyXG4gICAgbGV0IHJvd1NlbGVjdGVkID0gY29vcmRbMF0tMTtcclxuICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9IGFsZl95LmluZGV4T2YoY29vcmRbMV0udG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgcmV0dXJuIFtOdW1iZXIocm93U2VsZWN0ZWQpLCBOdW1iZXIoY29sdW1uU2VsZWN0ZWQpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpIHtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIGFycmF5LnB1c2goYCR7aSsxfSwke2FsZl95W2pdfWApO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKXtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgbGV0IG49IC0xO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIG4gPSBuICsgMTtcclxuICAgICAgICBhcnJheS5wdXNoKFtuLFtgJHtpKzF9LCR7YWxmX3lbal19YF1dKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJvd3MsIGNvbHVtbnMsIGFsZl95LCBzaGlmdENvb3JkaW5hdGVzLCBhc3NpZ25Mb2NhdGlvbiwgXHJcbiAgICBjaGVja0Nvb3JkaW5hdGVzLCBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMsIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMsXHJcbiAgICAgICAgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9OyIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IGZyb21DZWxsdG9Db29yZGluYXRlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcihcclxuICAgICAgICBwbGF5ZXJSZWFsID0gXCJIVU1BTiBQbGF5ZXJcIixcclxuICAgICAgICBwbGF5ZXJDb21wdXRlciA9IFwiQ09NUFVURVIgUGxheWVyXCIsXHJcbiAgICAgICAgd2lubmVyID0gZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZSA9ICcnICl7XHJcbiAgICBcclxuICAgICAgICBsZXQgcGxheWVycyA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyUmVhbClcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyQ29tcHV0ZXIpXHJcbiAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHRoZSBwbGF5ZXIgZG9lc250IGNoYW5nZSAqL1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogc3dpdGNoIHBsYXllciovXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07XHJcbiAgICAgICAgICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xyXG5cclxuICAgICAgICAgICBjb25zdCBib2FyZFJlYWwgPSAoKSA9PiBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuICAgICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gKCkgPT4gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGdldENvbXB1dGVyUGxheWVyID0gKCkgPT4gcGxheWVyc1sxXTtcclxuICAgICAgICAgICBjb25zdCBnZXRIdW1hblBsYXllciA9ICgpID0+IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGlzVGhlcmVBV2lubmVyID0gKCkgPT4gd2lubmVyO1xyXG5cclxuICAgIGNvbnN0IHByaW50TmV3Um91bmQgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgYm9hcmRSZWFsKCk7XHJcbiAgICAgICAgICAgIGJvYXJkQ29tcHV0ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgIGNhc2UgdHJ1ZTogICBcclxuICAgICAgICAgICAgICAgbWVzc2FnZSA9ICBnZXRBY3RpdmVQbGF5ZXIoKS50eXBlICsgJyBXT04nOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnJzsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07IFxyXG4gICAgICAvKiAgY29uc29sZS5sb2cobWVzc2FnZSk7ICAqLyAgIFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZ2V0R2FtZU1lc3NhZ2UgPSAoKSA9PiBtZXNzYWdlOyAgICBcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXS5nZXRUb3RhbFN1bmsoKSA9PT0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ10ubGVuZ3RoICl7XHJcbiAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIHBsYXllcnNbMV1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4geyBcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xyXG4gICAgICAgIC8qIHRoaXMgcmVzZXQgaXMgbm90IGJlZW4gdXNlZCAqL1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGxheVJvdW5kID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBpZiAoIHdpbm5lciA9PT0gdHJ1ZSApeyBcclxuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKTtcclxuICAgICAgICAgICAgbGV0IGdhbWVib2FyZCA9IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXlSb3VuZENvbXB1dGVyID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAvKiBjb25zb2xlLmxvZygnYWN0aXZhbmRvIGp1ZWdvJyk7ICovXHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCBib2FyZCApIDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3BsYXlSb3VuZCxwbGF5Um91bmRDb21wdXRlciwgZ2V0QWN0aXZlUGxheWVyLCBcclxuICAgICAgICBnZXRHYW1lTWVzc2FnZSwgYm9hcmRSZWFsLCBib2FyZENvbXB1dGVyLCByZXNldEdhbWUsXHJcbiAgICAgICAgIGdldENvbXB1dGVyUGxheWVyLCBnZXRIdW1hblBsYXllciwgaXNUaGVyZUFXaW5uZXJ9O1xyXG59XHJcblxyXG5leHBvcnQge2dhbWVDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIGNoZWNrQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5cclxuXHJcbi8vIGEgY2xhc3MgR2FtZWJvYXJkXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdldEJvYXJkKHJvd3MsIGNvbHVtbnMpO1xyXG4gICAgICAgIHRoaXMuYXJyYXlNaXNzZWQgPSBuZXcgU2V0KFtdKTtcclxuICAgICAgICB0aGlzLmFycmF5QWxsQXR0YWNrID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvYXJkKCByb3dzLCBjb2x1bW5zLCBib2FyZD1bXSl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKHRoaXMuY2VsbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbGwoKXtcclxuICAgXHJcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7dmFsdWV9OyAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBkYXRhU2hpcHMoW3gseV0sZGlyZWN0aW9uLHNpemUsc2hpcE51bWJlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sc2l6ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoc2hpcENvb3JkaW5hdGVzPT09bnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgbm90QXZhaWxhYmxlID0gc2hpcENvb3JkaW5hdGVzLm1hcChcclxuICAgICAgICAgICAgICAgICh4KSA9PiB0aGlzLmJvYXJkW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMF1dW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMV1dLnZhbHVlID09PSAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgIChub3RBdmFpbGFibGUuaW5jbHVkZXModHJ1ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXNUb1N0cmluZyA9IHNoaXBDb29yZGluYXRlcy5tYXAoKHgpID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGxldCBvbmVTaGlwID0geyBcclxuICAgICAgICAgICAgICAgICdzaGlwTnVtYmVyJzpzaGlwTnVtYmVyLCBcclxuICAgICAgICAgICAgICAgICdzaGlwRGV0YWlscyc6IG5ldyBTaGlwKHNpemUpLFxyXG4gICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogc2hpcENvb3JkaW5hdGVzVG9TdHJpbmdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaChvbmVTaGlwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9uZVNoaXA7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzSW5UaGVCb2FyZCggb25lU2hpcCApe1xyXG4gICAgICAgIGxldCBhcnJheSA9IG9uZVNoaXBbJ2Nvb3JkaW5hdGVzJ107XHJcbiAgICAgICAgbGV0IHJldmVyc2VTdHJpbmcgPSBhcnJheS5tYXAoKHgpPT4geC5zcGxpdCgnLCcpKTtcclxuICAgICAgICBsZXQgYXJyYXlJbkJvYXJkID0gcmV2ZXJzZVN0cmluZy5tYXAoICh2YWx1ZXMpID0+IHNoaWZ0Q29vcmRpbmF0ZXModmFsdWVzKSk7XHJcbiAgICAgICAgYXJyYXlJbkJvYXJkLm1hcCgoW3gseV0pID0+IHRoaXMuYm9hcmRbeF1beV0udmFsdWUgPSAxICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlY29yZGVkQXR0YWNrKCBbeCx5XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2syPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRNaXNzZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl7ICAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKCFjaGVja0Nvb3JkaW5hdGVzKFt4LHldKSB8fCB0aGlzLmFycmF5QWxsQXR0YWNrLmhhcyhbeCx5LnRvTG93ZXJDYXNlKCldLnRvU3RyaW5nKCkpICl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgW2JvYXJkWCxib2FyZFldID0gc2hpZnRDb29yZGluYXRlcyhbeCx5XSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMihbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgdGhpcy5hbGxTaGlwcy5sZW5ndGg7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYWxsU2hpcHNbaV1bJ2Nvb3JkaW5hdGVzJ10uaW5jbHVkZXMoW3gseV0udG9TdHJpbmcoKSk9PT10cnVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCA9IHRoaXMuYWxsU2hpcHNbaV1bJ3NoaXBEZXRhaWxzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddID0gc2hpcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY29yZGVkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5QWxsQXR0YWNrKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG4gICAgIHJlY29yZGVkTWlzc2VkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5TWlzc2VkKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9IFxyXG5cclxuICAgIGdldFRvdGFsU3Vuaygpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0ICB0b3RhbFN1bmsgPSB0aGlzLmFsbFNoaXBzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbVsnc2hpcERldGFpbHMnXS5iZWVuU3Vuaz09PXRydWUgPyB0b3RhbCArIDEgOiB0b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VuaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U25hcHNob3QoKXtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIGxldCB0b3RhbFN1bmsgPSB0aGlzLmdldFRvdGFsU3VuaygpO1xyXG5cclxuICAgICAgICBpZih0b3RhbFN1bms9PT10aGlzLmFsbFNoaXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rYDtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgU2hpcHMgdGhhdCBoYXZlIGJlZW4gc3VuazogJHt0b3RhbFN1bmt9IC0gU2hpcHMgYWZsb2F0OiAke3RoaXMuYWxsU2hpcHMubGVuZ3RoLXRvdGFsU3Vua31gO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVCb2FyZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtHYW1lYm9hcmR9OyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG4vLyBhIGNsYXNzIFBsYXllclxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgXHJcbiAgICAgICAgdGhpcy50eXBlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWVib2FyZCgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1BsYXllcn07IiwiLy8gYSBjbGFzcyBTaGlwIFxyXG5jbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgICBcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbHVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gMDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gZmFsc2U7IFxyXG4gICAgICB9XHJcblxyXG4gICAgICBoaXQoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSBoaXRzICsgMSA7XHJcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRoaXMuaXNTdW5rKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZIaXRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpc1N1bmsoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgc3dpdGNoKGhpdHM9PT10aGlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVlblN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7U2hpcH07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
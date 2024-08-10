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
    
    let [x,y] = [1,'a'];

        switch(alf_y.includes(value_y.toLowerCase())){
                case true:
                    let index = alf_y.indexOf(value_y.toLowerCase());
                    return [x,y] = [ value_x-1, index];
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
    let [x,y] = [1,'a'];
        
        return [x,y] = [ row + 1, alf_y[column] ];
}

function fromCoordinatestoCell(coord){
    let [row,column] = [0,0];
    let rowSelected = coord[0]-1;
    let columnSelected = alf_y.indexOf(coord[1].toLowerCase())
        return [row,column] = [Number(rowSelected), Number(columnSelected)];
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
        console.log(message);         
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
            let board = players[1]['gameboard']['board'];   
            gameboard.recordedAttack(coord);
           

        checkForWinner();
        switchPlayerTurn();
        printNewRound();
        }
        return ( board ) ;
    }

    const playRoundComputer = (row,column) => {
        let board = [];
        console.log('activando juego');
        if ( winner === true ){ 
            resetGame();
        }else{
            let coord = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.fromCelltoCoordinates)(row,column);
            let gameboard = players[0]['gameboard'];
            let board = players[0]['gameboard']['board'];   
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
                        case true:
                        
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
        let totalSunk = this.getTotalSunk();
        let message = '';

        if(totalSunk===this.allShips.length){
            return message = `All your ships have been sunk`;
        }else{
            return  message = `Ships that have been sunk: ${totalSunk} - Ships afloat: ${this.allShips.length-totalSunk}`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hdXhpbGlhcnktZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm93cyA9IDEzO1xyXG5jb25zdCBjb2x1bW5zID0gMTI7XHJcblxyXG5jb25zdCBhbGZfeSA9IFtcclxuICAgICdhJywnYicsJ2MnLCdkJywnZScsJ2YnLCdnJywnaCcsJ2knLCdqJywnaycsJ2wnXHJcbiAgICAgXTtcclxuXHJcbmZ1bmN0aW9uIHNoaWZ0Q29vcmRpbmF0ZXMoW3ZhbHVlX3gsdmFsdWVfeV0pe1xyXG4gICAgXHJcbiAgICBsZXQgW3gseV0gPSBbMSwnYSddO1xyXG5cclxuICAgICAgICBzd2l0Y2goYWxmX3kuaW5jbHVkZXModmFsdWVfeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYWxmX3kuaW5kZXhPZih2YWx1ZV95LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbeCx5XSA9IFsgdmFsdWVfeC0xLCBpbmRleF07XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLGtleSl7XHJcbmxldCBhcnJheU9mQ29vcmRpbmF0ZXMgPSBbXTtcclxubGV0IGluaXRpYWxYID0geDtcclxubGV0IGluaXRpYWxZID0gYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgc3dpdGNoKGRpcmVjdGlvbj09PSdsZWZ0LXRvLXJpZ2h0Jyl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgIGlmKGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKSArIGtleSA+IGNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIHgsIGFsZl95W2luaXRpYWxZICsgaV0gXSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uPT09J3RvcC10by1kb3duJyl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGlmKGluaXRpYWxYICsga2V5LTEgPiByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgaW5pdGlhbFggKyBpLCB5IF0pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0Nvb3JkaW5hdGVzKFt4LHldKXtcclxuICAgIGlmKHggPiAwICYmIHggPD0gcm93cyAmJiBhbGZfeS5pbmNsdWRlcyh5LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbil7XHJcbiAgICBsZXQgW3gseV0gPSBbMSwnYSddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBbeCx5XSA9IFsgcm93ICsgMSwgYWxmX3lbY29sdW1uXSBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpe1xyXG4gICAgbGV0IFtyb3csY29sdW1uXSA9IFswLDBdO1xyXG4gICAgbGV0IHJvd1NlbGVjdGVkID0gY29vcmRbMF0tMTtcclxuICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9IGFsZl95LmluZGV4T2YoY29vcmRbMV0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICByZXR1cm4gW3Jvdyxjb2x1bW5dID0gW051bWJlcihyb3dTZWxlY3RlZCksIE51bWJlcihjb2x1bW5TZWxlY3RlZCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxDb29yZGluYXRlc1Bvc2libGVzKCkge1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChgJHtpKzF9LCR7YWxmX3lbal19YCk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpe1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBsZXQgbj0gLTE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgbiA9IG4gKyAxO1xyXG4gICAgICAgIGFycmF5LnB1c2goW24sW2Ake2krMX0sJHthbGZfeVtqXX1gXV0pO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZXhwb3J0IHsgcm93cywgY29sdW1ucywgYWxmX3ksIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBcclxuICAgIGNoZWNrQ29vcmRpbmF0ZXMsIGZyb21DZWxsdG9Db29yZGluYXRlcywgYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcyxcclxuICAgICAgICBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwsIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKFxyXG4gICAgICAgIHBsYXllclJlYWwgPSBcIkhVTUFOIFBsYXllclwiLFxyXG4gICAgICAgIHBsYXllckNvbXB1dGVyID0gXCJDT01QVVRFUiBQbGF5ZXJcIixcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlID0gJycgKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgbmV3IFBsYXllcihwbGF5ZXJSZWFsKVxyXG4gICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBsYXllcihwbGF5ZXJDb21wdXRlcilcclxuICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAod2lubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogdGhlIHBsYXllciBkb2VzbnQgY2hhbmdlICovXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXI7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvKiBzd2l0Y2ggcGxheWVyKi9cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfTtcclxuICAgICAgICAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGJvYXJkUmVhbCA9ICgpID0+IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddWydib2FyZCddO1xyXG4gICAgICAgICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSAoKSA9PiBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuXHJcbiAgICAgICAgICAgY29uc3QgZ2V0Q29tcHV0ZXJQbGF5ZXIgPSAoKSA9PiBwbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgIGNvbnN0IGdldEh1bWFuUGxheWVyID0gKCkgPT4gcGxheWVyc1swXTtcclxuXHJcbiAgICAgICAgICAgY29uc3QgaXNUaGVyZUFXaW5uZXIgPSAoKSA9PiB3aW5uZXI7XHJcblxyXG4gICAgY29uc3QgcHJpbnROZXdSb3VuZCA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBib2FyZFJlYWwoKTtcclxuICAgICAgICAgICAgYm9hcmRDb21wdXRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIHN3aXRjaCAod2lubmVyKSB7XHJcbiAgICAgICAgICAgY2FzZSB0cnVlOiAgIFxyXG4gICAgICAgICAgICAgICBtZXNzYWdlID0gIGdldEFjdGl2ZVBsYXllcigpLnR5cGUgKyAnIFdPTic7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICcnOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfTsgXHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7ICAgICAgICAgXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBnZXRHYW1lTWVzc2FnZSA9ICgpID0+IG1lc3NhZ2U7ICAgIFxyXG5cclxuICAgICAgY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHBsYXllcnNbMF1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiggcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ10uZ2V0VG90YWxTdW5rKCkgPT09IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddLmxlbmd0aCApe1xyXG4gICAgICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2lubmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7IFxyXG4gICAgICAgIHdpbm5lciA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcbiAgICAgICAgLyogdGhpcyByZXNldCBpcyBub3QgYmVlbiB1c2VkICovXHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwbGF5Um91bmQgPSAocm93LGNvbHVtbikgPT4ge1xyXG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgICAgIGlmICggd2lubmVyID09PSB0cnVlICl7IFxyXG4gICAgICAgICAgICByZXNldEdhbWUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGNvb3JkID0gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pO1xyXG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkID0gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ107XHJcbiAgICAgICAgICAgIGxldCBib2FyZCA9IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydib2FyZCddOyAgIFxyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXlSb3VuZENvbXB1dGVyID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZhbmRvIGp1ZWdvJyk7XHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgbGV0IGJvYXJkID0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107ICAgXHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNvcmRlZEF0dGFjayhjb29yZCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNoZWNrRm9yV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICggYm9hcmQgKSA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtwbGF5Um91bmQscGxheVJvdW5kQ29tcHV0ZXIsIGdldEFjdGl2ZVBsYXllciwgXHJcbiAgICAgICAgZ2V0R2FtZU1lc3NhZ2UsIGJvYXJkUmVhbCwgYm9hcmRDb21wdXRlciwgcmVzZXRHYW1lLFxyXG4gICAgICAgICBnZXRDb21wdXRlclBsYXllciwgZ2V0SHVtYW5QbGF5ZXIsIGlzVGhlcmVBV2lubmVyfTtcclxufVxyXG5cclxuZXhwb3J0IHtnYW1lQ29udHJvbGxlcn07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XHJcbmltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBjaGVja0Nvb3JkaW5hdGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuXHJcblxyXG4vLyBhIGNsYXNzIEdhbWVib2FyZFxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5nZXRCb2FyZChyb3dzLCBjb2x1bW5zKTtcclxuICAgICAgICB0aGlzLmFycmF5TWlzc2VkID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hcnJheUFsbEF0dGFjayA9IG5ldyBTZXQoW10pO1xyXG4gICAgICAgIHRoaXMuYWxsU2hpcHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2FyZCggcm93cywgY29sdW1ucywgYm9hcmQ9W10pe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkW2ldID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaCh0aGlzLmNlbGwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjZWxsKCl7XHJcbiAgIFxyXG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4ge3ZhbHVlfTsgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZGF0YVNoaXBzKFt4LHldLGRpcmVjdGlvbixzaXplLHNoaXBOdW1iZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzID0gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLHNpemUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNoaXBDb29yZGluYXRlcz09PW51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IG5vdEF2YWlsYWJsZSA9IHNoaXBDb29yZGluYXRlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoeCkgPT4gdGhpcy5ib2FyZFtzaGlmdENvb3JkaW5hdGVzKHgpWzBdXVtzaGlmdENvb3JkaW5hdGVzKHgpWzFdXS52YWx1ZSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICAobm90QXZhaWxhYmxlLmluY2x1ZGVzKHRydWUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzVG9TdHJpbmcgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKCh4KSA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBsZXQgb25lU2hpcCA9IHsgXHJcbiAgICAgICAgICAgICAgICAnc2hpcE51bWJlcic6c2hpcE51bWJlciwgXHJcbiAgICAgICAgICAgICAgICAnc2hpcERldGFpbHMnOiBuZXcgU2hpcChzaXplKSxcclxuICAgICAgICAgICAgICAgICdjb29yZGluYXRlcyc6IHNoaXBDb29yZGluYXRlc1RvU3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2gob25lU2hpcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbmVTaGlwO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwc0luVGhlQm9hcmQoIG9uZVNoaXAgKXtcclxuICAgICAgICBsZXQgYXJyYXkgPSBvbmVTaGlwWydjb29yZGluYXRlcyddO1xyXG4gICAgICAgIGxldCByZXZlcnNlU3RyaW5nID0gYXJyYXkubWFwKCh4KT0+IHguc3BsaXQoJywnKSk7XHJcbiAgICAgICAgbGV0IGFycmF5SW5Cb2FyZCA9IHJldmVyc2VTdHJpbmcubWFwKCAodmFsdWVzKSA9PiBzaGlmdENvb3JkaW5hdGVzKHZhbHVlcykpO1xyXG4gICAgICAgIGFycmF5SW5Cb2FyZC5tYXAoKFt4LHldKSA9PiB0aGlzLmJvYXJkW3hdW3ldLnZhbHVlID0gMSApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWNvcmRlZEF0dGFjayggW3gseV0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMT0odmFsdWUpPT50aGlzLnJlY29yZGVkQ29vcmQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMj0odmFsdWUpPT50aGlzLnJlY29yZGVkTWlzc2VkQ29vcmQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApeyAgICAgICAgICAgICBcclxuICAgICAgICBpZighY2hlY2tDb29yZGluYXRlcyhbeCx5XSkgfHwgdGhpcy5hcnJheUFsbEF0dGFjay5oYXMoW3gseS50b0xvd2VyQ2FzZSgpXS50b1N0cmluZygpKSApe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IFtib2FyZFgsYm9hcmRZXSA9IHNoaWZ0Q29vcmRpbmF0ZXMoW3gseV0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAwKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMShbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazIoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSAyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMShbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IHRoaXMuYWxsU2hpcHMubGVuZ3RoOyArK2kpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFsbFNoaXBzW2ldWydjb29yZGluYXRlcyddLmluY2x1ZGVzKFt4LHldLnRvU3RyaW5nKCkpPT09dHJ1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAgPSB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxTaGlwc1tpXVsnc2hpcERldGFpbHMnXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY29yZGVkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5QWxsQXR0YWNrKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG4gICAgIHJlY29yZGVkTWlzc2VkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5TWlzc2VkKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG5cclxuICAgIGdldFRvdGFsU3Vuaygpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0ICB0b3RhbFN1bmsgPSB0aGlzLmFsbFNoaXBzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbVsnc2hpcERldGFpbHMnXS5iZWVuU3Vuaz09PXRydWUgPyB0b3RhbCArIDEgOiB0b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VuaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U25hcHNob3QoKXtcclxuICAgICAgICBsZXQgdG90YWxTdW5rID0gdGhpcy5nZXRUb3RhbFN1bmsoKTtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBpZih0b3RhbFN1bms9PT10aGlzLmFsbFNoaXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlID0gYEFsbCB5b3VyIHNoaXBzIGhhdmUgYmVlbiBzdW5rYDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuICBtZXNzYWdlID0gYFNoaXBzIHRoYXQgaGF2ZSBiZWVuIHN1bms6ICR7dG90YWxTdW5rfSAtIFNoaXBzIGFmbG9hdDogJHt0aGlzLmFsbFNoaXBzLmxlbmd0aC10b3RhbFN1bmt9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQm9hcmQoKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0udmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7R2FtZWJvYXJkfTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuLy8gYSBjbGFzcyBQbGF5ZXJcclxuY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7IFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gdGhpcy5jcmVhdGVHYW1lYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVHYW1lYm9hcmQoKXtcclxuICAgICAgICByZXR1cm4gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtQbGF5ZXJ9OyIsIi8vIGEgY2xhc3MgU2hpcCBcclxuY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7ICAgXHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSB2YWx1ZTsgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IGZhbHNlOyBcclxuICAgICAgfVxyXG5cclxuICAgICAgaGl0KGhpdHM9dGhpcy5udW1iZXJPZkhpdHMpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gaGl0cyArIDEgO1xyXG4gICAgICAgIHRoaXMuYmVlblN1bmsgPSB0aGlzLmlzU3VuaygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlck9mSGl0cztcclxuICAgICAgfVxyXG5cclxuICAgICAgaXNTdW5rKGhpdHM9dGhpcy5udW1iZXJPZkhpdHMpe1xyXG4gICAgICAgIHN3aXRjaChoaXRzPT09dGhpcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZW5TdW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZW5TdW5rO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1NoaXB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["screenController"],{

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







function addShips(arg1,arg2,arg3,arg4,arg5,arg6){
    /* arg is the game  arg2 is the div with the humanboard  
    arg3 to show the options arg4 to show random button
    arg5 is the div with the computerboard arg6 is the content computer board*/
const game = arg1;
const humanBoard = arg2;
const playerHuman = game.getActivePlayer();
const computerBoard = arg5;
const playerComputer = arg6;

const grid = document.getElementById('gridForAdd');
grid.classList.add('gridForAdd');
const divForError = document.createElement('div');
divForError.setAttribute('id','divForError');
divForError.setAttribute('style','grid-row: 1 / 2; grid-column: 4 / 5;')

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
    text.setAttribute('style','color:green; display:flex; justify-content: right;');
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
        columnLabel.innerText = _auxiliary_functions__WEBPACK_IMPORTED_MODULE_0__.alf_y[j];
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
                removeAllAddShipsDiv(grid,divForRandom);
                randomShipsForComputerPlayer(arg3,computerBoard,shipLength,playerComputer);
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
        removeAllAddShipsDiv(grid,divForRandom);
        randomShipsForComputerPlayer(arg3,computerBoard,shipLength,playerComputer);
      });
    
    arg4.appendChild(divForRandom);
    arg4.appendChild(divForError);
    divForRandom.appendChild(buttonRandom);

}

function removeAllAddShipsDiv(arg1,arg2){
    // arg1 and arg2 are the both div to will be removed
    arg1.remove();
    arg2.remove();
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
    errorMessagesArray.forEach((element) => {
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










function screenController(arg) {
    /* arg is the game container */

    const game = (0,_game_controller__WEBPACK_IMPORTED_MODULE_0__.gameController)();

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
        turnDiv.classList.add('turnDiv');
        waitTurn.setAttribute('style','grid-column:4/5;');
        boardDiv.classList.add('board');
        result.classList.add('result');
        humanBoard.classList.add('board-human');
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
            case true:
                const selectedRow = e.target.dataset.row;
                console.log('la fila es',selectedRow);
                const selectedColumn = e.target.dataset.column;
                console.log('la columna es',selectedColumn);
                // when click the board computer the player is playerHuman
                // Make sure I've clicked a column and not the gaps in between
                if (!selectedRow) return;
                game.playRound(Number(selectedRow),Number(selectedColumn));
                getMessage(activeMessage);
                updateScreen();
                break;
            case false:
                (0,_show_error__WEBPACK_IMPORTED_MODULE_7__.showError)(waitTurn,'wait your turn'.toUpperCase());
                setTimeout(_delete_div_error__WEBPACK_IMPORTED_MODULE_8__.deleteErrorMessages,800);
                break;
            }   
        }
        computerBoard.addEventListener('click', clickHandlerBoard);

        // Add a message to avoid click in human board
        function noFireToFriend(e){
            (0,_show_error__WEBPACK_IMPORTED_MODULE_7__.showError)(waitTurn,'BE CAREFUL. don\'t shoot your allies'.toUpperCase());
            setTimeout(_delete_div_error__WEBPACK_IMPORTED_MODULE_8__.deleteErrorMessages,1000);
        }
        humanBoard.addEventListener('click',noFireToFriend);

        // Add a function for the computer attack
        function computerAttack(){
            let check = true;
            let coord = [];
            let arrayAllAttack = game.getHumanPlayer().gameboard['arrayAllAttack'];
            while ( check === true){
                coord = (0,_random_ships__WEBPACK_IMPORTED_MODULE_4__.randomCoordinates)();
                check = arrayAllAttack.has(coord.toString());
            }
            let cell = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.fromCoordinatestoCell)(coord);
            game.playRoundComputer(cell[0],cell[1]);
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
    
    cellsinBoard.forEach((element) => {
      let index = iterator.next().value;
                                /* (index[0]) (index[1]) para leer el node dentro del nodeList */
      let x = index[1];         
     /*    x.textContent = boardContent[x.dataset.row][x.dataset.column].value; */
        switch(boardContent[x.dataset.row][x.dataset.column].value===1){
            case true:
                x.classList.add('cell');
                x.textContent = ''; 
            default:
                switch(boardContent[x.dataset.row][x.dataset.column].value===0){
                    case true:
                      x.classList.add('cell');
                      x.textContent = ''; 
                    default:
                        switch(boardContent[x.dataset.row][x.dataset.column].value===2){
                            case true:
                            x.classList.add('cellMissed');
                            x.textContent = `water`;
                            default:
                                switch(boardContent[x.dataset.row][x.dataset.column].value===5){
                                case true:
                                x.classList.add('cellHit');
                                x.textContent = `HIT`; 
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
console.log(coordShipsSunk);

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

cellsinBoard.forEach((element) => {
  let index = iterator.next().value;
                            /* (index[0]) (index[1]);  */
  let x = index[1];         
  x.className = '';       // to clear previous class
  x.classList.add('cell');
  x.textContent = '';
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
    
    cellsinBoard.forEach((element) => {
      let index = iterator.next().value;
                                /* (index[0]) (index[1]);  */
      let x = index[1];         /* para leer el node dentro del nodeList */
      
        switch(boardContent[x.dataset.row][x.dataset.column].value===1){   // EL ERROR AL TERMINAR EL JUEGO LO DA EN ESTA LINEA array for each
            case true:
                x.classList.add('cellShipAdded');
                x.textContent = `SHIP`;
            default:
                switch(boardContent[x.dataset.row][x.dataset.column].value===0){
                    case true:
                      x.classList.add('cell');
                      x.textContent = '';
                    default:
                        switch(boardContent[x.dataset.row][x.dataset.column].value===2){
                            case true:
                            x.classList.add('cellMissed');
                            x.textContent = `water`;
                            default:
                                switch(boardContent[x.dataset.row][x.dataset.column].value===5){
                                case true:
                                x.classList.add('cellHit');
                                x.textContent = `HIT`;    
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
 
 cellsinBoard.forEach((element) => {
   let index = iterator.next().value;
                             /* (index[0]) (index[1]);  */
   let x = index[1];         
   x.className = '';       // to clear previous class
   x.classList.add('cell');
   x.textContent = '';
 })
} 




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/screen-controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEdnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsZ0NBQWdDO0FBQ2hDO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDZCQUE2Qiw2RUFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYWRkLXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2F1eGlsaWFyeS1mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGUtZGl2LWVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3JhbmRvbS1zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zY3JlZW4tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3Nob3ctZXJyb3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLWNvbXB1dGVyLWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeX0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHN9IGZyb20gJy4vdXBkYXRlJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkIH0gZnJvbSBcIi4vdXBkYXRlLWNvbXB1dGVyLWJvYXJkXCI7XHJcbmltcG9ydCB7IHNob3dFcnJvciB9IGZyb20gJy4vc2hvdy1lcnJvcic7XHJcbmltcG9ydCB7IGRlbGV0ZUVycm9yTWVzc2FnZXMgfSBmcm9tICcuL2RlbGV0ZS1kaXYtZXJyb3InO1xyXG5pbXBvcnQgeyByYW5kb21TaGlwcyB9IGZyb20gXCIuL3JhbmRvbS1zaGlwc1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkU2hpcHMoYXJnMSxhcmcyLGFyZzMsYXJnNCxhcmc1LGFyZzYpe1xyXG4gICAgLyogYXJnIGlzIHRoZSBnYW1lICBhcmcyIGlzIHRoZSBkaXYgd2l0aCB0aGUgaHVtYW5ib2FyZCAgXHJcbiAgICBhcmczIHRvIHNob3cgdGhlIG9wdGlvbnMgYXJnNCB0byBzaG93IHJhbmRvbSBidXR0b25cclxuICAgIGFyZzUgaXMgdGhlIGRpdiB3aXRoIHRoZSBjb21wdXRlcmJvYXJkIGFyZzYgaXMgdGhlIGNvbnRlbnQgY29tcHV0ZXIgYm9hcmQqL1xyXG5jb25zdCBnYW1lID0gYXJnMTtcclxuY29uc3QgaHVtYW5Cb2FyZCA9IGFyZzI7XHJcbmNvbnN0IHBsYXllckh1bWFuID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGFyZzU7XHJcbmNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnNjtcclxuXHJcbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZEZvckFkZCcpO1xyXG5ncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWRGb3JBZGQnKTtcclxuY29uc3QgZGl2Rm9yRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGl2Rm9yRXJyb3Iuc2V0QXR0cmlidXRlKCdpZCcsJ2RpdkZvckVycm9yJyk7XHJcbmRpdkZvckVycm9yLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMSAvIDI7IGdyaWQtY29sdW1uOiA0IC8gNTsnKVxyXG5cclxuY29uc3Qgc2hpcExlbmd0aD1bNSwzLDQsNiw0LDVdO1xyXG4gICAgICAgIFxyXG5mb3IobGV0IGk9MTsgaTw9c2hpcExlbmd0aC5sZW5ndGg7ICsraSl7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJyxgZm9ybSR7aX1gKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybUlucHV0Jyk7XHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgc3VibWl0JHtpfWApO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gYEFERCBOwrAgJHtpfWA7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICBcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOycpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmdyZWVuOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogcmlnaHQ7Jyk7XHJcbiAgICB0ZXh0LmlubmVyVGV4dCA9IGAke3NoaXBMZW5ndGhbaS0xXX0gc3F1YXJlcyBsb25naXR1ZGVgO1xyXG4gICBcclxuXHJcbiAgICBjb25zdCByYWRpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmFkaW9EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybVJhZGlvJyk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JIb3Jpem9udGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGhvcml6b250YWxseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvclZlcnRpY2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IHZlcnRpY2FsbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDEycHgnKTtcclxuICAgIGxhYmVsRm9ySG9yaXpvbnRhbC5pbm5lclRleHQgPSAnbGVmdC10by1yaWdodCc7XHJcbiAgICBsYWJlbEZvckhvcml6b250YWwuc2V0QXR0cmlidXRlKCdmb3InLCdsZWZ0LXRvLXJpZ2h0Jyk7XHJcbiAgICBsYWJlbEZvclZlcnRpY2FsLmlubmVyVGV4dCA9ICd0b3AtdG8tZG93bic7XHJcbiAgICBsYWJlbEZvclZlcnRpY2FsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9wLXRvLWRvd24nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgnaWQnLCdsZWZ0LXRvLXJpZ2h0Jyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCduYW1lJywnZGlyZWN0aW9uJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCdpZCcsJ3RvcC10by1kb3duJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCd0b3AtdG8tZG93bicpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkaXJlY3Rpb24nKTtcclxuXHJcbiAgICBjb25zdCBjb29yZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29vcmRSb3cuaW5uZXJUZXh0ID0gJ1JPVzogJztcclxuICAgIGNvbnN0IGNvb3JkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb29yZENvbHVtbi5pbm5lclRleHQgPSAnQ09MVU1OOiAnO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPHJvd3M7ICsraSl7XHJcbiAgICAgICAgY29uc3Qgcm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICByb3dMYWJlbC5pbm5lclRleHQgPSBpKzE7XHJcbiAgICAgICAgcm93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGByb3cke2krMX1gKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgnaWQnLGByb3cke2krMX1gKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdyb3dTZWxlY3RlZCcpO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgndmFsdWUnLGkrMSk7XHJcblxyXG4gICAgICAgIGNvb3JkUm93LmFwcGVuZENoaWxkKHJvd0xhYmVsKTtcclxuICAgICAgICBjb29yZFJvdy5hcHBlbmRDaGlsZChpbnB1dFJvdyk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIGZvcihsZXQgaj0wOyBqPGNvbHVtbnM7ICsrail7XHJcbiAgICAgICAgY29uc3QgY29sdW1uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb2x1bW5MYWJlbC5pbm5lclRleHQgPSBhbGZfeVtqXTtcclxuICAgICAgICBjb2x1bW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYGNvbHVtbiR7YWxmX3lbal19YCk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgY29sdW1uJHthbGZfeVtqXX1gKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjb2x1bW5TZWxlY3RlZCcpO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgndmFsdWUnLGFsZl95W2pdKTtcclxuXHJcbiAgICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoY29sdW1uTGFiZWwpO1xyXG4gICAgICAgIGNvb3JkQ29sdW1uLmFwcGVuZENoaWxkKGlucHV0Q29sdW1uKTtcclxuICAgIH1cclxuXHJcbiAgICBob3Jpem9udGFsbHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdmVydGljYWxseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uU2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIGRpcmVjdGlvblJhZGlvVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJkaXJlY3Rpb25cIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgZGlyZWN0aW9uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgIHNob3dFcnJvcihyYWRpb0RpdiwnbXVzdCBzZWxlY3QgZGlyZWN0aW9uJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblNlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGxldCByb3dTZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gcm93UmFkaW9WYWx1ZSgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJyb3dTZWxlY3RlZFwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICByb3dTZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgcm93U2VsZWN0ZWQgPSAxO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gcm93U2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgbGV0IGNvbHVtblNlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiBjb2x1bW5SYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiY29sdW1uU2VsZWN0ZWRcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgIGNvbHVtblNlbGVjdGVkID0gJ2EnO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gY29sdW1uU2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaXplID0gc2hpcExlbmd0aFtpLTFdO1xyXG5cclxuICAgICAgICBsZXQgc2hpcE51bWJlciA9IGk7XHJcbiAgICBcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uUmFkaW9WYWx1ZSgpO1xyXG5cclxuICAgICAgICBsZXQgcm93U2VsZWN0ZWQgPSByb3dSYWRpb1ZhbHVlKCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBjb2x1bW5SYWRpb1ZhbHVlKCk7XHJcblxyXG4gICAgICAgIGxldCBjb29yZCA9IFtOdW1iZXIocm93U2VsZWN0ZWQpLGNvbHVtblNlbGVjdGVkXTtcclxuXHJcbiAgICAgICAgbGV0IHNoaXAgPSBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10uZGF0YVNoaXBzKGNvb3JkLGRpcmVjdGlvbixzaXplLHNoaXBOdW1iZXIpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHNoaXAhPT1udWxsKXtcclxuICAgICAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICAgICAgICBsZXQgbmV3Qm9hcmQgPSBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10ucGxhY2VTaGlwc0luVGhlQm9hcmQoc2hpcCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQsIG5ld0JvYXJkKTtcclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9ybSR7aX1gKTtcclxuICAgICAgICAgICAgc3VibWl0UmVhZHkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybUlucHV0JykubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLGRpdkZvclJhbmRvbSk7XHJcbiAgICAgICAgICAgICAgICByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzMsY29tcHV0ZXJCb2FyZCxzaGlwTGVuZ3RoLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzaG93RXJyb3IoZGl2Rm9yRXJyb3IsJ1NFTEVDVCBBTk9USEVSIExPQ0FUSU9OJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgYXJnMy5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRGl2KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRSb3cpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRDb2x1bW4pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JIb3Jpem9udGFsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGhvcml6b250YWxseSk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvclZlcnRpY2FsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKHZlcnRpY2FsbHkpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGl2Rm9yUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZGb3JSYW5kb20uaW5uZXJUZXh0ID0gJ0NsaWNrIGhlcmUgZm9yIGEgcmFuZG9tIGZsZWV0IG9mIHNoaXBzJztcclxuICAgIGRpdkZvclJhbmRvbS5jbGFzc0xpc3QuYWRkKCdyYW5kb21zaGlwcycpO1xyXG4gICAgY29uc3QgYnV0dG9uUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25SYW5kb20uaW5uZXJUZXh0ID0gJ1JBTkRPTSBGTEVFVCc7XHJcbiAgICBidXR0b25SYW5kb20uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG5cclxuICAgIGJ1dHRvblJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVySHVtYW5bJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQscGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLGRpdkZvclJhbmRvbSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihhcmczLGNvbXB1dGVyQm9hcmQsc2hpcExlbmd0aCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvclJhbmRvbSk7XHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvckVycm9yKTtcclxuICAgIGRpdkZvclJhbmRvbS5hcHBlbmRDaGlsZChidXR0b25SYW5kb20pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQWRkU2hpcHNEaXYoYXJnMSxhcmcyKXtcclxuICAgIC8vIGFyZzEgYW5kIGFyZzIgYXJlIHRoZSBib3RoIGRpdiB0byB3aWxsIGJlIHJlbW92ZWRcclxuICAgIGFyZzEucmVtb3ZlKCk7XHJcbiAgICBhcmcyLnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzEsYXJnMixhcmczLGFyZzQpe1xyXG4gICAgICAvKiAgYXJnMSBpcyB0aGUgZGl2IHRvIHdyaXRlIHRoZSBoZWFkICovXHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGFyZzI7XHJcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGFyZzM7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBhcmc0O1xyXG5cclxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNvbXB1dGVyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRDb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWRDb21wdXRlci5pbm5lclRleHQgPSAndGhpcyBpcyB5b3VyIGVuZW15ICcudG9VcHBlckNhc2UoKSsnIENsaWNrIFRvIEF0dGFjayc7XHJcbiAgICAgICAgaGVhZENvbXB1dGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMS8yOyBncmlkLWNvbHVtbjogNC81OyBwYWRkaW5nLWxlZnQ6MjUlOyBjb2xvcjpsaWdodHllbGxvdzsnKTtcclxuICAgICAgICBhcmcxLmFwcGVuZENoaWxkKGhlYWRDb21wdXRlcik7XHJcblxyXG4gICAgICAgIHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFNoaXBzfTsiLCJjb25zdCByb3dzID0gMTM7XHJcbmNvbnN0IGNvbHVtbnMgPSAxMjtcclxuXHJcbmNvbnN0IGFsZl95ID0gW1xyXG4gICAgJ2EnLCdiJywnYycsJ2QnLCdlJywnZicsJ2cnLCdoJywnaScsJ2onLCdrJywnbCdcclxuICAgICBdO1xyXG5cclxuZnVuY3Rpb24gc2hpZnRDb29yZGluYXRlcyhbdmFsdWVfeCx2YWx1ZV95XSl7XHJcbiAgICBcclxuICAgIGxldCBbeCx5XSA9IFsxLCdhJ107XHJcblxyXG4gICAgICAgIHN3aXRjaChhbGZfeS5pbmNsdWRlcyh2YWx1ZV95LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhbGZfeS5pbmRleE9mKHZhbHVlX3kudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt4LHldID0gWyB2YWx1ZV94LTEsIGluZGV4XTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG5mdW5jdGlvbiBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sa2V5KXtcclxubGV0IGFycmF5T2ZDb29yZGluYXRlcyA9IFtdO1xyXG5sZXQgaW5pdGlhbFggPSB4O1xyXG5sZXQgaW5pdGlhbFkgPSBhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBzd2l0Y2goZGlyZWN0aW9uPT09J2xlZnQtdG8tcmlnaHQnKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgaWYoYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpICsga2V5ID4gY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgeCwgYWxmX3lbaW5pdGlhbFkgKyBpXSBdKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb249PT0ndG9wLXRvLWRvd24nKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgaWYoaW5pdGlhbFggKyBrZXktMSA+IHJvd3MpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyBpbml0aWFsWCArIGksIHkgXSk7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheU9mQ29vcmRpbmF0ZXM7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrQ29vcmRpbmF0ZXMoW3gseV0pe1xyXG4gICAgaWYoeCA+IDAgJiYgeCA8PSByb3dzICYmIGFsZl95LmluY2x1ZGVzKHkudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKXtcclxuICAgIGxldCBbeCx5XSA9IFsxLCdhJ107XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIFt4LHldID0gWyByb3cgKyAxLCBhbGZfeVtjb2x1bW5dIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21Db29yZGluYXRlc3RvQ2VsbChjb29yZCl7XHJcbiAgICBsZXQgW3Jvdyxjb2x1bW5dID0gWzAsMF07XHJcbiAgICBsZXQgcm93U2VsZWN0ZWQgPSBjb29yZFswXS0xO1xyXG4gICAgbGV0IGNvbHVtblNlbGVjdGVkID0gYWxmX3kuaW5kZXhPZihjb29yZFsxXS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIHJldHVybiBbcm93LGNvbHVtbl0gPSBbTnVtYmVyKHJvd1NlbGVjdGVkKSwgTnVtYmVyKGNvbHVtblNlbGVjdGVkKV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKSB7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBhcnJheS5wdXNoKGAke2krMX0sJHthbGZfeVtqXX1gKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCl7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGxldCBuPSAtMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBuID0gbiArIDE7XHJcbiAgICAgICAgYXJyYXkucHVzaChbbixbYCR7aSsxfSwke2FsZl95W2pdfWBdXSk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeSwgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIFxyXG4gICAgY2hlY2tDb29yZGluYXRlcywgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzLCBhbGxDb29yZGluYXRlc1Bvc2libGVzLFxyXG4gICAgICAgIGZyb21Db29yZGluYXRlc3RvQ2VsbCwgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfTsiLCJmdW5jdGlvbiBjcmVhdGVDb250YWluZXJzKGFyZzEpIHtcclxuICAgIC8qIHRoZSBhcmcxIGlzIHRoZSBwYXJlbnQgY29udGFpbmVyICAgKi9cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkRm9yQWRkJyk7XHJcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdncmlkRm9yQWRkJyk7XHJcbiAgICBcclxuICAgICAgICBhcmcxLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRhaW5lcnMgfTsiLCJmdW5jdGlvbiBkZWxldGVFcnJvck1lc3NhZ2VzKCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvcicpO1xyXG4gICAgLyogcGFyYSBjcmVhciB1biBhcnJheSBkZXNkZSBlbCBOb2RlTGlzdCAqL1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlc0FycmF5ID0gWy4uLmVycm9yTWVzc2FnZXNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBlcnJvck1lc3NhZ2VzQXJyYXkuZW50cmllcygpO1xyXG4gICAgZXJyb3JNZXNzYWdlc0FycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgLyogICBjb25zb2xlLmxvZyhpbmRleFswXSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4WzFdKTsgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgIC8qIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgeC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9OyIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IGZyb21DZWxsdG9Db29yZGluYXRlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcihcclxuICAgICAgICBwbGF5ZXJSZWFsID0gXCJIVU1BTiBQbGF5ZXJcIixcclxuICAgICAgICBwbGF5ZXJDb21wdXRlciA9IFwiQ09NUFVURVIgUGxheWVyXCIsXHJcbiAgICAgICAgd2lubmVyID0gZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZSA9ICcnICl7XHJcbiAgICBcclxuICAgICAgICBsZXQgcGxheWVycyA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyUmVhbClcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyQ29tcHV0ZXIpXHJcbiAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHRoZSBwbGF5ZXIgZG9lc250IGNoYW5nZSAqL1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogc3dpdGNoIHBsYXllciovXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07XHJcbiAgICAgICAgICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xyXG5cclxuICAgICAgICAgICBjb25zdCBib2FyZFJlYWwgPSAoKSA9PiBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuICAgICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gKCkgPT4gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGdldENvbXB1dGVyUGxheWVyID0gKCkgPT4gcGxheWVyc1sxXTtcclxuICAgICAgICAgICBjb25zdCBnZXRIdW1hblBsYXllciA9ICgpID0+IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGlzVGhlcmVBV2lubmVyID0gKCkgPT4gd2lubmVyO1xyXG5cclxuICAgIGNvbnN0IHByaW50TmV3Um91bmQgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgYm9hcmRSZWFsKCk7XHJcbiAgICAgICAgICAgIGJvYXJkQ29tcHV0ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgIGNhc2UgdHJ1ZTogICBcclxuICAgICAgICAgICAgICAgbWVzc2FnZSA9ICBnZXRBY3RpdmVQbGF5ZXIoKS50eXBlICsgJyBXT04nOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnJzsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpOyAgICAgICAgIFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZ2V0R2FtZU1lc3NhZ2UgPSAoKSA9PiBtZXNzYWdlOyAgICBcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXS5nZXRUb3RhbFN1bmsoKSA9PT0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ10ubGVuZ3RoICl7XHJcbiAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIHBsYXllcnNbMV1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4geyBcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xyXG4gICAgICAgIC8qIHRoaXMgcmVzZXQgaXMgbm90IGJlZW4gdXNlZCAqL1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGxheVJvdW5kID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBpZiAoIHdpbm5lciA9PT0gdHJ1ZSApeyBcclxuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKTtcclxuICAgICAgICAgICAgbGV0IGdhbWVib2FyZCA9IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddO1xyXG4gICAgICAgICAgICBsZXQgYm9hcmQgPSBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTsgICBcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCBib2FyZCApIDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwbGF5Um91bmRDb21wdXRlciA9IChyb3csY29sdW1uKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGl2YW5kbyBqdWVnbycpO1xyXG4gICAgICAgIGlmICggd2lubmVyID09PSB0cnVlICl7IFxyXG4gICAgICAgICAgICByZXNldEdhbWUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGNvb3JkID0gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pO1xyXG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkID0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ107XHJcbiAgICAgICAgICAgIGxldCBib2FyZCA9IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddWydib2FyZCddOyAgIFxyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cGxheVJvdW5kLHBsYXlSb3VuZENvbXB1dGVyLCBnZXRBY3RpdmVQbGF5ZXIsIFxyXG4gICAgICAgIGdldEdhbWVNZXNzYWdlLCBib2FyZFJlYWwsIGJvYXJkQ29tcHV0ZXIsIHJlc2V0R2FtZSxcclxuICAgICAgICAgZ2V0Q29tcHV0ZXJQbGF5ZXIsIGdldEh1bWFuUGxheWVyLCBpc1RoZXJlQVdpbm5lcn07XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2FtZUNvbnRyb2xsZXJ9OyIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL3NoaXAnO1xyXG5pbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBzaGlmdENvb3JkaW5hdGVzLCBhc3NpZ25Mb2NhdGlvbiwgY2hlY2tDb29yZGluYXRlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcblxyXG5cclxuLy8gYSBjbGFzcyBHYW1lYm9hcmRcclxuY2xhc3MgR2FtZWJvYXJkIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuZ2V0Qm9hcmQocm93cywgY29sdW1ucyk7XHJcbiAgICAgICAgdGhpcy5hcnJheU1pc3NlZCA9IG5ldyBTZXQoW10pO1xyXG4gICAgICAgIHRoaXMuYXJyYXlBbGxBdHRhY2sgPSBuZXcgU2V0KFtdKTtcclxuICAgICAgICB0aGlzLmFsbFNoaXBzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9hcmQoIHJvd3MsIGNvbHVtbnMsIGJvYXJkPVtdKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBib2FyZFtpXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkW2ldLnB1c2godGhpcy5jZWxsKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2VsbCgpe1xyXG4gICBcclxuICAgICAgICBsZXQgdmFsdWUgPSAwO1xyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHt2YWx1ZX07ICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGRhdGFTaGlwcyhbeCx5XSxkaXJlY3Rpb24sc2l6ZSxzaGlwTnVtYmVyKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlcyA9IGFzc2lnbkxvY2F0aW9uKFt4LHldLGRpcmVjdGlvbixzaXplKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihzaGlwQ29vcmRpbmF0ZXM9PT1udWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBub3RBdmFpbGFibGUgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKFxyXG4gICAgICAgICAgICAgICAgKHgpID0+IHRoaXMuYm9hcmRbc2hpZnRDb29yZGluYXRlcyh4KVswXV1bc2hpZnRDb29yZGluYXRlcyh4KVsxXV0udmFsdWUgPT09IDFcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAgKG5vdEF2YWlsYWJsZS5pbmNsdWRlcyh0cnVlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNoaXBDb29yZGluYXRlc1RvU3RyaW5nID0gc2hpcENvb3JkaW5hdGVzLm1hcCgoeCkgPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgbGV0IG9uZVNoaXAgPSB7IFxyXG4gICAgICAgICAgICAgICAgJ3NoaXBOdW1iZXInOnNoaXBOdW1iZXIsIFxyXG4gICAgICAgICAgICAgICAgJ3NoaXBEZXRhaWxzJzogbmV3IFNoaXAoc2l6ZSksXHJcbiAgICAgICAgICAgICAgICAnY29vcmRpbmF0ZXMnOiBzaGlwQ29vcmRpbmF0ZXNUb1N0cmluZ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hbGxTaGlwcy5wdXNoKG9uZVNoaXApO1xyXG4gICAgICAgICAgICByZXR1cm4gb25lU2hpcDtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlU2hpcHNJblRoZUJvYXJkKCBvbmVTaGlwICl7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gb25lU2hpcFsnY29vcmRpbmF0ZXMnXTtcclxuICAgICAgICBsZXQgcmV2ZXJzZVN0cmluZyA9IGFycmF5Lm1hcCgoeCk9PiB4LnNwbGl0KCcsJykpO1xyXG4gICAgICAgIGxldCBhcnJheUluQm9hcmQgPSByZXZlcnNlU3RyaW5nLm1hcCggKHZhbHVlcykgPT4gc2hpZnRDb29yZGluYXRlcyh2YWx1ZXMpKTtcclxuICAgICAgICBhcnJheUluQm9hcmQubWFwKChbeCx5XSkgPT4gdGhpcy5ib2FyZFt4XVt5XS52YWx1ZSA9IDEgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVjb3JkZWRBdHRhY2soIFt4LHldLCBcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazE9KHZhbHVlKT0+dGhpcy5yZWNvcmRlZENvb3JkKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazI9KHZhbHVlKT0+dGhpcy5yZWNvcmRlZE1pc3NlZENvb3JkKHZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKXsgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoIWNoZWNrQ29vcmRpbmF0ZXMoW3gseV0pIHx8IHRoaXMuYXJyYXlBbGxBdHRhY2suaGFzKFt4LHkudG9Mb3dlckNhc2UoKV0udG9TdHJpbmcoKSkgKXtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBbYm9hcmRYLGJvYXJkWV0gPSBzaGlmdENvb3JkaW5hdGVzKFt4LHldKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN3aXRjaCh0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazEoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2syKFt4LHldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID0gMjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazEoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwID0gbmV3IFNoaXAoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpPCB0aGlzLmFsbFNoaXBzLmxlbmd0aDsgKytpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hbGxTaGlwc1tpXVsnY29vcmRpbmF0ZXMnXS5pbmNsdWRlcyhbeCx5XS50b1N0cmluZygpKT09PXRydWUpeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwID0gdGhpcy5hbGxTaGlwc1tpXVsnc2hpcERldGFpbHMnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwLmhpdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsU2hpcHNbaV1bJ3NoaXBEZXRhaWxzJ10gPSBzaGlwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWNvcmRlZENvb3JkKCBkYXRhLCBzZXQ9dGhpcy5hcnJheUFsbEF0dGFjayl7XHJcbiAgICAgICAgc2V0LmFkZChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiBzZXQ7XHJcbiAgICAgfVxyXG5cclxuICAgICByZWNvcmRlZE1pc3NlZENvb3JkKCBkYXRhLCBzZXQ9dGhpcy5hcnJheU1pc3NlZCl7XHJcbiAgICAgICAgc2V0LmFkZChkYXRhLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIHJldHVybiBzZXQ7XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICBnZXRUb3RhbFN1bmsoKXtcclxuICAgIFxyXG4gICAgICAgIGxldCAgdG90YWxTdW5rID0gdGhpcy5hbGxTaGlwcy5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50SXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEl0ZW1bJ3NoaXBEZXRhaWxzJ10uYmVlblN1bms9PT10cnVlID8gdG90YWwgKyAxIDogdG90YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgIHJldHVybiB0b3RhbFN1bms7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFNuYXBzaG90KCl7XHJcbiAgICAgICAgbGV0IHRvdGFsU3VuayA9IHRoaXMuZ2V0VG90YWxTdW5rKCk7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYodG90YWxTdW5rPT09dGhpcy5hbGxTaGlwcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZSA9IGBBbGwgeW91ciBzaGlwcyBoYXZlIGJlZW4gc3Vua2A7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAgbWVzc2FnZSA9IGBTaGlwcyB0aGF0IGhhdmUgYmVlbiBzdW5rOiAke3RvdGFsU3Vua30gLSBTaGlwcyBhZmxvYXQ6ICR7dGhpcy5hbGxTaGlwcy5sZW5ndGgtdG90YWxTdW5rfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZUJvYXJkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQge0dhbWVib2FyZH07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbi8vIGEgY2xhc3MgUGxheWVyXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWUpeyBcclxuICAgICAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IHRoaXMuY3JlYXRlR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2FtZWJvYXJkKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7UGxheWVyfTsiLCJpbXBvcnQge2FsbENvb3JkaW5hdGVzUG9zaWJsZXN9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucycgO1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tU2hpcHMoYXJnMSl7XHJcbiAgICAvKiBhcmcxIGlzIHRoZSBwbGF5ZXJHYW1lYm9hcmQgYXJnMiBpcyB0aGUgYXJyYXkgd2l0aCBsZW5ndGgqL1xyXG4gICBcclxuICAgY29uc3Qgc2hpcExlbmd0aD1bNSwzLDQsNiw0LDVdO1xyXG4gICBjb25zdCBhcnJheURpcmVjdGlvbiA9IFsnbGVmdC10by1yaWdodCcsJ3RvcC10by1kb3duJ107XHJcbiAgIGNvbnN0IHRvdGFsQ2VsbHMgPSBhbGxDb29yZGluYXRlc1Bvc2libGVzKCk7XHJcbiAgIFxyXG5cclxuICAgZm9yICggbGV0IGk9MDsgaSA8IHNoaXBMZW5ndGgubGVuZ3RoOyArK2kpe1xyXG4gICAgbGV0IHNoaXAgPSBudWxsOyBcclxuXHJcbiAgICB3aGlsZShzaGlwPT09bnVsbCl7XHJcbiAgICBsZXQgbnVtYmVyID0gcmFuZG9tSW50RnJvbUludGVydmFsKDEsdG90YWxDZWxscy5sZW5ndGgpO1xyXG4gICAgbGV0IGNvb3JkID0gIHRvdGFsQ2VsbHNbbnVtYmVyLTFdLnNwbGl0KCcsJyk7XHJcbiAgICBjb29yZCA9IFtOdW1iZXIoY29vcmRbMF0pLGNvb3JkWzFdXTtcclxuICAgIGxldCBkaXJlY3Rpb24gPSBhcnJheURpcmVjdGlvbltyYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSwyKS0xXTtcclxuICAgIHNoaXAgPSBhcmcxLmRhdGFTaGlwcyhjb29yZCxkaXJlY3Rpb24sc2hpcExlbmd0aFtpXSxpKzEpO1xyXG4gICAgfVxyXG4gICAgYXJnMS5wbGFjZVNoaXBzSW5UaGVCb2FyZCggc2hpcCApO1xyXG5cclxuICAgfVxyXG5cclxucmV0dXJuIGFyZzE7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Db29yZGluYXRlcygpe1xyXG4gIGNvbnN0IHRvdGFsQ2VsbHMgPSBhbGxDb29yZGluYXRlc1Bvc2libGVzKCk7XHJcbiAgbGV0IG51bWJlciA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLHRvdGFsQ2VsbHMubGVuZ3RoKTtcclxuICAgIGxldCBjb29yZCA9ICB0b3RhbENlbGxzW251bWJlci0xXS5zcGxpdCgnLCcpO1xyXG4gICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSxjb29yZFsxXV07XHJcbiAgcmV0dXJuIGNvb3JkO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICB9XHJcblxyXG5leHBvcnQge3JhbmRvbVNoaXBzLCByYW5kb21Db29yZGluYXRlc307IiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL2dhbWUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIGZyb21Db29yZGluYXRlc3RvQ2VsbCB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhaW5lcnMgfSBmcm9tICcuL2NyZWF0ZS1jb250YWluZXInO1xyXG5pbXBvcnQgeyBhZGRTaGlwcyB9IGZyb20gJy4vYWRkLXNoaXBzJztcclxuaW1wb3J0IHsgcmFuZG9tQ29vcmRpbmF0ZXMgfSBmcm9tICcuL3JhbmRvbS1zaGlwcyc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzIH0gZnJvbSAnLi91cGRhdGUnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQgfSBmcm9tICcuL3VwZGF0ZS1jb21wdXRlci1ib2FyZCc7XHJcbmltcG9ydCB7IHNob3dFcnJvciB9IGZyb20gJy4vc2hvdy1lcnJvcic7XHJcbmltcG9ydCB7IGRlbGV0ZUVycm9yTWVzc2FnZXMgfSBmcm9tICcuL2RlbGV0ZS1kaXYtZXJyb3InO1xyXG5cclxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcihhcmcpIHtcclxuICAgIC8qIGFyZyBpcyB0aGUgZ2FtZSBjb250YWluZXIgKi9cclxuXHJcbiAgICBjb25zdCBnYW1lID0gZ2FtZUNvbnRyb2xsZXIoKTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGFyZztcclxuICAgICAgICBjb25zdCB0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHdhaXRUdXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBodW1hbkJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBcclxuICAgICAgICBnYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHR1cm4uY2xhc3NMaXN0LmFkZCgndHVybicpO1xyXG4gICAgICAgIHR1cm5EaXYuY2xhc3NMaXN0LmFkZCgndHVybkRpdicpO1xyXG4gICAgICAgIHdhaXRUdXJuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLWNvbHVtbjo0LzU7Jyk7XHJcbiAgICAgICAgYm9hcmREaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZCgncmVzdWx0Jyk7XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1odW1hbicpO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7IGdyaWQtY29sdW1uOjEvMicpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0QnV0dG9uJyk7XHJcbiAgICAgICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUkVTRVQgZm9yIE5FVyBHQU1FJztcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNsZWFyIHRoZSBib2FyZFxyXG4gICAgICAgIGJvYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlclBsYXllcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllckNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXHJcbiAgICAgICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICAvLyBBbnl0aGluZyBjbGlja2FibGUgc2hvdWxkIGJlIGEgYnV0dG9uISFcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGRhdGEgYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW5cclxuICAgICAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqOyBcclxuICAgICAgICAgICAgaHVtYW5Cb2FyZC5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcclxuICAgICAgICB9fVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICAvLyBBbnl0aGluZyBjbGlja2FibGUgc2hvdWxkIGJlIGEgYnV0dG9uISFcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGRhdGEgYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW5cclxuICAgICAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqOyBcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIGJ1dHRvbiBmb3IgYWRkIHNoaXBzIGFuZCBmdW5jdGlvblxyXG4gICAgICAgIGFkZGluZ1NoaXBzKHR1cm4scGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0aWFsU2NyZWVuKCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2NyZWVuID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIG5ld2VzdCB2ZXJzaW9uIG9mIHRoZSBib2FyZCBhbmQgcGxheWVyIHR1cm5cclxuICAgICAgICBjb25zdCBib2FyZFJlYWwgPSBnYW1lLmJvYXJkUmVhbCgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBnYW1lLmJvYXJkQ29tcHV0ZXIoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0SHVtYW5QbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGdhbWUuZ2V0Q29tcHV0ZXJQbGF5ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLGJvYXJkUmVhbCxwbGF5ZXJIdW1hbik7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQsYm9hcmRDb21wdXRlcixwbGF5ZXJDb21wdXRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbiAgICAgICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXHJcbiAgICAgICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWUuaXNUaGVyZUFXaW5uZXIoKSk7XHJcbiAgICAgICAgLy8gY2hlY2sgYW5kIGF0dGFja3MgaXMgdGhlcmUgbm8gd2lubmVyXHJcbiAgICAgICAgbGV0IGlzVGhlcmVBV2lubmVyID0gZ2FtZS5pc1RoZXJlQVdpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaChpc1RoZXJlQVdpbm5lcj09PWZhbHNlKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVBsYXllci50eXBlPT09J0NPTVBVVEVSIFBsYXllcicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZERpdihib2FyZERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjb21wdXRlckF0dGFjaywgNDAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhY3RpdmUgcGxheWVyIGlzIEh1bWFuIG5lZWQgd2FpdCBmb3IgYSBjbGlja1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIGdhbWUgb3ZlciAtIGRpc2FibGUgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXJCb2FyZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgXHJcbi8vIGFkZCBhIGFkZC1zaGlwcyBCdXR0b24gYW5kIHRoZSBldmVudGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhZGRpbmdTaGlwcyh0dXJuLHBsYXllckNvbXB1dGVyKXtcclxuICAgIGNvbnN0IGFkZFNoaXBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgIFxyXG4gICAgY29uc3QgYWRkU2hpcHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkU2hpcHNEaXYuY2xhc3NOYW1lID0gJyc7XHJcbiAgICBhZGRTaGlwc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywnYWRkU2hpcHNEaXYnKTtcclxuICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZHNoaXBzJyk7XHJcbiAgICBhZGRTaGlwc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRTaGlwQnV0dG9uJyk7XHJcbiAgICBhZGRTaGlwc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIFNISVBTXCI7XHJcblxyXG4gICAgYWRkU2hpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjcmVhdGVDb250YWluZXJzKHR1cm4pO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgYWRkU2hpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRTaGlwcyhnYW1lLGh1bWFuQm9hcmQsYm9hcmREaXYsdHVybixjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdhZGRzaGlwcycpO1xyXG4gICAgICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQoYWRkU2hpcHNEaXYpO1xyXG4gICAgYWRkU2hpcHNEaXYuYXBwZW5kQ2hpbGQoYWRkU2hpcHNCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBib2FyZCBjb21wdXRlciBmb3IgSHVtYW4gYXR0YWNrc1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlckJvYXJkKGUpIHtcclxuICAgICAgICBzd2l0Y2goZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS50eXBlPT09J0hVTUFOIFBsYXllcicpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhIGZpbGEgZXMnLHNlbGVjdGVkUm93KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW47XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGEgY29sdW1uYSBlcycsc2VsZWN0ZWRDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiBjbGljayB0aGUgYm9hcmQgY29tcHV0ZXIgdGhlIHBsYXllciBpcyBwbGF5ZXJIdW1hblxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIEkndmUgY2xpY2tlZCBhIGNvbHVtbiBhbmQgbm90IHRoZSBnYXBzIGluIGJldHdlZW5cclxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRSb3cpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGdhbWUucGxheVJvdW5kKE51bWJlcihzZWxlY3RlZFJvdyksTnVtYmVyKHNlbGVjdGVkQ29sdW1uKSk7XHJcbiAgICAgICAgICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcih3YWl0VHVybiwnd2FpdCB5b3VyIHR1cm4nLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZWxldGVFcnJvck1lc3NhZ2VzLDgwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyQm9hcmQpO1xyXG5cclxuICAgICAgICAvLyBBZGQgYSBtZXNzYWdlIHRvIGF2b2lkIGNsaWNrIGluIGh1bWFuIGJvYXJkXHJcbiAgICAgICAgZnVuY3Rpb24gbm9GaXJlVG9GcmllbmQoZSl7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcih3YWl0VHVybiwnQkUgQ0FSRUZVTC4gZG9uXFwndCBzaG9vdCB5b3VyIGFsbGllcycudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcywxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbm9GaXJlVG9GcmllbmQpO1xyXG5cclxuICAgICAgICAvLyBBZGQgYSBmdW5jdGlvbiBmb3IgdGhlIGNvbXB1dGVyIGF0dGFja1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCl7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlBbGxBdHRhY2sgPSBnYW1lLmdldEh1bWFuUGxheWVyKCkuZ2FtZWJvYXJkWydhcnJheUFsbEF0dGFjayddO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGNoZWNrID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gYXJyYXlBbGxBdHRhY2suaGFzKGNvb3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKTtcclxuICAgICAgICAgICAgZ2FtZS5wbGF5Um91bmRDb21wdXRlcihjZWxsWzBdLGNlbGxbMV0pO1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB1cGRhdGVTY3JlZW4oKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWRkIGEgcmVzdWx0IGdhbWVcclxuICAgICAgICBjb25zdCByZXN1bHRHYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXN1bHRHYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdE1lc3NhZ2UnKTtcclxuICAgICAgICBjb25zdCBhY3RpdmVNZXNzYWdlID0gZ2FtZS5nZXRHYW1lTWVzc2FnZSgpO1xyXG4gICAgICAgICBjb25zdCBnZXRNZXNzYWdlID0gKGFjdGl2ZU1lc3NhZ2UpID0+IHsgXHJcbiAgICAgICAgICAgIGFjdGl2ZU1lc3NhZ2UgPSBnYW1lLmdldEdhbWVNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdEdhbWVEaXYudGV4dENvbnRlbnQgPSBhY3RpdmVNZXNzYWdlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKHJlc3VsdEdhbWVEaXYpO1xyXG5cclxuICAgICAgICAvLyBhZGQgYSBkaXYgd2l0aCBjb3VudCBkb3duIGZvciBjb21wdXRlciBhdHRhY2sgYW5kIHJlbW92ZSBpdCBcclxuICAgICAgICBmdW5jdGlvbiBhZGREaXYoYXJnKXtcclxuICAgICAgICAgICAgY29uc3QgYXR0YWNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCdhdHRhY2tNZXNzYWdlJyk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7IGdyaWQtY29sdW1uOiAyLzM7IGRpc3BsYXk6ZmxleDsgZmxleC13cmFwOm5vd3JhcDsnKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdpZCcsJ3RleHQnKTtcclxuICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ1RoZSBjb21wdXRlciB3aWxsIGF0dGFjayBvbiAnLnRvVXBwZXJDYXNlKCk7IFxyXG4gICAgICAgICAgICBsZXQgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRleHQxLnNldEF0dHJpYnV0ZSgnaWQnLCdjb3VudCcpO1xyXG4gICAgICAgICAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZm9udC1zaXplOjEuMXJlbTsgY29sb3I6cmVkOycpO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gNDsgXHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2UuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2UuYXBwZW5kQ2hpbGQodGV4dDEpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChjb3VudCwgMTAwMCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50KCl7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgPSBudW1iZXItMTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpLmlubmVyVGV4dCA9IGAgPT4gJHtudW1iZXJ9YDtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50JykuaW5uZXJUZXh0ID0gXCJET05FXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChyZW1vdmVEaXYsMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYXJnLmFwcGVuZENoaWxkKGF0dGFja01lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBjb3VudCBkb3duIG1lc3NhZ2UgZGl2XHJcbiAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZURpdigpe1xyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrTWVzc2FnZScpO1xyXG4gICAgICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIGV2ZW50bGlzdGVuZXIgZm9yIHJlc2V0XHJcbiAgICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxuZXdEb2MpO1xyXG5cclxuICAgICAgICAgZnVuY3Rpb24gbmV3RG9jKCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmREaXYpOyBcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xyXG4gICAgdHVybi5hcHBlbmRDaGlsZCh0dXJuRGl2KTtcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQocmVzdWx0KTtcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQod2FpdFR1cm4pO1xyXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoaHVtYW5Cb2FyZCk7XHJcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChjb21wdXRlckJvYXJkKTtcclxuICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7c2NyZWVuQ29udHJvbGxlcn0iLCIvLyBhIGNsYXNzIFNoaXAgXHJcbmNsYXNzIFNoaXAge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpeyAgIFxyXG4gICAgICAgIHRoaXMubGVuZ3RoID0gdmFsdWU7ICAgICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSAwO1xyXG4gICAgICAgIHRoaXMuYmVlblN1bmsgPSBmYWxzZTsgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGhpdChoaXRzPXRoaXMubnVtYmVyT2ZIaXRzKXtcclxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyA9IGhpdHMgKyAxIDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gdGhpcy5pc1N1bmsoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5udW1iZXJPZkhpdHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlzU3VuayhoaXRzPXRoaXMubnVtYmVyT2ZIaXRzKXtcclxuICAgICAgICBzd2l0Y2goaGl0cz09PXRoaXMubGVuZ3RoKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZW5TdW5rO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtTaGlwfTtcclxuIiwiZnVuY3Rpb24gc2hvd0Vycm9yKGFyZzEsYXJnMil7XHJcbi8vIGFyZzEgaXMgdGhlIGRpdiAtIGFyZzIgaXMgdGhlIG1lc3NhZ2UgZm9yIHRoZSB0eXBlIG9mIGVycm9yXHJcbiAgICAgIGxldCBpZCA9IGFyZzEuZ2V0QXR0cmlidXRlKCdpZCcpO1xyXG4gICAgICAgXHJcbiAgICAgICBjb25zdCBpbnB1dEVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgaW5wdXRFcnJvci5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xyXG4gICAgICAgaW5wdXRFcnJvci5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgIGlucHV0RXJyb3Iuc2V0QXR0cmlidXRlKCdpZCcsYCR7aWR9ZXJyb3JgKTtcclxuICAgICAgIGlucHV0RXJyb3Iuc2V0QXR0cmlidXRlKCAnYXJpYS1saXZlJywncG9saXRlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnRleHRDb250ZW50ID0gYXJnMjtcclxuICAgIFxyXG4gICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGFyZzEucGFyZW50Tm9kZTtcclxuICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaW5wdXRFcnJvcik7ICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IHNob3dFcnJvciB9OyIsImltcG9ydCB7IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGFyZzEsYXJnMixhcmczKXtcclxuICAgXHJcbiAgICBsZXQgYm9hcmREaXYgPSBhcmcxO1xyXG4gICAgbGV0IGJvYXJkQ29udGVudCA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcblxyXG4gICAgY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gICAgXHJcbiAgICBjZWxsc2luQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICBcclxuICAgICAvKiAgICB4LnRleHRDb250ZW50ID0gYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlOyAqL1xyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7IFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICcnOyBcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbEhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUYDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxubGV0IGFycmF5U2hpcHMgPSBbXTtcclxuICAgIGlmKGFyZzMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYXJyYXlTaGlwcyA9IGFyZzNbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddO1xyXG4gICAgfVxyXG5cclxubGV0IGNvb3JkU2hpcHNTdW5rID0gW107XHJcblxyXG5hcnJheVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHN3aXRjaChlbGVtZW50WydzaGlwRGV0YWlscyddWydiZWVuU3VuayddKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIGVsZW1lbnRbJ2Nvb3JkaW5hdGVzJ10uZm9yRWFjaCggKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuY29uc29sZS5sb2coY29vcmRTaGlwc1N1bmspO1xyXG5cclxubGV0IGFycmF5SW5kZXhOb2RlQW5kQ29vcmQgPSByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpO1xyXG5sZXQgaW5kZXhlc1N1bmtzID0gW107XHJcbmNvb3JkU2hpcHNTdW5rLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICBhcnJheUluZGV4Tm9kZUFuZENvb3JkLmZvckVhY2goKHgpPT57XHJcbiAgICAgICAgaWYoeFsxXVswXT09PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICBpbmRleGVzU3Vua3MucHVzaCh4WzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuaW5kZXhlc1N1bmtzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgIGxldCBjZWxsID0gY2VsbHNpbkJvYXJkW2VsZW1lbnRdO1xyXG4gICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGxTdW5rJyk7XHJcbiAgIGNlbGwudGV4dENvbnRlbnQgPSAnU1VOSyc7XHJcbn0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZChhcmcpe1xyXG4vKiBhcmcgaXMgdGhlIGRpdiB3aXRoIHRoZSBidXR0b24gY2VsbHMgKi9cclxubGV0IGJvYXJkRGl2ID0gYXJnO1xyXG5sZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcbmNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG5cclxuY2VsbHNpbkJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgXHJcbiAgeC5jbGFzc05hbWUgPSAnJzsgICAgICAgLy8gdG8gY2xlYXIgcHJldmlvdXMgY2xhc3NcclxuICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICB4LnRleHRDb250ZW50ID0gJyc7XHJcbn0pXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHt1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQsIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkfTsiLCJpbXBvcnQgeyByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzKGFyZzEsYXJnMixhcmczKXtcclxuXHJcbiAgICBsZXQgYm9hcmREaXYgPSBhcmcxO1xyXG4gICAgbGV0IGJvYXJkQ29udGVudCA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcblxyXG4gICAgY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gICAgXHJcbiAgICBjZWxsc2luQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIFxyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXsgICAvLyBFTCBFUlJPUiBBTCBURVJNSU5BUiBFTCBKVUVHTyBMTyBEQSBFTiBFU1RBIExJTkVBIGFycmF5IGZvciBlYWNoXHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbFNoaXBBZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBTSElQYDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbEhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUYDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBhcnJheVNoaXBzID0gW107XHJcbiAgICBpZihhcmczICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFycmF5U2hpcHMgPSBhcmczWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXTtcclxuICAgIH1cclxuXHJcbmxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xyXG5cclxuYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZWxlbWVudFsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBlbGVtZW50Wydjb29yZGluYXRlcyddLmZvckVhY2goICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgYXJyYXlJbmRleE5vZGVBbmRDb29yZCA9IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCk7XHJcbmxldCBpbmRleGVzU3Vua3MgPSBbXTtcclxuY29vcmRTaGlwc1N1bmsuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgIGFycmF5SW5kZXhOb2RlQW5kQ29vcmQuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICBpZih4WzFdWzBdPT09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5pbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgY29uc29sZS5sb2coY2VsbHNpbkJvYXJkW2VsZW1lbnRdKTtcclxuICAgbGV0IGNlbGwgPSBjZWxsc2luQm9hcmRbZWxlbWVudF07XHJcbiAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFN1bmsnKTtcclxuICAgY2VsbC50ZXh0Q29udGVudCA9ICdTVU5LJztcclxufSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzKGFyZyl7XHJcbiAvKiBhcmcgaXMgdGhlIGRpdiB3aXRoIHRoZSBidXR0b24gY2VsbHMgKi9cclxuIGxldCBib2FyZERpdiA9IGFyZztcclxuIGxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuIFxyXG4gY2VsbHNpbkJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgXHJcbiAgIHguY2xhc3NOYW1lID0gJyc7ICAgICAgIC8vIHRvIGNsZWFyIHByZXZpb3VzIGNsYXNzXHJcbiAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiB9KVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7dXBkYXRlQ2VsbHMsIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
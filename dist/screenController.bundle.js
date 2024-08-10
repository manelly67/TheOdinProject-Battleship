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
    
        gameContainer.classList.add('container');
        turn.classList.add('turn');
        turnDiv.classList.add('turnDiv');
        waitTurn.setAttribute('style','grid-column:4/5;');
        boardDiv.classList.add('board');
        result.classList.add('result');
        humanBoard.classList.add('board-human');
        computerBoard.classList.add('hide');


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


    gameContainer.appendChild(turn);
    gameContainer.appendChild(boardDiv); 
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
                                /* (index[0]) (index[1]);  */
      let x = index[1];         /* para leer el node dentro del nodeList */
        x.textContent = boardContent[x.dataset.row][x.dataset.column].value;
        switch(boardContent[x.dataset.row][x.dataset.column].value===1){
            case true:
                x.classList.add('cell');
               /*  x.textContent = ''; */
            default:
                switch(boardContent[x.dataset.row][x.dataset.column].value===0){
                    case true:
                      x.classList.add('cell');
                    /*   x.textContent = ''; */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyZWVuQ29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0RDtBQUN0QjtBQUM2QjtBQUMxQjtBQUNnQjtBQUNaO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxtQkFBbUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzQkFBc0I7QUFDbkM7QUFDQSxrQ0FBa0MsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsRUFBRTtBQUM5Qyx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQSw0Q0FBNEMsY0FBYyx1QkFBdUI7QUFDakYsd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QseUJBQXlCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixFQUFFLHNEQUFJLEVBQUU7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLElBQUk7QUFDOUM7QUFDQSx5Q0FBeUMsSUFBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUUseURBQU8sRUFBRTtBQUM1QjtBQUNBO0FBQ0EsZ0NBQWdDLHVEQUFLO0FBQ3JDLGdEQUFnRCx1REFBSyxJQUFJO0FBQ3pEO0FBQ0EsK0NBQStDLHVEQUFLLElBQUk7QUFDeEQ7QUFDQSx5Q0FBeUMsdURBQUs7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzRUFBbUI7QUFDM0IsT0FBTztBQUNQO0FBQ0E7QUFDQSxRQUFRLHNFQUFtQjtBQUMzQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFlBQVksc0RBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNFQUFtQjtBQUMvQjtBQUNBLFlBQVksb0RBQVc7QUFDdkIsK0RBQStELEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsWUFBWSxzREFBUztBQUNyQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CLFFBQVEsMERBQVc7QUFDbkIsUUFBUSxvREFBVztBQUNuQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxrQkFBa0Isa0JBQWtCLGtCQUFrQjtBQUNoSDtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CLFFBQVEsMERBQVc7QUFDbkIsUUFBUSxnRkFBd0I7QUFDaEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDZCQUE2QixTQUFTO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlDQUFpQyxTQUFTO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5Qix3QkFBd0IsYUFBYTtBQUNyQyxzQkFBc0IsSUFBSSxHQUFHLFNBQVM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5Qix3QkFBd0IsYUFBYTtBQUNyQztBQUNBLDBCQUEwQixJQUFJLEdBQUcsU0FBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHlCQUF5QjtBQUN6QjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaZ0M7QUFDOEI7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQ0FBTTtBQUMxQjtBQUNBLG9CQUFvQiwyQ0FBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCLDJFQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHdCQUF3QiwyRUFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25IOEI7QUFDNEU7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsc0RBQUksRUFBRSx5REFBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsVUFBVTtBQUNsQztBQUNBLHdCQUF3QixhQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixvRUFBYztBQUM1QztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxrQ0FBa0Msc0VBQWdCLFFBQVEsc0VBQWdCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1Q0FBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxzRUFBZ0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBZ0I7QUFDNUI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDLHNFQUFnQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyx1Q0FBSTtBQUMzQyx3Q0FBd0MseUJBQXlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNERBQTRELFdBQVcsa0JBQWtCLCtCQUErQjtBQUN4SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksc0RBQUksRUFBRTtBQUNsQyx3QkFBd0IsSUFBSSx5REFBTyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSndDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRFQUFzQjtBQUM1QztBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNEVBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDbUQ7QUFDMEI7QUFDdkI7QUFDZjtBQUNZO0FBQ1o7QUFDNEI7QUFDMUI7QUFDZ0I7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0VBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQSx3QkFBd0IsSUFBSSxzREFBSSxFQUFFO0FBQ2xDLDRCQUE0QixJQUFJLHlEQUFPLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksc0RBQUksRUFBRTtBQUNsQyw0QkFBNEIsSUFBSSx5REFBTyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBVztBQUNuQixRQUFRLGdGQUF3QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFnQjtBQUN4QixPQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQVEsb0RBQVE7QUFDaEI7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0RBQVM7QUFDekIsMkJBQTJCLGtFQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVM7QUFDckIsdUJBQXVCLGtFQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0VBQWlCO0FBQ3pDO0FBQ0E7QUFDQSx1QkFBdUIsMkVBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELGtCQUFrQixjQUFjLGlCQUFpQjtBQUNoSDtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxPQUFPO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2M7Ozs7Ozs7Ozs7Ozs7OztBQzFCZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxHQUFHO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDZCQUE2Qiw2RUFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2dFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFDaEM7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCLDZFQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hZGQtc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYXV4aWxpYXJ5LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtY29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZS1kaXYtZXJyb3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcmFuZG9tLXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NjcmVlbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2hvdy1lcnJvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUtY29tcHV0ZXItYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIGFsZl95fSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc30gZnJvbSAnLi91cGRhdGUnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQgfSBmcm9tIFwiLi91cGRhdGUtY29tcHV0ZXItYm9hcmRcIjtcclxuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi9zaG93LWVycm9yJztcclxuaW1wb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vZGVsZXRlLWRpdi1lcnJvcic7XHJcbmltcG9ydCB7IHJhbmRvbVNoaXBzIH0gZnJvbSBcIi4vcmFuZG9tLXNoaXBzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRTaGlwcyhhcmcxLGFyZzIsYXJnMyxhcmc0LGFyZzUsYXJnNil7XHJcbiAgICAvKiBhcmcgaXMgdGhlIGdhbWUgIGFyZzIgaXMgdGhlIGRpdiB3aXRoIHRoZSBodW1hbmJvYXJkICBcclxuICAgIGFyZzMgdG8gc2hvdyB0aGUgb3B0aW9ucyBhcmc0IHRvIHNob3cgcmFuZG9tIGJ1dHRvblxyXG4gICAgYXJnNSBpcyB0aGUgZGl2IHdpdGggdGhlIGNvbXB1dGVyYm9hcmQgYXJnNiBpcyB0aGUgY29udGVudCBjb21wdXRlciBib2FyZCovXHJcbmNvbnN0IGdhbWUgPSBhcmcxO1xyXG5jb25zdCBodW1hbkJvYXJkID0gYXJnMjtcclxuY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xyXG5jb25zdCBjb21wdXRlckJvYXJkID0gYXJnNTtcclxuY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBhcmc2O1xyXG5cclxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkRm9yQWRkJyk7XHJcbmdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZEZvckFkZCcpO1xyXG5jb25zdCBkaXZGb3JFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kaXZGb3JFcnJvci5zZXRBdHRyaWJ1dGUoJ2lkJywnZGl2Rm9yRXJyb3InKTtcclxuZGl2Rm9yRXJyb3Iuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxIC8gMjsgZ3JpZC1jb2x1bW46IDQgLyA1OycpXHJcblxyXG5jb25zdCBzaGlwTGVuZ3RoPVs1LDMsNCw2LDQsNV07XHJcbiAgICAgICAgXHJcbmZvcihsZXQgaT0xOyBpPD1zaGlwTGVuZ3RoLmxlbmd0aDsgKytpKXtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLGBmb3JtJHtpfWApO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtSW5wdXQnKTtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLGBzdWJtaXQke2l9YCk7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBgQUREIE7CsCAke2l9YDtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRTaGlwQnV0dG9uJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6Z3JlZW47IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiByaWdodDsnKTtcclxuICAgIHRleHQuaW5uZXJUZXh0ID0gYCR7c2hpcExlbmd0aFtpLTFdfSBzcXVhcmVzIGxvbmdpdHVkZWA7XHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IHJhZGlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JtUmFkaW8nKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvckhvcml6b250YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgaG9yaXpvbnRhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9yVmVydGljYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgdmVydGljYWxseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMTJweCcpO1xyXG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLmlubmVyVGV4dCA9ICdsZWZ0LXRvLXJpZ2h0JztcclxuICAgIGxhYmVsRm9ySG9yaXpvbnRhbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIGxhYmVsRm9yVmVydGljYWwuaW5uZXJUZXh0ID0gJ3RvcC10by1kb3duJztcclxuICAgIGxhYmVsRm9yVmVydGljYWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b3AtdG8tZG93bicpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCdpZCcsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkaXJlY3Rpb24nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9wLXRvLWRvd24nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3RvcC10by1kb3duJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2RpcmVjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvb3JkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb29yZFJvdy5pbm5lclRleHQgPSAnUk9XOiAnO1xyXG4gICAgY29uc3QgY29vcmRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvb3JkQ29sdW1uLmlubmVyVGV4dCA9ICdDT0xVTU46ICc7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8cm93czsgKytpKXtcclxuICAgICAgICBjb25zdCByb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJvd0xhYmVsLmlubmVyVGV4dCA9IGkrMTtcclxuICAgICAgICByb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYHJvdyR7aSsxfWApO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCdpZCcsYHJvdyR7aSsxfWApO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Jvd1NlbGVjdGVkJyk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsaSsxKTtcclxuXHJcbiAgICAgICAgY29vcmRSb3cuYXBwZW5kQ2hpbGQocm93TGFiZWwpO1xyXG4gICAgICAgIGNvb3JkUm93LmFwcGVuZENoaWxkKGlucHV0Um93KTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgZm9yKGxldCBqPTA7IGo8Y29sdW1uczsgKytqKXtcclxuICAgICAgICBjb25zdCBjb2x1bW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbHVtbkxhYmVsLmlubmVyVGV4dCA9IGFsZl95W2pdO1xyXG4gICAgICAgIGNvbHVtbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgY29sdW1uJHthbGZfeVtqXX1gKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgnaWQnLGBjb2x1bW4ke2FsZl95W2pdfWApO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NvbHVtblNlbGVjdGVkJyk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCd2YWx1ZScsYWxmX3lbal0pO1xyXG5cclxuICAgICAgICBjb29yZENvbHVtbi5hcHBlbmRDaGlsZChjb2x1bW5MYWJlbCk7XHJcbiAgICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoaW5wdXRDb2x1bW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGhvcml6b250YWxseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB2ZXJ0aWNhbGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxldCBkaXJlY3Rpb25TZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gZGlyZWN0aW9uUmFkaW9WYWx1ZSgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImRpcmVjdGlvblwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICBkaXJlY3Rpb25TZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgc2hvd0Vycm9yKHJhZGlvRGl2LCdtdXN0IHNlbGVjdCBkaXJlY3Rpb24nLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgbGV0IHJvd1NlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiByb3dSYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cInJvd1NlbGVjdGVkXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIHJvd1NlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICAgICByb3dTZWxlY3RlZCA9IDE7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiByb3dTZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIGNvbHVtblJhZGlvVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJjb2x1bW5TZWxlY3RlZFwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICBjb2x1bW5TZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSAnYSc7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiBjb2x1bW5TZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNpemUgPSBzaGlwTGVuZ3RoW2ktMV07XHJcblxyXG4gICAgICAgIGxldCBzaGlwTnVtYmVyID0gaTtcclxuICAgIFxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25SYWRpb1ZhbHVlKCk7XHJcblxyXG4gICAgICAgIGxldCByb3dTZWxlY3RlZCA9IHJvd1JhZGlvVmFsdWUoKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9IGNvbHVtblJhZGlvVmFsdWUoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvb3JkID0gW051bWJlcihyb3dTZWxlY3RlZCksY29sdW1uU2VsZWN0ZWRdO1xyXG5cclxuICAgICAgICBsZXQgc2hpcCA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5kYXRhU2hpcHMoY29vcmQsZGlyZWN0aW9uLHNpemUsc2hpcE51bWJlcik7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2hpcCE9PW51bGwpe1xyXG4gICAgICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdCb2FyZCA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5wbGFjZVNoaXBzSW5UaGVCb2FyZChzaGlwKTtcclxuICAgICAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCwgbmV3Qm9hcmQpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmb3JtJHtpfWApO1xyXG4gICAgICAgICAgICBzdWJtaXRSZWFkeS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtSW5wdXQnKS5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGdyaWQsZGl2Rm9yUmFuZG9tKTtcclxuICAgICAgICAgICAgICAgIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoYXJnMyxjb21wdXRlckJvYXJkLHNoaXBMZW5ndGgscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcihkaXZGb3JFcnJvciwnU0VMRUNUIEFOT1RIRVIgTE9DQVRJT04nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICBhcmczLmFwcGVuZENoaWxkKGdyaWQpO1xyXG4gICAgZ3JpZC5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocmFkaW9EaXYpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG4gICAgdGl0bGUuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChkaXJlY3Rpb25JbnB1dCk7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChjb29yZFJvdyk7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZChjb29yZENvbHVtbik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvckhvcml6b250YWwpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbGx5KTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9yVmVydGljYWwpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQodmVydGljYWxseSk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkaXZGb3JSYW5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdkZvclJhbmRvbS5pbm5lclRleHQgPSAnQ2xpY2sgaGVyZSBmb3IgYSByYW5kb20gZmxlZXQgb2Ygc2hpcHMnO1xyXG4gICAgZGl2Rm9yUmFuZG9tLmNsYXNzTGlzdC5hZGQoJ3JhbmRvbXNoaXBzJyk7XHJcbiAgICBjb25zdCBidXR0b25SYW5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ1dHRvblJhbmRvbS5pbm5lclRleHQgPSAnUkFORE9NIEZMRUVUJztcclxuICAgIGJ1dHRvblJhbmRvbS5jbGFzc0xpc3QuYWRkKCdhZGRTaGlwQnV0dG9uJyk7XHJcblxyXG4gICAgYnV0dG9uUmFuZG9tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQscGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByYW5kb21TaGlwcyhwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10sc2hpcExlbmd0aCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG4gICAgICAgIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGdyaWQsZGl2Rm9yUmFuZG9tKTtcclxuICAgICAgICByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzMsY29tcHV0ZXJCb2FyZCxzaGlwTGVuZ3RoLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGFyZzQuYXBwZW5kQ2hpbGQoZGl2Rm9yUmFuZG9tKTtcclxuICAgIGFyZzQuYXBwZW5kQ2hpbGQoZGl2Rm9yRXJyb3IpO1xyXG4gICAgZGl2Rm9yUmFuZG9tLmFwcGVuZENoaWxkKGJ1dHRvblJhbmRvbSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxBZGRTaGlwc0RpdihhcmcxLGFyZzIpe1xyXG4gICAgLy8gYXJnMSBhbmQgYXJnMiBhcmUgdGhlIGJvdGggZGl2IHRvIHdpbGwgYmUgcmVtb3ZlZFxyXG4gICAgYXJnMS5yZW1vdmUoKTtcclxuICAgIGFyZzIucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoYXJnMSxhcmcyLGFyZzMsYXJnNCl7XHJcbiAgICAgIC8qICBhcmcxIGlzIHRoZSBkaXYgdG8gd3JpdGUgdGhlIGhlYWQgKi9cclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gYXJnMjtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gYXJnMztcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzQ7XHJcblxyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY29tcHV0ZXInKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZENvbXB1dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZENvbXB1dGVyLmlubmVyVGV4dCA9ICd0aGlzIGlzIHlvdXIgZW5lbXkgJy50b1VwcGVyQ2FzZSgpKycgQ2xpY2sgVG8gQXR0YWNrJztcclxuICAgICAgICBoZWFkQ29tcHV0ZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7IGdyaWQtY29sdW1uOiA0LzU7IHBhZGRpbmctbGVmdDoyNSU7IGNvbG9yOmxpZ2h0eWVsbG93OycpO1xyXG4gICAgICAgIGFyZzEuYXBwZW5kQ2hpbGQoaGVhZENvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByYW5kb21TaGlwcyhwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ10sc2hpcExlbmd0aCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkU2hpcHN9OyIsImNvbnN0IHJvd3MgPSAxMztcclxuY29uc3QgY29sdW1ucyA9IDEyO1xyXG5cclxuY29uc3QgYWxmX3kgPSBbXHJcbiAgICAnYScsJ2InLCdjJywnZCcsJ2UnLCdmJywnZycsJ2gnLCdpJywnaicsJ2snLCdsJ1xyXG4gICAgIF07XHJcblxyXG5mdW5jdGlvbiBzaGlmdENvb3JkaW5hdGVzKFt2YWx1ZV94LHZhbHVlX3ldKXtcclxuICAgIFxyXG4gICAgbGV0IFt4LHldID0gWzEsJ2EnXTtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFsZl95LmluY2x1ZGVzKHZhbHVlX3kudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFsZl95LmluZGV4T2YodmFsdWVfeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3gseV0gPSBbIHZhbHVlX3gtMSwgaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkxvY2F0aW9uKFt4LHldLGRpcmVjdGlvbixrZXkpe1xyXG5sZXQgYXJyYXlPZkNvb3JkaW5hdGVzID0gW107XHJcbmxldCBpbml0aWFsWCA9IHg7XHJcbmxldCBpbml0aWFsWSA9IGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHN3aXRjaChkaXJlY3Rpb249PT0nbGVmdC10by1yaWdodCcpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICBpZihhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSkgKyBrZXkgPiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyB4LCBhbGZfeVtpbml0aWFsWSArIGldIF0pO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbj09PSd0b3AtdG8tZG93bicpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBpZihpbml0aWFsWCArIGtleS0xID4gcm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIGluaXRpYWxYICsgaSwgeSBdKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDb29yZGluYXRlcyhbeCx5XSl7XHJcbiAgICBpZih4ID4gMCAmJiB4IDw9IHJvd3MgJiYgYWxmX3kuaW5jbHVkZXMoeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pe1xyXG4gICAgbGV0IFt4LHldID0gWzEsJ2EnXTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gW3gseV0gPSBbIHJvdyArIDEsIGFsZl95W2NvbHVtbl0gXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKXtcclxuICAgIGxldCBbcm93LGNvbHVtbl0gPSBbMCwwXTtcclxuICAgIGxldCByb3dTZWxlY3RlZCA9IGNvb3JkWzBdLTE7XHJcbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBhbGZfeS5pbmRleE9mKGNvb3JkWzFdLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgcmV0dXJuIFtyb3csY29sdW1uXSA9IFtOdW1iZXIocm93U2VsZWN0ZWQpLCBOdW1iZXIoY29sdW1uU2VsZWN0ZWQpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpIHtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIGFycmF5LnB1c2goYCR7aSsxfSwke2FsZl95W2pdfWApO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKXtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgbGV0IG49IC0xO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIG4gPSBuICsgMTtcclxuICAgICAgICBhcnJheS5wdXNoKFtuLFtgJHtpKzF9LCR7YWxmX3lbal19YF1dKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJvd3MsIGNvbHVtbnMsIGFsZl95LCBzaGlmdENvb3JkaW5hdGVzLCBhc3NpZ25Mb2NhdGlvbiwgXHJcbiAgICBjaGVja0Nvb3JkaW5hdGVzLCBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMsIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMsXHJcbiAgICAgICAgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9OyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcnMoYXJnMSkge1xyXG4gICAgLyogdGhlIGFyZzEgaXMgdGhlIHBhcmVudCBjb250YWluZXIgICAqL1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRGb3JBZGQnKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2dyaWRGb3JBZGQnKTtcclxuICAgIFxyXG4gICAgICAgIGFyZzEuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9OyIsImZ1bmN0aW9uIGRlbGV0ZUVycm9yTWVzc2FnZXMoKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJyk7XHJcbiAgICAvKiBwYXJhIGNyZWFyIHVuIGFycmF5IGRlc2RlIGVsIE5vZGVMaXN0ICovXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzQXJyYXkgPSBbLi4uZXJyb3JNZXNzYWdlc107XHJcbiAgICBjb25zdCBpdGVyYXRvciA9IGVycm9yTWVzc2FnZXNBcnJheS5lbnRyaWVzKCk7XHJcbiAgICBlcnJvck1lc3NhZ2VzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAvKiAgIGNvbnNvbGUubG9nKGluZGV4WzBdKTtcclxuICAgICAgICAgY29uc29sZS5sb2coaW5kZXhbMV0pOyAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICB4LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKFxyXG4gICAgICAgIHBsYXllclJlYWwgPSBcIkhVTUFOIFBsYXllclwiLFxyXG4gICAgICAgIHBsYXllckNvbXB1dGVyID0gXCJDT01QVVRFUiBQbGF5ZXJcIixcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlID0gJycgKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgbmV3IFBsYXllcihwbGF5ZXJSZWFsKVxyXG4gICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBsYXllcihwbGF5ZXJDb21wdXRlcilcclxuICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAod2lubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogdGhlIHBsYXllciBkb2VzbnQgY2hhbmdlICovXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXI7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvKiBzd2l0Y2ggcGxheWVyKi9cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfTtcclxuICAgICAgICAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGJvYXJkUmVhbCA9ICgpID0+IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddWydib2FyZCddO1xyXG4gICAgICAgICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSAoKSA9PiBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuXHJcbiAgICAgICAgICAgY29uc3QgZ2V0Q29tcHV0ZXJQbGF5ZXIgPSAoKSA9PiBwbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgIGNvbnN0IGdldEh1bWFuUGxheWVyID0gKCkgPT4gcGxheWVyc1swXTtcclxuXHJcbiAgICAgICAgICAgY29uc3QgaXNUaGVyZUFXaW5uZXIgPSAoKSA9PiB3aW5uZXI7XHJcblxyXG4gICAgY29uc3QgcHJpbnROZXdSb3VuZCA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBib2FyZFJlYWwoKTtcclxuICAgICAgICAgICAgYm9hcmRDb21wdXRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIHN3aXRjaCAod2lubmVyKSB7XHJcbiAgICAgICAgICAgY2FzZSB0cnVlOiAgIFxyXG4gICAgICAgICAgICAgICBtZXNzYWdlID0gIGdldEFjdGl2ZVBsYXllcigpLnR5cGUgKyAnIFdPTic7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICcnOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfTsgXHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7ICAgICAgICAgXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBnZXRHYW1lTWVzc2FnZSA9ICgpID0+IG1lc3NhZ2U7ICAgIFxyXG5cclxuICAgICAgY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHBsYXllcnNbMF1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiggcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ10uZ2V0VG90YWxTdW5rKCkgPT09IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddLmxlbmd0aCApe1xyXG4gICAgICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2lubmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7IFxyXG4gICAgICAgIHdpbm5lciA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcbiAgICAgICAgLyogdGhpcyByZXNldCBpcyBub3QgYmVlbiB1c2VkICovXHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwbGF5Um91bmQgPSAocm93LGNvbHVtbikgPT4ge1xyXG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgICAgIGlmICggd2lubmVyID09PSB0cnVlICl7IFxyXG4gICAgICAgICAgICByZXNldEdhbWUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGNvb3JkID0gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pO1xyXG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkID0gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ107XHJcbiAgICAgICAgICAgIGxldCBib2FyZCA9IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydib2FyZCddOyAgIFxyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXlSb3VuZENvbXB1dGVyID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZhbmRvIGp1ZWdvJyk7XHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgbGV0IGJvYXJkID0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107ICAgXHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNvcmRlZEF0dGFjayhjb29yZCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNoZWNrRm9yV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICggYm9hcmQgKSA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtwbGF5Um91bmQscGxheVJvdW5kQ29tcHV0ZXIsIGdldEFjdGl2ZVBsYXllciwgXHJcbiAgICAgICAgZ2V0R2FtZU1lc3NhZ2UsIGJvYXJkUmVhbCwgYm9hcmRDb21wdXRlciwgcmVzZXRHYW1lLFxyXG4gICAgICAgICBnZXRDb21wdXRlclBsYXllciwgZ2V0SHVtYW5QbGF5ZXIsIGlzVGhlcmVBV2lubmVyfTtcclxufVxyXG5cclxuZXhwb3J0IHtnYW1lQ29udHJvbGxlcn07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XHJcbmltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBjaGVja0Nvb3JkaW5hdGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuXHJcblxyXG4vLyBhIGNsYXNzIEdhbWVib2FyZFxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5nZXRCb2FyZChyb3dzLCBjb2x1bW5zKTtcclxuICAgICAgICB0aGlzLmFycmF5TWlzc2VkID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hcnJheUFsbEF0dGFjayA9IG5ldyBTZXQoW10pO1xyXG4gICAgICAgIHRoaXMuYWxsU2hpcHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2FyZCggcm93cywgY29sdW1ucywgYm9hcmQ9W10pe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkW2ldID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaCh0aGlzLmNlbGwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjZWxsKCl7XHJcbiAgIFxyXG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4ge3ZhbHVlfTsgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZGF0YVNoaXBzKFt4LHldLGRpcmVjdGlvbixzaXplLHNoaXBOdW1iZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzID0gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLHNpemUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNoaXBDb29yZGluYXRlcz09PW51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IG5vdEF2YWlsYWJsZSA9IHNoaXBDb29yZGluYXRlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoeCkgPT4gdGhpcy5ib2FyZFtzaGlmdENvb3JkaW5hdGVzKHgpWzBdXVtzaGlmdENvb3JkaW5hdGVzKHgpWzFdXS52YWx1ZSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICAobm90QXZhaWxhYmxlLmluY2x1ZGVzKHRydWUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzVG9TdHJpbmcgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKCh4KSA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBsZXQgb25lU2hpcCA9IHsgXHJcbiAgICAgICAgICAgICAgICAnc2hpcE51bWJlcic6c2hpcE51bWJlciwgXHJcbiAgICAgICAgICAgICAgICAnc2hpcERldGFpbHMnOiBuZXcgU2hpcChzaXplKSxcclxuICAgICAgICAgICAgICAgICdjb29yZGluYXRlcyc6IHNoaXBDb29yZGluYXRlc1RvU3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2gob25lU2hpcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbmVTaGlwO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwc0luVGhlQm9hcmQoIG9uZVNoaXAgKXtcclxuICAgICAgICBsZXQgYXJyYXkgPSBvbmVTaGlwWydjb29yZGluYXRlcyddO1xyXG4gICAgICAgIGxldCByZXZlcnNlU3RyaW5nID0gYXJyYXkubWFwKCh4KT0+IHguc3BsaXQoJywnKSk7XHJcbiAgICAgICAgbGV0IGFycmF5SW5Cb2FyZCA9IHJldmVyc2VTdHJpbmcubWFwKCAodmFsdWVzKSA9PiBzaGlmdENvb3JkaW5hdGVzKHZhbHVlcykpO1xyXG4gICAgICAgIGFycmF5SW5Cb2FyZC5tYXAoKFt4LHldKSA9PiB0aGlzLmJvYXJkW3hdW3ldLnZhbHVlID0gMSApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWNvcmRlZEF0dGFjayggW3gseV0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMT0odmFsdWUpPT50aGlzLnJlY29yZGVkQ29vcmQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMj0odmFsdWUpPT50aGlzLnJlY29yZGVkTWlzc2VkQ29vcmQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApeyAgICAgICAgICAgICBcclxuICAgICAgICBpZighY2hlY2tDb29yZGluYXRlcyhbeCx5XSkgfHwgdGhpcy5hcnJheUFsbEF0dGFjay5oYXMoW3gseS50b0xvd2VyQ2FzZSgpXS50b1N0cmluZygpKSApe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IFtib2FyZFgsYm9hcmRZXSA9IHNoaWZ0Q29vcmRpbmF0ZXMoW3gseV0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAwKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMShbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazIoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSAyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMShbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IHRoaXMuYWxsU2hpcHMubGVuZ3RoOyArK2kpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFsbFNoaXBzW2ldWydjb29yZGluYXRlcyddLmluY2x1ZGVzKFt4LHldLnRvU3RyaW5nKCkpPT09dHJ1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAgPSB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxTaGlwc1tpXVsnc2hpcERldGFpbHMnXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY29yZGVkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5QWxsQXR0YWNrKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG4gICAgIHJlY29yZGVkTWlzc2VkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5TWlzc2VkKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG5cclxuICAgIGdldFRvdGFsU3Vuaygpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0ICB0b3RhbFN1bmsgPSB0aGlzLmFsbFNoaXBzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbVsnc2hpcERldGFpbHMnXS5iZWVuU3Vuaz09PXRydWUgPyB0b3RhbCArIDEgOiB0b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VuaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U25hcHNob3QoKXtcclxuICAgICAgICBsZXQgdG90YWxTdW5rID0gdGhpcy5nZXRUb3RhbFN1bmsoKTtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBpZih0b3RhbFN1bms9PT10aGlzLmFsbFNoaXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlID0gYEFsbCB5b3VyIHNoaXBzIGhhdmUgYmVlbiBzdW5rYDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuICBtZXNzYWdlID0gYFNoaXBzIHRoYXQgaGF2ZSBiZWVuIHN1bms6ICR7dG90YWxTdW5rfSAtIFNoaXBzIGFmbG9hdDogJHt0aGlzLmFsbFNoaXBzLmxlbmd0aC10b3RhbFN1bmt9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQm9hcmQoKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0udmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7R2FtZWJvYXJkfTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuLy8gYSBjbGFzcyBQbGF5ZXJcclxuY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7IFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gdGhpcy5jcmVhdGVHYW1lYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVHYW1lYm9hcmQoKXtcclxuICAgICAgICByZXR1cm4gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtQbGF5ZXJ9OyIsImltcG9ydCB7YWxsQ29vcmRpbmF0ZXNQb3NpYmxlc30gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJyA7XHJcblxyXG5mdW5jdGlvbiByYW5kb21TaGlwcyhhcmcxKXtcclxuICAgIC8qIGFyZzEgaXMgdGhlIHBsYXllckdhbWVib2FyZCBhcmcyIGlzIHRoZSBhcnJheSB3aXRoIGxlbmd0aCovXHJcbiAgIFxyXG4gICBjb25zdCBzaGlwTGVuZ3RoPVs1LDMsNCw2LDQsNV07XHJcbiAgIGNvbnN0IGFycmF5RGlyZWN0aW9uID0gWydsZWZ0LXRvLXJpZ2h0JywndG9wLXRvLWRvd24nXTtcclxuICAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICAgXHJcblxyXG4gICBmb3IgKCBsZXQgaT0wOyBpIDwgc2hpcExlbmd0aC5sZW5ndGg7ICsraSl7XHJcbiAgICBsZXQgc2hpcCA9IG51bGw7IFxyXG5cclxuICAgIHdoaWxlKHNoaXA9PT1udWxsKXtcclxuICAgIGxldCBudW1iZXIgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx0b3RhbENlbGxzLmxlbmd0aCk7XHJcbiAgICBsZXQgY29vcmQgPSAgdG90YWxDZWxsc1tudW1iZXItMV0uc3BsaXQoJywnKTtcclxuICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGFycmF5RGlyZWN0aW9uW3JhbmRvbUludEZyb21JbnRlcnZhbCgxLDIpLTFdO1xyXG4gICAgc2hpcCA9IGFyZzEuZGF0YVNoaXBzKGNvb3JkLGRpcmVjdGlvbixzaGlwTGVuZ3RoW2ldLGkrMSk7XHJcbiAgICB9XHJcbiAgICBhcmcxLnBsYWNlU2hpcHNJblRoZUJvYXJkKCBzaGlwICk7XHJcblxyXG4gICB9XHJcblxyXG5yZXR1cm4gYXJnMTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzKCl7XHJcbiAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICBsZXQgbnVtYmVyID0gcmFuZG9tSW50RnJvbUludGVydmFsKDEsdG90YWxDZWxscy5sZW5ndGgpO1xyXG4gICAgbGV0IGNvb3JkID0gIHRvdGFsQ2VsbHNbbnVtYmVyLTFdLnNwbGl0KCcsJyk7XHJcbiAgICBjb29yZCA9IFtOdW1iZXIoY29vcmRbMF0pLGNvb3JkWzFdXTtcclxuICByZXR1cm4gY29vcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUludEZyb21JbnRlcnZhbChtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbmV4cG9ydCB7cmFuZG9tU2hpcHMsIHJhbmRvbUNvb3JkaW5hdGVzfTsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vZ2FtZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgZnJvbUNvb3JkaW5hdGVzdG9DZWxsIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9IGZyb20gJy4vY3JlYXRlLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IGFkZFNoaXBzIH0gZnJvbSAnLi9hZGQtc2hpcHMnO1xyXG5pbXBvcnQgeyByYW5kb21Db29yZGluYXRlcyB9IGZyb20gJy4vcmFuZG9tLXNoaXBzJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHMgfSBmcm9tICcuL3VwZGF0ZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCB9IGZyb20gJy4vdXBkYXRlLWNvbXB1dGVyLWJvYXJkJztcclxuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi9zaG93LWVycm9yJztcclxuaW1wb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vZGVsZXRlLWRpdi1lcnJvcic7XHJcblxyXG5mdW5jdGlvbiBzY3JlZW5Db250cm9sbGVyKGFyZykge1xyXG4gICAgLyogYXJnIGlzIHRoZSBnYW1lIGNvbnRhaW5lciAqL1xyXG5cclxuICAgIGNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gYXJnO1xyXG4gICAgICAgIGNvbnN0IHR1cm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0dXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgd2FpdFR1cm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGh1bWFuQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBcclxuICAgICAgICBnYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHR1cm4uY2xhc3NMaXN0LmFkZCgndHVybicpO1xyXG4gICAgICAgIHR1cm5EaXYuY2xhc3NMaXN0LmFkZCgndHVybkRpdicpO1xyXG4gICAgICAgIHdhaXRUdXJuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLWNvbHVtbjo0LzU7Jyk7XHJcbiAgICAgICAgYm9hcmREaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZCgncmVzdWx0Jyk7XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1odW1hbicpO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG5cclxuXHJcbiAgICBjb25zdCBpbml0aWFsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNsZWFyIHRoZSBib2FyZFxyXG4gICAgICAgIGJvYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlclBsYXllcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllckNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXHJcbiAgICAgICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICAvLyBBbnl0aGluZyBjbGlja2FibGUgc2hvdWxkIGJlIGEgYnV0dG9uISFcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGRhdGEgYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW5cclxuICAgICAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqOyBcclxuICAgICAgICAgICAgaHVtYW5Cb2FyZC5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcclxuICAgICAgICB9fVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICAvLyBBbnl0aGluZyBjbGlja2FibGUgc2hvdWxkIGJlIGEgYnV0dG9uISFcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGRhdGEgYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW5cclxuICAgICAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqOyBcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIGJ1dHRvbiBmb3IgYWRkIHNoaXBzIGFuZCBmdW5jdGlvblxyXG4gICAgICAgIGFkZGluZ1NoaXBzKHR1cm4scGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0aWFsU2NyZWVuKCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2NyZWVuID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIG5ld2VzdCB2ZXJzaW9uIG9mIHRoZSBib2FyZCBhbmQgcGxheWVyIHR1cm5cclxuICAgICAgICBjb25zdCBib2FyZFJlYWwgPSBnYW1lLmJvYXJkUmVhbCgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBnYW1lLmJvYXJkQ29tcHV0ZXIoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0SHVtYW5QbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGdhbWUuZ2V0Q29tcHV0ZXJQbGF5ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLGJvYXJkUmVhbCxwbGF5ZXJIdW1hbik7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQsYm9hcmRDb21wdXRlcixwbGF5ZXJDb21wdXRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbiAgICAgICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXHJcbiAgICAgICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdhbWUuaXNUaGVyZUFXaW5uZXIoKSk7XHJcbiAgICAgICAgLy8gY2hlY2sgYW5kIGF0dGFja3MgaXMgdGhlcmUgbm8gd2lubmVyXHJcbiAgICAgICAgbGV0IGlzVGhlcmVBV2lubmVyID0gZ2FtZS5pc1RoZXJlQVdpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaChpc1RoZXJlQVdpbm5lcj09PWZhbHNlKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVBsYXllci50eXBlPT09J0NPTVBVVEVSIFBsYXllcicpe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZERpdihib2FyZERpdik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChjb21wdXRlckF0dGFjaywgNDAwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhY3RpdmUgcGxheWVyIGlzIEh1bWFuIG5lZWQgd2FpdCBmb3IgYSBjbGlja1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIGdhbWUgb3ZlciAtIGRpc2FibGUgZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXJCb2FyZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG4gICAgXHJcbi8vIGFkZCBhIGFkZC1zaGlwcyBCdXR0b24gYW5kIHRoZSBldmVudGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhZGRpbmdTaGlwcyh0dXJuLHBsYXllckNvbXB1dGVyKXtcclxuICAgIGNvbnN0IGFkZFNoaXBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgIFxyXG4gICAgY29uc3QgYWRkU2hpcHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkU2hpcHNEaXYuY2xhc3NOYW1lID0gJyc7XHJcbiAgICBhZGRTaGlwc0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywnYWRkU2hpcHNEaXYnKTtcclxuICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZHNoaXBzJyk7XHJcbiAgICBhZGRTaGlwc0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRTaGlwQnV0dG9uJyk7XHJcbiAgICBhZGRTaGlwc0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQUREIFNISVBTXCI7XHJcblxyXG4gICAgYWRkU2hpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjcmVhdGVDb250YWluZXJzKHR1cm4pO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgYWRkU2hpcHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBhZGRTaGlwcyhnYW1lLGh1bWFuQm9hcmQsYm9hcmREaXYsdHVybixjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKCdhZGRzaGlwcycpO1xyXG4gICAgICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQoYWRkU2hpcHNEaXYpO1xyXG4gICAgYWRkU2hpcHNEaXYuYXBwZW5kQ2hpbGQoYWRkU2hpcHNCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBib2FyZCBjb21wdXRlciBmb3IgSHVtYW4gYXR0YWNrc1xyXG4gICAgICAgIGZ1bmN0aW9uIGNsaWNrSGFuZGxlckJvYXJkKGUpIHtcclxuICAgICAgICBzd2l0Y2goZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKS50eXBlPT09J0hVTUFOIFBsYXllcicpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhIGZpbGEgZXMnLHNlbGVjdGVkUm93KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ29sdW1uID0gZS50YXJnZXQuZGF0YXNldC5jb2x1bW47XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGEgY29sdW1uYSBlcycsc2VsZWN0ZWRDb2x1bW4pO1xyXG4gICAgICAgICAgICAgICAgLy8gd2hlbiBjbGljayB0aGUgYm9hcmQgY29tcHV0ZXIgdGhlIHBsYXllciBpcyBwbGF5ZXJIdW1hblxyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIEkndmUgY2xpY2tlZCBhIGNvbHVtbiBhbmQgbm90IHRoZSBnYXBzIGluIGJldHdlZW5cclxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRSb3cpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGdhbWUucGxheVJvdW5kKE51bWJlcihzZWxlY3RlZFJvdyksTnVtYmVyKHNlbGVjdGVkQ29sdW1uKSk7XHJcbiAgICAgICAgICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcih3YWl0VHVybiwnd2FpdCB5b3VyIHR1cm4nLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZWxldGVFcnJvck1lc3NhZ2VzLDgwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyQm9hcmQpO1xyXG5cclxuICAgICAgICAvLyBBZGQgYSBtZXNzYWdlIHRvIGF2b2lkIGNsaWNrIGluIGh1bWFuIGJvYXJkXHJcbiAgICAgICAgZnVuY3Rpb24gbm9GaXJlVG9GcmllbmQoZSl7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcih3YWl0VHVybiwnQkUgQ0FSRUZVTC4gZG9uXFwndCBzaG9vdCB5b3VyIGFsbGllcycudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcywxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbm9GaXJlVG9GcmllbmQpO1xyXG5cclxuICAgICAgICAvLyBBZGQgYSBmdW5jdGlvbiBmb3IgdGhlIGNvbXB1dGVyIGF0dGFja1xyXG4gICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCl7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlBbGxBdHRhY2sgPSBnYW1lLmdldEh1bWFuUGxheWVyKCkuZ2FtZWJvYXJkWydhcnJheUFsbEF0dGFjayddO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGNoZWNrID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gYXJyYXlBbGxBdHRhY2suaGFzKGNvb3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKTtcclxuICAgICAgICAgICAgZ2FtZS5wbGF5Um91bmRDb21wdXRlcihjZWxsWzBdLGNlbGxbMV0pO1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB1cGRhdGVTY3JlZW4oKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWRkIGEgcmVzdWx0IGdhbWVcclxuICAgICAgICBjb25zdCByZXN1bHRHYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXN1bHRHYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdE1lc3NhZ2UnKTtcclxuICAgICAgICBjb25zdCBhY3RpdmVNZXNzYWdlID0gZ2FtZS5nZXRHYW1lTWVzc2FnZSgpO1xyXG4gICAgICAgICBjb25zdCBnZXRNZXNzYWdlID0gKGFjdGl2ZU1lc3NhZ2UpID0+IHsgXHJcbiAgICAgICAgICAgIGFjdGl2ZU1lc3NhZ2UgPSBnYW1lLmdldEdhbWVNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgIHJlc3VsdEdhbWVEaXYudGV4dENvbnRlbnQgPSBhY3RpdmVNZXNzYWdlO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVzdWx0LmFwcGVuZENoaWxkKHJlc3VsdEdhbWVEaXYpO1xyXG5cclxuICAgICAgICAvLyBhZGQgYSBkaXYgd2l0aCBjb3VudCBkb3duIGZvciBjb21wdXRlciBhdHRhY2sgYW5kIHJlbW92ZSBpdCBcclxuICAgICAgICBmdW5jdGlvbiBhZGREaXYoYXJnKXtcclxuICAgICAgICAgICAgY29uc3QgYXR0YWNrTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCdhdHRhY2tNZXNzYWdlJyk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7IGdyaWQtY29sdW1uOiAyLzM7IGRpc3BsYXk6ZmxleDsgZmxleC13cmFwOm5vd3JhcDsnKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdpZCcsJ3RleHQnKTtcclxuICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbiAgICAgICAgICAgIHRleHQuaW5uZXJUZXh0ID0gJ1RoZSBjb21wdXRlciB3aWxsIGF0dGFjayBvbiAnLnRvVXBwZXJDYXNlKCk7IFxyXG4gICAgICAgICAgICBsZXQgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHRleHQxLnNldEF0dHJpYnV0ZSgnaWQnLCdjb3VudCcpO1xyXG4gICAgICAgICAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZm9udC1zaXplOjEuMXJlbTsgY29sb3I6cmVkOycpO1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gNDsgXHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2UuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2UuYXBwZW5kQ2hpbGQodGV4dDEpO1xyXG4gICAgICAgICAgICBsZXQgaWQgPSBzZXRJbnRlcnZhbChjb3VudCwgMTAwMCk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvdW50KCl7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgPSBudW1iZXItMTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpLmlubmVyVGV4dCA9IGAgPT4gJHtudW1iZXJ9YDtcclxuICAgICAgICAgICAgICAgIGlmIChudW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50JykuaW5uZXJUZXh0ID0gXCJET05FXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChyZW1vdmVEaXYsMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgYXJnLmFwcGVuZENoaWxkKGF0dGFja01lc3NhZ2UpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBjb3VudCBkb3duIG1lc3NhZ2UgZGl2XHJcbiAgICAgICAgIGZ1bmN0aW9uIHJlbW92ZURpdigpe1xyXG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrTWVzc2FnZScpO1xyXG4gICAgICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0dXJuKTtcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmREaXYpOyBcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQodHVybkRpdik7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHdhaXRUdXJuKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGh1bWFuQm9hcmQpO1xyXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZCk7XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQge3NjcmVlbkNvbnRyb2xsZXJ9IiwiLy8gYSBjbGFzcyBTaGlwIFxyXG5jbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgICBcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbHVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gMDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gZmFsc2U7IFxyXG4gICAgICB9XHJcblxyXG4gICAgICBoaXQoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSBoaXRzICsgMSA7XHJcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRoaXMuaXNTdW5rKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZIaXRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpc1N1bmsoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgc3dpdGNoKGhpdHM9PT10aGlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVlblN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7U2hpcH07XHJcbiIsImZ1bmN0aW9uIHNob3dFcnJvcihhcmcxLGFyZzIpe1xyXG4vLyBhcmcxIGlzIHRoZSBkaXYgLSBhcmcyIGlzIHRoZSBtZXNzYWdlIGZvciB0aGUgdHlwZSBvZiBlcnJvclxyXG4gICAgICBsZXQgaWQgPSBhcmcxLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgaW5wdXRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLGAke2lkfWVycm9yYCk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGl2ZScsJ3BvbGl0ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci50ZXh0Q29udGVudCA9IGFyZzI7XHJcbiAgICBcclxuICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBhcmcxLnBhcmVudE5vZGU7XHJcbiAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RXJyb3IpOyAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBzaG93RXJyb3IgfTsiLCJpbXBvcnQgeyByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChhcmcxLGFyZzIsYXJnMyl7XHJcbiAgIFxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgICAgIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICAgIHgudGV4dENvbnRlbnQgPSBib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU7XHJcbiAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTEpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgLyogIHgudGV4dENvbnRlbnQgPSAnJzsgKi9cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAvKiAgIHgudGV4dENvbnRlbnQgPSAnJzsgKi9cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbEhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUYDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxubGV0IGFycmF5U2hpcHMgPSBbXTtcclxuICAgIGlmKGFyZzMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYXJyYXlTaGlwcyA9IGFyZzNbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddO1xyXG4gICAgfVxyXG5cclxubGV0IGNvb3JkU2hpcHNTdW5rID0gW107XHJcblxyXG5hcnJheVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHN3aXRjaChlbGVtZW50WydzaGlwRGV0YWlscyddWydiZWVuU3VuayddKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIGVsZW1lbnRbJ2Nvb3JkaW5hdGVzJ10uZm9yRWFjaCggKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuY29uc29sZS5sb2coY29vcmRTaGlwc1N1bmspO1xyXG5cclxubGV0IGFycmF5SW5kZXhOb2RlQW5kQ29vcmQgPSByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpO1xyXG5sZXQgaW5kZXhlc1N1bmtzID0gW107XHJcbmNvb3JkU2hpcHNTdW5rLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICBhcnJheUluZGV4Tm9kZUFuZENvb3JkLmZvckVhY2goKHgpPT57XHJcbiAgICAgICAgaWYoeFsxXVswXT09PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICBpbmRleGVzU3Vua3MucHVzaCh4WzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuaW5kZXhlc1N1bmtzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgIGxldCBjZWxsID0gY2VsbHNpbkJvYXJkW2VsZW1lbnRdO1xyXG4gICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGxTdW5rJyk7XHJcbiAgIGNlbGwudGV4dENvbnRlbnQgPSAnU1VOSyc7XHJcbn0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZChhcmcpe1xyXG4vKiBhcmcgaXMgdGhlIGRpdiB3aXRoIHRoZSBidXR0b24gY2VsbHMgKi9cclxubGV0IGJvYXJkRGl2ID0gYXJnO1xyXG5sZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcbmNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG5cclxuY2VsbHNpbkJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgXHJcbiAgeC5jbGFzc05hbWUgPSAnJzsgICAgICAgLy8gdG8gY2xlYXIgcHJldmlvdXMgY2xhc3NcclxuICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICB4LnRleHRDb250ZW50ID0gJyc7XHJcbn0pXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHt1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQsIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkfTsiLCJpbXBvcnQgeyByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzKGFyZzEsYXJnMixhcmczKXtcclxuXHJcbiAgICBsZXQgYm9hcmREaXYgPSBhcmcxO1xyXG4gICAgbGV0IGJvYXJkQ29udGVudCA9IGFyZzI7XHJcbiAgICBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcblxyXG4gICAgY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gICAgXHJcbiAgICBjZWxsc2luQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIFxyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXsgICAvLyBFTCBFUlJPUiBBTCBURVJNSU5BUiBFTCBKVUVHTyBMTyBEQSBFTiBFU1RBIExJTkVBIGFycmF5IGZvciBlYWNoXHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbFNoaXBBZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBTSElQYDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbEhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUYDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBhcnJheVNoaXBzID0gW107XHJcbiAgICBpZihhcmczICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFycmF5U2hpcHMgPSBhcmczWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXTtcclxuICAgIH1cclxuXHJcbmxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xyXG5cclxuYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZWxlbWVudFsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBlbGVtZW50Wydjb29yZGluYXRlcyddLmZvckVhY2goICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgYXJyYXlJbmRleE5vZGVBbmRDb29yZCA9IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCk7XHJcbmxldCBpbmRleGVzU3Vua3MgPSBbXTtcclxuY29vcmRTaGlwc1N1bmsuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgIGFycmF5SW5kZXhOb2RlQW5kQ29vcmQuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICBpZih4WzFdWzBdPT09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5pbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgY29uc29sZS5sb2coY2VsbHNpbkJvYXJkW2VsZW1lbnRdKTtcclxuICAgbGV0IGNlbGwgPSBjZWxsc2luQm9hcmRbZWxlbWVudF07XHJcbiAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFN1bmsnKTtcclxuICAgY2VsbC50ZXh0Q29udGVudCA9ICdTVU5LJztcclxufSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzKGFyZyl7XHJcbiAvKiBhcmcgaXMgdGhlIGRpdiB3aXRoIHRoZSBidXR0b24gY2VsbHMgKi9cclxuIGxldCBib2FyZERpdiA9IGFyZztcclxuIGxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuIFxyXG4gY2VsbHNpbkJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgXHJcbiAgIHguY2xhc3NOYW1lID0gJyc7ICAgICAgIC8vIHRvIGNsZWFyIHByZXZpb3VzIGNsYXNzXHJcbiAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiB9KVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7dXBkYXRlQ2VsbHMsIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
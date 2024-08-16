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
            return message = `All ships have been sunk`;
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
/* harmony import */ var _adjacent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adjacent */ "./src/components/adjacent.js");











function screenController(arg) {
    /* arg is the game container */

    const game = (0,_game_controller__WEBPACK_IMPORTED_MODULE_0__.gameController)();
    const totalCells = (0,_auxiliary_functions__WEBPACK_IMPORTED_MODULE_1__.allCoordinatesPosibles)();
    let arrayAdjacent = [];   // ver si puede ser en otro lugar

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

       // this function attack consider adjacents when got a hit
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
            arrayAdjacent = _adjacent__WEBPACK_IMPORTED_MODULE_9__.adjacent.get(adj);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkIsUUFBUSxnRkFBd0I7QUFDaEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeFBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoS2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xHZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNELGdDQUFnQztBQUNoQztBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSw2QkFBNkIsNkVBQXVCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDtBQUN4RDtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2FkZC1zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hZGphY2VudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hdXhpbGlhcnktZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVsZXRlLWRpdi1lcnJvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9yYW5kb20tc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaG93LWVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS1jb21wdXRlci1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm93cywgY29sdW1ucywgYWxmX3l9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzfSBmcm9tICcuL3VwZGF0ZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCB9IGZyb20gXCIuL3VwZGF0ZS1jb21wdXRlci1ib2FyZFwiO1xyXG5pbXBvcnQgeyBzaG93RXJyb3IgfSBmcm9tICcuL3Nob3ctZXJyb3InO1xyXG5pbXBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH0gZnJvbSAnLi9kZWxldGUtZGl2LWVycm9yJztcclxuaW1wb3J0IHsgcmFuZG9tU2hpcHMgfSBmcm9tIFwiLi9yYW5kb20tc2hpcHNcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZFNoaXBzKGFyZzEsYXJnMixhcmczLGFyZzQsYXJnNSxhcmc2KXtcclxuICAgIC8qIGFyZyBpcyB0aGUgZ2FtZSAgYXJnMiBpcyB0aGUgZGl2IHdpdGggdGhlIGh1bWFuYm9hcmQgIFxyXG4gICAgYXJnMyB0byBzaG93IHRoZSBvcHRpb25zIGFyZzQgdG8gc2hvdyByYW5kb20gYnV0dG9uXHJcbiAgICBhcmc1IGlzIHRoZSBkaXYgd2l0aCB0aGUgY29tcHV0ZXJib2FyZCBhcmc2IGlzIHRoZSBjb250ZW50IGNvbXB1dGVyIGJvYXJkKi9cclxuY29uc3QgZ2FtZSA9IGFyZzE7XHJcbmNvbnN0IGh1bWFuQm9hcmQgPSBhcmcyO1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmc1O1xyXG5jb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzY7XHJcblxyXG5jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWRGb3JBZGQnKTtcclxuZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkRm9yQWRkJyk7XHJcbmNvbnN0IGRpdkZvckVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdkZvckVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCdkaXZGb3JFcnJvcicpO1xyXG5kaXZGb3JFcnJvci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDEgLyAyOyBncmlkLWNvbHVtbjogNCAvIDU7JylcclxuXHJcbmNvbnN0IHNoaXBMZW5ndGg9WzUsMyw0LDYsNCw1XTtcclxuICAgICAgICBcclxuZm9yKGxldCBpPTE7IGk8PXNoaXBMZW5ndGgubGVuZ3RoOyArK2kpe1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsYGZvcm0ke2l9YCk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1JbnB1dCcpO1xyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsYHN1Ym1pdCR7aX1gKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IGBBREQgTsKwICR7aX1gO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpncmVlbjsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0OycpO1xyXG4gICAgdGV4dC5pbm5lclRleHQgPSBgJHtzaGlwTGVuZ3RoW2ktMV19IHNxdWFyZXMgbG9uZ2l0dWRlYDtcclxuICAgXHJcblxyXG4gICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJhZGlvRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1SYWRpbycpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9ySG9yaXpvbnRhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBob3Jpem9udGFsbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JWZXJ0aWNhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRpcmVjdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxMnB4Jyk7XHJcbiAgICBsYWJlbEZvckhvcml6b250YWwuaW5uZXJUZXh0ID0gJ2xlZnQtdG8tcmlnaHQnO1xyXG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLnNldEF0dHJpYnV0ZSgnZm9yJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgbGFiZWxGb3JWZXJ0aWNhbC5pbm5lclRleHQgPSAndG9wLXRvLWRvd24nO1xyXG4gICAgbGFiZWxGb3JWZXJ0aWNhbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvcC10by1kb3duJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ2lkJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2RpcmVjdGlvbicpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsZWZ0LXRvLXJpZ2h0Jyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b3AtdG8tZG93bicpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywndG9wLXRvLWRvd24nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCduYW1lJywnZGlyZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgY29vcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvb3JkUm93LmlubmVyVGV4dCA9ICdST1c6ICc7XHJcbiAgICBjb25zdCBjb29yZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29vcmRDb2x1bW4uaW5uZXJUZXh0ID0gJ0NPTFVNTjogJztcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxyb3dzOyArK2kpe1xyXG4gICAgICAgIGNvbnN0IHJvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcm93TGFiZWwuaW5uZXJUZXh0ID0gaSsxO1xyXG4gICAgICAgIHJvd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgcm93JHtpKzF9YCk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ2lkJyxgcm93JHtpKzF9YCk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCduYW1lJywncm93U2VsZWN0ZWQnKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxpKzEpO1xyXG5cclxuICAgICAgICBjb29yZFJvdy5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XHJcbiAgICAgICAgY29vcmRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBmb3IobGV0IGo9MDsgajxjb2x1bW5zOyArK2ope1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29sdW1uTGFiZWwuaW5uZXJUZXh0ID0gYWxmX3lbal07XHJcbiAgICAgICAgY29sdW1uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGBjb2x1bW4ke2FsZl95W2pdfWApO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCdpZCcsYGNvbHVtbiR7YWxmX3lbal19YCk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCduYW1lJywnY29sdW1uU2VsZWN0ZWQnKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxhbGZfeVtqXSk7XHJcblxyXG4gICAgICAgIGNvb3JkQ29sdW1uLmFwcGVuZENoaWxkKGNvbHVtbkxhYmVsKTtcclxuICAgICAgICBjb29yZENvbHVtbi5hcHBlbmRDaGlsZChpbnB1dENvbHVtbik7XHJcbiAgICB9XHJcblxyXG4gICAgaG9yaXpvbnRhbGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHZlcnRpY2FsbHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvblNlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiBkaXJlY3Rpb25SYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiZGlyZWN0aW9uXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIGRpcmVjdGlvblNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICAgICBzaG93RXJyb3IocmFkaW9EaXYsJ211c3Qgc2VsZWN0IGRpcmVjdGlvbicudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBsZXQgcm93U2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIHJvd1JhZGlvVmFsdWUoKSB7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwicm93U2VsZWN0ZWRcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgcm93U2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkID0gMTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIHJvd1NlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gY29sdW1uUmFkaW9WYWx1ZSgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImNvbHVtblNlbGVjdGVkXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIGNvbHVtblNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICBjb2x1bW5TZWxlY3RlZCA9ICdhJztcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGNvbHVtblNlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2l6ZSA9IHNoaXBMZW5ndGhbaS0xXTtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBOdW1iZXIgPSBpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJhZGlvVmFsdWUoKTtcclxuXHJcbiAgICAgICAgbGV0IHJvd1NlbGVjdGVkID0gcm93UmFkaW9WYWx1ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvbHVtblNlbGVjdGVkID0gY29sdW1uUmFkaW9WYWx1ZSgpO1xyXG5cclxuICAgICAgICBsZXQgY29vcmQgPSBbTnVtYmVyKHJvd1NlbGVjdGVkKSxjb2x1bW5TZWxlY3RlZF07XHJcblxyXG4gICAgICAgIGxldCBzaGlwID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLmRhdGFTaGlwcyhjb29yZCxkaXJlY3Rpb24sc2l6ZSxzaGlwTnVtYmVyKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChzaGlwIT09bnVsbCl7XHJcbiAgICAgICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgbGV0IG5ld0JvYXJkID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLnBsYWNlU2hpcHNJblRoZUJvYXJkKHNoaXApO1xyXG4gICAgICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLCBuZXdCb2FyZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZvcm0ke2l9YCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFJlYWR5LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1JbnB1dCcpLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsQWRkU2hpcHNEaXYoZ3JpZCxkaXZGb3JSYW5kb20pO1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihhcmczLGNvbXB1dGVyQm9hcmQsc2hpcExlbmd0aCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2hvd0Vycm9yKGRpdkZvckVycm9yLCdTRUxFQ1QgQU5PVEhFUiBMT0NBVElPTicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIGFyZzMuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0Rpdik7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGRpcmVjdGlvbklucHV0KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGNvb3JkUm93KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGNvb3JkQ29sdW1uKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9ySG9yaXpvbnRhbCk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChob3Jpem9udGFsbHkpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JWZXJ0aWNhbCk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZCh2ZXJ0aWNhbGx5KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpdkZvclJhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Rm9yUmFuZG9tLmlubmVyVGV4dCA9ICdDbGljayBoZXJlIGZvciBhIHJhbmRvbSBmbGVldCBvZiBzaGlwcyc7XHJcbiAgICBkaXZGb3JSYW5kb20uY2xhc3NMaXN0LmFkZCgncmFuZG9tc2hpcHMnKTtcclxuICAgIGNvbnN0IGJ1dHRvblJhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uUmFuZG9tLmlubmVyVGV4dCA9ICdSQU5ET00gRkxFRVQnO1xyXG4gICAgYnV0dG9uUmFuZG9tLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuXHJcbiAgICBidXR0b25SYW5kb20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10uaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG4gICAgICAgIHJhbmRvbVNoaXBzKHBsYXllckh1bWFuWydnYW1lYm9hcmQnXSxzaGlwTGVuZ3RoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmVtb3ZlQWxsQWRkU2hpcHNEaXYoZ3JpZCxkaXZGb3JSYW5kb20pO1xyXG4gICAgICAgIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoYXJnMyxjb21wdXRlckJvYXJkLHNoaXBMZW5ndGgscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgYXJnNC5hcHBlbmRDaGlsZChkaXZGb3JSYW5kb20pO1xyXG4gICAgYXJnNC5hcHBlbmRDaGlsZChkaXZGb3JFcnJvcik7XHJcbiAgICBkaXZGb3JSYW5kb20uYXBwZW5kQ2hpbGQoYnV0dG9uUmFuZG9tKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGFyZzEsYXJnMil7XHJcbiAgICAvLyBhcmcxIGFuZCBhcmcyIGFyZSB0aGUgYm90aCBkaXYgdG8gd2lsbCBiZSByZW1vdmVkXHJcbiAgICBhcmcxLnJlbW92ZSgpO1xyXG4gICAgYXJnMi5yZW1vdmUoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihhcmcxLGFyZzIsYXJnMyxhcmc0KXtcclxuICAgICAgLyogIGFyZzEgaXMgdGhlIGRpdiB0byB3cml0ZSB0aGUgaGVhZCAqL1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmcyO1xyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBhcmczO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnNDtcclxuXHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jb21wdXRlcicpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkQ29tcHV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkQ29tcHV0ZXIuaW5uZXJUZXh0ID0gJ3RoaXMgaXMgeW91ciBlbmVteSAnLnRvVXBwZXJDYXNlKCkrJyBDbGljayBUbyBBdHRhY2snO1xyXG4gICAgICAgIGhlYWRDb21wdXRlci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDEvMjsgZ3JpZC1jb2x1bW46IDQvNTsgcGFkZGluZy1sZWZ0OjI1JTsgY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbiAgICAgICAgYXJnMS5hcHBlbmRDaGlsZChoZWFkQ29tcHV0ZXIpO1xyXG5cclxuICAgICAgICBwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ10uaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoY29tcHV0ZXJCb2FyZCxwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG4gICAgICAgIHJhbmRvbVNoaXBzKHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXSxzaGlwTGVuZ3RoKTtcclxuICAgICAgICB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQoY29tcHV0ZXJCb2FyZCxwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG59XHJcblxyXG5leHBvcnQgeyBhZGRTaGlwc307IiwiY29uc3QgYWRqYWNlbnQgPSBuZXcgTWFwKCk7XHJcblxyXG5hZGphY2VudC5zZXQoMCxbMSwxMl0pO1xyXG5hZGphY2VudC5zZXQoMSxbMCwyLDEzXSk7XHJcbmFkamFjZW50LnNldCgyLFsxLDMsMTRdKTtcclxuYWRqYWNlbnQuc2V0KDMsWzIsNCwxNV0pO1xyXG5hZGphY2VudC5zZXQoNCxbMyw1LDE2XSk7XHJcbmFkamFjZW50LnNldCg1LFs0LDYsMTddKTtcclxuYWRqYWNlbnQuc2V0KDYsWzUsNywxOF0pO1xyXG5hZGphY2VudC5zZXQoNyxbNiw4LDE5XSk7XHJcbmFkamFjZW50LnNldCg4LFs3LDksMjBdKTtcclxuYWRqYWNlbnQuc2V0KDksWzgsMTAsMjFdKTtcclxuYWRqYWNlbnQuc2V0KDEwLFs5LDExLDIyXSk7XHJcbmFkamFjZW50LnNldCgxMSxbMTAsMjNdKTtcclxuYWRqYWNlbnQuc2V0KDEyLFswLDEzLDI0XSk7XHJcbmFkamFjZW50LnNldCgxMyxbMSwxMiwxNCwyNV0pO1xyXG5hZGphY2VudC5zZXQoMTQsWzIsMTMsMTUsMjZdKTtcclxuYWRqYWNlbnQuc2V0KDE1LFszLDE0LDE2LDI3XSk7XHJcbmFkamFjZW50LnNldCgxNixbNCwxNSwxNywyOF0pO1xyXG5hZGphY2VudC5zZXQoMTcsWzUsMTYsMTgsMjldKTtcclxuYWRqYWNlbnQuc2V0KDE4LFs2LDE3LDE5LDMwXSk7XHJcbmFkamFjZW50LnNldCgxOSxbNywxOCwyMCwzMV0pO1xyXG5hZGphY2VudC5zZXQoMjAsWzgsMTksMjEsMzJdKTtcclxuYWRqYWNlbnQuc2V0KDIxLFs5LDIwLDIyLDMzXSk7XHJcbmFkamFjZW50LnNldCgyMixbMTAsMjEsMjMsMzRdKTtcclxuYWRqYWNlbnQuc2V0KDIzLFsxMSwyMiwzNV0pO1xyXG5hZGphY2VudC5zZXQoMjQsWzEyLDI1LDM2XSk7XHJcbmFkamFjZW50LnNldCgyNSxbMTMsMjQsMjYsMzddKTtcclxuYWRqYWNlbnQuc2V0KDI2LFsxNCwyNSwyNywzOF0pO1xyXG5hZGphY2VudC5zZXQoMjcsWzE1LDI2LDI4LDM5XSk7XHJcbmFkamFjZW50LnNldCgyOCxbMTYsMjcsMjksNDBdKTtcclxuYWRqYWNlbnQuc2V0KDI5LFsxNywyOCwzMCw0MV0pO1xyXG5hZGphY2VudC5zZXQoMzAsWzE4LDI5LDMxLDQyXSk7XHJcbmFkamFjZW50LnNldCgzMSxbMTksMzAsMzIsNDNdKTtcclxuYWRqYWNlbnQuc2V0KDMyLFsyMCwzMSwzMyw0NF0pO1xyXG5hZGphY2VudC5zZXQoMzMsWzIxLDMyLDM0LDQ1XSk7XHJcbmFkamFjZW50LnNldCgzNCxbMjIsMzMsMzUsNDZdKTtcclxuYWRqYWNlbnQuc2V0KDM1LFsyMywzNCw0N10pO1xyXG5hZGphY2VudC5zZXQoMzYsWzI0LDM3LDQ4XSk7XHJcbmFkamFjZW50LnNldCgzNyxbMjUsMzYsMzgsNDldKTtcclxuYWRqYWNlbnQuc2V0KDM4LFsyNiwzNywzOSw1MF0pO1xyXG5hZGphY2VudC5zZXQoMzksWzI3LDM4LDQwLDUxXSk7XHJcbmFkamFjZW50LnNldCg0MCxbMjgsMzksNDEsNTJdKTtcclxuYWRqYWNlbnQuc2V0KDQxLFsyOSw0MCw0Miw1M10pO1xyXG5hZGphY2VudC5zZXQoNDIsWzMwLDQxLDQzLDU0XSk7XHJcbmFkamFjZW50LnNldCg0MyxbMzEsNDIsNDQsNTVdKTtcclxuYWRqYWNlbnQuc2V0KDQ0LFszMiw0Myw0NSw1Nl0pO1xyXG5hZGphY2VudC5zZXQoNDUsWzMzLDQ0LDQ2LDU3XSk7XHJcbmFkamFjZW50LnNldCg0NixbMzQsNDUsNDcsNThdKTtcclxuYWRqYWNlbnQuc2V0KDQ3LFszNSw0Niw1OV0pO1xyXG5hZGphY2VudC5zZXQoNDgsWzM2LDQ5LDYwXSk7XHJcbmFkamFjZW50LnNldCg0OSxbMzcsNDgsNTAsNjFdKTtcclxuYWRqYWNlbnQuc2V0KDUwLFszOCw0OSw1MSw2Ml0pO1xyXG5hZGphY2VudC5zZXQoNTEsWzM5LDUwLDUyLDYzXSk7XHJcbmFkamFjZW50LnNldCg1MixbNDAsNTEsNTMsNjRdKTtcclxuYWRqYWNlbnQuc2V0KDUzLFs0MSw1Miw1NCw2NV0pO1xyXG5hZGphY2VudC5zZXQoNTQsWzQyLDUzLDU1LDY2XSk7XHJcbmFkamFjZW50LnNldCg1NSxbNDMsNTQsNTYsNjddKTtcclxuYWRqYWNlbnQuc2V0KDU2LFs0NCw1NSw1Nyw2OF0pO1xyXG5hZGphY2VudC5zZXQoNTcsWzQ1LDU2LDU4LDY5XSk7XHJcbmFkamFjZW50LnNldCg1OCxbNDYsNTcsNTksNzBdKTtcclxuYWRqYWNlbnQuc2V0KDU5LFs0Nyw1OCw3MV0pO1xyXG5hZGphY2VudC5zZXQoNjAsWzQ4LDYxLDcyXSk7XHJcbmFkamFjZW50LnNldCg2MSxbNDksNjAsNjIsNzNdKTtcclxuYWRqYWNlbnQuc2V0KDYyLFs1MCw2MSw2Myw3NF0pO1xyXG5hZGphY2VudC5zZXQoNjMsWzUxLDYyLDY0LDc1XSk7XHJcbmFkamFjZW50LnNldCg2NCxbNTIsNjMsNjUsNzZdKTtcclxuYWRqYWNlbnQuc2V0KDY1LFs1Myw2NCw2Niw3N10pO1xyXG5hZGphY2VudC5zZXQoNjYsWzU0LDY1LDY3LDc4XSk7XHJcbmFkamFjZW50LnNldCg2NyxbNTUsNjYsNjgsNzldKTtcclxuYWRqYWNlbnQuc2V0KDY4LFs1Niw2Nyw2OSw4MF0pO1xyXG5hZGphY2VudC5zZXQoNjksWzU3LDY4LDcwLDgxXSk7XHJcbmFkamFjZW50LnNldCg3MCxbNTgsNjksNzEsODJdKTtcclxuYWRqYWNlbnQuc2V0KDcxLFs1OSw3MCw4M10pO1xyXG5hZGphY2VudC5zZXQoNzIsWzYwLDczLDg0XSk7XHJcbmFkamFjZW50LnNldCg3MyxbNjEsNzIsNzQsODVdKTtcclxuYWRqYWNlbnQuc2V0KDc0LFs2Miw3Myw3NSw4Nl0pO1xyXG5hZGphY2VudC5zZXQoNzUsWzYzLDc0LDc2LDg3XSk7XHJcbmFkamFjZW50LnNldCg3NixbNjQsNzUsNzcsODhdKTtcclxuYWRqYWNlbnQuc2V0KDc3LFs2NSw3Niw3OCw4OV0pO1xyXG5hZGphY2VudC5zZXQoNzgsWzY2LDc3LDc5LDkwXSk7XHJcbmFkamFjZW50LnNldCg3OSxbNjcsNzgsODAsOTFdKTtcclxuYWRqYWNlbnQuc2V0KDgwLFs2OCw3OSw4MSw5Ml0pO1xyXG5hZGphY2VudC5zZXQoODEsWzY5LDgwLDgyLDkzXSk7XHJcbmFkamFjZW50LnNldCg4MixbNzAsODEsODMsOTRdKTtcclxuYWRqYWNlbnQuc2V0KDgzLFs3MSw4Miw5NV0pO1xyXG5hZGphY2VudC5zZXQoODQsWzcyLDg1LDk2XSk7XHJcbmFkamFjZW50LnNldCg4NSxbNzMsODQsODYsOTddKTtcclxuYWRqYWNlbnQuc2V0KDg2LFs3NCw4NSw4Nyw5OF0pO1xyXG5hZGphY2VudC5zZXQoODcsWzc1LDg2LDg4LDk5XSk7XHJcbmFkamFjZW50LnNldCg4OCxbNzYsODcsODksMTAwXSk7XHJcbmFkamFjZW50LnNldCg4OSxbNzcsODgsOTAsMTAxXSk7XHJcbmFkamFjZW50LnNldCg5MCxbNzgsODksOTEsMTAyXSk7XHJcbmFkamFjZW50LnNldCg5MSxbNzksOTAsOTIsMTAzXSk7XHJcbmFkamFjZW50LnNldCg5MixbODAsOTEsOTMsMTA0XSk7XHJcbmFkamFjZW50LnNldCg5MyxbODEsOTIsOTQsMTA1XSk7XHJcbmFkamFjZW50LnNldCg5NCxbODIsOTMsOTUsMTA2XSk7XHJcbmFkamFjZW50LnNldCg5NSxbODMsOTQsMTA3XSk7XHJcbmFkamFjZW50LnNldCg5NixbODQsOTcsMTA4XSk7XHJcbmFkamFjZW50LnNldCg5NyxbODUsOTYsOTgsMTA5XSk7XHJcbmFkamFjZW50LnNldCg5OCxbODYsOTcsOTksMTEwXSk7XHJcbmFkamFjZW50LnNldCg5OSxbODcsOTgsMTAwLDExMV0pO1xyXG5hZGphY2VudC5zZXQoMTAwLFs4OCw5OSwxMDEsMTEyXSk7XHJcbmFkamFjZW50LnNldCgxMDEsWzg5LDEwMCwxMDIsMTEzXSk7XHJcbmFkamFjZW50LnNldCgxMDIsWzkwLDEwMSwxMDMsMTE0XSk7XHJcbmFkamFjZW50LnNldCgxMDMsWzkxLDEwMiwxMDQsMTE1XSk7XHJcbmFkamFjZW50LnNldCgxMDQsWzkyLDEwMywxMDUsMTE2XSk7XHJcbmFkamFjZW50LnNldCgxMDUsWzkzLDEwNCwxMDYsMTE3XSk7XHJcbmFkamFjZW50LnNldCgxMDYsWzk0LDEwNSwxMDcsMTE4XSk7XHJcbmFkamFjZW50LnNldCgxMDcsWzk1LDEwNiwxMTldKTtcclxuYWRqYWNlbnQuc2V0KDEwOCxbOTYsMTA5LDEyMF0pO1xyXG5hZGphY2VudC5zZXQoMTA5LFs5NywxMDgsMTEwLDEyMV0pO1xyXG5hZGphY2VudC5zZXQoMTEwLFs5OCwxMDksMTExLDEyMl0pO1xyXG5hZGphY2VudC5zZXQoMTExLFs5OSwxMTAsMTEyLDEyM10pO1xyXG5hZGphY2VudC5zZXQoMTEyLFsxMDAsMTExLDExMywxMjRdKTtcclxuYWRqYWNlbnQuc2V0KDExMyxbMTAxLDExMiwxMTQsMTI1XSk7XHJcbmFkamFjZW50LnNldCgxMTQsWzEwMiwxMTMsMTE1LDEyNl0pO1xyXG5hZGphY2VudC5zZXQoMTE1LFsxMDMsMTE0LDExNiwxMjddKTtcclxuYWRqYWNlbnQuc2V0KDExNixbMTA0LDExNSwxMTcsMTI4XSk7XHJcbmFkamFjZW50LnNldCgxMTcsWzEwNSwxMTYsMTE4LDEyOV0pO1xyXG5hZGphY2VudC5zZXQoMTE4LFsxMDYsMTE3LDExOSwxMzBdKTtcclxuYWRqYWNlbnQuc2V0KDExOSxbMTA3LDExOCwxMzFdKTtcclxuYWRqYWNlbnQuc2V0KDEyMCxbMTA4LDEyMSwxMzJdKTtcclxuYWRqYWNlbnQuc2V0KDEyMSxbMTA5LDEyMCwxMjIsMTMzXSk7XHJcbmFkamFjZW50LnNldCgxMjIsWzExMCwxMjEsMTIzLDEzNF0pO1xyXG5hZGphY2VudC5zZXQoMTIzLFsxMTEsMTIyLDEyNCwxMzVdKTtcclxuYWRqYWNlbnQuc2V0KDEyNCxbMTEyLDEyMywxMjUsMTM2XSk7XHJcbmFkamFjZW50LnNldCgxMjUsWzExMywxMjQsMTI2LDEzN10pO1xyXG5hZGphY2VudC5zZXQoMTI2LFsxMTQsMTI1LDEyNywxMzhdKTtcclxuYWRqYWNlbnQuc2V0KDEyNyxbMTE1LDEyNiwxMjgsMTM5XSk7XHJcbmFkamFjZW50LnNldCgxMjgsWzExNiwxMjcsMTI5LDE0MF0pO1xyXG5hZGphY2VudC5zZXQoMTI5LFsxMTcsMTI4LDEzMCwxNDFdKTtcclxuYWRqYWNlbnQuc2V0KDEzMCxbMTE4LDEyOSwxMzEsMTQyXSk7XHJcbmFkamFjZW50LnNldCgxMzEsWzExOSwxMzAsMTQzXSk7XHJcbmFkamFjZW50LnNldCgxMzIsWzEyMCwxMzMsMTQ0XSk7XHJcbmFkamFjZW50LnNldCgxMzMsWzEyMSwxMzIsMTM0LDE0NV0pO1xyXG5hZGphY2VudC5zZXQoMTM0LFsxMjIsMTMzLDEzNSwxNDZdKTtcclxuYWRqYWNlbnQuc2V0KDEzNSxbMTIzLDEzNCwxMzYsMTQ3XSk7XHJcbmFkamFjZW50LnNldCgxMzYsWzEyNCwxMzUsMTM3LDE0OF0pO1xyXG5hZGphY2VudC5zZXQoMTM3LFsxMjUsMTM2LDEzOCwxNDldKTtcclxuYWRqYWNlbnQuc2V0KDEzOCxbMTI2LDEzNywxMzksMTUwXSk7XHJcbmFkamFjZW50LnNldCgxMzksWzEyNywxMzgsMTQwLDE1MV0pO1xyXG5hZGphY2VudC5zZXQoMTQwLFsxMjgsMTM5LDE0MSwxNTJdKTtcclxuYWRqYWNlbnQuc2V0KDE0MSxbMTI5LDE0MCwxNDIsMTUzXSk7XHJcbmFkamFjZW50LnNldCgxNDIsWzEzMCwxNDEsMTQzLDE1NF0pO1xyXG5hZGphY2VudC5zZXQoMTQzLFsxMzEsMTQyLDE1NV0pO1xyXG5hZGphY2VudC5zZXQoMTQ0LFsxMzIsMTQ1XSk7XHJcbmFkamFjZW50LnNldCgxNDUsWzEzMywxNDQsMTQ2XSk7XHJcbmFkamFjZW50LnNldCgxNDYsWzEzNCwxNDUsMTQ3XSk7XHJcbmFkamFjZW50LnNldCgxNDcsWzEzNSwxNDYsMTQ4XSk7XHJcbmFkamFjZW50LnNldCgxNDgsWzEzNiwxNDcsMTQ5XSk7XHJcbmFkamFjZW50LnNldCgxNDksWzEzNywxNDgsMTUwXSk7XHJcbmFkamFjZW50LnNldCgxNTAsWzEzOCwxNDksMTUxXSk7XHJcbmFkamFjZW50LnNldCgxNTEsWzEzOSwxNTAsMTUyXSk7XHJcbmFkamFjZW50LnNldCgxNTIsWzE0MCwxNTEsMTUzXSk7XHJcbmFkamFjZW50LnNldCgxNTMsWzE0MSwxNTIsMTU0XSk7XHJcbmFkamFjZW50LnNldCgxNTQsWzE0MiwxNTMsMTU1XSk7XHJcbmFkamFjZW50LnNldCgxNTUsWzE0MywxNTRdKTtcclxuXHJcblxyXG5leHBvcnQge2FkamFjZW50fTtcclxuIiwiY29uc3Qgcm93cyA9IDEzO1xyXG5jb25zdCBjb2x1bW5zID0gMTI7XHJcblxyXG5jb25zdCBhbGZfeSA9IFtcclxuICAgICdhJywnYicsJ2MnLCdkJywnZScsJ2YnLCdnJywnaCcsJ2knLCdqJywnaycsJ2wnXHJcbiAgICAgXTtcclxuXHJcbmZ1bmN0aW9uIHNoaWZ0Q29vcmRpbmF0ZXMoW3ZhbHVlX3gsdmFsdWVfeV0pe1xyXG4gICAgXHJcbiAgICBsZXQgW3gseV0gPSBbMSwnYSddO1xyXG5cclxuICAgICAgICBzd2l0Y2goYWxmX3kuaW5jbHVkZXModmFsdWVfeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYWxmX3kuaW5kZXhPZih2YWx1ZV95LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbeCx5XSA9IFsgdmFsdWVfeC0xLCBpbmRleF07XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLGtleSl7XHJcbmxldCBhcnJheU9mQ29vcmRpbmF0ZXMgPSBbXTtcclxubGV0IGluaXRpYWxYID0geDtcclxubGV0IGluaXRpYWxZID0gYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgc3dpdGNoKGRpcmVjdGlvbj09PSdsZWZ0LXRvLXJpZ2h0Jyl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgIGlmKGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKSArIGtleSA+IGNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIHgsIGFsZl95W2luaXRpYWxZICsgaV0gXSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uPT09J3RvcC10by1kb3duJyl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGlmKGluaXRpYWxYICsga2V5LTEgPiByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgaW5pdGlhbFggKyBpLCB5IF0pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0Nvb3JkaW5hdGVzKFt4LHldKXtcclxuICAgIGlmKHggPiAwICYmIHggPD0gcm93cyAmJiBhbGZfeS5pbmNsdWRlcyh5LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbil7XHJcbiAgICBsZXQgW3gseV0gPSBbMSwnYSddO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBbeCx5XSA9IFsgcm93ICsgMSwgYWxmX3lbY29sdW1uXSBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpe1xyXG4gICAgbGV0IFtyb3csY29sdW1uXSA9IFswLDBdO1xyXG4gICAgbGV0IHJvd1NlbGVjdGVkID0gY29vcmRbMF0tMTtcclxuICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9IGFsZl95LmluZGV4T2YoY29vcmRbMV0udG9Mb3dlckNhc2UoKSlcclxuICAgICAgICByZXR1cm4gW3Jvdyxjb2x1bW5dID0gW051bWJlcihyb3dTZWxlY3RlZCksIE51bWJlcihjb2x1bW5TZWxlY3RlZCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxDb29yZGluYXRlc1Bvc2libGVzKCkge1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChgJHtpKzF9LCR7YWxmX3lbal19YCk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpe1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBsZXQgbj0gLTE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgbiA9IG4gKyAxO1xyXG4gICAgICAgIGFycmF5LnB1c2goW24sW2Ake2krMX0sJHthbGZfeVtqXX1gXV0pO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZXhwb3J0IHsgcm93cywgY29sdW1ucywgYWxmX3ksIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBcclxuICAgIGNoZWNrQ29vcmRpbmF0ZXMsIGZyb21DZWxsdG9Db29yZGluYXRlcywgYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcyxcclxuICAgICAgICBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwsIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVycyhhcmcxKSB7XHJcbiAgICAvKiB0aGUgYXJnMSBpcyB0aGUgcGFyZW50IGNvbnRhaW5lciAgICovXHJcbiAgICBcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZEZvckFkZCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnZ3JpZEZvckFkZCcpO1xyXG4gICAgXHJcbiAgICAgICAgYXJnMS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWluZXJzIH07IiwiZnVuY3Rpb24gZGVsZXRlRXJyb3JNZXNzYWdlcygpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcclxuICAgIC8qIHBhcmEgY3JlYXIgdW4gYXJyYXkgZGVzZGUgZWwgTm9kZUxpc3QgKi9cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXNBcnJheSA9IFsuLi5lcnJvck1lc3NhZ2VzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gZXJyb3JNZXNzYWdlc0FycmF5LmVudHJpZXMoKTtcclxuICAgIGVycm9yTWVzc2FnZXNBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgIC8qICAgY29uc29sZS5sb2coaW5kZXhbMF0pO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhpbmRleFsxXSk7ICovXHJcbiAgICAgIGxldCB4ID0gaW5kZXhbMV07ICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIHgucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCB7IGRlbGV0ZUVycm9yTWVzc2FnZXMgfTsiLCJpbXBvcnQge1BsYXllcn0gZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgeyBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5cclxuZnVuY3Rpb24gZ2FtZUNvbnRyb2xsZXIoXHJcbiAgICAgICAgcGxheWVyUmVhbCA9IFwiSFVNQU4gUGxheWVyXCIsXHJcbiAgICAgICAgcGxheWVyQ29tcHV0ZXIgPSBcIkNPTVBVVEVSIFBsYXllclwiLFxyXG4gICAgICAgIHdpbm5lciA9IGZhbHNlLFxyXG4gICAgICAgIG1lc3NhZ2UgPSAnJyApe1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHBsYXllcnMgPSBbXHJcbiAgICAgICAgICAgICAgICBuZXcgUGxheWVyKHBsYXllclJlYWwpXHJcbiAgICAgICAgICAgICAgICAsXHJcbiAgICAgICAgICAgICAgICBuZXcgUGxheWVyKHBsYXllckNvbXB1dGVyKVxyXG4gICAgICAgICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xyXG5cclxuICAgICAgICBjb25zdCBzd2l0Y2hQbGF5ZXJUdXJuID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh3aW5uZXIpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAvKiB0aGUgcGxheWVyIGRvZXNudCBjaGFuZ2UgKi9cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllcjsgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHN3aXRjaCBwbGF5ZXIqL1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBsYXllciA9IGFjdGl2ZVBsYXllciA9PT0gcGxheWVyc1swXSA/IHBsYXllcnNbMV0gOiBwbGF5ZXJzWzBdOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH07ICAgICAgICAgICBcclxuICAgICAgICAgICB9O1xyXG4gICAgICAgICAgIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcclxuXHJcbiAgICAgICAgICAgY29uc3QgYm9hcmRSZWFsID0gKCkgPT4gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107XHJcbiAgICAgICAgICAgY29uc3QgYm9hcmRDb21wdXRlciA9ICgpID0+IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydib2FyZCddO1xyXG5cclxuICAgICAgICAgICBjb25zdCBnZXRDb21wdXRlclBsYXllciA9ICgpID0+IHBsYXllcnNbMV07XHJcbiAgICAgICAgICAgY29uc3QgZ2V0SHVtYW5QbGF5ZXIgPSAoKSA9PiBwbGF5ZXJzWzBdO1xyXG5cclxuICAgICAgICAgICBjb25zdCBpc1RoZXJlQVdpbm5lciA9ICgpID0+IHdpbm5lcjtcclxuXHJcbiAgICBjb25zdCBwcmludE5ld1JvdW5kID0gKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGJvYXJkUmVhbCgpO1xyXG4gICAgICAgICAgICBib2FyZENvbXB1dGVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgc3dpdGNoICh3aW5uZXIpIHtcclxuICAgICAgICAgICBjYXNlIHRydWU6ICAgXHJcbiAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAgZ2V0QWN0aXZlUGxheWVyKCkudHlwZSArICcgV09OJzsgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gJyc7ICAgICAgICAgICBcclxuICAgICAgICAgICB9OyBcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTsgICAgICAgICBcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IGdldEdhbWVNZXNzYWdlID0gKCkgPT4gbWVzc2FnZTsgICAgXHJcblxyXG4gICAgICBjb25zdCBjaGVja0Zvcldpbm5lciA9ICgpID0+IHtcclxuICAgICAgICBpZiggcGxheWVyc1swXVsnZ2FtZWJvYXJkJ10uZ2V0VG90YWxTdW5rKCkgPT09IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddLmxlbmd0aCApe1xyXG4gICAgICAgICAgICB3aW5uZXIgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKCBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXS5nZXRUb3RhbFN1bmsoKSA9PT0gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ10ubGVuZ3RoICl7XHJcbiAgICAgICAgICAgICAgICB3aW5uZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3aW5uZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHsgXHJcbiAgICAgICAgd2lubmVyID0gZmFsc2U7XHJcbiAgICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcclxuICAgICAgICAvKiB0aGlzIHJlc2V0IGlzIG5vdCBiZWVuIHVzZWQgKi9cclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBsYXlSb3VuZCA9IChyb3csY29sdW1uKSA9PiB7XHJcbiAgICAgICAgbGV0IGJvYXJkID0gW107XHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgbGV0IGJvYXJkID0gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107ICAgXHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNvcmRlZEF0dGFjayhjb29yZCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNoZWNrRm9yV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICggYm9hcmQgKSA7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGxheVJvdW5kQ29tcHV0ZXIgPSAocm93LGNvbHVtbikgPT4ge1xyXG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3RpdmFuZG8ganVlZ28nKTtcclxuICAgICAgICBpZiAoIHdpbm5lciA9PT0gdHJ1ZSApeyBcclxuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKTtcclxuICAgICAgICAgICAgbGV0IGdhbWVib2FyZCA9IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddO1xyXG4gICAgICAgICAgICBsZXQgYm9hcmQgPSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTsgICBcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCBib2FyZCApIDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3BsYXlSb3VuZCxwbGF5Um91bmRDb21wdXRlciwgZ2V0QWN0aXZlUGxheWVyLCBcclxuICAgICAgICBnZXRHYW1lTWVzc2FnZSwgYm9hcmRSZWFsLCBib2FyZENvbXB1dGVyLCByZXNldEdhbWUsXHJcbiAgICAgICAgIGdldENvbXB1dGVyUGxheWVyLCBnZXRIdW1hblBsYXllciwgaXNUaGVyZUFXaW5uZXJ9O1xyXG59XHJcblxyXG5leHBvcnQge2dhbWVDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIGNoZWNrQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5cclxuXHJcbi8vIGEgY2xhc3MgR2FtZWJvYXJkXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdldEJvYXJkKHJvd3MsIGNvbHVtbnMpO1xyXG4gICAgICAgIHRoaXMuYXJyYXlNaXNzZWQgPSBuZXcgU2V0KFtdKTtcclxuICAgICAgICB0aGlzLmFycmF5QWxsQXR0YWNrID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvYXJkKCByb3dzLCBjb2x1bW5zLCBib2FyZD1bXSl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKHRoaXMuY2VsbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbGwoKXtcclxuICAgXHJcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7dmFsdWV9OyAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBkYXRhU2hpcHMoW3gseV0sZGlyZWN0aW9uLHNpemUsc2hpcE51bWJlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sc2l6ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoc2hpcENvb3JkaW5hdGVzPT09bnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgbm90QXZhaWxhYmxlID0gc2hpcENvb3JkaW5hdGVzLm1hcChcclxuICAgICAgICAgICAgICAgICh4KSA9PiB0aGlzLmJvYXJkW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMF1dW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMV1dLnZhbHVlID09PSAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgIChub3RBdmFpbGFibGUuaW5jbHVkZXModHJ1ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXNUb1N0cmluZyA9IHNoaXBDb29yZGluYXRlcy5tYXAoKHgpID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGxldCBvbmVTaGlwID0geyBcclxuICAgICAgICAgICAgICAgICdzaGlwTnVtYmVyJzpzaGlwTnVtYmVyLCBcclxuICAgICAgICAgICAgICAgICdzaGlwRGV0YWlscyc6IG5ldyBTaGlwKHNpemUpLFxyXG4gICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogc2hpcENvb3JkaW5hdGVzVG9TdHJpbmdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaChvbmVTaGlwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9uZVNoaXA7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzSW5UaGVCb2FyZCggb25lU2hpcCApe1xyXG4gICAgICAgIGxldCBhcnJheSA9IG9uZVNoaXBbJ2Nvb3JkaW5hdGVzJ107XHJcbiAgICAgICAgbGV0IHJldmVyc2VTdHJpbmcgPSBhcnJheS5tYXAoKHgpPT4geC5zcGxpdCgnLCcpKTtcclxuICAgICAgICBsZXQgYXJyYXlJbkJvYXJkID0gcmV2ZXJzZVN0cmluZy5tYXAoICh2YWx1ZXMpID0+IHNoaWZ0Q29vcmRpbmF0ZXModmFsdWVzKSk7XHJcbiAgICAgICAgYXJyYXlJbkJvYXJkLm1hcCgoW3gseV0pID0+IHRoaXMuYm9hcmRbeF1beV0udmFsdWUgPSAxICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlY29yZGVkQXR0YWNrKCBbeCx5XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2syPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRNaXNzZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl7ICAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKCFjaGVja0Nvb3JkaW5hdGVzKFt4LHldKSB8fCB0aGlzLmFycmF5QWxsQXR0YWNrLmhhcyhbeCx5LnRvTG93ZXJDYXNlKCldLnRvU3RyaW5nKCkpICl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgW2JvYXJkWCxib2FyZFldID0gc2hpZnRDb29yZGluYXRlcyhbeCx5XSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMihbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgdGhpcy5hbGxTaGlwcy5sZW5ndGg7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYWxsU2hpcHNbaV1bJ2Nvb3JkaW5hdGVzJ10uaW5jbHVkZXMoW3gseV0udG9TdHJpbmcoKSk9PT10cnVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCA9IHRoaXMuYWxsU2hpcHNbaV1bJ3NoaXBEZXRhaWxzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddID0gc2hpcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb3JkZWRDb29yZCggZGF0YSwgc2V0PXRoaXMuYXJyYXlBbGxBdHRhY2spe1xyXG4gICAgICAgIHNldC5hZGQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgIH1cclxuXHJcbiAgICAgcmVjb3JkZWRNaXNzZWRDb29yZCggZGF0YSwgc2V0PXRoaXMuYXJyYXlNaXNzZWQpe1xyXG4gICAgICAgIHNldC5hZGQoZGF0YS50b1N0cmluZygpKTtcclxuICAgICAgICByZXR1cm4gc2V0O1xyXG4gICAgIH0gXHJcblxyXG4gICAgZ2V0VG90YWxTdW5rKCl7XHJcbiAgICBcclxuICAgICAgICBsZXQgIHRvdGFsU3VuayA9IHRoaXMuYWxsU2hpcHMucmVkdWNlKCh0b3RhbCwgY3VycmVudEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtWydzaGlwRGV0YWlscyddLmJlZW5TdW5rPT09dHJ1ZSA/IHRvdGFsICsgMSA6IHRvdGFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICByZXR1cm4gdG90YWxTdW5rO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRTbmFwc2hvdCgpe1xyXG4gICAgICAgIGxldCB0b3RhbFN1bmsgPSB0aGlzLmdldFRvdGFsU3VuaygpO1xyXG4gICAgICAgIGxldCBtZXNzYWdlID0gJyc7XHJcblxyXG4gICAgICAgIGlmKHRvdGFsU3Vuaz09PXRoaXMuYWxsU2hpcHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2UgPSBgQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rYDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuICBtZXNzYWdlID0gYFNoaXBzIHRoYXQgaGF2ZSBiZWVuIHN1bms6ICR7dG90YWxTdW5rfSAtIFNoaXBzIGFmbG9hdDogJHt0aGlzLmFsbFNoaXBzLmxlbmd0aC10b3RhbFN1bmt9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplQm9hcmQoKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0udmFsdWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7R2FtZWJvYXJkfTsiLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcclxuLy8gYSBjbGFzcyBQbGF5ZXJcclxuY2xhc3MgUGxheWVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7IFxyXG4gICAgICAgIHRoaXMudHlwZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gdGhpcy5jcmVhdGVHYW1lYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVHYW1lYm9hcmQoKXtcclxuICAgICAgICByZXR1cm4gbmV3IEdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtQbGF5ZXJ9OyIsImltcG9ydCB7YWxsQ29vcmRpbmF0ZXNQb3NpYmxlc30gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJyA7XHJcblxyXG5mdW5jdGlvbiByYW5kb21TaGlwcyhhcmcxKXtcclxuICAgIC8qIGFyZzEgaXMgdGhlIHBsYXllckdhbWVib2FyZCBhcmcyIGlzIHRoZSBhcnJheSB3aXRoIGxlbmd0aCovXHJcbiAgIFxyXG4gICBjb25zdCBzaGlwTGVuZ3RoPVs1LDMsNCw2LDQsNV07XHJcbiAgIGNvbnN0IGFycmF5RGlyZWN0aW9uID0gWydsZWZ0LXRvLXJpZ2h0JywndG9wLXRvLWRvd24nXTtcclxuICAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICAgXHJcblxyXG4gICBmb3IgKCBsZXQgaT0wOyBpIDwgc2hpcExlbmd0aC5sZW5ndGg7ICsraSl7XHJcbiAgICBsZXQgc2hpcCA9IG51bGw7IFxyXG5cclxuICAgIHdoaWxlKHNoaXA9PT1udWxsKXtcclxuICAgIGxldCBudW1iZXIgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx0b3RhbENlbGxzLmxlbmd0aCk7XHJcbiAgICBsZXQgY29vcmQgPSAgdG90YWxDZWxsc1tudW1iZXItMV0uc3BsaXQoJywnKTtcclxuICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gICAgbGV0IGRpcmVjdGlvbiA9IGFycmF5RGlyZWN0aW9uW3JhbmRvbUludEZyb21JbnRlcnZhbCgxLDIpLTFdO1xyXG4gICAgc2hpcCA9IGFyZzEuZGF0YVNoaXBzKGNvb3JkLGRpcmVjdGlvbixzaGlwTGVuZ3RoW2ldLGkrMSk7XHJcbiAgICB9XHJcbiAgICBhcmcxLnBsYWNlU2hpcHNJblRoZUJvYXJkKCBzaGlwICk7XHJcblxyXG4gICB9XHJcblxyXG5yZXR1cm4gYXJnMTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGVzKCl7XHJcbiAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICBsZXQgbnVtYmVyID0gcmFuZG9tSW50RnJvbUludGVydmFsKDEsdG90YWxDZWxscy5sZW5ndGgpO1xyXG4gICAgbGV0IGNvb3JkID0gIHRvdGFsQ2VsbHNbbnVtYmVyLTFdLnNwbGl0KCcsJyk7XHJcbiAgICBjb29yZCA9IFtOdW1iZXIoY29vcmRbMF0pLGNvb3JkWzFdXTtcclxuICByZXR1cm4gY29vcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUludEZyb21JbnRlcnZhbChtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gIH1cclxuXHJcbmV4cG9ydCB7cmFuZG9tU2hpcHMsIHJhbmRvbUNvb3JkaW5hdGVzfTsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vZ2FtZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCBhbGxDb29yZGluYXRlc1Bvc2libGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9IGZyb20gJy4vY3JlYXRlLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IGFkZFNoaXBzIH0gZnJvbSAnLi9hZGQtc2hpcHMnO1xyXG5pbXBvcnQgeyByYW5kb21Db29yZGluYXRlcyB9IGZyb20gJy4vcmFuZG9tLXNoaXBzJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHMgfSBmcm9tICcuL3VwZGF0ZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCB9IGZyb20gJy4vdXBkYXRlLWNvbXB1dGVyLWJvYXJkJztcclxuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi9zaG93LWVycm9yJztcclxuaW1wb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vZGVsZXRlLWRpdi1lcnJvcic7XHJcbmltcG9ydCB7IGFkamFjZW50IH0gZnJvbSAnLi9hZGphY2VudCc7XHJcblxyXG5mdW5jdGlvbiBzY3JlZW5Db250cm9sbGVyKGFyZykge1xyXG4gICAgLyogYXJnIGlzIHRoZSBnYW1lIGNvbnRhaW5lciAqL1xyXG5cclxuICAgIGNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpO1xyXG4gICAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTtcclxuICAgIGxldCBhcnJheUFkamFjZW50ID0gW107ICAgLy8gdmVyIHNpIHB1ZWRlIHNlciBlbiBvdHJvIGx1Z2FyXHJcblxyXG4gICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBhcmc7XHJcbiAgICAgICAgY29uc3QgdHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB3YWl0VHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgXHJcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgICAgICB0dXJuLmNsYXNzTGlzdC5hZGQoJ3R1cm4nKTtcclxuICAgICAgICB0dXJuRGl2LmNsYXNzTGlzdC5hZGQoJ3R1cm5EaXYnKTtcclxuICAgICAgICB3YWl0VHVybi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1jb2x1bW46NC81OycpO1xyXG4gICAgICAgIGJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbiAgICAgICAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdCcpO1xyXG4gICAgICAgIGh1bWFuQm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtaHVtYW4nKTtcclxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICByZXNldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80OyBncmlkLWNvbHVtbjoxLzInKTtcclxuICAgICAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXNldEJ1dHRvbicpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ1JFU0VUIGZvciBORVcgR0FNRSc7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjbGVhciB0aGUgYm9hcmRcclxuICAgICAgICBib2FyZERpdi50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlUGxheWVyKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGdhbWUuZ2V0Q29tcHV0ZXJQbGF5ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJDb21wdXRlcik7XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgcGxheWVyJ3MgdHVyblxyXG4gICAgICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBgJHthY3RpdmVQbGF5ZXIudHlwZX0ncyB0dXJuLi4uYDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgLy8gQW55dGhpbmcgY2xpY2thYmxlIHNob3VsZCBiZSBhIGJ1dHRvbiEhXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGh1bWFuQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgLy8gQW55dGhpbmcgY2xpY2thYmxlIHNob3VsZCBiZSBhIGJ1dHRvbiEhXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICAvLyBjcmVhdGUgYSBidXR0b24gZm9yIGFkZCBzaGlwcyBhbmQgZnVuY3Rpb25cclxuICAgICAgICBhZGRpbmdTaGlwcyh0dXJuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdGlhbFNjcmVlbigpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBuZXdlc3QgdmVyc2lvbiBvZiB0aGUgYm9hcmQgYW5kIHBsYXllciB0dXJuXHJcbiAgICAgICAgY29uc3QgYm9hcmRSZWFsID0gZ2FtZS5ib2FyZFJlYWwoKTtcclxuICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZ2FtZS5ib2FyZENvbXB1dGVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEh1bWFuUGxheWVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBnYW1lLmdldENvbXB1dGVyUGxheWVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxib2FyZFJlYWwscGxheWVySHVtYW4pO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLGJvYXJkQ29tcHV0ZXIscGxheWVyQ29tcHV0ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xyXG4gICAgICAgIC8vIERpc3BsYXkgcGxheWVyJ3MgdHVyblxyXG4gICAgICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBgJHthY3RpdmVQbGF5ZXIudHlwZX0ncyB0dXJuLi4uYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lLmlzVGhlcmVBV2lubmVyKCkpO1xyXG4gICAgICAgIC8vIGNoZWNrIGFuZCBhdHRhY2tzIGlzIHRoZXJlIG5vIHdpbm5lclxyXG4gICAgICAgIGxldCBpc1RoZXJlQVdpbm5lciA9IGdhbWUuaXNUaGVyZUFXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2goaXNUaGVyZUFXaW5uZXI9PT1mYWxzZSl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVQbGF5ZXIudHlwZT09PSdDT01QVVRFUiBQbGF5ZXInKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGREaXYoYm9hcmREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY29tcHV0ZXJBdHRhY2ssIDQwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgYWN0aXZlIHBsYXllciBpcyBIdW1hbiBuZWVkIHdhaXQgZm9yIGEgY2xpY2tcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBnYW1lIG92ZXIgLSBkaXNhYmxlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyQm9hcmQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIFxyXG4vLyBhZGQgYSBhZGQtc2hpcHMgQnV0dG9uIGFuZCB0aGUgZXZlbnRsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWRkaW5nU2hpcHModHVybixwbGF5ZXJDb21wdXRlcil7XHJcbiAgICBjb25zdCBhZGRTaGlwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcclxuICAgIGNvbnN0IGFkZFNoaXBzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZFNoaXBzRGl2LmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgYWRkU2hpcHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsJ2FkZFNoaXBzRGl2Jyk7XHJcbiAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRzaGlwcycpO1xyXG4gICAgYWRkU2hpcHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG4gICAgYWRkU2hpcHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBTSElQU1wiO1xyXG5cclxuICAgIGFkZFNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVycyh0dXJuKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGFkZFNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkU2hpcHMoZ2FtZSxodW1hbkJvYXJkLGJvYXJkRGl2LHR1cm4sY29tcHV0ZXJCb2FyZCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnYWRkc2hpcHMnKTtcclxuICAgICAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKGFkZFNoaXBzRGl2KTtcclxuICAgIGFkZFNoaXBzRGl2LmFwcGVuZENoaWxkKGFkZFNoaXBzQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgYm9hcmQgY29tcHV0ZXIgZm9yIEh1bWFuIGF0dGFja3NcclxuICAgICAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXJCb2FyZChlKSB7XHJcbiAgICAgICAgc3dpdGNoKGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkudHlwZT09PSdIVU1BTiBQbGF5ZXInKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvdztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYSBmaWxhIGVzJyxzZWxlY3RlZFJvdyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhIGNvbHVtbmEgZXMnLHNlbGVjdGVkQ29sdW1uKTtcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gY2xpY2sgdGhlIGJvYXJkIGNvbXB1dGVyIHRoZSBwbGF5ZXIgaXMgcGxheWVySHVtYW5cclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBJJ3ZlIGNsaWNrZWQgYSBjb2x1bW4gYW5kIG5vdCB0aGUgZ2FwcyBpbiBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkUm93KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXlSb3VuZChOdW1iZXIoc2VsZWN0ZWRSb3cpLE51bWJlcihzZWxlY3RlZENvbHVtbikpO1xyXG4gICAgICAgICAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3Iod2FpdFR1cm4sJ3dhaXQgeW91ciB0dXJuJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcyw4MDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGEgbWVzc2FnZSB0byBhdm9pZCBjbGljayBpbiBodW1hbiBib2FyZFxyXG4gICAgICAgIGZ1bmN0aW9uIG5vRmlyZVRvRnJpZW5kKGUpe1xyXG4gICAgICAgICAgICBzaG93RXJyb3Iod2FpdFR1cm4sJ0JFIENBUkVGVUwuIGRvblxcJ3Qgc2hvb3QgeW91ciBhbGxpZXMnLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGRlbGV0ZUVycm9yTWVzc2FnZXMsMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh1bWFuQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG5vRmlyZVRvRnJpZW5kKTtcclxuXHJcbiAgICAgICAvLyB0aGlzIGZ1bmN0aW9uIGF0dGFjayBjb25zaWRlciBhZGphY2VudHMgd2hlbiBnb3QgYSBoaXRcclxuICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCl7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYWRqID0gMDtcclxuICAgICAgICBsZXQgY29vcmQgPSBbXTtcclxuICAgICAgICBsZXQgYXJyYXlBbGxBdHRhY2sgPSBnYW1lLmdldEh1bWFuUGxheWVyKCkuZ2FtZWJvYXJkWydhcnJheUFsbEF0dGFjayddO1xyXG4gICAgICAgIHdoaWxlICggY2hlY2sgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBpZiggYXJyYXlBZGphY2VudC5sZW5ndGghPT0wICl7XHJcbiAgICAgICAgICAgICAgICBhZGogPSBhcnJheUFkamFjZW50LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IHRvdGFsQ2VsbHMuYXQoYWRqKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSxjb29yZFsxXV07XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSByYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICAgICAgICAgICAgYWRqID0gdG90YWxDZWxscy5pbmRleE9mKGNvb3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrID0gYXJyYXlBbGxBdHRhY2suaGFzKGNvb3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2VsbCA9IGZyb21Db29yZGluYXRlc3RvQ2VsbChjb29yZCk7XHJcbiAgICAgICAgZ2FtZS5wbGF5Um91bmRDb21wdXRlcihjZWxsWzBdLGNlbGxbMV0pO1xyXG4gICAgICAgIC8vIGlmIGdvdCBhIGhpdCBsb29rIGZvciBhZGphY2VudHNcclxuICAgICAgICBsZXQgYm9hcmRSZWFsID0gZ2FtZS5ib2FyZFJlYWwoKTtcclxuICAgICAgICBpZihib2FyZFJlYWxbY2VsbFswXV1bY2VsbFsxXV0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgYXJyYXlBZGphY2VudCA9IGFkamFjZW50LmdldChhZGopO1xyXG4gICAgICAgICAgICBpZihhcnJheUFkamFjZW50PT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIGFycmF5QWRqYWNlbnQ9W107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgICAgICB1cGRhdGVTY3JlZW4oKTsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gRXN0YSBlcyBsYSBmdW5jaW9uIGRlIGF0YXF1ZSBkZSBjb21wdXRhZG9yYSB1bmljYW1lbnRlIGFsZWF0b3Jpb1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCl7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlBbGxBdHRhY2sgPSBnYW1lLmdldEh1bWFuUGxheWVyKCkuZ2FtZWJvYXJkWydhcnJheUFsbEF0dGFjayddO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGNoZWNrID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gYXJyYXlBbGxBdHRhY2suaGFzKGNvb3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKTtcclxuICAgICAgICAgICAgZ2FtZS5wbGF5Um91bmRDb21wdXRlcihjZWxsWzBdLGNlbGxbMV0pO1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB1cGRhdGVTY3JlZW4oKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICovXHJcblxyXG5cclxuICAgICAgICAvLyBhZGQgYSByZXN1bHQgZ2FtZVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdEdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJlc3VsdEdhbWVEaXYuY2xhc3NMaXN0LmFkZCgncmVzdWx0TWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZU1lc3NhZ2UgPSBnYW1lLmdldEdhbWVNZXNzYWdlKCk7XHJcbiAgICAgICAgIGNvbnN0IGdldE1lc3NhZ2UgPSAoYWN0aXZlTWVzc2FnZSkgPT4geyBcclxuICAgICAgICAgICAgYWN0aXZlTWVzc2FnZSA9IGdhbWUuZ2V0R2FtZU1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgcmVzdWx0R2FtZURpdi50ZXh0Q29udGVudCA9IGFjdGl2ZU1lc3NhZ2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHQuYXBwZW5kQ2hpbGQocmVzdWx0R2FtZURpdik7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhIGRpdiB3aXRoIGNvdW50IGRvd24gZm9yIGNvbXB1dGVyIGF0dGFjayBhbmQgcmVtb3ZlIGl0IFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZERpdihhcmcpe1xyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsJ2F0dGFja01lc3NhZ2UnKTtcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDEvMjsgZ3JpZC1jb2x1bW46IDIvMzsgZGlzcGxheTpmbGV4OyBmbGV4LXdyYXA6bm93cmFwOycpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywndGV4dCcpO1xyXG4gICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpsaWdodHllbGxvdzsnKTtcclxuICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSAnVGhlIGNvbXB1dGVyIHdpbGwgYXR0YWNrIG9uICcudG9VcHBlckNhc2UoKTsgXHJcbiAgICAgICAgICAgIGxldCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdGV4dDEuc2V0QXR0cmlidXRlKCdpZCcsJ2NvdW50Jyk7XHJcbiAgICAgICAgICAgIHRleHQxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdmb250LXNpemU6MS4xcmVtOyBjb2xvcjpyZWQ7Jyk7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSA0OyBcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5hcHBlbmRDaGlsZCh0ZXh0MSk7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHNldEludGVydmFsKGNvdW50LCAxMDAwKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnQoKXtcclxuICAgICAgICAgICAgICAgIG51bWJlciA9IG51bWJlci0xO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50JykuaW5uZXJUZXh0ID0gYCA9PiAke251bWJlcn1gO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKS5pbm5lclRleHQgPSBcIkRPTkVcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZURpdiwxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBhcmcuYXBwZW5kQ2hpbGQoYXR0YWNrTWVzc2FnZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAvLyByZW1vdmUgdGhlIGNvdW50IGRvd24gbWVzc2FnZSBkaXZcclxuICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRGl2KCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tNZXNzYWdlJyk7XHJcbiAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gZXZlbnRsaXN0ZW5lciBmb3IgcmVzZXRcclxuICAgICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG5ld0RvYyk7XHJcblxyXG4gICAgICAgICBmdW5jdGlvbiBuZXdEb2MoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHR1cm4pO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZERpdik7IFxyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHR1cm5EaXYpO1xyXG4gICAgdHVybi5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG4gICAgdHVybi5hcHBlbmRDaGlsZCh3YWl0VHVybik7XHJcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChodW1hbkJvYXJkKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IHtzY3JlZW5Db250cm9sbGVyfSIsIi8vIGEgY2xhc3MgU2hpcCBcclxuY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7ICAgXHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSB2YWx1ZTsgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IGZhbHNlOyBcclxuICAgICAgfVxyXG5cclxuICAgICAgaGl0KGhpdHM9dGhpcy5udW1iZXJPZkhpdHMpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gaGl0cyArIDEgO1xyXG4gICAgICAgIHRoaXMuYmVlblN1bmsgPSB0aGlzLmlzU3VuaygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlck9mSGl0cztcclxuICAgICAgfVxyXG5cclxuICAgICAgaXNTdW5rKGhpdHM9dGhpcy5udW1iZXJPZkhpdHMpe1xyXG4gICAgICAgIHN3aXRjaChoaXRzPT09dGhpcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZW5TdW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZW5TdW5rO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1NoaXB9O1xyXG4iLCJmdW5jdGlvbiBzaG93RXJyb3IoYXJnMSxhcmcyKXtcclxuLy8gYXJnMSBpcyB0aGUgZGl2IC0gYXJnMiBpcyB0aGUgbWVzc2FnZSBmb3IgdGhlIHR5cGUgb2YgZXJyb3JcclxuICAgICAgbGV0IGlkID0gYXJnMS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IGlucHV0RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtpZH1lcnJvcmApO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxpdmUnLCdwb2xpdGUnKTtcclxuICAgICAgIGlucHV0RXJyb3IudGV4dENvbnRlbnQgPSBhcmcyO1xyXG4gICAgXHJcbiAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gYXJnMS5wYXJlbnROb2RlO1xyXG4gICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVycm9yKTsgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgc2hvd0Vycm9yIH07IiwiaW1wb3J0IHsgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfSBmcm9tIFwiLi9hdXhpbGlhcnktZnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQoYXJnMSxhcmcyLGFyZzMpe1xyXG4gICBcclxuICAgIGxldCBib2FyZERpdiA9IGFyZzE7XHJcbiAgICBsZXQgYm9hcmRDb250ZW50ID0gYXJnMjtcclxuICAgIGxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuXHJcbiAgICBjb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XHJcbiAgICBjb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcbiAgICBcclxuICAgIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSkgcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gICAgIC8qICAgIHgudGV4dENvbnRlbnQgPSBib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU7ICovXHJcbiAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTEpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnJzsgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbE1pc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGB3YXRlcmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5sZXQgYXJyYXlTaGlwcyA9IFtdO1xyXG4gICAgaWYoYXJnMyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBhcnJheVNoaXBzID0gYXJnM1snZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ107XHJcbiAgICB9XHJcblxyXG5sZXQgY29vcmRTaGlwc1N1bmsgPSBbXTtcclxuXHJcbmFycmF5U2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgc3dpdGNoKGVsZW1lbnRbJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ10pe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgZWxlbWVudFsnY29vcmRpbmF0ZXMnXS5mb3JFYWNoKCAoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29vcmRTaGlwc1N1bmsucHVzaCh4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5jb25zb2xlLmxvZyhjb29yZFNoaXBzU3Vuayk7XHJcblxyXG5sZXQgYXJyYXlJbmRleE5vZGVBbmRDb29yZCA9IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCk7XHJcbmxldCBpbmRleGVzU3Vua3MgPSBbXTtcclxuY29vcmRTaGlwc1N1bmsuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgIGFycmF5SW5kZXhOb2RlQW5kQ29vcmQuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICBpZih4WzFdWzBdPT09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5pbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgbGV0IGNlbGwgPSBjZWxsc2luQm9hcmRbZWxlbWVudF07XHJcbiAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFN1bmsnKTtcclxuICAgY2VsbC50ZXh0Q29udGVudCA9ICdTVU5LJztcclxufSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkKGFyZyl7XHJcbi8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG5sZXQgYm9hcmREaXYgPSBhcmc7XHJcbmxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG5jb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcblxyXG5jZWxsc2luQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICBcclxuICB4LmNsYXNzTmFtZSA9ICcnOyAgICAgICAvLyB0byBjbGVhciBwcmV2aW91cyBjbGFzc1xyXG4gIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gIHgudGV4dENvbnRlbnQgPSAnJztcclxufSlcclxufSBcclxuXHJcblxyXG5leHBvcnQge3VwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCwgcmVpbml0aWFsaXplRm9ybWF0Q2VsbHNDb21wQm9hcmR9OyIsImltcG9ydCB7IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2VsbHMoYXJnMSxhcmcyLGFyZzMpe1xyXG5cclxuICAgIGxldCBib2FyZERpdiA9IGFyZzE7XHJcbiAgICBsZXQgYm9hcmRDb250ZW50ID0gYXJnMjtcclxuICAgIGxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuXHJcbiAgICBjb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XHJcbiAgICBjb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcbiAgICBcclxuICAgIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIC8qIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgXHJcbiAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTEpeyAgIC8vIEVMIEVSUk9SIEFMIFRFUk1JTkFSIEVMIEpVRUdPIExPIERBIEVOIEVTVEEgTElORUEgYXJyYXkgZm9yIGVhY2hcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsU2hpcEFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYFNISVBgO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0yKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbE1pc3NlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGB3YXRlcmA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGFycmF5U2hpcHMgPSBbXTtcclxuICAgIGlmKGFyZzMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYXJyYXlTaGlwcyA9IGFyZzNbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddO1xyXG4gICAgfVxyXG5cclxubGV0IGNvb3JkU2hpcHNTdW5rID0gW107XHJcblxyXG5hcnJheVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHN3aXRjaChlbGVtZW50WydzaGlwRGV0YWlscyddWydiZWVuU3VuayddKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIGVsZW1lbnRbJ2Nvb3JkaW5hdGVzJ10uZm9yRWFjaCggKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBhcnJheUluZGV4Tm9kZUFuZENvb3JkID0gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKTtcclxubGV0IGluZGV4ZXNTdW5rcyA9IFtdO1xyXG5jb29yZFNoaXBzU3Vuay5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgYXJyYXlJbmRleE5vZGVBbmRDb29yZC5mb3JFYWNoKCh4KT0+e1xyXG4gICAgICAgIGlmKHhbMV1bMF09PT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaW5kZXhlc1N1bmtzLnB1c2goeFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmluZGV4ZXNTdW5rcy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICBjb25zb2xlLmxvZyhjZWxsc2luQm9hcmRbZWxlbWVudF0pO1xyXG4gICBsZXQgY2VsbCA9IGNlbGxzaW5Cb2FyZFtlbGVtZW50XTtcclxuICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsU3VuaycpO1xyXG4gICBjZWxsLnRleHRDb250ZW50ID0gJ1NVTksnO1xyXG59KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVpbml0aWFsaXplRm9ybWF0Q2VsbHMoYXJnKXtcclxuIC8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG4gbGV0IGJvYXJkRGl2ID0gYXJnO1xyXG4gbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG4gY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gXHJcbiBjZWxsc2luQm9hcmQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICBcclxuICAgeC5jbGFzc05hbWUgPSAnJzsgICAgICAgLy8gdG8gY2xlYXIgcHJldmlvdXMgY2xhc3NcclxuICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgIHgudGV4dENvbnRlbnQgPSAnJztcclxuIH0pXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHt1cGRhdGVDZWxscywgcmVpbml0aWFsaXplRm9ybWF0Q2VsbHN9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
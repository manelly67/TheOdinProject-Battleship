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
    text.setAttribute('style','color:green; font-weight: 900; display:flex; justify-content: right;');
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

// AGREGAR AQUI LOS DOS DIV CON LAS COLUMNAS Y LAS FILAS Y REMOVERLOS AL AGREGAR LOS BARCOS



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CLFFBQVEsMERBQVc7QUFDbkIsUUFBUSxnRkFBd0I7QUFDaEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2tCOzs7Ozs7Ozs7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Qiw2RUFBdUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2dFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFDaEM7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCLDZFQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hZGQtc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYWRqYWNlbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYXV4aWxpYXJ5LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtY29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZS1kaXYtZXJyb3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcmFuZG9tLXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NjcmVlbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2hvdy1lcnJvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUtY29tcHV0ZXItYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIGFsZl95fSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc30gZnJvbSAnLi91cGRhdGUnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQgfSBmcm9tIFwiLi91cGRhdGUtY29tcHV0ZXItYm9hcmRcIjtcclxuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi9zaG93LWVycm9yJztcclxuaW1wb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vZGVsZXRlLWRpdi1lcnJvcic7XHJcbmltcG9ydCB7IHJhbmRvbVNoaXBzIH0gZnJvbSBcIi4vcmFuZG9tLXNoaXBzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRTaGlwcyhhcmcxLGFyZzIsYXJnMyxhcmc0LGFyZzUsYXJnNil7XHJcbiAgICAvKiBhcmcgaXMgdGhlIGdhbWUgIGFyZzIgaXMgdGhlIGRpdiB3aXRoIHRoZSBodW1hbmJvYXJkICBcclxuICAgIGFyZzMgdG8gc2hvdyB0aGUgb3B0aW9ucyBhcmc0IHRvIHNob3cgcmFuZG9tIGJ1dHRvblxyXG4gICAgYXJnNSBpcyB0aGUgZGl2IHdpdGggdGhlIGNvbXB1dGVyYm9hcmQgYXJnNiBpcyB0aGUgY29udGVudCBjb21wdXRlciBib2FyZCovXHJcbmNvbnN0IGdhbWUgPSBhcmcxO1xyXG5jb25zdCBodW1hbkJvYXJkID0gYXJnMjtcclxuY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xyXG5jb25zdCBjb21wdXRlckJvYXJkID0gYXJnNTtcclxuY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBhcmc2O1xyXG5cclxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkRm9yQWRkJyk7XHJcbmdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZEZvckFkZCcpO1xyXG5jb25zdCBkaXZGb3JFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kaXZGb3JFcnJvci5zZXRBdHRyaWJ1dGUoJ2lkJywnZGl2Rm9yRXJyb3InKTtcclxuZGl2Rm9yRXJyb3Iuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxIC8gMjsgZ3JpZC1jb2x1bW46IDQgLyA1OycpXHJcblxyXG5jb25zdCBzaGlwTGVuZ3RoPVs1LDMsNCw2LDQsNV07XHJcbiAgICAgICAgXHJcbmZvcihsZXQgaT0xOyBpPD1zaGlwTGVuZ3RoLmxlbmd0aDsgKytpKXtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLGBmb3JtJHtpfWApO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtSW5wdXQnKTtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLGBzdWJtaXQke2l9YCk7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBgQUREIE7CsCAke2l9YDtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRTaGlwQnV0dG9uJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6Z3JlZW47IGZvbnQtd2VpZ2h0OiA5MDA7IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiByaWdodDsnKTtcclxuICAgIHRleHQuaW5uZXJUZXh0ID0gYCR7c2hpcExlbmd0aFtpLTFdfSBzcXVhcmVzIGxvbmdpdHVkZWA7XHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IHJhZGlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JtUmFkaW8nKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvckhvcml6b250YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgaG9yaXpvbnRhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9yVmVydGljYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgdmVydGljYWxseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMTJweCcpO1xyXG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLmlubmVyVGV4dCA9ICdsZWZ0LXRvLXJpZ2h0JztcclxuICAgIGxhYmVsRm9ySG9yaXpvbnRhbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIGxhYmVsRm9yVmVydGljYWwuaW5uZXJUZXh0ID0gJ3RvcC10by1kb3duJztcclxuICAgIGxhYmVsRm9yVmVydGljYWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b3AtdG8tZG93bicpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCdpZCcsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkaXJlY3Rpb24nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9wLXRvLWRvd24nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3RvcC10by1kb3duJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2RpcmVjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvb3JkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb29yZFJvdy5pbm5lclRleHQgPSAnUk9XOiAnO1xyXG4gICAgY29uc3QgY29vcmRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvb3JkQ29sdW1uLmlubmVyVGV4dCA9ICdDT0xVTU46ICc7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8cm93czsgKytpKXtcclxuICAgICAgICBjb25zdCByb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJvd0xhYmVsLmlubmVyVGV4dCA9IGkrMTtcclxuICAgICAgICByb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYHJvdyR7aSsxfWApO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCdpZCcsYHJvdyR7aSsxfWApO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Jvd1NlbGVjdGVkJyk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsaSsxKTtcclxuXHJcbiAgICAgICAgY29vcmRSb3cuYXBwZW5kQ2hpbGQocm93TGFiZWwpO1xyXG4gICAgICAgIGNvb3JkUm93LmFwcGVuZENoaWxkKGlucHV0Um93KTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgZm9yKGxldCBqPTA7IGo8Y29sdW1uczsgKytqKXtcclxuICAgICAgICBjb25zdCBjb2x1bW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbHVtbkxhYmVsLmlubmVyVGV4dCA9IGFsZl95W2pdO1xyXG4gICAgICAgIGNvbHVtbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgY29sdW1uJHthbGZfeVtqXX1gKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgnaWQnLGBjb2x1bW4ke2FsZl95W2pdfWApO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NvbHVtblNlbGVjdGVkJyk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCd2YWx1ZScsYWxmX3lbal0pO1xyXG5cclxuICAgICAgICBjb29yZENvbHVtbi5hcHBlbmRDaGlsZChjb2x1bW5MYWJlbCk7XHJcbiAgICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoaW5wdXRDb2x1bW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGhvcml6b250YWxseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB2ZXJ0aWNhbGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxldCBkaXJlY3Rpb25TZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gZGlyZWN0aW9uUmFkaW9WYWx1ZSgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImRpcmVjdGlvblwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICBkaXJlY3Rpb25TZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgc2hvd0Vycm9yKHJhZGlvRGl2LCdtdXN0IHNlbGVjdCBkaXJlY3Rpb24nLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgbGV0IHJvd1NlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiByb3dSYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cInJvd1NlbGVjdGVkXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIHJvd1NlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICAgICByb3dTZWxlY3RlZCA9IDE7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiByb3dTZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIGNvbHVtblJhZGlvVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJjb2x1bW5TZWxlY3RlZFwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICBjb2x1bW5TZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSAnYSc7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiBjb2x1bW5TZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaXplID0gc2hpcExlbmd0aFtpLTFdO1xyXG5cclxuICAgICAgICBsZXQgc2hpcE51bWJlciA9IGk7XHJcbiAgICBcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uUmFkaW9WYWx1ZSgpO1xyXG5cclxuICAgICAgICBsZXQgcm93U2VsZWN0ZWQgPSByb3dSYWRpb1ZhbHVlKCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBjb2x1bW5SYWRpb1ZhbHVlKCk7XHJcblxyXG4gICAgICAgIGxldCBjb29yZCA9IFtOdW1iZXIocm93U2VsZWN0ZWQpLGNvbHVtblNlbGVjdGVkXTtcclxuXHJcbiAgICAgICAgbGV0IHNoaXAgPSBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10uZGF0YVNoaXBzKGNvb3JkLGRpcmVjdGlvbixzaXplLHNoaXBOdW1iZXIpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHNoaXAhPT1udWxsKXtcclxuICAgICAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICAgICAgICBsZXQgbmV3Qm9hcmQgPSBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10ucGxhY2VTaGlwc0luVGhlQm9hcmQoc2hpcCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQsIG5ld0JvYXJkKTtcclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9ybSR7aX1gKTtcclxuICAgICAgICAgICAgc3VibWl0UmVhZHkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybUlucHV0JykubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLGRpdkZvclJhbmRvbSk7XHJcbiAgICAgICAgICAgICAgICByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzMsY29tcHV0ZXJCb2FyZCxzaGlwTGVuZ3RoLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzaG93RXJyb3IoZGl2Rm9yRXJyb3IsJ1NFTEVDVCBBTk9USEVSIExPQ0FUSU9OJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgYXJnMy5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRGl2KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRSb3cpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRDb2x1bW4pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JIb3Jpem9udGFsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGhvcml6b250YWxseSk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvclZlcnRpY2FsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKHZlcnRpY2FsbHkpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGl2Rm9yUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZGb3JSYW5kb20uaW5uZXJUZXh0ID0gJ0NsaWNrIGhlcmUgZm9yIGEgcmFuZG9tIGZsZWV0IG9mIHNoaXBzJztcclxuICAgIGRpdkZvclJhbmRvbS5jbGFzc0xpc3QuYWRkKCdyYW5kb21zaGlwcycpO1xyXG4gICAgY29uc3QgYnV0dG9uUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25SYW5kb20uaW5uZXJUZXh0ID0gJ1JBTkRPTSBGTEVFVCc7XHJcbiAgICBidXR0b25SYW5kb20uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG5cclxuICAgIGJ1dHRvblJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVySHVtYW5bJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQscGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLGRpdkZvclJhbmRvbSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihhcmczLGNvbXB1dGVyQm9hcmQsc2hpcExlbmd0aCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvclJhbmRvbSk7XHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvckVycm9yKTtcclxuICAgIGRpdkZvclJhbmRvbS5hcHBlbmRDaGlsZChidXR0b25SYW5kb20pO1xyXG5cclxuLy8gQUdSRUdBUiBBUVVJIExPUyBET1MgRElWIENPTiBMQVMgQ09MVU1OQVMgWSBMQVMgRklMQVMgWSBSRU1PVkVSTE9TIEFMIEFHUkVHQVIgTE9TIEJBUkNPU1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxBZGRTaGlwc0RpdihhcmcxLGFyZzIpe1xyXG4gICAgLy8gYXJnMSBhbmQgYXJnMiBhcmUgdGhlIGJvdGggZGl2IHRvIHdpbGwgYmUgcmVtb3ZlZFxyXG4gICAgYXJnMS5yZW1vdmUoKTtcclxuICAgIGFyZzIucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoYXJnMSxhcmcyLGFyZzMsYXJnNCl7XHJcbiAgICAgIC8qICBhcmcxIGlzIHRoZSBkaXYgdG8gd3JpdGUgdGhlIGhlYWQgKi9cclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gYXJnMjtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gYXJnMztcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzQ7XHJcblxyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY29tcHV0ZXInKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZENvbXB1dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZENvbXB1dGVyLmlubmVyVGV4dCA9ICd0aGlzIGlzIHlvdXIgZW5lbXkgJy50b1VwcGVyQ2FzZSgpKycgQ2xpY2sgVG8gQXR0YWNrJztcclxuICAgICAgICBoZWFkQ29tcHV0ZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7IGdyaWQtY29sdW1uOiA0LzU7IHBhZGRpbmctbGVmdDoyNSU7IGNvbG9yOmxpZ2h0eWVsbG93OycpO1xyXG4gICAgICAgIGFyZzEuYXBwZW5kQ2hpbGQoaGVhZENvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByYW5kb21TaGlwcyhwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ10sc2hpcExlbmd0aCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkU2hpcHN9OyIsImNvbnN0IGFkamFjZW50ID0gbmV3IE1hcCgpO1xyXG5cclxuYWRqYWNlbnQuc2V0KDAsWzEsMTJdKTtcclxuYWRqYWNlbnQuc2V0KDEsWzAsMiwxM10pO1xyXG5hZGphY2VudC5zZXQoMixbMSwzLDE0XSk7XHJcbmFkamFjZW50LnNldCgzLFsyLDQsMTVdKTtcclxuYWRqYWNlbnQuc2V0KDQsWzMsNSwxNl0pO1xyXG5hZGphY2VudC5zZXQoNSxbNCw2LDE3XSk7XHJcbmFkamFjZW50LnNldCg2LFs1LDcsMThdKTtcclxuYWRqYWNlbnQuc2V0KDcsWzYsOCwxOV0pO1xyXG5hZGphY2VudC5zZXQoOCxbNyw5LDIwXSk7XHJcbmFkamFjZW50LnNldCg5LFs4LDEwLDIxXSk7XHJcbmFkamFjZW50LnNldCgxMCxbOSwxMSwyMl0pO1xyXG5hZGphY2VudC5zZXQoMTEsWzEwLDIzXSk7XHJcbmFkamFjZW50LnNldCgxMixbMCwxMywyNF0pO1xyXG5hZGphY2VudC5zZXQoMTMsWzEsMTIsMTQsMjVdKTtcclxuYWRqYWNlbnQuc2V0KDE0LFsyLDEzLDE1LDI2XSk7XHJcbmFkamFjZW50LnNldCgxNSxbMywxNCwxNiwyN10pO1xyXG5hZGphY2VudC5zZXQoMTYsWzQsMTUsMTcsMjhdKTtcclxuYWRqYWNlbnQuc2V0KDE3LFs1LDE2LDE4LDI5XSk7XHJcbmFkamFjZW50LnNldCgxOCxbNiwxNywxOSwzMF0pO1xyXG5hZGphY2VudC5zZXQoMTksWzcsMTgsMjAsMzFdKTtcclxuYWRqYWNlbnQuc2V0KDIwLFs4LDE5LDIxLDMyXSk7XHJcbmFkamFjZW50LnNldCgyMSxbOSwyMCwyMiwzM10pO1xyXG5hZGphY2VudC5zZXQoMjIsWzEwLDIxLDIzLDM0XSk7XHJcbmFkamFjZW50LnNldCgyMyxbMTEsMjIsMzVdKTtcclxuYWRqYWNlbnQuc2V0KDI0LFsxMiwyNSwzNl0pO1xyXG5hZGphY2VudC5zZXQoMjUsWzEzLDI0LDI2LDM3XSk7XHJcbmFkamFjZW50LnNldCgyNixbMTQsMjUsMjcsMzhdKTtcclxuYWRqYWNlbnQuc2V0KDI3LFsxNSwyNiwyOCwzOV0pO1xyXG5hZGphY2VudC5zZXQoMjgsWzE2LDI3LDI5LDQwXSk7XHJcbmFkamFjZW50LnNldCgyOSxbMTcsMjgsMzAsNDFdKTtcclxuYWRqYWNlbnQuc2V0KDMwLFsxOCwyOSwzMSw0Ml0pO1xyXG5hZGphY2VudC5zZXQoMzEsWzE5LDMwLDMyLDQzXSk7XHJcbmFkamFjZW50LnNldCgzMixbMjAsMzEsMzMsNDRdKTtcclxuYWRqYWNlbnQuc2V0KDMzLFsyMSwzMiwzNCw0NV0pO1xyXG5hZGphY2VudC5zZXQoMzQsWzIyLDMzLDM1LDQ2XSk7XHJcbmFkamFjZW50LnNldCgzNSxbMjMsMzQsNDddKTtcclxuYWRqYWNlbnQuc2V0KDM2LFsyNCwzNyw0OF0pO1xyXG5hZGphY2VudC5zZXQoMzcsWzI1LDM2LDM4LDQ5XSk7XHJcbmFkamFjZW50LnNldCgzOCxbMjYsMzcsMzksNTBdKTtcclxuYWRqYWNlbnQuc2V0KDM5LFsyNywzOCw0MCw1MV0pO1xyXG5hZGphY2VudC5zZXQoNDAsWzI4LDM5LDQxLDUyXSk7XHJcbmFkamFjZW50LnNldCg0MSxbMjksNDAsNDIsNTNdKTtcclxuYWRqYWNlbnQuc2V0KDQyLFszMCw0MSw0Myw1NF0pO1xyXG5hZGphY2VudC5zZXQoNDMsWzMxLDQyLDQ0LDU1XSk7XHJcbmFkamFjZW50LnNldCg0NCxbMzIsNDMsNDUsNTZdKTtcclxuYWRqYWNlbnQuc2V0KDQ1LFszMyw0NCw0Niw1N10pO1xyXG5hZGphY2VudC5zZXQoNDYsWzM0LDQ1LDQ3LDU4XSk7XHJcbmFkamFjZW50LnNldCg0NyxbMzUsNDYsNTldKTtcclxuYWRqYWNlbnQuc2V0KDQ4LFszNiw0OSw2MF0pO1xyXG5hZGphY2VudC5zZXQoNDksWzM3LDQ4LDUwLDYxXSk7XHJcbmFkamFjZW50LnNldCg1MCxbMzgsNDksNTEsNjJdKTtcclxuYWRqYWNlbnQuc2V0KDUxLFszOSw1MCw1Miw2M10pO1xyXG5hZGphY2VudC5zZXQoNTIsWzQwLDUxLDUzLDY0XSk7XHJcbmFkamFjZW50LnNldCg1MyxbNDEsNTIsNTQsNjVdKTtcclxuYWRqYWNlbnQuc2V0KDU0LFs0Miw1Myw1NSw2Nl0pO1xyXG5hZGphY2VudC5zZXQoNTUsWzQzLDU0LDU2LDY3XSk7XHJcbmFkamFjZW50LnNldCg1NixbNDQsNTUsNTcsNjhdKTtcclxuYWRqYWNlbnQuc2V0KDU3LFs0NSw1Niw1OCw2OV0pO1xyXG5hZGphY2VudC5zZXQoNTgsWzQ2LDU3LDU5LDcwXSk7XHJcbmFkamFjZW50LnNldCg1OSxbNDcsNTgsNzFdKTtcclxuYWRqYWNlbnQuc2V0KDYwLFs0OCw2MSw3Ml0pO1xyXG5hZGphY2VudC5zZXQoNjEsWzQ5LDYwLDYyLDczXSk7XHJcbmFkamFjZW50LnNldCg2MixbNTAsNjEsNjMsNzRdKTtcclxuYWRqYWNlbnQuc2V0KDYzLFs1MSw2Miw2NCw3NV0pO1xyXG5hZGphY2VudC5zZXQoNjQsWzUyLDYzLDY1LDc2XSk7XHJcbmFkamFjZW50LnNldCg2NSxbNTMsNjQsNjYsNzddKTtcclxuYWRqYWNlbnQuc2V0KDY2LFs1NCw2NSw2Nyw3OF0pO1xyXG5hZGphY2VudC5zZXQoNjcsWzU1LDY2LDY4LDc5XSk7XHJcbmFkamFjZW50LnNldCg2OCxbNTYsNjcsNjksODBdKTtcclxuYWRqYWNlbnQuc2V0KDY5LFs1Nyw2OCw3MCw4MV0pO1xyXG5hZGphY2VudC5zZXQoNzAsWzU4LDY5LDcxLDgyXSk7XHJcbmFkamFjZW50LnNldCg3MSxbNTksNzAsODNdKTtcclxuYWRqYWNlbnQuc2V0KDcyLFs2MCw3Myw4NF0pO1xyXG5hZGphY2VudC5zZXQoNzMsWzYxLDcyLDc0LDg1XSk7XHJcbmFkamFjZW50LnNldCg3NCxbNjIsNzMsNzUsODZdKTtcclxuYWRqYWNlbnQuc2V0KDc1LFs2Myw3NCw3Niw4N10pO1xyXG5hZGphY2VudC5zZXQoNzYsWzY0LDc1LDc3LDg4XSk7XHJcbmFkamFjZW50LnNldCg3NyxbNjUsNzYsNzgsODldKTtcclxuYWRqYWNlbnQuc2V0KDc4LFs2Niw3Nyw3OSw5MF0pO1xyXG5hZGphY2VudC5zZXQoNzksWzY3LDc4LDgwLDkxXSk7XHJcbmFkamFjZW50LnNldCg4MCxbNjgsNzksODEsOTJdKTtcclxuYWRqYWNlbnQuc2V0KDgxLFs2OSw4MCw4Miw5M10pO1xyXG5hZGphY2VudC5zZXQoODIsWzcwLDgxLDgzLDk0XSk7XHJcbmFkamFjZW50LnNldCg4MyxbNzEsODIsOTVdKTtcclxuYWRqYWNlbnQuc2V0KDg0LFs3Miw4NSw5Nl0pO1xyXG5hZGphY2VudC5zZXQoODUsWzczLDg0LDg2LDk3XSk7XHJcbmFkamFjZW50LnNldCg4NixbNzQsODUsODcsOThdKTtcclxuYWRqYWNlbnQuc2V0KDg3LFs3NSw4Niw4OCw5OV0pO1xyXG5hZGphY2VudC5zZXQoODgsWzc2LDg3LDg5LDEwMF0pO1xyXG5hZGphY2VudC5zZXQoODksWzc3LDg4LDkwLDEwMV0pO1xyXG5hZGphY2VudC5zZXQoOTAsWzc4LDg5LDkxLDEwMl0pO1xyXG5hZGphY2VudC5zZXQoOTEsWzc5LDkwLDkyLDEwM10pO1xyXG5hZGphY2VudC5zZXQoOTIsWzgwLDkxLDkzLDEwNF0pO1xyXG5hZGphY2VudC5zZXQoOTMsWzgxLDkyLDk0LDEwNV0pO1xyXG5hZGphY2VudC5zZXQoOTQsWzgyLDkzLDk1LDEwNl0pO1xyXG5hZGphY2VudC5zZXQoOTUsWzgzLDk0LDEwN10pO1xyXG5hZGphY2VudC5zZXQoOTYsWzg0LDk3LDEwOF0pO1xyXG5hZGphY2VudC5zZXQoOTcsWzg1LDk2LDk4LDEwOV0pO1xyXG5hZGphY2VudC5zZXQoOTgsWzg2LDk3LDk5LDExMF0pO1xyXG5hZGphY2VudC5zZXQoOTksWzg3LDk4LDEwMCwxMTFdKTtcclxuYWRqYWNlbnQuc2V0KDEwMCxbODgsOTksMTAxLDExMl0pO1xyXG5hZGphY2VudC5zZXQoMTAxLFs4OSwxMDAsMTAyLDExM10pO1xyXG5hZGphY2VudC5zZXQoMTAyLFs5MCwxMDEsMTAzLDExNF0pO1xyXG5hZGphY2VudC5zZXQoMTAzLFs5MSwxMDIsMTA0LDExNV0pO1xyXG5hZGphY2VudC5zZXQoMTA0LFs5MiwxMDMsMTA1LDExNl0pO1xyXG5hZGphY2VudC5zZXQoMTA1LFs5MywxMDQsMTA2LDExN10pO1xyXG5hZGphY2VudC5zZXQoMTA2LFs5NCwxMDUsMTA3LDExOF0pO1xyXG5hZGphY2VudC5zZXQoMTA3LFs5NSwxMDYsMTE5XSk7XHJcbmFkamFjZW50LnNldCgxMDgsWzk2LDEwOSwxMjBdKTtcclxuYWRqYWNlbnQuc2V0KDEwOSxbOTcsMTA4LDExMCwxMjFdKTtcclxuYWRqYWNlbnQuc2V0KDExMCxbOTgsMTA5LDExMSwxMjJdKTtcclxuYWRqYWNlbnQuc2V0KDExMSxbOTksMTEwLDExMiwxMjNdKTtcclxuYWRqYWNlbnQuc2V0KDExMixbMTAwLDExMSwxMTMsMTI0XSk7XHJcbmFkamFjZW50LnNldCgxMTMsWzEwMSwxMTIsMTE0LDEyNV0pO1xyXG5hZGphY2VudC5zZXQoMTE0LFsxMDIsMTEzLDExNSwxMjZdKTtcclxuYWRqYWNlbnQuc2V0KDExNSxbMTAzLDExNCwxMTYsMTI3XSk7XHJcbmFkamFjZW50LnNldCgxMTYsWzEwNCwxMTUsMTE3LDEyOF0pO1xyXG5hZGphY2VudC5zZXQoMTE3LFsxMDUsMTE2LDExOCwxMjldKTtcclxuYWRqYWNlbnQuc2V0KDExOCxbMTA2LDExNywxMTksMTMwXSk7XHJcbmFkamFjZW50LnNldCgxMTksWzEwNywxMTgsMTMxXSk7XHJcbmFkamFjZW50LnNldCgxMjAsWzEwOCwxMjEsMTMyXSk7XHJcbmFkamFjZW50LnNldCgxMjEsWzEwOSwxMjAsMTIyLDEzM10pO1xyXG5hZGphY2VudC5zZXQoMTIyLFsxMTAsMTIxLDEyMywxMzRdKTtcclxuYWRqYWNlbnQuc2V0KDEyMyxbMTExLDEyMiwxMjQsMTM1XSk7XHJcbmFkamFjZW50LnNldCgxMjQsWzExMiwxMjMsMTI1LDEzNl0pO1xyXG5hZGphY2VudC5zZXQoMTI1LFsxMTMsMTI0LDEyNiwxMzddKTtcclxuYWRqYWNlbnQuc2V0KDEyNixbMTE0LDEyNSwxMjcsMTM4XSk7XHJcbmFkamFjZW50LnNldCgxMjcsWzExNSwxMjYsMTI4LDEzOV0pO1xyXG5hZGphY2VudC5zZXQoMTI4LFsxMTYsMTI3LDEyOSwxNDBdKTtcclxuYWRqYWNlbnQuc2V0KDEyOSxbMTE3LDEyOCwxMzAsMTQxXSk7XHJcbmFkamFjZW50LnNldCgxMzAsWzExOCwxMjksMTMxLDE0Ml0pO1xyXG5hZGphY2VudC5zZXQoMTMxLFsxMTksMTMwLDE0M10pO1xyXG5hZGphY2VudC5zZXQoMTMyLFsxMjAsMTMzLDE0NF0pO1xyXG5hZGphY2VudC5zZXQoMTMzLFsxMjEsMTMyLDEzNCwxNDVdKTtcclxuYWRqYWNlbnQuc2V0KDEzNCxbMTIyLDEzMywxMzUsMTQ2XSk7XHJcbmFkamFjZW50LnNldCgxMzUsWzEyMywxMzQsMTM2LDE0N10pO1xyXG5hZGphY2VudC5zZXQoMTM2LFsxMjQsMTM1LDEzNywxNDhdKTtcclxuYWRqYWNlbnQuc2V0KDEzNyxbMTI1LDEzNiwxMzgsMTQ5XSk7XHJcbmFkamFjZW50LnNldCgxMzgsWzEyNiwxMzcsMTM5LDE1MF0pO1xyXG5hZGphY2VudC5zZXQoMTM5LFsxMjcsMTM4LDE0MCwxNTFdKTtcclxuYWRqYWNlbnQuc2V0KDE0MCxbMTI4LDEzOSwxNDEsMTUyXSk7XHJcbmFkamFjZW50LnNldCgxNDEsWzEyOSwxNDAsMTQyLDE1M10pO1xyXG5hZGphY2VudC5zZXQoMTQyLFsxMzAsMTQxLDE0MywxNTRdKTtcclxuYWRqYWNlbnQuc2V0KDE0MyxbMTMxLDE0MiwxNTVdKTtcclxuYWRqYWNlbnQuc2V0KDE0NCxbMTMyLDE0NV0pO1xyXG5hZGphY2VudC5zZXQoMTQ1LFsxMzMsMTQ0LDE0Nl0pO1xyXG5hZGphY2VudC5zZXQoMTQ2LFsxMzQsMTQ1LDE0N10pO1xyXG5hZGphY2VudC5zZXQoMTQ3LFsxMzUsMTQ2LDE0OF0pO1xyXG5hZGphY2VudC5zZXQoMTQ4LFsxMzYsMTQ3LDE0OV0pO1xyXG5hZGphY2VudC5zZXQoMTQ5LFsxMzcsMTQ4LDE1MF0pO1xyXG5hZGphY2VudC5zZXQoMTUwLFsxMzgsMTQ5LDE1MV0pO1xyXG5hZGphY2VudC5zZXQoMTUxLFsxMzksMTUwLDE1Ml0pO1xyXG5hZGphY2VudC5zZXQoMTUyLFsxNDAsMTUxLDE1M10pO1xyXG5hZGphY2VudC5zZXQoMTUzLFsxNDEsMTUyLDE1NF0pO1xyXG5hZGphY2VudC5zZXQoMTU0LFsxNDIsMTUzLDE1NV0pO1xyXG5hZGphY2VudC5zZXQoMTU1LFsxNDMsMTU0XSk7XHJcblxyXG5cclxuZXhwb3J0IHthZGphY2VudH07XHJcbiIsImNvbnN0IHJvd3MgPSAxMztcclxuY29uc3QgY29sdW1ucyA9IDEyO1xyXG5cclxuY29uc3QgYWxmX3kgPSBbXHJcbiAgICAnYScsJ2InLCdjJywnZCcsJ2UnLCdmJywnZycsJ2gnLCdpJywnaicsJ2snLCdsJ1xyXG4gICAgIF07XHJcblxyXG5mdW5jdGlvbiBzaGlmdENvb3JkaW5hdGVzKFt2YWx1ZV94LHZhbHVlX3ldKXtcclxuICAgIFxyXG4gICAgbGV0IFt4LHldID0gWzEsJ2EnXTtcclxuXHJcbiAgICAgICAgc3dpdGNoKGFsZl95LmluY2x1ZGVzKHZhbHVlX3kudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFsZl95LmluZGV4T2YodmFsdWVfeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3gseV0gPSBbIHZhbHVlX3gtMSwgaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkxvY2F0aW9uKFt4LHldLGRpcmVjdGlvbixrZXkpe1xyXG5sZXQgYXJyYXlPZkNvb3JkaW5hdGVzID0gW107XHJcbmxldCBpbml0aWFsWCA9IHg7XHJcbmxldCBpbml0aWFsWSA9IGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHN3aXRjaChkaXJlY3Rpb249PT0nbGVmdC10by1yaWdodCcpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICBpZihhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSkgKyBrZXkgPiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyB4LCBhbGZfeVtpbml0aWFsWSArIGldIF0pO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbj09PSd0b3AtdG8tZG93bicpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBpZihpbml0aWFsWCArIGtleS0xID4gcm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIGluaXRpYWxYICsgaSwgeSBdKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDb29yZGluYXRlcyhbeCx5XSl7XHJcbiAgICBpZih4ID4gMCAmJiB4IDw9IHJvd3MgJiYgYWxmX3kuaW5jbHVkZXMoeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pe1xyXG4gICAgbGV0IFt4LHldID0gWzEsJ2EnXTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gW3gseV0gPSBbIHJvdyArIDEsIGFsZl95W2NvbHVtbl0gXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKXtcclxuICAgIGxldCBbcm93LGNvbHVtbl0gPSBbMCwwXTtcclxuICAgIGxldCByb3dTZWxlY3RlZCA9IGNvb3JkWzBdLTE7XHJcbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBhbGZfeS5pbmRleE9mKGNvb3JkWzFdLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgcmV0dXJuIFtyb3csY29sdW1uXSA9IFtOdW1iZXIocm93U2VsZWN0ZWQpLCBOdW1iZXIoY29sdW1uU2VsZWN0ZWQpXTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpIHtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIGFycmF5LnB1c2goYCR7aSsxfSwke2FsZl95W2pdfWApO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKXtcclxuICAgIGxldCBhcnJheSA9IFtdO1xyXG4gICAgbGV0IG49IC0xO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgIG4gPSBuICsgMTtcclxuICAgICAgICBhcnJheS5wdXNoKFtuLFtgJHtpKzF9LCR7YWxmX3lbal19YF1dKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IHJvd3MsIGNvbHVtbnMsIGFsZl95LCBzaGlmdENvb3JkaW5hdGVzLCBhc3NpZ25Mb2NhdGlvbiwgXHJcbiAgICBjaGVja0Nvb3JkaW5hdGVzLCBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMsIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMsXHJcbiAgICAgICAgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9OyIsImZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcnMoYXJnMSkge1xyXG4gICAgLyogdGhlIGFyZzEgaXMgdGhlIHBhcmVudCBjb250YWluZXIgICAqL1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWRGb3JBZGQnKTtcclxuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2dyaWRGb3JBZGQnKTtcclxuICAgIFxyXG4gICAgICAgIGFyZzEuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9OyIsImZ1bmN0aW9uIGRlbGV0ZUVycm9yTWVzc2FnZXMoKSB7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVycm9yJyk7XHJcbiAgICAvKiBwYXJhIGNyZWFyIHVuIGFycmF5IGRlc2RlIGVsIE5vZGVMaXN0ICovXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VzQXJyYXkgPSBbLi4uZXJyb3JNZXNzYWdlc107XHJcbiAgICBjb25zdCBpdGVyYXRvciA9IGVycm9yTWVzc2FnZXNBcnJheS5lbnRyaWVzKCk7XHJcbiAgICBlcnJvck1lc3NhZ2VzQXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAvKiAgIGNvbnNvbGUubG9nKGluZGV4WzBdKTtcclxuICAgICAgICAgY29uc29sZS5sb2coaW5kZXhbMV0pOyAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICB4LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH07IiwiaW1wb3J0IHtQbGF5ZXJ9IGZyb20gJy4vcGxheWVyJztcclxuaW1wb3J0IHsgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuXHJcbmZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKFxyXG4gICAgICAgIHBsYXllclJlYWwgPSBcIkhVTUFOIFBsYXllclwiLFxyXG4gICAgICAgIHBsYXllckNvbXB1dGVyID0gXCJDT01QVVRFUiBQbGF5ZXJcIixcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZSxcclxuICAgICAgICBtZXNzYWdlID0gJycgKXtcclxuICAgIFxyXG4gICAgICAgIGxldCBwbGF5ZXJzID0gW1xyXG4gICAgICAgICAgICAgICAgbmV3IFBsYXllcihwbGF5ZXJSZWFsKVxyXG4gICAgICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICAgICAgbmV3IFBsYXllcihwbGF5ZXJDb21wdXRlcilcclxuICAgICAgICAgICAgICBdO1xyXG5cclxuICAgICAgICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyc1swXTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3dpdGNoUGxheWVyVHVybiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAod2lubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogdGhlIHBsYXllciBkb2VzbnQgY2hhbmdlICovXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXI7ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAvKiBzd2l0Y2ggcGxheWVyKi9cclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVQbGF5ZXIgPSBhY3RpdmVQbGF5ZXIgPT09IHBsYXllcnNbMF0gPyBwbGF5ZXJzWzFdIDogcGxheWVyc1swXTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9OyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfTtcclxuICAgICAgICAgICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGJvYXJkUmVhbCA9ICgpID0+IHBsYXllcnNbMF1bJ2dhbWVib2FyZCddWydib2FyZCddO1xyXG4gICAgICAgICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSAoKSA9PiBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuXHJcbiAgICAgICAgICAgY29uc3QgZ2V0Q29tcHV0ZXJQbGF5ZXIgPSAoKSA9PiBwbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgIGNvbnN0IGdldEh1bWFuUGxheWVyID0gKCkgPT4gcGxheWVyc1swXTtcclxuXHJcbiAgICAgICAgICAgY29uc3QgaXNUaGVyZUFXaW5uZXIgPSAoKSA9PiB3aW5uZXI7XHJcblxyXG4gICAgY29uc3QgcHJpbnROZXdSb3VuZCA9ICgpID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgICAgICBib2FyZFJlYWwoKTtcclxuICAgICAgICAgICAgYm9hcmRDb21wdXRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgIHN3aXRjaCAod2lubmVyKSB7XHJcbiAgICAgICAgICAgY2FzZSB0cnVlOiAgIFxyXG4gICAgICAgICAgICAgICBtZXNzYWdlID0gIGdldEFjdGl2ZVBsYXllcigpLnR5cGUgKyAnIFdPTic7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9ICcnOyAgICAgICAgICAgXHJcbiAgICAgICAgICAgfTsgXHJcbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7ICAgICAgICAgXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBnZXRHYW1lTWVzc2FnZSA9ICgpID0+IG1lc3NhZ2U7ICAgIFxyXG5cclxuICAgICAgY29uc3QgY2hlY2tGb3JXaW5uZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoIHBsYXllcnNbMF1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiggcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ10uZ2V0VG90YWxTdW5rKCkgPT09IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddLmxlbmd0aCApe1xyXG4gICAgICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2lubmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXNldEdhbWUgPSAoKSA9PiB7IFxyXG4gICAgICAgIHdpbm5lciA9IGZhbHNlO1xyXG4gICAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcbiAgICAgICAgLyogdGhpcyByZXNldCBpcyBub3QgYmVlbiB1c2VkICovXHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwbGF5Um91bmQgPSAocm93LGNvbHVtbikgPT4ge1xyXG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xyXG4gICAgICAgIGlmICggd2lubmVyID09PSB0cnVlICl7IFxyXG4gICAgICAgICAgICByZXNldEdhbWUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGNvb3JkID0gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pO1xyXG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkID0gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ107XHJcbiAgICAgICAgICAgIGxldCBib2FyZCA9IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddWydib2FyZCddOyAgIFxyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXlSb3VuZENvbXB1dGVyID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZhbmRvIGp1ZWdvJyk7XHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgbGV0IGJvYXJkID0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107ICAgXHJcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNvcmRlZEF0dGFjayhjb29yZCk7XHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIGNoZWNrRm9yV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoUGxheWVyVHVybigpO1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICggYm9hcmQgKSA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtwbGF5Um91bmQscGxheVJvdW5kQ29tcHV0ZXIsIGdldEFjdGl2ZVBsYXllciwgXHJcbiAgICAgICAgZ2V0R2FtZU1lc3NhZ2UsIGJvYXJkUmVhbCwgYm9hcmRDb21wdXRlciwgcmVzZXRHYW1lLFxyXG4gICAgICAgICBnZXRDb21wdXRlclBsYXllciwgZ2V0SHVtYW5QbGF5ZXIsIGlzVGhlcmVBV2lubmVyfTtcclxufVxyXG5cclxuZXhwb3J0IHtnYW1lQ29udHJvbGxlcn07IiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gJy4vc2hpcCc7XHJcbmltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBjaGVja0Nvb3JkaW5hdGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuXHJcblxyXG4vLyBhIGNsYXNzIEdhbWVib2FyZFxyXG5jbGFzcyBHYW1lYm9hcmQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICBcclxuICAgICAgICB0aGlzLmJvYXJkID0gdGhpcy5nZXRCb2FyZChyb3dzLCBjb2x1bW5zKTtcclxuICAgICAgICB0aGlzLmFycmF5TWlzc2VkID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hcnJheUFsbEF0dGFjayA9IG5ldyBTZXQoW10pO1xyXG4gICAgICAgIHRoaXMuYWxsU2hpcHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCb2FyZCggcm93cywgY29sdW1ucywgYm9hcmQ9W10pe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkW2ldID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0ucHVzaCh0aGlzLmNlbGwoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjZWxsKCl7XHJcbiAgIFxyXG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XHJcbiAgICAgICBcclxuICAgICAgICByZXR1cm4ge3ZhbHVlfTsgIFxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZGF0YVNoaXBzKFt4LHldLGRpcmVjdGlvbixzaXplLHNoaXBOdW1iZXIpIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzID0gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLHNpemUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHNoaXBDb29yZGluYXRlcz09PW51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IG5vdEF2YWlsYWJsZSA9IHNoaXBDb29yZGluYXRlcy5tYXAoXHJcbiAgICAgICAgICAgICAgICAoeCkgPT4gdGhpcy5ib2FyZFtzaGlmdENvb3JkaW5hdGVzKHgpWzBdXVtzaGlmdENvb3JkaW5hdGVzKHgpWzFdXS52YWx1ZSA9PT0gMVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICAobm90QXZhaWxhYmxlLmluY2x1ZGVzKHRydWUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2hpcENvb3JkaW5hdGVzVG9TdHJpbmcgPSBzaGlwQ29vcmRpbmF0ZXMubWFwKCh4KSA9PiB4LnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBsZXQgb25lU2hpcCA9IHsgXHJcbiAgICAgICAgICAgICAgICAnc2hpcE51bWJlcic6c2hpcE51bWJlciwgXHJcbiAgICAgICAgICAgICAgICAnc2hpcERldGFpbHMnOiBuZXcgU2hpcChzaXplKSxcclxuICAgICAgICAgICAgICAgICdjb29yZGluYXRlcyc6IHNoaXBDb29yZGluYXRlc1RvU3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFsbFNoaXBzLnB1c2gob25lU2hpcCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbmVTaGlwO1xyXG4gICAgICAgIH0gICAgXHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VTaGlwc0luVGhlQm9hcmQoIG9uZVNoaXAgKXtcclxuICAgICAgICBsZXQgYXJyYXkgPSBvbmVTaGlwWydjb29yZGluYXRlcyddO1xyXG4gICAgICAgIGxldCByZXZlcnNlU3RyaW5nID0gYXJyYXkubWFwKCh4KT0+IHguc3BsaXQoJywnKSk7XHJcbiAgICAgICAgbGV0IGFycmF5SW5Cb2FyZCA9IHJldmVyc2VTdHJpbmcubWFwKCAodmFsdWVzKSA9PiBzaGlmdENvb3JkaW5hdGVzKHZhbHVlcykpO1xyXG4gICAgICAgIGFycmF5SW5Cb2FyZC5tYXAoKFt4LHldKSA9PiB0aGlzLmJvYXJkW3hdW3ldLnZhbHVlID0gMSApO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWNvcmRlZEF0dGFjayggW3gseV0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMT0odmFsdWUpPT50aGlzLnJlY29yZGVkQ29vcmQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMj0odmFsdWUpPT50aGlzLnJlY29yZGVkTWlzc2VkQ29vcmQodmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApeyAgICAgICAgICAgICBcclxuICAgICAgICBpZighY2hlY2tDb29yZGluYXRlcyhbeCx5XSkgfHwgdGhpcy5hcnJheUFsbEF0dGFjay5oYXMoW3gseS50b0xvd2VyQ2FzZSgpXS50b1N0cmluZygpKSApe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IFtib2FyZFgsYm9hcmRZXSA9IHNoaWZ0Q29vcmRpbmF0ZXMoW3gseV0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAwKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMShbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazIoW3gseV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSAyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCh0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9PT0gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrMShbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID0gNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcCgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IHRoaXMuYWxsU2hpcHMubGVuZ3RoOyArK2kpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmFsbFNoaXBzW2ldWydjb29yZGluYXRlcyddLmluY2x1ZGVzKFt4LHldLnRvU3RyaW5nKCkpPT09dHJ1ZSl7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAgPSB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXAuaGl0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxTaGlwc1tpXVsnc2hpcERldGFpbHMnXSA9IHNoaXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY29yZGVkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5QWxsQXR0YWNrKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG4gICAgIHJlY29yZGVkTWlzc2VkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5TWlzc2VkKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9IFxyXG5cclxuICAgIGdldFRvdGFsU3Vuaygpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0ICB0b3RhbFN1bmsgPSB0aGlzLmFsbFNoaXBzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbVsnc2hpcERldGFpbHMnXS5iZWVuU3Vuaz09PXRydWUgPyB0b3RhbCArIDEgOiB0b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VuaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U25hcHNob3QoKXtcclxuICAgICAgICBsZXQgdG90YWxTdW5rID0gdGhpcy5nZXRUb3RhbFN1bmsoKTtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG5cclxuICAgICAgICBpZih0b3RhbFN1bms9PT10aGlzLmFsbFNoaXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHJldHVybiBtZXNzYWdlID0gYEFsbCBzaGlwcyBoYXZlIGJlZW4gc3Vua2A7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiAgbWVzc2FnZSA9IGBTaGlwcyB0aGF0IGhhdmUgYmVlbiBzdW5rOiAke3RvdGFsU3Vua30gLSBTaGlwcyBhZmxvYXQ6ICR7dGhpcy5hbGxTaGlwcy5sZW5ndGgtdG90YWxTdW5rfWBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZUJvYXJkKCl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdLnZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICBcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQge0dhbWVib2FyZH07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XHJcbi8vIGEgY2xhc3MgUGxheWVyXHJcbmNsYXNzIFBsYXllciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodmFsdWUpeyBcclxuICAgICAgICB0aGlzLnR5cGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IHRoaXMuY3JlYXRlR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2FtZWJvYXJkKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHYW1lYm9hcmQoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7UGxheWVyfTsiLCJpbXBvcnQge2FsbENvb3JkaW5hdGVzUG9zaWJsZXN9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucycgO1xyXG5cclxuZnVuY3Rpb24gcmFuZG9tU2hpcHMoYXJnMSl7XHJcbiAgICAvKiBhcmcxIGlzIHRoZSBwbGF5ZXJHYW1lYm9hcmQgYXJnMiBpcyB0aGUgYXJyYXkgd2l0aCBsZW5ndGgqL1xyXG4gICBcclxuICAgY29uc3Qgc2hpcExlbmd0aD1bNSwzLDQsNiw0LDVdO1xyXG4gICBjb25zdCBhcnJheURpcmVjdGlvbiA9IFsnbGVmdC10by1yaWdodCcsJ3RvcC10by1kb3duJ107XHJcbiAgIGNvbnN0IHRvdGFsQ2VsbHMgPSBhbGxDb29yZGluYXRlc1Bvc2libGVzKCk7XHJcbiAgIFxyXG5cclxuICAgZm9yICggbGV0IGk9MDsgaSA8IHNoaXBMZW5ndGgubGVuZ3RoOyArK2kpe1xyXG4gICAgbGV0IHNoaXAgPSBudWxsOyBcclxuXHJcbiAgICB3aGlsZShzaGlwPT09bnVsbCl7XHJcbiAgICBsZXQgbnVtYmVyID0gcmFuZG9tSW50RnJvbUludGVydmFsKDEsdG90YWxDZWxscy5sZW5ndGgpO1xyXG4gICAgbGV0IGNvb3JkID0gIHRvdGFsQ2VsbHNbbnVtYmVyLTFdLnNwbGl0KCcsJyk7XHJcbiAgICBjb29yZCA9IFtOdW1iZXIoY29vcmRbMF0pLGNvb3JkWzFdXTtcclxuICAgIGxldCBkaXJlY3Rpb24gPSBhcnJheURpcmVjdGlvbltyYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSwyKS0xXTtcclxuICAgIHNoaXAgPSBhcmcxLmRhdGFTaGlwcyhjb29yZCxkaXJlY3Rpb24sc2hpcExlbmd0aFtpXSxpKzEpO1xyXG4gICAgfVxyXG4gICAgYXJnMS5wbGFjZVNoaXBzSW5UaGVCb2FyZCggc2hpcCApO1xyXG5cclxuICAgfVxyXG5cclxucmV0dXJuIGFyZzE7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21Db29yZGluYXRlcygpe1xyXG4gIGNvbnN0IHRvdGFsQ2VsbHMgPSBhbGxDb29yZGluYXRlc1Bvc2libGVzKCk7XHJcbiAgbGV0IG51bWJlciA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLHRvdGFsQ2VsbHMubGVuZ3RoKTtcclxuICAgIGxldCBjb29yZCA9ICB0b3RhbENlbGxzW251bWJlci0xXS5zcGxpdCgnLCcpO1xyXG4gICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSxjb29yZFsxXV07XHJcbiAgcmV0dXJuIGNvb3JkO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICB9XHJcblxyXG5leHBvcnQge3JhbmRvbVNoaXBzLCByYW5kb21Db29yZGluYXRlc307IiwiaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tICcuL2dhbWUtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIGZyb21Db29yZGluYXRlc3RvQ2VsbCwgYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRhaW5lcnMgfSBmcm9tICcuL2NyZWF0ZS1jb250YWluZXInO1xyXG5pbXBvcnQgeyBhZGRTaGlwcyB9IGZyb20gJy4vYWRkLXNoaXBzJztcclxuaW1wb3J0IHsgcmFuZG9tQ29vcmRpbmF0ZXMgfSBmcm9tICcuL3JhbmRvbS1zaGlwcyc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzIH0gZnJvbSAnLi91cGRhdGUnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQgfSBmcm9tICcuL3VwZGF0ZS1jb21wdXRlci1ib2FyZCc7XHJcbmltcG9ydCB7IHNob3dFcnJvciB9IGZyb20gJy4vc2hvdy1lcnJvcic7XHJcbmltcG9ydCB7IGRlbGV0ZUVycm9yTWVzc2FnZXMgfSBmcm9tICcuL2RlbGV0ZS1kaXYtZXJyb3InO1xyXG5pbXBvcnQgeyBhZGphY2VudCB9IGZyb20gJy4vYWRqYWNlbnQnO1xyXG5cclxuZnVuY3Rpb24gc2NyZWVuQ29udHJvbGxlcihhcmcpIHtcclxuICAgIC8qIGFyZyBpcyB0aGUgZ2FtZSBjb250YWluZXIgKi9cclxuXHJcbiAgICBjb25zdCBnYW1lID0gZ2FtZUNvbnRyb2xsZXIoKTtcclxuICAgIGNvbnN0IHRvdGFsQ2VsbHMgPSBhbGxDb29yZGluYXRlc1Bvc2libGVzKCk7ICAgLy8gZm9yIHRoZSBjb21wdXRlcidzIGF0dGFjayBwdXJwb3NlXHJcbiAgICBsZXQgYXJyYXlBZGphY2VudCA9IFtdOyAgICAgICAgLy8gZm9yIHRoZSBjb21wdXRlcidzIGF0dGFjayBwdXJwb3NlXHJcblxyXG4gICAgICAgIGNvbnN0IGdhbWVDb250YWluZXIgPSBhcmc7XHJcbiAgICAgICAgY29uc3QgdHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHR1cm5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB3YWl0VHVybiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgaHVtYW5Cb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgXHJcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcclxuICAgICAgICB0dXJuLmNsYXNzTGlzdC5hZGQoJ3R1cm4nKTtcclxuICAgICAgICB0dXJuRGl2LmNsYXNzTGlzdC5hZGQoJ3R1cm5EaXYnKTtcclxuICAgICAgICB3YWl0VHVybi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1jb2x1bW46NC81OycpO1xyXG4gICAgICAgIGJvYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XHJcbiAgICAgICAgcmVzdWx0LmNsYXNzTGlzdC5hZGQoJ3Jlc3VsdCcpO1xyXG4gICAgICAgIGh1bWFuQm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtaHVtYW4nKTtcclxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICByZXNldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80OyBncmlkLWNvbHVtbjoxLzInKTtcclxuICAgICAgICByZXNldEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZXNldEJ1dHRvbicpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gJ1JFU0VUIGZvciBORVcgR0FNRSc7XHJcblxyXG4gICAgY29uc3QgaW5pdGlhbFNjcmVlbiA9ICgpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAvLyBjbGVhciB0aGUgYm9hcmRcclxuICAgICAgICBib2FyZERpdi50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVBsYXllciA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aXZlUGxheWVyKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGdhbWUuZ2V0Q29tcHV0ZXJQbGF5ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJDb21wdXRlcik7XHJcblxyXG4gICAgICAgIC8vIERpc3BsYXkgcGxheWVyJ3MgdHVyblxyXG4gICAgICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBgJHthY3RpdmVQbGF5ZXIudHlwZX0ncyB0dXJuLi4uYDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgLy8gQW55dGhpbmcgY2xpY2thYmxlIHNob3VsZCBiZSBhIGJ1dHRvbiEhXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGh1bWFuQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgLy8gQW55dGhpbmcgY2xpY2thYmxlIHNob3VsZCBiZSBhIGJ1dHRvbiEhXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICAvLyBjcmVhdGUgYSBidXR0b24gZm9yIGFkZCBzaGlwcyBhbmQgZnVuY3Rpb25cclxuICAgICAgICBhZGRpbmdTaGlwcyh0dXJuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdGlhbFNjcmVlbigpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBuZXdlc3QgdmVyc2lvbiBvZiB0aGUgYm9hcmQgYW5kIHBsYXllciB0dXJuXHJcbiAgICAgICAgY29uc3QgYm9hcmRSZWFsID0gZ2FtZS5ib2FyZFJlYWwoKTtcclxuICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZ2FtZS5ib2FyZENvbXB1dGVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEh1bWFuUGxheWVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBnYW1lLmdldENvbXB1dGVyUGxheWVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxib2FyZFJlYWwscGxheWVySHVtYW4pO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLGJvYXJkQ29tcHV0ZXIscGxheWVyQ29tcHV0ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xyXG4gICAgICAgIC8vIERpc3BsYXkgcGxheWVyJ3MgdHVyblxyXG4gICAgICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBgJHthY3RpdmVQbGF5ZXIudHlwZX0ncyB0dXJuLi4uYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lLmlzVGhlcmVBV2lubmVyKCkpO1xyXG4gICAgICAgIC8vIGNoZWNrIGFuZCBhdHRhY2tzIGlzIHRoZXJlIG5vIHdpbm5lclxyXG4gICAgICAgIGxldCBpc1RoZXJlQVdpbm5lciA9IGdhbWUuaXNUaGVyZUFXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2goaXNUaGVyZUFXaW5uZXI9PT1mYWxzZSl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVQbGF5ZXIudHlwZT09PSdDT01QVVRFUiBQbGF5ZXInKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGREaXYoYm9hcmREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY29tcHV0ZXJBdHRhY2ssIDQwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgYWN0aXZlIHBsYXllciBpcyBIdW1hbiBuZWVkIHdhaXQgZm9yIGEgY2xpY2tcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBnYW1lIG92ZXIgLSBkaXNhYmxlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyQm9hcmQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIFxyXG4vLyBhZGQgYSBhZGQtc2hpcHMgQnV0dG9uIGFuZCB0aGUgZXZlbnRsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWRkaW5nU2hpcHModHVybixwbGF5ZXJDb21wdXRlcil7XHJcbiAgICBjb25zdCBhZGRTaGlwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcclxuICAgIGNvbnN0IGFkZFNoaXBzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZFNoaXBzRGl2LmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgYWRkU2hpcHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsJ2FkZFNoaXBzRGl2Jyk7XHJcbiAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRzaGlwcycpO1xyXG4gICAgYWRkU2hpcHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG4gICAgYWRkU2hpcHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBTSElQU1wiO1xyXG5cclxuICAgIGFkZFNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVycyh0dXJuKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGFkZFNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkU2hpcHMoZ2FtZSxodW1hbkJvYXJkLGJvYXJkRGl2LHR1cm4sY29tcHV0ZXJCb2FyZCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnYWRkc2hpcHMnKTtcclxuICAgICAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKGFkZFNoaXBzRGl2KTtcclxuICAgIGFkZFNoaXBzRGl2LmFwcGVuZENoaWxkKGFkZFNoaXBzQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgYm9hcmQgY29tcHV0ZXIgZm9yIEh1bWFuIGF0dGFja3NcclxuICAgICAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXJCb2FyZChlKSB7XHJcbiAgICAgICAgc3dpdGNoKGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkudHlwZT09PSdIVU1BTiBQbGF5ZXInKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRSb3cgPSBlLnRhcmdldC5kYXRhc2V0LnJvdztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsYSBmaWxhIGVzJyxzZWxlY3RlZFJvdyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xhIGNvbHVtbmEgZXMnLHNlbGVjdGVkQ29sdW1uKTtcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gY2xpY2sgdGhlIGJvYXJkIGNvbXB1dGVyIHRoZSBwbGF5ZXIgaXMgcGxheWVySHVtYW5cclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBJJ3ZlIGNsaWNrZWQgYSBjb2x1bW4gYW5kIG5vdCB0aGUgZ2FwcyBpbiBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkUm93KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXlSb3VuZChOdW1iZXIoc2VsZWN0ZWRSb3cpLE51bWJlcihzZWxlY3RlZENvbHVtbikpO1xyXG4gICAgICAgICAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3Iod2FpdFR1cm4sJ3dhaXQgeW91ciB0dXJuJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcyw4MDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGEgbWVzc2FnZSB0byBhdm9pZCBjbGljayBpbiBodW1hbiBib2FyZFxyXG4gICAgICAgIGZ1bmN0aW9uIG5vRmlyZVRvRnJpZW5kKGUpe1xyXG4gICAgICAgICAgICBzaG93RXJyb3Iod2FpdFR1cm4sJ0JFIENBUkVGVUwuIGRvblxcJ3Qgc2hvb3QgeW91ciBhbGxpZXMnLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGRlbGV0ZUVycm9yTWVzc2FnZXMsMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGh1bWFuQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG5vRmlyZVRvRnJpZW5kKTtcclxuXHJcbiAgICAgICAvLyB0aGlzIGF0dGFjaydzIGZ1bmN0aW9uIGNvbnNpZGVyIGFkamFjZW50cyB3aGVuIGdvdCBhIGhpdFxyXG4gICAgICAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soKXtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgIGxldCBhZGogPSAwO1xyXG4gICAgICAgIGxldCBjb29yZCA9IFtdO1xyXG4gICAgICAgIGxldCBhcnJheUFsbEF0dGFjayA9IGdhbWUuZ2V0SHVtYW5QbGF5ZXIoKS5nYW1lYm9hcmRbJ2FycmF5QWxsQXR0YWNrJ107XHJcbiAgICAgICAgd2hpbGUgKCBjaGVjayA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGlmKCBhcnJheUFkamFjZW50Lmxlbmd0aCE9PTAgKXtcclxuICAgICAgICAgICAgICAgIGFkaiA9IGFycmF5QWRqYWNlbnQuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gdG90YWxDZWxscy5hdChhZGopLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IFtOdW1iZXIoY29vcmRbMF0pLGNvb3JkWzFdXTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IHJhbmRvbUNvb3JkaW5hdGVzKCk7XHJcbiAgICAgICAgICAgICAgICBhZGogPSB0b3RhbENlbGxzLmluZGV4T2YoY29vcmQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hlY2sgPSBhcnJheUFsbEF0dGFjay5oYXMoY29vcmQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjZWxsID0gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKTtcclxuICAgICAgICBnYW1lLnBsYXlSb3VuZENvbXB1dGVyKGNlbGxbMF0sY2VsbFsxXSk7XHJcbiAgICAgICAgLy8gaWYgZ290IGEgaGl0IGxvb2sgZm9yIGFkamFjZW50c1xyXG4gICAgICAgIGxldCBib2FyZFJlYWwgPSBnYW1lLmJvYXJkUmVhbCgpO1xyXG4gICAgICAgIGlmKGJvYXJkUmVhbFtjZWxsWzBdXVtjZWxsWzFdXS52YWx1ZT09PTUpe1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlUZW1wID0gYWRqYWNlbnQuZ2V0KGFkaik7XHJcbiAgICAgICAgICAgIGFycmF5VGVtcC5tYXAoKHgpID0+IGFycmF5QWRqYWNlbnQucHVzaCh4KSk7XHJcbiAgICAgICAgICAgIGlmKGFycmF5QWRqYWNlbnQ9PT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlBZGphY2VudD1bXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgIHVwZGF0ZVNjcmVlbigpOyAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBFc3RhIGVzIGxhIGZ1bmNpb24gZGUgYXRhcXVlIGRlIGNvbXB1dGFkb3JhIHVuaWNhbWVudGUgYWxlYXRvcmlvXHJcbiAgICAgICAgLypcclxuICAgICAgICAgZnVuY3Rpb24gY29tcHV0ZXJBdHRhY2soKXtcclxuICAgICAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGNvb3JkID0gW107XHJcbiAgICAgICAgICAgIGxldCBhcnJheUFsbEF0dGFjayA9IGdhbWUuZ2V0SHVtYW5QbGF5ZXIoKS5nYW1lYm9hcmRbJ2FycmF5QWxsQXR0YWNrJ107XHJcbiAgICAgICAgICAgIHdoaWxlICggY2hlY2sgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSByYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBhcnJheUFsbEF0dGFjay5oYXMoY29vcmQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNlbGwgPSBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpO1xyXG4gICAgICAgICAgICBnYW1lLnBsYXlSb3VuZENvbXB1dGVyKGNlbGxbMF0sY2VsbFsxXSk7XHJcbiAgICAgICAgICAgIGdldE1lc3NhZ2UoYWN0aXZlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVNjcmVlbigpOyAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgKi9cclxuXHJcblxyXG4gICAgICAgIC8vIGFkZCBhIHJlc3VsdCBnYW1lXHJcbiAgICAgICAgY29uc3QgcmVzdWx0R2FtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmVzdWx0R2FtZURpdi5jbGFzc0xpc3QuYWRkKCdyZXN1bHRNZXNzYWdlJyk7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlTWVzc2FnZSA9IGdhbWUuZ2V0R2FtZU1lc3NhZ2UoKTtcclxuICAgICAgICAgY29uc3QgZ2V0TWVzc2FnZSA9IChhY3RpdmVNZXNzYWdlKSA9PiB7IFxyXG4gICAgICAgICAgICBhY3RpdmVNZXNzYWdlID0gZ2FtZS5nZXRHYW1lTWVzc2FnZSgpO1xyXG4gICAgICAgICAgICByZXN1bHRHYW1lRGl2LnRleHRDb250ZW50ID0gYWN0aXZlTWVzc2FnZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlc3VsdC5hcHBlbmRDaGlsZChyZXN1bHRHYW1lRGl2KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGEgZGl2IHdpdGggY291bnQgZG93biBmb3IgY29tcHV0ZXIgYXR0YWNrIGFuZCByZW1vdmUgaXQgXHJcbiAgICAgICAgZnVuY3Rpb24gYWRkRGl2KGFyZyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dGFja01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2lkJywnYXR0YWNrTWVzc2FnZScpO1xyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMS8yOyBncmlkLWNvbHVtbjogMi8zOyBkaXNwbGF5OmZsZXg7IGZsZXgtd3JhcDpub3dyYXA7Jyk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCd0ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmxpZ2h0eWVsbG93OycpO1xyXG4gICAgICAgICAgICB0ZXh0LmlubmVyVGV4dCA9ICdUaGUgY29tcHV0ZXIgd2lsbCBhdHRhY2sgb24gJy50b1VwcGVyQ2FzZSgpOyBcclxuICAgICAgICAgICAgbGV0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoJ2lkJywnY291bnQnKTtcclxuICAgICAgICAgICAgdGV4dDEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2ZvbnQtc2l6ZToxLjFyZW07IGNvbG9yOnJlZDsnKTtcclxuICAgICAgICAgICAgbGV0IG51bWJlciA9IDQ7IFxyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLmFwcGVuZENoaWxkKHRleHQxKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwoY291bnQsIDEwMDApO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudCgpe1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyLTE7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKS5pbm5lclRleHQgPSBgID0+ICR7bnVtYmVyfWA7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpLmlubmVyVGV4dCA9IFwiRE9ORVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlRGl2LDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGFyZy5hcHBlbmRDaGlsZChhdHRhY2tNZXNzYWdlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgY291bnQgZG93biBtZXNzYWdlIGRpdlxyXG4gICAgICAgICBmdW5jdGlvbiByZW1vdmVEaXYoKXtcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja01lc3NhZ2UnKTtcclxuICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciByZXNldFxyXG4gICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbmV3RG9jKTtcclxuXHJcbiAgICAgICAgIGZ1bmN0aW9uIG5ld0RvYygpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodHVybik7XHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkRGl2KTsgXHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQodHVybkRpdik7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHdhaXRUdXJuKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGh1bWFuQm9hcmQpO1xyXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZCk7XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQge3NjcmVlbkNvbnRyb2xsZXJ9IiwiLy8gYSBjbGFzcyBTaGlwIFxyXG5jbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgICBcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbHVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gMDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gZmFsc2U7IFxyXG4gICAgICB9XHJcblxyXG4gICAgICBoaXQoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSBoaXRzICsgMSA7XHJcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRoaXMuaXNTdW5rKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZIaXRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpc1N1bmsoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgc3dpdGNoKGhpdHM9PT10aGlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVlblN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7U2hpcH07XHJcbiIsImZ1bmN0aW9uIHNob3dFcnJvcihhcmcxLGFyZzIpe1xyXG4vLyBhcmcxIGlzIHRoZSBkaXYgLSBhcmcyIGlzIHRoZSBtZXNzYWdlIGZvciB0aGUgdHlwZSBvZiBlcnJvclxyXG4gICAgICBsZXQgaWQgPSBhcmcxLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgaW5wdXRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLGAke2lkfWVycm9yYCk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGl2ZScsJ3BvbGl0ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci50ZXh0Q29udGVudCA9IGFyZzI7XHJcbiAgICBcclxuICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBhcmcxLnBhcmVudE5vZGU7XHJcbiAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RXJyb3IpOyAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBzaG93RXJyb3IgfTsiLCJpbXBvcnQgeyByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChhcmcxLGFyZzIsYXJnMyl7XHJcbiAgIFxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKSBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgXHJcbiAgICAgLyogICAgeC50ZXh0Q29udGVudCA9IGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZTsgKi9cclxuICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MSl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICcnOyBcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0wKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSAnJzsgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsTWlzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYHdhdGVyYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxIaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVGA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbmxldCBhcnJheVNoaXBzID0gW107XHJcbiAgICBpZihhcmczICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFycmF5U2hpcHMgPSBhcmczWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXTtcclxuICAgIH1cclxuXHJcbmxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xyXG5cclxuYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZWxlbWVudFsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBlbGVtZW50Wydjb29yZGluYXRlcyddLmZvckVhY2goICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcbmNvbnNvbGUubG9nKGNvb3JkU2hpcHNTdW5rKTtcclxuXHJcbmxldCBhcnJheUluZGV4Tm9kZUFuZENvb3JkID0gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKTtcclxubGV0IGluZGV4ZXNTdW5rcyA9IFtdO1xyXG5jb29yZFNoaXBzU3Vuay5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgYXJyYXlJbmRleE5vZGVBbmRDb29yZC5mb3JFYWNoKCh4KT0+e1xyXG4gICAgICAgIGlmKHhbMV1bMF09PT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaW5kZXhlc1N1bmtzLnB1c2goeFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmluZGV4ZXNTdW5rcy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICBsZXQgY2VsbCA9IGNlbGxzaW5Cb2FyZFtlbGVtZW50XTtcclxuICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsU3VuaycpO1xyXG4gICBjZWxsLnRleHRDb250ZW50ID0gJ1NVTksnO1xyXG59KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVpbml0aWFsaXplRm9ybWF0Q2VsbHNDb21wQm9hcmQoYXJnKXtcclxuLyogYXJnIGlzIHRoZSBkaXYgd2l0aCB0aGUgYnV0dG9uIGNlbGxzICovXHJcbmxldCBib2FyZERpdiA9IGFyZztcclxubGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5jb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XHJcbmNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuXHJcbmNlbGxzaW5Cb2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gIHguY2xhc3NOYW1lID0gJyc7ICAgICAgIC8vIHRvIGNsZWFyIHByZXZpb3VzIGNsYXNzXHJcbiAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG59KVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7dXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZH07IiwiaW1wb3J0IHsgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfSBmcm9tIFwiLi9hdXhpbGlhcnktZnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDZWxscyhhcmcxLGFyZzIsYXJnMyl7XHJcblxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgICAgIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICBcclxuICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MSl7ICAgLy8gRUwgRVJST1IgQUwgVEVSTUlOQVIgRUwgSlVFR08gTE8gREEgRU4gRVNUQSBMSU5FQSBhcnJheSBmb3IgZWFjaFxyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxTaGlwQWRkZWQnKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgU0hJUGA7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsTWlzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYHdhdGVyYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxIaXQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVGA7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgYXJyYXlTaGlwcyA9IFtdO1xyXG4gICAgaWYoYXJnMyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBhcnJheVNoaXBzID0gYXJnM1snZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ107XHJcbiAgICB9XHJcblxyXG5sZXQgY29vcmRTaGlwc1N1bmsgPSBbXTtcclxuXHJcbmFycmF5U2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgc3dpdGNoKGVsZW1lbnRbJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ10pe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgZWxlbWVudFsnY29vcmRpbmF0ZXMnXS5mb3JFYWNoKCAoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29vcmRTaGlwc1N1bmsucHVzaCh4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGV0IGFycmF5SW5kZXhOb2RlQW5kQ29vcmQgPSByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpO1xyXG5sZXQgaW5kZXhlc1N1bmtzID0gW107XHJcbmNvb3JkU2hpcHNTdW5rLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICBhcnJheUluZGV4Tm9kZUFuZENvb3JkLmZvckVhY2goKHgpPT57XHJcbiAgICAgICAgaWYoeFsxXVswXT09PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICBpbmRleGVzU3Vua3MucHVzaCh4WzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuaW5kZXhlc1N1bmtzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgIGNvbnNvbGUubG9nKGNlbGxzaW5Cb2FyZFtlbGVtZW50XSk7XHJcbiAgIGxldCBjZWxsID0gY2VsbHNpbkJvYXJkW2VsZW1lbnRdO1xyXG4gICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGxTdW5rJyk7XHJcbiAgIGNlbGwudGV4dENvbnRlbnQgPSAnU1VOSyc7XHJcbn0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZWluaXRpYWxpemVGb3JtYXRDZWxscyhhcmcpe1xyXG4gLyogYXJnIGlzIHRoZSBkaXYgd2l0aCB0aGUgYnV0dG9uIGNlbGxzICovXHJcbiBsZXQgYm9hcmREaXYgPSBhcmc7XHJcbiBsZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcbiBjb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XHJcbiBjb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcbiBcclxuIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gICB4LmNsYXNzTmFtZSA9ICcnOyAgICAgICAvLyB0byBjbGVhciBwcmV2aW91cyBjbGFzc1xyXG4gICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gfSlcclxufSBcclxuXHJcblxyXG5leHBvcnQge3VwZGF0ZUNlbGxzLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
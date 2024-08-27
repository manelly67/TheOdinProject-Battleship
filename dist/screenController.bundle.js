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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/screen-controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNuQixRQUFRLG9EQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRLDJEQUFVO0FBQ2xCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CLFFBQVEsMERBQVc7QUFDbkIsUUFBUSxnRkFBd0I7QUFDaEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDclJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsS0FBSztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsaUJBQWlCLDZFQUE2RTtBQUM5RjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR2dFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsNkJBQTZCLDZFQUF1QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hZGQtc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYWRqYWNlbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYXV4aWxpYXJ5LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGUtY29udGFpbmVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2RlbGV0ZS1kaXYtZXJyb3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvcmFuZG9tLXNoaXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3Njb3JlLWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NjcmVlbi1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2hvdy1lcnJvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUtY29tcHV0ZXItYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLXNjb3JlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeX0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHN9IGZyb20gJy4vdXBkYXRlJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkIH0gZnJvbSAnLi91cGRhdGUtY29tcHV0ZXItYm9hcmQnO1xyXG5pbXBvcnQgeyBzaG93RXJyb3IgfSBmcm9tICcuL3Nob3ctZXJyb3InO1xyXG5pbXBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH0gZnJvbSAnLi9kZWxldGUtZGl2LWVycm9yJztcclxuaW1wb3J0IHsgcmFuZG9tU2hpcHMgfSBmcm9tICcuL3JhbmRvbS1zaGlwcyc7XHJcbmltcG9ydCB7IHNjb3JlQm9hcmQgfSBmcm9tICcuL3Njb3JlLWJvYXJkLmpzJztcclxuXHJcbmZ1bmN0aW9uIGFkZFNoaXBzKGFyZzEsYXJnMixhcmczLGFyZzQsYXJnNSxhcmc2KXtcclxuICAgIC8qIGFyZyBpcyB0aGUgZ2FtZSAgYXJnMiBpcyB0aGUgZGl2IHdpdGggdGhlIGh1bWFuYm9hcmQgIFxyXG4gICAgYXJnMyB0byBzaG93IHRoZSBvcHRpb25zIGFyZzQgdG8gc2hvdyByYW5kb20gYnV0dG9uXHJcbiAgICBhcmc1IGlzIHRoZSBkaXYgd2l0aCB0aGUgY29tcHV0ZXJib2FyZCBhcmc2IGlzIHRoZSBjb250ZW50IGNvbXB1dGVyIGJvYXJkKi9cclxuY29uc3QgZ2FtZSA9IGFyZzE7XHJcbmNvbnN0IGh1bWFuQm9hcmQgPSBhcmcyO1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0QWN0aXZlUGxheWVyKCk7XHJcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmc1O1xyXG5jb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzY7XHJcblxyXG4vLyBoZWFkZXJzIGZvciB0aGUgcm93cyBhbmQgY29sdW1ucyBvZiB0aGUgaHVtYW4gcGxheWVyIGJvYXJkXHJcbmNvbnN0IGRpdkNvbHVtbnNIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdkNvbHVtbnNIZWFkLmNsYXNzTGlzdC5hZGQoJ2NvbHVtbnNIZWFkJyk7XHJcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICBjb25zdCBjZWxsSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2VsbEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRDZWxsXCIpO1xyXG4gIGNlbGxIZWFkLnRleHRDb250ZW50ID0gYWxmX3lbal0udG9VcHBlckNhc2UoKTtcclxuICBkaXZDb2x1bW5zSGVhZC5hcHBlbmRDaGlsZChjZWxsSGVhZCk7XHJcbiAgfVxyXG5hcmcyLmFwcGVuZENoaWxkKGRpdkNvbHVtbnNIZWFkKTtcclxuXHJcbmNvbnN0IGRpdlJvd3NIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdlJvd3NIZWFkLmNsYXNzTGlzdC5hZGQoJ3Jvd3NIZWFkJyk7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICBjb25zdCBjZWxsSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2VsbEhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRDZWxsXCIpO1xyXG4gIGNlbGxIZWFkLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6Ny4yNSU7Jyk7XHJcbiAgY2VsbEhlYWQudGV4dENvbnRlbnQgPSBpKzE7XHJcbiAgZGl2Um93c0hlYWQuYXBwZW5kQ2hpbGQoY2VsbEhlYWQpO1xyXG4gIH1cclxuYXJnMi5hcHBlbmRDaGlsZChkaXZSb3dzSGVhZCk7XHJcblxyXG4vLyBkaXYgZm9yIGFkZCB0aGUgc2hpcHMgaW4gdGhlIGJvYXJkXHJcbmNvbnN0IGdyaWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JpZEZvckFkZCcpO1xyXG5ncmlkLmNsYXNzTGlzdC5hZGQoJ2dyaWRGb3JBZGQnKTtcclxuY29uc3QgZGl2Rm9yRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGl2Rm9yRXJyb3Iuc2V0QXR0cmlidXRlKCdpZCcsJ2RpdkZvckVycm9yJyk7XHJcbmRpdkZvckVycm9yLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMSAvIDI7IGdyaWQtY29sdW1uOiA0IC8gNTsnKTtcclxuXHJcbmNvbnN0IHNoaXBMZW5ndGg9WzUsMyw0LDYsNCw1XTtcclxuICAgICAgICBcclxuZm9yKGxldCBpPTE7IGk8PXNoaXBMZW5ndGgubGVuZ3RoOyArK2kpe1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsYGZvcm0ke2l9YCk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm1JbnB1dCcpO1xyXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XHJcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsYHN1Ym1pdCR7aX1gKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9IGBBREQgTsKwICR7aX1gO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdEJ1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywndGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsnKTtcclxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpncmVlbjsgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTsgZm9udC13ZWlnaHQ6IDkwMDsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0OycpO1xyXG4gICAgdGV4dC5pbm5lclRleHQgPSBgJHtzaGlwTGVuZ3RoW2ktMV19IHNxdWFyZXMgbG9uZ2l0dWRlYDtcclxuICAgXHJcblxyXG4gICAgY29uc3QgcmFkaW9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJhZGlvRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm1SYWRpbycpO1xyXG4gICAgY29uc3QgZGlyZWN0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9ySG9yaXpvbnRhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCBob3Jpem9udGFsbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JWZXJ0aWNhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjb25zdCB2ZXJ0aWNhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGRpcmVjdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC1zaXplOiAxMnB4Jyk7XHJcbiAgICBsYWJlbEZvckhvcml6b250YWwuaW5uZXJUZXh0ID0gJ2xlZnQtdG8tcmlnaHQnO1xyXG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLnNldEF0dHJpYnV0ZSgnZm9yJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgbGFiZWxGb3JWZXJ0aWNhbC5pbm5lclRleHQgPSAndG9wLXRvLWRvd24nO1xyXG4gICAgbGFiZWxGb3JWZXJ0aWNhbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RvcC10by1kb3duJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ2lkJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2RpcmVjdGlvbicpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCdsZWZ0LXRvLXJpZ2h0Jyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgnaWQnLCd0b3AtdG8tZG93bicpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywndG9wLXRvLWRvd24nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCduYW1lJywnZGlyZWN0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgY29vcmRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvb3JkUm93LmlubmVyVGV4dCA9ICdST1c6ICc7XHJcbiAgICBjb25zdCBjb29yZENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29vcmRDb2x1bW4uaW5uZXJUZXh0ID0gJ0NPTFVNTjogJztcclxuXHJcbiAgICBmb3IobGV0IGk9MDsgaTxyb3dzOyArK2kpe1xyXG4gICAgICAgIGNvbnN0IHJvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcm93TGFiZWwuaW5uZXJUZXh0ID0gaSsxO1xyXG4gICAgICAgIHJvd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgcm93JHtpKzF9YCk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ2lkJyxgcm93JHtpKzF9YCk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCduYW1lJywncm93U2VsZWN0ZWQnKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxpKzEpO1xyXG5cclxuICAgICAgICBjb29yZFJvdy5hcHBlbmRDaGlsZChyb3dMYWJlbCk7XHJcbiAgICAgICAgY29vcmRSb3cuYXBwZW5kQ2hpbGQoaW5wdXRSb3cpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBmb3IobGV0IGo9MDsgajxjb2x1bW5zOyArK2ope1xyXG4gICAgICAgIGNvbnN0IGNvbHVtbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBpbnB1dENvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29sdW1uTGFiZWwuaW5uZXJUZXh0ID0gYWxmX3lbal0udG9VcHBlckNhc2UoKTtcclxuICAgICAgICBjb2x1bW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYGNvbHVtbiR7YWxmX3lbal19YCk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgY29sdW1uJHthbGZfeVtqXX1gKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdjb2x1bW5TZWxlY3RlZCcpO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgndmFsdWUnLGFsZl95W2pdKTtcclxuXHJcbiAgICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoY29sdW1uTGFiZWwpO1xyXG4gICAgICAgIGNvb3JkQ29sdW1uLmFwcGVuZENoaWxkKGlucHV0Q29sdW1uKTtcclxuICAgIH1cclxuXHJcbiAgICBob3Jpem9udGFsbHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgdmVydGljYWxseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBsZXQgZGlyZWN0aW9uU2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIGRpcmVjdGlvblJhZGlvVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJkaXJlY3Rpb25cIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgZGlyZWN0aW9uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgIHNob3dFcnJvcihyYWRpb0RpdiwnbXVzdCBzZWxlY3QgZGlyZWN0aW9uJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvblNlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGxldCByb3dTZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gcm93UmFkaW9WYWx1ZSgpIHtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJyb3dTZWxlY3RlZFwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICByb3dTZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgcm93U2VsZWN0ZWQgPSAxO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gcm93U2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgbGV0IGNvbHVtblNlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiBjb2x1bW5SYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiY29sdW1uU2VsZWN0ZWRcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgIGNvbHVtblNlbGVjdGVkID0gJ2EnO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gY29sdW1uU2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc2l6ZSA9IHNoaXBMZW5ndGhbaS0xXTtcclxuXHJcbiAgICAgICAgbGV0IHNoaXBOdW1iZXIgPSBpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvblJhZGlvVmFsdWUoKTtcclxuXHJcbiAgICAgICAgbGV0IHJvd1NlbGVjdGVkID0gcm93UmFkaW9WYWx1ZSgpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGNvbHVtblNlbGVjdGVkID0gY29sdW1uUmFkaW9WYWx1ZSgpO1xyXG5cclxuICAgICAgICBsZXQgY29vcmQgPSBbTnVtYmVyKHJvd1NlbGVjdGVkKSxjb2x1bW5TZWxlY3RlZF07XHJcblxyXG4gICAgICAgIGxldCBzaGlwID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLmRhdGFTaGlwcyhjb29yZCxkaXJlY3Rpb24sc2l6ZSxzaGlwTnVtYmVyKTtcclxuICAgIFxyXG4gICAgICAgIGlmIChzaGlwIT09bnVsbCl7XHJcbiAgICAgICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgbGV0IG5ld0JvYXJkID0gcGxheWVySHVtYW5bJ2dhbWVib2FyZCddLnBsYWNlU2hpcHNJblRoZUJvYXJkKHNoaXApO1xyXG4gICAgICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLCBuZXdCb2FyZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFJlYWR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZvcm0ke2l9YCk7XHJcbiAgICAgICAgICAgIHN1Ym1pdFJlYWR5LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvcm1JbnB1dCcpLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsQWRkU2hpcHNEaXYoZ3JpZCxkaXZGb3JSYW5kb20sZGl2Q29sdW1uc0hlYWQsZGl2Um93c0hlYWQpO1xyXG4gICAgICAgICAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihjb21wdXRlckJvYXJkLHNoaXBMZW5ndGgscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc2NvcmVCb2FyZChhcmczLHBsYXllckh1bWFuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzaG93RXJyb3IoZGl2Rm9yRXJyb3IsJ1NFTEVDVCBBTk9USEVSIExPQ0FUSU9OJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgYXJnMy5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRGl2KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRSb3cpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRDb2x1bW4pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JIb3Jpem9udGFsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGhvcml6b250YWxseSk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvclZlcnRpY2FsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKHZlcnRpY2FsbHkpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGl2Rm9yUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZGb3JSYW5kb20uaW5uZXJUZXh0ID0gJ0NsaWNrIGhlcmUgZm9yIGEgcmFuZG9tIGZsZWV0IG9mIHNoaXBzJztcclxuICAgIGRpdkZvclJhbmRvbS5jbGFzc0xpc3QuYWRkKCdyYW5kb21zaGlwcycpO1xyXG4gICAgY29uc3QgYnV0dG9uUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25SYW5kb20uaW5uZXJUZXh0ID0gJ1JBTkRPTSBGTEVFVCc7XHJcbiAgICBidXR0b25SYW5kb20uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG5cclxuICAgIGJ1dHRvblJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVySHVtYW5bJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQscGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLGRpdkZvclJhbmRvbSxkaXZDb2x1bW5zSGVhZCxkaXZSb3dzSGVhZCk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihjb21wdXRlckJvYXJkLHNoaXBMZW5ndGgscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIHNjb3JlQm9hcmQoYXJnMyxwbGF5ZXJIdW1hbixwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvclJhbmRvbSk7XHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvckVycm9yKTtcclxuICAgIGRpdkZvclJhbmRvbS5hcHBlbmRDaGlsZChidXR0b25SYW5kb20pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQWRkU2hpcHNEaXYoYXJnMSxhcmcyLGFyZzMsYXJnNCl7XHJcbiAgICAvLyBhbGwgdGhlIGFyZ3VtZW50cyBhcmUgdGhlIGRpdnMgdG8gd2lsbCBiZSByZW1vdmVkXHJcbiAgICBhcmcxLnJlbW92ZSgpO1xyXG4gICAgYXJnMi5yZW1vdmUoKTtcclxuICAgIGFyZzMucmVtb3ZlKCk7XHJcbiAgICBhcmc0LnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzEsYXJnMixhcmczKXtcclxuICAgICAgLyogIGFyZzEgaXMgdGhlIGRpdiB0byB3cml0ZSB0aGUgaGVhZCAqL1xyXG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBhcmcxO1xyXG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBhcmcyO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnMztcclxuXHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jb21wdXRlcicpO1xyXG5cclxuICAgICAgICBjb25zdCBoZWFkQ29tcHV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkQ29tcHV0ZXIuaW5uZXJUZXh0ID0gJ3RoaXMgaXMgeW91ciBlbmVteSAnLnRvVXBwZXJDYXNlKCkrJyBDbGljayBUbyBBdHRhY2snO1xyXG4gICAgICAgIGhlYWRDb21wdXRlci5jbGFzc0xpc3QuYWRkKCdoZWFkQ29tcHV0ZXInKTtcclxuICAgICAgICBhcmcxLmFwcGVuZENoaWxkKGhlYWRDb21wdXRlcik7XHJcblxyXG4gICAgICAgIHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFNoaXBzfTsiLCJjb25zdCBhZGphY2VudCA9IG5ldyBNYXAoKTtcclxuXHJcbmFkamFjZW50LnNldCgwLFsxLDEyXSk7XHJcbmFkamFjZW50LnNldCgxLFswLDIsMTNdKTtcclxuYWRqYWNlbnQuc2V0KDIsWzEsMywxNF0pO1xyXG5hZGphY2VudC5zZXQoMyxbMiw0LDE1XSk7XHJcbmFkamFjZW50LnNldCg0LFszLDUsMTZdKTtcclxuYWRqYWNlbnQuc2V0KDUsWzQsNiwxN10pO1xyXG5hZGphY2VudC5zZXQoNixbNSw3LDE4XSk7XHJcbmFkamFjZW50LnNldCg3LFs2LDgsMTldKTtcclxuYWRqYWNlbnQuc2V0KDgsWzcsOSwyMF0pO1xyXG5hZGphY2VudC5zZXQoOSxbOCwxMCwyMV0pO1xyXG5hZGphY2VudC5zZXQoMTAsWzksMTEsMjJdKTtcclxuYWRqYWNlbnQuc2V0KDExLFsxMCwyM10pO1xyXG5hZGphY2VudC5zZXQoMTIsWzAsMTMsMjRdKTtcclxuYWRqYWNlbnQuc2V0KDEzLFsxLDEyLDE0LDI1XSk7XHJcbmFkamFjZW50LnNldCgxNCxbMiwxMywxNSwyNl0pO1xyXG5hZGphY2VudC5zZXQoMTUsWzMsMTQsMTYsMjddKTtcclxuYWRqYWNlbnQuc2V0KDE2LFs0LDE1LDE3LDI4XSk7XHJcbmFkamFjZW50LnNldCgxNyxbNSwxNiwxOCwyOV0pO1xyXG5hZGphY2VudC5zZXQoMTgsWzYsMTcsMTksMzBdKTtcclxuYWRqYWNlbnQuc2V0KDE5LFs3LDE4LDIwLDMxXSk7XHJcbmFkamFjZW50LnNldCgyMCxbOCwxOSwyMSwzMl0pO1xyXG5hZGphY2VudC5zZXQoMjEsWzksMjAsMjIsMzNdKTtcclxuYWRqYWNlbnQuc2V0KDIyLFsxMCwyMSwyMywzNF0pO1xyXG5hZGphY2VudC5zZXQoMjMsWzExLDIyLDM1XSk7XHJcbmFkamFjZW50LnNldCgyNCxbMTIsMjUsMzZdKTtcclxuYWRqYWNlbnQuc2V0KDI1LFsxMywyNCwyNiwzN10pO1xyXG5hZGphY2VudC5zZXQoMjYsWzE0LDI1LDI3LDM4XSk7XHJcbmFkamFjZW50LnNldCgyNyxbMTUsMjYsMjgsMzldKTtcclxuYWRqYWNlbnQuc2V0KDI4LFsxNiwyNywyOSw0MF0pO1xyXG5hZGphY2VudC5zZXQoMjksWzE3LDI4LDMwLDQxXSk7XHJcbmFkamFjZW50LnNldCgzMCxbMTgsMjksMzEsNDJdKTtcclxuYWRqYWNlbnQuc2V0KDMxLFsxOSwzMCwzMiw0M10pO1xyXG5hZGphY2VudC5zZXQoMzIsWzIwLDMxLDMzLDQ0XSk7XHJcbmFkamFjZW50LnNldCgzMyxbMjEsMzIsMzQsNDVdKTtcclxuYWRqYWNlbnQuc2V0KDM0LFsyMiwzMywzNSw0Nl0pO1xyXG5hZGphY2VudC5zZXQoMzUsWzIzLDM0LDQ3XSk7XHJcbmFkamFjZW50LnNldCgzNixbMjQsMzcsNDhdKTtcclxuYWRqYWNlbnQuc2V0KDM3LFsyNSwzNiwzOCw0OV0pO1xyXG5hZGphY2VudC5zZXQoMzgsWzI2LDM3LDM5LDUwXSk7XHJcbmFkamFjZW50LnNldCgzOSxbMjcsMzgsNDAsNTFdKTtcclxuYWRqYWNlbnQuc2V0KDQwLFsyOCwzOSw0MSw1Ml0pO1xyXG5hZGphY2VudC5zZXQoNDEsWzI5LDQwLDQyLDUzXSk7XHJcbmFkamFjZW50LnNldCg0MixbMzAsNDEsNDMsNTRdKTtcclxuYWRqYWNlbnQuc2V0KDQzLFszMSw0Miw0NCw1NV0pO1xyXG5hZGphY2VudC5zZXQoNDQsWzMyLDQzLDQ1LDU2XSk7XHJcbmFkamFjZW50LnNldCg0NSxbMzMsNDQsNDYsNTddKTtcclxuYWRqYWNlbnQuc2V0KDQ2LFszNCw0NSw0Nyw1OF0pO1xyXG5hZGphY2VudC5zZXQoNDcsWzM1LDQ2LDU5XSk7XHJcbmFkamFjZW50LnNldCg0OCxbMzYsNDksNjBdKTtcclxuYWRqYWNlbnQuc2V0KDQ5LFszNyw0OCw1MCw2MV0pO1xyXG5hZGphY2VudC5zZXQoNTAsWzM4LDQ5LDUxLDYyXSk7XHJcbmFkamFjZW50LnNldCg1MSxbMzksNTAsNTIsNjNdKTtcclxuYWRqYWNlbnQuc2V0KDUyLFs0MCw1MSw1Myw2NF0pO1xyXG5hZGphY2VudC5zZXQoNTMsWzQxLDUyLDU0LDY1XSk7XHJcbmFkamFjZW50LnNldCg1NCxbNDIsNTMsNTUsNjZdKTtcclxuYWRqYWNlbnQuc2V0KDU1LFs0Myw1NCw1Niw2N10pO1xyXG5hZGphY2VudC5zZXQoNTYsWzQ0LDU1LDU3LDY4XSk7XHJcbmFkamFjZW50LnNldCg1NyxbNDUsNTYsNTgsNjldKTtcclxuYWRqYWNlbnQuc2V0KDU4LFs0Niw1Nyw1OSw3MF0pO1xyXG5hZGphY2VudC5zZXQoNTksWzQ3LDU4LDcxXSk7XHJcbmFkamFjZW50LnNldCg2MCxbNDgsNjEsNzJdKTtcclxuYWRqYWNlbnQuc2V0KDYxLFs0OSw2MCw2Miw3M10pO1xyXG5hZGphY2VudC5zZXQoNjIsWzUwLDYxLDYzLDc0XSk7XHJcbmFkamFjZW50LnNldCg2MyxbNTEsNjIsNjQsNzVdKTtcclxuYWRqYWNlbnQuc2V0KDY0LFs1Miw2Myw2NSw3Nl0pO1xyXG5hZGphY2VudC5zZXQoNjUsWzUzLDY0LDY2LDc3XSk7XHJcbmFkamFjZW50LnNldCg2NixbNTQsNjUsNjcsNzhdKTtcclxuYWRqYWNlbnQuc2V0KDY3LFs1NSw2Niw2OCw3OV0pO1xyXG5hZGphY2VudC5zZXQoNjgsWzU2LDY3LDY5LDgwXSk7XHJcbmFkamFjZW50LnNldCg2OSxbNTcsNjgsNzAsODFdKTtcclxuYWRqYWNlbnQuc2V0KDcwLFs1OCw2OSw3MSw4Ml0pO1xyXG5hZGphY2VudC5zZXQoNzEsWzU5LDcwLDgzXSk7XHJcbmFkamFjZW50LnNldCg3MixbNjAsNzMsODRdKTtcclxuYWRqYWNlbnQuc2V0KDczLFs2MSw3Miw3NCw4NV0pO1xyXG5hZGphY2VudC5zZXQoNzQsWzYyLDczLDc1LDg2XSk7XHJcbmFkamFjZW50LnNldCg3NSxbNjMsNzQsNzYsODddKTtcclxuYWRqYWNlbnQuc2V0KDc2LFs2NCw3NSw3Nyw4OF0pO1xyXG5hZGphY2VudC5zZXQoNzcsWzY1LDc2LDc4LDg5XSk7XHJcbmFkamFjZW50LnNldCg3OCxbNjYsNzcsNzksOTBdKTtcclxuYWRqYWNlbnQuc2V0KDc5LFs2Nyw3OCw4MCw5MV0pO1xyXG5hZGphY2VudC5zZXQoODAsWzY4LDc5LDgxLDkyXSk7XHJcbmFkamFjZW50LnNldCg4MSxbNjksODAsODIsOTNdKTtcclxuYWRqYWNlbnQuc2V0KDgyLFs3MCw4MSw4Myw5NF0pO1xyXG5hZGphY2VudC5zZXQoODMsWzcxLDgyLDk1XSk7XHJcbmFkamFjZW50LnNldCg4NCxbNzIsODUsOTZdKTtcclxuYWRqYWNlbnQuc2V0KDg1LFs3Myw4NCw4Niw5N10pO1xyXG5hZGphY2VudC5zZXQoODYsWzc0LDg1LDg3LDk4XSk7XHJcbmFkamFjZW50LnNldCg4NyxbNzUsODYsODgsOTldKTtcclxuYWRqYWNlbnQuc2V0KDg4LFs3Niw4Nyw4OSwxMDBdKTtcclxuYWRqYWNlbnQuc2V0KDg5LFs3Nyw4OCw5MCwxMDFdKTtcclxuYWRqYWNlbnQuc2V0KDkwLFs3OCw4OSw5MSwxMDJdKTtcclxuYWRqYWNlbnQuc2V0KDkxLFs3OSw5MCw5MiwxMDNdKTtcclxuYWRqYWNlbnQuc2V0KDkyLFs4MCw5MSw5MywxMDRdKTtcclxuYWRqYWNlbnQuc2V0KDkzLFs4MSw5Miw5NCwxMDVdKTtcclxuYWRqYWNlbnQuc2V0KDk0LFs4Miw5Myw5NSwxMDZdKTtcclxuYWRqYWNlbnQuc2V0KDk1LFs4Myw5NCwxMDddKTtcclxuYWRqYWNlbnQuc2V0KDk2LFs4NCw5NywxMDhdKTtcclxuYWRqYWNlbnQuc2V0KDk3LFs4NSw5Niw5OCwxMDldKTtcclxuYWRqYWNlbnQuc2V0KDk4LFs4Niw5Nyw5OSwxMTBdKTtcclxuYWRqYWNlbnQuc2V0KDk5LFs4Nyw5OCwxMDAsMTExXSk7XHJcbmFkamFjZW50LnNldCgxMDAsWzg4LDk5LDEwMSwxMTJdKTtcclxuYWRqYWNlbnQuc2V0KDEwMSxbODksMTAwLDEwMiwxMTNdKTtcclxuYWRqYWNlbnQuc2V0KDEwMixbOTAsMTAxLDEwMywxMTRdKTtcclxuYWRqYWNlbnQuc2V0KDEwMyxbOTEsMTAyLDEwNCwxMTVdKTtcclxuYWRqYWNlbnQuc2V0KDEwNCxbOTIsMTAzLDEwNSwxMTZdKTtcclxuYWRqYWNlbnQuc2V0KDEwNSxbOTMsMTA0LDEwNiwxMTddKTtcclxuYWRqYWNlbnQuc2V0KDEwNixbOTQsMTA1LDEwNywxMThdKTtcclxuYWRqYWNlbnQuc2V0KDEwNyxbOTUsMTA2LDExOV0pO1xyXG5hZGphY2VudC5zZXQoMTA4LFs5NiwxMDksMTIwXSk7XHJcbmFkamFjZW50LnNldCgxMDksWzk3LDEwOCwxMTAsMTIxXSk7XHJcbmFkamFjZW50LnNldCgxMTAsWzk4LDEwOSwxMTEsMTIyXSk7XHJcbmFkamFjZW50LnNldCgxMTEsWzk5LDExMCwxMTIsMTIzXSk7XHJcbmFkamFjZW50LnNldCgxMTIsWzEwMCwxMTEsMTEzLDEyNF0pO1xyXG5hZGphY2VudC5zZXQoMTEzLFsxMDEsMTEyLDExNCwxMjVdKTtcclxuYWRqYWNlbnQuc2V0KDExNCxbMTAyLDExMywxMTUsMTI2XSk7XHJcbmFkamFjZW50LnNldCgxMTUsWzEwMywxMTQsMTE2LDEyN10pO1xyXG5hZGphY2VudC5zZXQoMTE2LFsxMDQsMTE1LDExNywxMjhdKTtcclxuYWRqYWNlbnQuc2V0KDExNyxbMTA1LDExNiwxMTgsMTI5XSk7XHJcbmFkamFjZW50LnNldCgxMTgsWzEwNiwxMTcsMTE5LDEzMF0pO1xyXG5hZGphY2VudC5zZXQoMTE5LFsxMDcsMTE4LDEzMV0pO1xyXG5hZGphY2VudC5zZXQoMTIwLFsxMDgsMTIxLDEzMl0pO1xyXG5hZGphY2VudC5zZXQoMTIxLFsxMDksMTIwLDEyMiwxMzNdKTtcclxuYWRqYWNlbnQuc2V0KDEyMixbMTEwLDEyMSwxMjMsMTM0XSk7XHJcbmFkamFjZW50LnNldCgxMjMsWzExMSwxMjIsMTI0LDEzNV0pO1xyXG5hZGphY2VudC5zZXQoMTI0LFsxMTIsMTIzLDEyNSwxMzZdKTtcclxuYWRqYWNlbnQuc2V0KDEyNSxbMTEzLDEyNCwxMjYsMTM3XSk7XHJcbmFkamFjZW50LnNldCgxMjYsWzExNCwxMjUsMTI3LDEzOF0pO1xyXG5hZGphY2VudC5zZXQoMTI3LFsxMTUsMTI2LDEyOCwxMzldKTtcclxuYWRqYWNlbnQuc2V0KDEyOCxbMTE2LDEyNywxMjksMTQwXSk7XHJcbmFkamFjZW50LnNldCgxMjksWzExNywxMjgsMTMwLDE0MV0pO1xyXG5hZGphY2VudC5zZXQoMTMwLFsxMTgsMTI5LDEzMSwxNDJdKTtcclxuYWRqYWNlbnQuc2V0KDEzMSxbMTE5LDEzMCwxNDNdKTtcclxuYWRqYWNlbnQuc2V0KDEzMixbMTIwLDEzMywxNDRdKTtcclxuYWRqYWNlbnQuc2V0KDEzMyxbMTIxLDEzMiwxMzQsMTQ1XSk7XHJcbmFkamFjZW50LnNldCgxMzQsWzEyMiwxMzMsMTM1LDE0Nl0pO1xyXG5hZGphY2VudC5zZXQoMTM1LFsxMjMsMTM0LDEzNiwxNDddKTtcclxuYWRqYWNlbnQuc2V0KDEzNixbMTI0LDEzNSwxMzcsMTQ4XSk7XHJcbmFkamFjZW50LnNldCgxMzcsWzEyNSwxMzYsMTM4LDE0OV0pO1xyXG5hZGphY2VudC5zZXQoMTM4LFsxMjYsMTM3LDEzOSwxNTBdKTtcclxuYWRqYWNlbnQuc2V0KDEzOSxbMTI3LDEzOCwxNDAsMTUxXSk7XHJcbmFkamFjZW50LnNldCgxNDAsWzEyOCwxMzksMTQxLDE1Ml0pO1xyXG5hZGphY2VudC5zZXQoMTQxLFsxMjksMTQwLDE0MiwxNTNdKTtcclxuYWRqYWNlbnQuc2V0KDE0MixbMTMwLDE0MSwxNDMsMTU0XSk7XHJcbmFkamFjZW50LnNldCgxNDMsWzEzMSwxNDIsMTU1XSk7XHJcbmFkamFjZW50LnNldCgxNDQsWzEzMiwxNDVdKTtcclxuYWRqYWNlbnQuc2V0KDE0NSxbMTMzLDE0NCwxNDZdKTtcclxuYWRqYWNlbnQuc2V0KDE0NixbMTM0LDE0NSwxNDddKTtcclxuYWRqYWNlbnQuc2V0KDE0NyxbMTM1LDE0NiwxNDhdKTtcclxuYWRqYWNlbnQuc2V0KDE0OCxbMTM2LDE0NywxNDldKTtcclxuYWRqYWNlbnQuc2V0KDE0OSxbMTM3LDE0OCwxNTBdKTtcclxuYWRqYWNlbnQuc2V0KDE1MCxbMTM4LDE0OSwxNTFdKTtcclxuYWRqYWNlbnQuc2V0KDE1MSxbMTM5LDE1MCwxNTJdKTtcclxuYWRqYWNlbnQuc2V0KDE1MixbMTQwLDE1MSwxNTNdKTtcclxuYWRqYWNlbnQuc2V0KDE1MyxbMTQxLDE1MiwxNTRdKTtcclxuYWRqYWNlbnQuc2V0KDE1NCxbMTQyLDE1MywxNTVdKTtcclxuYWRqYWNlbnQuc2V0KDE1NSxbMTQzLDE1NF0pO1xyXG5cclxuXHJcbmV4cG9ydCB7YWRqYWNlbnR9O1xyXG4iLCJjb25zdCByb3dzID0gMTM7XHJcbmNvbnN0IGNvbHVtbnMgPSAxMjtcclxuXHJcbmNvbnN0IGFsZl95ID0gW1xyXG4gICAgJ2EnLCdiJywnYycsJ2QnLCdlJywnZicsJ2cnLCdoJywnaScsJ2onLCdrJywnbCdcclxuICAgICBdO1xyXG5cclxuZnVuY3Rpb24gc2hpZnRDb29yZGluYXRlcyhbdmFsdWVfeCx2YWx1ZV95XSl7XHJcbiAgICAgICAvKiAgbGV0IFt4LHldID0gWzEsJ2EnXTsgICovXHJcbiAgICAgICAgc3dpdGNoKGFsZl95LmluY2x1ZGVzKHZhbHVlX3kudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhbGZfeS5pbmRleE9mKHZhbHVlX3kudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsgdmFsdWVfeC0xLCBpbmRleCBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkxvY2F0aW9uKFt4LHldLGRpcmVjdGlvbixrZXkpe1xyXG5sZXQgYXJyYXlPZkNvb3JkaW5hdGVzID0gW107XHJcbmxldCBpbml0aWFsWCA9IHg7XHJcbmxldCBpbml0aWFsWSA9IGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHN3aXRjaChkaXJlY3Rpb249PT0nbGVmdC10by1yaWdodCcpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICBpZihhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSkgKyBrZXkgPiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyB4LCBhbGZfeVtpbml0aWFsWSArIGldIF0pO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbj09PSd0b3AtdG8tZG93bicpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBpZihpbml0aWFsWCArIGtleS0xID4gcm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIGluaXRpYWxYICsgaSwgeSBdKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDb29yZGluYXRlcyhbeCx5XSl7XHJcbiAgICBpZih4ID4gMCAmJiB4IDw9IHJvd3MgJiYgYWxmX3kuaW5jbHVkZXMoeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pe1xyXG4gIC8qICAgbGV0IFt4LHldID0gWzEsJ2EnXTsgICAgICovXHJcbiAgICByZXR1cm4gWyByb3cgKyAxLCBhbGZfeVtjb2x1bW5dIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21Db29yZGluYXRlc3RvQ2VsbChjb29yZCl7XHJcbiAgIC8qICBsZXQgW3Jvdyxjb2x1bW5dID0gWzAsMF07ICovXHJcbiAgICBsZXQgcm93U2VsZWN0ZWQgPSBjb29yZFswXS0xO1xyXG4gICAgbGV0IGNvbHVtblNlbGVjdGVkID0gYWxmX3kuaW5kZXhPZihjb29yZFsxXS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICByZXR1cm4gW051bWJlcihyb3dTZWxlY3RlZCksIE51bWJlcihjb2x1bW5TZWxlY3RlZCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxDb29yZGluYXRlc1Bvc2libGVzKCkge1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChgJHtpKzF9LCR7YWxmX3lbal19YCk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpe1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBsZXQgbj0gLTE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgbiA9IG4gKyAxO1xyXG4gICAgICAgIGFycmF5LnB1c2goW24sW2Ake2krMX0sJHthbGZfeVtqXX1gXV0pO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZXhwb3J0IHsgcm93cywgY29sdW1ucywgYWxmX3ksIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBcclxuICAgIGNoZWNrQ29vcmRpbmF0ZXMsIGZyb21DZWxsdG9Db29yZGluYXRlcywgYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcyxcclxuICAgICAgICBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwsIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVycyhhcmcxKSB7XHJcbiAgICAvKiB0aGUgYXJnMSBpcyB0aGUgcGFyZW50IGNvbnRhaW5lciAgICovXHJcbiAgICBcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZEZvckFkZCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnZ3JpZEZvckFkZCcpO1xyXG4gICAgXHJcbiAgICAgICAgYXJnMS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWluZXJzIH07IiwiZnVuY3Rpb24gZGVsZXRlRXJyb3JNZXNzYWdlcygpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcclxuICAgIC8qIHBhcmEgY3JlYXIgdW4gYXJyYXkgZGVzZGUgZWwgTm9kZUxpc3QgKi9cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXNBcnJheSA9IFsuLi5lcnJvck1lc3NhZ2VzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gZXJyb3JNZXNzYWdlc0FycmF5LmVudHJpZXMoKTtcclxuICAgIGVycm9yTWVzc2FnZXNBcnJheS5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgLyogICBjb25zb2xlLmxvZyhpbmRleFswXSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4WzFdKTsgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgIC8qIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgeC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9OyIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IGZyb21DZWxsdG9Db29yZGluYXRlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcihcclxuICAgICAgICBwbGF5ZXJSZWFsID0gXCJIVU1BTiBQbGF5ZXJcIixcclxuICAgICAgICBwbGF5ZXJDb21wdXRlciA9IFwiQ09NUFVURVIgUGxheWVyXCIsXHJcbiAgICAgICAgd2lubmVyID0gZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZSA9ICcnICl7XHJcbiAgICBcclxuICAgICAgICBsZXQgcGxheWVycyA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyUmVhbClcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyQ29tcHV0ZXIpXHJcbiAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHRoZSBwbGF5ZXIgZG9lc250IGNoYW5nZSAqL1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogc3dpdGNoIHBsYXllciovXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07XHJcbiAgICAgICAgICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xyXG5cclxuICAgICAgICAgICBjb25zdCBib2FyZFJlYWwgPSAoKSA9PiBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuICAgICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gKCkgPT4gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGdldENvbXB1dGVyUGxheWVyID0gKCkgPT4gcGxheWVyc1sxXTtcclxuICAgICAgICAgICBjb25zdCBnZXRIdW1hblBsYXllciA9ICgpID0+IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGlzVGhlcmVBV2lubmVyID0gKCkgPT4gd2lubmVyO1xyXG5cclxuICAgIGNvbnN0IHByaW50TmV3Um91bmQgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgYm9hcmRSZWFsKCk7XHJcbiAgICAgICAgICAgIGJvYXJkQ29tcHV0ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgIGNhc2UgdHJ1ZTogICBcclxuICAgICAgICAgICAgICAgbWVzc2FnZSA9ICBnZXRBY3RpdmVQbGF5ZXIoKS50eXBlICsgJyBXT04nOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnJzsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07IFxyXG4gICAgICAvKiAgY29uc29sZS5sb2cobWVzc2FnZSk7ICAqLyAgIFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZ2V0R2FtZU1lc3NhZ2UgPSAoKSA9PiBtZXNzYWdlOyAgICBcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXS5nZXRUb3RhbFN1bmsoKSA9PT0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ10ubGVuZ3RoICl7XHJcbiAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIHBsYXllcnNbMV1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4geyBcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xyXG4gICAgICAgIC8qIHRoaXMgcmVzZXQgaXMgbm90IGJlZW4gdXNlZCAqL1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGxheVJvdW5kID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBpZiAoIHdpbm5lciA9PT0gdHJ1ZSApeyBcclxuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKTtcclxuICAgICAgICAgICAgbGV0IGdhbWVib2FyZCA9IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXlSb3VuZENvbXB1dGVyID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAvKiBjb25zb2xlLmxvZygnYWN0aXZhbmRvIGp1ZWdvJyk7ICovXHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCBib2FyZCApIDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3BsYXlSb3VuZCxwbGF5Um91bmRDb21wdXRlciwgZ2V0QWN0aXZlUGxheWVyLCBcclxuICAgICAgICBnZXRHYW1lTWVzc2FnZSwgYm9hcmRSZWFsLCBib2FyZENvbXB1dGVyLCByZXNldEdhbWUsXHJcbiAgICAgICAgIGdldENvbXB1dGVyUGxheWVyLCBnZXRIdW1hblBsYXllciwgaXNUaGVyZUFXaW5uZXJ9O1xyXG59XHJcblxyXG5leHBvcnQge2dhbWVDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIGNoZWNrQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5cclxuXHJcbi8vIGEgY2xhc3MgR2FtZWJvYXJkXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdldEJvYXJkKHJvd3MsIGNvbHVtbnMpO1xyXG4gICAgICAgIHRoaXMuYXJyYXlNaXNzZWQgPSBuZXcgU2V0KFtdKTtcclxuICAgICAgICB0aGlzLmFycmF5QWxsQXR0YWNrID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvYXJkKCByb3dzLCBjb2x1bW5zLCBib2FyZD1bXSl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKHRoaXMuY2VsbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbGwoKXtcclxuICAgXHJcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7dmFsdWV9OyAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBkYXRhU2hpcHMoW3gseV0sZGlyZWN0aW9uLHNpemUsc2hpcE51bWJlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sc2l6ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoc2hpcENvb3JkaW5hdGVzPT09bnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgbm90QXZhaWxhYmxlID0gc2hpcENvb3JkaW5hdGVzLm1hcChcclxuICAgICAgICAgICAgICAgICh4KSA9PiB0aGlzLmJvYXJkW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMF1dW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMV1dLnZhbHVlID09PSAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgIChub3RBdmFpbGFibGUuaW5jbHVkZXModHJ1ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXNUb1N0cmluZyA9IHNoaXBDb29yZGluYXRlcy5tYXAoKHgpID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGxldCBvbmVTaGlwID0geyBcclxuICAgICAgICAgICAgICAgICdzaGlwTnVtYmVyJzpzaGlwTnVtYmVyLCBcclxuICAgICAgICAgICAgICAgICdzaGlwRGV0YWlscyc6IG5ldyBTaGlwKHNpemUpLFxyXG4gICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogc2hpcENvb3JkaW5hdGVzVG9TdHJpbmdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaChvbmVTaGlwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9uZVNoaXA7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzSW5UaGVCb2FyZCggb25lU2hpcCApe1xyXG4gICAgICAgIGxldCBhcnJheSA9IG9uZVNoaXBbJ2Nvb3JkaW5hdGVzJ107XHJcbiAgICAgICAgbGV0IHJldmVyc2VTdHJpbmcgPSBhcnJheS5tYXAoKHgpPT4geC5zcGxpdCgnLCcpKTtcclxuICAgICAgICBsZXQgYXJyYXlJbkJvYXJkID0gcmV2ZXJzZVN0cmluZy5tYXAoICh2YWx1ZXMpID0+IHNoaWZ0Q29vcmRpbmF0ZXModmFsdWVzKSk7XHJcbiAgICAgICAgYXJyYXlJbkJvYXJkLm1hcCgoW3gseV0pID0+IHRoaXMuYm9hcmRbeF1beV0udmFsdWUgPSAxICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlY29yZGVkQXR0YWNrKCBbeCx5XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2syPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRNaXNzZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl7ICAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKCFjaGVja0Nvb3JkaW5hdGVzKFt4LHldKSB8fCB0aGlzLmFycmF5QWxsQXR0YWNrLmhhcyhbeCx5LnRvTG93ZXJDYXNlKCldLnRvU3RyaW5nKCkpICl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgW2JvYXJkWCxib2FyZFldID0gc2hpZnRDb29yZGluYXRlcyhbeCx5XSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMihbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgdGhpcy5hbGxTaGlwcy5sZW5ndGg7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYWxsU2hpcHNbaV1bJ2Nvb3JkaW5hdGVzJ10uaW5jbHVkZXMoW3gseV0udG9TdHJpbmcoKSk9PT10cnVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCA9IHRoaXMuYWxsU2hpcHNbaV1bJ3NoaXBEZXRhaWxzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddID0gc2hpcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY29yZGVkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5QWxsQXR0YWNrKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG4gICAgIHJlY29yZGVkTWlzc2VkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5TWlzc2VkKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9IFxyXG5cclxuICAgIGdldFRvdGFsU3Vuaygpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0ICB0b3RhbFN1bmsgPSB0aGlzLmFsbFNoaXBzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbVsnc2hpcERldGFpbHMnXS5iZWVuU3Vuaz09PXRydWUgPyB0b3RhbCArIDEgOiB0b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VuaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U25hcHNob3QoKXtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIGxldCB0b3RhbFN1bmsgPSB0aGlzLmdldFRvdGFsU3VuaygpO1xyXG5cclxuICAgICAgICBpZih0b3RhbFN1bms9PT10aGlzLmFsbFNoaXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rYDtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgU2hpcHMgdGhhdCBoYXZlIGJlZW4gc3VuazogJHt0b3RhbFN1bmt9IC0gU2hpcHMgYWZsb2F0OiAke3RoaXMuYWxsU2hpcHMubGVuZ3RoLXRvdGFsU3Vua31gO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVCb2FyZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtHYW1lYm9hcmR9OyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG4vLyBhIGNsYXNzIFBsYXllclxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgXHJcbiAgICAgICAgdGhpcy50eXBlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWVib2FyZCgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1BsYXllcn07IiwiaW1wb3J0IHthbGxDb29yZGluYXRlc1Bvc2libGVzfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnIDtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNoaXBzKGFyZzEpe1xyXG4gICAgLyogYXJnMSBpcyB0aGUgcGxheWVyR2FtZWJvYXJkIGFyZzIgaXMgdGhlIGFycmF5IHdpdGggbGVuZ3RoKi9cclxuICAgXHJcbiAgIGNvbnN0IHNoaXBMZW5ndGg9WzUsMyw0LDYsNCw1XTtcclxuICAgY29uc3QgYXJyYXlEaXJlY3Rpb24gPSBbJ2xlZnQtdG8tcmlnaHQnLCd0b3AtdG8tZG93biddO1xyXG4gICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xyXG4gICBcclxuXHJcbiAgIGZvciAoIGxldCBpPTA7IGkgPCBzaGlwTGVuZ3RoLmxlbmd0aDsgKytpKXtcclxuICAgIGxldCBzaGlwID0gbnVsbDsgXHJcblxyXG4gICAgd2hpbGUoc2hpcD09PW51bGwpe1xyXG4gICAgbGV0IG51bWJlciA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLHRvdGFsQ2VsbHMubGVuZ3RoKTtcclxuICAgIGxldCBjb29yZCA9ICB0b3RhbENlbGxzW251bWJlci0xXS5zcGxpdCgnLCcpO1xyXG4gICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSxjb29yZFsxXV07XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gYXJyYXlEaXJlY3Rpb25bcmFuZG9tSW50RnJvbUludGVydmFsKDEsMiktMV07XHJcbiAgICBzaGlwID0gYXJnMS5kYXRhU2hpcHMoY29vcmQsZGlyZWN0aW9uLHNoaXBMZW5ndGhbaV0saSsxKTtcclxuICAgIH1cclxuICAgIGFyZzEucGxhY2VTaGlwc0luVGhlQm9hcmQoIHNoaXAgKTtcclxuXHJcbiAgIH1cclxuXHJcbnJldHVybiBhcmcxO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZXMoKXtcclxuICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xyXG4gIGxldCBudW1iZXIgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx0b3RhbENlbGxzLmxlbmd0aCk7XHJcbiAgICBsZXQgY29vcmQgPSAgdG90YWxDZWxsc1tudW1iZXItMV0uc3BsaXQoJywnKTtcclxuICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gIHJldHVybiBjb29yZDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW50RnJvbUludGVydmFsKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgfVxyXG5cclxuZXhwb3J0IHtyYW5kb21TaGlwcywgcmFuZG9tQ29vcmRpbmF0ZXN9OyIsImZ1bmN0aW9uIHNjb3JlQm9hcmQoYXJnMSxhcmcyLGFyZzMpe1xyXG4gICAgLyogYXJnMSBpcyB0aGUgYm9hcmQgZGl2LCBhcmcyIGlzIHRoZSBodW1hbiBwbGF5ZXIgb2JqZWN0LCBhcmczIGlzIHRoZSBjb21wdXRlciBwbGF5ZXIgb2JqZWN0ICovXHJcblxyXG5jb25zdCBnYW1lQ29udGFpbmVyID0gYXJnMS5wYXJlbnRFbGVtZW50O1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGFyZzI7XHJcbmNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnMztcclxuY29uc3Qgc2NvcmVCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbmNvbnN0IGh1bWFuU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2NvcmVCb2FyZERpdi5jbGFzc0xpc3QuYWRkKCdzY29yZUJvYXJkJyk7XHJcbmh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7Jyk7XHJcbmh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKCdpZCcsJ2h1bWFuLXNjb3JlJyk7XHJcbmh1bWFuU2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcclxuY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDIvMzsnKTtcclxuY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXItc2NvcmUnKTtcclxuY29tcHV0ZXJTY29yZS5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xyXG5cclxuY29uc3QgaHVtYW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaHVtYW5UaXRsZS50ZXh0Q29udGVudCA9ICdDT01QVVRFUiBhdHRhY2tzJzsgIC8qIGluIHRoZSBodW1hbiBib2FyZCAqL1xyXG5odW1hblRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoxLzI7Z3JpZC1jb2x1bW46MS8zO2JhY2tncm91bmQtY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbmh1bWFuVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2NvcmVUaXRsZScpO1xyXG5cclxuY29uc3Qgc3VjY2VzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuc3VjY2Vzcy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Mi8zO2dyaWQtY29sdW1uOjEvMztjb2xvcjojMDljM2MxO2JhY2tncm91bmQtY29sb3I6bGlnaHR5ZWxsb3c7Zm9udC13ZWlnaHQ6Ym9sZDsnKTtcclxubGV0IHJhdGUgPSAwOyAvKiBpbmljaWEgZW4gMCAqL1xyXG5zdWNjZXNzLnRleHRDb250ZW50ID0gYHN1Y2Nlc3MgcmF0ZTogJHtyYXRlfSVgOyBcclxuXHJcbmNvbnN0IGltZ0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0gxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdIMS5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0gxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNIMS5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMF1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVswXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0gyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo0LzU7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdIMi5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0gyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo0LzU7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNIMi5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMV1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsxXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0gzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo1LzY7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdIMy5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0gzLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo1LzY7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNIMy5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMl1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsyXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0g0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdINC5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0g0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo2Lzc7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNINC5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bM11bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVszXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0g1LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo3Lzg7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdINS5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0g1LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo3Lzg7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNINS5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNF1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs0XVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcbmNvbnN0IGltZ0g2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGljdHVyZScpO1xyXG5jb25zdCBoaXRzSDYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmltZ0g2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo4Lzk7Z3JpZC1jb2x1bW46MS8yOycpO1xyXG5pbWdINi5jbGFzc0xpc3QuYWRkKCdzaGlwRmxvYXQnKTtcclxuaGl0c0g2LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzo4Lzk7Z3JpZC1jb2x1bW46Mi8zO2ZvbnQtc2l6ZToxMnB4O3BhZGRpbmctbGVmdDozcHg7dGV4dC1hbGlnbjpjZW50ZXI7Jyk7XHJcbmhpdHNINi5pbm5lclRleHQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNV1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs1XVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuXHJcblxyXG5cclxuY29uc3QgY29tcHV0ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuY29tcHV0ZXJUaXRsZS50ZXh0Q29udGVudCA9ICdIVU1BTiBhdHRhY2tzJzsgIC8qIGluIHRoZSBib2FyZCBjb21wdXRlciAqL1xyXG5jb21wdXRlclRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoxLzI7Z3JpZC1jb2x1bW46MS8zO2JhY2tncm91bmQtY29sb3I6bGlnaHR5ZWxsb3c7Jyk7XHJcbmNvbXB1dGVyVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2NvcmVUaXRsZScpO1xyXG5cclxuY29uc3Qgc3VjY2Vzc0NvbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnN1Y2Nlc3NDb21wLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoyLzM7Z3JpZC1jb2x1bW46MS8zO2NvbG9yOiMwOWMzYzE7YmFja2dyb3VuZC1jb2xvcjpsaWdodHllbGxvdztmb250LXdlaWdodDpib2xkOycpO1xyXG5sZXQgcmF0ZUNvbXAgPSAwOyAvKiBpbmljaWEgZW4gMCAqL1xyXG5zdWNjZXNzQ29tcC50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZUNvbXB9JWA7IFxyXG5cclxuY29uc3QgaW1nQzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MxLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MxLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVswXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjQvNTtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MyLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjQvNTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MyLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsxXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0MzLmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzMuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjUvNjtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0MzLmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVsyXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjYvNztncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M0LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjYvNztncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M0LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVszXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjcvODtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M1LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjcvODtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M1LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs0XVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuY29uc3QgaW1nQzYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwaWN0dXJlJyk7XHJcbmNvbnN0IGhpdHNDNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaW1nQzYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoxLzI7Jyk7XHJcbmltZ0M2LmNsYXNzTGlzdC5hZGQoJ3NoaXBGbG9hdCcpO1xyXG5oaXRzQzYuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjgvOTtncmlkLWNvbHVtbjoyLzM7Zm9udC1zaXplOjEycHg7cGFkZGluZy1sZWZ0OjNweDt0ZXh0LWFsaWduOmNlbnRlcjsnKTtcclxuaGl0c0M2LmlubmVyVGV4dCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVs1XVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG5cclxuZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY29yZUJvYXJkRGl2KTtcclxuc2NvcmVCb2FyZERpdi5hcHBlbmRDaGlsZChodW1hblNjb3JlKTtcclxuc2NvcmVCb2FyZERpdi5hcHBlbmRDaGlsZChjb21wdXRlclNjb3JlKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChodW1hblRpdGxlKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChzdWNjZXNzKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gxKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMik7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gyKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdIMyk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0gzKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINCk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g0KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINSk7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g1KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChpbWdINik7XHJcbmh1bWFuU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0g2KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChjb21wdXRlclRpdGxlKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChzdWNjZXNzQ29tcCk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzEpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzIpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMik7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzMpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDMyk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzQpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNCk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzUpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaW1nQzYpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGhpdHNDNik7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtzY29yZUJvYXJkfTsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gJy4vZ2FtZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgZnJvbUNvb3JkaW5hdGVzdG9DZWxsLCBhbGxDb29yZGluYXRlc1Bvc2libGVzIH0gZnJvbSAnLi9hdXhpbGlhcnktZnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVycyB9IGZyb20gJy4vY3JlYXRlLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IGFkZFNoaXBzIH0gZnJvbSAnLi9hZGQtc2hpcHMnO1xyXG5pbXBvcnQgeyByYW5kb21Db29yZGluYXRlcyB9IGZyb20gJy4vcmFuZG9tLXNoaXBzJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHMgfSBmcm9tICcuL3VwZGF0ZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCB9IGZyb20gJy4vdXBkYXRlLWNvbXB1dGVyLWJvYXJkJztcclxuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi9zaG93LWVycm9yJztcclxuaW1wb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vZGVsZXRlLWRpdi1lcnJvcic7XHJcbmltcG9ydCB7IGFkamFjZW50IH0gZnJvbSAnLi9hZGphY2VudCc7XHJcbmltcG9ydCB7IHVwZGF0ZVNjb3JlfSBmcm9tICcuL3VwZGF0ZS1zY29yZSc7XHJcblxyXG5mdW5jdGlvbiBzY3JlZW5Db250cm9sbGVyKGFyZykge1xyXG4gICAgLyogYXJnIGlzIHRoZSBnYW1lIGNvbnRhaW5lciAqL1xyXG5cclxuICAgIGNvbnN0IGdhbWUgPSBnYW1lQ29udHJvbGxlcigpO1xyXG4gICAgY29uc3QgdG90YWxDZWxscyA9IGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKTsgICAvLyBmb3IgdGhlIGNvbXB1dGVyJ3MgYXR0YWNrIHB1cnBvc2VcclxuICAgIGxldCBhcnJheUFkamFjZW50ID0gW107ICAgICAgICAvLyBmb3IgdGhlIGNvbXB1dGVyJ3MgYXR0YWNrIHB1cnBvc2VcclxuXHJcbiAgICAgICAgY29uc3QgZ2FtZUNvbnRhaW5lciA9IGFyZztcclxuICAgICAgICBjb25zdCB0dXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdHVybkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHdhaXRUdXJuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBodW1hbkJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBcclxuICAgICAgICBnYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xyXG4gICAgICAgIHR1cm4uY2xhc3NMaXN0LmFkZCgndHVybicpO1xyXG4gICAgICAgIHR1cm4uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xyXG4gICAgICAgIHR1cm5EaXYuY2xhc3NMaXN0LmFkZCgndHVybkRpdicpO1xyXG4gICAgICAgIHdhaXRUdXJuLmNsYXNzTGlzdC5hZGQoJ3dhaXRUdXJuJyk7XHJcbiAgICAgICAgYm9hcmREaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuICAgICAgICByZXN1bHQuY2xhc3NMaXN0LmFkZCgncmVzdWx0Jyk7XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1odW1hbicpO1xyXG4gICAgICAgIGh1bWFuQm9hcmQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzozLzQ7IGdyaWQtY29sdW1uOjEvMicpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Jlc2V0QnV0dG9uJyk7XHJcbiAgICAgICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUkVTRVQgZm9yIE5FVyBHQU1FJztcclxuICAgICAgICBcclxuXHJcbiAgICBjb25zdCBpbml0aWFsU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNsZWFyIHRoZSBib2FyZFxyXG4gICAgICAgIGJvYXJkRGl2LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVQbGF5ZXIpO1xyXG4gICAgICAgIGNvbnN0IHBsYXllckNvbXB1dGVyID0gZ2FtZS5nZXRDb21wdXRlclBsYXllcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllckNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgLy8gRGlzcGxheSBwbGF5ZXIncyB0dXJuXHJcbiAgICAgICAgdHVybkRpdi50ZXh0Q29udGVudCA9IGAke2FjdGl2ZVBsYXllci50eXBlfSdzIHR1cm4uLi5gO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICAvLyBBbnl0aGluZyBjbGlja2FibGUgc2hvdWxkIGJlIGEgYnV0dG9uISFcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsLTEpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGh1bWFuQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgLy8gQW55dGhpbmcgY2xpY2thYmxlIHNob3VsZCBiZSBhIGJ1dHRvbiEhXHJcbiAgICAgICAgICAgIGNvbnN0IGNlbGxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBkYXRhIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgY29sdW1uXHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5yb3cgPSBpO1xyXG4gICAgICAgICAgICBjZWxsQnV0dG9uLmRhdGFzZXQuY29sdW1uID0gajsgXHJcbiAgICAgICAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQoY2VsbEJ1dHRvbik7XHJcbiAgICAgICAgfX1cclxuICAgICAgICAvLyBjcmVhdGUgYSBidXR0b24gZm9yIGFkZCBzaGlwcyBhbmQgZnVuY3Rpb25cclxuICAgICAgICBhZGRpbmdTaGlwcyh0dXJuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgaW5pdGlhbFNjcmVlbigpO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVNjcmVlbiA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBuZXdlc3QgdmVyc2lvbiBvZiB0aGUgYm9hcmQgYW5kIHBsYXllciB0dXJuXHJcbiAgICAgICAgY29uc3QgYm9hcmRSZWFsID0gZ2FtZS5ib2FyZFJlYWwoKTtcclxuICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gZ2FtZS5ib2FyZENvbXB1dGVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEh1bWFuUGxheWVyKCk7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBnYW1lLmdldENvbXB1dGVyUGxheWVyKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxib2FyZFJlYWwscGxheWVySHVtYW4pO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLGJvYXJkQ29tcHV0ZXIscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIHVwZGF0ZVNjb3JlKHBsYXllckh1bWFuLHBsYXllckNvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgYWN0aXZlUGxheWVyID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuICAgICAgICAvLyBEaXNwbGF5IHBsYXllcidzIHR1cm5cclxuICAgICAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gYCR7YWN0aXZlUGxheWVyLnR5cGV9J3MgdHVybi4uLmA7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2FtZS5pc1RoZXJlQVdpbm5lcigpKTtcclxuICAgICAgICAvLyBjaGVjayBhbmQgYXR0YWNrcyBpcyB0aGVyZSBubyB3aW5uZXJcclxuICAgICAgICBsZXQgaXNUaGVyZUFXaW5uZXIgPSBnYW1lLmlzVGhlcmVBV2lubmVyKCk7XHJcbiAgICAgICAgc3dpdGNoKGlzVGhlcmVBV2lubmVyPT09ZmFsc2Upe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlUGxheWVyLnR5cGU9PT0nQ09NUFVURVIgUGxheWVyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkRGl2KGJvYXJkRGl2KTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyQXR0YWNrLCA0MDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIGFjdGl2ZSBwbGF5ZXIgaXMgSHVtYW4gbmVlZCB3YWl0IGZvciBhIGNsaWNrXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gZ2FtZSBvdmVyIC0gZGlzYWJsZSBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICBcclxuLy8gYWRkIGEgYWRkLXNoaXBzIEJ1dHRvbiBhbmQgdGhlIGV2ZW50bGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFkZGluZ1NoaXBzKHR1cm4scGxheWVyQ29tcHV0ZXIpe1xyXG4gICAgY29uc3QgYWRkU2hpcHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgXHJcbiAgICBjb25zdCBhZGRTaGlwc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRTaGlwc0Rpdi5jbGFzc05hbWUgPSAnJztcclxuICAgIGFkZFNoaXBzRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCdhZGRTaGlwc0RpdicpO1xyXG4gICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LmFkZCgnYWRkc2hpcHMnKTtcclxuICAgIGFkZFNoaXBzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuICAgIGFkZFNoaXBzQnV0dG9uLnRleHRDb250ZW50ID0gXCJBREQgU0hJUFNcIjtcclxuXHJcbiAgICBhZGRTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcnModHVybik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhZGRTaGlwc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGFkZFNoaXBzKGdhbWUsaHVtYW5Cb2FyZCxib2FyZERpdix0dXJuLGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIGFkZFNoaXBzRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FkZHNoaXBzJyk7XHJcbiAgICAgICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICB9KTtcclxuICAgIFxyXG4gICAgdHVybi5hcHBlbmRDaGlsZChhZGRTaGlwc0Rpdik7XHJcbiAgICBhZGRTaGlwc0Rpdi5hcHBlbmRDaGlsZChhZGRTaGlwc0J1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGJvYXJkIGNvbXB1dGVyIGZvciBIdW1hbiBhdHRhY2tzXHJcbiAgICAgICAgZnVuY3Rpb24gY2xpY2tIYW5kbGVyQm9hcmQoZSkge1xyXG4gICAgICAgIHN3aXRjaChnYW1lLmdldEFjdGl2ZVBsYXllcigpLnR5cGU9PT0nSFVNQU4gUGxheWVyJyl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFJvdyA9IGUudGFyZ2V0LmRhdGFzZXQucm93O1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb2x1bW4gPSBlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBJJ3ZlIGNsaWNrZWQgYSBjb2x1bW4gYW5kIG5vdCB0aGUgZ2FwcyBpbiBiZXR3ZWVuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkUm93KSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBnYW1lLnBsYXlSb3VuZChOdW1iZXIoc2VsZWN0ZWRSb3cpLE51bWJlcihzZWxlY3RlZENvbHVtbikpO1xyXG4gICAgICAgICAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3Iod2FpdFR1cm4sJ3dhaXQgeW91ciB0dXJuJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcyw4MDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gICBcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlckJvYXJkKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGEgbWVzc2FnZSB0byBhdm9pZCBjbGljayBpbiBodW1hbiBib2FyZFxyXG4gICAgICAgIGZ1bmN0aW9uIG5vRmlyZVRvRnJpZW5kKCl7XHJcbiAgICAgICAgICAgIHNob3dFcnJvcih3YWl0VHVybiwnQkUgQ0FSRUZVTC4gZG9uXFwndCBzaG9vdCB5b3VyIGFsbGllcycudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZGVsZXRlRXJyb3JNZXNzYWdlcywxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbm9GaXJlVG9GcmllbmQpO1xyXG5cclxuICAgICAgIC8vIHRoaXMgYXR0YWNrJ3MgZnVuY3Rpb24gY29uc2lkZXIgYWRqYWNlbnRzIHdoZW4gZ290IGEgaGl0XHJcbiAgICAgICBmdW5jdGlvbiBjb21wdXRlckF0dGFjaygpe1xyXG4gICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgbGV0IGFkaiA9IDA7XHJcbiAgICAgICAgbGV0IGNvb3JkID0gW107XHJcbiAgICAgICAgbGV0IGFycmF5QWxsQXR0YWNrID0gZ2FtZS5nZXRIdW1hblBsYXllcigpLmdhbWVib2FyZFsnYXJyYXlBbGxBdHRhY2snXTtcclxuICAgICAgICB3aGlsZSAoIGNoZWNrID09PSB0cnVlKXtcclxuICAgICAgICAgICAgaWYoIGFycmF5QWRqYWNlbnQubGVuZ3RoIT09MCApe1xyXG4gICAgICAgICAgICAgICAgYWRqID0gYXJyYXlBZGphY2VudC5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSB0b3RhbENlbGxzLmF0KGFkaikuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGFkaiA9IHRvdGFsQ2VsbHMuaW5kZXhPZihjb29yZC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGVjayA9IGFycmF5QWxsQXR0YWNrLmhhcyhjb29yZC50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNlbGwgPSBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwoY29vcmQpO1xyXG4gICAgICAgIGdhbWUucGxheVJvdW5kQ29tcHV0ZXIoY2VsbFswXSxjZWxsWzFdKTtcclxuICAgICAgICAvLyBpZiBnb3QgYSBoaXQgbG9vayBmb3IgYWRqYWNlbnRzXHJcbiAgICAgICAgbGV0IGJvYXJkUmVhbCA9IGdhbWUuYm9hcmRSZWFsKCk7XHJcbiAgICAgICAgaWYoYm9hcmRSZWFsW2NlbGxbMF1dW2NlbGxbMV1dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgIGxldCBhcnJheVRlbXAgPSBhZGphY2VudC5nZXQoYWRqKTtcclxuICAgICAgICAgICAgYXJyYXlUZW1wLm1hcCgoeCkgPT4gYXJyYXlBZGphY2VudC5wdXNoKHgpKTtcclxuICAgICAgICAgICAgaWYoYXJyYXlBZGphY2VudD09PXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICBhcnJheUFkamFjZW50PVtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldE1lc3NhZ2UoYWN0aXZlTWVzc2FnZSk7XHJcbiAgICAgICAgdXBkYXRlU2NyZWVuKCk7ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAvLyBhZGQgYSByZXN1bHQgZ2FtZVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdEdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJlc3VsdEdhbWVEaXYuY2xhc3NMaXN0LmFkZCgncmVzdWx0TWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZU1lc3NhZ2UgPSBnYW1lLmdldEdhbWVNZXNzYWdlKCk7XHJcbiAgICAgICAgIGNvbnN0IGdldE1lc3NhZ2UgPSAoYWN0aXZlTWVzc2FnZSkgPT4geyBcclxuICAgICAgICAgICAgYWN0aXZlTWVzc2FnZSA9IGdhbWUuZ2V0R2FtZU1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgcmVzdWx0R2FtZURpdi50ZXh0Q29udGVudCA9IGFjdGl2ZU1lc3NhZ2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHQuYXBwZW5kQ2hpbGQocmVzdWx0R2FtZURpdik7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhIGRpdiB3aXRoIGNvdW50IGRvd24gZm9yIGNvbXB1dGVyIGF0dGFjayBhbmQgcmVtb3ZlIGl0IFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZERpdihhcmcpe1xyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsJ2F0dGFja01lc3NhZ2UnKTtcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdhdHRhY2tNZXNzYWdlJyk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCd0ZXh0Jyk7XHJcbiAgICAgICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmxpZ2h0eWVsbG93OycpO1xyXG4gICAgICAgICAgICB0ZXh0LmlubmVyVGV4dCA9ICdUaGUgY29tcHV0ZXIgd2lsbCBhdHRhY2sgb24gJy50b1VwcGVyQ2FzZSgpOyBcclxuICAgICAgICAgICAgbGV0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgICAgICB0ZXh0MS5zZXRBdHRyaWJ1dGUoJ2lkJywnY291bnQnKTtcclxuICAgICAgICAgICAgdGV4dDEuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2ZvbnQtc2l6ZToxLjFyZW07IGNvbG9yOnJlZDsnKTtcclxuICAgICAgICAgICAgbGV0IG51bWJlciA9IDQ7IFxyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgICAgICBhdHRhY2tNZXNzYWdlLmFwcGVuZENoaWxkKHRleHQxKTtcclxuICAgICAgICAgICAgbGV0IGlkID0gc2V0SW50ZXJ2YWwoY291bnQsIDEwMDApO1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBjb3VudCgpe1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyID0gbnVtYmVyLTE7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKS5pbm5lclRleHQgPSBgID0+ICR7bnVtYmVyfWA7XHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYmVyIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudCcpLmlubmVyVGV4dCA9IFwiRE9ORVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQocmVtb3ZlRGl2LDEwMDApO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIGFyZy5hcHBlbmRDaGlsZChhdHRhY2tNZXNzYWdlKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgY291bnQgZG93biBtZXNzYWdlIGRpdlxyXG4gICAgICAgICBmdW5jdGlvbiByZW1vdmVEaXYoKXtcclxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFja01lc3NhZ2UnKTtcclxuICAgICAgICAgICAgZGl2LnJlbW92ZSgpO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciByZXNldFxyXG4gICAgICAgICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsbmV3RG9jKTtcclxuXHJcbiAgICAgICAgIGZ1bmN0aW9uIG5ld0RvYygpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodHVybik7XHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJvYXJkRGl2KTsgXHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcclxuICAgIHR1cm4uYXBwZW5kQ2hpbGQodHVybkRpdik7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHJlc3VsdCk7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHdhaXRUdXJuKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGh1bWFuQm9hcmQpO1xyXG4gICAgYm9hcmREaXYuYXBwZW5kQ2hpbGQoY29tcHV0ZXJCb2FyZCk7XHJcbiAgIFxyXG59XHJcblxyXG5leHBvcnQge3NjcmVlbkNvbnRyb2xsZXJ9IiwiLy8gYSBjbGFzcyBTaGlwIFxyXG5jbGFzcyBTaGlwIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgICBcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IHZhbHVlOyAgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gMDtcclxuICAgICAgICB0aGlzLmJlZW5TdW5rID0gZmFsc2U7IFxyXG4gICAgICB9XHJcblxyXG4gICAgICBoaXQoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMgPSBoaXRzICsgMSA7XHJcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IHRoaXMuaXNTdW5rKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyT2ZIaXRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpc1N1bmsoaGl0cz10aGlzLm51bWJlck9mSGl0cyl7XHJcbiAgICAgICAgc3dpdGNoKGhpdHM9PT10aGlzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYmVlblN1bmsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5iZWVuU3VuaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7U2hpcH07XHJcbiIsImZ1bmN0aW9uIHNob3dFcnJvcihhcmcxLGFyZzIpe1xyXG4vLyBhcmcxIGlzIHRoZSBkaXYgLSBhcmcyIGlzIHRoZSBtZXNzYWdlIGZvciB0aGUgdHlwZSBvZiBlcnJvclxyXG4gICAgICBsZXQgaWQgPSBhcmcxLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgaW5wdXRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLGAke2lkfWVycm9yYCk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGl2ZScsJ3BvbGl0ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci50ZXh0Q29udGVudCA9IGFyZzI7XHJcbiAgICBcclxuICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBhcmcxLnBhcmVudE5vZGU7XHJcbiAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RXJyb3IpOyAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBzaG93RXJyb3IgfTsiLCJpbXBvcnQgeyByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChhcmcxLGFyZzIsYXJnMyl7XHJcbiAgIFxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICBcclxuICAgICAvKiAgICB4LnRleHRDb250ZW50ID0gYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlOyAqL1xyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbmxldCBhcnJheVNoaXBzID0gW107XHJcbiAgICBpZihhcmczICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFycmF5U2hpcHMgPSBhcmczWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXTtcclxuICAgIH1cclxuXHJcbmxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xyXG5cclxuYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZWxlbWVudFsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBlbGVtZW50Wydjb29yZGluYXRlcyddLmZvckVhY2goICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgYXJyYXlJbmRleE5vZGVBbmRDb29yZCA9IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCk7XHJcbmxldCBpbmRleGVzU3Vua3MgPSBbXTtcclxuY29vcmRTaGlwc1N1bmsuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgIGFycmF5SW5kZXhOb2RlQW5kQ29vcmQuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICBpZih4WzFdWzBdPT09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5pbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgbGV0IGNlbGwgPSBjZWxsc2luQm9hcmRbZWxlbWVudF07XHJcbiAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFN1bmsnKTtcclxuICAgY2VsbC50ZXh0Q29udGVudCA9ICdTVU5LJztcclxufSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkKGFyZyl7XHJcbi8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG5sZXQgYm9hcmREaXYgPSBhcmc7XHJcbmxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG5jb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcblxyXG5jZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gIHguY2xhc3NOYW1lID0gJyc7ICAgICAgIC8vIHRvIGNsZWFyIHByZXZpb3VzIGNsYXNzXHJcbiAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG59KVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7dXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZH07IiwiZnVuY3Rpb24gdXBkYXRlU2NvcmUoYXJnMSxhcmcyKXtcclxuIC8qIGFyZzEgaXMgdGhlIHBsYXllckh1bWFuICBhcmcyIGlzIHRoZSBwbGF5ZXJDb21wdXRlciAqL1xyXG5jb25zdCBwbGF5ZXJIdW1hbj0gYXJnMTtcclxuY29uc3QgcGxheWVyQ29tcHV0ZXI9IGFyZzI7XHJcblxyXG4vLyB1cGRhdGUgdGhlIGh1bWFuIHNjb3JlXHJcbmNvbnN0IGh1bWFuU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4tc2NvcmUnKTtcclxuY29uc3QgcEh1bWFuU2NvcmUgPSBodW1hblNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BpY3R1cmUnKTtcclxuY29uc3QgdEh1bWFuU2NvcmUgPSBodW1hblNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcclxuXHJcbmNvbnN0IHBpY3R1cmVzSW5IdW1hblNjb3JlID0gWy4uLnBIdW1hblNjb3JlXTtcclxuY29uc3QgaXRlcmF0b3JQID0gcGljdHVyZXNJbkh1bWFuU2NvcmUuZW50cmllcygpO1xyXG5cclxuY29uc3QgdGV4dEluSHVtYW5TY29yZSA9IFsuLi50SHVtYW5TY29yZV07XHJcbmNvbnN0IGl0ZXJhdG9yVCA9IHRleHRJbkh1bWFuU2NvcmUuZW50cmllcygpO1xyXG5cclxucGljdHVyZXNJbkh1bWFuU2NvcmUuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvclAubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTsgXHJcbiAgICBsZXQgc3VuayA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXV1bJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ107XHJcbiAgICBzd2l0Y2goc3Vuaz09PXRydWUpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnc2hpcFN1bmsnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pXHJcblxyXG50ZXh0SW5IdW1hblNjb3JlLmZvckVhY2goKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gaXRlcmF0b3JULm5leHQoKS52YWx1ZTtcclxuICAgIGxldCB4ID0gaW5kZXhbMV07XHJcbiAgICBzd2l0Y2ggKGluZGV4WzBdPT09MSkge1xyXG4gICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhdGUgPSBNYXRoLnRydW5jKChwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAtIHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYXJyYXlNaXNzZWQnXS5zaXplKVxyXG4gICAgICAgICAgICAgICAgICAgICAvcGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhcnJheUFsbEF0dGFjayddLnNpemUqMTAwKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgc3VjY2VzcyByYXRlOiAke3JhdGV9JWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChpbmRleFswXSA+IDEpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRTOiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXS0yXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICBPRiAke3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXS0yXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufSlcclxuXHJcbi8vIHVwZGF0ZSB0aGUgY29tcHV0ZXIgc2NvcmVcclxuXHJcbmNvbnN0IGNvbXB1dGVyU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItc2NvcmUnKTtcclxuY29uc3QgcENvbXB1dGVyU2NvcmUgPSBjb21wdXRlclNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3BpY3R1cmUnKTtcclxuY29uc3QgdENvbXB1dGVyU2NvcmUgPSBjb21wdXRlclNjb3JlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKTtcclxuXHJcbmNvbnN0IHBpY3R1cmVzSW5Db21wdXRlclNjb3JlID0gWy4uLnBDb21wdXRlclNjb3JlXTtcclxuY29uc3QgaXRlcmF0b3JDUCA9IHBpY3R1cmVzSW5Db21wdXRlclNjb3JlLmVudHJpZXMoKTtcclxuXHJcbmNvbnN0IHRleHRJbkNvbXB1dGVyU2NvcmUgPSBbLi4udENvbXB1dGVyU2NvcmVdO1xyXG5jb25zdCBpdGVyYXRvckNUID0gdGV4dEluQ29tcHV0ZXJTY29yZS5lbnRyaWVzKCk7XHJcblxyXG5waWN0dXJlc0luQ29tcHV0ZXJTY29yZS5mb3JFYWNoKCgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yQ1AubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTsgXHJcbiAgICBsZXQgc3VuayA9IHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXV1bJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ107XHJcbiAgICBzd2l0Y2goc3Vuaz09PXRydWUpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICB4LmNsYXNzTmFtZT0nJztcclxuICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ3NoaXBTdW5rJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG59KVxyXG5cclxudGV4dEluQ29tcHV0ZXJTY29yZS5mb3JFYWNoKCgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yQ1QubmV4dCgpLnZhbHVlO1xyXG4gICAgbGV0IHggPSBpbmRleFsxXTtcclxuICAgIHN3aXRjaCAoaW5kZXhbMF09PT0xKSB7XHJcbiAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgaWYgKHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmF0ZSA9IE1hdGgudHJ1bmMoKHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplXHJcbiAgICAgICAgICAgICAgICAgICAgIC0gcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhcnJheU1pc3NlZCddLnNpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgIC9wbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZSoxMDApO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZX0lYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGluZGV4WzBdID4gMSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdLTJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgIE9GICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddW2luZGV4WzBdLTJdWydzaGlwRGV0YWlscyddWydsZW5ndGgnXX1gO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHt1cGRhdGVTY29yZX07IiwiaW1wb3J0IHsgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfSBmcm9tIFwiLi9hdXhpbGlhcnktZnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDZWxscyhhcmcxLGFyZzIsYXJnMyl7XHJcblxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIFxyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXsgICBcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsU2hpcEFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYFNISVBgO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGFycmF5U2hpcHMgPSBbXTtcclxuICAgIGlmKGFyZzMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYXJyYXlTaGlwcyA9IGFyZzNbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddO1xyXG4gICAgfVxyXG5cclxubGV0IGNvb3JkU2hpcHNTdW5rID0gW107XHJcblxyXG5hcnJheVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHN3aXRjaChlbGVtZW50WydzaGlwRGV0YWlscyddWydiZWVuU3VuayddKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIGVsZW1lbnRbJ2Nvb3JkaW5hdGVzJ10uZm9yRWFjaCggKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBhcnJheUluZGV4Tm9kZUFuZENvb3JkID0gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKTtcclxubGV0IGluZGV4ZXNTdW5rcyA9IFtdO1xyXG5jb29yZFNoaXBzU3Vuay5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgYXJyYXlJbmRleE5vZGVBbmRDb29yZC5mb3JFYWNoKCh4KT0+e1xyXG4gICAgICAgIGlmKHhbMV1bMF09PT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaW5kZXhlc1N1bmtzLnB1c2goeFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmluZGV4ZXNTdW5rcy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICBjb25zb2xlLmxvZyhjZWxsc2luQm9hcmRbZWxlbWVudF0pO1xyXG4gICBsZXQgY2VsbCA9IGNlbGxzaW5Cb2FyZFtlbGVtZW50XTtcclxuICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsU3VuaycpO1xyXG4gICBjZWxsLnRleHRDb250ZW50ID0gJ1NVTksnO1xyXG59KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVpbml0aWFsaXplRm9ybWF0Q2VsbHMoYXJnKXtcclxuIC8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG4gbGV0IGJvYXJkRGl2ID0gYXJnO1xyXG4gbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG4gY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gXHJcbiBjZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gICB4LmNsYXNzTmFtZSA9ICcnOyAgICAgICAvLyB0byBjbGVhciBwcmV2aW91cyBjbGFzc1xyXG4gICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gfSlcclxufSBcclxuXHJcblxyXG5leHBvcnQge3VwZGF0ZUNlbGxzLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
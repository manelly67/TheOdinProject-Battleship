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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/screen-controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtBQUNGO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2FkZC1zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hZGphY2VudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hdXhpbGlhcnktZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZGVsZXRlLWRpdi1lcnJvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9nYW1lLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9yYW5kb20tc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2NvcmUtYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2NyZWVuLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaG93LWVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS1jb21wdXRlci1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUtc2NvcmUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJvd3MsIGNvbHVtbnMsIGFsZl95fSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc30gZnJvbSAnLi91cGRhdGUnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQgfSBmcm9tICcuL3VwZGF0ZS1jb21wdXRlci1ib2FyZCc7XHJcbmltcG9ydCB7IHNob3dFcnJvciB9IGZyb20gJy4vc2hvdy1lcnJvcic7XHJcbmltcG9ydCB7IGRlbGV0ZUVycm9yTWVzc2FnZXMgfSBmcm9tICcuL2RlbGV0ZS1kaXYtZXJyb3InO1xyXG5pbXBvcnQgeyByYW5kb21TaGlwcyB9IGZyb20gJy4vcmFuZG9tLXNoaXBzJztcclxuaW1wb3J0IHsgc2NvcmVCb2FyZCB9IGZyb20gJy4vc2NvcmUtYm9hcmQuanMnO1xyXG5cclxuZnVuY3Rpb24gYWRkU2hpcHMoYXJnMSxhcmcyLGFyZzMsYXJnNCxhcmc1LGFyZzYpe1xyXG4gICAgLyogYXJnIGlzIHRoZSBnYW1lICBhcmcyIGlzIHRoZSBkaXYgd2l0aCB0aGUgaHVtYW5ib2FyZCAgXHJcbiAgICBhcmczIHRvIHNob3cgdGhlIG9wdGlvbnMgYXJnNCB0byBzaG93IHJhbmRvbSBidXR0b25cclxuICAgIGFyZzUgaXMgdGhlIGRpdiB3aXRoIHRoZSBjb21wdXRlcmJvYXJkIGFyZzYgaXMgdGhlIGNvbnRlbnQgY29tcHV0ZXIgYm9hcmQqL1xyXG5jb25zdCBnYW1lID0gYXJnMTtcclxuY29uc3QgaHVtYW5Cb2FyZCA9IGFyZzI7XHJcbmNvbnN0IHBsYXllckh1bWFuID0gZ2FtZS5nZXRBY3RpdmVQbGF5ZXIoKTtcclxuY29uc3QgY29tcHV0ZXJCb2FyZCA9IGFyZzU7XHJcbmNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnNjtcclxuXHJcbi8vIGhlYWRlcnMgZm9yIHRoZSByb3dzIGFuZCBjb2x1bW5zIG9mIHRoZSBodW1hbiBwbGF5ZXIgYm9hcmRcclxuY29uc3QgZGl2Q29sdW1uc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGl2Q29sdW1uc0hlYWQuY2xhc3NMaXN0LmFkZCgnY29sdW1uc0hlYWQnKTtcclxuICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gIGNvbnN0IGNlbGxIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjZWxsSGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZENlbGxcIik7XHJcbiAgY2VsbEhlYWQudGV4dENvbnRlbnQgPSBhbGZfeVtqXS50b1VwcGVyQ2FzZSgpO1xyXG4gIGRpdkNvbHVtbnNIZWFkLmFwcGVuZENoaWxkKGNlbGxIZWFkKTtcclxuICB9XHJcbmFyZzIuYXBwZW5kQ2hpbGQoZGl2Q29sdW1uc0hlYWQpO1xyXG5cclxuY29uc3QgZGl2Um93c0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuZGl2Um93c0hlYWQuY2xhc3NMaXN0LmFkZCgncm93c0hlYWQnKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gIGNvbnN0IGNlbGxIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjZWxsSGVhZC5jbGFzc0xpc3QuYWRkKFwiaGVhZENlbGxcIik7XHJcbiAgY2VsbEhlYWQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDo3LjI1JTsnKTtcclxuICBjZWxsSGVhZC50ZXh0Q29udGVudCA9IGkrMTtcclxuICBkaXZSb3dzSGVhZC5hcHBlbmRDaGlsZChjZWxsSGVhZCk7XHJcbiAgfVxyXG5hcmcyLmFwcGVuZENoaWxkKGRpdlJvd3NIZWFkKTtcclxuXHJcbi8vIGRpdiBmb3IgYWRkIHRoZSBzaGlwcyBpbiB0aGUgYm9hcmRcclxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmlkRm9yQWRkJyk7XHJcbmdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZEZvckFkZCcpO1xyXG5jb25zdCBkaXZGb3JFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kaXZGb3JFcnJvci5zZXRBdHRyaWJ1dGUoJ2lkJywnZGl2Rm9yRXJyb3InKTtcclxuZGl2Rm9yRXJyb3Iuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxIC8gMjsgZ3JpZC1jb2x1bW46IDQgLyA1OycpO1xyXG5cclxuY29uc3Qgc2hpcExlbmd0aD1bNSwzLDQsNiw0LDVdO1xyXG4gICAgICAgIFxyXG5mb3IobGV0IGk9MTsgaTw9c2hpcExlbmd0aC5sZW5ndGg7ICsraSl7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJyxgZm9ybSR7aX1gKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybUlucHV0Jyk7XHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxgc3VibWl0JHtpfWApO1xyXG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gYEFERCBOwrAgJHtpfWA7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc3VibWl0QnV0dG9uJyk7XHJcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICBcclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCd0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOycpO1xyXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2NvbG9yOmdyZWVuOyBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOyBmb250LXdlaWdodDogOTAwOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogcmlnaHQ7Jyk7XHJcbiAgICB0ZXh0LmlubmVyVGV4dCA9IGAke3NoaXBMZW5ndGhbaS0xXX0gc3F1YXJlcyBsb25naXR1ZGVgO1xyXG4gICBcclxuXHJcbiAgICBjb25zdCByYWRpb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmFkaW9EaXYuY2xhc3NMaXN0LmFkZCgnZm9ybVJhZGlvJyk7XHJcbiAgICBjb25zdCBkaXJlY3Rpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGFiZWxGb3JIb3Jpem9udGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGhvcml6b250YWxseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvclZlcnRpY2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IHZlcnRpY2FsbHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2Rpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXNpemU6IDEycHgnKTtcclxuICAgIGxhYmVsRm9ySG9yaXpvbnRhbC5pbm5lclRleHQgPSAnbGVmdC10by1yaWdodCc7XHJcbiAgICBsYWJlbEZvckhvcml6b250YWwuc2V0QXR0cmlidXRlKCdmb3InLCdsZWZ0LXRvLXJpZ2h0Jyk7XHJcbiAgICBsYWJlbEZvclZlcnRpY2FsLmlubmVyVGV4dCA9ICd0b3AtdG8tZG93bic7XHJcbiAgICBsYWJlbEZvclZlcnRpY2FsLnNldEF0dHJpYnV0ZSgnZm9yJywndG9wLXRvLWRvd24nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgnaWQnLCdsZWZ0LXRvLXJpZ2h0Jyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCduYW1lJywnZGlyZWN0aW9uJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCdpZCcsJ3RvcC10by1kb3duJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCd0b3AtdG8tZG93bicpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkaXJlY3Rpb24nKTtcclxuXHJcbiAgICBjb25zdCBjb29yZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29vcmRSb3cuaW5uZXJUZXh0ID0gJ1JPVzogJztcclxuICAgIGNvbnN0IGNvb3JkQ29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb29yZENvbHVtbi5pbm5lclRleHQgPSAnQ09MVU1OOiAnO1xyXG5cclxuICAgIGZvcihsZXQgaT0wOyBpPHJvd3M7ICsraSl7XHJcbiAgICAgICAgY29uc3Qgcm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICByb3dMYWJlbC5pbm5lclRleHQgPSBpKzE7XHJcbiAgICAgICAgcm93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGByb3cke2krMX1gKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgnaWQnLGByb3cke2krMX1gKTtcclxuICAgICAgICBpbnB1dFJvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdyb3dTZWxlY3RlZCcpO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgndmFsdWUnLGkrMSk7XHJcblxyXG4gICAgICAgIGNvb3JkUm93LmFwcGVuZENoaWxkKHJvd0xhYmVsKTtcclxuICAgICAgICBjb29yZFJvdy5hcHBlbmRDaGlsZChpbnB1dFJvdyk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgIGZvcihsZXQgaj0wOyBqPGNvbHVtbnM7ICsrail7XHJcbiAgICAgICAgY29uc3QgY29sdW1uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0Q29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb2x1bW5MYWJlbC5pbm5lclRleHQgPSBhbGZfeVtqXS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgIGNvbHVtbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJyxgY29sdW1uJHthbGZfeVtqXX1gKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgnaWQnLGBjb2x1bW4ke2FsZl95W2pdfWApO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgnbmFtZScsJ2NvbHVtblNlbGVjdGVkJyk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCd2YWx1ZScsYWxmX3lbal0pO1xyXG5cclxuICAgICAgICBjb29yZENvbHVtbi5hcHBlbmRDaGlsZChjb2x1bW5MYWJlbCk7XHJcbiAgICAgICAgY29vcmRDb2x1bW4uYXBwZW5kQ2hpbGQoaW5wdXRDb2x1bW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGhvcml6b250YWxseS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB2ZXJ0aWNhbGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGxldCBkaXJlY3Rpb25TZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gZGlyZWN0aW9uUmFkaW9WYWx1ZSgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImRpcmVjdGlvblwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICBkaXJlY3Rpb25TZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgICAgc2hvd0Vycm9yKHJhZGlvRGl2LCdtdXN0IHNlbGVjdCBkaXJlY3Rpb24nLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICB9XHJcbiBcclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uU2VsZWN0ZWQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgbGV0IHJvd1NlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiByb3dSYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cInJvd1NlbGVjdGVkXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIHJvd1NlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICAgICByb3dTZWxlY3RlZCA9IDE7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiByb3dTZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIGNvbHVtblJhZGlvVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBnZXRTZWxlY3RlZFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJ2lucHV0W25hbWU9XCJjb2x1bW5TZWxlY3RlZFwiXTpjaGVja2VkJyk7ICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKGdldFNlbGVjdGVkVmFsdWUgIT0gbnVsbCkgeyAgIFxyXG4gICAgICAgICBjb2x1bW5TZWxlY3RlZCA9IGdldFNlbGVjdGVkVmFsdWUudmFsdWU7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICB9ZWxzZSB7ICBcclxuICAgICAgICAgY29sdW1uU2VsZWN0ZWQgPSAnYSc7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiBjb2x1bW5TZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaXplID0gc2hpcExlbmd0aFtpLTFdO1xyXG5cclxuICAgICAgICBsZXQgc2hpcE51bWJlciA9IGk7XHJcbiAgICBcclxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uUmFkaW9WYWx1ZSgpO1xyXG5cclxuICAgICAgICBsZXQgcm93U2VsZWN0ZWQgPSByb3dSYWRpb1ZhbHVlKCk7XHJcbiAgICBcclxuICAgICAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBjb2x1bW5SYWRpb1ZhbHVlKCk7XHJcblxyXG4gICAgICAgIGxldCBjb29yZCA9IFtOdW1iZXIocm93U2VsZWN0ZWQpLGNvbHVtblNlbGVjdGVkXTtcclxuXHJcbiAgICAgICAgbGV0IHNoaXAgPSBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10uZGF0YVNoaXBzKGNvb3JkLGRpcmVjdGlvbixzaXplLHNoaXBOdW1iZXIpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHNoaXAhPT1udWxsKXtcclxuICAgICAgICAgICAgZGVsZXRlRXJyb3JNZXNzYWdlcygpO1xyXG4gICAgICAgICAgICBsZXQgbmV3Qm9hcmQgPSBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10ucGxhY2VTaGlwc0luVGhlQm9hcmQoc2hpcCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQsIG5ld0JvYXJkKTtcclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0UmVhZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9ybSR7aX1gKTtcclxuICAgICAgICAgICAgc3VibWl0UmVhZHkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybUlucHV0JykubGVuZ3RoPT09MCl7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLGRpdkZvclJhbmRvbSxkaXZDb2x1bW5zSGVhZCxkaXZSb3dzSGVhZCk7XHJcbiAgICAgICAgICAgICAgICByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzMsY29tcHV0ZXJCb2FyZCxzaGlwTGVuZ3RoLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgICAgICAgIHNjb3JlQm9hcmQoYXJnMyxwbGF5ZXJIdW1hbixwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc2hvd0Vycm9yKGRpdkZvckVycm9yLCdTRUxFQ1QgQU5PVEhFUiBMT0NBVElPTicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgIGFyZzMuYXBwZW5kQ2hpbGQoZ3JpZCk7XHJcbiAgICBncmlkLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChyYWRpb0Rpdik7XHJcbiAgICByYWRpb0Rpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB0aXRsZS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGRpcmVjdGlvbklucHV0KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGNvb3JkUm93KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKGNvb3JkQ29sdW1uKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGxhYmVsRm9ySG9yaXpvbnRhbCk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChob3Jpem9udGFsbHkpO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JWZXJ0aWNhbCk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZCh2ZXJ0aWNhbGx5KTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRpdkZvclJhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2Rm9yUmFuZG9tLmlubmVyVGV4dCA9ICdDbGljayBoZXJlIGZvciBhIHJhbmRvbSBmbGVldCBvZiBzaGlwcyc7XHJcbiAgICBkaXZGb3JSYW5kb20uY2xhc3NMaXN0LmFkZCgncmFuZG9tc2hpcHMnKTtcclxuICAgIGNvbnN0IGJ1dHRvblJhbmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnV0dG9uUmFuZG9tLmlubmVyVGV4dCA9ICdSQU5ET00gRkxFRVQnO1xyXG4gICAgYnV0dG9uUmFuZG9tLmNsYXNzTGlzdC5hZGQoJ2FkZFNoaXBCdXR0b24nKTtcclxuXHJcbiAgICBidXR0b25SYW5kb20uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ10uaW5pdGlhbGl6ZUJvYXJkKCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCxwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ10pO1xyXG4gICAgICAgIHJhbmRvbVNoaXBzKHBsYXllckh1bWFuWydnYW1lYm9hcmQnXSxzaGlwTGVuZ3RoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmVtb3ZlQWxsQWRkU2hpcHNEaXYoZ3JpZCxkaXZGb3JSYW5kb20sZGl2Q29sdW1uc0hlYWQsZGl2Um93c0hlYWQpO1xyXG4gICAgICAgIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoYXJnMyxjb21wdXRlckJvYXJkLHNoaXBMZW5ndGgscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgIHNjb3JlQm9hcmQoYXJnMyxwbGF5ZXJIdW1hbixwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvclJhbmRvbSk7XHJcbiAgICBhcmc0LmFwcGVuZENoaWxkKGRpdkZvckVycm9yKTtcclxuICAgIGRpdkZvclJhbmRvbS5hcHBlbmRDaGlsZChidXR0b25SYW5kb20pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWxsQWRkU2hpcHNEaXYoYXJnMSxhcmcyLGFyZzMsYXJnNCl7XHJcbiAgICAvLyBhbGwgdGhlIGFyZ3VtZW50cyBhcmUgdGhlIGRpdnMgdG8gd2lsbCBiZSByZW1vdmVkXHJcbiAgICBhcmcxLnJlbW92ZSgpO1xyXG4gICAgYXJnMi5yZW1vdmUoKTtcclxuICAgIGFyZzMucmVtb3ZlKCk7XHJcbiAgICBhcmc0LnJlbW92ZSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21TaGlwc0ZvckNvbXB1dGVyUGxheWVyKGFyZzEsYXJnMixhcmczLGFyZzQpe1xyXG4gICAgICAvKiAgYXJnMSBpcyB0aGUgZGl2IHRvIHdyaXRlIHRoZSBoZWFkICovXHJcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGFyZzI7XHJcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGFyZzM7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBhcmc0O1xyXG5cclxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICBjb21wdXRlckJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNvbXB1dGVyJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGhlYWRDb21wdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWRDb21wdXRlci5pbm5lclRleHQgPSAndGhpcyBpcyB5b3VyIGVuZW15ICcudG9VcHBlckNhc2UoKSsnIENsaWNrIFRvIEF0dGFjayc7XHJcbiAgICAgICAgaGVhZENvbXB1dGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzogMS8yOyBncmlkLWNvbHVtbjogNC81OyBwYWRkaW5nLWxlZnQ6MjUlOyBjb2xvcjpsaWdodHllbGxvdzsnKTtcclxuICAgICAgICBhcmcxLmFwcGVuZENoaWxkKGhlYWRDb21wdXRlcik7XHJcblxyXG4gICAgICAgIHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChjb21wdXRlckJvYXJkLHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFNoaXBzfTsiLCJjb25zdCBhZGphY2VudCA9IG5ldyBNYXAoKTtcclxuXHJcbmFkamFjZW50LnNldCgwLFsxLDEyXSk7XHJcbmFkamFjZW50LnNldCgxLFswLDIsMTNdKTtcclxuYWRqYWNlbnQuc2V0KDIsWzEsMywxNF0pO1xyXG5hZGphY2VudC5zZXQoMyxbMiw0LDE1XSk7XHJcbmFkamFjZW50LnNldCg0LFszLDUsMTZdKTtcclxuYWRqYWNlbnQuc2V0KDUsWzQsNiwxN10pO1xyXG5hZGphY2VudC5zZXQoNixbNSw3LDE4XSk7XHJcbmFkamFjZW50LnNldCg3LFs2LDgsMTldKTtcclxuYWRqYWNlbnQuc2V0KDgsWzcsOSwyMF0pO1xyXG5hZGphY2VudC5zZXQoOSxbOCwxMCwyMV0pO1xyXG5hZGphY2VudC5zZXQoMTAsWzksMTEsMjJdKTtcclxuYWRqYWNlbnQuc2V0KDExLFsxMCwyM10pO1xyXG5hZGphY2VudC5zZXQoMTIsWzAsMTMsMjRdKTtcclxuYWRqYWNlbnQuc2V0KDEzLFsxLDEyLDE0LDI1XSk7XHJcbmFkamFjZW50LnNldCgxNCxbMiwxMywxNSwyNl0pO1xyXG5hZGphY2VudC5zZXQoMTUsWzMsMTQsMTYsMjddKTtcclxuYWRqYWNlbnQuc2V0KDE2LFs0LDE1LDE3LDI4XSk7XHJcbmFkamFjZW50LnNldCgxNyxbNSwxNiwxOCwyOV0pO1xyXG5hZGphY2VudC5zZXQoMTgsWzYsMTcsMTksMzBdKTtcclxuYWRqYWNlbnQuc2V0KDE5LFs3LDE4LDIwLDMxXSk7XHJcbmFkamFjZW50LnNldCgyMCxbOCwxOSwyMSwzMl0pO1xyXG5hZGphY2VudC5zZXQoMjEsWzksMjAsMjIsMzNdKTtcclxuYWRqYWNlbnQuc2V0KDIyLFsxMCwyMSwyMywzNF0pO1xyXG5hZGphY2VudC5zZXQoMjMsWzExLDIyLDM1XSk7XHJcbmFkamFjZW50LnNldCgyNCxbMTIsMjUsMzZdKTtcclxuYWRqYWNlbnQuc2V0KDI1LFsxMywyNCwyNiwzN10pO1xyXG5hZGphY2VudC5zZXQoMjYsWzE0LDI1LDI3LDM4XSk7XHJcbmFkamFjZW50LnNldCgyNyxbMTUsMjYsMjgsMzldKTtcclxuYWRqYWNlbnQuc2V0KDI4LFsxNiwyNywyOSw0MF0pO1xyXG5hZGphY2VudC5zZXQoMjksWzE3LDI4LDMwLDQxXSk7XHJcbmFkamFjZW50LnNldCgzMCxbMTgsMjksMzEsNDJdKTtcclxuYWRqYWNlbnQuc2V0KDMxLFsxOSwzMCwzMiw0M10pO1xyXG5hZGphY2VudC5zZXQoMzIsWzIwLDMxLDMzLDQ0XSk7XHJcbmFkamFjZW50LnNldCgzMyxbMjEsMzIsMzQsNDVdKTtcclxuYWRqYWNlbnQuc2V0KDM0LFsyMiwzMywzNSw0Nl0pO1xyXG5hZGphY2VudC5zZXQoMzUsWzIzLDM0LDQ3XSk7XHJcbmFkamFjZW50LnNldCgzNixbMjQsMzcsNDhdKTtcclxuYWRqYWNlbnQuc2V0KDM3LFsyNSwzNiwzOCw0OV0pO1xyXG5hZGphY2VudC5zZXQoMzgsWzI2LDM3LDM5LDUwXSk7XHJcbmFkamFjZW50LnNldCgzOSxbMjcsMzgsNDAsNTFdKTtcclxuYWRqYWNlbnQuc2V0KDQwLFsyOCwzOSw0MSw1Ml0pO1xyXG5hZGphY2VudC5zZXQoNDEsWzI5LDQwLDQyLDUzXSk7XHJcbmFkamFjZW50LnNldCg0MixbMzAsNDEsNDMsNTRdKTtcclxuYWRqYWNlbnQuc2V0KDQzLFszMSw0Miw0NCw1NV0pO1xyXG5hZGphY2VudC5zZXQoNDQsWzMyLDQzLDQ1LDU2XSk7XHJcbmFkamFjZW50LnNldCg0NSxbMzMsNDQsNDYsNTddKTtcclxuYWRqYWNlbnQuc2V0KDQ2LFszNCw0NSw0Nyw1OF0pO1xyXG5hZGphY2VudC5zZXQoNDcsWzM1LDQ2LDU5XSk7XHJcbmFkamFjZW50LnNldCg0OCxbMzYsNDksNjBdKTtcclxuYWRqYWNlbnQuc2V0KDQ5LFszNyw0OCw1MCw2MV0pO1xyXG5hZGphY2VudC5zZXQoNTAsWzM4LDQ5LDUxLDYyXSk7XHJcbmFkamFjZW50LnNldCg1MSxbMzksNTAsNTIsNjNdKTtcclxuYWRqYWNlbnQuc2V0KDUyLFs0MCw1MSw1Myw2NF0pO1xyXG5hZGphY2VudC5zZXQoNTMsWzQxLDUyLDU0LDY1XSk7XHJcbmFkamFjZW50LnNldCg1NCxbNDIsNTMsNTUsNjZdKTtcclxuYWRqYWNlbnQuc2V0KDU1LFs0Myw1NCw1Niw2N10pO1xyXG5hZGphY2VudC5zZXQoNTYsWzQ0LDU1LDU3LDY4XSk7XHJcbmFkamFjZW50LnNldCg1NyxbNDUsNTYsNTgsNjldKTtcclxuYWRqYWNlbnQuc2V0KDU4LFs0Niw1Nyw1OSw3MF0pO1xyXG5hZGphY2VudC5zZXQoNTksWzQ3LDU4LDcxXSk7XHJcbmFkamFjZW50LnNldCg2MCxbNDgsNjEsNzJdKTtcclxuYWRqYWNlbnQuc2V0KDYxLFs0OSw2MCw2Miw3M10pO1xyXG5hZGphY2VudC5zZXQoNjIsWzUwLDYxLDYzLDc0XSk7XHJcbmFkamFjZW50LnNldCg2MyxbNTEsNjIsNjQsNzVdKTtcclxuYWRqYWNlbnQuc2V0KDY0LFs1Miw2Myw2NSw3Nl0pO1xyXG5hZGphY2VudC5zZXQoNjUsWzUzLDY0LDY2LDc3XSk7XHJcbmFkamFjZW50LnNldCg2NixbNTQsNjUsNjcsNzhdKTtcclxuYWRqYWNlbnQuc2V0KDY3LFs1NSw2Niw2OCw3OV0pO1xyXG5hZGphY2VudC5zZXQoNjgsWzU2LDY3LDY5LDgwXSk7XHJcbmFkamFjZW50LnNldCg2OSxbNTcsNjgsNzAsODFdKTtcclxuYWRqYWNlbnQuc2V0KDcwLFs1OCw2OSw3MSw4Ml0pO1xyXG5hZGphY2VudC5zZXQoNzEsWzU5LDcwLDgzXSk7XHJcbmFkamFjZW50LnNldCg3MixbNjAsNzMsODRdKTtcclxuYWRqYWNlbnQuc2V0KDczLFs2MSw3Miw3NCw4NV0pO1xyXG5hZGphY2VudC5zZXQoNzQsWzYyLDczLDc1LDg2XSk7XHJcbmFkamFjZW50LnNldCg3NSxbNjMsNzQsNzYsODddKTtcclxuYWRqYWNlbnQuc2V0KDc2LFs2NCw3NSw3Nyw4OF0pO1xyXG5hZGphY2VudC5zZXQoNzcsWzY1LDc2LDc4LDg5XSk7XHJcbmFkamFjZW50LnNldCg3OCxbNjYsNzcsNzksOTBdKTtcclxuYWRqYWNlbnQuc2V0KDc5LFs2Nyw3OCw4MCw5MV0pO1xyXG5hZGphY2VudC5zZXQoODAsWzY4LDc5LDgxLDkyXSk7XHJcbmFkamFjZW50LnNldCg4MSxbNjksODAsODIsOTNdKTtcclxuYWRqYWNlbnQuc2V0KDgyLFs3MCw4MSw4Myw5NF0pO1xyXG5hZGphY2VudC5zZXQoODMsWzcxLDgyLDk1XSk7XHJcbmFkamFjZW50LnNldCg4NCxbNzIsODUsOTZdKTtcclxuYWRqYWNlbnQuc2V0KDg1LFs3Myw4NCw4Niw5N10pO1xyXG5hZGphY2VudC5zZXQoODYsWzc0LDg1LDg3LDk4XSk7XHJcbmFkamFjZW50LnNldCg4NyxbNzUsODYsODgsOTldKTtcclxuYWRqYWNlbnQuc2V0KDg4LFs3Niw4Nyw4OSwxMDBdKTtcclxuYWRqYWNlbnQuc2V0KDg5LFs3Nyw4OCw5MCwxMDFdKTtcclxuYWRqYWNlbnQuc2V0KDkwLFs3OCw4OSw5MSwxMDJdKTtcclxuYWRqYWNlbnQuc2V0KDkxLFs3OSw5MCw5MiwxMDNdKTtcclxuYWRqYWNlbnQuc2V0KDkyLFs4MCw5MSw5MywxMDRdKTtcclxuYWRqYWNlbnQuc2V0KDkzLFs4MSw5Miw5NCwxMDVdKTtcclxuYWRqYWNlbnQuc2V0KDk0LFs4Miw5Myw5NSwxMDZdKTtcclxuYWRqYWNlbnQuc2V0KDk1LFs4Myw5NCwxMDddKTtcclxuYWRqYWNlbnQuc2V0KDk2LFs4NCw5NywxMDhdKTtcclxuYWRqYWNlbnQuc2V0KDk3LFs4NSw5Niw5OCwxMDldKTtcclxuYWRqYWNlbnQuc2V0KDk4LFs4Niw5Nyw5OSwxMTBdKTtcclxuYWRqYWNlbnQuc2V0KDk5LFs4Nyw5OCwxMDAsMTExXSk7XHJcbmFkamFjZW50LnNldCgxMDAsWzg4LDk5LDEwMSwxMTJdKTtcclxuYWRqYWNlbnQuc2V0KDEwMSxbODksMTAwLDEwMiwxMTNdKTtcclxuYWRqYWNlbnQuc2V0KDEwMixbOTAsMTAxLDEwMywxMTRdKTtcclxuYWRqYWNlbnQuc2V0KDEwMyxbOTEsMTAyLDEwNCwxMTVdKTtcclxuYWRqYWNlbnQuc2V0KDEwNCxbOTIsMTAzLDEwNSwxMTZdKTtcclxuYWRqYWNlbnQuc2V0KDEwNSxbOTMsMTA0LDEwNiwxMTddKTtcclxuYWRqYWNlbnQuc2V0KDEwNixbOTQsMTA1LDEwNywxMThdKTtcclxuYWRqYWNlbnQuc2V0KDEwNyxbOTUsMTA2LDExOV0pO1xyXG5hZGphY2VudC5zZXQoMTA4LFs5NiwxMDksMTIwXSk7XHJcbmFkamFjZW50LnNldCgxMDksWzk3LDEwOCwxMTAsMTIxXSk7XHJcbmFkamFjZW50LnNldCgxMTAsWzk4LDEwOSwxMTEsMTIyXSk7XHJcbmFkamFjZW50LnNldCgxMTEsWzk5LDExMCwxMTIsMTIzXSk7XHJcbmFkamFjZW50LnNldCgxMTIsWzEwMCwxMTEsMTEzLDEyNF0pO1xyXG5hZGphY2VudC5zZXQoMTEzLFsxMDEsMTEyLDExNCwxMjVdKTtcclxuYWRqYWNlbnQuc2V0KDExNCxbMTAyLDExMywxMTUsMTI2XSk7XHJcbmFkamFjZW50LnNldCgxMTUsWzEwMywxMTQsMTE2LDEyN10pO1xyXG5hZGphY2VudC5zZXQoMTE2LFsxMDQsMTE1LDExNywxMjhdKTtcclxuYWRqYWNlbnQuc2V0KDExNyxbMTA1LDExNiwxMTgsMTI5XSk7XHJcbmFkamFjZW50LnNldCgxMTgsWzEwNiwxMTcsMTE5LDEzMF0pO1xyXG5hZGphY2VudC5zZXQoMTE5LFsxMDcsMTE4LDEzMV0pO1xyXG5hZGphY2VudC5zZXQoMTIwLFsxMDgsMTIxLDEzMl0pO1xyXG5hZGphY2VudC5zZXQoMTIxLFsxMDksMTIwLDEyMiwxMzNdKTtcclxuYWRqYWNlbnQuc2V0KDEyMixbMTEwLDEyMSwxMjMsMTM0XSk7XHJcbmFkamFjZW50LnNldCgxMjMsWzExMSwxMjIsMTI0LDEzNV0pO1xyXG5hZGphY2VudC5zZXQoMTI0LFsxMTIsMTIzLDEyNSwxMzZdKTtcclxuYWRqYWNlbnQuc2V0KDEyNSxbMTEzLDEyNCwxMjYsMTM3XSk7XHJcbmFkamFjZW50LnNldCgxMjYsWzExNCwxMjUsMTI3LDEzOF0pO1xyXG5hZGphY2VudC5zZXQoMTI3LFsxMTUsMTI2LDEyOCwxMzldKTtcclxuYWRqYWNlbnQuc2V0KDEyOCxbMTE2LDEyNywxMjksMTQwXSk7XHJcbmFkamFjZW50LnNldCgxMjksWzExNywxMjgsMTMwLDE0MV0pO1xyXG5hZGphY2VudC5zZXQoMTMwLFsxMTgsMTI5LDEzMSwxNDJdKTtcclxuYWRqYWNlbnQuc2V0KDEzMSxbMTE5LDEzMCwxNDNdKTtcclxuYWRqYWNlbnQuc2V0KDEzMixbMTIwLDEzMywxNDRdKTtcclxuYWRqYWNlbnQuc2V0KDEzMyxbMTIxLDEzMiwxMzQsMTQ1XSk7XHJcbmFkamFjZW50LnNldCgxMzQsWzEyMiwxMzMsMTM1LDE0Nl0pO1xyXG5hZGphY2VudC5zZXQoMTM1LFsxMjMsMTM0LDEzNiwxNDddKTtcclxuYWRqYWNlbnQuc2V0KDEzNixbMTI0LDEzNSwxMzcsMTQ4XSk7XHJcbmFkamFjZW50LnNldCgxMzcsWzEyNSwxMzYsMTM4LDE0OV0pO1xyXG5hZGphY2VudC5zZXQoMTM4LFsxMjYsMTM3LDEzOSwxNTBdKTtcclxuYWRqYWNlbnQuc2V0KDEzOSxbMTI3LDEzOCwxNDAsMTUxXSk7XHJcbmFkamFjZW50LnNldCgxNDAsWzEyOCwxMzksMTQxLDE1Ml0pO1xyXG5hZGphY2VudC5zZXQoMTQxLFsxMjksMTQwLDE0MiwxNTNdKTtcclxuYWRqYWNlbnQuc2V0KDE0MixbMTMwLDE0MSwxNDMsMTU0XSk7XHJcbmFkamFjZW50LnNldCgxNDMsWzEzMSwxNDIsMTU1XSk7XHJcbmFkamFjZW50LnNldCgxNDQsWzEzMiwxNDVdKTtcclxuYWRqYWNlbnQuc2V0KDE0NSxbMTMzLDE0NCwxNDZdKTtcclxuYWRqYWNlbnQuc2V0KDE0NixbMTM0LDE0NSwxNDddKTtcclxuYWRqYWNlbnQuc2V0KDE0NyxbMTM1LDE0NiwxNDhdKTtcclxuYWRqYWNlbnQuc2V0KDE0OCxbMTM2LDE0NywxNDldKTtcclxuYWRqYWNlbnQuc2V0KDE0OSxbMTM3LDE0OCwxNTBdKTtcclxuYWRqYWNlbnQuc2V0KDE1MCxbMTM4LDE0OSwxNTFdKTtcclxuYWRqYWNlbnQuc2V0KDE1MSxbMTM5LDE1MCwxNTJdKTtcclxuYWRqYWNlbnQuc2V0KDE1MixbMTQwLDE1MSwxNTNdKTtcclxuYWRqYWNlbnQuc2V0KDE1MyxbMTQxLDE1MiwxNTRdKTtcclxuYWRqYWNlbnQuc2V0KDE1NCxbMTQyLDE1MywxNTVdKTtcclxuYWRqYWNlbnQuc2V0KDE1NSxbMTQzLDE1NF0pO1xyXG5cclxuXHJcbmV4cG9ydCB7YWRqYWNlbnR9O1xyXG4iLCJjb25zdCByb3dzID0gMTM7XHJcbmNvbnN0IGNvbHVtbnMgPSAxMjtcclxuXHJcbmNvbnN0IGFsZl95ID0gW1xyXG4gICAgJ2EnLCdiJywnYycsJ2QnLCdlJywnZicsJ2cnLCdoJywnaScsJ2onLCdrJywnbCdcclxuICAgICBdO1xyXG5cclxuZnVuY3Rpb24gc2hpZnRDb29yZGluYXRlcyhbdmFsdWVfeCx2YWx1ZV95XSl7XHJcbiAgICAgICAvKiAgbGV0IFt4LHldID0gWzEsJ2EnXTsgICovXHJcbiAgICAgICAgc3dpdGNoKGFsZl95LmluY2x1ZGVzKHZhbHVlX3kudG9Mb3dlckNhc2UoKSkpe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBhbGZfeS5pbmRleE9mKHZhbHVlX3kudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsgdmFsdWVfeC0xLCBpbmRleCBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuXHJcbmZ1bmN0aW9uIGFzc2lnbkxvY2F0aW9uKFt4LHldLGRpcmVjdGlvbixrZXkpe1xyXG5sZXQgYXJyYXlPZkNvb3JkaW5hdGVzID0gW107XHJcbmxldCBpbml0aWFsWCA9IHg7XHJcbmxldCBpbml0aWFsWSA9IGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHN3aXRjaChkaXJlY3Rpb249PT0nbGVmdC10by1yaWdodCcpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICBpZihhbGZfeS5pbmRleE9mKHkudG9Mb3dlckNhc2UoKSkgKyBrZXkgPiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgYXJyYXlPZkNvb3JkaW5hdGVzLnB1c2goWyB4LCBhbGZfeVtpbml0aWFsWSArIGldIF0pO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbj09PSd0b3AtdG8tZG93bicpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICBpZihpbml0aWFsWCArIGtleS0xID4gcm93cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgIGZvciAoIGxldCBpPSAwOyBpIDwga2V5OyArK2kgKXtcclxuICAgICAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIGluaXRpYWxYICsgaSwgeSBdKTtcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5T2ZDb29yZGluYXRlcztcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tDb29yZGluYXRlcyhbeCx5XSl7XHJcbiAgICBpZih4ID4gMCAmJiB4IDw9IHJvd3MgJiYgYWxmX3kuaW5jbHVkZXMoeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNlbGx0b0Nvb3JkaW5hdGVzKHJvdyxjb2x1bW4pe1xyXG4gIC8qICAgbGV0IFt4LHldID0gWzEsJ2EnXTsgICAgICovXHJcbiAgICByZXR1cm4gWyByb3cgKyAxLCBhbGZfeVtjb2x1bW5dIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZyb21Db29yZGluYXRlc3RvQ2VsbChjb29yZCl7XHJcbiAgIC8qICBsZXQgW3Jvdyxjb2x1bW5dID0gWzAsMF07ICovXHJcbiAgICBsZXQgcm93U2VsZWN0ZWQgPSBjb29yZFswXS0xO1xyXG4gICAgbGV0IGNvbHVtblNlbGVjdGVkID0gYWxmX3kuaW5kZXhPZihjb29yZFsxXS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICByZXR1cm4gW051bWJlcihyb3dTZWxlY3RlZCksIE51bWJlcihjb2x1bW5TZWxlY3RlZCldO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhbGxDb29yZGluYXRlc1Bvc2libGVzKCkge1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgYXJyYXkucHVzaChgJHtpKzF9LCR7YWxmX3lbal19YCk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpe1xyXG4gICAgbGV0IGFycmF5ID0gW107XHJcbiAgICBsZXQgbj0gLTE7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgbiA9IG4gKyAxO1xyXG4gICAgICAgIGFycmF5LnB1c2goW24sW2Ake2krMX0sJHthbGZfeVtqXX1gXV0pO1xyXG4gICAgfX1cclxuICAgIHJldHVybiBhcnJheTtcclxufVxyXG5cclxuZXhwb3J0IHsgcm93cywgY29sdW1ucywgYWxmX3ksIHNoaWZ0Q29vcmRpbmF0ZXMsIGFzc2lnbkxvY2F0aW9uLCBcclxuICAgIGNoZWNrQ29vcmRpbmF0ZXMsIGZyb21DZWxsdG9Db29yZGluYXRlcywgYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcyxcclxuICAgICAgICBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwsIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH07IiwiZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVycyhhcmcxKSB7XHJcbiAgICAvKiB0aGUgYXJnMSBpcyB0aGUgcGFyZW50IGNvbnRhaW5lciAgICovXHJcbiAgICBcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICBcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ3JpZEZvckFkZCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnZ3JpZEZvckFkZCcpO1xyXG4gICAgXHJcbiAgICAgICAgYXJnMS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250YWluZXJzIH07IiwiZnVuY3Rpb24gZGVsZXRlRXJyb3JNZXNzYWdlcygpIHtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZXJyb3InKTtcclxuICAgIC8qIHBhcmEgY3JlYXIgdW4gYXJyYXkgZGVzZGUgZWwgTm9kZUxpc3QgKi9cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZXNBcnJheSA9IFsuLi5lcnJvck1lc3NhZ2VzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gZXJyb3JNZXNzYWdlc0FycmF5LmVudHJpZXMoKTtcclxuICAgIGVycm9yTWVzc2FnZXNBcnJheS5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgLyogICBjb25zb2xlLmxvZyhpbmRleFswXSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4WzFdKTsgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgIC8qIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgeC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHgpO1xyXG4gICAgfSk7XHJcbn1cclxuZXhwb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9OyIsImltcG9ydCB7UGxheWVyfSBmcm9tICcuL3BsYXllcic7XHJcbmltcG9ydCB7IGZyb21DZWxsdG9Db29yZGluYXRlcyB9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcblxyXG5mdW5jdGlvbiBnYW1lQ29udHJvbGxlcihcclxuICAgICAgICBwbGF5ZXJSZWFsID0gXCJIVU1BTiBQbGF5ZXJcIixcclxuICAgICAgICBwbGF5ZXJDb21wdXRlciA9IFwiQ09NUFVURVIgUGxheWVyXCIsXHJcbiAgICAgICAgd2lubmVyID0gZmFsc2UsXHJcbiAgICAgICAgbWVzc2FnZSA9ICcnICl7XHJcbiAgICBcclxuICAgICAgICBsZXQgcGxheWVycyA9IFtcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyUmVhbClcclxuICAgICAgICAgICAgICAgICxcclxuICAgICAgICAgICAgICAgIG5ldyBQbGF5ZXIocGxheWVyQ29tcHV0ZXIpXHJcbiAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IHN3aXRjaFBsYXllclR1cm4gPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgIC8qIHRoZSBwbGF5ZXIgZG9lc250IGNoYW5nZSAqL1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgLyogc3dpdGNoIHBsYXllciovXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGxheWVyID0gYWN0aXZlUGxheWVyID09PSBwbGF5ZXJzWzBdID8gcGxheWVyc1sxXSA6IHBsYXllcnNbMF07ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfTsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07XHJcbiAgICAgICAgICAgY29uc3QgZ2V0QWN0aXZlUGxheWVyID0gKCkgPT4gYWN0aXZlUGxheWVyO1xyXG5cclxuICAgICAgICAgICBjb25zdCBib2FyZFJlYWwgPSAoKSA9PiBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXVsnYm9hcmQnXTtcclxuICAgICAgICAgICBjb25zdCBib2FyZENvbXB1dGVyID0gKCkgPT4gcGxheWVyc1sxXVsnZ2FtZWJvYXJkJ11bJ2JvYXJkJ107XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGdldENvbXB1dGVyUGxheWVyID0gKCkgPT4gcGxheWVyc1sxXTtcclxuICAgICAgICAgICBjb25zdCBnZXRIdW1hblBsYXllciA9ICgpID0+IHBsYXllcnNbMF07XHJcblxyXG4gICAgICAgICAgIGNvbnN0IGlzVGhlcmVBV2lubmVyID0gKCkgPT4gd2lubmVyO1xyXG5cclxuICAgIGNvbnN0IHByaW50TmV3Um91bmQgPSAoKSA9PiB7XHJcbiAgICAgICBcclxuICAgICAgICAgICAgYm9hcmRSZWFsKCk7XHJcbiAgICAgICAgICAgIGJvYXJkQ29tcHV0ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICAgICBzd2l0Y2ggKHdpbm5lcikge1xyXG4gICAgICAgICAgIGNhc2UgdHJ1ZTogICBcclxuICAgICAgICAgICAgICAgbWVzc2FnZSA9ICBnZXRBY3RpdmVQbGF5ZXIoKS50eXBlICsgJyBXT04nOyAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSAnJzsgICAgICAgICAgIFxyXG4gICAgICAgICAgIH07IFxyXG4gICAgICAvKiAgY29uc29sZS5sb2cobWVzc2FnZSk7ICAqLyAgIFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgY29uc3QgZ2V0R2FtZU1lc3NhZ2UgPSAoKSA9PiBtZXNzYWdlOyAgICBcclxuXHJcbiAgICAgIGNvbnN0IGNoZWNrRm9yV2lubmVyID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKCBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXS5nZXRUb3RhbFN1bmsoKSA9PT0gcGxheWVyc1swXVsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ10ubGVuZ3RoICl7XHJcbiAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYoIHBsYXllcnNbMV1bJ2dhbWVib2FyZCddLmdldFRvdGFsU3VuaygpID09PSBwbGF5ZXJzWzFdWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXS5sZW5ndGggKXtcclxuICAgICAgICAgICAgICAgIHdpbm5lciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdpbm5lcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcmVzZXRHYW1lID0gKCkgPT4geyBcclxuICAgICAgICB3aW5uZXIgPSBmYWxzZTtcclxuICAgICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJzWzBdO1xyXG4gICAgICAgIC8qIHRoaXMgcmVzZXQgaXMgbm90IGJlZW4gdXNlZCAqL1xyXG4gICAgICAgIHByaW50TmV3Um91bmQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgcGxheVJvdW5kID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAgICBpZiAoIHdpbm5lciA9PT0gdHJ1ZSApeyBcclxuICAgICAgICAgICAgcmVzZXRHYW1lKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IGZyb21DZWxsdG9Db29yZGluYXRlcyhyb3csY29sdW1uKTtcclxuICAgICAgICAgICAgbGV0IGdhbWVib2FyZCA9IHBsYXllcnNbMV1bJ2dhbWVib2FyZCddO1xyXG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjb3JkZWRBdHRhY2soY29vcmQpO1xyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICBjaGVja0Zvcldpbm5lcigpO1xyXG4gICAgICAgIHN3aXRjaFBsYXllclR1cm4oKTtcclxuICAgICAgICBwcmludE5ld1JvdW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoIGJvYXJkICkgO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXlSb3VuZENvbXB1dGVyID0gKHJvdyxjb2x1bW4pID0+IHtcclxuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcclxuICAgICAvKiBjb25zb2xlLmxvZygnYWN0aXZhbmRvIGp1ZWdvJyk7ICovXHJcbiAgICAgICAgaWYgKCB3aW5uZXIgPT09IHRydWUgKXsgXHJcbiAgICAgICAgICAgIHJlc2V0R2FtZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgY29vcmQgPSBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbik7XHJcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmQgPSBwbGF5ZXJzWzBdWydnYW1lYm9hcmQnXTtcclxuICAgICAgICAgICAgZ2FtZWJvYXJkLnJlY29yZGVkQXR0YWNrKGNvb3JkKTtcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgY2hlY2tGb3JXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2hQbGF5ZXJUdXJuKCk7XHJcbiAgICAgICAgcHJpbnROZXdSb3VuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKCBib2FyZCApIDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3BsYXlSb3VuZCxwbGF5Um91bmRDb21wdXRlciwgZ2V0QWN0aXZlUGxheWVyLCBcclxuICAgICAgICBnZXRHYW1lTWVzc2FnZSwgYm9hcmRSZWFsLCBib2FyZENvbXB1dGVyLCByZXNldEdhbWUsXHJcbiAgICAgICAgIGdldENvbXB1dGVyUGxheWVyLCBnZXRIdW1hblBsYXllciwgaXNUaGVyZUFXaW5uZXJ9O1xyXG59XHJcblxyXG5leHBvcnQge2dhbWVDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSAnLi9zaGlwJztcclxuaW1wb3J0IHsgcm93cywgY29sdW1ucywgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIGNoZWNrQ29vcmRpbmF0ZXMgfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5cclxuXHJcbi8vIGEgY2xhc3MgR2FtZWJvYXJkXHJcbmNsYXNzIEdhbWVib2FyZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLmdldEJvYXJkKHJvd3MsIGNvbHVtbnMpO1xyXG4gICAgICAgIHRoaXMuYXJyYXlNaXNzZWQgPSBuZXcgU2V0KFtdKTtcclxuICAgICAgICB0aGlzLmFycmF5QWxsQXR0YWNrID0gbmV3IFNldChbXSk7XHJcbiAgICAgICAgdGhpcy5hbGxTaGlwcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEJvYXJkKCByb3dzLCBjb2x1bW5zLCBib2FyZD1bXSl7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgYm9hcmRbaV0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICBib2FyZFtpXS5wdXNoKHRoaXMuY2VsbCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbGwoKXtcclxuICAgXHJcbiAgICAgICAgbGV0IHZhbHVlID0gMDtcclxuICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7dmFsdWV9OyAgXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBkYXRhU2hpcHMoW3gseV0sZGlyZWN0aW9uLHNpemUsc2hpcE51bWJlcikge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXMgPSBhc3NpZ25Mb2NhdGlvbihbeCx5XSxkaXJlY3Rpb24sc2l6ZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoc2hpcENvb3JkaW5hdGVzPT09bnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgbm90QXZhaWxhYmxlID0gc2hpcENvb3JkaW5hdGVzLm1hcChcclxuICAgICAgICAgICAgICAgICh4KSA9PiB0aGlzLmJvYXJkW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMF1dW3NoaWZ0Q29vcmRpbmF0ZXMoeClbMV1dLnZhbHVlID09PSAxXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgIChub3RBdmFpbGFibGUuaW5jbHVkZXModHJ1ZSkpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzaGlwQ29vcmRpbmF0ZXNUb1N0cmluZyA9IHNoaXBDb29yZGluYXRlcy5tYXAoKHgpID0+IHgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGxldCBvbmVTaGlwID0geyBcclxuICAgICAgICAgICAgICAgICdzaGlwTnVtYmVyJzpzaGlwTnVtYmVyLCBcclxuICAgICAgICAgICAgICAgICdzaGlwRGV0YWlscyc6IG5ldyBTaGlwKHNpemUpLFxyXG4gICAgICAgICAgICAgICAgJ2Nvb3JkaW5hdGVzJzogc2hpcENvb3JkaW5hdGVzVG9TdHJpbmdcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYWxsU2hpcHMucHVzaChvbmVTaGlwKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9uZVNoaXA7XHJcbiAgICAgICAgfSAgICBcclxuICAgIH1cclxuXHJcbiAgICBwbGFjZVNoaXBzSW5UaGVCb2FyZCggb25lU2hpcCApe1xyXG4gICAgICAgIGxldCBhcnJheSA9IG9uZVNoaXBbJ2Nvb3JkaW5hdGVzJ107XHJcbiAgICAgICAgbGV0IHJldmVyc2VTdHJpbmcgPSBhcnJheS5tYXAoKHgpPT4geC5zcGxpdCgnLCcpKTtcclxuICAgICAgICBsZXQgYXJyYXlJbkJvYXJkID0gcmV2ZXJzZVN0cmluZy5tYXAoICh2YWx1ZXMpID0+IHNoaWZ0Q29vcmRpbmF0ZXModmFsdWVzKSk7XHJcbiAgICAgICAgYXJyYXlJbkJvYXJkLm1hcCgoW3gseV0pID0+IHRoaXMuYm9hcmRbeF1beV0udmFsdWUgPSAxICk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlY29yZGVkQXR0YWNrKCBbeCx5XSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2syPSh2YWx1ZSk9PnRoaXMucmVjb3JkZWRNaXNzZWRDb29yZCh2YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl7ICAgICAgICAgICAgIFxyXG4gICAgICAgIGlmKCFjaGVja0Nvb3JkaW5hdGVzKFt4LHldKSB8fCB0aGlzLmFycmF5QWxsQXR0YWNrLmhhcyhbeCx5LnRvTG93ZXJDYXNlKCldLnRvU3RyaW5nKCkpICl7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgW2JvYXJkWCxib2FyZFldID0gc2hpZnRDb29yZGluYXRlcyhbeCx5XSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzd2l0Y2godGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrMihbeCx5XSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JvYXJkWF1bYm9hcmRZXS52YWx1ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHRoaXMuYm9hcmRbYm9hcmRYXVtib2FyZFldLnZhbHVlID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sxKFt4LHldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtib2FyZFhdW2JvYXJkWV0udmFsdWUgPSA1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgdGhpcy5hbGxTaGlwcy5sZW5ndGg7ICsraSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYWxsU2hpcHNbaV1bJ2Nvb3JkaW5hdGVzJ10uaW5jbHVkZXMoW3gseV0udG9TdHJpbmcoKSk9PT10cnVlKXsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcCA9IHRoaXMuYWxsU2hpcHNbaV1bJ3NoaXBEZXRhaWxzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcC5oaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbFNoaXBzW2ldWydzaGlwRGV0YWlscyddID0gc2hpcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlY29yZGVkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5QWxsQXR0YWNrKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9XHJcblxyXG4gICAgIHJlY29yZGVkTWlzc2VkQ29vcmQoIGRhdGEsIHNldD10aGlzLmFycmF5TWlzc2VkKXtcclxuICAgICAgICBzZXQuYWRkKGRhdGEudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgcmV0dXJuIHNldDtcclxuICAgICB9IFxyXG5cclxuICAgIGdldFRvdGFsU3Vuaygpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0ICB0b3RhbFN1bmsgPSB0aGlzLmFsbFNoaXBzLnJlZHVjZSgodG90YWwsIGN1cnJlbnRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbVsnc2hpcERldGFpbHMnXS5iZWVuU3Vuaz09PXRydWUgPyB0b3RhbCArIDEgOiB0b3RhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApXHJcbiAgICAgICAgcmV0dXJuIHRvdGFsU3VuaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0U25hcHNob3QoKXtcclxuICAgICAgICBsZXQgbWVzc2FnZSA9ICcnO1xyXG4gICAgICAgIGxldCB0b3RhbFN1bmsgPSB0aGlzLmdldFRvdGFsU3VuaygpO1xyXG5cclxuICAgICAgICBpZih0b3RhbFN1bms9PT10aGlzLmFsbFNoaXBzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgQWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rYDtcclxuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgU2hpcHMgdGhhdCBoYXZlIGJlZW4gc3VuazogJHt0b3RhbFN1bmt9IC0gU2hpcHMgYWZsb2F0OiAke3RoaXMuYWxsU2hpcHMubGVuZ3RoLXRvdGFsU3Vua31gO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVCb2FyZCgpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVtqXS52YWx1ZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvYXJkO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtHYW1lYm9hcmR9OyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xyXG4vLyBhIGNsYXNzIFBsYXllclxyXG5jbGFzcyBQbGF5ZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKXsgXHJcbiAgICAgICAgdGhpcy50eXBlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSB0aGlzLmNyZWF0ZUdhbWVib2FyZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWVib2FyZCgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgR2FtZWJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1BsYXllcn07IiwiaW1wb3J0IHthbGxDb29yZGluYXRlc1Bvc2libGVzfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnIDtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNoaXBzKGFyZzEpe1xyXG4gICAgLyogYXJnMSBpcyB0aGUgcGxheWVyR2FtZWJvYXJkIGFyZzIgaXMgdGhlIGFycmF5IHdpdGggbGVuZ3RoKi9cclxuICAgXHJcbiAgIGNvbnN0IHNoaXBMZW5ndGg9WzUsMyw0LDYsNCw1XTtcclxuICAgY29uc3QgYXJyYXlEaXJlY3Rpb24gPSBbJ2xlZnQtdG8tcmlnaHQnLCd0b3AtdG8tZG93biddO1xyXG4gICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xyXG4gICBcclxuXHJcbiAgIGZvciAoIGxldCBpPTA7IGkgPCBzaGlwTGVuZ3RoLmxlbmd0aDsgKytpKXtcclxuICAgIGxldCBzaGlwID0gbnVsbDsgXHJcblxyXG4gICAgd2hpbGUoc2hpcD09PW51bGwpe1xyXG4gICAgbGV0IG51bWJlciA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLHRvdGFsQ2VsbHMubGVuZ3RoKTtcclxuICAgIGxldCBjb29yZCA9ICB0b3RhbENlbGxzW251bWJlci0xXS5zcGxpdCgnLCcpO1xyXG4gICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSxjb29yZFsxXV07XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gYXJyYXlEaXJlY3Rpb25bcmFuZG9tSW50RnJvbUludGVydmFsKDEsMiktMV07XHJcbiAgICBzaGlwID0gYXJnMS5kYXRhU2hpcHMoY29vcmQsZGlyZWN0aW9uLHNoaXBMZW5ndGhbaV0saSsxKTtcclxuICAgIH1cclxuICAgIGFyZzEucGxhY2VTaGlwc0luVGhlQm9hcmQoIHNoaXAgKTtcclxuXHJcbiAgIH1cclxuXHJcbnJldHVybiBhcmcxO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZXMoKXtcclxuICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xyXG4gIGxldCBudW1iZXIgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx0b3RhbENlbGxzLmxlbmd0aCk7XHJcbiAgICBsZXQgY29vcmQgPSAgdG90YWxDZWxsc1tudW1iZXItMV0uc3BsaXQoJywnKTtcclxuICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gIHJldHVybiBjb29yZDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW50RnJvbUludGVydmFsKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgfVxyXG5cclxuZXhwb3J0IHtyYW5kb21TaGlwcywgcmFuZG9tQ29vcmRpbmF0ZXN9OyIsImZ1bmN0aW9uIHNjb3JlQm9hcmQoYXJnMSxhcmcyLGFyZzMpe1xyXG4gICAgLyogYXJnMSBpcyB0aGUgYm9hcmQgZGl2LCBhcmcyIGlzIHRoZSBodW1hbiBwbGF5ZXIgb2JqZWN0LCBhcmczIGlzIHRoZSBjb21wdXRlciBwbGF5ZXIgb2JqZWN0ICovXHJcblxyXG5jb25zdCBnYW1lQ29udGFpbmVyID0gYXJnMS5wYXJlbnRFbGVtZW50O1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGFyZzI7XHJcbmNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnMztcclxuY29uc3Qgc2NvcmVCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbmNvbnN0IGh1bWFuU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2NvcmVCb2FyZERpdi5jbGFzc0xpc3QuYWRkKCdzY29yZUJvYXJkJyk7XHJcbmh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7Jyk7XHJcbmh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKCdpZCcsJ2h1bWFuLXNjb3JlJyk7XHJcbmh1bWFuU2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcclxuY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDIvMzsnKTtcclxuY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXItc2NvcmUnKTtcclxuY29tcHV0ZXJTY29yZS5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xyXG5cclxuY29uc3QgaHVtYW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaHVtYW5UaXRsZS50ZXh0Q29udGVudCA9ICdDT01QVVRFUiBhdHRhY2tzJzsgIC8qIGluIHRoZSBodW1hbiBib2FyZCAqL1xyXG5odW1hblRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoxLzI7Z3JpZC1jb2x1bW46MS8zOycpO1xyXG5odW1hblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlVGl0bGUnKTtcclxuXHJcbmNvbnN0IHN1Y2Nlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnN1Y2Nlc3Muc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjIvMztncmlkLWNvbHVtbjoxLzM7Jyk7XHJcbmxldCByYXRlID0gMDsgLyogaW5pY2lhIGVuIDAgKi9cclxuc3VjY2Vzcy50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZX0lYDsgXHJcblxyXG5jb25zdCBpbWdIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDEuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDEuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDIuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDIuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDMuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDMuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMl1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDQuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDQuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bM11bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDUuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDUuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDYuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDYuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbXB1dGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbXB1dGVyVGl0bGUudGV4dENvbnRlbnQgPSAnSFVNQU4gYXR0YWNrcyc7ICAvKiBpbiB0aGUgYm9hcmQgY29tcHV0ZXIgKi9cclxuY29tcHV0ZXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6MS8yO2dyaWQtY29sdW1uOjEvMzsnKTtcclxuY29tcHV0ZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdzY29yZVRpdGxlJyk7XHJcblxyXG5jb25zdCBzdWNjZXNzQ29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuc3VjY2Vzc0NvbXAuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjIvMztncmlkLWNvbHVtbjoxLzM7Jyk7XHJcbmxldCByYXRlQ29tcCA9IDA7IC8qIGluaWNpYSBlbiAwICovXHJcbnN1Y2Nlc3NDb21wLnRleHRDb250ZW50ID0gYHN1Y2Nlc3MgcmF0ZTogJHtyYXRlQ29tcH0lYDsgXHJcblxyXG5jb25zdCBpbWdDMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzEuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzEuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzIuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzIuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzMuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzMuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMl1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0M0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDNC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzQuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDNC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzQuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bM11bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0M1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDNS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzUuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDNS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzUuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0M2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDNi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzYuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDNi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzYuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlQm9hcmREaXYpO1xyXG5zY29yZUJvYXJkRGl2LmFwcGVuZENoaWxkKGh1bWFuU2NvcmUpO1xyXG5zY29yZUJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyU2NvcmUpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGh1bWFuVGl0bGUpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKHN1Y2Nlc3MpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gxKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDEpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gyKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDIpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gzKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDMpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g0KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDQpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g1KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDUpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g2KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDYpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGNvbXB1dGVyVGl0bGUpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKHN1Y2Nlc3NDb21wKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MxKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMik7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MyKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMyk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MzKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNCk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M0KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M1KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNik7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M2KTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQge3Njb3JlQm9hcmR9OyIsImltcG9ydCB7IGdhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9nYW1lLWNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyByb3dzLCBjb2x1bW5zLCBmcm9tQ29vcmRpbmF0ZXN0b0NlbGwsIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMgfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWluZXJzIH0gZnJvbSAnLi9jcmVhdGUtY29udGFpbmVyJztcclxuaW1wb3J0IHsgYWRkU2hpcHMgfSBmcm9tICcuL2FkZC1zaGlwcyc7XHJcbmltcG9ydCB7IHJhbmRvbUNvb3JkaW5hdGVzIH0gZnJvbSAnLi9yYW5kb20tc2hpcHMnO1xyXG5pbXBvcnQgeyB1cGRhdGVDZWxscyB9IGZyb20gJy4vdXBkYXRlJztcclxuaW1wb3J0IHsgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkIH0gZnJvbSAnLi91cGRhdGUtY29tcHV0ZXItYm9hcmQnO1xyXG5pbXBvcnQgeyBzaG93RXJyb3IgfSBmcm9tICcuL3Nob3ctZXJyb3InO1xyXG5pbXBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH0gZnJvbSAnLi9kZWxldGUtZGl2LWVycm9yJztcclxuaW1wb3J0IHsgYWRqYWNlbnQgfSBmcm9tICcuL2FkamFjZW50JztcclxuaW1wb3J0IHsgdXBkYXRlU2NvcmV9IGZyb20gJy4vdXBkYXRlLXNjb3JlJztcclxuXHJcbmZ1bmN0aW9uIHNjcmVlbkNvbnRyb2xsZXIoYXJnKSB7XHJcbiAgICAvKiBhcmcgaXMgdGhlIGdhbWUgY29udGFpbmVyICovXHJcblxyXG4gICAgY29uc3QgZ2FtZSA9IGdhbWVDb250cm9sbGVyKCk7XHJcbiAgICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpOyAgIC8vIGZvciB0aGUgY29tcHV0ZXIncyBhdHRhY2sgcHVycG9zZVxyXG4gICAgbGV0IGFycmF5QWRqYWNlbnQgPSBbXTsgICAgICAgIC8vIGZvciB0aGUgY29tcHV0ZXIncyBhdHRhY2sgcHVycG9zZVxyXG5cclxuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gYXJnO1xyXG4gICAgICAgIGNvbnN0IHR1cm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0dXJuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3Qgd2FpdFR1cm4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBib2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGh1bWFuQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIFxyXG4gICAgICAgIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XHJcbiAgICAgICAgdHVybi5jbGFzc0xpc3QuYWRkKCd0dXJuJyk7XHJcbiAgICAgICAgdHVybi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XHJcbiAgICAgICAgdHVybkRpdi5jbGFzc0xpc3QuYWRkKCd0dXJuRGl2Jyk7XHJcbiAgICAgICAgd2FpdFR1cm4uc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtY29sdW1uOjQvNTsnKTtcclxuICAgICAgICBib2FyZERpdi5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xyXG4gICAgICAgIHJlc3VsdC5jbGFzc0xpc3QuYWRkKCdyZXN1bHQnKTtcclxuICAgICAgICBodW1hbkJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWh1bWFuJyk7XHJcbiAgICAgICAgaHVtYW5Cb2FyZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgcmVzZXRCdXR0b24uc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjMvNDsgZ3JpZC1jb2x1bW46MS8yJyk7XHJcbiAgICAgICAgcmVzZXRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVzZXRCdXR0b24nKTtcclxuICAgICAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSRVNFVCBmb3IgTkVXIEdBTUUnO1xyXG4gICAgICAgIFxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxTY3JlZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2xlYXIgdGhlIGJvYXJkXHJcbiAgICAgICAgYm9hcmREaXYudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGl2ZVBsYXllcik7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBnYW1lLmdldENvbXB1dGVyUGxheWVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGxheWVyQ29tcHV0ZXIpO1xyXG5cclxuICAgICAgICAvLyBEaXNwbGF5IHBsYXllcidzIHR1cm5cclxuICAgICAgICB0dXJuRGl2LnRleHRDb250ZW50ID0gYCR7YWN0aXZlUGxheWVyLnR5cGV9J3MgdHVybi4uLmA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vIEFueXRoaW5nIGNsaWNrYWJsZSBzaG91bGQgYmUgYSBidXR0b24hIVxyXG4gICAgICAgICAgICBjb25zdCBjZWxsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgY2VsbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcclxuICAgICAgICAgICAgY2VsbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywtMSk7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGRhdGEgYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW5cclxuICAgICAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqOyBcclxuICAgICAgICAgICAgaHVtYW5Cb2FyZC5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcclxuICAgICAgICB9fVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHVtbnM7IGorKykge1xyXG4gICAgICAgICAgICAvLyBBbnl0aGluZyBjbGlja2FibGUgc2hvdWxkIGJlIGEgYnV0dG9uISFcclxuICAgICAgICAgICAgY29uc3QgY2VsbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIGRhdGEgYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBjb2x1bW5cclxuICAgICAgICAgICAgY2VsbEJ1dHRvbi5kYXRhc2V0LnJvdyA9IGk7XHJcbiAgICAgICAgICAgIGNlbGxCdXR0b24uZGF0YXNldC5jb2x1bW4gPSBqOyBcclxuICAgICAgICAgICAgY29tcHV0ZXJCb2FyZC5hcHBlbmRDaGlsZChjZWxsQnV0dG9uKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIGJ1dHRvbiBmb3IgYWRkIHNoaXBzIGFuZCBmdW5jdGlvblxyXG4gICAgICAgIGFkZGluZ1NoaXBzKHR1cm4scGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICB9XHJcbiAgICBpbml0aWFsU2NyZWVuKCk7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlU2NyZWVuID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIG5ld2VzdCB2ZXJzaW9uIG9mIHRoZSBib2FyZCBhbmQgcGxheWVyIHR1cm5cclxuICAgICAgICBjb25zdCBib2FyZFJlYWwgPSBnYW1lLmJvYXJkUmVhbCgpO1xyXG4gICAgICAgIGNvbnN0IGJvYXJkQ29tcHV0ZXIgPSBnYW1lLmJvYXJkQ29tcHV0ZXIoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJIdW1hbiA9IGdhbWUuZ2V0SHVtYW5QbGF5ZXIoKTtcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGdhbWUuZ2V0Q29tcHV0ZXJQbGF5ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLGJvYXJkUmVhbCxwbGF5ZXJIdW1hbik7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQsYm9hcmRDb21wdXRlcixwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgdXBkYXRlU2NvcmUocGxheWVySHVtYW4scGxheWVyQ29tcHV0ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBhY3RpdmVQbGF5ZXIgPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xyXG4gICAgICAgIC8vIERpc3BsYXkgcGxheWVyJ3MgdHVyblxyXG4gICAgICAgIHR1cm5EaXYudGV4dENvbnRlbnQgPSBgJHthY3RpdmVQbGF5ZXIudHlwZX0ncyB0dXJuLi4uYDtcclxuICAgICAgICBjb25zb2xlLmxvZyhnYW1lLmlzVGhlcmVBV2lubmVyKCkpO1xyXG4gICAgICAgIC8vIGNoZWNrIGFuZCBhdHRhY2tzIGlzIHRoZXJlIG5vIHdpbm5lclxyXG4gICAgICAgIGxldCBpc1RoZXJlQVdpbm5lciA9IGdhbWUuaXNUaGVyZUFXaW5uZXIoKTtcclxuICAgICAgICBzd2l0Y2goaXNUaGVyZUFXaW5uZXI9PT1mYWxzZSl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGlmIChhY3RpdmVQbGF5ZXIudHlwZT09PSdDT01QVVRFUiBQbGF5ZXInKXtcclxuICAgICAgICAgICAgICAgICAgICBhZGREaXYoYm9hcmREaXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY29tcHV0ZXJBdHRhY2ssIDQwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgYWN0aXZlIHBsYXllciBpcyBIdW1hbiBuZWVkIHdhaXQgZm9yIGEgY2xpY2tcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyBnYW1lIG92ZXIgLSBkaXNhYmxlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICBjb21wdXRlckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyQm9hcmQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9ICBcclxuICAgIH1cclxuICAgIFxyXG4vLyBhZGQgYSBhZGQtc2hpcHMgQnV0dG9uIGFuZCB0aGUgZXZlbnRsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWRkaW5nU2hpcHModHVybixwbGF5ZXJDb21wdXRlcil7XHJcbiAgICBjb25zdCBhZGRTaGlwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICBcclxuICAgIGNvbnN0IGFkZFNoaXBzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZFNoaXBzRGl2LmNsYXNzTmFtZSA9ICcnO1xyXG4gICAgYWRkU2hpcHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsJ2FkZFNoaXBzRGl2Jyk7XHJcbiAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKCdhZGRzaGlwcycpO1xyXG4gICAgYWRkU2hpcHNCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG4gICAgYWRkU2hpcHNCdXR0b24udGV4dENvbnRlbnQgPSBcIkFERCBTSElQU1wiO1xyXG5cclxuICAgIGFkZFNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVycyh0dXJuKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGFkZFNoaXBzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgYWRkU2hpcHMoZ2FtZSxodW1hbkJvYXJkLGJvYXJkRGl2LHR1cm4sY29tcHV0ZXJCb2FyZCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgYWRkU2hpcHNEaXYuY2xhc3NMaXN0LnJlbW92ZSgnYWRkc2hpcHMnKTtcclxuICAgICAgICBhZGRTaGlwc0Rpdi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKGFkZFNoaXBzRGl2KTtcclxuICAgIGFkZFNoaXBzRGl2LmFwcGVuZENoaWxkKGFkZFNoaXBzQnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgYm9hcmQgY29tcHV0ZXIgZm9yIEh1bWFuIGF0dGFja3NcclxuICAgICAgICBmdW5jdGlvbiBjbGlja0hhbmRsZXJCb2FyZChlKSB7XHJcbiAgICAgICAgc3dpdGNoKGdhbWUuZ2V0QWN0aXZlUGxheWVyKCkudHlwZT09PSdIVU1BTiBQbGF5ZXInKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOntcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUm93ID0gZS50YXJnZXQuZGF0YXNldC5yb3c7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvbHVtbiA9IGUudGFyZ2V0LmRhdGFzZXQuY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIEkndmUgY2xpY2tlZCBhIGNvbHVtbiBhbmQgbm90IHRoZSBnYXBzIGluIGJldHdlZW5cclxuICAgICAgICAgICAgICAgIGlmICghc2VsZWN0ZWRSb3cpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGdhbWUucGxheVJvdW5kKE51bWJlcihzZWxlY3RlZFJvdyksTnVtYmVyKHNlbGVjdGVkQ29sdW1uKSk7XHJcbiAgICAgICAgICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvcih3YWl0VHVybiwnd2FpdCB5b3VyIHR1cm4nLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChkZWxldGVFcnJvck1lc3NhZ2VzLDgwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb21wdXRlckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyQm9hcmQpO1xyXG5cclxuICAgICAgICAvLyBBZGQgYSBtZXNzYWdlIHRvIGF2b2lkIGNsaWNrIGluIGh1bWFuIGJvYXJkXHJcbiAgICAgICAgZnVuY3Rpb24gbm9GaXJlVG9GcmllbmQoKXtcclxuICAgICAgICAgICAgc2hvd0Vycm9yKHdhaXRUdXJuLCdCRSBDQVJFRlVMLiBkb25cXCd0IHNob290IHlvdXIgYWxsaWVzJy50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChkZWxldGVFcnJvck1lc3NhZ2VzLDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBodW1hbkJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxub0ZpcmVUb0ZyaWVuZCk7XHJcblxyXG4gICAgICAgLy8gdGhpcyBhdHRhY2sncyBmdW5jdGlvbiBjb25zaWRlciBhZGphY2VudHMgd2hlbiBnb3QgYSBoaXRcclxuICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCl7XHJcbiAgICAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgICAgICBsZXQgYWRqID0gMDtcclxuICAgICAgICBsZXQgY29vcmQgPSBbXTtcclxuICAgICAgICBsZXQgYXJyYXlBbGxBdHRhY2sgPSBnYW1lLmdldEh1bWFuUGxheWVyKCkuZ2FtZWJvYXJkWydhcnJheUFsbEF0dGFjayddO1xyXG4gICAgICAgIHdoaWxlICggY2hlY2sgPT09IHRydWUpe1xyXG4gICAgICAgICAgICBpZiggYXJyYXlBZGphY2VudC5sZW5ndGghPT0wICl7XHJcbiAgICAgICAgICAgICAgICBhZGogPSBhcnJheUFkamFjZW50LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICBjb29yZCA9IHRvdGFsQ2VsbHMuYXQoYWRqKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSxjb29yZFsxXV07XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgY29vcmQgPSByYW5kb21Db29yZGluYXRlcygpO1xyXG4gICAgICAgICAgICAgICAgYWRqID0gdG90YWxDZWxscy5pbmRleE9mKGNvb3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoZWNrID0gYXJyYXlBbGxBdHRhY2suaGFzKGNvb3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2VsbCA9IGZyb21Db29yZGluYXRlc3RvQ2VsbChjb29yZCk7XHJcbiAgICAgICAgZ2FtZS5wbGF5Um91bmRDb21wdXRlcihjZWxsWzBdLGNlbGxbMV0pO1xyXG4gICAgICAgIC8vIGlmIGdvdCBhIGhpdCBsb29rIGZvciBhZGphY2VudHNcclxuICAgICAgICBsZXQgYm9hcmRSZWFsID0gZ2FtZS5ib2FyZFJlYWwoKTtcclxuICAgICAgICBpZihib2FyZFJlYWxbY2VsbFswXV1bY2VsbFsxXV0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgbGV0IGFycmF5VGVtcCA9IGFkamFjZW50LmdldChhZGopO1xyXG4gICAgICAgICAgICBhcnJheVRlbXAubWFwKCh4KSA9PiBhcnJheUFkamFjZW50LnB1c2goeCkpO1xyXG4gICAgICAgICAgICBpZihhcnJheUFkamFjZW50PT09dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIGFycmF5QWRqYWNlbnQ9W107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0TWVzc2FnZShhY3RpdmVNZXNzYWdlKTtcclxuICAgICAgICB1cGRhdGVTY3JlZW4oKTsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLy8gRXN0YSBlcyBsYSBmdW5jaW9uIGRlIGF0YXF1ZSBkZSBjb21wdXRhZG9yYSB1bmljYW1lbnRlIGFsZWF0b3Jpb1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgIGZ1bmN0aW9uIGNvbXB1dGVyQXR0YWNrKCl7XHJcbiAgICAgICAgICAgIGxldCBjaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBjb29yZCA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgYXJyYXlBbGxBdHRhY2sgPSBnYW1lLmdldEh1bWFuUGxheWVyKCkuZ2FtZWJvYXJkWydhcnJheUFsbEF0dGFjayddO1xyXG4gICAgICAgICAgICB3aGlsZSAoIGNoZWNrID09PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIGNvb3JkID0gcmFuZG9tQ29vcmRpbmF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gYXJyYXlBbGxBdHRhY2suaGFzKGNvb3JkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKTtcclxuICAgICAgICAgICAgZ2FtZS5wbGF5Um91bmRDb21wdXRlcihjZWxsWzBdLGNlbGxbMV0pO1xyXG4gICAgICAgICAgICBnZXRNZXNzYWdlKGFjdGl2ZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB1cGRhdGVTY3JlZW4oKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgICovXHJcblxyXG5cclxuICAgICAgICAvLyBhZGQgYSByZXN1bHQgZ2FtZVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdEdhbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJlc3VsdEdhbWVEaXYuY2xhc3NMaXN0LmFkZCgncmVzdWx0TWVzc2FnZScpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZU1lc3NhZ2UgPSBnYW1lLmdldEdhbWVNZXNzYWdlKCk7XHJcbiAgICAgICAgIGNvbnN0IGdldE1lc3NhZ2UgPSAoYWN0aXZlTWVzc2FnZSkgPT4geyBcclxuICAgICAgICAgICAgYWN0aXZlTWVzc2FnZSA9IGdhbWUuZ2V0R2FtZU1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgcmVzdWx0R2FtZURpdi50ZXh0Q29udGVudCA9IGFjdGl2ZU1lc3NhZ2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXN1bHQuYXBwZW5kQ2hpbGQocmVzdWx0R2FtZURpdik7XHJcblxyXG4gICAgICAgIC8vIGFkZCBhIGRpdiB3aXRoIGNvdW50IGRvd24gZm9yIGNvbXB1dGVyIGF0dGFjayBhbmQgcmVtb3ZlIGl0IFxyXG4gICAgICAgIGZ1bmN0aW9uIGFkZERpdihhcmcpe1xyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2tNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGF0dGFja01lc3NhZ2Uuc2V0QXR0cmlidXRlKCdpZCcsJ2F0dGFja01lc3NhZ2UnKTtcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDEvMjsgZ3JpZC1jb2x1bW46IDIvMzsgZGlzcGxheTpmbGV4OyBmbGV4LXdyYXA6bm93cmFwOycpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywndGV4dCcpO1xyXG4gICAgICAgICAgICB0ZXh0LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdjb2xvcjpsaWdodHllbGxvdzsnKTtcclxuICAgICAgICAgICAgdGV4dC5pbm5lclRleHQgPSAnVGhlIGNvbXB1dGVyIHdpbGwgYXR0YWNrIG9uICcudG9VcHBlckNhc2UoKTsgXHJcbiAgICAgICAgICAgIGxldCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICAgICAgdGV4dDEuc2V0QXR0cmlidXRlKCdpZCcsJ2NvdW50Jyk7XHJcbiAgICAgICAgICAgIHRleHQxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdmb250LXNpemU6MS4xcmVtOyBjb2xvcjpyZWQ7Jyk7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSA0OyBcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICAgICAgYXR0YWNrTWVzc2FnZS5hcHBlbmRDaGlsZCh0ZXh0MSk7XHJcbiAgICAgICAgICAgIGxldCBpZCA9IHNldEludGVydmFsKGNvdW50LCAxMDAwKTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gY291bnQoKXtcclxuICAgICAgICAgICAgICAgIG51bWJlciA9IG51bWJlci0xO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50JykuaW5uZXJUZXh0ID0gYCA9PiAke251bWJlcn1gO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bWJlciA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lclRleHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnQnKS5pbm5lclRleHQgPSBcIkRPTkVcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHJlbW92ZURpdiwxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBhcmcuYXBwZW5kQ2hpbGQoYXR0YWNrTWVzc2FnZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAvLyByZW1vdmUgdGhlIGNvdW50IGRvd24gbWVzc2FnZSBkaXZcclxuICAgICAgICAgZnVuY3Rpb24gcmVtb3ZlRGl2KCl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2tNZXNzYWdlJyk7XHJcbiAgICAgICAgICAgIGRpdi5yZW1vdmUoKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gZXZlbnRsaXN0ZW5lciBmb3IgcmVzZXRcclxuICAgICAgICAgcmVzZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLG5ld0RvYyk7XHJcblxyXG4gICAgICAgICBmdW5jdGlvbiBuZXdEb2MoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHR1cm4pO1xyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZERpdik7IFxyXG4gICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XHJcbiAgICB0dXJuLmFwcGVuZENoaWxkKHR1cm5EaXYpO1xyXG4gICAgdHVybi5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG4gICAgdHVybi5hcHBlbmRDaGlsZCh3YWl0VHVybik7XHJcbiAgICBib2FyZERpdi5hcHBlbmRDaGlsZChodW1hbkJvYXJkKTtcclxuICAgIGJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyQm9hcmQpO1xyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IHtzY3JlZW5Db250cm9sbGVyfSIsIi8vIGEgY2xhc3MgU2hpcCBcclxuY2xhc3MgU2hpcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSl7ICAgXHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSB2YWx1ZTsgICAgICAgICAgICBcclxuICAgICAgICB0aGlzLm51bWJlck9mSGl0cyA9IDA7XHJcbiAgICAgICAgdGhpcy5iZWVuU3VuayA9IGZhbHNlOyBcclxuICAgICAgfVxyXG5cclxuICAgICAgaGl0KGhpdHM9dGhpcy5udW1iZXJPZkhpdHMpe1xyXG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gaGl0cyArIDEgO1xyXG4gICAgICAgIHRoaXMuYmVlblN1bmsgPSB0aGlzLmlzU3VuaygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlck9mSGl0cztcclxuICAgICAgfVxyXG5cclxuICAgICAgaXNTdW5rKGhpdHM9dGhpcy5udW1iZXJPZkhpdHMpe1xyXG4gICAgICAgIHN3aXRjaChoaXRzPT09dGhpcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZW5TdW5rID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJlZW5TdW5rO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmVlblN1bms7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge1NoaXB9O1xyXG4iLCJmdW5jdGlvbiBzaG93RXJyb3IoYXJnMSxhcmcyKXtcclxuLy8gYXJnMSBpcyB0aGUgZGl2IC0gYXJnMiBpcyB0aGUgbWVzc2FnZSBmb3IgdGhlIHR5cGUgb2YgZXJyb3JcclxuICAgICAgbGV0IGlkID0gYXJnMS5nZXRBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICBcclxuICAgICAgIGNvbnN0IGlucHV0RXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoJ2lkJyxgJHtpZH1lcnJvcmApO1xyXG4gICAgICAgaW5wdXRFcnJvci5zZXRBdHRyaWJ1dGUoICdhcmlhLWxpdmUnLCdwb2xpdGUnKTtcclxuICAgICAgIGlucHV0RXJyb3IudGV4dENvbnRlbnQgPSBhcmcyO1xyXG4gICAgXHJcbiAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gYXJnMS5wYXJlbnROb2RlO1xyXG4gICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChpbnB1dEVycm9yKTsgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgc2hvd0Vycm9yIH07IiwiaW1wb3J0IHsgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfSBmcm9tIFwiLi9hdXhpbGlhcnktZnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDZWxsc0NvbXB1dGVyQm9hcmQoYXJnMSxhcmcyLGFyZzMpe1xyXG4gICBcclxuICAgIGxldCBib2FyZERpdiA9IGFyZzE7XHJcbiAgICBsZXQgYm9hcmRDb250ZW50ID0gYXJnMjtcclxuICAgIGxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuXHJcbiAgICBjb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XHJcbiAgICBjb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcbiAgICBcclxuICAgIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKSBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgXHJcbiAgICAgLyogICAgeC50ZXh0Q29udGVudCA9IGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZTsgKi9cclxuICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MSl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICcnOyBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsTWlzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYHdhdGVyYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbEhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5sZXQgYXJyYXlTaGlwcyA9IFtdO1xyXG4gICAgaWYoYXJnMyAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICBhcnJheVNoaXBzID0gYXJnM1snZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ107XHJcbiAgICB9XHJcblxyXG5sZXQgY29vcmRTaGlwc1N1bmsgPSBbXTtcclxuXHJcbmFycmF5U2hpcHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgc3dpdGNoKGVsZW1lbnRbJ3NoaXBEZXRhaWxzJ11bJ2JlZW5TdW5rJ10pe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgZWxlbWVudFsnY29vcmRpbmF0ZXMnXS5mb3JFYWNoKCAoeCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29vcmRTaGlwc1N1bmsucHVzaCh4KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBmYWxzZTpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxubGV0IGFycmF5SW5kZXhOb2RlQW5kQ29vcmQgPSByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCgpO1xyXG5sZXQgaW5kZXhlc1N1bmtzID0gW107XHJcbmNvb3JkU2hpcHNTdW5rLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgICBhcnJheUluZGV4Tm9kZUFuZENvb3JkLmZvckVhY2goKHgpPT57XHJcbiAgICAgICAgaWYoeFsxXVswXT09PWVsZW1lbnQpe1xyXG4gICAgICAgICAgICBpbmRleGVzU3Vua3MucHVzaCh4WzBdKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuaW5kZXhlc1N1bmtzLmZvckVhY2goKGVsZW1lbnQpPT57XHJcbiAgIGxldCBjZWxsID0gY2VsbHNpbkJvYXJkW2VsZW1lbnRdO1xyXG4gICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGxTdW5rJyk7XHJcbiAgIGNlbGwudGV4dENvbnRlbnQgPSAnU1VOSyc7XHJcbn0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZChhcmcpe1xyXG4vKiBhcmcgaXMgdGhlIGRpdiB3aXRoIHRoZSBidXR0b24gY2VsbHMgKi9cclxubGV0IGJvYXJkRGl2ID0gYXJnO1xyXG5sZXQgYXJyYXlDZWxscyA9IGJvYXJkRGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XHJcbmNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG5cclxuY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICBcclxuICB4LmNsYXNzTmFtZSA9ICcnOyAgICAgICAvLyB0byBjbGVhciBwcmV2aW91cyBjbGFzc1xyXG4gIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gIHgudGV4dENvbnRlbnQgPSAnJztcclxufSlcclxufSBcclxuXHJcblxyXG5leHBvcnQge3VwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCwgcmVpbml0aWFsaXplRm9ybWF0Q2VsbHNDb21wQm9hcmR9OyIsImZ1bmN0aW9uIHVwZGF0ZVNjb3JlKGFyZzEsYXJnMil7XHJcbiAvKiBhcmcxIGlzIHRoZSBwbGF5ZXJIdW1hbiAgYXJnMiBpcyB0aGUgcGxheWVyQ29tcHV0ZXIgKi9cclxuY29uc3QgcGxheWVySHVtYW49IGFyZzE7XHJcbmNvbnN0IHBsYXllckNvbXB1dGVyPSBhcmcyO1xyXG5cclxuLy8gdXBkYXRlIHRoZSBodW1hbiBzY29yZVxyXG5jb25zdCBodW1hblNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuLXNjb3JlJyk7XHJcbmNvbnN0IHBIdW1hblNjb3JlID0gaHVtYW5TY29yZS5xdWVyeVNlbGVjdG9yQWxsKCdwaWN0dXJlJyk7XHJcbmNvbnN0IHRIdW1hblNjb3JlID0gaHVtYW5TY29yZS5xdWVyeVNlbGVjdG9yQWxsKCdwJyk7XHJcblxyXG5jb25zdCBwaWN0dXJlc0luSHVtYW5TY29yZSA9IFsuLi5wSHVtYW5TY29yZV07XHJcbmNvbnN0IGl0ZXJhdG9yUCA9IHBpY3R1cmVzSW5IdW1hblNjb3JlLmVudHJpZXMoKTtcclxuXHJcbmNvbnN0IHRleHRJbkh1bWFuU2NvcmUgPSBbLi4udEh1bWFuU2NvcmVdO1xyXG5jb25zdCBpdGVyYXRvclQgPSB0ZXh0SW5IdW1hblNjb3JlLmVudHJpZXMoKTtcclxuXHJcbnBpY3R1cmVzSW5IdW1hblNjb3JlLmZvckVhY2goKCkgPT4ge1xyXG4gICAgbGV0IGluZGV4ID0gaXRlcmF0b3JQLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgIGxldCB4ID0gaW5kZXhbMV07IFxyXG4gICAgbGV0IHN1bmsgPSBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11baW5kZXhbMF1dWydzaGlwRGV0YWlscyddWydiZWVuU3VuayddO1xyXG4gICAgc3dpdGNoKHN1bms9PT10cnVlKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIHguY2xhc3NOYW1lPScnO1xyXG4gICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ3NoaXBTdW5rJyk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KVxyXG5cclxudGV4dEluSHVtYW5TY29yZS5mb3JFYWNoKCgpID0+IHtcclxuICAgIGxldCBpbmRleCA9IGl0ZXJhdG9yVC5uZXh0KCkudmFsdWU7XHJcbiAgICBsZXQgeCA9IGluZGV4WzFdO1xyXG4gICAgc3dpdGNoIChpbmRleFswXT09PTEpIHtcclxuICAgICAgICBjYXNlIHRydWU6e1xyXG4gICAgICAgICAgICBpZiAocGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhcnJheUFsbEF0dGFjayddLnNpemUgPiAwKXtcclxuICAgICAgICAgICAgICAgIGxldCByYXRlID0gTWF0aC50cnVuYygocGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhcnJheUFsbEF0dGFjayddLnNpemVcclxuICAgICAgICAgICAgICAgICAgICAgLSBwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FycmF5TWlzc2VkJ10uc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICAgL3BsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYXJyYXlBbGxBdHRhY2snXS5zaXplKjEwMCk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYHN1Y2Nlc3MgcmF0ZTogJHtyYXRlfSVgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN3aXRjaCAoaW5kZXhbMF0gPiAxKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUUzogJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11baW5kZXhbMF0tMl1bJ3NoaXBEZXRhaWxzJ11bJ251bWJlck9mSGl0cyddfSBcclxuICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11baW5kZXhbMF0tMl1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4vLyB1cGRhdGUgdGhlIGNvbXB1dGVyIHNjb3JlXHJcblxyXG5jb25zdCBjb21wdXRlclNjb3JlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyLXNjb3JlJyk7XHJcbmNvbnN0IHBDb21wdXRlclNjb3JlID0gY29tcHV0ZXJTY29yZS5xdWVyeVNlbGVjdG9yQWxsKCdwaWN0dXJlJyk7XHJcbmNvbnN0IHRDb21wdXRlclNjb3JlID0gY29tcHV0ZXJTY29yZS5xdWVyeVNlbGVjdG9yQWxsKCdwJyk7XHJcblxyXG5jb25zdCBwaWN0dXJlc0luQ29tcHV0ZXJTY29yZSA9IFsuLi5wQ29tcHV0ZXJTY29yZV07XHJcbmNvbnN0IGl0ZXJhdG9yQ1AgPSBwaWN0dXJlc0luQ29tcHV0ZXJTY29yZS5lbnRyaWVzKCk7XHJcblxyXG5jb25zdCB0ZXh0SW5Db21wdXRlclNjb3JlID0gWy4uLnRDb21wdXRlclNjb3JlXTtcclxuY29uc3QgaXRlcmF0b3JDVCA9IHRleHRJbkNvbXB1dGVyU2NvcmUuZW50cmllcygpO1xyXG5cclxucGljdHVyZXNJbkNvbXB1dGVyU2NvcmUuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvckNQLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgIGxldCB4ID0gaW5kZXhbMV07IFxyXG4gICAgbGV0IHN1bmsgPSBwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11baW5kZXhbMF1dWydzaGlwRGV0YWlscyddWydiZWVuU3VuayddO1xyXG4gICAgc3dpdGNoKHN1bms9PT10cnVlKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgeC5jbGFzc05hbWU9Jyc7XHJcbiAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdzaGlwU3VuaycpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxufSlcclxuXHJcbnRleHRJbkNvbXB1dGVyU2NvcmUuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICBsZXQgaW5kZXggPSBpdGVyYXRvckNULm5leHQoKS52YWx1ZTtcclxuICAgIGxldCB4ID0gaW5kZXhbMV07XHJcbiAgICBzd2l0Y2ggKGluZGV4WzBdPT09MSkge1xyXG4gICAgICAgIGNhc2UgdHJ1ZTp7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhdGUgPSBNYXRoLnRydW5jKChwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FycmF5QWxsQXR0YWNrJ10uc2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAtIHBsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYXJyYXlNaXNzZWQnXS5zaXplKVxyXG4gICAgICAgICAgICAgICAgICAgICAvcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhcnJheUFsbEF0dGFjayddLnNpemUqMTAwKTtcclxuICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgc3VjY2VzcyByYXRlOiAke3JhdGV9JWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3dpdGNoIChpbmRleFswXSA+IDEpe1xyXG4gICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRTOiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXS0yXVsnc2hpcERldGFpbHMnXVsnbnVtYmVyT2ZIaXRzJ119IFxyXG4gICAgICAgICAgICBPRiAke3BsYXllckNvbXB1dGVyWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXVtpbmRleFswXS0yXVsnc2hpcERldGFpbHMnXVsnbGVuZ3RoJ119YDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxufSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7dXBkYXRlU2NvcmV9OyIsImltcG9ydCB7IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0IH0gZnJvbSBcIi4vYXV4aWxpYXJ5LWZ1bmN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2VsbHMoYXJnMSxhcmcyLGFyZzMpe1xyXG5cclxuICAgIGxldCBib2FyZERpdiA9IGFyZzE7XHJcbiAgICBsZXQgYm9hcmRDb250ZW50ID0gYXJnMjtcclxuICAgIGxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuXHJcbiAgICBjb25zdCBjZWxsc2luQm9hcmQgPSBbLi4uYXJyYXlDZWxsc107XHJcbiAgICBjb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcbiAgICBcclxuICAgIGNlbGxzaW5Cb2FyZC5mb3JFYWNoKCgpID0+IHtcclxuICAgICAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIChpbmRleFswXSkgKGluZGV4WzFdKTsgICovXHJcbiAgICAgIGxldCB4ID0gaW5kZXhbMV07ICAgICAgICAgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICBcclxuICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MSl7ICAgXHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbFNoaXBBZGRlZCcpO1xyXG4gICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBTSElQYDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGJvYXJkQ29udGVudFt4LmRhdGFzZXQucm93XVt4LmRhdGFzZXQuY29sdW1uXS52YWx1ZT09PTIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsTWlzc2VkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYHdhdGVyYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguY2xhc3NMaXN0LmFkZCgnY2VsbEhpdCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgSElUYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBhcnJheVNoaXBzID0gW107XHJcbiAgICBpZihhcmczICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFycmF5U2hpcHMgPSBhcmczWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXTtcclxuICAgIH1cclxuXHJcbmxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xyXG5cclxuYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZWxlbWVudFsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBlbGVtZW50Wydjb29yZGluYXRlcyddLmZvckVhY2goICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgYXJyYXlJbmRleE5vZGVBbmRDb29yZCA9IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCk7XHJcbmxldCBpbmRleGVzU3Vua3MgPSBbXTtcclxuY29vcmRTaGlwc1N1bmsuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgIGFycmF5SW5kZXhOb2RlQW5kQ29vcmQuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICBpZih4WzFdWzBdPT09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5pbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgY29uc29sZS5sb2coY2VsbHNpbkJvYXJkW2VsZW1lbnRdKTtcclxuICAgbGV0IGNlbGwgPSBjZWxsc2luQm9hcmRbZWxlbWVudF07XHJcbiAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFN1bmsnKTtcclxuICAgY2VsbC50ZXh0Q29udGVudCA9ICdTVU5LJztcclxufSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzKGFyZyl7XHJcbiAvKiBhcmcgaXMgdGhlIGRpdiB3aXRoIHRoZSBidXR0b24gY2VsbHMgKi9cclxuIGxldCBib2FyZERpdiA9IGFyZztcclxuIGxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuIFxyXG4gY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICBcclxuICAgeC5jbGFzc05hbWUgPSAnJzsgICAgICAgLy8gdG8gY2xlYXIgcHJldmlvdXMgY2xhc3NcclxuICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgIHgudGV4dENvbnRlbnQgPSAnJztcclxuIH0pXHJcbn0gXHJcblxyXG5cclxuZXhwb3J0IHt1cGRhdGVDZWxscywgcmVpbml0aWFsaXplRm9ybWF0Q2VsbHN9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
(self["webpackChunkbattleship_project"] = self["webpackChunkbattleship_project"] || []).push([["addShips"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/add-ships.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9hZGQtc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYXV4aWxpYXJ5LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9kZWxldGUtZGl2LWVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3JhbmRvbS1zaGlwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zY29yZS1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9zaG93LWVycm9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3VwZGF0ZS1jb21wdXRlci1ib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXByb2plY3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm93cywgY29sdW1ucywgYWxmX3l9IGZyb20gJy4vYXV4aWxpYXJ5LWZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzfSBmcm9tICcuL3VwZGF0ZSc7XHJcbmltcG9ydCB7IHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZCB9IGZyb20gJy4vdXBkYXRlLWNvbXB1dGVyLWJvYXJkJztcclxuaW1wb3J0IHsgc2hvd0Vycm9yIH0gZnJvbSAnLi9zaG93LWVycm9yJztcclxuaW1wb3J0IHsgZGVsZXRlRXJyb3JNZXNzYWdlcyB9IGZyb20gJy4vZGVsZXRlLWRpdi1lcnJvcic7XHJcbmltcG9ydCB7IHJhbmRvbVNoaXBzIH0gZnJvbSAnLi9yYW5kb20tc2hpcHMnO1xyXG5pbXBvcnQgeyBzY29yZUJvYXJkIH0gZnJvbSAnLi9zY29yZS1ib2FyZC5qcyc7XHJcblxyXG5mdW5jdGlvbiBhZGRTaGlwcyhhcmcxLGFyZzIsYXJnMyxhcmc0LGFyZzUsYXJnNil7XHJcbiAgICAvKiBhcmcgaXMgdGhlIGdhbWUgIGFyZzIgaXMgdGhlIGRpdiB3aXRoIHRoZSBodW1hbmJvYXJkICBcclxuICAgIGFyZzMgdG8gc2hvdyB0aGUgb3B0aW9ucyBhcmc0IHRvIHNob3cgcmFuZG9tIGJ1dHRvblxyXG4gICAgYXJnNSBpcyB0aGUgZGl2IHdpdGggdGhlIGNvbXB1dGVyYm9hcmQgYXJnNiBpcyB0aGUgY29udGVudCBjb21wdXRlciBib2FyZCovXHJcbmNvbnN0IGdhbWUgPSBhcmcxO1xyXG5jb25zdCBodW1hbkJvYXJkID0gYXJnMjtcclxuY29uc3QgcGxheWVySHVtYW4gPSBnYW1lLmdldEFjdGl2ZVBsYXllcigpO1xyXG5jb25zdCBjb21wdXRlckJvYXJkID0gYXJnNTtcclxuY29uc3QgcGxheWVyQ29tcHV0ZXIgPSBhcmc2O1xyXG5cclxuLy8gaGVhZGVycyBmb3IgdGhlIHJvd3MgYW5kIGNvbHVtbnMgb2YgdGhlIGh1bWFuIHBsYXllciBib2FyZFxyXG5jb25zdCBkaXZDb2x1bW5zSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kaXZDb2x1bW5zSGVhZC5jbGFzc0xpc3QuYWRkKCdjb2x1bW5zSGVhZCcpO1xyXG4gIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XHJcbiAgY29uc3QgY2VsbEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNlbGxIZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkQ2VsbFwiKTtcclxuICBjZWxsSGVhZC50ZXh0Q29udGVudCA9IGFsZl95W2pdLnRvVXBwZXJDYXNlKCk7XHJcbiAgZGl2Q29sdW1uc0hlYWQuYXBwZW5kQ2hpbGQoY2VsbEhlYWQpO1xyXG4gIH1cclxuYXJnMi5hcHBlbmRDaGlsZChkaXZDb2x1bW5zSGVhZCk7XHJcblxyXG5jb25zdCBkaXZSb3dzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5kaXZSb3dzSGVhZC5jbGFzc0xpc3QuYWRkKCdyb3dzSGVhZCcpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgY29uc3QgY2VsbEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNlbGxIZWFkLmNsYXNzTGlzdC5hZGQoXCJoZWFkQ2VsbFwiKTtcclxuICBjZWxsSGVhZC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnaGVpZ2h0OjcuMjUlOycpO1xyXG4gIGNlbGxIZWFkLnRleHRDb250ZW50ID0gaSsxO1xyXG4gIGRpdlJvd3NIZWFkLmFwcGVuZENoaWxkKGNlbGxIZWFkKTtcclxuICB9XHJcbmFyZzIuYXBwZW5kQ2hpbGQoZGl2Um93c0hlYWQpO1xyXG5cclxuLy8gZGl2IGZvciBhZGQgdGhlIHNoaXBzIGluIHRoZSBib2FyZFxyXG5jb25zdCBncmlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyaWRGb3JBZGQnKTtcclxuZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkRm9yQWRkJyk7XHJcbmNvbnN0IGRpdkZvckVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmRpdkZvckVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLCdkaXZGb3JFcnJvcicpO1xyXG5kaXZGb3JFcnJvci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDEgLyAyOyBncmlkLWNvbHVtbjogNCAvIDU7Jyk7XHJcblxyXG5jb25zdCBzaGlwTGVuZ3RoPVs1LDMsNCw2LDQsNV07XHJcbiAgICAgICAgXHJcbmZvcihsZXQgaT0xOyBpPD1zaGlwTGVuZ3RoLmxlbmd0aDsgKytpKXtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnaWQnLGBmb3JtJHtpfWApO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtSW5wdXQnKTtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpO1xyXG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLGBzdWJtaXQke2l9YCk7XHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBgQUREIE7CsCAke2l9YDtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzdWJtaXRCdXR0b24nKTtcclxuICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRTaGlwQnV0dG9uJyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgIFxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7Jyk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnY29sb3I6Z3JlZW47IGJhY2tncm91bmQtY29sb3I6d2hpdGU7IGZvbnQtd2VpZ2h0OiA5MDA7IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OiByaWdodDsnKTtcclxuICAgIHRleHQuaW5uZXJUZXh0ID0gYCR7c2hpcExlbmd0aFtpLTFdfSBzcXVhcmVzIGxvbmdpdHVkZWA7XHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IHJhZGlvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByYWRpb0Rpdi5jbGFzc0xpc3QuYWRkKCdmb3JtUmFkaW8nKTtcclxuICAgIGNvbnN0IGRpcmVjdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsYWJlbEZvckhvcml6b250YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgaG9yaXpvbnRhbGx5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IGxhYmVsRm9yVmVydGljYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY29uc3QgdmVydGljYWxseSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtc2l6ZTogMTJweCcpO1xyXG4gICAgbGFiZWxGb3JIb3Jpem9udGFsLmlubmVyVGV4dCA9ICdsZWZ0LXRvLXJpZ2h0JztcclxuICAgIGxhYmVsRm9ySG9yaXpvbnRhbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIGxhYmVsRm9yVmVydGljYWwuaW5uZXJUZXh0ID0gJ3RvcC10by1kb3duJztcclxuICAgIGxhYmVsRm9yVmVydGljYWwuc2V0QXR0cmlidXRlKCdmb3InLCd0b3AtdG8tZG93bicpO1xyXG4gICAgaG9yaXpvbnRhbGx5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICBob3Jpem9udGFsbHkuc2V0QXR0cmlidXRlKCdpZCcsJ2xlZnQtdG8tcmlnaHQnKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdkaXJlY3Rpb24nKTtcclxuICAgIGhvcml6b250YWxseS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbGVmdC10by1yaWdodCcpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgdmVydGljYWxseS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9wLXRvLWRvd24nKTtcclxuICAgIHZlcnRpY2FsbHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3RvcC10by1kb3duJyk7XHJcbiAgICB2ZXJ0aWNhbGx5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2RpcmVjdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGNvb3JkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb29yZFJvdy5pbm5lclRleHQgPSAnUk9XOiAnO1xyXG4gICAgY29uc3QgY29vcmRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvb3JkQ29sdW1uLmlubmVyVGV4dCA9ICdDT0xVTU46ICc7XHJcblxyXG4gICAgZm9yKGxldCBpPTA7IGk8cm93czsgKytpKXtcclxuICAgICAgICBjb25zdCByb3dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJvd0xhYmVsLmlubmVyVGV4dCA9IGkrMTtcclxuICAgICAgICByb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsYHJvdyR7aSsxfWApO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCdpZCcsYHJvdyR7aSsxfWApO1xyXG4gICAgICAgIGlucHV0Um93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3Jvd1NlbGVjdGVkJyk7XHJcbiAgICAgICAgaW5wdXRSb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsaSsxKTtcclxuXHJcbiAgICAgICAgY29vcmRSb3cuYXBwZW5kQ2hpbGQocm93TGFiZWwpO1xyXG4gICAgICAgIGNvb3JkUm93LmFwcGVuZENoaWxkKGlucHV0Um93KTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICAgZm9yKGxldCBqPTA7IGo8Y29sdW1uczsgKytqKXtcclxuICAgICAgICBjb25zdCBjb2x1bW5MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbHVtbkxhYmVsLmlubmVyVGV4dCA9IGFsZl95W2pdLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgY29sdW1uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLGBjb2x1bW4ke2FsZl95W2pdfWApO1xyXG4gICAgICAgIGlucHV0Q29sdW1uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCdpZCcsYGNvbHVtbiR7YWxmX3lbal19YCk7XHJcbiAgICAgICAgaW5wdXRDb2x1bW4uc2V0QXR0cmlidXRlKCduYW1lJywnY29sdW1uU2VsZWN0ZWQnKTtcclxuICAgICAgICBpbnB1dENvbHVtbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJyxhbGZfeVtqXSk7XHJcblxyXG4gICAgICAgIGNvb3JkQ29sdW1uLmFwcGVuZENoaWxkKGNvbHVtbkxhYmVsKTtcclxuICAgICAgICBjb29yZENvbHVtbi5hcHBlbmRDaGlsZChpbnB1dENvbHVtbik7XHJcbiAgICB9XHJcblxyXG4gICAgaG9yaXpvbnRhbGx5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHZlcnRpY2FsbHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgIGRlbGV0ZUVycm9yTWVzc2FnZXMoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgbGV0IGRpcmVjdGlvblNlbGVjdGVkID0gJyc7XHJcbiAgICBmdW5jdGlvbiBkaXJlY3Rpb25SYWRpb1ZhbHVlKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwiZGlyZWN0aW9uXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIGRpcmVjdGlvblNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICAgICBzaG93RXJyb3IocmFkaW9EaXYsJ211c3Qgc2VsZWN0IGRpcmVjdGlvbicudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgIH1cclxuIFxyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25TZWxlY3RlZDtcclxuICAgICAgfTtcclxuXHJcbiAgICBsZXQgcm93U2VsZWN0ZWQgPSAnJztcclxuICAgIGZ1bmN0aW9uIHJvd1JhZGlvVmFsdWUoKSB7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgZ2V0U2VsZWN0ZWRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdpbnB1dFtuYW1lPVwicm93U2VsZWN0ZWRcIl06Y2hlY2tlZCcpOyAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZihnZXRTZWxlY3RlZFZhbHVlICE9IG51bGwpIHsgICBcclxuICAgICAgICAgcm93U2VsZWN0ZWQgPSBnZXRTZWxlY3RlZFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICBcclxuICAgICAgICAgfWVsc2UgeyAgXHJcbiAgICAgICAgICAgIHJvd1NlbGVjdGVkID0gMTtcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIHJvd1NlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9ICcnO1xyXG4gICAgZnVuY3Rpb24gY29sdW1uUmFkaW9WYWx1ZSgpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGdldFNlbGVjdGVkVmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnaW5wdXRbbmFtZT1cImNvbHVtblNlbGVjdGVkXCJdOmNoZWNrZWQnKTsgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgaWYoZ2V0U2VsZWN0ZWRWYWx1ZSAhPSBudWxsKSB7ICAgXHJcbiAgICAgICAgIGNvbHVtblNlbGVjdGVkID0gZ2V0U2VsZWN0ZWRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIH1lbHNlIHsgIFxyXG4gICAgICAgICBjb2x1bW5TZWxlY3RlZCA9ICdhJztcclxuICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgcmV0dXJuIGNvbHVtblNlbGVjdGVkO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNpemUgPSBzaGlwTGVuZ3RoW2ktMV07XHJcblxyXG4gICAgICAgIGxldCBzaGlwTnVtYmVyID0gaTtcclxuICAgIFxyXG4gICAgICAgIGxldCBkaXJlY3Rpb24gPSBkaXJlY3Rpb25SYWRpb1ZhbHVlKCk7XHJcblxyXG4gICAgICAgIGxldCByb3dTZWxlY3RlZCA9IHJvd1JhZGlvVmFsdWUoKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBjb2x1bW5TZWxlY3RlZCA9IGNvbHVtblJhZGlvVmFsdWUoKTtcclxuXHJcbiAgICAgICAgbGV0IGNvb3JkID0gW051bWJlcihyb3dTZWxlY3RlZCksY29sdW1uU2VsZWN0ZWRdO1xyXG5cclxuICAgICAgICBsZXQgc2hpcCA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5kYXRhU2hpcHMoY29vcmQsZGlyZWN0aW9uLHNpemUsc2hpcE51bWJlcik7XHJcbiAgICBcclxuICAgICAgICBpZiAoc2hpcCE9PW51bGwpe1xyXG4gICAgICAgICAgICBkZWxldGVFcnJvck1lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdCb2FyZCA9IHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5wbGFjZVNoaXBzSW5UaGVCb2FyZChzaGlwKTtcclxuICAgICAgICAgICAgdXBkYXRlQ2VsbHMoaHVtYW5Cb2FyZCwgbmV3Qm9hcmQpO1xyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRSZWFkeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmb3JtJHtpfWApO1xyXG4gICAgICAgICAgICBzdWJtaXRSZWFkeS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JtSW5wdXQnKS5sZW5ndGg9PT0wKXtcclxuICAgICAgICAgICAgICAgIHJlbW92ZUFsbEFkZFNoaXBzRGl2KGdyaWQsZGl2Rm9yUmFuZG9tLGRpdkNvbHVtbnNIZWFkLGRpdlJvd3NIZWFkKTtcclxuICAgICAgICAgICAgICAgIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoYXJnMyxjb21wdXRlckJvYXJkLHNoaXBMZW5ndGgscGxheWVyQ29tcHV0ZXIpO1xyXG4gICAgICAgICAgICAgICAgc2NvcmVCb2FyZChhcmczLHBsYXllckh1bWFuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzaG93RXJyb3IoZGl2Rm9yRXJyb3IsJ1NFTEVDVCBBTk9USEVSIExPQ0FUSU9OJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgYXJnMy5hcHBlbmRDaGlsZChncmlkKTtcclxuICAgIGdyaWQuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKHJhZGlvRGl2KTtcclxuICAgIHJhZGlvRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICAgIHRpdGxlLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoZGlyZWN0aW9uSW5wdXQpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRSb3cpO1xyXG4gICAgcmFkaW9EaXYuYXBwZW5kQ2hpbGQoY29vcmRDb2x1bW4pO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgZGlyZWN0aW9uSW5wdXQuYXBwZW5kQ2hpbGQobGFiZWxGb3JIb3Jpem9udGFsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKGhvcml6b250YWxseSk7XHJcbiAgICBkaXJlY3Rpb25JbnB1dC5hcHBlbmRDaGlsZChsYWJlbEZvclZlcnRpY2FsKTtcclxuICAgIGRpcmVjdGlvbklucHV0LmFwcGVuZENoaWxkKHZlcnRpY2FsbHkpO1xyXG4gICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGl2Rm9yUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaXZGb3JSYW5kb20uaW5uZXJUZXh0ID0gJ0NsaWNrIGhlcmUgZm9yIGEgcmFuZG9tIGZsZWV0IG9mIHNoaXBzJztcclxuICAgIGRpdkZvclJhbmRvbS5jbGFzc0xpc3QuYWRkKCdyYW5kb21zaGlwcycpO1xyXG4gICAgY29uc3QgYnV0dG9uUmFuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidXR0b25SYW5kb20uaW5uZXJUZXh0ID0gJ1JBTkRPTSBGTEVFVCc7XHJcbiAgICBidXR0b25SYW5kb20uY2xhc3NMaXN0LmFkZCgnYWRkU2hpcEJ1dHRvbicpO1xyXG5cclxuICAgIGJ1dHRvblJhbmRvbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIHBsYXllckh1bWFuWydnYW1lYm9hcmQnXS5pbml0aWFsaXplQm9hcmQoKTtcclxuICAgICAgICB1cGRhdGVDZWxscyhodW1hbkJvYXJkLHBsYXllckh1bWFuWydnYW1lYm9hcmQnXVsnYm9hcmQnXSk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHMocGxheWVySHVtYW5bJ2dhbWVib2FyZCddLHNoaXBMZW5ndGgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGh1bWFuQm9hcmQscGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByZW1vdmVBbGxBZGRTaGlwc0RpdihncmlkLGRpdkZvclJhbmRvbSxkaXZDb2x1bW5zSGVhZCxkaXZSb3dzSGVhZCk7XHJcbiAgICAgICAgcmFuZG9tU2hpcHNGb3JDb21wdXRlclBsYXllcihhcmczLGNvbXB1dGVyQm9hcmQsc2hpcExlbmd0aCxwbGF5ZXJDb21wdXRlcik7XHJcbiAgICAgICAgc2NvcmVCb2FyZChhcmczLHBsYXllckh1bWFuLHBsYXllckNvbXB1dGVyKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICAgIGFyZzQuYXBwZW5kQ2hpbGQoZGl2Rm9yUmFuZG9tKTtcclxuICAgIGFyZzQuYXBwZW5kQ2hpbGQoZGl2Rm9yRXJyb3IpO1xyXG4gICAgZGl2Rm9yUmFuZG9tLmFwcGVuZENoaWxkKGJ1dHRvblJhbmRvbSk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBbGxBZGRTaGlwc0RpdihhcmcxLGFyZzIsYXJnMyxhcmc0KXtcclxuICAgIC8vIGFsbCB0aGUgYXJndW1lbnRzIGFyZSB0aGUgZGl2cyB0byB3aWxsIGJlIHJlbW92ZWRcclxuICAgIGFyZzEucmVtb3ZlKCk7XHJcbiAgICBhcmcyLnJlbW92ZSgpO1xyXG4gICAgYXJnMy5yZW1vdmUoKTtcclxuICAgIGFyZzQucmVtb3ZlKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNoaXBzRm9yQ29tcHV0ZXJQbGF5ZXIoYXJnMSxhcmcyLGFyZzMsYXJnNCl7XHJcbiAgICAgIC8qICBhcmcxIGlzIHRoZSBkaXYgdG8gd3JpdGUgdGhlIGhlYWQgKi9cclxuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkID0gYXJnMjtcclxuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gYXJnMztcclxuICAgICAgICBjb25zdCBwbGF5ZXJDb21wdXRlciA9IGFyZzQ7XHJcblxyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIGNvbXB1dGVyQm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY29tcHV0ZXInKTtcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZENvbXB1dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZENvbXB1dGVyLmlubmVyVGV4dCA9ICd0aGlzIGlzIHlvdXIgZW5lbXkgJy50b1VwcGVyQ2FzZSgpKycgQ2xpY2sgVG8gQXR0YWNrJztcclxuICAgICAgICBoZWFkQ29tcHV0ZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7IGdyaWQtY29sdW1uOiA0LzU7IHBhZGRpbmctbGVmdDoyNSU7IGNvbG9yOmxpZ2h0eWVsbG93OycpO1xyXG4gICAgICAgIGFyZzEuYXBwZW5kQ2hpbGQoaGVhZENvbXB1dGVyKTtcclxuXHJcbiAgICAgICAgcGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddLmluaXRpYWxpemVCb2FyZCgpO1xyXG4gICAgICAgIHVwZGF0ZUNlbGxzKGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxuICAgICAgICByYW5kb21TaGlwcyhwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ10sc2hpcExlbmd0aCk7XHJcbiAgICAgICAgdXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkKGNvbXB1dGVyQm9hcmQscGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydib2FyZCddKTtcclxufVxyXG5cclxuZXhwb3J0IHsgYWRkU2hpcHN9OyIsImNvbnN0IHJvd3MgPSAxMztcclxuY29uc3QgY29sdW1ucyA9IDEyO1xyXG5cclxuY29uc3QgYWxmX3kgPSBbXHJcbiAgICAnYScsJ2InLCdjJywnZCcsJ2UnLCdmJywnZycsJ2gnLCdpJywnaicsJ2snLCdsJ1xyXG4gICAgIF07XHJcblxyXG5mdW5jdGlvbiBzaGlmdENvb3JkaW5hdGVzKFt2YWx1ZV94LHZhbHVlX3ldKXtcclxuICAgICAgIC8qICBsZXQgW3gseV0gPSBbMSwnYSddOyAgKi9cclxuICAgICAgICBzd2l0Y2goYWxmX3kuaW5jbHVkZXModmFsdWVfeS50b0xvd2VyQ2FzZSgpKSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHRydWU6e1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGFsZl95LmluZGV4T2YodmFsdWVfeS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWyB2YWx1ZV94LTEsIGluZGV4IF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gYXNzaWduTG9jYXRpb24oW3gseV0sZGlyZWN0aW9uLGtleSl7XHJcbmxldCBhcnJheU9mQ29vcmRpbmF0ZXMgPSBbXTtcclxubGV0IGluaXRpYWxYID0geDtcclxubGV0IGluaXRpYWxZID0gYWxmX3kuaW5kZXhPZih5LnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgc3dpdGNoKGRpcmVjdGlvbj09PSdsZWZ0LXRvLXJpZ2h0Jyl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgIGlmKGFsZl95LmluZGV4T2YoeS50b0xvd2VyQ2FzZSgpKSArIGtleSA+IGNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICBmb3IgKCBsZXQgaT0gMDsgaSA8IGtleTsgKytpICl7XHJcbiAgICAgICAgICAgICAgICBhcnJheU9mQ29vcmRpbmF0ZXMucHVzaChbIHgsIGFsZl95W2luaXRpYWxZICsgaV0gXSk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uPT09J3RvcC10by1kb3duJyl7XHJcbiAgICAgICAgICAgIGNhc2UgdHJ1ZTpcclxuICAgICAgICAgICAgICAgIGlmKGluaXRpYWxYICsga2V5LTEgPiByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgZm9yICggbGV0IGk9IDA7IGkgPCBrZXk7ICsraSApe1xyXG4gICAgICAgICAgICAgICAgICAgIGFycmF5T2ZDb29yZGluYXRlcy5wdXNoKFsgaW5pdGlhbFggKyBpLCB5IF0pO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlPZkNvb3JkaW5hdGVzO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0Nvb3JkaW5hdGVzKFt4LHldKXtcclxuICAgIGlmKHggPiAwICYmIHggPD0gcm93cyAmJiBhbGZfeS5pbmNsdWRlcyh5LnRvTG93ZXJDYXNlKCkpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmcm9tQ2VsbHRvQ29vcmRpbmF0ZXMocm93LGNvbHVtbil7XHJcbiAgLyogICBsZXQgW3gseV0gPSBbMSwnYSddOyAgICAgKi9cclxuICAgIHJldHVybiBbIHJvdyArIDEsIGFsZl95W2NvbHVtbl0gXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZnJvbUNvb3JkaW5hdGVzdG9DZWxsKGNvb3JkKXtcclxuICAgLyogIGxldCBbcm93LGNvbHVtbl0gPSBbMCwwXTsgKi9cclxuICAgIGxldCByb3dTZWxlY3RlZCA9IGNvb3JkWzBdLTE7XHJcbiAgICBsZXQgY29sdW1uU2VsZWN0ZWQgPSBhbGZfeS5pbmRleE9mKGNvb3JkWzFdLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHJldHVybiBbTnVtYmVyKHJvd1NlbGVjdGVkKSwgTnVtYmVyKGNvbHVtblNlbGVjdGVkKV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFsbENvb3JkaW5hdGVzUG9zaWJsZXMoKSB7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBhcnJheS5wdXNoKGAke2krMX0sJHthbGZfeVtqXX1gKTtcclxuICAgIH19XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCl7XHJcbiAgICBsZXQgYXJyYXkgPSBbXTtcclxuICAgIGxldCBuPSAtMTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2x1bW5zOyBqKyspIHtcclxuICAgICAgICBuID0gbiArIDE7XHJcbiAgICAgICAgYXJyYXkucHVzaChbbixbYCR7aSsxfSwke2FsZl95W2pdfWBdXSk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG59XHJcblxyXG5leHBvcnQgeyByb3dzLCBjb2x1bW5zLCBhbGZfeSwgc2hpZnRDb29yZGluYXRlcywgYXNzaWduTG9jYXRpb24sIFxyXG4gICAgY2hlY2tDb29yZGluYXRlcywgZnJvbUNlbGx0b0Nvb3JkaW5hdGVzLCBhbGxDb29yZGluYXRlc1Bvc2libGVzLFxyXG4gICAgICAgIGZyb21Db29yZGluYXRlc3RvQ2VsbCwgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfTsiLCJmdW5jdGlvbiBkZWxldGVFcnJvck1lc3NhZ2VzKCkge1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lcnJvcicpO1xyXG4gICAgLyogcGFyYSBjcmVhciB1biBhcnJheSBkZXNkZSBlbCBOb2RlTGlzdCAqL1xyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlc0FycmF5ID0gWy4uLmVycm9yTWVzc2FnZXNdO1xyXG4gICAgY29uc3QgaXRlcmF0b3IgPSBlcnJvck1lc3NhZ2VzQXJyYXkuZW50cmllcygpO1xyXG4gICAgZXJyb3JNZXNzYWdlc0FycmF5LmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAvKiAgIGNvbnNvbGUubG9nKGluZGV4WzBdKTtcclxuICAgICAgICAgY29uc29sZS5sb2coaW5kZXhbMV0pOyAqL1xyXG4gICAgICBsZXQgeCA9IGluZGV4WzFdOyAgLyogcGFyYSBsZWVyIGVsIG5vZGUgZGVudHJvIGRlbCBub2RlTGlzdCAqL1xyXG4gICAgICB4LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeCk7XHJcbiAgICB9KTtcclxufVxyXG5leHBvcnQgeyBkZWxldGVFcnJvck1lc3NhZ2VzIH07IiwiaW1wb3J0IHthbGxDb29yZGluYXRlc1Bvc2libGVzfSBmcm9tICcuL2F1eGlsaWFyeS1mdW5jdGlvbnMnIDtcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbVNoaXBzKGFyZzEpe1xyXG4gICAgLyogYXJnMSBpcyB0aGUgcGxheWVyR2FtZWJvYXJkIGFyZzIgaXMgdGhlIGFycmF5IHdpdGggbGVuZ3RoKi9cclxuICAgXHJcbiAgIGNvbnN0IHNoaXBMZW5ndGg9WzUsMyw0LDYsNCw1XTtcclxuICAgY29uc3QgYXJyYXlEaXJlY3Rpb24gPSBbJ2xlZnQtdG8tcmlnaHQnLCd0b3AtdG8tZG93biddO1xyXG4gICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xyXG4gICBcclxuXHJcbiAgIGZvciAoIGxldCBpPTA7IGkgPCBzaGlwTGVuZ3RoLmxlbmd0aDsgKytpKXtcclxuICAgIGxldCBzaGlwID0gbnVsbDsgXHJcblxyXG4gICAgd2hpbGUoc2hpcD09PW51bGwpe1xyXG4gICAgbGV0IG51bWJlciA9IHJhbmRvbUludEZyb21JbnRlcnZhbCgxLHRvdGFsQ2VsbHMubGVuZ3RoKTtcclxuICAgIGxldCBjb29yZCA9ICB0b3RhbENlbGxzW251bWJlci0xXS5zcGxpdCgnLCcpO1xyXG4gICAgY29vcmQgPSBbTnVtYmVyKGNvb3JkWzBdKSxjb29yZFsxXV07XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gYXJyYXlEaXJlY3Rpb25bcmFuZG9tSW50RnJvbUludGVydmFsKDEsMiktMV07XHJcbiAgICBzaGlwID0gYXJnMS5kYXRhU2hpcHMoY29vcmQsZGlyZWN0aW9uLHNoaXBMZW5ndGhbaV0saSsxKTtcclxuICAgIH1cclxuICAgIGFyZzEucGxhY2VTaGlwc0luVGhlQm9hcmQoIHNoaXAgKTtcclxuXHJcbiAgIH1cclxuXHJcbnJldHVybiBhcmcxO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZXMoKXtcclxuICBjb25zdCB0b3RhbENlbGxzID0gYWxsQ29vcmRpbmF0ZXNQb3NpYmxlcygpO1xyXG4gIGxldCBudW1iZXIgPSByYW5kb21JbnRGcm9tSW50ZXJ2YWwoMSx0b3RhbENlbGxzLmxlbmd0aCk7XHJcbiAgICBsZXQgY29vcmQgPSAgdG90YWxDZWxsc1tudW1iZXItMV0uc3BsaXQoJywnKTtcclxuICAgIGNvb3JkID0gW051bWJlcihjb29yZFswXSksY29vcmRbMV1dO1xyXG4gIHJldHVybiBjb29yZDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSW50RnJvbUludGVydmFsKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XHJcbiAgfVxyXG5cclxuZXhwb3J0IHtyYW5kb21TaGlwcywgcmFuZG9tQ29vcmRpbmF0ZXN9OyIsImZ1bmN0aW9uIHNjb3JlQm9hcmQoYXJnMSxhcmcyLGFyZzMpe1xyXG4gICAgLyogYXJnMSBpcyB0aGUgYm9hcmQgZGl2LCBhcmcyIGlzIHRoZSBodW1hbiBwbGF5ZXIgb2JqZWN0LCBhcmczIGlzIHRoZSBjb21wdXRlciBwbGF5ZXIgb2JqZWN0ICovXHJcblxyXG5jb25zdCBnYW1lQ29udGFpbmVyID0gYXJnMS5wYXJlbnRFbGVtZW50O1xyXG5jb25zdCBwbGF5ZXJIdW1hbiA9IGFyZzI7XHJcbmNvbnN0IHBsYXllckNvbXB1dGVyID0gYXJnMztcclxuY29uc3Qgc2NvcmVCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FzaWRlJyk7XHJcbmNvbnN0IGh1bWFuU2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgY29tcHV0ZXJTY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuc2NvcmVCb2FyZERpdi5jbGFzc0xpc3QuYWRkKCdzY29yZUJvYXJkJyk7XHJcbmh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OiAxLzI7Jyk7XHJcbmh1bWFuU2NvcmUuc2V0QXR0cmlidXRlKCdpZCcsJ2h1bWFuLXNjb3JlJyk7XHJcbmh1bWFuU2NvcmUuY2xhc3NMaXN0LmFkZCgnc2NvcmUnKTtcclxuY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6IDIvMzsnKTtcclxuY29tcHV0ZXJTY29yZS5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXItc2NvcmUnKTtcclxuY29tcHV0ZXJTY29yZS5jbGFzc0xpc3QuYWRkKCdzY29yZScpO1xyXG5cclxuY29uc3QgaHVtYW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuaHVtYW5UaXRsZS50ZXh0Q29udGVudCA9ICdDT01QVVRFUiBhdHRhY2tzJzsgIC8qIGluIHRoZSBodW1hbiBib2FyZCAqL1xyXG5odW1hblRpdGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdncmlkLXJvdzoxLzI7Z3JpZC1jb2x1bW46MS8zOycpO1xyXG5odW1hblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Njb3JlVGl0bGUnKTtcclxuXHJcbmNvbnN0IHN1Y2Nlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbnN1Y2Nlc3Muc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjIvMztncmlkLWNvbHVtbjoxLzM7Jyk7XHJcbmxldCByYXRlID0gMDsgLyogaW5pY2lhIGVuIDAgKi9cclxuc3VjY2Vzcy50ZXh0Q29udGVudCA9IGBzdWNjZXNzIHJhdGU6ICR7cmF0ZX0lYDsgXHJcblxyXG5jb25zdCBpbWdIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDEuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDEuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDIuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDIuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0gzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdIMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDMuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNIMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDMuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMl1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDQuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDQuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bM11bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDUuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDUuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdINiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0g2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdINi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nSDYuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNINi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzSDYuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVySHVtYW5bJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJIdW1hblsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5cclxuXHJcbmNvbnN0IGNvbXB1dGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbmNvbXB1dGVyVGl0bGUudGV4dENvbnRlbnQgPSAnSFVNQU4gYXR0YWNrcyc7ICAvKiBpbiB0aGUgYm9hcmQgY29tcHV0ZXIgKi9cclxuY29tcHV0ZXJUaXRsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6MS8yO2dyaWQtY29sdW1uOjEvMzsnKTtcclxuY29tcHV0ZXJUaXRsZS5jbGFzc0xpc3QuYWRkKCdzY29yZVRpdGxlJyk7XHJcblxyXG5jb25zdCBzdWNjZXNzQ29tcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuc3VjY2Vzc0NvbXAuc2V0QXR0cmlidXRlKCdzdHlsZScsJ2dyaWQtcm93OjIvMztncmlkLWNvbHVtbjoxLzM7Jyk7XHJcbmxldCByYXRlQ29tcCA9IDA7IC8qIGluaWNpYSBlbiAwICovXHJcbnN1Y2Nlc3NDb21wLnRleHRDb250ZW50ID0gYHN1Y2Nlc3MgcmF0ZTogJHtyYXRlQ29tcH0lYDsgXHJcblxyXG5jb25zdCBpbWdDMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzEuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDMS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6My80O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzEuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzBdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0MyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzIuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NC81O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzIuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzFdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0MzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzMuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6NS82O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzMuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzJdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bMl1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0M0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDNC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzQuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDNC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ni83O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzQuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzNdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bM11bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0M1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDNS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzUuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDNS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6Ny84O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzUuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzRdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNF1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5jb25zdCBpbWdDNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BpY3R1cmUnKTtcclxuY29uc3QgaGl0c0M2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5pbWdDNi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjEvMjsnKTtcclxuaW1nQzYuY2xhc3NMaXN0LmFkZCgnc2hpcEZsb2F0Jyk7XHJcbmhpdHNDNi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywnZ3JpZC1yb3c6OC85O2dyaWQtY29sdW1uOjIvMztmb250LXNpemU6MTJweDtwYWRkaW5nLWxlZnQ6M3B4O3RleHQtYWxpZ246Y2VudGVyOycpO1xyXG5oaXRzQzYuaW5uZXJUZXh0ID0gYEhJVFM6ICR7cGxheWVyQ29tcHV0ZXJbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddWzVdWydzaGlwRGV0YWlscyddWydudW1iZXJPZkhpdHMnXX0gXHJcbiAgICAgICAgICAgICAgICAgICAgT0YgJHtwbGF5ZXJDb21wdXRlclsnZ2FtZWJvYXJkJ11bJ2FsbFNoaXBzJ11bNV1bJ3NoaXBEZXRhaWxzJ11bJ2xlbmd0aCddfWA7XHJcblxyXG5nYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjb3JlQm9hcmREaXYpO1xyXG5zY29yZUJvYXJkRGl2LmFwcGVuZENoaWxkKGh1bWFuU2NvcmUpO1xyXG5zY29yZUJvYXJkRGl2LmFwcGVuZENoaWxkKGNvbXB1dGVyU2NvcmUpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGh1bWFuVGl0bGUpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKHN1Y2Nlc3MpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gxKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDEpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gyKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDIpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0gzKTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDMpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g0KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDQpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g1KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDUpO1xyXG5odW1hblNjb3JlLmFwcGVuZENoaWxkKGltZ0g2KTtcclxuaHVtYW5TY29yZS5hcHBlbmRDaGlsZChoaXRzSDYpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKGNvbXB1dGVyVGl0bGUpO1xyXG5jb21wdXRlclNjb3JlLmFwcGVuZENoaWxkKHN1Y2Nlc3NDb21wKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MxKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMik7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MyKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDMyk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0MzKTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNCk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M0KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNSk7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M1KTtcclxuY29tcHV0ZXJTY29yZS5hcHBlbmRDaGlsZChpbWdDNik7XHJcbmNvbXB1dGVyU2NvcmUuYXBwZW5kQ2hpbGQoaGl0c0M2KTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQge3Njb3JlQm9hcmR9OyIsImZ1bmN0aW9uIHNob3dFcnJvcihhcmcxLGFyZzIpe1xyXG4vLyBhcmcxIGlzIHRoZSBkaXYgLSBhcmcyIGlzIHRoZSBtZXNzYWdlIGZvciB0aGUgdHlwZSBvZiBlcnJvclxyXG4gICAgICBsZXQgaWQgPSBhcmcxLmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgIFxyXG4gICAgICAgY29uc3QgaW5wdXRFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcclxuICAgICAgIGlucHV0RXJyb3IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSgnaWQnLGAke2lkfWVycm9yYCk7XHJcbiAgICAgICBpbnB1dEVycm9yLnNldEF0dHJpYnV0ZSggJ2FyaWEtbGl2ZScsJ3BvbGl0ZScpO1xyXG4gICAgICAgaW5wdXRFcnJvci50ZXh0Q29udGVudCA9IGFyZzI7XHJcbiAgICBcclxuICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBhcmcxLnBhcmVudE5vZGU7XHJcbiAgICAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGlucHV0RXJyb3IpOyAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBzaG93RXJyb3IgfTsiLCJpbXBvcnQgeyByZWxhdGlvbkNvb3JkVnNOb2RlTGlzdCB9IGZyb20gXCIuL2F1eGlsaWFyeS1mdW5jdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNlbGxzQ29tcHV0ZXJCb2FyZChhcmcxLGFyZzIsYXJnMyl7XHJcbiAgIFxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pIHBhcmEgbGVlciBlbCBub2RlIGRlbnRybyBkZWwgbm9kZUxpc3QgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICBcclxuICAgICAvKiAgICB4LnRleHRDb250ZW50ID0gYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlOyAqL1xyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXtcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7IFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbmxldCBhcnJheVNoaXBzID0gW107XHJcbiAgICBpZihhcmczICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGFycmF5U2hpcHMgPSBhcmczWydnYW1lYm9hcmQnXVsnYWxsU2hpcHMnXTtcclxuICAgIH1cclxuXHJcbmxldCBjb29yZFNoaXBzU3VuayA9IFtdO1xyXG5cclxuYXJyYXlTaGlwcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICBzd2l0Y2goZWxlbWVudFsnc2hpcERldGFpbHMnXVsnYmVlblN1bmsnXSl7XHJcbiAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICBlbGVtZW50Wydjb29yZGluYXRlcyddLmZvckVhY2goICh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZFNoaXBzU3Vuay5wdXNoKHgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGZhbHNlOlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxufSk7XHJcblxyXG5sZXQgYXJyYXlJbmRleE5vZGVBbmRDb29yZCA9IHJlbGF0aW9uQ29vcmRWc05vZGVMaXN0KCk7XHJcbmxldCBpbmRleGVzU3Vua3MgPSBbXTtcclxuY29vcmRTaGlwc1N1bmsuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgIGFycmF5SW5kZXhOb2RlQW5kQ29vcmQuZm9yRWFjaCgoeCk9PntcclxuICAgICAgICBpZih4WzFdWzBdPT09ZWxlbWVudCl7XHJcbiAgICAgICAgICAgIGluZGV4ZXNTdW5rcy5wdXNoKHhbMF0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcblxyXG5pbmRleGVzU3Vua3MuZm9yRWFjaCgoZWxlbWVudCk9PntcclxuICAgbGV0IGNlbGwgPSBjZWxsc2luQm9hcmRbZWxlbWVudF07XHJcbiAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbFN1bmsnKTtcclxuICAgY2VsbC50ZXh0Q29udGVudCA9ICdTVU5LJztcclxufSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlaW5pdGlhbGl6ZUZvcm1hdENlbGxzQ29tcEJvYXJkKGFyZyl7XHJcbi8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG5sZXQgYm9hcmREaXYgPSBhcmc7XHJcbmxldCBhcnJheUNlbGxzID0gYm9hcmREaXYucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcclxuY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG5jb25zdCBpdGVyYXRvciA9IGNlbGxzaW5Cb2FyZC5lbnRyaWVzKCk7XHJcblxyXG5jZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gaXRlcmF0b3IubmV4dCgpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gIHguY2xhc3NOYW1lID0gJyc7ICAgICAgIC8vIHRvIGNsZWFyIHByZXZpb3VzIGNsYXNzXHJcbiAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG59KVxyXG59IFxyXG5cclxuXHJcbmV4cG9ydCB7dXBkYXRlQ2VsbHNDb21wdXRlckJvYXJkLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc0NvbXBCb2FyZH07IiwiaW1wb3J0IHsgcmVsYXRpb25Db29yZFZzTm9kZUxpc3QgfSBmcm9tIFwiLi9hdXhpbGlhcnktZnVuY3Rpb25zXCI7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDZWxscyhhcmcxLGFyZzIsYXJnMyl7XHJcblxyXG4gICAgbGV0IGJvYXJkRGl2ID0gYXJnMTtcclxuICAgIGxldCBib2FyZENvbnRlbnQgPSBhcmcyO1xyXG4gICAgbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG5cclxuICAgIGNvbnN0IGNlbGxzaW5Cb2FyZCA9IFsuLi5hcnJheUNlbGxzXTtcclxuICAgIGNvbnN0IGl0ZXJhdG9yID0gY2VsbHNpbkJvYXJkLmVudHJpZXMoKTtcclxuICAgIFxyXG4gICAgY2VsbHNpbkJvYXJkLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICBsZXQgaW5kZXggPSBpdGVyYXRvci5uZXh0KCkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogKGluZGV4WzBdKSAoaW5kZXhbMV0pOyAgKi9cclxuICAgICAgbGV0IHggPSBpbmRleFsxXTsgICAgICAgICAvKiBwYXJhIGxlZXIgZWwgbm9kZSBkZW50cm8gZGVsIG5vZGVMaXN0ICovXHJcbiAgICAgIFxyXG4gICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT0xKXsgICBcclxuICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsU2hpcEFkZGVkJyk7XHJcbiAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gYFNISVBgO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxyXG4gICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB4LnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYm9hcmRDb250ZW50W3guZGF0YXNldC5yb3ddW3guZGF0YXNldC5jb2x1bW5dLnZhbHVlPT09Mil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGxNaXNzZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgudGV4dENvbnRlbnQgPSBgd2F0ZXJgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChib2FyZENvbnRlbnRbeC5kYXRhc2V0LnJvd11beC5kYXRhc2V0LmNvbHVtbl0udmFsdWU9PT01KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5jbGFzc0xpc3QuYWRkKCdjZWxsSGl0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC50ZXh0Q29udGVudCA9IGBISVRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGFycmF5U2hpcHMgPSBbXTtcclxuICAgIGlmKGFyZzMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgYXJyYXlTaGlwcyA9IGFyZzNbJ2dhbWVib2FyZCddWydhbGxTaGlwcyddO1xyXG4gICAgfVxyXG5cclxubGV0IGNvb3JkU2hpcHNTdW5rID0gW107XHJcblxyXG5hcnJheVNoaXBzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIHN3aXRjaChlbGVtZW50WydzaGlwRGV0YWlscyddWydiZWVuU3VuayddKXtcclxuICAgICAgICBjYXNlIHRydWU6XHJcbiAgICAgICAgICAgIGVsZW1lbnRbJ2Nvb3JkaW5hdGVzJ10uZm9yRWFjaCggKHgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvb3JkU2hpcHNTdW5rLnB1c2goeCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZmFsc2U6XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbmxldCBhcnJheUluZGV4Tm9kZUFuZENvb3JkID0gcmVsYXRpb25Db29yZFZzTm9kZUxpc3QoKTtcclxubGV0IGluZGV4ZXNTdW5rcyA9IFtdO1xyXG5jb29yZFNoaXBzU3Vuay5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICAgYXJyYXlJbmRleE5vZGVBbmRDb29yZC5mb3JFYWNoKCh4KT0+e1xyXG4gICAgICAgIGlmKHhbMV1bMF09PT1lbGVtZW50KXtcclxuICAgICAgICAgICAgaW5kZXhlc1N1bmtzLnB1c2goeFswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuXHJcbmluZGV4ZXNTdW5rcy5mb3JFYWNoKChlbGVtZW50KT0+e1xyXG4gICBjb25zb2xlLmxvZyhjZWxsc2luQm9hcmRbZWxlbWVudF0pO1xyXG4gICBsZXQgY2VsbCA9IGNlbGxzaW5Cb2FyZFtlbGVtZW50XTtcclxuICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsU3VuaycpO1xyXG4gICBjZWxsLnRleHRDb250ZW50ID0gJ1NVTksnO1xyXG59KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVpbml0aWFsaXplRm9ybWF0Q2VsbHMoYXJnKXtcclxuIC8qIGFyZyBpcyB0aGUgZGl2IHdpdGggdGhlIGJ1dHRvbiBjZWxscyAqL1xyXG4gbGV0IGJvYXJkRGl2ID0gYXJnO1xyXG4gbGV0IGFycmF5Q2VsbHMgPSBib2FyZERpdi5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xyXG4gY29uc3QgY2VsbHNpbkJvYXJkID0gWy4uLmFycmF5Q2VsbHNdO1xyXG4gY29uc3QgaXRlcmF0b3IgPSBjZWxsc2luQm9hcmQuZW50cmllcygpO1xyXG4gXHJcbiBjZWxsc2luQm9hcmQuZm9yRWFjaCgoKSA9PiB7XHJcbiAgIGxldCBpbmRleCA9IGl0ZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiAoaW5kZXhbMF0pIChpbmRleFsxXSk7ICAqL1xyXG4gICBsZXQgeCA9IGluZGV4WzFdOyAgICAgICAgIFxyXG4gICB4LmNsYXNzTmFtZSA9ICcnOyAgICAgICAvLyB0byBjbGVhciBwcmV2aW91cyBjbGFzc1xyXG4gICB4LmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcclxuICAgeC50ZXh0Q29udGVudCA9ICcnO1xyXG4gfSlcclxufSBcclxuXHJcblxyXG5leHBvcnQge3VwZGF0ZUNlbGxzLCByZWluaXRpYWxpemVGb3JtYXRDZWxsc307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
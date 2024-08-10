import { gameController } from './game-controller';
import { rows, columns, fromCoordinatestoCell } from './auxiliary-functions';
import { createContainers } from './create-container';
import { addShips } from './add-ships';
import { randomCoordinates } from './random-ships';
import { updateCells } from './update';
import { updateCellsComputerBoard } from './update-computer-board';
import { showError } from './show-error';
import { deleteErrorMessages } from './delete-div-error';

function screenController(arg) {
    /* arg is the game container */

    const game = gameController();

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

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
            // Anything clickable should be a button!!
            const cellButton = document.createElement("button");
            cellButton.classList.add("cell");
            // Create a data attribute to identify the column
            cellButton.dataset.row = i;
            cellButton.dataset.column = j; 
            humanBoard.appendChild(cellButton);
        }}

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
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
        
        updateCells(humanBoard,boardReal,playerHuman);
        updateCellsComputerBoard(computerBoard,boardComputer,playerComputer);

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
        createContainers(turn);
      });
    
    addShipsButton.addEventListener("click", () => {
        addShips(game,humanBoard,boardDiv,turn,computerBoard,playerComputer);
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
                showError(waitTurn,'wait your turn'.toUpperCase());
                setTimeout(deleteErrorMessages,800);
                break;
            }   
        }
        computerBoard.addEventListener('click', clickHandlerBoard);

        // Add a message to avoid click in human board
        function noFireToFriend(e){
            showError(waitTurn,'BE CAREFUL. don\'t shoot your allies'.toUpperCase());
            setTimeout(deleteErrorMessages,1000);
        }
        humanBoard.addEventListener('click',noFireToFriend);

        // Add a function for the computer attack
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
            window.location.assign("https://manelly67.github.io/TheOdinProject-Battleship/")
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

export {screenController}
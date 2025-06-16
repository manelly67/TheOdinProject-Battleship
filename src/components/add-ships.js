import { rows, columns, alf_y } from "./auxiliary-functions";
import { updateCells } from "./update";
import { updateCellsComputerBoard } from "./update-computer-board";
import { showError } from "./show-error";
import { deleteErrorMessages } from "./delete-div-error";
import { randomShips } from "./random-ships";
import { scoreBoard } from "./score-board.js";

function addShips(arg1, arg2, arg3, arg4, arg5, arg6) {
  /* arg is the game  arg2 is the div with the humanboard  
    arg3 to show the options arg4 to show random button
    arg5 is the div with the computerboard arg6 is the content computer board*/
  const game = arg1;
  const humanBoard = arg2;
  const playerHuman = game.getActivePlayer();
  const computerBoard = arg5;
  const playerComputer = arg6;

  // headers for the rows and columns of the human player board
  const divColumnsHead = document.createElement("div");
  divColumnsHead.classList.add("columnsHead");
  for (let j = 0; j < columns; j++) {
    const cellHead = document.createElement("div");
    cellHead.classList.add("headCell");
    cellHead.textContent = alf_y[j].toUpperCase();
    divColumnsHead.appendChild(cellHead);
  }
  arg2.appendChild(divColumnsHead);

  const divRowsHead = document.createElement("div");
  divRowsHead.classList.add("rowsHead");
  for (let i = 0; i < rows; i++) {
    const cellHead = document.createElement("div");
    cellHead.classList.add("headCell");
    cellHead.textContent = i + 1;
    divRowsHead.appendChild(cellHead);
  }
  arg2.appendChild(divRowsHead);

  // div for add the ships in the board
  const grid = document.getElementById("gridForAdd");
  grid.classList.add("gridForAdd");
  const divForError = document.createElement("div");
  divForError.setAttribute("id", "divForError");
  divForError.setAttribute("style", "grid-row: 1 / 2; grid-column: 4 / 5;");

  const shipLength = [5, 3, 4, 6, 4, 5];

  for (let i = 1; i <= shipLength.length; ++i) {
    const form = document.createElement("form");
    form.setAttribute("id", `form${i}`);
    form.classList.add("formInput");
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("id", `submit${i}`);
    submitButton.textContent = `ADD N° ${i}`;
    submitButton.classList.add("submitButton");
    submitButton.classList.add("addShipButton");
    const title = document.createElement("div");
    title.setAttribute("style", "text-transform: uppercase;");
    const text = document.createElement("p");
    text.setAttribute(
      "style",
      "color:green; background-color:white; font-weight: 900; display:flex; justify-content: right;"
    );
    text.innerText = `${shipLength[i - 1]} squares longitude`;

    const radioDiv = document.createElement("div");
    radioDiv.classList.add("formRadio");
    const directionInput = document.createElement("div");
    const labelForHorizontal = document.createElement("label");
    const horizontally = document.createElement("input");
    const labelForVertical = document.createElement("label");
    const vertically = document.createElement("input");
    directionInput.setAttribute(
      "style",
      "display: flex; justify-content: center; font-size: 12px"
    );
    labelForHorizontal.innerText = "left-to-right";
    labelForHorizontal.setAttribute("for", "left-to-right");
    labelForVertical.innerText = "top-to-down";
    labelForVertical.setAttribute("for", "top-to-down");
    horizontally.setAttribute("type", "radio");
    horizontally.setAttribute("id", "left-to-right");
    horizontally.setAttribute("name", "direction");
    horizontally.setAttribute("value", "left-to-right");
    vertically.setAttribute("type", "radio");
    vertically.setAttribute("id", "top-to-down");
    vertically.setAttribute("value", "top-to-down");
    vertically.setAttribute("name", "direction");

    const coordRow = document.createElement("div");
    coordRow.innerText = "ROW: ";
    const coordColumn = document.createElement("div");
    coordColumn.innerText = "COLUMN: ";

    for (let i = 0; i < rows; ++i) {
      const rowLabel = document.createElement("label");
      const inputRow = document.createElement("input");
      rowLabel.innerText = i + 1;
      rowLabel.setAttribute("for", `row${i + 1}`);
      inputRow.setAttribute("type", "radio");
      inputRow.setAttribute("id", `row${i + 1}`);
      inputRow.setAttribute("name", "rowSelected");
      inputRow.setAttribute("value", i + 1);

      coordRow.appendChild(rowLabel);
      coordRow.appendChild(inputRow);
    }

    for (let j = 0; j < columns; ++j) {
      const columnLabel = document.createElement("label");
      const inputColumn = document.createElement("input");
      columnLabel.innerText = alf_y[j].toUpperCase();
      columnLabel.setAttribute("for", `column${alf_y[j]}`);
      inputColumn.setAttribute("type", "radio");
      inputColumn.setAttribute("id", `column${alf_y[j]}`);
      inputColumn.setAttribute("name", "columnSelected");
      inputColumn.setAttribute("value", alf_y[j]);

      coordColumn.appendChild(columnLabel);
      coordColumn.appendChild(inputColumn);
    }

    horizontally.addEventListener("change", () => {
      deleteErrorMessages();
    });

    vertically.addEventListener("change", () => {
      deleteErrorMessages();
    });

    let directionSelected = "";
    function directionRadioValue() {
      let getSelectedValue = document.querySelector(
        'input[name="direction"]:checked'
      );

      if (getSelectedValue != null) {
        directionSelected = getSelectedValue.value;
      } else {
        showError(radioDiv, "must select direction".toUpperCase());
      }

      return directionSelected;
    }

    let rowSelected = "";
    function rowRadioValue() {
      let getSelectedValue = document.querySelector(
        'input[name="rowSelected"]:checked'
      );

      if (getSelectedValue != null) {
        rowSelected = getSelectedValue.value;
      } else {
        rowSelected = 1;
      }

      return rowSelected;
    }

    let columnSelected = "";
    function columnRadioValue() {
      let getSelectedValue = document.querySelector(
        'input[name="columnSelected"]:checked'
      );

      if (getSelectedValue != null) {
        columnSelected = getSelectedValue.value;
      } else {
        columnSelected = "a";
      }

      return columnSelected;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      deleteErrorMessages();

      let size = shipLength[i - 1];

      let shipNumber = i;

      let direction = directionRadioValue();

      let rowSelected = rowRadioValue();

      let columnSelected = columnRadioValue();

      let coord = [Number(rowSelected), columnSelected];

      let ship = playerHuman["gameboard"].dataShips(
        coord,
        direction,
        size,
        shipNumber
      );

      if (ship !== null) {
        deleteErrorMessages();
        let newBoard = playerHuman["gameboard"].placeShipsInTheBoard(ship);
        updateCells(humanBoard, newBoard);
        const submitReady = document.getElementById(`form${i}`);
        submitReady.remove();

        if (document.querySelectorAll(".formInput").length === 0) {
          removeAllAddShipsDiv(grid, divForRandom, divColumnsHead, divRowsHead);
          randomShipsForComputerPlayer(
            computerBoard,
            shipLength,
            playerComputer
          );
          scoreBoard(arg3, playerHuman, playerComputer);
        }
      } else {
        showError(divForError, "SELECT ANOTHER LOCATION");
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

  const divForRandom = document.createElement("div");
  divForRandom.innerText = "➥ ";
  divForRandom.classList.add("randomships");
  const buttonRandom = document.createElement("button");
  buttonRandom.innerText = "RANDOM FLEET";
  buttonRandom.classList.add("addShipButton");

  buttonRandom.addEventListener("click", () => {
    deleteErrorMessages();
    playerHuman["gameboard"]["allShips"] = [];
    playerHuman["gameboard"].initializeBoard();
    updateCells(humanBoard, playerHuman["gameboard"]["board"]);
    randomShips(playerHuman["gameboard"], shipLength);
    updateCells(humanBoard, playerHuman["gameboard"]["board"]);
    removeAllAddShipsDiv(grid, divForRandom, divColumnsHead, divRowsHead);
    randomShipsForComputerPlayer(computerBoard, shipLength, playerComputer);
    scoreBoard(arg3, playerHuman, playerComputer);
  });

  arg4.appendChild(divForRandom);
  arg4.appendChild(divForError);
  divForRandom.appendChild(buttonRandom);
}

function removeAllAddShipsDiv(arg1, arg2, arg3, arg4) {
  // all the arguments are the divs to will be removed
  arg1.remove();
  arg2.remove();
  arg3.remove();
  arg4.remove();
}

function randomShipsForComputerPlayer(arg1, arg2, arg3) {
  /*  arg1 is the div to write the head */
  const computerBoard = arg1;
  const shipLength = arg2;
  const playerComputer = arg3;

  computerBoard.classList.remove("hide");
  computerBoard.classList.add("board-computer");

  const headComputer = document.createElement("div");
  headComputer.innerText =
    "this is your enemy ".toUpperCase() + " Click To Attack";
  headComputer.classList.add("headComputer");
  arg1.appendChild(headComputer);

  playerComputer["gameboard"].initializeBoard();
  updateCells(computerBoard, playerComputer["gameboard"]["board"]);
  randomShips(playerComputer["gameboard"], shipLength);
  updateCellsComputerBoard(computerBoard, playerComputer["gameboard"]["board"]);
}

export { addShips };

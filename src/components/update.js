import { relationCoordVsNodeList } from "./auxiliary-functions";

function updateCells(arg1, arg2, arg3) {
  let boardDiv = arg1;
  let boardContent = arg2;
  let arrayCells = boardDiv.querySelectorAll("button");

  const cellsinBoard = [...arrayCells];
  const iterator = cellsinBoard.entries();

  cellsinBoard.forEach(() => {
    let index = iterator.next().value;
    /* (index[0]) (index[1]);  */
    let x = index[1]; /* para leer el node dentro del nodeList */

    switch (boardContent[x.dataset.row][x.dataset.column].value === 1) {
      case true:
        x.className = "";
        x.classList.add("cellShipAdded");
        x.textContent = `SHIP`;
        break;
      default:
        switch (boardContent[x.dataset.row][x.dataset.column].value === 0) {
          case true:
            x.className = "";
            x.classList.add("cell");
            x.textContent = "";
            break;
          default:
            switch (boardContent[x.dataset.row][x.dataset.column].value === 2) {
              case true:
                x.className = "";
                x.classList.add("cellMissed");
                x.textContent = `water`;
                break;
              default:
                switch (
                  boardContent[x.dataset.row][x.dataset.column].value === 5
                ) {
                  case true:
                    x.className = "";
                    x.classList.add("cellHit");
                    x.textContent = `HIT`;
                    break;
                  default:
                }
            }
        }
    }
  });

  let arrayShips = [];
  if (arg3 !== undefined) {
    arrayShips = arg3["gameboard"]["allShips"];
  }

  let coordShipsSunk = [];

  arrayShips.forEach((element) => {
    switch (element["shipDetails"]["beenSunk"]) {
      case true:
        element["coordinates"].forEach((x) => {
          coordShipsSunk.push(x);
        });
        break;
      case false:
        break;
    }
  });

  let arrayIndexNodeAndCoord = relationCoordVsNodeList();
  let indexesSunks = [];
  coordShipsSunk.forEach((element) => {
    arrayIndexNodeAndCoord.forEach((x) => {
      if (x[1][0] === element) {
        indexesSunks.push(x[0]);
      }
    });
  });

  indexesSunks.forEach((element) => {
    console.log(cellsinBoard[element]);
    let cell = cellsinBoard[element];
    cell.classList.add("cellSunk");
    cell.textContent = "SUNK";
  });
}

function reinitializeFormatCells(arg) {
  /* arg is the div with the button cells */
  let boardDiv = arg;
  let arrayCells = boardDiv.querySelectorAll("button");
  const cellsinBoard = [...arrayCells];
  const iterator = cellsinBoard.entries();

  cellsinBoard.forEach(() => {
    let index = iterator.next().value;
    /* (index[0]) (index[1]);  */
    let x = index[1];
    x.className = ""; // to clear previous class
    x.classList.add("cell");
    x.textContent = "";
  });
}

export { updateCells, reinitializeFormatCells };

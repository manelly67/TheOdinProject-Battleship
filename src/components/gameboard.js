import { Ship } from "./ship";
import {
  rows,
  columns,
  shiftCoordinates,
  assignLocation,
  checkCoordinates,
} from "./auxiliary-functions";

// a class Gameboard
class Gameboard {
  constructor() {
    this.board = this.getBoard(rows, columns);
    this.arrayMissed = new Set([]);
    this.arrayAllAttack = new Set([]);
    this.allShips = [];
  }

  getBoard(rows, columns, board = []) {
    for (let i = 0; i < rows; i++) {
      board[i] = [];
      for (let j = 0; j < columns; j++) {
        board[i].push(this.cell());
      }
    }
    return board;
  }

  cell() {
    let value = 0;

    return { value };
  }

  dataShips([x, y], direction, size, shipNumber) {
    let shipCoordinates = assignLocation([x, y], direction, size);

    if (shipCoordinates === null) {
      return null;
    } else {
      let notAvailable = shipCoordinates.map(
        (x) =>
          this.board[shiftCoordinates(x)[0]][shiftCoordinates(x)[1]].value === 1
      );

      if (notAvailable.includes(true)) {
        return null;
      }

      let shipCoordinatesToString = shipCoordinates.map((x) => x.toString());
      let oneShip = {
        shipNumber: shipNumber,
        shipDetails: new Ship(size),
        coordinates: shipCoordinatesToString,
      };
      this.allShips.push(oneShip);
      return oneShip;
    }
  }

  placeShipsInTheBoard(oneShip) {
    let array = oneShip["coordinates"];
    let reverseString = array.map((x) => x.split(","));
    let arrayInBoard = reverseString.map((values) => shiftCoordinates(values));
    arrayInBoard.map(([x, y]) => (this.board[x][y].value = 1));
    return this.board;
  }

  recordedAttack(
    [x, y],
    callback1 = (value) => this.recordedCoord(value),
    callback2 = (value) => this.recordedMissedCoord(value)
  ) {
    if (
      !checkCoordinates([x, y]) ||
      this.arrayAllAttack.has([x, y.toLowerCase()].toString())
    ) {
      return null;
    } else {
      let [boardX, boardY] = shiftCoordinates([x, y]);

      switch (this.board[boardX][boardY].value === 0) {
        case true:
          callback1([x, y]);
          callback2([x, y]);
          this.board[boardX][boardY].value = 2;
          return this.board;
        default:
          switch (this.board[boardX][boardY].value === 1) {
            case true: {
              callback1([x, y]);
              this.board[boardX][boardY].value = 5;
              let ship = new Ship(1);
              for (let i = 0; i < this.allShips.length; ++i) {
                if (
                  this.allShips[i]["coordinates"].includes(
                    [x, y].toString()
                  ) === true
                ) {
                  ship = this.allShips[i]["shipDetails"];
                  ship.hit();
                  this.allShips[i]["shipDetails"] = ship;
                }
              }
              return this.board;
            }
          }
      }
    }
  }

  recordedCoord(data, set = this.arrayAllAttack) {
    set.add(data.toString());
    return set;
  }

  recordedMissedCoord(data, set = this.arrayMissed) {
    set.add(data.toString());
    return set;
  }

  getTotalSunk() {
    let totalSunk = this.allShips.reduce((total, currentItem) => {
      return currentItem["shipDetails"].beenSunk === true ? total + 1 : total;
    }, 0);
    return totalSunk;
  }

  getSnapshot() {
    let message = "";
    let totalSunk = this.getTotalSunk();

    if (totalSunk === this.allShips.length) {
      message = `All ships have been sunk`;
      return message;
    } else {
      message = `Ships that have been sunk: ${totalSunk} - Ships afloat: ${
        this.allShips.length - totalSunk
      }`;
      return message;
    }
  }

  initializeBoard() {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        this.board[i][j].value = 0;
      }
    }
    return this.board;
  }
}

export { Gameboard };

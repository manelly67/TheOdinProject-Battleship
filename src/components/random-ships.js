import { allCoordinatesPosibles } from "./auxiliary-functions";

function randomShips(arg1, arg2) {
  /* arg1 is the playerGameboard arg2 is the array with length*/

  const shipLength = arg2;
  const arrayDirection = ["left-to-right", "top-to-down"];
  const totalCells = allCoordinatesPosibles();

  for (let i = 0; i < shipLength.length; ++i) {
    let ship = null;

    while (ship === null) {
      let number = randomIntFromInterval(1, totalCells.length);
      let coord = totalCells[number - 1].split(",");
      coord = [Number(coord[0]), coord[1]];
      let direction = arrayDirection[randomIntFromInterval(1, 2) - 1];
      ship = arg1.dataShips(coord, direction, shipLength[i], i + 1);
    }
    arg1.placeShipsInTheBoard(ship);
  }

  return arg1;
}

function randomCoordinates() {
  const totalCells = allCoordinatesPosibles();
  let number = randomIntFromInterval(1, totalCells.length);
  let coord = totalCells[number - 1].split(",");
  coord = [Number(coord[0]), coord[1]];
  return coord;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { randomShips, randomCoordinates };

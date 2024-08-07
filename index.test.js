import { Ship } from './src/components/ship';
import { Gameboard } from './src/components/gameboard';

test('object class Ship - hit and sunk', () => {
    let oneShip = new Ship(3);
    oneShip.hit(); oneShip.hit(); oneShip.hit();
    expect(oneShip).toEqual({length:3, numberOfHits:3, beenSunk:true});
  });

test('reading a cell value of the gameboard', () => {
    const gameboard = new Gameboard;
    const board = gameboard['board'];
    expect(board[2][3].value).toBe(0);
  });


test('get the ship coordinates and details', () => {
    const gameboard = new Gameboard;
    const oneShip = {
        'shipNumber': 1, 
        'shipDetails': {'length' : 3 , 'numberOfHits' : 0,'beenSunk': false}, 
        'coordinates': [ '2,b', '2,c', '2,d']
        }; 
    const otherShip = {
        'shipNumber': 2, 
        'shipDetails': {'length' : 4 , 'numberOfHits' : 0,'beenSunk': false}, 
        'coordinates': [ '3,b', '4,b', '5,b', '6,b']
        };  
    

    expect(gameboard.dataShips([2,'b'],'left-to-right', 3 ,1)).toEqual(oneShip);
    expect(gameboard.dataShips([3,'b'],'top-to-down', 4 ,2)).toEqual(otherShip);
    expect(gameboard.dataShips([11,'b'],'top-to-down', 4 ,2)).toBeNull();
    gameboard.placeShipsInTheBoard(oneShip);
    expect(gameboard.dataShips([2,'b'],'top-to-down', 4 ,2)).toBeNull();

  });

  test('functioning of recordedAttack', () => {
    const gameboard = new Gameboard;
    const shipOne = gameboard.dataShips([2,'b'],'left-to-right', 2 ,1);
    const shipTwo = gameboard.dataShips([3,'f'],'top-to-down', 4 ,2);
    gameboard.placeShipsInTheBoard(shipOne);
    gameboard.placeShipsInTheBoard(shipTwo);
    gameboard.recordedAttack([13,'b']);
    gameboard.recordedAttack([5,'d']);
    gameboard.recordedAttack([3,'f']);
    gameboard.recordedAttack([2,'b']);
    gameboard.recordedAttack([2,'c']);

    let arrayAllAttack = new Set([
        '13,b', '5,d', '3,f', '2,b', '2,c'
      ]);
    let arrayMissed = new Set([
        '13,b', '5,d'
      ]);
  
    expect(gameboard.arrayAllAttack).toEqual(arrayAllAttack);
    expect(gameboard.arrayMissed).toEqual(arrayMissed);
    expect(gameboard['board'][12][1].value).toBe(2);
    expect(gameboard['board'][2][5].value).toBe(5);
    expect(gameboard['allShips'][0]['shipDetails'].beenSunk).toBeTruthy();
    expect(gameboard['allShips'][1]['shipDetails'].beenSunk).toBeFalsy();
    expect(gameboard.getSnapshot()).toEqual('Ships that have been sunk: 1 - Ships afloat: 1');
    
  });
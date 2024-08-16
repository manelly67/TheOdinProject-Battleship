import { Ship } from './src/components/ship';
import { Gameboard } from './src/components/gameboard';
import { gameController} from './src/components/game-controller';
import { playerReal, boardReal } from './player-human-mocking';
import { playerComputer, boardComputer } from './player-computer-mocking';
import { adjacent } from './src/components/adjacent';

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
        'shipDetails': {'length' : 2 , 'numberOfHits' : 0,'beenSunk': false}, 
        'coordinates': [ '12,b', '13,b']
        };  
    

    expect(gameboard.dataShips([2,'b'],'left-to-right', 3 ,1)).toEqual(oneShip);
    expect(gameboard.dataShips([12,'b'],'top-to-down', 2 ,2)).toEqual(otherShip);
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
    gameboard.recordedAttack([9,'b']);
    gameboard.recordedAttack([5,'d']);
    gameboard.recordedAttack([3,'f']);
    gameboard.recordedAttack([2,'b']);
    gameboard.recordedAttack([2,'c']);

    let arrayAllAttack = new Set([
        '9,b', '5,d', '3,f', '2,b', '2,c'
      ]);
    let arrayMissed = new Set([
        '9,b', '5,d'
      ]);
  
    expect(gameboard.arrayAllAttack).toEqual(arrayAllAttack);
    expect(gameboard.arrayMissed).toEqual(arrayMissed);
    expect(gameboard['board'][8][1].value).toBe(2);
    expect(gameboard['board'][2][5].value).toBe(5);
    expect(gameboard['allShips'][0]['shipDetails'].beenSunk).toBeTruthy();
    expect(gameboard['allShips'][1]['shipDetails'].beenSunk).toBeFalsy();
    expect(gameboard.getSnapshot()).toEqual('Ships that have been sunk: 1 - Ships afloat: 1');
    
  });

  test('functioning of playRound', () => {
    // placing the ships
    const game = gameController();

    let humanShipOne = playerReal['gameboard'].dataShips([2,'b'],'left-to-right', 2 ,1);
    playerReal['gameboard'].placeShipsInTheBoard(humanShipOne);
    let humanShipTwo = playerReal['gameboard'].dataShips([3,'f'],'top-to-down', 4 ,2);
    playerReal['gameboard'].placeShipsInTheBoard(humanShipTwo);
    let computerShipOne = playerComputer['gameboard'].dataShips([5,'b'],'left-to-right', 2 ,1);
    playerReal['gameboard'].placeShipsInTheBoard(computerShipOne);
    let computerShipTwo = playerComputer['gameboard'].dataShips([9,'f'],'top-to-down', 2 ,2);
    playerReal['gameboard'].placeShipsInTheBoard(computerShipTwo);

    expect(game.getActivePlayer().type).toEqual('HUMAN Player');
    game.playRound(1,2);
    expect(boardComputer[0][0].value).toEqual(0);
    expect(boardReal[1][1].value).toEqual(1);
   
  });

  test('functioning of recordedAttack', () => {
    const gameboard = new Gameboard;
    const shipOne = gameboard.dataShips([2,'b'],'left-to-right', 2 ,1);
    const shipTwo = gameboard.dataShips([3,'f'],'top-to-down', 4 ,2);
    gameboard.placeShipsInTheBoard(shipOne);
    gameboard.placeShipsInTheBoard(shipTwo);
    gameboard.recordedAttack([9,'b']);
    gameboard.recordedAttack([5,'d']);
    gameboard.recordedAttack([3,'f']);
    gameboard.recordedAttack([2,'b']);
    gameboard.recordedAttack([2,'c']);

    let arrayAllAttack = new Set([
        '9,b', '5,d', '3,f', '2,b', '2,c'
      ]);
    let arrayMissed = new Set([
        '9,b', '5,d'
      ]);
  
    expect(gameboard.arrayAllAttack).toEqual(arrayAllAttack);
    expect(gameboard.arrayMissed).toEqual(arrayMissed);
    expect(gameboard['board'][8][1].value).toBe(2);
    expect(gameboard['board'][2][5].value).toBe(5);
    expect(gameboard['allShips'][0]['shipDetails'].beenSunk).toBeTruthy();
    expect(gameboard['allShips'][1]['shipDetails'].beenSunk).toBeFalsy();
    expect(gameboard.getSnapshot()).toEqual('Ships that have been sunk: 1 - Ships afloat: 1');
    
  });

  test('function adjacent', () => {
    let map = adjacent;
    expect(map.get(2)).toEqual([1,3,14]);
  });
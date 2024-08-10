import { Gameboard } from "./gameboard";
// a class Player
class Player {

    constructor(value){ 
        this.type = value;
        this.gameboard = this.createGameboard();
    }

    createGameboard(){
        return new Gameboard();
    }

}

export {Player};
import './style-reset.css';
import './style-base.css';
import './style-mobile.css';
import './style-tablet.css';
import './style.css';



import { screenController } from './components/screen-controller.js';

function component() { 
    
    const gameContainer = document.createElement('main');
    gameContainer.setAttribute('id','container');
    gameContainer.setAttribute('translate','no');
    screenController(gameContainer);

   
    return gameContainer;
  }
  
document.body.appendChild(component());
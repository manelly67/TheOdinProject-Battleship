import "./style-reset.css";
import "./style-base.css";
import "./style-mobile.css";
import "./style-tablet.css";
import "./style.css";
import { screenController } from "./components/screen-controller.js";


const meta = document.createElement("meta");
meta.setAttribute("name", "description");
meta.setAttribute("content", "manelly67\'s exercise study project: Battleship within the curriculum The Odin Project");

function component() {
  const gameContainer = document.createElement("main");
  gameContainer.setAttribute("id", "container");
  gameContainer.setAttribute("translate", "no");
  screenController(gameContainer);

  return gameContainer;
}

document.head.appendChild(meta);
document.body.appendChild(component());

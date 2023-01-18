import { Game } from "../../MyFramework/Game.js";
import { PlayerFactory } from "./PlayerFactory.js";
import { ScreenSize } from '../../MyFramework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);
var gameFactory = new PlayerFactory(screen);
var game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
}

animate(0);

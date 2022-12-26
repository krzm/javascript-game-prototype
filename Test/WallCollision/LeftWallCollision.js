import { Game } from '../../Framework/Game.js';
import { LeftWallCollisionFactory } from './LeftWallCollisionFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

const screen = new ScreenSize(400, 400, 1430, 700);
var gameFactory = new LeftWallCollisionFactory(screen);
var game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);
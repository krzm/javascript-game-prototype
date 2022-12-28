import { Game } from '../../Framework/Game.js';
import { RightWallCollisionFactory } from './RightWallCollisionFactory.js';
import { ScreenSize } from '../../Framework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);
const gameFactory = new RightWallCollisionFactory(screen);
const game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);
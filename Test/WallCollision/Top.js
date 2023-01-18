import { Game } from '../../MyFramework/Game.js';
import { TopFactory } from './TopFactory.js';
import { ScreenSize } from '../../MyFramework/ScreenSize.js';

const screen = new ScreenSize(300, 300, 500, 500);
const gameFactory = new TopFactory(screen);
const game = new Game(gameFactory);

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);
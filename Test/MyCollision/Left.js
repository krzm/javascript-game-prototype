import { Game2 } from '../../MyFramework/Game2.js';
import { LeftFactory } from './LeftFactory.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';
import { Menu } from './Menu.js';

new Menu().hide();
const views = new MultiCanvasData();
const game = new Game2(new LeftFactory(views));

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);
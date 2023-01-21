import { RightFactory } from './RightFactory.js';
import { Game2 } from '../../MyFramework/Game2.js';
import { MultiCanvasData } from '../../MyFramework/MultiCanvasData.js';
import { Menu } from '../../Pong/Laptop/Menu.js';

new Menu().hide(); 
const views = new MultiCanvasData();
await views.init();
const game = new Game2(new RightFactory(views));

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);
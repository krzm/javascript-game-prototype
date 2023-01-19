'using strict'

import { Game2 } from '../../MyFramework/Game2.js';
import { PongFactory2 } from './PongFactory2.js';
import { MultiCanvasData } from '../MyFramework/MultiCanvasData.js';
import { Menu } from './Laptop/Menu.js';

const me = document.querySelector('script[data-name="myDynScript"]');
const ver = me.getAttribute('ver');

if (ver === "laptop") {
  const box = document.querySelector(".box");
  const pageX = document.getElementById("x");
  const pageY = document.getElementById("y");
  const btnOverlay = document.getElementById("btn-overlay");
  const overlay = document.getElementById("overlay");

  function updateDisplay(event) {
    pageX.innerText = event.pageX;
    pageY.innerText = event.pageY;
  }

  box.addEventListener("mousemove", updateDisplay, false);
  box.addEventListener("mouseenter", updateDisplay, false);
  box.addEventListener("mouseleave", updateDisplay, false);
  btnOverlay.addEventListener("click", on, false);
  overlay.addEventListener("click", off, false);

  function on() {
    document.getElementById("overlay").style.display = "block";
  }

  function off() {
    document.getElementById("overlay").style.display = "none";
  }
}

const menu = new Menu();
menu.setGameView();
const views = new MultiCanvasData();
await views.init();
const game = new Game2(new PongFactory2(views));
const btnStart = document.getElementById('btn-start');
console.log(btnStart);
btnStart.addEventListener("click", startGame, false);
const btnReset = document.getElementById('btn-reset');
btnReset.addEventListener("click", resetGame, false);

function startGame() {
  game.ball.start();
}
function resetGame() {
  game.player1.reset();
  game.player2.reset();
  game.ball.reset();
  game.pointCount.reset();
}

function animate(timestamp) {
  game.update(timestamp);
  game.draw();
  requestAnimationFrame(animate);
};

animate(0);
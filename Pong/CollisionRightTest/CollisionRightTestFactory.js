import { Timer } from "../../Framework/Timer.js";
import { Vector2 } from "../../Framework/Vector2.js";
import { InputHandlerEmpty } from "../../Framework/InputHandlerEmpty.js";
import { InputHandler } from "../../Framework/InputHandler.js";
import { Ball } from "../../Framework/Ball/Ball.js";
import { BallPrinter } from "../../Framework/Ball/BallPrinter.js";
import { BallInputHandler } from "../../Framework/Ball/BallInputHandler.js";
import { BallInputHandler2 } from "../../Framework/Ball/BallInputHandler2.js";
import { BallRender2 } from "../../Framework/Ball/BallRender2.js";
import { WallCollision } from "../../Framework/WallCollision/WallCollision.js";
import { Player } from "../../Framework/Player/Player.js";
import { PlayerPrinter } from "../../Framework/Player/PlayerPrinter.js";
import { BallCollision } from "../../Framework/BallCollision/BallCollision.js";
import { BallCollisionPrinter } from "../../Framework/BallCollision/BallCollisionPrinter.js";
import { BallCollisionRender } from "../../Framework/BallCollision/BallCollisionRender.js";

export class CollisionRightTestFactory {
    constructor(ctx, size) {
        this.ctx = ctx;
        this.size = size;
        this.timer = new Timer();
        this.input = new InputHandler();

        this.ball = new Ball(
            this,
            new Vector2(this.size.x / 2 - 70, this.size.y / 2),
            new Vector2(40, 40),
            new Vector2(0, 0),
            new BallInputHandler2(this.input)
            , new WallCollision()
            , new BallRender2()
        );
        this.ballPrinter = new BallPrinter(this.ctx, this.ball);

        this.player2 = new Player(
            this,
            new Vector2(this.size.x / 2, this.size.y / 2),
            new Vector2(40, 200),
            new Vector2(0, 0)
            , new InputHandlerEmpty()
        );
        this.playerPrinter2 = new PlayerPrinter(this.ctx, this.player2);

        this.pongCollision2 = new BallCollision();
        this.pongCollisionPrinter2 = new BallCollisionPrinter(this.ctx
            , this.pongCollision2);
        this.pongCollisionRender2 = new BallCollisionRender(this.ctx
            , this.pongCollision2);
    }
}
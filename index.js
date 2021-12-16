"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class SteeringControl {
    execute(command) {
        console.log(`Executing: ${command}`);
    }
    turn(direction) {
        this.execute(`Turn ${direction}`);
    }
}
class Car {
    constructor(props) {
        this.isRunning = props.isRunning;
    }
    respond(events) {
        if (!this.isRunning) {
            return console.log('The car is off!');
        }
    }
}
const steering = new SteeringControl();
const autonomousCar = new Car({ isRunning: true });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());

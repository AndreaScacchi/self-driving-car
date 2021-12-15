import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
    isRunning?: boolean;
}

class Car implements AutonomousCar {
    isRunning;

    constructor(props: AutonomousCar) {
        this.isRunning = props.isRunning;
    }
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Coordinate_1 = require("./Coordinate");
const Direction_1 = require("./Direction");
const util_1 = require("util");
const deepEqual = require("deep-equal");
class Position {
    parseDirection(directionText) {
        switch (directionText) {
            case "N":
                return Direction_1.Direction.NORTH();
            case "E":
                return Direction_1.Direction.EAST();
            case "S":
                return Direction_1.Direction.SOUTH();
            case "W":
                return Direction_1.Direction.WEST();
            default:
                return Direction_1.Direction.NORTH();
        }
    }
    constructor(x, y, directionText) {
        this.coordinate = new Coordinate_1.Coordinate(x, y);
        this.direction = this.parseDirection(directionText);
    }
    turnLeft() {
        return new Position(this.coordinate.x, this.coordinate.y, this.direction.turnLeft().toString());
    }
    turnRight() {
        return new Position(this.coordinate.x, this.coordinate.y, this.direction.turnRight().toString());
    }
    moveForward() {
        var coordinate = new Coordinate_1.Coordinate(0, 0);
        let s = this.direction.enumValue();
        if (s === "NORTH") {
            coordinate = this.coordinate.moveNorth();
        }
        else if (s === "EAST") {
            coordinate = this.coordinate.moveEast();
        }
        else if (s === "SOUTH") {
            coordinate = this.coordinate.moveSouth();
        }
        else if (s === "WEST") {
            coordinate = this.coordinate.moveWest();
        }
        return new Position(coordinate.x, coordinate.y, this.direction.toString());
    }
    toString() {
        return util_1.format("%s %s", this.coordinate.toString(), this.direction.toString());
    }
    equals(o) {
        return deepEqual(this.coordinate, o.coordinate) && this.direction === o.direction;
    }
}
exports.Position = Position;

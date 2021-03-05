"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    moveNorth() {
        return new Coordinate(this.x, this.y + 1);
    }
    moveEast() {
        return new Coordinate(this.x + 1, this.y);
    }
    moveSouth() {
        return new Coordinate(this.x, this.y - 1);
    }
    moveWest() {
        return new Coordinate(this.x - 1, this.y);
    }
    toString() {
        return util_1.format("%s %s", this.x, this.y);
    }
}
exports.Coordinate = Coordinate;

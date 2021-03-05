"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["NORTH"] = 0] = "NORTH";
    DirectionEnum[DirectionEnum["EAST"] = 1] = "EAST";
    DirectionEnum[DirectionEnum["SOUTH"] = 2] = "SOUTH";
    DirectionEnum[DirectionEnum["WEST"] = 3] = "WEST";
})(DirectionEnum || (DirectionEnum = {}));
class Direction {
    constructor(value) {
        this.value = value;
    }
    enumValue() {
        return DirectionEnum[this.value];
    }
    static valueOf(directionValue) {
        return this.map.get(directionValue);
    }
    turnLeft() {
        let previousValue = this.value - 1;
        return Direction.valueOf((previousValue % 4 + 4) % 4);
    }
    turnRight() {
        let previousValue = this.value + 1;
        return Direction.valueOf((previousValue % 4 + 4) % 4);
    }
    toString() {
        return util_1.format("%s", this.enumValue().charAt(0));
    }
    static NORTH() {
        return Direction.valueOf(DirectionEnum.NORTH);
    }
    static EAST() {
        return Direction.valueOf(DirectionEnum.EAST);
    }
    static SOUTH() {
        return Direction.valueOf(DirectionEnum.SOUTH);
    }
    static WEST() {
        return Direction.valueOf(DirectionEnum.WEST);
    }
}
Direction.map = new Map([
    [0, new Direction(0)],
    [1, new Direction(1)],
    [2, new Direction(2)],
    [3, new Direction(3)]
]);
exports.Direction = Direction;

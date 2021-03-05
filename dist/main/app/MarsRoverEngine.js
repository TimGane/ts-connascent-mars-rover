"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Position_1 = require("../model/Position");
class MarsRoverEngine {
    constructor() {
        this.position = new Position_1.Position(0, 0, "N");
    }
    execute(commands) {
        for (let command of commands) {
            this.position = command.execute(this.position);
        }
    }
    getPosition() {
        return this.position;
    }
}
exports.MarsRoverEngine = MarsRoverEngine;

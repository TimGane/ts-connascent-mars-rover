"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StartingPositionCommand {
    constructor(startingPosition) {
        this.startingPosition = startingPosition;
    }
    execute(position) {
        return this.startingPosition;
    }
}
exports.StartingPositionCommand = StartingPositionCommand;

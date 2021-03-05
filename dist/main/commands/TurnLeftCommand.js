"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TurnLeftCommand {
    execute(position) {
        return position.turnLeft();
    }
}
exports.TurnLeftCommand = TurnLeftCommand;

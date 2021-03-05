"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InitializationCommand {
    constructor(topRightCoordinate) {
        this.topRightCoordinate = topRightCoordinate;
    }
    execute(position) {
        return position;
    }
}
exports.InitializationCommand = InitializationCommand;

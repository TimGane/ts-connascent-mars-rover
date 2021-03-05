"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Direction_1 = require("../model/Direction");
const TurnLeftCommand_1 = require("../commands/TurnLeftCommand");
const MoveForwardCommand_1 = require("../commands/MoveForwardCommand");
const TurnRightCommand_1 = require("../commands/TurnRightCommand");
const InitializationCommand_1 = require("../commands/InitializationCommand");
const Coordinate_1 = require("../model/Coordinate");
const Position_1 = require("../model/Position");
const StartingPositionCommand_1 = require("../commands/StartingPositionCommand");
class CommandInterpreter {
    constructor() {
        this.letterToDirection = new Map([
            ["N", Direction_1.Direction.NORTH()],
            ["E", Direction_1.Direction.EAST()],
            ["S", Direction_1.Direction.SOUTH()],
            ["W", Direction_1.Direction.WEST()]
        ]);
    }
    translate(commands) {
        let allCommands = new Array();
        allCommands.push(this.getInitializationCommand(commands));
        allCommands.push(this.getStartingPositionCommand(commands));
        allCommands.push(...this.getMovementCommands(commands));
        return allCommands;
    }
    getMovementCommands(commands) {
        let movementCommands = new Array();
        let lines = commands.split("\n");
        for (let command of Array.from(lines[2])) {
            switch (command) {
                case 'L':
                    movementCommands.push(new TurnLeftCommand_1.TurnLeftCommand());
                    break;
                case 'F':
                    movementCommands.push(new MoveForwardCommand_1.MoveForwardCommand());
                    break;
                case 'R':
                    movementCommands.push(new TurnRightCommand_1.TurnRightCommand());
                    break;
            }
        }
        return movementCommands;
    }
    getInitializationCommand(commands) {
        let lines = commands.split("\n");
        let topRight = lines[0].split(" ");
        return new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(parseInt(topRight[0]), parseInt(topRight[1])));
    }
    getStartingPositionCommand(commands) {
        let lines = commands.split("\n");
        let coords = lines[1].split(" ");
        let coordinate = new Coordinate_1.Coordinate(parseInt(coords[0]), parseInt(coords[1]));
        let direction = this.letterToDirection.get(coords[2]);
        let position = new Position_1.Position(coordinate.x, coordinate.y, direction.toString());
        return new StartingPositionCommand_1.StartingPositionCommand(position);
    }
}
exports.CommandInterpreter = CommandInterpreter;

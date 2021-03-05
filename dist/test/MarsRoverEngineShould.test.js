"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InitializationCommand_1 = require("../main/commands/InitializationCommand");
const Coordinate_1 = require("../main/model/Coordinate");
const StartingPositionCommand_1 = require("../main/commands/StartingPositionCommand");
const Position_1 = require("../main/model/Position");
const TurnLeftCommand_1 = require("../main/commands/TurnLeftCommand");
const TurnRightCommand_1 = require("../main/commands/TurnRightCommand");
const MoveForwardCommand_1 = require("../main/commands/MoveForwardCommand");
const MarsRoverEngine_1 = require("../main/app/MarsRoverEngine");
describe('MarsRoverEngine ', () => {
    beforeEach(() => {
    });
    it.each([
        [[new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(5, 5)),
                new StartingPositionCommand_1.StartingPositionCommand(new Position_1.Position(2, 2, "N"))],
            new Position_1.Position(2, 2, "N")],
        [[new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(5, 5)),
                new StartingPositionCommand_1.StartingPositionCommand(new Position_1.Position(2, 2, "N")),
                new TurnLeftCommand_1.TurnLeftCommand()
            ], new Position_1.Position(2, 2, "W")],
        [[new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(5, 5)),
                new StartingPositionCommand_1.StartingPositionCommand(new Position_1.Position(2, 2, "N")),
                new TurnRightCommand_1.TurnRightCommand()
            ], new Position_1.Position(2, 2, "E")],
        [[new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(5, 5)),
                new StartingPositionCommand_1.StartingPositionCommand(new Position_1.Position(2, 2, "2")),
                new MoveForwardCommand_1.MoveForwardCommand()
            ], new Position_1.Position(2, 3, "N")]
    ])('should execute commands %s then end in %s position', (commands, finalPosition) => {
        let roverEngine = new MarsRoverEngine_1.MarsRoverEngine();
        roverEngine.execute(Array.from(commands));
        let position = roverEngine.getPosition();
        expect(position).toStrictEqual(finalPosition);
    });
});

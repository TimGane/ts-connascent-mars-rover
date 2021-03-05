"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InitializationCommand_1 = require("../main/commands/InitializationCommand");
const Coordinate_1 = require("../main/model/Coordinate");
const StartingPositionCommand_1 = require("../main/commands/StartingPositionCommand");
const Position_1 = require("../main/model/Position");
const TurnLeftCommand_1 = require("../main/commands/TurnLeftCommand");
const MoveForwardCommand_1 = require("../main/commands/MoveForwardCommand");
const TurnRightCommand_1 = require("../main/commands/TurnRightCommand");
const CommandInterpreter_1 = require("../main/app/CommandInterpreter");
describe('Command Interpreter ', () => {
    beforeEach(() => {
    });
    it.each([
        ["5 5\n3 3 E\nLFLFR", [
                new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(5, 5)),
                new StartingPositionCommand_1.StartingPositionCommand(new Position_1.Position(3, 3, "E")),
                new TurnLeftCommand_1.TurnLeftCommand(),
                new MoveForwardCommand_1.MoveForwardCommand(),
                new TurnLeftCommand_1.TurnLeftCommand(),
                new MoveForwardCommand_1.MoveForwardCommand(),
                new TurnRightCommand_1.TurnRightCommand()
            ]],
        ["5 5\n3 3 E\nL", [
                new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(5, 5)),
                new StartingPositionCommand_1.StartingPositionCommand(new Position_1.Position(3, 3, "E")),
                new TurnLeftCommand_1.TurnLeftCommand()
            ]],
        ["5 5\n3 3 E\nF", [
                new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(5, 5)),
                new StartingPositionCommand_1.StartingPositionCommand(new Position_1.Position(3, 3, "E")),
                new MoveForwardCommand_1.MoveForwardCommand()
            ]],
        ["5 5\n3 3 E\nR", [
                new InitializationCommand_1.InitializationCommand(new Coordinate_1.Coordinate(5, 5)),
                new StartingPositionCommand_1.StartingPositionCommand(new Position_1.Position(3, 3, "E")),
                new TurnRightCommand_1.TurnRightCommand()
            ]]
    ])('should parse commands', (inputCommand, expectedCommands) => {
        let commandInterpreter = new CommandInterpreter_1.CommandInterpreter();
        let commands = commandInterpreter.translate(inputCommand.trim());
        expect(commands).toStrictEqual(expectedCommands);
    });
});

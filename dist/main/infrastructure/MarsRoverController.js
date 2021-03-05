"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarsRoverEngine_1 = require("../app/MarsRoverEngine");
const CommandInterpreter_1 = require("../app/CommandInterpreter");
class MarsRoverController {
    constructor() {
        this.marsRoverEngine = new MarsRoverEngine_1.MarsRoverEngine();
        this.commandInterpreter = new CommandInterpreter_1.CommandInterpreter();
    }
    writesTo(marsRoverServiceBus) {
        this.marsRoverServiceWriter = marsRoverServiceBus;
    }
    readsFrom(marsRoverServiceBus) {
        marsRoverServiceBus.callback(this);
    }
    process(messageReceived) {
        let commands = this.commandInterpreter.translate(messageReceived);
        this.marsRoverEngine.execute(commands);
        let finalPosition = this.marsRoverEngine.getPosition();
        this.marsRoverServiceWriter.NotifyExecution(finalPosition.toString());
    }
}
exports.MarsRoverController = MarsRoverController;

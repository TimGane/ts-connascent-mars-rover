"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MarsRover {
    constructor(marsRoverServiceBus, marsRoverReceiver, marsRoverSender, controller) {
        this.marsRoverServiceBus = marsRoverServiceBus;
        this.marsRoverReceiver = marsRoverReceiver;
        this.marsRoverSender = marsRoverSender;
        this.controller = controller;
        this.marsRoverReceiver.writesTo(this.marsRoverServiceBus);
        this.controller.readsFrom(this.marsRoverServiceBus);
        this.controller.writesTo(this.marsRoverServiceBus);
        this.marsRoverSender.readsFrom(this.marsRoverServiceBus);
    }
}
exports.MarsRover = MarsRover;

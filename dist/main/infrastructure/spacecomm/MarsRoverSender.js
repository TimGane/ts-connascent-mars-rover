"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MarsRoverSender {
    constructor(nasaAntenna) {
        this.nasaAntenna = nasaAntenna;
    }
    readsFrom(marsRoverServiceBus) {
        marsRoverServiceBus.trigger(this);
    }
    send(message) {
        let messageParts = message.split(" ");
        this.nasaAntenna.received([
            "X" + messageParts[0],
            "Y" + messageParts[1],
            "D" + messageParts[2]
        ]);
    }
    sendError() {
        this.nasaAntenna.received(["ER"]);
    }
}
exports.MarsRoverSender = MarsRoverSender;

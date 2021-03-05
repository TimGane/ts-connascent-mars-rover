"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceBus {
    callback(marsRoverController) {
        this.marsRoverController = marsRoverController;
    }
    trigger(marsRoverSender) {
        this.marsRoverSender = marsRoverSender;
    }
    NotifyMessageReceived(rebuiltMessage) {
        this.marsRoverController.process(rebuiltMessage);
    }
    NotifyError() {
        this.marsRoverSender.sendError();
    }
    NotifyExecution(finalState) {
        this.marsRoverSender.send(finalState);
    }
}
exports.ServiceBus = ServiceBus;

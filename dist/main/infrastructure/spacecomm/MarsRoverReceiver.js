"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = require("./Message");
const SmartTimer_1 = require("../timing/SmartTimer");
class MarsRoverReceiver {
    constructor() {
        this.datagrams = new Array();
        this.smartTimer = new SmartTimer_1.SmartTimer();
        this.notifier = new class {
            constructor(receiver) {
                this.receiver = receiver;
            }
            notifyMessage(data) {
                this.receiver.notifyMessage2(data);
            }
        }(this);
        this.MAX_DELAY_MILLISECONDS = 3000;
    }
    writesTo(marsRoverServiceBus) {
        this.marsRoverServiceBus = marsRoverServiceBus;
    }
    received(datagram) {
        this.datagrams.push(datagram);
        let message = new Message_1.Message(this.datagrams);
        if (message.isValid()) {
            this.marsRoverServiceBus.NotifyMessageReceived(message.toString());
            return;
        }
        this.smartTimer.waitMillisecond(this.MAX_DELAY_MILLISECONDS)
            .beforeDoing(this.notifier, this.datagrams);
    }
    notifyMessage2(datagrams) {
        let message = new Message_1.Message(datagrams);
        if (message.isValid()) {
            this.marsRoverServiceBus.NotifyMessageReceived(message.toString());
            return;
        }
        this.marsRoverServiceBus.NotifyError();
    }
}
exports.MarsRoverReceiver = MarsRoverReceiver;

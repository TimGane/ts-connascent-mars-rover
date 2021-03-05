"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
class Message {
    constructor(datagrams) {
        this.positionMessage = this.parsePosition(datagrams);
        this.commandsMessage = this.parseCommands(datagrams);
    }
    parsePosition(datagrams) {
        for (let datagram of datagrams) {
            if (datagram.startsWith("X"))
                this.x = datagram.substring(1);
            if (datagram.startsWith("Y"))
                this.y = datagram.substring(1);
            if (datagram.startsWith("D"))
                this.direction = datagram.substring(1);
            if (datagram.startsWith("M"))
                this.commandsCount = Number.parseInt(datagram.substring(1));
        }
        return util_1.format("100 100\n%s %s %s\n", this.x, this.y, this.direction);
    }
    toString() {
        return util_1.format("%s%s", this.positionMessage, this.commandsMessage);
    }
    isValid() {
        return this.x != undefined &&
            this.y != undefined &&
            this.direction != undefined &&
            this.commandsCount != undefined &&
            this.commandsMessage.length === this.commandsCount;
    }
    parseCommands(datagrams) {
        let commandMessage = "";
        for (let commandNumber = 1; commandNumber <= this.commandsCount; commandNumber++) {
            for (let datagram of datagrams) {
                if (datagram.startsWith(commandNumber.toString())) {
                    commandMessage += datagram.substring(1);
                }
            }
        }
        return commandMessage;
    }
}
exports.Message = Message;

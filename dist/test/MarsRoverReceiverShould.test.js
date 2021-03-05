"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MarsRoverReceiver_1 = require("../main/infrastructure/spacecomm/MarsRoverReceiver");
const jest_mock_extended_1 = require("jest-mock-extended");
describe("Mars Rover Receiver", () => {
    let marsRoverReceiver = new MarsRoverReceiver_1.MarsRoverReceiver();
    let mockServiceBus = jest_mock_extended_1.mock();
    it.each `
        packages                                                    |   rebuiltMessage
        ${["X2", "Y5", "DN", "M5", "1F", "2L", "3F", "4R", "5F"]}   |   ${"100 100\n2 5 N\nFLFRF"}
        ${["X2", "Y5", "DN", "M4", "3F", "2L", "1F", "4R"]}         |   ${"100 100\n2 5 N\nFLFR"}
    `('should rebuild message $rebuiltMessage from $packages', ({ packages, rebuiltMessage }) => {
        marsRoverReceiver.writesTo(mockServiceBus);
        for (let datagram of packages) {
            marsRoverReceiver.received(datagram);
        }
        expect(mockServiceBus.NotifyMessageReceived).toBeCalledWith(rebuiltMessage);
    });
    it('should notify error correctly', () => __awaiter(this, void 0, void 0, function* () {
        const sleepTime = 3100;
        marsRoverReceiver.writesTo(mockServiceBus);
        let packages = ["X2", "Y5", "DN", "M5", "2L", "3F", "4R", "5F"];
        for (let datagram of packages) {
            marsRoverReceiver.received(datagram);
        }
        yield new Promise(r => setTimeout(r, sleepTime));
        expect(mockServiceBus.NotifyError).toHaveBeenCalled();
    }));
});

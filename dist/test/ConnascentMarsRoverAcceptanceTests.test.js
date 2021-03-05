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
const MarsRover_1 = require("../main/MarsRover");
const jest_mock_extended_1 = require("jest-mock-extended");
const MarsRoverSender_1 = require("../main/infrastructure/spacecomm/MarsRoverSender");
const MarsRoverController_1 = require("../main/infrastructure/MarsRoverController");
const ServiceBus_1 = require("../main/infrastructure/bus/ServiceBus");
describe('Connascent MarsRover Acceptance Tests', () => {
    const maxDelay = 3000;
    let marsRoverReceiver;
    let marsRoverSender;
    let nasaAntenna;
    let marsRover;
    beforeEach(() => {
        nasaAntenna = jest_mock_extended_1.mock();
        marsRoverReceiver = new MarsRoverReceiver_1.MarsRoverReceiver();
        marsRoverSender = new MarsRoverSender_1.MarsRoverSender(nasaAntenna);
        let marsRoverController = new MarsRoverController_1.MarsRoverController();
        let marsRoverBus = new ServiceBus_1.ServiceBus();
        marsRover = new MarsRover_1.MarsRover(marsRoverBus, marsRoverReceiver, marsRoverSender, marsRoverController);
    });
    it("move following commands", () => {
        let inputPackages = ["X2", "Y5", "DN", "M5", "1F", "2L", "3F", "4R", "5F"];
        for (let pack of inputPackages) {
            marsRoverReceiver.received(pack);
        }
        expect(nasaAntenna.received).toBeCalledWith(["X1", "Y7", "DN"]);
    });
    it("move following commands any order", () => {
        let inputPackages = ["DN", "M5", "X2", "Y5", "3F", "4R", "1F", "2L", "5F"];
        for (let pack of inputPackages) {
            marsRoverReceiver.received(pack);
        }
        expect(nasaAntenna.received).toBeCalledWith(["X1", "Y7", "DN"]);
    });
    it("move following commands incomplete", () => __awaiter(this, void 0, void 0, function* () {
        let inputPackages = ["DN", "M5", "X2", "Y5", "3F", "1F", "2L", "5F"];
        for (let pack of inputPackages) {
            marsRoverReceiver.received(pack);
        }
        yield new Promise(r => setTimeout(r, 3100));
        expect(nasaAntenna.received).toBeCalledWith(["ER"]);
    }));
});

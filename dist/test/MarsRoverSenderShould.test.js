"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarsRoverSender_1 = require("../main/infrastructure/spacecomm/MarsRoverSender");
const jest_mock_extended_1 = require("jest-mock-extended");
describe('Test: MarsRoverSender', () => {
    it('should send message correctly', () => {
        const nasaAntenna = jest_mock_extended_1.mock();
        let marsRoverSender = new MarsRoverSender_1.MarsRoverSender(nasaAntenna);
        marsRoverSender.send("6 99 S");
        expect(nasaAntenna.received).toBeCalledWith(["X6", "Y99", "DS"]);
    });
    it('should send error message', () => {
        const nasaAntenna = jest_mock_extended_1.mock();
        let marsRoverSender = new MarsRoverSender_1.MarsRoverSender(nasaAntenna);
        marsRoverSender.sendError();
        expect(nasaAntenna.received).toBeCalledWith(["ER"]);
    });
});

import {INasaAntenna} from "../main/infrastructure/spacecomm/INasaAntenna";
import {MarsRoverSender} from "../main/infrastructure/spacecomm/MarsRoverSender";
import {mock} from "jest-mock-extended";
import { GeoLocation } from "../main/infrastructure/spacecomm/GeoLocation";

describe('Test: MarsRoverSender', () => {
    it('should send message correctly', () => {
        const nasaAntenna: INasaAntenna = mock<INasaAntenna>();
        let marsRoverSender: MarsRoverSender = new MarsRoverSender(nasaAntenna);

        marsRoverSender.send("6 99 S");

        const geoLocation = new GeoLocation(6, 99, 'south')
        expect(nasaAntenna.received).toBeCalledWith(geoLocation)
    });

    it('should send error message', () => {
        const nasaAntenna: INasaAntenna = mock<INasaAntenna>();
        let marsRoverSender: MarsRoverSender = new MarsRoverSender(nasaAntenna);

        marsRoverSender.sendError();

        expect(nasaAntenna.notifyError).toBeCalled()
    });
})

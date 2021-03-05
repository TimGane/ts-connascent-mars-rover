import {ISendNotifications} from "../ISendNotifications";
import {ISendFinalStateBus} from "../bus/ISendFinalStateBus";
import {INasaAntenna} from "./INasaAntenna";
import {GeoLocation} from "./GeoLocation";
import { Direction } from "../../model/Direction";

const directionIndexes = ['N', 'E', 'S', 'W'];

export class MarsRoverSender implements ISendNotifications {

    private nasaAntenna: INasaAntenna;


    constructor(nasaAntenna: INasaAntenna) {
        this.nasaAntenna = nasaAntenna;
    }

    readsFrom(marsRoverServiceBus: ISendFinalStateBus): void {
        marsRoverServiceBus.trigger(this);
    }

    send(message: string): void {
        const [x, y, direction] = message.split(" ");
        this.nasaAntenna.received(new GeoLocation(parseInt(x), parseInt(y), this.mapDirection(direction)));
    }

    mapDirection(letterDirection: string): Direction {
        return Direction.valueOf(directionIndexes.indexOf(letterDirection));
    }

    sendError(): void {
        this.nasaAntenna.notifyError()
    }

}

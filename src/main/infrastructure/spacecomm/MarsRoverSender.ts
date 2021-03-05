import {ISendNotifications} from "../ISendNotifications";
import {ISendFinalStateBus} from "../bus/ISendFinalStateBus";
import {INasaAntenna} from "./INasaAntenna";
import {GeoLocation} from "./GeoLocation";

type DirectionSymbols = 'N' | 'E' | 'W' | 'S'

enum Direction {
    north = 'north',
    south = 'south',
    east = 'east',
    west = 'west'
}

enum DirectionSymbol {
    'N' = 'north',
    'S' = 'south',
    'E' = 'east',
    'W' = 'west'
}

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
        const direction = DirectionSymbol[letterDirection as DirectionSymbols];
        return Direction[direction];
    }

    sendError(): void {
        this.nasaAntenna.notifyError()
    }

}

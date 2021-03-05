import {ISendNotifications} from "../ISendNotifications";
import {ISendFinalStateBus} from "../bus/ISendFinalStateBus";
import {INasaAntenna} from "./INasaAntenna";
import {GeoLocation} from "./GeoLocation";
import { Position } from "../../model/Position";
import { exception } from "console";

type Direction = 'north' | 'south' | 'east' | 'west'
type BareDirection = 'N' | 'E' | 'W' | 'S'

enum DirectionSymbol {
    'S' = 'south',
    'N' = 'north',
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
        let messageParts: string[] = message.split(" ");
        this.nasaAntenna.received(new GeoLocation(parseInt(messageParts[0]), parseInt(messageParts[1]), this.mapDirection(messageParts[2])));
        // this.nasaAntenna.received([
        //     "X" + messageParts[0],
        //     "Y" + messageParts[1],
        //     "D" + messageParts[2]
        // ])
    }

    mapDirection(letterDirection: string) : Direction
    {
        return DirectionSymbol[letterDirection as BareDirection] as Direction
    }

    sendError(): void {
        this.nasaAntenna.notifyError()
    }

}

import { ISendNotifications } from "../ISendNotifications";
import { ISendFinalStateBus } from "../bus/ISendFinalStateBus";
import { INasaAntenna } from "./INasaAntenna";
export declare class MarsRoverSender implements ISendNotifications {
    private nasaAntenna;
    constructor(nasaAntenna: INasaAntenna);
    readsFrom(marsRoverServiceBus: ISendFinalStateBus): void;
    send(message: string): void;
    sendError(): void;
}

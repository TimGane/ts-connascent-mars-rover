import { IProcessMessages } from "./IProcessMessages";
import { ISendNotificationBus } from "./bus/ISendNotificationBus";
import { IReadMessages } from "./IReadMessages";
export declare class MarsRoverController implements IProcessMessages {
    private marsRoverEngine;
    private commandInterpreter;
    private marsRoverServiceWriter;
    constructor();
    writesTo(marsRoverServiceBus: ISendNotificationBus): void;
    readsFrom(marsRoverServiceBus: IReadMessages): void;
    process(messageReceived: string): void;
}

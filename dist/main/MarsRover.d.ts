import { ServiceBus } from "./infrastructure/bus/ServiceBus";
import { MarsRoverReceiver } from "./infrastructure/spacecomm/MarsRoverReceiver";
import { ISendNotifications } from "./infrastructure/ISendNotifications";
import { MarsRoverController } from "./infrastructure/MarsRoverController";
export declare class MarsRover {
    private marsRoverServiceBus;
    private marsRoverReceiver;
    private marsRoverSender;
    private controller;
    constructor(marsRoverServiceBus: ServiceBus, marsRoverReceiver: MarsRoverReceiver, marsRoverSender: ISendNotifications, controller: MarsRoverController);
}

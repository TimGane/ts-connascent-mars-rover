import { IMessageReceivedBus } from "./IMessageReceivedBus";
import { ISendFinalStateBus } from "./ISendFinalStateBus";
import { ISendNotificationBus } from "./ISendNotificationBus";
import { IReadMessages } from "../IReadMessages";
import { IProcessMessages } from "../IProcessMessages";
import { ISendNotifications } from "../ISendNotifications";
export declare class ServiceBus implements IMessageReceivedBus, ISendFinalStateBus, ISendNotificationBus, IReadMessages {
    private marsRoverController;
    private marsRoverSender;
    callback(marsRoverController: IProcessMessages): void;
    trigger(marsRoverSender: ISendNotifications): void;
    NotifyMessageReceived(rebuiltMessage: string): void;
    NotifyError(): void;
    NotifyExecution(finalState: string): void;
}

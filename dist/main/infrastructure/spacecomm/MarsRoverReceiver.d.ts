import { IWriteToServiceBus } from "../bus/IWriteToServiceBus";
import { IMessageReceivedBus } from "../bus/IMessageReceivedBus";
export declare class MarsRoverReceiver implements IWriteToServiceBus {
    private marsRoverServiceBus;
    private datagrams;
    private smartTimer;
    private notifier;
    private MAX_DELAY_MILLISECONDS;
    writesTo(marsRoverServiceBus: IMessageReceivedBus): void;
    received(datagram: string): void;
    private notifyMessage2;
}

import { ISmartTimer } from "./ISmartTimer";
import { INotifier } from "../INotifier";
export declare class SmartTimer implements ISmartTimer {
    private millisecondsToWait;
    private isRunning;
    private timer;
    private task;
    notifier: INotifier;
    waitMillisecond(milliseconds: number): ISmartTimer;
    beforeDoing(notifier: INotifier, datagrams: Array<string>): ISmartTimer;
    private reset;
}

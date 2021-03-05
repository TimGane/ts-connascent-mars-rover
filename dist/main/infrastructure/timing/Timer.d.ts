import { TimerTask } from "./TimerTask";
export declare class Timer {
    private timeout;
    schedule(task: TimerTask, millisecondsToWait: number): void;
    cancel(): void;
}

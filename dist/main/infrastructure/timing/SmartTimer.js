"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Timer_1 = require("./Timer");
class SmartTimer {
    constructor() {
        this.isRunning = false;
        this.timer = new Timer_1.Timer();
        this.notifier = new class {
            notifyMessage(data) {
            }
        };
    }
    waitMillisecond(milliseconds) {
        this.reset();
        this.millisecondsToWait = milliseconds;
        return this;
    }
    beforeDoing(notifier, datagrams) {
        this.notifier = notifier;
        const self = this;
        this.task = new class {
            cancel() {
                self.timer.cancel();
            }
            run() {
                notifier.notifyMessage(datagrams);
                self.reset();
            }
        };
        this.timer.schedule(this.task, this.millisecondsToWait);
        return this;
    }
    reset() {
        if (this.task != undefined) {
            this.task.cancel();
        }
        return this;
    }
}
exports.SmartTimer = SmartTimer;

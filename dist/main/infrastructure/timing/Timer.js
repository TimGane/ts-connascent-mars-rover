"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Timer {
    schedule(task, millisecondsToWait) {
        this.timeout = setTimeout(function () {
            task.run();
        }, millisecondsToWait);
    }
    cancel() {
        clearTimeout(this.timeout);
    }
}
exports.Timer = Timer;

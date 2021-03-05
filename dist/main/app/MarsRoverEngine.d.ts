import { Position } from "../model/Position";
import { ICommand } from "../commands/ICommand";
export declare class MarsRoverEngine {
    private position;
    execute(commands: Array<ICommand>): void;
    getPosition(): Position;
}

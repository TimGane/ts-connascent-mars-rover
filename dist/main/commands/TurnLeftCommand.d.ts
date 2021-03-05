import { ICommand } from "./ICommand";
import { Position } from "../model/Position";
export declare class TurnLeftCommand implements ICommand {
    execute(position: Position): Position;
}

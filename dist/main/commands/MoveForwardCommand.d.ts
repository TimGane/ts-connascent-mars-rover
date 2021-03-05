import { ICommand } from "./ICommand";
import { Position } from "../model/Position";
export declare class MoveForwardCommand implements ICommand {
    execute(position: Position): Position;
}

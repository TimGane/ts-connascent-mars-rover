import { ICommand } from "./ICommand";
import { Position } from "../model/Position";
export declare class TurnRightCommand implements ICommand {
    execute(position: Position): Position;
}

import { ICommand } from "./ICommand";
import { Position } from "../model/Position";
export declare class StartingPositionCommand implements ICommand {
    private startingPosition;
    constructor(startingPosition: Position);
    execute(position: Position): Position;
}

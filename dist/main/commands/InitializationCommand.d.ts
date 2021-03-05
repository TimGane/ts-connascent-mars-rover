import { ICommand } from "./ICommand";
import { Position } from "../model/Position";
import { Coordinate } from "../model/Coordinate";
export declare class InitializationCommand implements ICommand {
    private topRightCoordinate;
    constructor(topRightCoordinate: Coordinate);
    execute(position: Position): Position;
}

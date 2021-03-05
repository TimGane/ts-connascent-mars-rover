export declare class Coordinate {
    x: number;
    y: number;
    constructor(x: number, y: number);
    moveNorth(): Coordinate;
    moveEast(): Coordinate;
    moveSouth(): Coordinate;
    moveWest(): Coordinate;
    toString(): string;
}

export declare class Direction {
    private value;
    private static map;
    constructor(value: number);
    enumValue(): string;
    static valueOf(directionValue: number): Direction;
    turnLeft(): Direction;
    turnRight(): Direction;
    toString(): string;
    static NORTH(): Direction;
    static EAST(): Direction;
    static SOUTH(): Direction;
    static WEST(): Direction;
}

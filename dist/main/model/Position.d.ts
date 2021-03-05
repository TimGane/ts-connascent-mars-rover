export declare class Position {
    private coordinate;
    private direction;
    private parseDirection;
    constructor(x: number, y: number, directionText: string);
    turnLeft(): Position;
    turnRight(): Position;
    moveForward(): Position;
    toString(): string;
    equals(o: Position): boolean;
}

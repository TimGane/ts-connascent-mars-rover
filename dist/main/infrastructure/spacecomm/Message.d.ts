export declare class Message {
    private x;
    private y;
    private commandsCount;
    private direction;
    private positionMessage;
    private commandsMessage;
    constructor(datagrams: Array<string>);
    private parsePosition;
    toString(): string;
    isValid(): boolean;
    private parseCommands;
}

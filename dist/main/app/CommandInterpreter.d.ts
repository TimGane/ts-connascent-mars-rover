import { ICommand } from "../commands/ICommand";
export declare class CommandInterpreter {
    private letterToDirection;
    translate(commands: string): Array<ICommand>;
    private getMovementCommands;
    private getInitializationCommand;
    private getStartingPositionCommand;
}

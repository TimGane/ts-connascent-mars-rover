import { Direction } from "../../../main/model/Direction";

export class GeoLocation {
    private x: number
    private y: number
    private direction: Direction

    constructor(x: number, y: number, direction: Direction) {
        this.x = x
        this.y = y
        this.direction = direction
    }
}

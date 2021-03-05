type Direction = 'north' | 'south' | 'east' | 'west'

export class GeoLocation {
    private x: number
    private y: number
    private direction: Direction

    constructor(xCoord: number, yCoord: number, direction: Direction) {
        this.x = xCoord
        this.y = yCoord
        this.direction = direction
    }
}

import {format} from "util";

enum Directions {
    NORTH = 0,
    EAST = 1,
    SOUTH = 2,
    WEST = 3
}

interface DirectionMapping {
    current: Directions;
    left: Directions;
    right: Directions;
}

const northDirectionMapping = { current: Directions.NORTH, left: Directions.WEST, right: Directions.EAST };
const eastDirectionMapping = { current: Directions.EAST, left: Directions.NORTH, right: Directions.SOUTH };
const southDirectionMapping = { current: Directions.SOUTH, left: Directions.EAST, right: Directions.WEST };
const westDirectionMapping = { current: Directions.WEST, left: Directions.SOUTH, right: Directions.NORTH };
const directionsMappings = [northDirectionMapping, eastDirectionMapping, southDirectionMapping, westDirectionMapping];

export class Direction {

    private value: Directions;

    constructor(value: Directions) {
        this.value = value;
    }

    enumValue(): string {
        return Directions[this.value];
    }

    static valueOf(directionValue: Directions): Direction {
        const direction = directionsMappings.find(mapping => mapping.current === directionValue) as DirectionMapping;
        return new Direction(direction.current);
    }

    turnLeft(): Direction {
        const directionMapping = directionsMappings.find(mapping => mapping.current === this.value) as DirectionMapping;
        return new Direction(directionMapping.left);
    }

    turnRight(): Direction {
        const directionMapping = directionsMappings.find(mapping => mapping.current === this.value) as DirectionMapping;
        return new Direction(directionMapping.right);
    }

    toString(): string {
        return format("%s", this.enumValue().charAt(0))
    }

    static NORTH(): Direction {
        return Direction.valueOf(Directions.NORTH);
    }

    static EAST(): Direction {
        return Direction.valueOf(Directions.EAST);
    }

    static SOUTH(): Direction {
        return Direction.valueOf(Directions.SOUTH);
    }

    static WEST(): Direction {
        return Direction.valueOf(Directions.WEST);
    }
}

import { EDirection, IPositionProps, ECanvas } from './types';

export const handleMoviment = (direction: EDirection, position: IPositionProps): IPositionProps => {

    switch (direction) {
        case EDirection.UP:
            return { ...position, x: position.x - 1, isWalking: true }
        case EDirection.DOWN:
            return { ...position, x: position.x + 1, isWalking: true }
        case EDirection.LEFT:
            return { ...position, y: position.y - 1, isWalking: true, isLeftDirection: true }
        case EDirection.RIGHT:
            return { ...position, y: position.y + 1, isWalking: true, isLeftDirection: false }
        default:
            return { ...position, isWalking: false }
    }
}

export const handleNextMoviment = (direction: EDirection, position: IPositionProps): IPositionProps => {

    switch (direction) {
        case EDirection.UP:
            return { ...position, x: position.x - 1, isWalking: true }
        case EDirection.DOWN:
            return { ...position, x: position.x + 1, isWalking: true }
        case EDirection.LEFT:
            return { ...position, y: position.y - 1, isWalking: true, isLeftDirection: true }
        case EDirection.RIGHT:
            return { ...position, y: position.y + 1, isWalking: true, isLeftDirection: false }
        default:
            return { ...position, isWalking: false }
    }
}

const FL = ECanvas.FLOOR;
const OB = ECanvas.OBSTACLE;
const PO = ECanvas.POKEMON;
const CH = ECanvas.CHARACTER;

export const canvas = [
    [OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, OB, FL, FL, FL, OB, OB, FL, FL, FL, OB, FL, OB, FL, FL, FL, OB, OB, OB],
    [OB, FL, FL, OB, OB, OB, FL, FL, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB, OB, OB],
    [OB, FL, FL, FL, OB, FL, PO, FL, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, FL, OB, OB, OB, FL, OB, OB, OB, OB, OB, OB, OB, OB, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, OB, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, OB, OB, OB, OB, FL, FL, FL, CH, FL, FL, FL, OB, OB, FL, FL, OB],
    [OB, FL, FL, FL, OB, FL, OB, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB, OB, FL, FL, OB],
    [OB, FL, FL, OB, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB]
];

export const checkValidMoviment = (nextPosition: IPositionProps) => {
    const canvasValue = canvas[nextPosition.x][nextPosition.y];

    if (canvasValue === ECanvas.OBSTACLE) {
        return false;
    }

    return true
}
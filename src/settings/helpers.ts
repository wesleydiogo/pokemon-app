import { EDirection, IPositionProps, ECanvas } from './types';

export const handleNextMoviment = (direction: EDirection, position: IPositionProps): IPositionProps => {

    switch (direction) {
        case EDirection.UP:
            return { ...position, x: position.x - 1, isMoving: true }
        case EDirection.DOWN:
            return { ...position, x: position.x + 1, isMoving: true }
        case EDirection.LEFT:
            return { ...position, y: position.y - 1, isMoving: true, isLeftDirection: true }
        case EDirection.RIGHT:
            return { ...position, y: position.y + 1, isMoving: true, isLeftDirection: false }
        default:
            return { ...position, isMoving: false }
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
    [OB, FL, FL, FL, OB, PO, CH, FL, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, FL, OB, OB, OB, FL, OB, OB, OB, OB, OB, OB, OB, OB, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, OB, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, OB, OB, OB, OB, FL, FL, FL, FL, FL, FL, FL, OB, OB, FL, FL, OB],
    [OB, FL, FL, FL, OB, FL, OB, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB, OB, FL, FL, OB],
    [OB, FL, FL, OB, OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, OB],
    [OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB, OB]
];

export const checkValidMoviment = (nextPosition: IPositionProps, walker: ECanvas) => {
    const canvasValue = canvas[nextPosition.x][nextPosition.y];

    const result = walker === ECanvas.CHARACTER ?
        getCharValidMoviment(canvasValue)
        :
        getPokemonValidMoviment(canvasValue)

    return result;
}

const getCharValidMoviment = (canvasValue: ECanvas) => {
    const validMoves = [ECanvas.FLOOR, ECanvas.POKEMON];

    return {
        valid: validMoves.includes(canvasValue),
        foundPokemon: canvasValue === ECanvas.POKEMON
    }
}
const getPokemonValidMoviment = (canvasValue: ECanvas) => {
    return {
        valid: canvasValue === ECanvas.FLOOR,
    }
}

export const handleRandomDirection = () => {
    const randomDirections = Math.floor(Math.random() * (4 - 0));
    const direction = {
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3
    }

    switch (randomDirections) {
        case direction.UP:
            return EDirection.UP
        case direction.DOWN:
            return EDirection.DOWN
        case direction.LEFT:
            return EDirection.LEFT
        case direction.RIGHT:
            return EDirection.RIGHT
    }
}
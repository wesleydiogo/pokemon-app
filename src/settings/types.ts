export interface IPositionProps {
    x: number,
    y: number,
    isMoviment?: boolean,
    isLeftDirection?: boolean
}

export enum EDirection {
    UP = 'ArrowUp',
    DOWN = 'ArrowDown',
    LEFT = 'ArrowLeft',
    RIGHT = 'ArrowRight'
}

export enum ECanvas {
    FLOOR = 0,
    OBSTACLE = 1,
    POKEMON = 2,
    CHARACTER = 3 
}   
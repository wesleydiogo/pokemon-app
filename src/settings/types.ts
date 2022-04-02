export interface charPositionProps {
    x: number,
    y: number,
    isWalking: boolean,
    isLeftDirection: boolean
}

export enum EDirection {
    UP = 'ArrowUp',
    DOWN = 'ArrowDown',
    LEFT = 'ArrowLeft',
    RIGHT = 'ArrowRight'
}
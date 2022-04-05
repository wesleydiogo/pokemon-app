export interface IPositionProps {
    x: number,
    y: number,
    isMoving?: boolean,
    isLeftDirection?: boolean
}

export enum EDirection {
    UP = 'ArrowUp',
    DOWN = 'ArrowDown',
    LEFT = 'ArrowLeft',
    RIGHT = 'ArrowRight'
}

export enum ESideDirection {
    LEFT = 'Left',
    RIGHT = 'Right'
}

export enum ECanvas {
    FLOOR = 0,
    OBSTACLE = 1,
    POKEMON = 2,
    CHARACTER = 3 
}

// ************************************* CONTEXTS TYPES ****************************************
export interface ICanvasContextProps {
    canvas: ECanvas[][],
    setCanvas: (direction: EDirection, currentPosition: IPositionProps, walker: ECanvas) => void
}

export interface IPokemonContextProps {
    found: boolean,
    position: number[],
    setUpdateFoundPokemon: (foundPokemon: boolean) => void
}
// ********************************************************************************************
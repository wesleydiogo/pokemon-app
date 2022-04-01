import { EDirection } from './constants';
import { charPositionProps } from './types';

export const handleMoviment: any = (direction: EDirection, position: charPositionProps) => {

    switch (direction) {
        case EDirection.UP:
            return { ...position, y: position.y - 1, isWalking: true }
        case EDirection.DOWN:
            return { ...position, y: position.y + 1, isWalking: true }
        case EDirection.LEFT:
            return { ...position, x: position.x - 1, isWalking: true, isLeftDirection: true }
        case EDirection.RIGHT:
            return { ...position, x: position.x + 1, isWalking: true, isLeftDirection: false }
        default:
            return { ...position, isWalking: false }
    }

}
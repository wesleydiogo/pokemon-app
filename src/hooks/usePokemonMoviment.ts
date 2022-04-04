import { useContext, useState } from 'react';
import { checkValidMoviment, handleNextMoviment, handleRandomDirection } from '../settings/helpers';
import { ECanvas, EDirection, IPositionProps } from '../settings/types';
import useInterval from '@use-it/interval';
import { CanvasContext } from '../contexts/canvas';

const usePokemonMoviment = (initialPosition: IPositionProps) => {
    const canvasContext: any = useContext(CanvasContext);
    const [position, setPosition] = useState<IPositionProps>({
        x: initialPosition.x,
        y: initialPosition.y,
        isMoving: true,
        isLeftDirection: true
    });
    const speed = 3000;
    let character = ECanvas.POKEMON;

    useInterval(() => {
        const direction = handleRandomDirection();
        const { nextPosition, nextMove } = canvasContext.setCanvas(direction, position, character);

        nextMove.valid &&
            setPosition(nextPosition);
    }, position.isMoving ? speed : null);

    return position;
}
export default usePokemonMoviment;
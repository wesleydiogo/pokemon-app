import { useContext, useState } from 'react';
import { handleRandomDirection } from '../settings/helpers';
import { ECanvas, EDirection, ICanvasContextProps, IPositionProps } from '../settings/types';
import useInterval from '@use-it/interval';
import { CanvasContext } from '../contexts/canvas';

interface IProps {
    nextPosition: IPositionProps,
    nextMove: {
        valid: boolean
    }
}

const usePokemonMoviment = (initialPosition: IPositionProps) => {
    const canvasContext = useContext<ICanvasContextProps>(CanvasContext);
    const [position, setPosition] = useState<IPositionProps>({
        x: initialPosition.x,
        y: initialPosition.y,
        isMoving: true,
        isLeftDirection: true
    });
    const speed = 1000;
    let pokemon = ECanvas.POKEMON;

    useInterval(() => {
        const direction = handleRandomDirection();
        const { nextPosition, nextMove }: any = canvasContext.setCanvas(direction as EDirection, position, pokemon);

        nextMove.valid &&
            setPosition(nextPosition);
    }, position.isMoving ? speed : null);

    return position;
}
export default usePokemonMoviment;
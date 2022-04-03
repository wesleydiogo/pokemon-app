import { useState } from 'react';
import { checkValidMoviment, handleNextMoviment, handleRandomDirection } from '../settings/helpers';
import { EDirection, IPositionProps } from '../settings/types';
import useInterval from '@use-it/interval';

const usePokemonMoviment = (initialPosition: IPositionProps) => {
    const [position, setPosition] = useState<IPositionProps>({
        x: initialPosition.x,
        y: initialPosition.y,
        isMoviment: true,
        isLeftDirection: true
    });

    useInterval(() => {
        const direction = handleRandomDirection();
        const nextMoviment = handleNextMoviment(direction as EDirection, position);
        const isValidMoviment = checkValidMoviment(nextMoviment);

        isValidMoviment &&
            setPosition(nextMoviment);
    }, position.isMoviment ? 1000 : null);

    return position;
}
export default usePokemonMoviment;
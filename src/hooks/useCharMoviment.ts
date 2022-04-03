import { useState } from 'react';
import { checkValidMoviment, handleNextMoviment } from '../settings/helpers';
import { EDirection, IPositionProps } from '../settings/types';
import useEventListener from '@use-it/event-listener';

const useCharacterMoviment = (initialPosition: IPositionProps) => {
    const [position, setPosition] = useState<IPositionProps>({
        x: initialPosition.x,
        y: initialPosition.y,
        isMoviment: false,
        isLeftDirection: false
    });

    const randomDirections = Math.floor(Math.random() * (4 - 0))
    console.log(randomDirections);

    useEventListener('keydown', (e: KeyboardEvent) => {
        if (Object.values(EDirection).includes(e.key as EDirection)) {

            const nextMoviment = handleNextMoviment(e.key as EDirection, position);
            const isValidMoviment = checkValidMoviment(nextMoviment);

            isValidMoviment &&
                setPosition(nextMoviment);

        }
    });

    return position;
}
export default useCharacterMoviment;
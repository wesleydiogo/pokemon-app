import { useState } from 'react';
import { checkValidMoviment, handleMoviment, handleNextMoviment } from '../settings/helpers';
import { EDirection, IPositionProps } from '../settings/types';
import useEventListener from '@use-it/event-listener';

const useCharacterMoviment = (initialPosition: IPositionProps) => {
    const [position, setPosition] = useState<IPositionProps>({
        x: initialPosition.x,
        y: initialPosition.y,
        isWalking: false,
        isLeftDirection: false
    });

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
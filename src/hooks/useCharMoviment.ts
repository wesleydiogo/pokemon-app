import { useState } from 'react';
import { handleMoviment } from '../settings/helpers';
import { EDirection, IPositionProps } from '../settings/types';
import useEventListener from '@use-it/event-listener';

const useCharacterMoviment = (initialPosition: IPositionProps) => {
    const [charPosition, setCharPosition] = useState<IPositionProps>({
        x: initialPosition.x,
        y: initialPosition.y,
        isWalking: false,
        isLeftDirection: false
    });

    useEventListener('keydown', (e: KeyboardEvent) => {
        if (Object.values(EDirection).includes(e.key as EDirection)) {
            let newCharPosition: IPositionProps = handleMoviment(e.key, charPosition);
            setCharPosition(newCharPosition);
        }
    });

    return charPosition;
}
export default useCharacterMoviment;
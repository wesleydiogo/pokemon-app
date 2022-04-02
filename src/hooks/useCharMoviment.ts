import { useState } from 'react';
import { handleMoviment } from '../settings/helpers';
import { EDirection, charPositionProps } from '../settings/types';
import useEventListener from '@use-it/event-listener';

const useCharacterMoviment = () => {
    const [charPosition, setCharPosition] = useState<charPositionProps>({
        y: 6,
        x: 10,
        isWalking: false,
        isLeftDirection: false
    });
    // const [charIsWalking, setCharIsWalking] = useState<boolean>(false);
    // const [charIsLeftDirection, setCharIsLeftDirection] = useState<boolean>(false)

    console.log(charPosition);
    useEventListener('keydown', (e: KeyboardEvent) => {
        if (Object.values(EDirection).includes(e.key as EDirection)) {
            let newCharPosition: charPositionProps = handleMoviment(e.key, charPosition);
            setCharPosition(newCharPosition);
        }
    });

    return {
        charPosition,
        // charIsLeftDirection,
        // charIsWalking
    }
}
export default useCharacterMoviment;
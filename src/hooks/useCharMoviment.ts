import { useState } from 'react';
import { EDirection } from '../settings/constants';
import { handleMoviment } from '../settings/helpers';
import { charPositionProps } from '../settings/types';
import useEventListener from '@use-it/event-listener';

const useCharacterMoviment = () => {
    const [charPosition, setCharPosition] = useState<charPositionProps>({
        x: 10,
        y: 6,
        isWalking: false,
        isLeftDirection: false
    });
    // const [charIsWalking, setCharIsWalking] = useState<boolean>(false);
    // const [charIsLeftDirection, setCharIsLeftDirection] = useState<boolean>(false)

    useEventListener('keydown', (e: KeyboardEvent) => {
        if (Object.values(EDirection).includes(e.key as EDirection)) {
            let newCharPosition: charPositionProps = handleMoviment(e.key, charPosition);
            setCharPosition(newCharPosition);
            console.log(charPosition);
        }
    });

    return {
        charPosition,
        // charIsLeftDirection,
        // charIsWalking
    }
}
export default useCharacterMoviment;
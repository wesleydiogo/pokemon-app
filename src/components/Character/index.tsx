import { useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { TILE_SIZE } from '../../settings/constants';
import './styles.css';

export default () => {
    const [charPosition, setCharPosition] = useState({
        x: 10,
        y: 6,
    });
    const [charIsLeftDirection, setCharIsLeftDirection] = useState<boolean>(false)
    const [charIsWalking, setCharIsWalking] = useState<boolean>(false);
    const keys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight']

    console.log(charPosition);

    

    useEventListener('keydown', (e: any) => {
        if (keys.includes(e.key)) {
            setCharIsWalking(true);
            if (e.key === 'ArrowDown') {
                if (charPosition.y > 0 && charPosition.y < 12) {
                    setCharPosition({ ...charPosition, y: charPosition.y + 1 });
                }
            }
            if (e.key === 'ArrowUp') {
                if (charPosition.y > 0 && charPosition.y < 12) {
                    setCharPosition({ ...charPosition, y: charPosition.y - 1 });
                }
            }
            if (e.key === 'ArrowLeft') {
                setCharPosition({ ...charPosition, x: charPosition.x - 1 });
                setCharIsLeftDirection(true);
            }
            if (e.key === 'ArrowRight') {
                setCharPosition({ ...charPosition, x: charPosition.x + 1 });
                setCharIsLeftDirection(false);
            }
        }
    });

    return (
        <div
            className={`character character--${charIsWalking ? 'walking' : 'front'}`}
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE,
                top: TILE_SIZE * charPosition.y,
                left: TILE_SIZE * charPosition.x,
                transform: `scaleX(${charIsLeftDirection ? -1 : 1})`
            }}
        />
    );
}
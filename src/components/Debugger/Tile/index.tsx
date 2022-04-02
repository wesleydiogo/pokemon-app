import { useState } from 'react';
import { TILE_SIZE } from '../../../settings/constants';

interface Props {
    textValue: number,
    position: {
        x: number,
        y: number
    }
}

export default function Tile ({ position, textValue }: Props) {

    const getTileColor = () => {
        switch(textValue) {
            case 1:
                return 'red'
            case 0:
                return 'yellow'
        }
    }
    const tileColor = getTileColor();

    return (
        <div style={{
            width: TILE_SIZE,
            height: TILE_SIZE,
            fontSize: 32,
            fontWeight: 'bold',
            color: tileColor,
            border: `3px solid ${tileColor}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: (TILE_SIZE * position.x) - TILE_SIZE,
            left: (TILE_SIZE * position.y) - TILE_SIZE
        }}>
            {textValue}
        </div>
    );
}
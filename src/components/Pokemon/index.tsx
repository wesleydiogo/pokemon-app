import { useState } from 'react';
import { TILE_SIZE } from '../../settings/constants';
import './styles.css';

export default () => {
    const [pokemonPosition, setPokemonPosition] = useState({
        x: 5,
        y: 4,
    });
    const [pokemonFound, setPokemonFound] = useState(true);
    const charScale = 0.9

    return (
        <div
            className={`pokemon ${pokemonFound && 'pokemon--found'}`}
            style={{
                width: TILE_SIZE * charScale,
                height: TILE_SIZE * charScale,
                left: TILE_SIZE * pokemonPosition.x,
                top: TILE_SIZE * pokemonPosition.y,
            }}
        />
    );
}
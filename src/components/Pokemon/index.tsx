import { useState } from 'react';
import { TILE_SIZE } from '../../settings/constants';
import { IPositionProps } from '../../settings/types';
import './styles.css';

interface IProps {
    initialPosition: IPositionProps;
}

const Pokemon = ({initialPosition}: IProps) => {
    const [pokemonPosition, setPokemonPosition] = useState(initialPosition);
    const [pokemonFound, setPokemonFound] = useState(true);
    const charScale = 0.9

    return (
        <div
            className={`pokemon ${pokemonFound && 'pokemon--found'}`}
            style={{
                width: TILE_SIZE * charScale,
                height: TILE_SIZE * charScale,
                top: (TILE_SIZE * pokemonPosition.x) - TILE_SIZE,
                left: (TILE_SIZE * pokemonPosition.y) - TILE_SIZE,
            }}
        />
    );
}
export default Pokemon;
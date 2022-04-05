import usePokemonMoviment from '../../hooks/usePokemonMoviment';
import { TILE_SIZE } from '../../settings/constants';
import { IPositionProps } from '../../settings/types';
import './styles.css';

interface IProps {
    initialPosition: IPositionProps;
}

const Pokemon = ({initialPosition}: IProps) => {
    const pokemonPosition = usePokemonMoviment(initialPosition); 
    const charScale = 0.9;

    return (
        <div
            className='pokemon pokemon--found'
            style={{
                width: TILE_SIZE * charScale,
                height: TILE_SIZE * charScale,
                transform: `scaleX(${pokemonPosition.isLeftDirection ? 1 : -1})`,
                top: ((TILE_SIZE * pokemonPosition.x) - TILE_SIZE) - 18,
                left: (TILE_SIZE * pokemonPosition.y) - TILE_SIZE,
            }}
        />
    );
}
export default Pokemon;
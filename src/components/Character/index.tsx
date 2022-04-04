import './styles.css';
import { TILE_SIZE } from '../../settings/constants';
import useCharacterMoviment from '../../hooks/useCharMoviment';
import { IPositionProps } from '../../settings/types';

interface IProps {
    initialPosition: IPositionProps
}

const Character = ({ initialPosition }: IProps) => {
    const charPosition = useCharacterMoviment(initialPosition);

    return (
        <>
            <div
                className={`character character--${charPosition.isMoving ? 'moviment' : 'front'}`}
                style={{
                    width: TILE_SIZE,
                    height: TILE_SIZE,
                    transform: `scaleX(${charPosition.isLeftDirection ? -1 : 1})`,
                    top: (TILE_SIZE * charPosition.x) - TILE_SIZE,
                    left: (TILE_SIZE * charPosition.y) - TILE_SIZE
                }}
            />
        </>
    );
}
export default Character;
import './styles.css';
import { TILE_SIZE } from '../../settings/constants';
import useCharacterMovement from '../../hooks/useCharMovement';
import { IPositionProps } from '../../settings/types';
import { Ballon } from '..';

interface IProps {
    initialPosition: IPositionProps
}

const Character = ({ initialPosition }: IProps) => {
    const position = useCharacterMovement(initialPosition);

    return (
        <div 
        className='character'
        style={{
            top: ((TILE_SIZE * position.x) - TILE_SIZE) - 18,
            left: (TILE_SIZE * position.y) - TILE_SIZE

        }}>
            <Ballon />
            <div
                className={`character--${position.isMoving ? 'movementSprite' : 'frontSprite'}`}
                style={{
                    width: TILE_SIZE,
                    height: TILE_SIZE,
                    transform: `scaleX(${position.isLeftDirection ? -1 : 1})`,
                }}
            >
            </div>
        </div>
    );
}
export default Character;
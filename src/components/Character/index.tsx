import { TILE_SIZE } from '../../settings/constants';
import useCharacterMoviment from '../../hooks/useCharMoviment';
import './styles.css';

export default () => {
    const { charPosition } = useCharacterMoviment();

    return (
        <div
            className={`character character--${charPosition.isWalking ? 'walking' : 'front'}`}
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE,
                top: TILE_SIZE * charPosition.y,
                left: TILE_SIZE * charPosition.x,
                transform: `scaleX(${charPosition.isLeftDirection ? -1 : 1})`
            }}
        />
    );
}
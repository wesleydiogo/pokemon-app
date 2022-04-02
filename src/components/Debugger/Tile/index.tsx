import { TILE_SIZE } from '../../../settings/constants';
import { ECanvas } from '../../../settings/types';

interface IProps {
    textValue: number,
    position: {
        x: number,
        y: number
    }
}

const Tile = ({ position, textValue }: IProps) => {

    const getTileColor = () => {
        switch (textValue) {
            case ECanvas.FLOOR:
                return 'yellow'
            case ECanvas.OBSTACLE:
                return 'red'
            case ECanvas.CHARACTER:
                return 'blue'
            case ECanvas.POKEMON:
                return 'magenta'
        }
    }
    const tileColor = getTileColor();

    return (
        <div style={{
            width: TILE_SIZE,
            height: TILE_SIZE,
            fontSize: 48,
            color: tileColor,
            border: `2px solid ${tileColor}`,
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
export default Tile;
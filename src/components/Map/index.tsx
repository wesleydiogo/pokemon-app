import './styles.css'
import Character from '../Character';
import Pokemon from '../Pokemon';
import Debugger from '../Debugger';
import { MAP_SIZE_X, MAP_SIZE_Y, TILE_SIZE } from '../../settings/constants';
import { canvas } from '../../settings/helpers';
import { ECanvas, EDirection } from '../../settings/types';
import { useContext, useState } from 'react';
import useEventListener from '@use-it/event-listener';
import { CameraContext } from '../../contexts/camera';

const getCanvasMap = () => {
    const canvasArray = [];

    for (let x = 0; x < canvas.length; x++) {
        for (let y = 0; y < canvas[x].length; y++) {

            const position = { x, y }
            const textValue = canvas[x][y];
            const key = `${x}:${y}`

            textValue === ECanvas.CHARACTER &&
                canvasArray.push(<Character key={key} initialPosition={position} />);
            textValue === ECanvas.POKEMON &&
                canvasArray.push(<Pokemon key={key} initialPosition={position} />);
        }
    }

    return canvasArray;
}
const elements = getCanvasMap();

const Map = () => {
    const { valid } = useContext(CameraContext);
    const [positionCamera, setPositionCamera] = useState({
        x: 0,
        y: 0
    });

    useEventListener('keydown', (e: KeyboardEvent) => {

        if (valid) {
            if (e.key === EDirection.UP) {
                setPositionCamera({
                    ...positionCamera,
                    y: positionCamera.y + TILE_SIZE
                });
            }
            if (e.key === EDirection.DOWN) {
                setPositionCamera({
                    ...positionCamera,
                    y: positionCamera.y - TILE_SIZE
                });
            }
            if (e.key === EDirection.LEFT) {
                setPositionCamera({
                    ...positionCamera,
                    x: positionCamera.x + TILE_SIZE
                });
            }
            if (e.key === EDirection.RIGHT) {
                setPositionCamera({
                    ...positionCamera,
                    x: positionCamera.x - TILE_SIZE
                });
            }
        }
    });

    const cameraLeft = TILE_SIZE * 0;
    const cameraTop = TILE_SIZE * 0;

    return (
        <div
            className="map__camera"
            style={{
                width: TILE_SIZE * 20,
                height: TILE_SIZE * 13,
            }}
        >
            <div
                className="map"
                style={{
                    minWidth: MAP_SIZE_X,
                    minHeight: MAP_SIZE_Y,
                    transform: `translate(${positionCamera.x + cameraLeft}px, ${positionCamera.y + cameraTop}px)`
                }}>
                <Debugger />
                {elements}
            </div>
        </div>
    );
}
export default Map;
import './styles.css'
import Character from '../Character';
import Pokemon from '../Pokemon';
import Debugger from '../Debugger';
import { MAP_SIZE_X, MAP_SIZE_Y } from '../../settings/constants';
import { canvas } from '../../settings/helpers';
import { ECanvas } from '../../settings/types';
import { useState } from 'react';
import Button from '../Button';

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
    const [activeDebugger, setActiveDebugger] = useState(false);

    return (
        <>
            <Button
                className="primary"
                onClick={() => setActiveDebugger(!activeDebugger)}>
                Debugger
            </Button>
            <div className="map" style={{ minWidth: MAP_SIZE_X, minHeight: MAP_SIZE_Y }}>
                {
                    activeDebugger &&
                    <Debugger />
                }
                {elements}
            </div>
        </>
    );
}
export default Map;
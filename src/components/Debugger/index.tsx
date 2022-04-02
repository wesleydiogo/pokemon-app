import { Tile } from "..";
import { canvas } from "../../settings/helpers";

const getCanvasMap = () => {
    const tilesArray = [];

    for (let x = 0; x < canvas.length; x++) {
        for (let y = 0; y < canvas[x].length; y++) {

            const position = { x, y }
            const textValue = canvas[x][y];

            tilesArray.push(<Tile position={position} textValue={textValue} />)
        }
    }

    return tilesArray;
}

export default function Debugger() {
    const tiles = getCanvasMap();

    return (
        <div>
            {tiles}
        </div>
    );
} 
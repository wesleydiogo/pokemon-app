import { useContext } from "react";
import { Tile } from "..";
import { CanvasContext } from "../../contexts/canvas";
import useDebugger from "../../hooks/useDebugger";
import { ECanvas } from "../../settings/types";

const getCanvasMap = (canvas: ECanvas[][]) => {
    const canvasArray = [];

    for (let x = 0; x < canvas.length; x++) {
        for (let y = 0; y < canvas[x].length; y++) {

            const position = { x, y }
            const textValue = canvas[x][y];
            const key = `${x}:${y}`

            canvasArray.push(<Tile key={key} position={position} textValue={textValue} />);
        }
    }

    return canvasArray;
}

const Debugger = () => {
    const canvasContext: any = useContext(CanvasContext);
    const tiles = getCanvasMap(canvasContext.canvas);
    const activeDebuggerScreen = useDebugger();

    return (
        <div>
            {activeDebuggerScreen &&
                tiles
            }
        </div>
    );
}
export default Debugger;
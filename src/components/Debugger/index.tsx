import { useContext, useState } from "react";
import { Tile } from "..";
import { CanvasContext } from "../../contexts/canvas";
import { canvas } from "../../settings/helpers";
import { ECanvas } from "../../settings/types";
import Button from "../Button";

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

const Debugger: React.FC = () => {
    const canvasContext: any = useContext(CanvasContext);
    const tiles = getCanvasMap(canvasContext.canvas);

    return (
        < div>
            {tiles}
        </div>
    );
}
export default Debugger;
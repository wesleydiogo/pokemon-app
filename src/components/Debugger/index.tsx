import { useState } from "react";
import { Tile } from "..";
import { canvas } from "../../settings/helpers";
import { ECanvas } from "../../settings/types";
import Button from "../Button";

const getCanvasMap = () => {
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
    const tiles = getCanvasMap();

    return (
        < div>
            {tiles}
        </div>
    );
}
export default Debugger;
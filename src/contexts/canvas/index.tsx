import React, { createContext, useState } from "react";
import { canvas, checkValidMoviment, handleNextMoviment } from "../../settings/helpers";
import { ECanvas, EDirection, ICanvasContextProps, IPositionProps } from "../../settings/types";

export const CanvasContext = createContext<ICanvasContextProps>({
    canvas: [],
    setCanvas: (direction: EDirection, currentPosition: IPositionProps, walker: ECanvas) => null
});

interface ICanvasProviderProps {
    children: React.ReactNode
}

const CanvasProvider = ({children}: ICanvasProviderProps) => {
    const [currentCanvas, setCurrentCanvas] = useState({
        canvas: canvas,
        setCanvas: (direction: EDirection, currentPosition: IPositionProps, walker: ECanvas) => {

            const nextPosition = handleNextMoviment(direction, currentPosition);
            const nextMove = checkValidMoviment(nextPosition, walker);

            if (nextMove.valid) {
                setCurrentCanvas((prevState) => {
                    const newCanvas = [...currentCanvas.canvas];
                    const currentValue = newCanvas[currentPosition.x][currentPosition.y];

                    newCanvas[currentPosition.x][currentPosition.y] = ECanvas.FLOOR;
                    newCanvas[nextPosition.x][nextPosition.y] = currentValue;
                    
                    return {
                        canvas: newCanvas,
                        setCanvas: prevState.setCanvas,
                    }

                })
            }

            return {
                nextPosition,
                nextMove
            }
        }
    });

    return (
        <CanvasContext.Provider value={currentCanvas}>
            {children}
        </CanvasContext.Provider>
    )
}
export default CanvasProvider;
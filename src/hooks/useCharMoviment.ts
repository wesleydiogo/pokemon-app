import { useContext, useState } from 'react';
import { ECanvas, EDirection, IPositionProps } from '../settings/types';
import useEventListener from '@use-it/event-listener';
import { CanvasContext } from '../contexts/canvas';

const useCharacterMoviment = (initialPosition: IPositionProps) => {
    const canvasContext: any = useContext(CanvasContext);
    const [position, setPosition] = useState<IPositionProps>({
        x: initialPosition.x,
        y: initialPosition.y,
        isMoving: false,
        isLeftDirection: true,
    });

    useEventListener('keydown', (e: KeyboardEvent) => {        
        if (Object.values(EDirection).includes(e.key as EDirection)) {
            let direction = e.key as EDirection;
            let character = ECanvas.CHARACTER;
            const { nextPosition, nextMove } = canvasContext.setCanvas(direction, position, character);            

            nextMove.valid &&
                setPosition(nextPosition);

            nextMove.foundPokemon &&
                console.log("Pokemon encontrado!")
        }
    });

    return position;
}
export default useCharacterMoviment;
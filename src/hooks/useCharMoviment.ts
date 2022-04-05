import { useContext, useState } from 'react';
import { ECanvas, EDirection, ICanvasContextProps, IPositionProps } from '../settings/types';
import useEventListener from '@use-it/event-listener';
import { CanvasContext } from '../contexts/canvas';
import { PokemonContext } from '../contexts/pokemon';

const useCharacterMoviment = (initialPosition: IPositionProps) => {
    const canvasContext= useContext<ICanvasContextProps>(CanvasContext);
    const pokemonContext = useContext(PokemonContext);
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
            const { nextPosition, nextMove }: any = canvasContext.setCanvas(direction, position, character);

            nextMove.valid &&
                setPosition(nextPosition);

            pokemonContext.setUpdateFoundPokemon(nextMove.foundPokemon); // Passando valor booleano para contexto pokemon
                
        }
    });

    return position;
}
export default useCharacterMoviment;
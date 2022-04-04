import { Map } from '../';
import CanvasProvider from '../../contexts/canvas';
import PokemonProvider from '../../contexts/pokemon';
import './styles.css';

const Game = () => {
    return (
        <CanvasProvider>
            <PokemonProvider>
                <div className='game'>
                    <Map />
                </div>
            </PokemonProvider>
        </CanvasProvider>
    );
}
export default Game;
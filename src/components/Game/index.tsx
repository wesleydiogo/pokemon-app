import { Map } from '../';
import CameraProvider from '../../contexts/camera';
import CanvasProvider from '../../contexts/canvas';
import PokemonProvider from '../../contexts/pokemon';
import './styles.css';

const Game = () => {
    return (
        <CanvasProvider>
            <PokemonProvider>
                <CameraProvider>
                    <div className='game'>
                        <Map />
                    </div>
                </CameraProvider>
            </PokemonProvider>
        </CanvasProvider>
    );
}
export default Game;
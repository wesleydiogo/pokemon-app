import { Map } from '../';
import CanvasProvider from '../../contexts/canvas';
import './styles.css';

const Game = () => {
    return (
        <CanvasProvider>
            <div className='game'>
                <Map />
            </div>
        </CanvasProvider>
    );
}
export default Game;
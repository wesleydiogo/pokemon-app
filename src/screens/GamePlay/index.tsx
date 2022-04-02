import { Map, Character, Pokemon, Debugger } from '../../components';
import './styles.css';

export default () => {

    return (
        <main className="game__camera">
            <Map>
                <Debugger />
                <Character />
                <Pokemon />
            </Map>
        </main>
    );
}
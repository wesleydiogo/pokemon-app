import { Map, Character } from '../../components';
import './styles.css';

export default () => {

    return (
        <main className="game__camera">
            <Map>
                <Character />
            </Map>
        </main>
    );
}
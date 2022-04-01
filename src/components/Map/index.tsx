import { MAP_SIZE_X, MAP_SIZE_Y } from '../../settings/constants';
import './styles.css'

interface Props {
    children: React.ReactNode
}

const Map = ({ children }: Props) => {

    return (
        <div className="map" style={{minWidth: MAP_SIZE_X, minHeight: MAP_SIZE_Y}}>
            {children}
        </div>
    );
}
export default Map;
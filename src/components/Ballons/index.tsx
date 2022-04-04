import './styles.css';
import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemon";
import { IPokemonContextProps } from "../../settings/types";


const Ballon = () => {
    const pokemonContext: IPokemonContextProps = useContext(PokemonContext);    

    return (
        <div className='ballon'>
            ...
        </div>
    )
}
export default Ballon;
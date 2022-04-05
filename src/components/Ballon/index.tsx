import './styles.css';
import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemon";
import { IPokemonContextProps } from "../../settings/types";


const Ballon = () => {
    const pokemonContext: IPokemonContextProps = useContext(PokemonContext);

    useEffect(() => {
        console.log(pokemonContext.found);
    }, [pokemonContext.found])

    return (
        <>
            <div
                className='ballon'
                style={{
                    opacity: pokemonContext.found ? 1 : 0,
                }}
            >
                ...
            </div>
        </>
    )
}
export default Ballon;
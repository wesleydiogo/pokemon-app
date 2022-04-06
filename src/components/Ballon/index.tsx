import './styles.css';
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../contexts/pokemon";
import { IPokemonContextProps } from "../../settings/types";

enum EBallonState {
    SEARCH = 'search',
    LOADING = 'loader',
    ALERT = 'alert'
}

const Ballon = () => {
    const pokemonContext: IPokemonContextProps = useContext(PokemonContext);
    const [ballonState, setBallonState] = useState<EBallonState>(EBallonState.SEARCH);

    return (
        <>
            <div
                className='ballon ballon--base'
                style={{
                    opacity: pokemonContext.found ? 1 : 0,
                }}
            >
                <span className={`ballon--${ballonState}`} />
            </div>
        </>
    )
}
export default Ballon;
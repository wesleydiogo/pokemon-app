import { createContext, useState } from "react";
import { IPokemonContextProps } from "../../settings/types";

interface IPokemonProviderProps {
    children: React.ReactNode
}

export const PokemonContext = createContext<IPokemonContextProps>({
    found: false,
    position: [],
    setUpdateFoundPokemon: () => null
});

const PokemonProvider = ({ children }: IPokemonProviderProps) => {
    const [foundPokemon, setFoundPokemon] = useState({
        found: false,
        position: [],
        setUpdateFoundPokemon: () => {
            setFoundPokemon((prevState) => {
                return {
                    found: true,
                    position: [],
                    setUpdateFoundPokemon: prevState.setUpdateFoundPokemon
                }
            });
        }
    });

    return (
        <PokemonContext.Provider value={foundPokemon}>
            {children}
        </PokemonContext.Provider>
    )
}
export default PokemonProvider;
import { createContext, useState } from "react";
import { IPokemonContextProps } from "../../settings/types";

interface IPokemonProviderProps {
    children: React.ReactNode
}

export const PokemonContext = createContext<IPokemonContextProps>({
    found: false,
    position: [],
    setUpdateFoundPokemon: (foundPokemon) => null
});

const PokemonProvider = ({ children }: IPokemonProviderProps) => {
    const [foundPokemon, setFoundPokemon] = useState<IPokemonContextProps>({
        found: false,
        position: [],
        setUpdateFoundPokemon: (foundPokemon) => {
            setFoundPokemon((prevState) => {
                return {
                    found: foundPokemon,
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
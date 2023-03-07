import { combineReducers } from "redux";
import { PokemonDataReducer } from "./pokemon/pokemon-reducer";

export const rootReducer = combineReducers({
	pokemonData: PokemonDataReducer,
});

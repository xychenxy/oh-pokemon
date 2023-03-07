import {
	POKEMON_ACTION_TYPES,
	PokemonDispatchTypes,
	Pokemon,
	PokemonTypeBadge,
} from "./pokemon-types";

export type InitialState = {
	pokemonData: Pokemon[];
	pokemonTypes: PokemonTypeBadge[];
};

const initialState: InitialState = {
	pokemonData: [],
	pokemonTypes: [],
};

export const PokemonDataReducer = (
	state = initialState,
	action: PokemonDispatchTypes
) => {
	switch (action.type) {
		case POKEMON_ACTION_TYPES.GET_POKEMON_DATA:
			return {
				...state,
				pokemonData: action.payload,
			};
		case POKEMON_ACTION_TYPES.GENERATE_POKEMON_TYPES:
			return {
				...state,
				pokemonTypes: action.payload,
			};
		case POKEMON_ACTION_TYPES.RESET_POKEMON_TYPES:
			return {
				...state,
				pokemonTypes: action.payload,
			};
		case POKEMON_ACTION_TYPES.UPDATE_POKEMON_TYPES:
			return {
				...state,
				pokemonTypes: action.payload,
			};
		default:
			return state;
	}
};

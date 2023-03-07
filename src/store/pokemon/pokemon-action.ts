import { Dispatch } from "redux";
import {
	POKEMON_ACTION_TYPES,
	Pokemon,
	IGetPokemonData,
	IResetPokemonTypes,
	IUpdatePokemonTypes,
	IGeneratePokemonTypes,
	PokemonTypeBadge,
} from "./pokemon-types";
import jsonData from "../../data/pokemon-gen1.json";

const data = jsonData as Pokemon[];

export const getPokemonData = () => (dispatch: Dispatch<IGetPokemonData>) => {
	dispatch({
		type: POKEMON_ACTION_TYPES.GET_POKEMON_DATA,
		payload: data,
	});
};
export const generatePokemonTypes =
	(pokemonData: Pokemon[]) => (dispatch: Dispatch<IGeneratePokemonTypes>) => {
		const map = new Map<string, PokemonTypeBadge>();
		pokemonData.forEach((d) => {
			d.types.forEach((type) => {
				map.set(type.type_name, {
					isSelected: false,
					type: type.type_name,
				});
			});
		});

		dispatch({
			type: POKEMON_ACTION_TYPES.GENERATE_POKEMON_TYPES,
			payload: Array.from(map.values()),
		});
	};

export const resetPokemonTypes =
	(pokemonTypes: PokemonTypeBadge[]) =>
	(dispatch: Dispatch<IResetPokemonTypes>) => {
		dispatch({
			type: POKEMON_ACTION_TYPES.RESET_POKEMON_TYPES,
			payload: pokemonTypes.map((p) => {
				p.isSelected = false;
				return p;
			}),
		});
	};

export const updatePokemonTypes =
	(selectedPokemon: PokemonTypeBadge, pokemonTypes: PokemonTypeBadge[]) =>
	(dispatch: Dispatch<IUpdatePokemonTypes>) => {
		dispatch({
			type: POKEMON_ACTION_TYPES.UPDATE_POKEMON_TYPES,
			payload: pokemonTypes.map((p) => {
				if (p.type === selectedPokemon.type) {
					p.isSelected = !selectedPokemon.isSelected;
				}
				return p;
			}),
		});
	};

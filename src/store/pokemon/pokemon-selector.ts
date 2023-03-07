import { createSelector } from "reselect";
import { RootState } from "../store";
import { InitialState } from "./pokemon-reducer";

const selectReducer = (state: RootState): InitialState => state.pokemonData;

export const selectPokemonData = createSelector(
	[selectReducer],
	(state) => state.pokemonData
);

export const selectPokemonTypes = createSelector(
	[selectReducer],
	(state) => state.pokemonTypes
);

export const selectPokemonTableData = createSelector(
	[selectReducer],
	(state) => {
		const pokemonTypes = state.pokemonTypes;
		const pokemonData = state.pokemonData;

		const isShowAllData =
			pokemonTypes.every((p) => !p.isSelected) ||
			pokemonTypes.every((p) => p.isSelected);

		if (isShowAllData) return [...pokemonData];

		const selectedPokemon: Array<string> = pokemonTypes
			.filter((p) => p.isSelected)
			.map((d) => d.type)
			.flat();

		return pokemonData.filter((d) =>
			d.types.find((t) => selectedPokemon.includes(t.type_name))
		);
	}
);

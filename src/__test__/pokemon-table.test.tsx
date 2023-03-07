import { render, screen } from "@testing-library/react";
import PokemonTable from "../components/pokemon-table/pokemon-table";
import type { Pokemon, PokemonTypeBadge } from "../types";
import jsonData from "../data/pokemon-gen1.json";

const data = jsonData as Pokemon[];

describe("Pokemon table", () => {
	const pokemonData = data.slice(0, 6);

	const pokemonBadgesAllUnSelected = [
		{ ids: [1, 2, 3], type: "grass", isSelected: false },
		{ ids: [1, 2, 3], type: "poison", isSelected: false },
		{ ids: [4, 5, 6], type: "fire", isSelected: false },
		{ ids: [7], type: "flying", isSelected: false },
	];
	const pokemonBadgesAllSelected = [
		{ ids: [1, 2, 3], type: "grass", isSelected: true },
		{ ids: [1, 2, 3], type: "poison", isSelected: true },
		{ ids: [4, 5, 6], type: "fire", isSelected: true },
		{ ids: [7], type: "flying", isSelected: true },
	];
	const pokemonBadgesRandomSelected = [
		{ ids: [1, 2, 3], type: "grass", isSelected: true },
		{ ids: [1, 2, 3], type: "poison", isSelected: false },
		{ ids: [4, 5, 6], type: "fire", isSelected: true },
		{ ids: [7], type: "flying", isSelected: false },
	];

	const renderPokemonTable = (pokemonBadges: PokemonTypeBadge[]) =>
		render(
			<PokemonTable pokemonData={pokemonData} pokemonBadges={pokemonBadges} />
		);

	test("table header shows header name Pokemon", () => {
		renderPokemonTable(pokemonBadgesAllUnSelected);
		expect(screen.getByText(/Pokemon/i)).toBeInTheDocument();
	});

	test("table shows 3 grass, 3 poison, 3 fire and 1 flying when all unselected", () => {
		renderPokemonTable(pokemonBadgesAllUnSelected);

		expect(screen.getAllByText(/grass/i).length).toBe(3);
		expect(screen.getAllByText(/poison/i).length).toBe(3);
		expect(screen.getAllByText(/fire/i).length).toBe(3);
		expect(screen.getAllByText(/flying/i).length).toBe(1);
	});

	test("table shows 3 grass, 3 poison, 3 fire and 1 flying when all selected", () => {
		renderPokemonTable(pokemonBadgesAllSelected);

		expect(screen.getAllByText(/grass/i).length).toBe(3);
		expect(screen.getAllByText(/poison/i).length).toBe(3);
		expect(screen.getAllByText(/fire/i).length).toBe(3);
		expect(screen.getAllByText(/flying/i).length).toBe(1);
	});

	test("table shows 3 grass,3 fire when grass and fire are true, no poison and flying", () => {
		renderPokemonTable(pokemonBadgesRandomSelected);

		expect(screen.getAllByText(/grass/i).length).toBe(3);
		expect(screen.getAllByText(/fire/i).length).toBe(3);
		expect(screen.getAllByText(/flying/i).length).toBe(1);
		expect(screen.getAllByText(/poison/i).length).toBe(3);
	});
});

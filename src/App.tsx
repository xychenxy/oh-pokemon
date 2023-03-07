import { useEffect, useState } from "react";
import "css-wipe";
import jsonData from "./data/pokemon-gen1.json";
import type { Pokemon, PokemonTypeBadge } from "./types";
import pokemonLogo from "./img/pokemon-logo.png";
import BadgeFilter from "./components/badge-filter/badge-filter";
import PokemonTable from "./components/pokemon-table/pokemon-table";
import { H3 } from "./components/typography/typography";

const data = jsonData as Pokemon[];

function App() {
	const [pokemonBadges, setPokemonBadges] = useState<PokemonTypeBadge[]>([]);
	const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

	const generatePokemonBadges = (): PokemonTypeBadge[] => {
		const map = new Map<string, PokemonTypeBadge>();
		data.forEach((d) => {
			d.types.forEach((type) => {
				if (map.get(type.type_name)) {
					const oldIds = map.get(type.type_name)?.ids ?? [];
					map.set(type.type_name, {
						ids: [d.id, ...oldIds],
						isSelected: false,
						type: type.type_name,
					});
				} else {
					map.set(type.type_name, {
						ids: [d.id],
						isSelected: false,
						type: type.type_name,
					});
				}
			});
		});

		return Array.from(map.values());
	};

	const updatePokemonBadges = (pokemonTypeBadge: PokemonTypeBadge) => {
		const updatedPokemon = pokemonBadges.map((p) => {
			if (p.type === pokemonTypeBadge.type) {
				p.isSelected = !pokemonTypeBadge.isSelected;
			}
			return p;
		});
		setPokemonBadges(updatedPokemon);
	};

	const resetPokemonBadges = () => {
		const newPokemonBadges = pokemonBadges.map((p) => {
			p.isSelected = false;
			return p;
		});
		setPokemonBadges(newPokemonBadges);
	};

	useEffect(() => {
		const badges = generatePokemonBadges();
		setPokemonBadges(badges);
		setPokemonData(data);
	}, []);

	useEffect(() => {
		const isShowAllData =
			pokemonBadges.every((p) => !p.isSelected) ||
			pokemonBadges.every((p) => p.isSelected);

		if (isShowAllData) {
			setPokemonData(data);
		} else {
			const selectedPokemonIds: Array<number> = pokemonBadges
				.filter((p) => p.isSelected)
				.map((d) => d.ids)
				.flat();

			const newPokemonData = data.filter((d) =>
				selectedPokemonIds.includes(d.id)
			);
			setPokemonData(newPokemonData);
		}
	}, [pokemonBadges]);

	return (
		<div className="container">
			<nav className="nav">
				<img alt="Pokémon Logo" className="logo" src={pokemonLogo} />
			</nav>
			<main className="content">
				<H3
					width={"100%"}
					justifyContent="center"
					mrTop={4}
					mrBottom={1.5}
					textAlign="center"
				>
					Find Pokémon to build your team!
				</H3>
				<BadgeFilter
					pokemonBadges={pokemonBadges}
					updatePokemonBadges={updatePokemonBadges}
					resetPokemonBadges={resetPokemonBadges}
				/>
				<PokemonTable pokemonData={pokemonData} pokemonBadges={pokemonBadges} />
			</main>
		</div>
	);
}

export default App;

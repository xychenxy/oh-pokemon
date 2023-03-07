import { useEffect } from "react";
import "css-wipe";
import pokemonLogo from "./img/pokemon-logo.png";
import BadgeFilter from "./components/badge-filter/badge-filter";
import PokemonTable from "./components/pokemon-table/pokemon-table";
import { H3 } from "./components/typography/typography";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
	generatePokemonTypes,
	getPokemonData,
} from "./store/pokemon/pokemon-action";
import { selectPokemonData } from "./store/pokemon/pokemon-selector";

function App() {
	const dispatch = useAppDispatch();
	const data = useAppSelector(selectPokemonData);

	useEffect(() => {
		dispatch(getPokemonData());
	}, []);

	useEffect(() => {
		dispatch(generatePokemonTypes(data));
	}, [data]);

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
				<BadgeFilter />
				<PokemonTable />
			</main>
		</div>
	);
}

export default App;

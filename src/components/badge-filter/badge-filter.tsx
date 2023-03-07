import React from "react";
import type { PokemonTypeBadge } from "../../store/pokemon/pokemon-types";
import Badge from "../badge/badge";
import {
	BadgeFilterContainer,
	BadgesContainer,
	FilterContainer,
	BadgeFilterWrap,
} from "./style";
import { P1 } from "../typography/typography";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { resetPokemonTypes } from "../../store/pokemon/pokemon-action";
import { selectPokemonTypes } from "../../store/pokemon/pokemon-selector";
import { updatePokemonTypes } from "../../store/pokemon/pokemon-action";

const BadgeFilter = () => {
	const dispatch = useAppDispatch();
	const pokemonTypes = useAppSelector(selectPokemonTypes);

	const handleResetPokemonType = () => {
		dispatch(resetPokemonTypes(pokemonTypes));
	};

	const handlePokemonBadge = (p: PokemonTypeBadge) => {
		dispatch(updatePokemonTypes(p, pokemonTypes));
	};

	return (
		<BadgeFilterContainer>
			<BadgesContainer>
				{React.Children.toArray(
					pokemonTypes.map((p: PokemonTypeBadge) => (
						<BadgeFilterWrap onClick={() => handlePokemonBadge(p)}>
							<Badge pokemonTypeBadge={p} />
						</BadgeFilterWrap>
					))
				)}
			</BadgesContainer>
			<FilterContainer>
				<P1 fSize={0.75} onClick={handleResetPokemonType}>
					Clear all
				</P1>
			</FilterContainer>
		</BadgeFilterContainer>
	);
};

export default BadgeFilter;

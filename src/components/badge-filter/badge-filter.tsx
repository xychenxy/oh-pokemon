import React from "react";
import type { PokemonTypeBadge } from "../../types";
import Badge from "../badge/badge";
import {
	BadgeFilterContainer,
	BadgesContainer,
	FilterContainer,
	BadgeFilterWrap,
} from "./style";
import { P1 } from "../typography/typography";

export type BadgeFilterProps = {
	pokemonBadges: PokemonTypeBadge[];
	updatePokemonBadges: (p: PokemonTypeBadge) => void;
	resetPokemonBadges: () => void;
};
const BadgeFilter = ({
	pokemonBadges,
	updatePokemonBadges,
	resetPokemonBadges,
}: BadgeFilterProps) => {
	return (
		<BadgeFilterContainer>
			<BadgesContainer>
				{React.Children.toArray(
					pokemonBadges.map((p: PokemonTypeBadge) => (
						<BadgeFilterWrap onClick={() => updatePokemonBadges(p)}>
							<Badge pokemonTypeBadge={p} />
						</BadgeFilterWrap>
					))
				)}
			</BadgesContainer>
			<FilterContainer>
				<P1 fSize={0.75} onClick={resetPokemonBadges}>
					Clear all
				</P1>
			</FilterContainer>
		</BadgeFilterContainer>
	);
};

export default BadgeFilter;

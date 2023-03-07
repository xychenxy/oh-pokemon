import { BadgeContainer } from "./style";
import type { PokemonTypeBadge } from "../../types";

type BadgeProps = {
	pokemonTypeBadge: PokemonTypeBadge;
};
const Badge = ({ pokemonTypeBadge }: BadgeProps) => {
	return (
		<BadgeContainer
			mrBottom={0.625}
			mrRight={0.3125}
			fWeight={700}
			pdLeft={0.75}
			pdRight={0.75}
			pdTop={0.5625}
			pdBottom={0.5625}
			display="inline-block"
			color={pokemonTypeBadge.type}
			isSelected={pokemonTypeBadge.isSelected}
		>
			{pokemonTypeBadge.type}
		</BadgeContainer>
	);
};

export default Badge;

import {
	TableComponentContainer,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Image,
	PokemonTableContainer,
	ImageContainer,
	AvatarContainer,
} from "./style";
import type {
	Pokemon,
	PokemonStat,
	TableHeaderGroup,
	PokemonTypeBadge,
	PokemonType,
} from "../../types";
import Badge from "../badge/badge";
import React from "react";

type PokemonListProps = {
	pokemonData: Pokemon[];
	pokemonBadges: PokemonTypeBadge[];
};

export const headerData: TableHeaderGroup[] = [
	{ name: "Pokemon", accessor: "name", group: "name" },
	{ name: "Type(s)", accessor: "type", group: "type" },
	{ name: "Attack", accessor: "attack", group: "stats" },
	{ name: "Sp. Attack", accessor: "special-attack", group: "stats" },
	{ name: "Defense", accessor: "defense", group: "stats" },
	{ name: "Sp. Defense", accessor: "special-defense", group: "stats" },
	{ name: "Speed", accessor: "speed", group: "stats" },
	{ name: "Hit Points", accessor: "hp", group: "stats" },
];

const PokemonTable = ({ pokemonData, pokemonBadges }: PokemonListProps) => {
	// This is used to sort stats order based on header accessor
	// Bonus: if remove any of stats group in headerData, table is still working
	const getSortedStats = (stats: PokemonStat[]): PokemonStat[] => {
		const statsHeaderData: { [k: string]: number } = {};
		const statsHeaderDataList: Array<string> = [];
		headerData
			.filter((header) => header.group === "stats")
			.forEach((d, index) => {
				statsHeaderData[d.accessor] = index;
				statsHeaderDataList.push(d.accessor);
			});

		const newStats = [...stats];
		return newStats
			.filter((s) => statsHeaderDataList.includes(s.stat_name))
			.sort((a, b) => {
				return statsHeaderData[a.stat_name] - statsHeaderData[b.stat_name];
			});
	};

	const getBadgeTypes = (types: PokemonType[]): PokemonTypeBadge[] => {
		let pokemon: PokemonTypeBadge[] = [];
		types.forEach((t) => {
			const result = pokemonBadges.filter((p) => p.type === t.type_name);
			pokemon = [...pokemon, ...result];
		});
		return pokemon;
	};

	return (
		<PokemonTableContainer>
			<TableComponentContainer>
				<Table>
					<Thead>
						<Tr>
							{headerData.map((h) => (
								<Th key={h.name}>{h.name}</Th>
							))}
						</Tr>
					</Thead>
					<Tbody>
						{pokemonData.map((d) => {
							return (
								<Tr key={d.id}>
									<Td>
										<AvatarContainer>
											<ImageContainer>
												<Image src={d.sprite.front_url} alt={d.name} />
											</ImageContainer>
											{d.name}
										</AvatarContainer>
									</Td>
									<Td>
										{React.Children.toArray(
											getBadgeTypes(d.types).map((p) => (
												<Badge pokemonTypeBadge={p} />
											))
										)}
									</Td>
									{getSortedStats(d.stats).map((d) => (
										<Td key={d.stat_name} isHighLight={d.base_stat >= 90}>
											{d.base_stat}
										</Td>
									))}
								</Tr>
							);
						})}
					</Tbody>
				</Table>
			</TableComponentContainer>
		</PokemonTableContainer>
	);
};

export default PokemonTable;

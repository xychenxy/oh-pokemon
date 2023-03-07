export type StatName =
	| "hp"
	| "attack"
	| "defense"
	| "speed"
	| "special-attack"
	| "special-defense";

export interface PokemonStat {
	base_stat: number;
	effort: number;
	stat_name: StatName;
}

export interface PokemonType {
	slot: number;
	type_name: string;
}

export interface PokemonSprite {
	artwork_url: string;
	front_url: string;
	back_url: string;
}

export interface Pokemon {
	id: number;
	order: number;
	name: string;
	height: number;
	genus: string;
	habitat: string;
	color: string;
	flavor_text: string;
	stats: PokemonStat[];
	sprite: PokemonSprite;
	types: PokemonType[];
}

// new
export interface PokemonTypeBadge {
	isSelected: boolean;
	type: string;
}

export interface TableHeaderGroup {
	name: string;
	accessor: StatName | "name" | "type";
	group: "stats" | "name" | "type";
}

export enum POKEMON_ACTION_TYPES {
	GET_POKEMON_DATA = "GET_POKEMON_DATA",
	RESET_POKEMON_TYPES = "RESET_POKEMON_TYPES",
	UPDATE_POKEMON_TYPES = "UPDATE_POKEMON_TYPES",
	GENERATE_POKEMON_TYPES = "GENERATE_POKEMON_TYPES",
}

export interface IGetPokemonData {
	type: typeof POKEMON_ACTION_TYPES.GET_POKEMON_DATA;
	payload: Pokemon[];
}

export interface IResetPokemonTypes {
	type: typeof POKEMON_ACTION_TYPES.RESET_POKEMON_TYPES;
	payload: PokemonTypeBadge[];
}

export interface IUpdatePokemonTypes {
	type: typeof POKEMON_ACTION_TYPES.UPDATE_POKEMON_TYPES;
	payload: PokemonTypeBadge[];
}

export interface IGeneratePokemonTypes {
	type: typeof POKEMON_ACTION_TYPES.GENERATE_POKEMON_TYPES;
	payload: PokemonTypeBadge[];
}

export type PokemonDispatchTypes =
	| IGetPokemonData
	| IResetPokemonTypes
	| IUpdatePokemonTypes
	| IGeneratePokemonTypes;

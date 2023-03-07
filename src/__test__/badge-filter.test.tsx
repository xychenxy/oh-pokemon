import { fireEvent, render, screen } from "@testing-library/react";
import BadgeFilter from "../components/badge-filter/badge-filter";

describe("badge filter section", () => {
	const pokemonBadges = [
		{ ids: [1], type: "grass", isSelected: false },
		{ ids: [2], type: "poison", isSelected: false },
	];
	const mockUpdatePokemonBadges = jest.fn();
	const mockResetPokemonBadges = jest.fn();

	const renderBadgeFilter = () =>
		render(
			<BadgeFilter
				pokemonBadges={pokemonBadges}
				updatePokemonBadges={mockUpdatePokemonBadges}
				resetPokemonBadges={mockResetPokemonBadges}
			/>
		);

	test("render badges with grass and poison text", () => {
		renderBadgeFilter();
		expect(screen.getByText(/grass/i)).toBeInTheDocument();
		expect(screen.getByText(/poison/i)).toBeInTheDocument();
	});

	test("resetPokemonBadges is called when click clear all", () => {
		renderBadgeFilter();
		const clearAll = screen.getByText(/Clear all/i);
		fireEvent.click(clearAll);
		expect(mockResetPokemonBadges).toBeCalled();
	});

	test("updatePokemonBadges is called when click badge", () => {
		renderBadgeFilter();
		const badge = screen.getByText(/grass/i);
		fireEvent.click(badge);
		expect(mockUpdatePokemonBadges).toBeCalled();
	});
});

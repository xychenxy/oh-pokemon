import { render, screen } from "@testing-library/react";
import Badge from "../components/badge/badge";

describe("Badge", () => {
	const pokemonTypeBadge = {
		ids: [1],
		type: "grass",
		isSelected: false,
	};
	const renderBadge = () =>
		render(<Badge pokemonTypeBadge={pokemonTypeBadge} />);

	test("render badge with grass text", () => {
		renderBadge();
		expect(screen.getByText(/grass/i)).toBeInTheDocument();
	});
});

import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import jsonData from "../data/pokemon-gen1.json";
import type { Pokemon } from "../types";

const data = jsonData as Pokemon[];

describe("App", () => {
	const renderApp = () => render(<App />);

	test('renders "Find Pokémon to build your team!" text', () => {
		renderApp();
		const linkElement = screen.getByText(/Find Pokémon to build your team!/i);
		expect(linkElement).toBeInTheDocument();
	});

	test("renders all data row", () => {
		renderApp();
		const dataNum = data.length;
		const trElement1 = screen.getAllByRole("row");
		expect(trElement1).toHaveLength(dataNum + 1);
	});

	test("select grass type, and expect there are 15 grass", () => {
		renderApp();
		const grassNum = calculateTypeQuantity(data, "grass");
		const filterBadge = screen.getAllByText("grass")[0];
		fireEvent.click(filterBadge);
		expect(screen.getAllByText(/^grass$/i).length).toBe(grassNum + 1);
	});

	test("select steel and dragon type, and expect 3 dragon and 2 steel", () => {
		renderApp();
		const dragonNum = calculateTypeQuantity(data, "dragon");
		const steelNum = calculateTypeQuantity(data, "steel");
		fireEvent.click(screen.getAllByText(/dragon/i)[0]);
		fireEvent.click(screen.getAllByText(/steel/i)[0]);
		expect(screen.getAllByText(/^dragon$/i).length).toBe(dragonNum + 1);
		expect(screen.getAllByText(/^steel$/i).length).toBe(steelNum + 1);

		// only show 6 rows (includes header)
		const trElement = screen.getAllByRole("row");
		expect(trElement).toHaveLength(dragonNum + steelNum + 1);
	});

	test("select steel and dragon type, only 6 rows in table", () => {
		renderApp();
		const dragonNum = calculateTypeQuantity(data, "dragon");
		const steelNum = calculateTypeQuantity(data, "steel");
		fireEvent.click(screen.getAllByText(/dragon/i)[0]);
		fireEvent.click(screen.getAllByText(/steel/i)[0]);

		// only show 6 rows (includes header)
		const trElement = screen.getAllByRole("row");
		expect(trElement).toHaveLength(dragonNum + steelNum + 1);
	});

	test("select steel and dragon type, then click clear all button, only 6 rows in table", () => {
		renderApp();
		const dragonNum = calculateTypeQuantity(data, "dragon");
		const steelNum = calculateTypeQuantity(data, "steel");
		fireEvent.click(screen.getAllByText(/dragon/i)[0]);
		fireEvent.click(screen.getAllByText(/steel/i)[0]);

		// only show 6 rows (includes header)
		const trElement = screen.getAllByRole("row");
		expect(trElement).toHaveLength(dragonNum + steelNum + 1);

		fireEvent.click(screen.getByText(/^Clear all$/i));

		// after click clear all button, reset data
		const dataNum = data.length;
		const trElement1 = screen.getAllByRole("row");
		expect(trElement1).toHaveLength(dataNum + 1);
	});
});

function calculateTypeQuantity(data: Pokemon[], type: string): number {
	let num = 0;
	data.forEach((d) => {
		d.types.forEach((t) => {
			if (t.type_name === type) {
				num++;
			}
		});
	});
	return num;
}

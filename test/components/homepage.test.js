import { render } from "@testing-library/react";
import React from "react";
import Homepage from "../../src/components/Homepage";

describe("Homepage component", () => {
	it("renders nav component", () => {
		const { queryByRole } = render(<Homepage />);
		console.log(queryByRole);
	});

	it("renders banner", () => {});

	it("renders categories component", () => {});
});

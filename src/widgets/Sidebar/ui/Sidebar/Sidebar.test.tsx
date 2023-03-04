import { screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe ( "Sidebar", () => {
	test ("testing", () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId("sidebarid")).toBeInTheDocument();
	});
});
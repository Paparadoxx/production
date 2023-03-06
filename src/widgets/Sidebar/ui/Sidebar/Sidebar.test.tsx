import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe ( "Sidebar", () => {
	test ("testing", () => {
		componentRender(<Sidebar />);
		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});
});
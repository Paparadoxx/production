/* eslint-disable react/react-in-jsx-scope */
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "App/providers/ThemeProvider";
import App from "./App/App";

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
/* eslint-disable react/react-in-jsx-scope */
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "App/providers/ThemeProvider";
import App from "./App/App";
import { ErrorBoundary } from "App/providers/ErrorBoundary";

import "features/config/i18n/i18n";

render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById("root")
);
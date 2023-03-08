/* eslint-disable react/react-in-jsx-scope */
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "App/providers/ThemeProvider";
import { StoreProvider } from "App/providers/StoreProvider";
import App from "./App/App";
import "./App/styles/index.scss";
import "features/config/i18n/i18n";
import { ErrorBoundary } from "App/providers/ErrorBoundary";

render(
	<StoreProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</StoreProvider>,
	document.getElementById("root")
);
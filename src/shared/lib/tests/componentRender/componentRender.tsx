import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "features/config/i18n/i18nForTests";
import { MemoryRouter } from "react-router-dom";
import { StoreProvider } from "App/providers/StoreProvider";
import { StateSchema } from "App/providers/StoreProvider/config/StateSchema";

export interface componentRenderOptions {
	route?: string;
	initialState?: DeepPartial<StateSchema>;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
	const {
		route = "/",
		initialState,
	} = options;

	return render(
		<StoreProvider initialState={initialState}>
			<MemoryRouter initialEntries={[route]}>
				<I18nextProvider i18n={i18nForTests}>
					{component}
				</I18nextProvider>
			</MemoryRouter>
		</StoreProvider>
	);
}
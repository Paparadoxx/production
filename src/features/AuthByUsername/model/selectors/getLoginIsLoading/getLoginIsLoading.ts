import { StateSchema } from "App/providers/StoreProvider";

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;

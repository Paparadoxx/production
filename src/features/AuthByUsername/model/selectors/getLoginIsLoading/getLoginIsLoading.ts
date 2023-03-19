import { StateSchema } from "sApp/providers/StoreProvider";

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;

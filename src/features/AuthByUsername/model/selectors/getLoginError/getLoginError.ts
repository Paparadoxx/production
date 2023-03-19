import { StateSchema } from "App/providers/StoreProvider";

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;

import { StateSchema } from "App/providers/StoreProvider";

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || "";

import { StateSchema } from "App/providers/StoreProvider";

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || "";

import { StateSchema } from "sApp/providers/StoreProvider";

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || "";

import { StateSchema } from "sApp/providers/StoreProvider";

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username || "";

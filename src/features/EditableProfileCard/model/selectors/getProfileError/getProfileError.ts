import { StateSchema } from "App/providers/StoreProvider";

export const getProfileError = (state:StateSchema) => state.profile?.error;
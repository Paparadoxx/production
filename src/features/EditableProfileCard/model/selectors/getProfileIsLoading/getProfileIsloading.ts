import { StateSchema } from "App/providers/StoreProvider";

export const getProfileIsLoading = (state:StateSchema) => state.profile?.isLoading;
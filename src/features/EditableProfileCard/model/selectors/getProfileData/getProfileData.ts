import { StateSchema } from "App/providers/StoreProvider";

export const getProfileData = (state:StateSchema) => state.profile?.data;
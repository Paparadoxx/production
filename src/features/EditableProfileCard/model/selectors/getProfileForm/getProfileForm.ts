import { StateSchema } from "App/providers/StoreProvider";

export const getProfileForm = (state:StateSchema) => state.profile?.form;
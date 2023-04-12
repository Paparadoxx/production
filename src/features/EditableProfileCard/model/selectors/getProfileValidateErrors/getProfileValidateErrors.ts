import { StateSchema } from "App/providers/StoreProvider";


export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
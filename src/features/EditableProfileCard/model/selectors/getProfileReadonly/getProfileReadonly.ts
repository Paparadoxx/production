import { StateSchema } from "App/providers/StoreProvider";


export const getProfileReadonly = (state: StateSchema) => state.profile?.readOnly;
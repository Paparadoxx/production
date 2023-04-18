import { StateSchema } from "App/providers/StoreProvider";


export const getUserAuthData = (state:StateSchema) => state.user.authData; 
import { UserSchema } from "entities/User/model/types/user";
import { LoginSchema } from "features/AuthByUsername";

export interface StateSchema {
  user: UserSchema;
	loginForm?: LoginSchema;
}
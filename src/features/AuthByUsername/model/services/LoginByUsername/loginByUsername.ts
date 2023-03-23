import { userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "entities/User/model/types/user";
import { ThunkConfig} from "App/providers/StoreProvider";

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
		User, 
		LoginByUsernameProps,
		ThunkConfig<string>
	>(
		"login/loginByUserName",
		async ({username, password}, {dispatch, extra, rejectWithValue}) => {
			try {
				const response = await extra.api.post<User>("/login", {username, password});
		
				if (!response.data) {
					throw new Error();
				}

				localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
				dispatch(userActions.setAuthData(response.data));

				return response.data;
			} catch (err) {
				console.log(err);
				return rejectWithValue("error");
			}
		}
	);
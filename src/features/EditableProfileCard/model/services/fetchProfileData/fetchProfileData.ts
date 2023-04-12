import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig} from "App/providers/StoreProvider";
import { Profile } from "entities/Profile";


export const fetchProfileData = createAsyncThunk<
	Profile, 
	void,
	ThunkConfig<string>
	>(
		"profile/fetchProfileData",
		async (_, thunkApi) => {
			const { extra, rejectWithValue} = thunkApi;
			try {
				const response = await extra.api.get<Profile>("/profile");
				
				// if (!response.data) {
				// 	throw new Error(); 
				// }
				return response.data;
				
			} catch (err) {
				console.log(err);
				return rejectWithValue("error");
			}
		},
	);
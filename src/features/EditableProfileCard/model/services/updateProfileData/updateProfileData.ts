import { getProfileForm } from "./../../selectors/getProfileForm/getProfileForm";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig} from "App/providers/StoreProvider";
import { Profile } from "entities/Profile";
import { ValidateProfileError } from "../../consts/consts";
import { validateProfileData } from "../validateProfileData/validateProfileData";


export const updateProfileData = createAsyncThunk<
	Profile, 
	void,
	ThunkConfig<ValidateProfileError[]>
	>(
		"profile/updateProfileData",
		async (_, thunkApi) => {
			const { extra, rejectWithValue, getState} = thunkApi;
			const formData = getProfileForm(getState());
			const errors = validateProfileData(formData);

			if (errors.length) {
				return rejectWithValue(errors);
			}
			try {
				const response = await extra.api.put<Profile>("/profile", formData);
				if (!response.data) {
					throw new Error();
				}
				return response.data;
			}	catch (err) {
				console.log(err);
				return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
			}
		},
	);
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "entities/Profile";
import { ProfileSchema } from "../types/editableProfileCardSchema";

const initialState: ProfileSchema = {
	readOnly: true,
	isLoading: false,
	error: undefined,
	data: undefined,
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readOnly = action.payload;
		},
		cancelEdit: (state) => {
			state.readOnly = true;
			state.form = state.data;
			state.validateErrors = undefined;
		},
		updateProfile: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload,
			};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchProfileData.fulfilled, (
				state, 
				action: PayloadAction<Profile>
			) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			})
			.addCase(updateProfileData.pending, (state) => {
				state.validateErrors = undefined;
				state.isLoading = true;
			})
			.addCase(updateProfileData.fulfilled, (
				state,
				action: PayloadAction<Profile>
			) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
				state.readOnly = true;
				state.validateErrors = undefined;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.validateErrors = action.payload;
				state.isLoading = false;
			});
	}
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

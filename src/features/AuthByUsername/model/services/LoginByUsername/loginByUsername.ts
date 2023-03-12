import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "entities/User/model/types/user";

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
	"login/loginByUserName",
	async ({username, password}, thunkApi) => {
		const { extra, dispatch, rejectWithValue } = thunkApi;
		try {
			const response = await axios.post("http//localhost:8000/login", {username, password});
			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (err) {
			console.log(err);
			return rejectWithValue("error");
		}
	}
);
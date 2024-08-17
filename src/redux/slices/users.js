import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainApi } from "../../utils/api/axios";
const initialState = {
  isAuthenticated: false,
  user: null,
  role: null,
  status: 'idle',
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const response = await mainApi.post(`/api/v1/auth/register`, {
        email,
        username,
        password,
      });
      console.log(response)
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
      // console.log(error)

    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
  },
  extraReducers: (builder) => {
    //reducers for register user
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;

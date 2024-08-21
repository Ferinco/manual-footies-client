import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { mainApi } from "../../utils/api/axios";
import {loginAuth} from "../../services/authServices"
const initialState = {
  isAuthenticated: false,
  user: null,
  role: null,
  status: "idle",
  error: null,
};

// Thunk for user registration
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, username, password }, { rejectWithValue }) => {
    try {
      const response = await mainApi.post(`/api/v1/auth/register`, {
        email,
        username,
        password,
      });
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await loginAuth(email, password);
      return response; 
    }
    
    catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
 
  },
  extraReducers: (builder) => {
    
    builder.addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      builder.addCase(registerUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.role = action.payload.role;
        state.status = "succeeded";
        state.error = null;
      })
      builder.addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      //builders for user login
      builder.addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      builder.addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.role = action.payload.user.role;
        state.status = "succeeded";
        state.error = null;
      })
      builder.addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { logout } = userSlice.actions;
export default userSlice.reducer;

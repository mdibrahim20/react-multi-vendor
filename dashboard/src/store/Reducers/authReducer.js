import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";
export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    console.log("Admin Login Info:", info);
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      // console.log("Admin Info:", data);
      return fulfillWithValue(data);
    } catch (error) {
      // console.error(error.response.data);
      // throw error;
      return rejectWithValue({
        error: error.response.data,
      });
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(admin_login.pending, (state, { payload }) => {
      state.loader = true;
      state.successMessage = "";
      state.errorMessage = "";
    });
    builder.addCase(admin_login.fulfilled, (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message || "Login successful";
      state.userInfo = payload;
    });
    builder.addCase(admin_login.rejected, (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.error.error;
    });
  },
});
export const { messageClear } = authReducer.actions;
export default authReducer.reducer;

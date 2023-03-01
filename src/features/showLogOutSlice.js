import { createSlice } from "@reduxjs/toolkit";

export const showLogOutSlice = createSlice({
  name: "showlogoutmodal",
  initialState: {
    value: false,
  },

  reducers: {
    showlogout: (state) => {
      state.value = !state.value;
    },
  },
});

export const { showlogout } = showLogOutSlice.actions;

export const logoutModal = (state) => state.showlogoutmodal.value;

export default showLogOutSlice.reducer;

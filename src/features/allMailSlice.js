import { createSlice } from "@reduxjs/toolkit";

export const allMailSlice = createSlice({
  name: "allMails",
  initialState: {
    value: null,
  },

  reducers: {
    allMailsAction: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { allMailsAction } = allMailSlice.actions;

export const selectAllMails = (state) => state.allMails.value;

export default allMailSlice.reducer;

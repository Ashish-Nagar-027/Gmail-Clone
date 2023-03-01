import { createSlice } from "@reduxjs/toolkit";

export const clickedMailSlice = createSlice({
  name: "clickedMail",
  initialState: {
    value: null,
  },

  reducers: {
    clickedMailData: (state, action) => {
      state.value = action.payload;
    },

    emptyClickedMailData: (state) => {
      state.value = null;
    },
  },
});

export const { clickedMailData, emptyClickedMailData } =
  clickedMailSlice.actions;

export const selectclickedMail = (state) => state.clickedMail.value;

export default clickedMailSlice.reducer;

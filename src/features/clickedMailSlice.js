import { createSlice } from "@reduxjs/toolkit";

export const clickedMailSlice = createSlice({
  name: "clickedmail",
  initialState: {
    value: null,
  },

  reducers: {
    clickedMailData: (state, action) => {
      state.value = action.payload;
    },

    emptyClickedMail: (state) => {
      state.value = null;
    },
  },
});

export const { clickedMailData, emptyClickedMail } = clickedMailSlice.actions;

export const selectclickedMail = (state) => state.clickedmail.value;

export default clickedMailSlice.reducer;

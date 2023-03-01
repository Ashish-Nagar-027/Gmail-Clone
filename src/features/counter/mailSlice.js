import { createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    showFullCompoeseModal: false,
  },

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
      state.showFullCompoeseModal = false;
    },
    openFullComposeModal: (state) => {
      state.showFullCompoeseModal = true;
      state.sendMessageIsOpen = false;
    },
    closeFullComposeModal: (state) => {
      state.showFullCompoeseModal = false;
      state.sendMessageIsOpen = true;
    },
  },
});

export const {
  openSendMessage,
  closeSendMessage,
  openFullComposeModal,
  closeFullComposeModal,
} = mailSlice.actions;

export const selectOpenHalfCompose = (state) => state.mail.sendMessageIsOpen;
export const selectOpenFullCompose = (state) =>
  state.mail.showFullCompoeseModal;

export default mailSlice.reducer;

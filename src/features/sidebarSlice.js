import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "showfullSidebar",
  initialState: {
    value: true,
  },

  reducers: {
    showfullSidebarAction: (state) => {
      state.value = !state.value;
    },
  },
});

export const { showfullSidebarAction } = sidebarSlice.actions;

export const selectshowfullSidebar = (state) => state.showfullSidebar.value;

export default sidebarSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import allMailSlice from "../features/allMailSlice";
import mailSlice from "../features/counter/mailSlice";
import userSlice from "../features/counter/userSlice";
import showLogOutSlice from "../features/showLogOutSlice";
import sidebarSlice from "../features/sidebarSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import clickedMailSlice from "../features/clickedMailSlice";
export const store = configureStore({
  reducer: {
    mail: mailSlice,
    user: userSlice,
    showlogoutmodal: showLogOutSlice,
    showfullSidebar: sidebarSlice,
    clickedmail: clickedMailSlice,
    allMails: allMailSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

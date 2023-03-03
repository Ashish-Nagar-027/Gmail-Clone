import { configureStore } from "@reduxjs/toolkit";
import allMailSlice from "../features/allMailSlice";
import mailSlice from "../features/counter/mailSlice";
import userSlice from "../features/counter/userSlice";
import showLogOutSlice from "../features/showLogOutSlice";
import sidebarSlice from "../features/sidebarSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    mail: mailSlice,
    user: userSlice,
    showlogoutmodal: showLogOutSlice,
    showfullSidebar: sidebarSlice,
    allMails: allMailSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

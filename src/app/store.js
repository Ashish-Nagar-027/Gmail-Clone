import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "../features/counter/mailSlice";
import userSlice from "../features/counter/userSlice";
import showLogOutSlice from "../features/showLogOutSlice";
import sidebarSlice from "../features/sidebarSlice";
export const store = configureStore({
  reducer: {
    mail: mailSlice,
    user: userSlice,
    showlogoutmodal: showLogOutSlice,
    showfullSidebar: sidebarSlice,
  },
});

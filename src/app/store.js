import { configureStore } from '@reduxjs/toolkit';
import mailSlice from '../features/counter/mailSlice';
import formSlice from '../features/counter/formSlice';


export const store = configureStore({
  reducer: {
       mail: mailSlice,
       Form_Values: formSlice
  },
});

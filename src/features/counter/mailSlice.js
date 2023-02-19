import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
  initialState:{

  },
 
  reducers: {
    increment: (state) => {
     
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  
 
});

export const { increment, decrement, incrementByAmount } = mailSlice.actions;

export const selectCount = (state) => state.mail.value;

export default mailSlice.reducer;
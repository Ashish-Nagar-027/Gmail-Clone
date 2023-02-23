import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name:'Form_Values',
    initialState: {
        formValues : {Recipients:'apple', Subject:'ball' , Message:'cat'}
    }, 

    reducers : {
        setFormValues : (state,action) => {
            console.log(action.payload.name)
            console.log(action.payload.value)
            state.formValues = {...state.formValues, [action.payload.name]: action.payload.value}
        }

    }
})

export const selectFormValues = (state, action) => state.Form_Values.formValues
export const {setFormValues} = formSlice.actions 
export default formSlice.reducer
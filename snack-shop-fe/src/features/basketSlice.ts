import { createSlice } from '@reduxjs/toolkit'

const initialState = Array<string>;

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addSnack: (state, action) => {
      return [...state, action.payload]
    },
  },
})

export const { addSnack } = basketSlice.actions;

export default basketSlice.reducer;
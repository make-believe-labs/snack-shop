import { createSlice } from '@reduxjs/toolkit'

interface BasketState {
  snacksInBasket: Array<snackItems>;
}

interface snackItems {
  _id: string,
  snackName: string,
  details: snackDetails,
  unitPrice: number,
  stock: number,
  categories: string[],
}

interface snackDetails {
  flavour: string,
  weight: string
}

const initialState: BasketState = {
  snacksInBasket: []
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addSnack: (state, action) => {
      state.snacksInBasket.push(action.payload)
    }
  }
})

export const { addSnack } = basketSlice.actions;

export default basketSlice.reducer;
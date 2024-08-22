import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './features/basketSlice'
import { useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    basket: basketReducer
  },
})

export type BasketSelector = typeof useSelector
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
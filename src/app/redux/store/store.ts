import { configureStore } from '@reduxjs/toolkit'
import checkBoxSlice from '../features/checkBoxSlice';


export const store = configureStore({
  reducer: {
    checkbox: checkBoxSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch 
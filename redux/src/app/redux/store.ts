import { configureStore } from '@reduxjs/toolkit'
import users from './slice'
import todoReducer from './todoslice'


export const store = configureStore({
  reducer:{
    usersData:users,
    todo:todoReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
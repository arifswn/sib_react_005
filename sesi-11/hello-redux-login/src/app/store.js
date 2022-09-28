import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import logger from "redux-logger"
import useReducer from "../features/users/usersSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: useReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

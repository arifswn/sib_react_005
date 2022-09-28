import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import logger from "redux-logger"
import useReducer from "../features/users/usersSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: useReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

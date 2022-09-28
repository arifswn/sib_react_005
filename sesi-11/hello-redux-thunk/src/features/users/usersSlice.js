import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const USERS_URL = "https://jsonplaceholder.typicode.com/users"

const initialState = {
  entities: [],
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(USERS_URL)
  return response.data
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities.push(...action.payload)
    })
  },
})

export default usersSlice.reducer

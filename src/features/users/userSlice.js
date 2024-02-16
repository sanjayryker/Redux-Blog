import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users"

const initialState = []

export const fetchUsers = createAsyncThunk("users/fetchusers", async () => 
{
    const response = await axios.get(USERS_URL)
    return response.data
})
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers(buidler)
    {
        buidler
        .addCase(fetchUsers.fulfilled, (state,action) =>
        {
            return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users;
export const selectUserById = (state,userId) => state.users.find(user => user.id === userId)
export default userSlice.reducer
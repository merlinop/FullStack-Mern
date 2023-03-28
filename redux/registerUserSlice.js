import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const registerAction = createAsyncThunk("users/registeruser", 
    async ({firstname, lastname, password, email}, {rejectWithValue}) => {
        
       try {     
        const {data} = await axios.post("http://localhost:5600/auth/register", {
       firstname, lastname, password, email
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        //  console.log(data)
        // localStorage.setItem("userData", data)
            return data
       } catch (error) {
        // console.log(error.response.data.message)
            if(!error?.response){
                rejectWithValue(error.response.data.message)
            }
            return rejectWithValue(error?.response?.data.message)
       }
})

const initialState= {
    isloading: false,
    errorWays: null,
    user: {},
}

const registerSlice = createSlice({
    name: "registerSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(registerAction.pending, (state, action) => {
            state.isloading = true
            state.errorWays = null
        })
        builder.addCase(registerAction.fulfilled, (state,action) => {
           state.isloading = true
            state.user = action?.payload
            state.errorWays = null
        })
        builder.addCase(registerAction.rejected, (state, action) => {
            state.isloading = false
            state.errorWays = action?.payload
        })
    }
})



export default registerSlice.reducer
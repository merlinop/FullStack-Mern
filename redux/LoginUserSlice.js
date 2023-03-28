import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const LoginAction = createAsyncThunk("login/loginUser" , 
    async ({email, password}, {rejectWithValue}) => {
        try {
            const {data} = await axios.post("http://localhost:5600/auth/login", {
            email, password
        }, {
            headers: {
                "Content-Type" : "application/json"
            }
        })
        localStorage.setItem("userData", JSON.stringify(data))
        return data

        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }

    }
)

const initialState = {
    isloading: false,
    errorWays: null,
    userData: {}
}



const LoginSlice = createSlice({
        name: "LoginSlice",
        initialState,
        extraReducers: (builder) => {
            builder.addCase(LoginAction.pending, (state, action) => {
                state.isloading = true
                state.errorWays = null
            })
            builder.addCase(LoginAction.fulfilled, (state, action) => {
                state.isloading = false
                state.userData = action.payload
                state.errorWays = null
            })
            builder.addCase(LoginAction.rejected, (state, action) => {
                state.isloading = false
                state.errorWays = action.payload
            })
        }
})


export default LoginSlice.reducer
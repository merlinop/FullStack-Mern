// "use client"
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 1
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementbyamount: (state, action) => {
            state.value += Number(action.payload)
        },
        reset: (state) => {
            state.value = 0
        }
    }
})


export const {increment, decrement, incrementbyamount, reset} = cartSlice.actions

export default cartSlice.reducer


import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "@/redux/registerUserSlice";
import LoginReducer from "@/redux/LoginUserSlice";


const store = configureStore({
    reducer: {
       register:registerReducer,
       login:LoginReducer,
    }
})



export default store
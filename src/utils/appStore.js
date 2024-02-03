import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./userSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({

    reducer : {

        cart : cartReducer,
        user: useReducer,

 


    },
});

export default appStore;
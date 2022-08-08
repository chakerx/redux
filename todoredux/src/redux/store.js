import { configureStore } from "@reduxjs/toolkit";
import TodoListSlice from "./todoSlice";

export const Store = configureStore({
    reducer:{
Todo :TodoListSlice
    }
    
})
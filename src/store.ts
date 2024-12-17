import { configureStore } from "@reduxjs/toolkit";
import BankReducer from "./bankSlice"

const store = configureStore({
    reducer:{
        bank:BankReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
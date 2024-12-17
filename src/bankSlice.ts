import { createSlice } from "@reduxjs/toolkit";


//name
//intialState
//reducers
interface BankState {
    balance:number
}
const initialBankState:BankState = {
    balance: 1000
}
const BankSlice = createSlice({
name:'bank',
initialState:initialBankState,
reducers:{
    deposit:(state, action)=>{
        state.balance = state.balance + action.payload
    }, 
    withdraw:(state, action)=>{
        state.balance = state.balance - action.payload
    }
}

})


export const {deposit,withdraw } = BankSlice.actions;

export default BankSlice.reducer;
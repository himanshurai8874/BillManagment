import { createSlice } from "@reduxjs/toolkit";

const initialState=null

const LoginDataSlice=createSlice({
     name:"LoginData",
     initialState,
     reducers:{
        addLoginData:(state,action)=>{
          state=action.payload
        }
     }
})

export const {addLoginData}=LoginDataSlice.actions

export default LoginDataSlice.reducer
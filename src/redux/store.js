import { configureStore } from "@reduxjs/toolkit";
import BillGenerateData from "./slices/billGenerateSlice";
import LoginDataSlice from "./slices/loginData"

const store=configureStore({
    reducer:{
            BillGenerateData:BillGenerateData,
            LoginDataSlice:LoginDataSlice
    }
    

})

export default store
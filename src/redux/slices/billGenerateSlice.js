import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

 export  const billgenerate=createAsyncThunk("billData/post",async (data)=>{
    console.log(data)
  const grandTotal=data.grandTotal
  console.log(grandTotal);
   const {name, mobileNo, address,billingdate}=data.formData
  //  console.log(data.items);
  //  data.items.map((a)=>{
  //   const {itemName,quantity,price}=data.items
  //  })
     
   console.log(name, mobileNo, address,billingdate)
    const {itemName,quantity,price}=data.items[0]
  

  console.log(itemName,quantity,price)
        const fetchData=await fetch("http://localhost:3000/billGenerateData",{
             method:"POST",
             headers:{
               "Content-Type":"application/json"
             },
             body:JSON.stringify({name, mobileNo, address,billingdate,itemName,quantity,price,grandTotal})
        })
        const resp= fetchData.json()
        return resp
})

export  const customerData=createAsyncThunk("customerData/get",async ()=>{
     const fetchData=await fetch('http://localhost:3000/billGenerateData')
     const resp=await fetchData.json()
     return resp
})


const initialState={
    Data:[],
    isError:false,
    isLoading:false,
    isSuccess:null
}

const BillGenerateData=createSlice({
     name:"billGenerateData",
     initialState,
     extraReducers:(builder)=>{
          builder.addCase(billgenerate.pending,(state,action)=>{
               state.isLoading=true
            })
            builder.addCase(billgenerate.fulfilled,(state,action)=>{
              state.Data=[]
              state.isSuccess=action.payload
            })
            builder.addCase(billgenerate.rejected,(state,action)=>{
              state.isError=true
            })

          builder.addCase(customerData.pending,(state,action)=>{
             state.isError=true
          })
          builder.addCase(customerData.fulfilled,(state,action)=>{
            state.Data=action.payload
          })
          builder.addCase(customerData.rejected,(state,action)=>{
            state.isError=true
          })
     }
     

})

export default BillGenerateData.reducer




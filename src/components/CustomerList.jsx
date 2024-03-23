
import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import {useEffect,useState} from "react"
import {customerData} from "../redux/slices/billGenerateSlice"
import { Link } from "react-router-dom";
function CustomerList() {
    const [id,setId]=useState()
    const dispatch=useDispatch()
   const Data=useSelector(state=>state.BillGenerateData.Data)
   console.log("Data",Data)
   
   const removeHandler=async(Id)=>{
         const deleteCustomer=await fetch(`http://localhost:3000/billGenerateData/${Id}`,{
          method:"DELETE"
         })
         setId(Id)
         
   }

   useEffect(()=>{
    dispatch(customerData())
   },[id])
  return (
    <div className=" customerList-container  ">
      <div> <h3>Customer Tabel</h3></div>
       
    <table  >
      <thead>
        <tr>
          <th>SN </th>
          <th>Client Name</th>
          <th>Billing Date</th>
          <th>Contact Details</th>
          <th>Address</th>
          <th> Product Quantiy</th>
          <th>Billing Price</th>
        </tr>
      </thead>
      <tbody>
        {Data.map(customer => (
          <tr key={customer.id}>
            <td>{customer.id}.</td>
            <td>{customer.name}</td>
            <td>{customer.billingdate}</td>
            <td>{customer.mobileNo}</td>
            <td>{customer.address}</td>
            <td>{customer?.quantity}</td>
            <td>{customer?.grandTotal}</td>
            <td><Link style={{textDecoration:"none",color:"blue"}} to={`/sidenav/view/${customer.id}`}>View</Link></td>
            <td><button onClick={()=>removeHandler(customer.id)} style={{color:"blue",border:"none",backGroundColor:"white"}}>Remove</button></td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default CustomerList
import React from 'react'
import {useEffect,useState} from "react"
import { useParams,useNavigate } from "react-router-dom"
function CustomerDetails() {
  const [customer,setCustomer]=useState()
  console.log(customer)
const {id}=useParams()
const navigate=useNavigate()
const BackToHomePage=()=>{
 navigate("/sidenav")
}
useEffect(()=>{
    const custumerById=async ()=>{
         const fetchData=await fetch(`http://localhost:3000/billGenerateData/${id}`)
         const resp=await fetchData.json()
         if(resp){
          console.log(resp)
          setCustomer(resp)
         }else{
           console.log("error")
         }
         
    }
    custumerById()

},[])

  return (
    <div className="customerDetails-Container">
    <div className="card">
         <h3>Customer Details</h3>
<p><strong>Customer Name:</strong> {customer?.name}</p>
<p><strong>Mobile Number:</strong> {customer?.mobileNo}</p>
<p><strong>Address:</strong> {customer?.address}</p>
<p><strong>Product Name:</strong> {customer?.itemName}</p>
<p><strong>Billing Date:</strong> {customer?.billingdate}</p>
<p><strong>Quantity:</strong> {customer?.quantity}</p>
<p><strong>Billing Price:</strong> {customer?.grandTotal}</p>
</div>
     <button className="backToListBtn  mt-2  btn btn-primary" onClick={BackToHomePage}>
         Back To CustomerList
     </button>
     </div>
 )
  
}

export default CustomerDetails




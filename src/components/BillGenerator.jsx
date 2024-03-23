import React from 'react'
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import {billgenerate} from "../redux/slices/billGenerateSlice"
import SuccessModal from './SuccessModel';
import { useParams,useNavigate } from "react-router-dom"
function BillGenerator() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');
  
  
  const [formData, setFormData] = useState({
    name: '',
    mobileNo:'',
    address: '',
    billingdate:''
  });
  const [items, setItems] = useState([{ itemName: '', quantity: 1, price: 0 }]);

  const dispatch = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    setItems([...items, { itemName: '', quantity: 1, price: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleInputChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const calculateGrandTotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const billData = {
      formData,
      items,
      grandTotal: calculateGrandTotal()
    };

    try {
      await dispatch(billgenerate(billData));
      const successMessage = 'Bill generated successfully!';
      setMessage(successMessage);
      setShowModal(true);
      window.alert(successMessage);
      
      setFormData({
        name: '',
        mobileNo:'',
        address: '',
        billingdate:'' 
      });
      setItems([{ itemName: '', quantity: 1, price: 0 }]);
    } catch (error) {
      const errorMessage = 'Failed to generate bill. Please try again later.';
      setMessage(errorMessage);
      setShowModal(true);
      window.alert(errorMessage);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setMessage('');
  };

  return (
    <div className="billgenerator-conatiner">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Name :</label>
          <input className="inputLink" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Customer Name" required />
          <label>Customer Mobile Number :</label>
          <input className="inputLink" type="number" name="mobileNo" value={formData.mobileNo} onChange={handleChange} placeholder="Customer Mobile Number" required/>
          <label>Customer Address :</label>
          <input className="inputLink" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Customer Address"  required/>
          <label>Billing Date :</label>
          <input className="inputLink" type="date" name="billingdate" value={formData.billingdate} onChange={handleChange} placeholder="Billing Date"  required/><br/><br/>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Items</h3>
          {items.map((item, index) => (
            <div key={index} className="mb-4 flex items-center">
              <label mx-4>Product Name:
                <input
                  type="text"
                  placeholder="Product Name"
                  value={item.itemName}
                  onChange={(e) => handleInputChange(index, 'itemName', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
                />
              </label>
              <label>Quantity:
                <input
                  type="number"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 w-24"
                />
              </label>
              <label>Price:
                <input
                  type="number"
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2 w-24"
                />
              </label>
              <span className="font-bold mr-2 mx-3 text-center">
                Total: {item.quantity * item.price}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveItem(index)}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition-colors duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <div className='flex justify-between'>
            <button
              type="button"
              onClick={handleAddItem}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              Add Item
            </button>
            <div className="flex justify-end mb-4">
              <span className="font-bold mx-3 text-center"> Grand Total : {calculateGrandTotal()}</span>
            </div>
          </div>
        </div>
        <div className="generateBillBtn">
          <button type="submit"   >Generate Bill</button>
        </div>
      </form>
      <SuccessModal isOpen={showModal} onClose={closeModal} message={message} />
    </div>
  );
}

export default BillGenerator


















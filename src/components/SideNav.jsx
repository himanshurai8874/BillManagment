import React from "react";
import { useState } from "react";
import {
  FaBars,
  FaRegChartBar,
  FaThList,
  FaTh
}from "react-icons/fa";

import { Link, Outlet } from "react-router-dom";
function SideNav() {
  const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>

        },
       
        {
            path:"/sidenav",
            
            name:"Customer Tabel",
            icon:<FaRegChartBar/>

        },
        {
            path:"/sidenav/billgenerate",
            name:"Bill Generate",
            icon:<FaThList/>

        },
     
    ]

    
  return (
    <>
      <div className="container  sidenavcolor">
      <main  style={{background:"lightskyblue"}} >{<Outlet/>}</main>
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar ">
               <div className="top_section">
                   <h5 style={{display: isOpen ? "block" : "none"}} className="logo">Menu</h5>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <Link to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </Link>
                   ))
               }
           </div>

           
        </div>
       
    </>
  );
}

export default SideNav;





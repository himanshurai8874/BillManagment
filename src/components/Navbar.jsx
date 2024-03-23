import React from 'react'
import { Link } from "react-router-dom"


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light custom-navbar-bg sticky-top w-100" >
                <Link className="navbar-brand text-light fs-2 px-5" to="/product">finance</Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <div className="ms-auto ">
                        <ul className="navbar-nav">
                            <li className="nav-item  me-5 ms-2">
                                <Link className="nav-link text-light fs-6 " to="/#">Home</Link>
                            </li>
                            <li className="nav-item me-5 ms-2">
                                <Link className="nav-link text-light fs-6" to="/#">Careers</Link>
                            </li>
                            <li className="nav-item me-5 ms-2">
                                <Link className="nav-link text-light fs-6" to="/#">Blog</Link>
                            </li>
                            <li className="nav-item me-5 ms-2">
                                <Link className="nav-link text-light fs-6" to="/#">Services</Link>
                            </li>
                            <li className="nav-item me-5 ms-2">
                                <Link className="nav-link text-light fs-6" to="/#">Contact</Link>
                            </li>
                           
                            <li className="nav-item  me-5 ms-2 ">
                            <button type="button" className="btn  btn-color" ><Link className="nav-link text-light fs-6 "  to="/#">Business</Link></button>     
                            </li>
  
                        </ul>
                    </div>
                </div>

            </nav>


        </>)
}






import React from "react";
import { Link } from "react-router-dom";
const Navbar =()=>{

    return(
        <div className=" container  border flex mx-auto justify-between">
            <h3 className="text-red-600 p-3 text-3xl">React</h3>
            <div className="">
                <Link to="/" className="me-4 text-2xl ">Home</Link>
                <Link to="product" className="me-4 text-2xl ">Product</Link>
                <Link to="users" className="me-4 text-2xl ">About</Link>
                <Link to="about" className="me-4 text-2xl ">Users</Link>
            </div>
        </div>
    )
}

export default Navbar
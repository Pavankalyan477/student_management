import React from 'react'
import "./navbar.css"
import pic from "./images/pic.jpg"

export default function Navbar() {

    const Redirect = async () =>
    {
        await(window.location.href="http://localhost:3003/auth/google")
    }
    return (
        <div className='navbar'>
            <div><img src="https://www.pcquest.com/wp-content/uploads/2015/02/Schoolmgr.png" alt="pic" /></div>
            <div><h2>STUDENT MANAGEMENT</h2></div>
            <div onClick={Redirect} to=" "><button>SIGN IN/SIGN UP</button></div>
        </div>
    )
}

import React from 'react'
import "./navbar.css"
import pic from "./images/pic.jpg"
import {Link} from "react-router-dom"
import Admin from './Admin'

export default function Navbar() {

    const Redirect = async () =>
    {
        await(window.location.href="http://localhost:2233/auth/google")
        
        // window.location.href={Admin}
    }
    return (
        <div className='navbar'>
            <div><img src="https://www.pcquest.com/wp-content/uploads/2015/02/Schoolmgr.png" alt="pic" /></div>
            <div><h2>STUDENT MANAGEMENT</h2></div>
            <Link onClick={Redirect} to="/adminpage"><button>ADMIN LOGIN</button></Link>
        </div>
    )
}

import react from 'react'
import {Link} from 'react-router-dom'
import React from "react";

function Logout(){
    return(
        <button className='btn btn-link logout-btn' style={{color: "white"}} type="button"><Link to="/">Sign-off</Link></button>
    )
}
export default Logout
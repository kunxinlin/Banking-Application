import React from 'react'
import {Link} from "react-router-dom";

function Header(){
    return(
        <div>
            <button className='btn btn-link logout-btn' style={{color: "white"}} type="button"><Link to="/">Sign-off</Link></button>


        </div>
    )
}
export default Header;
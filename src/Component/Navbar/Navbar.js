import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='nav'>
        <div className="nav-left">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dYFM1O8GbZ52Bc3lQqGXRSOsJrK3RnHbaQ&usqp=CAU" alt="" />
            <input type="text" placeholder="Search User"/>
        </div>
        <div className="nav-right">
            <p>HI, ALPHA USER</p>
            <p>HOME</p>
            <p>ABOUT US</p>
            <p>PROFILE</p>
            <p>DARK MODE</p>
            <button>LOGOUT</button>
        </div>
    </div>
  )
}

import React from 'react'
import logo from './assets/shared/logo.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='nav__container'>
            <nav className='fx-btw'>
                <img src={logo} alt="logo" />
                <ul className='fx-btw'>
                    <li><Link to="/" style={{color:'white',textDecoration:'none'}}>HOME</Link></li>
                    <li><Link to="/destination" style={{color:'white',textDecoration:'none'}}>DESTINATION</Link></li>
                    <li><Link to="/crew" style={{color:'white',textDecoration:'none'}}>CREW</Link></li>
                    <li><Link to="/technology" style={{color:'white',textDecoration:'none'}}>TECHNOLOGY</Link></li>
                </ul>
            </nav>
            {/* <Outlet /> */}
        </div>
    </div>
  )
}

export default Navbar
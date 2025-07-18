import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../images/menu-icon.png'


function Navbar() {

  const [mobileMenu,setMobileMenu]= useState(false);
  const toggleMenu = ()=>{
   mobileMenu ? setMobileMenu(false): setMobileMenu(true);
 }



  return (
   
   <div className="Nav">
    <img src={logo} alt="" className="logo"/>
    <ul className={mobileMenu?'':'hide-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="program" smooth={true} offset={-250} duration={500}>Program</Link></li>
        <li><Link to="about" smooth={true} offset={-140} duration={500}>About us</Link> </li>
        <li><Link to="campus" smooth={true} offset={-240} duration={500}>Campus</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-220} duration={500}>Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-220} duration={500} >Contact us</Link></li>
    </ul>
    <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu}></img>
   </div>
  
  )
}

export default Navbar

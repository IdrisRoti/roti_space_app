import {NavLink} from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import MenuBtn from "../../assets/shared/icon-hamburger.svg"
import closeBtn from "../../assets/shared/icon-close.svg"

import './navbar.css';
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      <div className="logo"><img src={Logo} alt="Logo"/></div>
      <div className="line"></div>
      <ul className={`${ showNav ? 'showNav' : "hideNav"}`}>
        <li><NavLink className="link"  to="/"><b>00</b> HOME </NavLink></li>
        <li><NavLink className="link"  to="destination"><b>01</b> DESTINATION </NavLink></li>
        <li><NavLink className="link"  to="crew"><b>02</b> CREW </NavLink></li>
        <li><NavLink className="link" to="technology"><b>03</b> TECHNOLOGY </NavLink></li>
        <img src={closeBtn} alt="Close menu button" className="closeMenu" onClick={()=> {
        setShowNav(false) }}/>
      </ul>
      <img className= "menuBtn" src={MenuBtn} alt="Menu button" onClick={()=> {
        setShowNav(true)
      }}/>
    </nav>
  )
}

export default Navbar
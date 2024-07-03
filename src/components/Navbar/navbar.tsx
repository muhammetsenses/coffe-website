
import { Link,NavLink } from 'react-router-dom'
import "./navbar.css"
import logo from "../../assets/logo.png"
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'
import { FaInstagram } from 'react-icons/fa'

const Navigation = () => {
  const [isNavActive,setIsNavActive] = useState(false)

  const clickedNav = () => {
    setIsNavActive(!isNavActive)
    console.log(isNavActive)
  }

  return (
    <>
    <nav>
      <Link to=""><img className='img-fluid logo' src={logo} alt="" /></Link>
      <span className='slogan'>#EverySipIsDifferentLOVE!</span>
      <div>
        <ul id='navbar'  className={isNavActive ? `active`: ""}>
          <li><NavLink onClick={() => clickedNav()} className={({ isActive }) => (isActive ? 'active' : '')} to={"/"}>Anasayfa</NavLink></li>
          <li><NavLink onClick={() => clickedNav()} className={({ isActive }) => (isActive ? 'active' : '')} to={"/menu"}>Menu</NavLink></li>
          <li><NavLink onClick={() => clickedNav()} className={({ isActive }) => (isActive ? 'active' : '')} to={"/hakkımızda"}>Hakkımızda</NavLink></li>
          <li><NavLink onClick={() => clickedNav()} className={({ isActive }) => (isActive ? 'active' : '')} to={"/iletisim"}>İletişim</NavLink></li>
          <li><NavLink onClick={() => clickedNav()} className={({ isActive }) => (isActive ? 'active' : '')} to={"https://www.instagram.com/espressolove_tr/"} target='_blank'><FaInstagram  className='instagram-icon'/></NavLink></li>
        </ul>
      </div>
      <div onClick={() => clickedNav()} id='mobile'>
        {isNavActive ? <i><FaTimes /> </i> : <i><FaBars /></i>}
        
      </div>
    </nav>
    </>
  )
}

export default Navigation;
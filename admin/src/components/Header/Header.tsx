import React from 'react'
import './Header.css'
import {BsFillBellFill , BsFillEnvelopeFill , BsPersonCircle , BsJustify, BsSearch} from 'react-icons/bs'

interface HeaderProps {
  OpenSidebar: (event: React.MouseEvent<SVGElement, MouseEvent>) => void;
}

const Header: React.FC<HeaderProps> = ({OpenSidebar}) => {
  return (
    <header className='header'>
        <div className="menu-icon">
            <BsJustify className="icon" onClick={OpenSidebar}/> 
        </div>
        <div className="header-left">
            <BsSearch className="icon"/>
        </div>
        
        <div className="header-right">
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>

    </header>
  )
}

export default Header

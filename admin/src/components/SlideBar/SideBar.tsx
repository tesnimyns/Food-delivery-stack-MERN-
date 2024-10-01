import React, { useState } from 'react'
import './SlideBar.css'
import {BsCart3, BsFillArchiveFill, BsFillGearFill, BsGrid1X2Fill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";

interface SlideBarProps {
    openSidebarToggle: boolean;
    OpenSidebar: () => void;
}


const SideBar : React.FC<SlideBarProps> = ({openSidebarToggle, OpenSidebar}) => {


    const [menu,setMenu]= useState('dashbord')

  return (
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : ''}>
        <div className="sidebar-title">
            <div className="sidebar-brand">
                <BsCart3 className="icon_header"/>  &nbsp;  G-Delivery Food 
        
            </div>
            <span className="icon close_icon" onClick={OpenSidebar}>X</span>
        </div>
        

        <ul className="sidebar-list" >
            <li  className="sidebar-list-item" onClick={()=>setMenu('dashbord')}>
                <Link to='/' className={menu==="dashbord"? "active":""}>
                    <BsGrid1X2Fill className="icon"/> &nbsp;Dashboard 
                </Link>
            </li>
            <li  className="sidebar-list-item" onClick={()=>setMenu('list')}>
                <Link to='/products' className={menu==="list"? "active":""} >
                    <BsFillArchiveFill className="icon"/> &nbsp; Products List
                </Link>
            </li>
            <li  className="sidebar-list-item" onClick={()=>setMenu('add')}>
                <Link to='/add' className={menu==="add"? "active":""}>
                    <IoIosAddCircleOutline className="icon"/>  &nbsp;
                    Add Products 
                </Link>
            </li>
            <li  className="sidebar-list-item" onClick={()=>setMenu('orders')}>
                <Link to='/orders' className={menu==="orders"? "active":""}>
                    <BsCart3 className="icon"/> &nbsp; Orders
                </Link>
            </li>
            <li className="sidebar-list-item" onClick={()=>setMenu('setting')}>
                <a href="">
                    <BsFillGearFill className="icon"/> &nbsp; Settings
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default SideBar

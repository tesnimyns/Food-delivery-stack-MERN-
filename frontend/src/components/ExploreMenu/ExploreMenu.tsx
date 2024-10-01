import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

type ExploreMenuProps = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({category,setCategory}) => {
  return (
    <div>
      <div className="explore-menu" id='explore-menu'>
        <h1>Explore Our Menu </h1>
        <p className="explore-menu-text">
            Choose from a diverse menu. Our mission is to satisfy your cravingd and elevate your dining experience .
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) =>{
                return (
                    <div onClick={()=> setCategory((prev : string) => prev === item.menu_name ? "All" : item.menu_name)} key= {index} className="explore-menu-list-item">
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}

        </div>
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu

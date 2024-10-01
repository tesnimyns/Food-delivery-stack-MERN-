import React, { useContext } from 'react'
import './FoodItem.css'
import { FaStar } from "react-icons/fa";

import { IoMdAdd ,IoMdRemove } from "react-icons/io";
import { StoreContext } from '../../Context/StoreContext';


interface StoreContextType {
  cartItems: { [key: string]: number }; 
  addToCart: (id:string ) => void;
  removeFromCart: (id: string) => void;

}
interface FoodItemProps {
    _id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    
  }
const FoodItem = ({_id,name,price,description,image}:FoodItemProps) => {


const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext)

 
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={url+"/images/"+image} alt="" />
        {!cartItems[_id]
        ? <div className='add' onClick={()=> addToCart(_id)}><IoMdAdd /></div> : <div className='food-item-counter'>
        <div className='remove' onClick={()=> removeFromCart(_id)} ><IoMdRemove /></div>
        <p>{cartItems[_id]}</p>
        <div className="ajout" onClick={()=>addToCart(_id)}><IoMdAdd /></div>
        </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <div className='stars'>
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item_price">{price}    Dinar</p>
      </div>
    </div>
  )
}

export default FoodItem

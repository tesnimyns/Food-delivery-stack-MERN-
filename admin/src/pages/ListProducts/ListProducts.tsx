import React, { useEffect, useState } from 'react'
import './ListProducts.css'
import axios from 'axios';
import {toast} from 'react-toastify'

interface AddProductsProps {
  url: string;
}

interface Product {
  _id: string; 
  image: string;
  name: string;
  category: string;
  price: number;
}

const ListProducts: React.FC<AddProductsProps> = ({url}) => {

  
  const [list,setList]= useState<Product[]>([]);

  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`);
    
    if(response.data.success){
      setList(response.data.data);
    }else{
      toast.error("Error")
    }
  }


  const removeFood = async(foodId:string)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price} Dt </p>
              <p className='cursor' onClick={()=>removeFood(item._id)}>X</p>
              
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default ListProducts

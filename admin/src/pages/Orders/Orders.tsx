import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import parcel_icon from '../../assets/parcel_icon.png'
import './Orders.css'

interface OrderItem {
  name: string;
  quantity: number;
}
interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  phone: string;
}

interface Order {
  items: OrderItem[];
  amount: number;
  status: string;
  address:Address;
  _id: string;
}
interface OrdersProps {
  url: string;
}

const Orders: React.FC<OrdersProps> = ({url}) => {

  const [orders,setOrders]= useState<Order[]>([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }else{
      toast.error("Error")
    }

  }

  const statusHandler = async (event: React.ChangeEvent<HTMLSelectElement>, orderId: string)=>{
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
    

  }

  useEffect(()=>{
    fetchAllOrders();
  },[])

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className='order-item'>
            <img src={parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index)=>{
                  if(index===order.items.length-1){
                    return item.name + "x" + item.quantity
                  }else{
                    return item.name + "x" + item.quantity+ ","
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName+""+order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street+","}</p>
                <p>{order.address.city+","+order.address.state+","+order.address.country+","+order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>{order.amount} dinar </p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Orders

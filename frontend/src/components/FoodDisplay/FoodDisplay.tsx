import  { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

interface StoreContextType {
  food_list: {
    _id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
  }[];
}

interface FoodItemProps {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

interface FoodDisplayProps {
  category: string;
}

const FoodDisplay = ({ category }: FoodDisplayProps) => {
  const { food_list } = useContext(StoreContext) as StoreContextType;

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes</h2>
      <div className="food-display-list">
        {food_list.map((item: FoodItemProps, index: number) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem 
                key={index} 
                _id={item._id} 
                name={item.name} 
                description={item.description} 
                price={item.price} 
                image={item.image} 
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

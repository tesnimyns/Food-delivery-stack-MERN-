import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'



const Home = () => {

  const [category,setCategory] = useState<string>("All");

  return (
    <div>
    <Header/>
    <div>
      <ExploreMenu category ={category} setCategory={setCategory}/>
      <FoodDisplay  category={category}/>
    </div>
 
    </div>
  )
}

export default Home

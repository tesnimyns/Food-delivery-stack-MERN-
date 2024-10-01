import React from 'react'
import assets from '../../assets/assets'
import './AboutUs.css'


const AboutUs = () => {
  return (
    <div className='aboutus'>
      <div className='aboutus1'>
        <img src={assets.plat} alt="" />
        <h5>Quality Food</h5>
        <p>We prioritize quality above all else. Every meal is prepared with the freshest ingredients .</p>


      </div>
      <div className='aboutus1'>
        <img src={assets.delivery} alt="" />
        <h5>Fast Delivery</h5>
        <p>With our fast delivery service, your favorite meals arrive hot and fresh at your doorstep in no time.</p>

      </div>
      <div className='aboutus1'>
        <img src={assets.tasty} alt="" />
        <h5>Super Taste</h5>
        <p>Experience the superb taste of our expertly prepared meals, bursting with flavors you'll love.</p>

      </div>
    </div>
  )
}

export default AboutUs

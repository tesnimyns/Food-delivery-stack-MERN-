import React from 'react'
import  './Header.css'



const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h3>We Make Delicious Food  </h3>
        <p>We will fill your tummy with delicious food with fast delivery .</p>
        <a href='#explore-menu'><button >View Menu </button></a>
      </div>
    </div>
  )
}

export default Header

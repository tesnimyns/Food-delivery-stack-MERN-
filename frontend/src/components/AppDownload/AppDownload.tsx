import React from 'react'
import './AppDownload.css'
import assets  from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> G-Delivery App</p>
      <div className="app-download-platforms">
        <img src={assets.playstore} alt="playstore" className='playstore'/>
        <img src={assets.appstore} alt="appstore"  className='Appstore'/>
      </div>

    </div>
  )
}

export default AppDownload

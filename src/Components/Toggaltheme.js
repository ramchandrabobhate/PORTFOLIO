import React from 'react'
import './Toggaltheme.css'
import Sun from '../Img/sun.png'
import Moon from '../Img/moon.png'
function Toggaltheme() {
  return (
    <div className="t">
        <img src={Sun} alt=""  className='t-img'/>
        <img src={Moon} alt="" className='t-img' />
        <button className='t-button'></button>
    </div>
  )
}

export default Toggaltheme
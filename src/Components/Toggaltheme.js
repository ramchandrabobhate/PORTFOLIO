import React, { useContext } from 'react'
import './Toggaltheme.css'
import Sun from '../Img/sun.png'
import Moon from '../Img/moon.png'
import { ThemeContext } from '../Context'
function Toggaltheme() {
  const theme=useContext(ThemeContext)
  const handelClick=()=>{
    theme.dispatch({type:'TOGGLE'})
  }
  
  return (
    <div className="t">
        <img src={Sun} alt=""  className='t-img'/>
        <img src={Moon} alt="" className='t-img' />
        <button className='t-button' onClick={handelClick} style={{ left :theme.state.darkMode ? 0 :25 }}></button>
    </div>
  )
}

export default Toggaltheme
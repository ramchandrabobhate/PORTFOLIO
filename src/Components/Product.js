import React from 'react'
import './Product.css'
import zhl from '../Img/zhl.png'
function Product() {
  return (
  <div className="p">
    <div className="p-browser">
      <div className="p-circle"></div>
      <div className="p-circle"></div>
      <div className="p-circle"></div>
    </div>
    <a href="http://www.zuventus.co.in/" target='_blank' rel='noreferrer'>
      <img src={zhl} alt="" className='p-img' />
    </a>
    
  </div>
  )
}

export default Product
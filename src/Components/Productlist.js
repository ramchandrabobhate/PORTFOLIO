import React from 'react'
import Product from './Product'
import './Productlist.css'
function Productlist() {
  return (
    <div className="pi">
        <div className="pi-texts">
            <h1 className='pi-title'>Create inspired its Zuventus</h1>
            <p className='pi-desc'>Zuventus is driven by a team of professionals with exceptional performance record in previous assignments. Naturally there was no dearth of courage to set challenging goals and achieving them through conviction and confidence.</p>
            <div className="pi-list">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            </div>
        </div>
       
    </div>
  )
}

export default Productlist
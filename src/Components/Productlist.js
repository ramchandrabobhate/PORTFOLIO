import React from 'react'
import Product from './Product'
import './Productlist.css'
function Productlist() {
  return (
    <div className="pi">
        <div className="pi-texts">
            <h1 className='pi-title'>Create & inspired. it's Ram</h1>
            <p className='pi-desc'>Below Some of my client websites and Application which shows my skills and productive work.</p>
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
import React from 'react'
import './Intro.css'
import me from '../Img/ram.png'
function Intro() {
    return (
        <div className='i'>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello,My Name is </h2>
                    <h1 className="i-name">Ramchandra Bobhate </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">ASp.net Developer </div>
                            <div className="i-title-item">React Developer</div>
                            <div className="i-title-item">Node Developer</div>
                            <div className="i-title-item">Fullstack Developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                    I design and develop Website Application for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
                    </div>
                </div>
            </div>

            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
import React from 'react'
import './About.css'
import Award from '../Img/award.jpg'
function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card-bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
                        className='a-img' />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>I am a Software developer work in Retail, Healthcare and Finance domain Project</p>
                <p className='a-desc'>Working With Software industry I also work in Freelancer as website developer in React and HTML CSS as latest Technology. I try to give my best to customers by designing their portfolio in the digital marketplace to improve there business wealth </p>

                <div className="a-award">
                    <img src={Award} alt="" className='a-award-img' />

                    <div className="a-award-text">
                        <h4 className='a-award-title'>Best Applicatin Developement Award 2016</h4>
                        <p className="a-award-desc">We develop and design high level Application and architecture for our finance bank client</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
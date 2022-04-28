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
                <p className='a-sub'>Should you or shouldn't you put the effort into crafting your perfect 'About Me' page</p>
                <p className='a-desc'>Use this space to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience</p>

                <div className="a-award">
                    <img src={Award} alt="" className='a-award-img' />

                    <div className="a-award-text">
                        <h4 className='a-award-title'>International Design</h4>
                        <p className="a-award-desc">Internatinal team to work and ellobaterd nd s d</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
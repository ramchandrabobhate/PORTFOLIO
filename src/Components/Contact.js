
import './Contact.css'
import Phone from '../Img/phone.png'
import Email from '../Img/email.png'
import Address from '../Img/address.png'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
const[done ,setDone]=useState(false);
    const formref = useRef();
    const handelSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_m2midin', 'template_34a4xln', formref.current, 'nx1KG8r3VKNEUpblc')
      .then((result) => {
        setDone(true);
        formref.current='';
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className='c-icon' />
                            7400394289
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className='c-icon' />
                            Ramchandrabobhate@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className='c-icon' />
                            Vartak Nagar.Thane.
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>What is your Story?</b>Get in touch. Always available for
            freelancing if the right project comes along. me.
                    </p>
                    <form ref={formref} onSubmit={handelSubmit}>
                        <input type="text" placeholder='name' name='user_name' />
                        <input type="text" placeholder='subject' name='user_subject' />
                        <input type="text" placeholder='email' name='user_email' />
                        <textarea id="" placeholder='message' name='message' rows="5"></textarea>
                        <button>Submit</button>
                    </form>
                    {done && 'Thank you......'}
                </div>
            </div>
        </div>
    )
}

export default Contact
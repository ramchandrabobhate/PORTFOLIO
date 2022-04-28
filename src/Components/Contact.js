
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
                    <h1 className="c-title">Lest discuss your product</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className='c-icon' />
                            022-0125-254
                        </div>
                        <div className="c-info-item">
                            <img src={Email} alt="" className='c-icon' />
                            zuventus@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={Address} alt="" className='c-icon' />
                            west country france costarica
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>What is your Story</b> Get in touch with use
                        zuventus always help you with good vision
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
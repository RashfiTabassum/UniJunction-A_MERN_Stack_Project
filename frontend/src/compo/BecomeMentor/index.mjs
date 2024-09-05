import React from 'react'
import './style.css'
import img2 from "../photos/tutor2.png";

export default function index() {
  return (
    <div className='full-body_nab_become'>
        <div className='image-body_nab_become'>
        <div ><img src={img2} className='pic_nab_become'/></div>
        </div>
        <div className='content-body_nab_become'>
            <h1 className='content-title_nab_become'>Become  mentor</h1>
            <p className='content-subtitle_nab_become'>Monetize your expertise and passion for teaching by joining UniJunction as an online tutor. Shape the future while earning from the comfort of your home. Join our global community of educators and empower students worldwide to achieve their goals.</p>
            <ul className='content-list_nab_become'>
                <li>Connect with eager learners</li>
                <li>Enjoy secure payments</li>
                <li>Grow your tutoring business</li>
            </ul>
            <div ><a href="/IP Project/IP Project/sign.html" className='tutor-btn_nab_become'>Become A Mentor</a></div>
        </div>
        

      
    </div>
  )
}

import React,{useEffect} from 'react'
import './style.css';
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Navbarr from '../Navbarr/index.mjs';
import ScrollTrigger from "gsap/ScrollTrigger.js"
import { AlignJustify,User } from 'lucide-react';


// Inside your component


import img2 from "../photos/file (12).png";
import img3 from "../photos/3.png";
import img4 from "../photos/4_prev_ui.png";
import img5 from "../photos/home2.jpg";
import img6 from "../photos/6_processed.png";
import img1 from "../photos/cloud1.png";
gsap.registerPlugin(ScrollTrigger);


export default function Animation() {
    useEffect(() => {
        gsap.to('.sun_nab', {
          scrollTrigger: {
            scrub: .5,
            trigger: '.trigger-element',
    start: 'top center',
    end: 'bottom center',
          },
          y: 300,
          scale: 1.5
         
        });
        gsap.to('.bg_nab', {
          scrollTrigger: {
            scrub: .5,
            trigger: '.trigger-element',
    start: 'top center',
    end: 'bottom center',
          },
          // y: -200,
          scale: 1.5
         
        });
        gsap.to('.man_nab', {
          scrollTrigger: {
            scrub: .5,
            trigger: '.trigger-element',
    start: 'top center',
    end: 'bottom center',
          },
          // x: 500,
          // y: 300,
          // y: 200,
          // scale: 1.5
          // rotation: 2, // Ensure no rotation is applied
          // duration: 2,
          y:300,
        
        });
        
       

        gsap.to('.cloud_nab', {
          scrollTrigger: {
            scrub: .5,
            trigger: '.trigger-element',
    start: 'top center',
    end: 'bottom center',
          },
          x:-700,
        });
        
        gsap.to('.cloud1_nab', {
          scrollTrigger: {
            scrub: .5,
            trigger: '.trigger-element',
    start: 'top center',
    end: 'bottom center',
          },
          x:500,
          y:100
        });
        gsap.to('.cloud2_nab', {
          scrollTrigger: {
            scrub: .5,
            trigger: '.trigger-element',
    start: 'top center',
    end: 'bottom center',
          },
          x:700,
          y:-100
        });
  
        gsap.to('.home_nab', {
          scrollTrigger: {
            scrub: .5,
            trigger: '.trigger-element',
    start: 'top center',
    end: 'bottom center',
          },
          // y: -200,
          x:200,
          y:-300,
          scale:2.5
          // scale:1.5
        });
        gsap.to('.text1_nab', {
                scrollTrigger: {
                  scrub: .5,
                  trigger: '.trigger-element',
          // start:'20%' ,
          // end: '80%',
          opacity:0
                },
                // y: -200,
               
                // y:-6000,
                y:-6000,
                fontWeight:1000,
                scale:2.5,
                opacity:10,
                fontSize:'75px',
               
               
              });
              gsap.to('.text2_nab', {
                scrollTrigger: {
                  scrub: .5,
                  trigger: '.trigger-element',
          // start:'20%' ,
          // end: '80%',
          opacity:0
                },
                // y: -200,
               
                // y:-6000,
                y:-5500,
                fontWeight:1000,
                scale:2.5,
                opacity:10,
                fontSize:'75px',
               
               
              });
        
      }, []);
      
  return (
    <div>
      <Navbarr />
    <div className='back_nab'>
     
      <div>
      <img src={img3} className='bg_nab'/>
      <img src={img5} className='home_nab'/>
      <img src={img2} className='man_nab'/>
      <img src={img6} className='people_nab'/>
      <img src={img4} className='sun_nab'/>
      <img src={img1} className='cloud_nab'/>
      <img src={img1} className='cloud1_nab'/>
      <img src={img1} className='cloud2_nab'/>
      <h1 className='text1_nab'>UniJunction</h1>
      <h3 className='text2_nab'>welcome to our mentor hub</h3>
      {/* <h6 className='text3'>Elevate your skills and career with our exclusive mentorship platform, connecting you with top-tier professionals eager to guide your journey. Experience personalized guidance, tailored strategies, and invaluable insights to propel your success forward. Join us and unlock your fullest potential today.</h6> */}
      
      </div>

   
    </div>
    </div>
  )
}

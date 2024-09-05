import React,{useEffect,useState,useRef} from 'react'

import img1 from "../photos/compu-archi.jpg";
import img2 from "../photos/phy-course.jpg";
import img3 from "../photos/graduation.jpg";
import { Link } from "react-router-dom";

import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export default function Course() {
    const textRef2 = useRef(null);


    const boxRef = useRef(null);

    useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 100%',
          end: 'bottom 80%',
          scrub: 1,
        },
      });
  
      tl.fromTo(
        boxRef.current,
        { scaleX: 0,opacity:0,
            zIndex: 1 },
        { scaleX: 1, duration: 2, ease: 'power2.out',opacity:3 }
      );
    }, []);
    

  

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef2.current,
        start: 'top 80%', // Adjust start position
        end: 'bottom 20%', // Adjust end position
        scrub: 1,
      },
    });

    const text = textRef2.current.textContent.trim().split('');
    textRef2.current.innerHTML = ''; // Clear the original text

    text.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      textRef2.current.appendChild(span);

      tl.to(span, {
        opacity: 1,
        duration: 0.3,
      });
    });
  }, []);

  return (
    <div className="blog1">
      <section  aria-labelledby="bloglabel1">
            <div className="blogcontainer1">
          
              
          
              <h2 className="blogsectiontitle1" data-reveal="bottom" ref={textRef2}>Latest Courses</h2>
              <p className="sectionsubtitle1" data-reveal="bottom" >
                Courses by popular specialists. Enrich your wisdom.
              </p>
          <div className='box' ref={boxRef} >

            <div className='content' >
                  <img src={img3} className='imgbox'/>
                  <div className='textbox'>
                  <h2 className='textcourse'>
                    find your courses
                  </h2>
                  <p className='textcourse2'>Discover courses crafted by industry-leading experts. Elevate your knowledge and ignite your passion for learning.Unlock your potential with courses curated by top specialists <Link to='/courseList'>click here</Link></p>
                  </div>
            </div>
             </div>

            </div>
          </section>
    </div>
  )
}

import React,{useEffect,useState,useRef} from 'react'
import img1 from "../photos/compu-archi.jpg";
import img2 from "../photos/phy-course.jpg";
import img3 from "../photos/graduation.jpg";
import './style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export default function Course() {
    const textRef = useRef(null);
  

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%', // Adjust start position
        end: 'bottom 20%', // Adjust end position
        scrub: 1,
      },
    });

    const text = textRef.current.textContent.trim().split('');
    textRef.current.innerHTML = ''; // Clear the original text

    text.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      textRef.current.appendChild(span);

      tl.to(span, {
        opacity: 1,
        duration: 0.3,
      });
    });
  }, []);

  return (
    <div className="blog1">
      <section  aria-labelledby="blog-label1">
            <div className="blog-container">
          
              
          
              <h2 className="blog-section-title1" data-reveal="bottom" ref={textRef}>Latest Courses</h2>
              <p className="section-subtitle1" id="blog-label" data-reveal="bottom" >
                Courses by popular specialists. Enrich your wisdom.
              </p>
          <div className='box'>

            <div className='content'>
                  <img src={img3} className='imgbox'/>
            </div>
             </div>

            </div>
          </section>
    </div>
  )
}

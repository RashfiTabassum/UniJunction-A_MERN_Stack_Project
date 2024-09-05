import React, { useState, useEffect, useRef } from 'react'
import './style.css';
import img1 from "../photos/chemistry.png";
import img2 from "../photos/cse.png";
import img3 from "../photos/mechanical.png";
import img4 from "../photos/physics.png";

import videobg from "../photos/aboutvideo.mp4";
import { AlignCenter,Volume2 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';



// import { SplitText } from 'gsap/SplitText.js';

// import SplitText from "../../utils/Split3.min.js";

// import SplitTextPlugin from "gsap/SplitTextPlugin.js"; // Import the SplitTextPlugin
// import  SplitText  from "gsap/SplitText.js";

// gsap.registerPlugin(SplitText)


const images=[img1,img2,img3,img4]

export default function AboutPage() {
    
  const [mute, setMute] = useState(false);
 
  const textRef = useRef(null);
  const [reveal, setReveal] = useState(false);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: textRef.current,
  //       start: 'top 80%', // Adjust start position
  //       end: 'bottom 100%', // Adjust end position
  //       scrub: 1,
  //     },
  //   });

  //   const text = textRef.current.textContent.trim().split(' ');
  //   textRef.current.innerHTML = ''; // Clear the original text

  //   text.forEach((letter, index) => {
  //     const span = document.createElement('span');
  //     span.textContent = letter;
  //     span.style.opacity = '0';
  //     span.style.display = 'inline-block';
  //     textRef.current.appendChild(span);

  //     tl.to(span, {
  //       opacity: 1,
  //       duration: 6,
  //     });
  //   });
  // }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 90%', // Adjust start position
        end: 'bottom 80%', // Adjust end position
        scrub: 1,
      },
    });

    const text = textRef.current.textContent.trim().split(' '); // Split text into words
    textRef.current.innerHTML = ''; // Clear the original text

    text.forEach((word, index) => {
      // Create a span for each word
      const wordSpan = document.createElement('span');
      wordSpan.textContent = word;

      // Create a space span after each word (except the last one)
      if (index < text.length - 1) {
        const spaceSpan = document.createElement('span');
        spaceSpan.textContent = ' ';
        textRef.current.appendChild(spaceSpan);
      }

      // Add word span to the text container
      textRef.current.appendChild(wordSpan);

      // Set initial opacity to 0
      gsap.set(wordSpan, { opacity: 0 });

      // Apply animation to reveal each word gradually
      tl.to(wordSpan, {
        opacity: 1,
        duration: 5, // Adjust duration as needed
        delay: index * 7, // Delay each word's animation
      });
    });
  }, []);
    // useEffect(() => {
    //   const sectionText = document.querySelector('.section-text');
    //   const lines = sectionText.innerText.split('\n');
    //   sectionText.innerHTML = lines.map(line => `<div class="line">${line}</div>`).join('');
  
    //   // Add animation class to each line
    //   const linesElements = document.querySelectorAll('.line');
    //   linesElements.forEach((line, index) => {
    //     line.style.animationDelay = `${index * 0.1}s`; // Adjust delay as needed
    //     line.classList.add('fade-in'); // Apply fade-in animation class
    //   });
    // }, []);
    function mutedVolume() {
        const video = document.querySelector('.image'); // Get the video element
        video.muted = !mute; // Toggle the muted attribute
        setMute(!mute); // Toggle the state
    }
  return (
    <div className="about_nab">
       
            <div className="about-container_nab">
                <div className="about-content_nab">
                    <h2 className="section-title_nab">About Us</h2>
                    <div className="section-text_nab" ref={textRef} >
                    <span >Welcome to our Mentorship Hub, where aspiring individuals are guided by experienced mentors towards achieving their full potential. Our platform fosters a nurturing environment where mentorship flourishes, empowering mentees to navigate their personal and professional journeys with confidence.</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span >Our mentorship programs offer tailored guidance across various domains, including career development, personal growth, entrepreneurship, and more. Through one-on-one sessions, workshops, and networking events, mentees gain invaluable insights, skills, and connections to thrive in today's dynamic world.</span>
                    <br></br>
                    <br></br>  
                    
                    <span>At Mentorship Hub, we believe in the transformative power of mentorship to unlock opportunities, foster innovation, and drive meaningful change. Join us on this journey of growth, learning, and empowerment, and together, let's shape a brighter future.</span>
                    </div>
                    <ul className="about-list_nab">
                        <li><div className='fa_nab'><AlignCenter/></div> Passion for Innovation</li>
                        <li><div className='fa_nab'><AlignCenter/></div> Collaborative Culture</li>
                        <li><div className='fa_nab'><AlignCenter/></div> Commitment to Sustainability</li>
                        <li><div className='fa_nab'><AlignCenter/></div> Making a Difference</li>
                    </ul>
                    <div className="about-btn_nab">Learn More</div>
                </div>
                <div className="about-image_nab">
                    <video src={videobg}  autoPlay loop muted alt="About Us Image" className="image_nab"/>
                    <Volume2  onClick={mutedVolume} className='volume_nab'/>
                    
                </div>
            </div>
           
    </div>
  )
}

import React, { useState,useEffect,useRef } from 'react'
import img1 from "../photos/mentor8.jpg";
import img2 from "../photos/mentor7.jpg";
import img3 from "../photos/mentor9.jpg";
import img4 from "../photos/mentor11.jpg";


import "./style.css";
 import {ArrowBigLeft,ArrowBigRight,CircleDot,Circle}  from "lucide-react"



const images=[img1,img2,img3,img4]


export default function Slider() {

    const [imageIndex,setImageIndex]=useState(0)
    // useEffect(() => {
    //   const animateValue = (id, start, end, duration) => {
    //     const range = end - start;
    //     let current = start;
    //     const increment = end > start ? 1 : -1;
    //     const stepTime = Math.abs(Math.floor(duration / range));
    //     const obj = document.getElementById(id);
    //     const timer = setInterval(() => {
    //       current += increment;
    //       obj.innerHTML = current;
    //       if ((increment === 1 && current >= end) || (increment === -1 && current <= end)) {
    //         clearInterval(timer);
    //       }
    //     }, stepTime);
    //     return timer; // Return the timer
    //   };
  
    //   // Call animateValue function for each card
    //   const timer1 = animateValue("enrolledCount", 0, 10, 800); // Change 5 to the desired value
    //   // const timer2 = animateValue("completedCount", 0, 5, 1000); // Change 5 to the desired value
    //   // const timer3 = animateValue("mentorsCount", 0, 12, 800); // Change 2 to the desired value
  
    //   // Cleanup function
    //   return () => {
    //     clearInterval(timer1);
    //     // clearInterval(timer2);
    //     // clearInterval(timer3);
    //   };
    // }, []);
    const [isVisible, setIsVisible] = useState(false);
  const enrolledCountRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (enrolledCountRef.current) {
      observer.observe(enrolledCountRef.current);
    }

    // Cleanup
    return () => {
      if (enrolledCountRef.current) {
        observer.unobserve(enrolledCountRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateValue = (id, start, end, duration,stepT) => {
        const range = end - start;
        let current = start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        // const stepTime = 100;
        const obj = document.getElementById(id);
        const timer = setInterval(() => {
          current += increment*stepT;
          obj.innerHTML = current;
          if ((increment === 1 && current >= end) || (increment === -1 && current <= end)) {
            clearInterval(timer);
          }
        }, stepTime);
        return timer; // Return the timer
      };

      // Call animateValue function for each card
      const timer1 = animateValue("enrolledCount", 0, 32000, 1,500); // Change 5 to the desired value
      const timer2 = animateValue("count1", 0, 300000,1, 5000); // Change 5 to the desired value
      const timer3 = animateValue("count2", 0, 40000,1, 500);
      const timer4 = animateValue("count3", 0, 130,1, 1);
      const timer5 = animateValue("count4", 0, 50000,1, 500);
      // const timer3 = animateValue("mentorsCount", 0, 12, 800); // Change 2 to the desired value

      // Cleanup function
      return () => {
        clearInterval(timer1);
        // clearInterval(timer2);
        // clearInterval(timer3);
      };
    }
  }, [isVisible]);
    


    useEffect(() => {
      const intervalId = setInterval(() => {
          // Move to the next image
          setImageIndex(prevIndex => (prevIndex + 1) % images.length);
      }, 3000); // Change the interval duration as needed (e.g., 3000ms = 3 seconds)

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
  }, []);


    function showPrevImage(){
      setImageIndex(index=>{
        if(index===0)return images.length-1
        return index-1
      })

    }
    function showNextImage(){
      setImageIndex(index=>{
        if(index===images.length-1)return 0
        return index+1
      })
    }
  return (
    <div>
      <div className='upper_nab'>
        <div className='first_nab'>
          <h1 className='number_nab' id='enrolledCount' ref={enrolledCountRef}>0</h1>
          <p className='num-title_nab'>Experienced mentors</p>
        </div>
        <div className='first_nab'>
          <h1 className='number_nab' id='count1'>0</h1>
          <p className='num-title_nab'>5-star tutor reviews</p>
        </div>
        <div className='first_nab'>
          <h1 className='number_nab' id='count2'>0</h1>
          <p className='num-title_nab'>Experienced mentors</p>
        </div>
        <div className='first_nab'>
          <h1 className='number_nab' id='count3'>0</h1>
          <p className='num-title_nab'>Topic discuss</p>
        </div>
        <div className='first_nab' >
          <h1 className='number_nab' id='count4'>0</h1>
          <p className='num-title_nab'>Student number_nab</p>
        </div>
      </div>
    <div className='both_nab'>
      <div className="image-slider_nab"style={{width:"45%",height:"100%",position :'relative',borderRadius:'20px'}}>
      <div style={{width:"100%", height:"100%" ,display:'flex',overflow:'hidden',borderRadius:'20px'}}>
        {images.map(url=>(
         <img key={url} src={url} className='image-slider-img_nab'  style={{translate:`${-100 * imageIndex}%` }}/>

      )

      )}</div>
     
      <button onClick={showPrevImage} className='img-btn_nab' style={{left:0}}><ArrowBigLeft/></button>
      <button onClick={showNextImage} className='img-btn_nab' style={{right:0}}><ArrowBigRight/></button>


      <div className='btnStyle_nab'>
        {images.map((_, index)=>(
            <button key={index} onClick={()=> setImageIndex(index)} className='dot-btn'>
              {index=== imageIndex ? <CircleDot/> :<Circle/>}</button>
        ))}
      </div>
    </div>
    <div className='writing-part_nab'>
      <div className='title_nab'>
        <h1 className='title1_nab'>Find the right mentor for you_______</h1>
        <p className='title2_nab'>Empower your language journey with our expert mentors and thriving community of over 30,000. With a track record of success and 50k+ learners, we're dedicated to transforming your language learning experience into a seamless, enriching adventure.</p>
        
      
      </div>
      <p className='mentor-btn_nab'><a href="/IP Project/IP Project/mentors list.html"  style={{textDecoration:'none',color:'#333'}}>Find Mentor</a> </p>
      
    </div>
    </div>
    </div>
  )
}
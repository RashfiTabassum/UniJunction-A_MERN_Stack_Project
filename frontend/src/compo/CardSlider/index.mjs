import React, { useState,useEffect } from 'react'
import img1 from "../photos/chemistry.png";
import img2 from "../photos/cse.png";
import img3 from "../photos/mechanical.png";
import img4 from "../photos/physics.png";
import { ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";


import "./style.css";
 import {ArrowBigLeft,ArrowBigRight,CircleDot,Circle}  from "lucide-react"



const images=[img1,img2,img3,img4]


export default function CardSlider() {
  
  return (

    <div className="service_nab" >
      
                <div className="service-container_nab">
                    <div className="explore_nab">
                        <h1 >Explore your Courses</h1>
                        
                    </div>
                    <p className='explore-text_nab'>Dive into a world of knowledge with our diverse range of courses. From language mastery to professional development, explore our curated selection designed to ignite curiosity and fuel your personal growth journey. Elevate your skills and unlock new opportunities with our innovative learning platform.</p>
                    <button className="explore-seemore_nab">
                        <span> <Link to='/courseList' style={{textDecoration:'none',color:'#333'}}>See More</Link></span>
                        <ChevronRight />
                      </button>
                    <ul className="service-list_nab">
                    
                        <li className="service-item_nab"> 
                            <div className="service-card_nab">
                                <div className="card-icon_nab">
                                    <img src={img2} />
                                </div>
                                <h3 className="card-title_nab">
                                    <a href="#">Ryan University</a>
                                </h3>
                                <p className="card-text_nab">
                                    Explore the unknown,unseen with your mentors.
                                </p>
                                <button className="btn-circle_nab" aria-label="read more about physics">
                                <ChevronRight />
                                </button>
                            </div>
                        </li> 
                        <li className="service-item_nab"> 
                            <div className="service-card_nab">
                            <div className="card-icon_nab">
                                <img src={img1} />
                            </div>
                            <h3 className="card-title_nab">
                                <a href="#">Cambridge University </a>
                            </h3>
                            <p className="card-text_nab">
                                Explore the unknown,unseen with your mentors.
                            </p>
                            <button className="btn-circle_nab" aria-label="read more about physics">
                            <ChevronRight />
                            </button>
                            </div>
                        </li>  
                        <li className="service-item_nab"> 
                            <div className="service-card_nab">
                            <div className="card-icon_nab">
                                <img src={img3} />
                            </div>
                            <h3 className="card-title_nab">
                                <a href="#">Oxford University </a>
                            </h3>
                            <p className="card-text_nab">
                                Explore the unknown,unseen with your mentors.
                            </p>
                            <button className="btn-circle_nab" aria-label="read more about physics">
                            <ChevronRight />
                            </button>
                            </div>
                        </li> 
                        <li className="service-item_nab"> 
                            <div className="service-card_nab">
                            <div className="card-icon_nab">
                                <img src={img1} />
                            </div>
                            <h3 className="card-title_nab">
                                <a href="#">Harvard University </a>
                            </h3>
                            <p className="card-text_nab">
                                Explore the unknown,unseen with your mentors.
                            </p>
                            <button className="btn-circle_nab" aria-label="read more about physics">
                            <ChevronRight />
                            </button>
                            </div>
                        </li> 

                    </ul>

                </div>
         
    </div>
  )
}

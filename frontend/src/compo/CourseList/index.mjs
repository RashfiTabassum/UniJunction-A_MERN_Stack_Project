import React,{useEffect,useState,useRef} from 'react'
import img2 from "../photos/havard.jpeg";
import img1 from "../photos/oxford.jpeg";
import img3 from "../photos/greenwich.png";
import img4 from "../photos/cornell.jpeg";
import img5 from "../photos/selankah.jpeg";
import img6 from "../photos/winnipeg.jpeg";
import './style.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export default function index() {
   
  return (
    <div className="blog_nab">
      <section  aria-labelledby="blog-label_nab">
            <div className="blog-container_nab">
          
              
          
              <h2 className="blog-section-title_nab" data-reveal="bottom" >Latest Guidlines</h2>
              <p className="section-subtitle_nab" id="blog-label" data-reveal="bottom" style={{marginTop:30}}>
                Courses by popular mentors. Enrich your wisdom.
              </p>
              
          
              <ul className="blog-grid-list_nab">
                <li>
                    <div className="blog-card_nab" data-reveal="bottom">
                        <div className="bcard-image_nab">
                            <img src={img2} alt="Blog Image"/>
                        </div>
                        <div className="meta-wrapper_nab">
                            <div className="bcard-meta_nab">
                                {/* <i className="fa fa-wheelchair" aria-hidden="true"></i> */}
                                <span className="span_nab">By Olivia Tak</span>
                            </div>
                            <div className="bcard-meta_nab">
                                {/* <i className="fa fa-folder-open-o" aria-hidden="true"></i> */}
                                <span className="span_nab">Physics</span>
                            </div>
                        </div>
                        <h3 className="bcard-title_nab">Harvard: Where Excellence Thrives</h3>
                        <time className="date_nab" date_nabtime="2022-01-28">28 January, 2022</time>
                        <p className="bcard-text_nab">
                        Discover the path to Harvard University, where excellence meets opportunity. Our admissions process values diverse perspectives, academic achievements, and leadership potential. Join a vibrant community of scholars, innovators, and changemakers, and unlock your potential to shape the future .Embark on your journey to Harvard University, where passion meets purpose, and endless possibilities await.
                        </p>
                        <a href="#" className="btn-text_nab" style={{marginTop:50}}>Enroll Now</a>
                    </div>
                </li>
                <li>
                    <div className="blog-card_nab" data-reveal="bottom">
                
                        <div className="bcard-image_nab">
                            <img src={img3}  alt="Course Image"/>
                        </div>
                
                        <div className="meta-wrapper_nab">
                            <div className="bcard-meta_nab">
                                {/* <i className="fa fa-wheelchair" aria-hidden="true"></i> */}
                                <span className="span_nab">By Nadira Omar</span>
                            </div>
                
                            <div className="bcard-meta_nab">
                                {/* <i className="fa fa-folder-open-o" aria-hidden="true"></i> */}
                                <span className="span_nab">Mechanical Engineering</span>
                            </div>
                        </div>
                
                        <h3 className="bcard-title_nab">Unleash Your Potential at Greenwich Uni</h3>
                
                        <time className="date_nab" date_nabtime="2022-01-28">28 January, 2022</time>
                
                        <div className="bcard-text_nab">
                        Embark on the journey to Greenwich University, where academic excellence meets real-world impact. Our admissions process values diversity, creativity, and ambition. Join a vibrant community of learners, researchers, and changemakers, and unleash your potential to create positive change in the world. Start your transformative experience at Greenwich University, where innovation knows no bounds and every voice is heard.
                        </div>
                
                        <a href="#" className="btn-text_nab" style={{marginTop:50}}>Enroll Now</a>
                
                    </div>
                </li>
                
                <li>
                    <div className="blog-card_nab" data-reveal="bottom">
                
                        <div className="bcard-image_nab">
                            <img src={img1} alt="Course Image"/>
                        </div>
                
                        <div className="meta-wrapper_nab">
                            <div className="bcard-meta_nab">
                                {/* <i className="fa fa-wheelchair" aria-hidden="true"></i> */}
                                <span className="span_nab">By Kyla Grant</span>
                            </div>
                
                            <div className="bcard-meta_nab">
                                {/* <i className="fa fa-folder-open-o" aria-hidden="true"></i> */}
                                <span className="span_nab">Computer Science</span>
                            </div>
                        </div>
                
                        <h3 className="bcard-title_nab">Chart Your Course to Oxford</h3>
                
                        <time className="date_nab" date_nabtime="2022-01-28">28 January, 2022</time>
                
                        <p className="bcard-text_nab">
                        Embark on the Oxford University adventure, where tradition meets innovation. Our admissions process celebrates academic excellence, diverse backgrounds, and intellectual curiosity. Join a dynamic community of scholars, thinkers, and global leaders, and unleash your potential to make a difference. Begin your journey to Oxford University, where knowledge thrives, and endless opportunities await.
                        </p>
                
                        <a href="#" className="btn-text_nab" style={{marginTop:50}}>Enroll Now</a>
                
                    </div>
                </li>
                
               
                
                
                
                
                
                
            </ul>
            
          
            </div>
          </section>
    </div>
  )
}

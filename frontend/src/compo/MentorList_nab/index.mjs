import React from 'react'
import './style.css'
import img1 from "../photos/kyla.jpg";
import img2 from "../photos/ment.jpg";
import img3 from "../photos/buisness.jpeg";
import img4 from "../photos/nadira.jpg";
import img5 from "../photos/olivia.jpg";
import img6 from "../photos/buisness1.jpeg";
export default function index() {
  return (
    <section className="mentorship-section_nab">
            <div className="mentor-container_nab">
                <button className="mentor-seemore_nab">
                    <span><a href="/IP Project/IP Project/mentors list.html" target='_blank' style={{textDecoration:'none',color:'#333'}}>see more</a></span>
                    {/* <i className="fa fa-angle-double-right" aria-hidden="true"></i> */}
                    
                   
                  </button>
                
              <h2 className="mentor-section-title_nab">Find Your Mentor</h2>
              <p className="section-description_nab">Explore our diverse pool of mentors and kickstart your journey towards success.</p>
              
              <div className="mentor-list_nab">
                <div className="mentor-card_nab">
                  <div className="mentor-avatar_nab">
                    <img src={img1} alt="Mentor Avatar"/>
                  </div>
                  <div className="mentor-details_nab">
                    <h3 className="mentor-name_nab">Dr. Emily Parker</h3>
                    <p className="mentor-field_nab">Software Development</p>
                    <p className="mentor-bio_nab">Passionate about guiding aspiring developers through their learning journey.</p>
                  </div>
                </div>
                
                <div className="mentor-card_nab">
                  <div className="mentor-avatar_nab">
                    <img src={img2} alt="Mentor Avatar"/>
                  </div>
                  <div className="mentor-details_nab">
                    <h3 className="mentor-name_nab">Nadira Omar</h3>
                    <p className="mentor-field_nab">Psychology</p>
                    <p className="mentor-bio_nab">Experienced psychologist eager to share insights and strategies for success.</p>
                  </div>
                </div>
              
                  <div className="mentor-card_nab">
                    <div className="mentor-avatar_nab">
                      <img src={img4} alt="Mentor Avatar"/>
                    </div>
                    <div className="mentor-details_nab">
                      <h3 className="mentor-name_nab">Olivia Tak</h3>
                      <p className="mentor-field_nab">Physics</p>
                      <p className="mentor-bio_nab">Experienced mentor eager to share insights and strategies for success.</p>
                    </div>
                  </div>
                  <div className="mentor-card_nab">
                    <div className="mentor-avatar_nab">
                      <img src={img5} alt="Mentor Avatar"/>
                    </div>
                    <div className="mentor-details_nab">
                      <h3 className="mentor-name_nab">Kyla Grant</h3>
                      <p className="mentor-field_nab">English Literature</p>
                      <p className="mentor-bio_nab">Experienced mentor eager to share insights and strategies for success.</p>
                    </div>
                  </div>
                  <div className="mentor-card_nab">
                    <div className="mentor-avatar_nab">
                      <img src={img6} alt="Mentor Avatar"/>
                    </div>
                    <div className="mentor-details_nab">
                      <h3 className="mentor-name_nab">Edward Que</h3>
                      <p className="mentor-field_nab">Mechanical Engineering</p>
                      <p className="mentor-bio_nab"> Eagerly wants to share insights and strategies for success.</p>
                    </div>
                  </div>
                  
               
                
              </div>
            </div>
          </section>
  )
}

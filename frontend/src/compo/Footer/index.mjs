import React from 'react'
import './style.css'

import { Facebook, Instagram ,Twitter, Github } from 'lucide-react';
export default function index() {
  return (
    <section className="footer_nab">
            <div className="footer-row_nab">
              <div className="footer-col_nab">
                <h4>Info</h4>
                <ul className="links_nab">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Mentors</a></li>
                  <li><a href="#">Mentees</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="footer-col_nab">
                <h4>Explore</h4>
                <ul className="links_nab">
                  <li><a href="#">Free Courses</a></li>
                  <li><a href="#">Latest Courses</a></li>
                  <li><a href="#">Themes</a></li>
                  <li><a href="#">Popular Courses</a></li>
                  <li><a href="#">Art Skills</a></li>
                  <li><a href="#">New Uploads</a></li>
                </ul>
              </div>
              <div className="footer-col_nab">
                <h4>Legal</h4>
                <ul className="links_nab">
                  <li><a href="#">Customer Agreement</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">GDPR</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Media Kit</a></li>
                </ul>
              </div>
              <div className="footer-col_nab">
                <h4>UniJunction</h4>
                <p>
                    Subscribe to our mentorship and education-based website for weekly insights, expert advice, and exclusive offers. Elevate your learning journey today!
                </p>
                <form action="#">
                  <input type="text" placeholder="Your email" required/>
                  <button type="submit">SUBSCRIBE</button>
                </form>
                <div className="icons_nab" >
                  {/* <i className="fa fa-facebook"></i> */}
                  <Facebook className='ico_nab' />
                  <Instagram className='ico_nab' />
                  <Twitter  className='ico_nab'/>
                  <Github  className='ico_nab'/>
                  {/* <i className="fa fa-twitter"></i> */}
                  {/* <i className="fa fa-linkedin"></i> */}
                  {/* <i className="fa fa-github"></i> */}
                </div>
              </div>
            </div>
          </section>
  )
}

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './mentorProfile.css';
import Navbarr from "../../compo/Navbarr/index.mjs";
import bushra from '../photos/Bushra.jpg';
import det from '../photos/video1.mp4';
import jenny from '../photos/Jenny.jfif';
import resume from '../photos/resume.png';
import robert from '../photos/Robert.jfif';
import Footer from '../../compo/Footer/index.mjs';

const MentorProfile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mentorId = searchParams.get("mentorId");
  const mentorName = searchParams.get("mentorName");
  const mentorFee = searchParams.get("mentorFee");
  const mentorBio = searchParams.get("mentorBio");
  const mentorPp = searchParams.get("mentorPp");
  const mentorCV = searchParams.get("mentorCV");
  const navigate = useNavigate();

  const openAbout = () => {
    document.getElementById("content1").style.transform = "translateX(0)";
    document.getElementById("content2").style.transform = "translateX(100%)";
    document.getElementById("content3").style.transform = "translateX(100%)";
    document.getElementById("content4").style.transform = "translateX(100%)";
    document.getElementById("bt1").style.color = "#D2B48C";
    document.getElementById("bt2").style.color = "#000";
    document.getElementById("bt3").style.color = "#000";
    document.getElementById("bt4").style.color = "#000";
    document.getElementById("content1").style.transitionDelay = "0.3s";
    document.getElementById("content2").style.transitionDelay = "0s";
    document.getElementById("content3").style.transitionDelay = "0s";
    document.getElementById("content4").style.transitionDelay = "0s";
  }

  const openSch = () => {
    document.getElementById("content1").style.transform = "translateX(100%)";
    document.getElementById("content2").style.transform = "translateX(0)";
    document.getElementById("content3").style.transform = "translateX(100%)";
    document.getElementById("content4").style.transform = "translateX(100%)";
    document.getElementById("bt2").style.color = "#D2B48C";
    document.getElementById("bt1").style.color = "#000";
    document.getElementById("bt3").style.color = "#000";
    document.getElementById("bt4").style.color = "#000";
    document.getElementById("content2").style.transitionDelay = "0.3s";
    document.getElementById("content1").style.transitionDelay = "0s";
    document.getElementById("content3").style.transitionDelay = "0s";
    document.getElementById("content4").style.transitionDelay = "0s";
  }

  const openRev = () => {
    document.getElementById("content1").style.transform = "translateX(100%)";
    document.getElementById("content2").style.transform = "translateX(100%)";
    document.getElementById("content3").style.transform = "translateX(0)";
    document.getElementById("content4").style.transform = "translateX(100%)";
    document.getElementById("bt3").style.color = "#D2B48C";
    document.getElementById("bt2").style.color = "#000";
    document.getElementById("bt1").style.color = "#000";
    document.getElementById("bt4").style.color = "#000";
    document.getElementById("content3").style.transitionDelay = "0.3s";
    document.getElementById("content2").style.transitionDelay = "0s";
    document.getElementById("content1").style.transitionDelay = "0s";
    document.getElementById("content4").style.transitionDelay = "0s";
  }

  const openSpec = () => {
    document.getElementById("content1").style.transform = "translateX(100%)";
    document.getElementById("content2").style.transform = "translateX(100%)";
    document.getElementById("content3").style.transform = "translateX(100%)";
    document.getElementById("content4").style.transform = "translateX(0)";
    document.getElementById("bt4").style.color = "#D2B48C";
    document.getElementById("bt2").style.color = "#000";
    document.getElementById("bt3").style.color = "#000";
    document.getElementById("bt1").style.color = "#000";
    document.getElementById("content4").style.transitionDelay = "0.3s";
    document.getElementById("content2").style.transitionDelay = "0s";
    document.getElementById("content1").style.transitionDelay = "0s";
    document.getElementById("content3").style.transitionDelay = "0s";
  }

  return (
    <div >
      <Navbarr />
      <div className="mentos">
        <div className="image">
          <img src={`http://localhost:5000/images/${mentorPp}`} className="img-fluid rounded-start" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{marginLeft: 530}}>{mentorName}</h5>
            <p className="card-text1">University Partnerships Manager,The Ginsberg Center</p>
            <p className="card-text2"><small className="text-muted">Bryn Mawr, Pennsylvania, United States · On-siteBryn Mawr, Pennsylvania, United States</small></p>
          </div>
        </div>
        <div className="hero">
          <div className="btn-box">
            <button id="bt1" onClick={openAbout}>About</button>
            <button id="bt2" onClick={openSch}>Schedule</button>
            <button id="bt3" onClick={openRev}>Review</button>
            <button id="bt4" onClick={openSpec}>Resume</button>
          </div>
          <div id="content1" className="content">
            <div className="content-left">
              <p>
                {/* I am a sophomore at Bryn Mawr College, majoring in Mathematics with a secondary concentration in Data Science. 
                I am passionate about exploring data analysis opportunities where I can apply my skills in data cleaning, exploratory data analysis, and predictive modeling . 
                Alongside my academic pursuits, I am actively involved in various campus organizations, including the Outdoor Club, South Asian Students Club, Muslim Students Club, and the Sustainable Fashion Club. Additionally, I serve as a Student Associate and was a Digital Scholarship Summer Fellow, experiences that have honed my leadership and collaborative skills. */}
                {mentorBio}
              </p>
            </div>
            <div className="content-right">
              <video src={det} controls="controls autoplay" style={{width:400}} /> 
            </div>
          </div>
          <div id="content2" className="content">
            {/* Schedule content */}
            <div className="content-l">
              <div className="container py-7">
                <p className="text-sm text-dark mt-0 mb-5">There's time and place for everything.</p>
                <div className="row">
                  <div className="col-lg-4 mb-3" id="Friday, Nov 13th">
                    <h4 className="mt-0 mb-3 text-dark op-8 font-weight-bold">
                      Friday
                    </h4>
                    <ul className="list-timeline list-timeline-primary">
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">09:00 - 10:00</span></p>
                      </li>
                      <li className="list-timeline-item show p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-1-item-2">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-primary font-weight-bold op-8 infinite animated flash" data-animate="flash" data-animate-infinite={1} data-animate-duration="3.5" style={{animationDuration: '3.5s'}}>12:00 - 13:00</span> </p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8 show" id="day-1-item-2">  <span className="text-primary" /> </p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">14:00 - 15:00</span></p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-1-item-4">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">15:00 - 16:00</span></p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8" id="day-1-item-4">  <span className="text-primary" /> </p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">16:00 - 17:00</span></p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-1-item-6">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">17:00 - 18:00</span></p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8" id="day-1-item-6"> <span className="text-primary" /> </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 mb-3" id="Saturday, Nov 14th">
                    <h4 className="mt-0 mb-3 text-dark op-8 font-weight-bold">
                      Saturday
                    </h4>
                    <ul className="list-timeline list-timeline-primary">
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">09:00 - 10:00</span></p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-2-item-2">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">10:00 - 12:00 </span> </p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8" id="day-2-item-2"> <span className="text-primary" /> </p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">12:00 - 13:00</span></p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-2-item-4">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">13:00 - 15:00</span></p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8" id="day-2-item-4"> <span className="text-primary" /> </p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">15:00 - 16:00</span> </p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-2-item-6">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">16:00 - 18:00</span></p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8" id="day-2-item-6">  <span className="text-primary" /> </p>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4 mb-3" id="Sunday, Nov 15th">
                    <h4 className="mt-0 mb-3 text-dark op-8 font-weight-bold">
                      Sunday
                    </h4>
                    <ul className="list-timeline list-timeline-primary">
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">09:00 - 10:00</span></p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-3-item-2">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">10:00 - 12:00</span></p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8" id="day-3-item-2">  <span className="text-primary" /> </p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">12:00 - 13:00</span></p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-3-item-4">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">13:00 - 15:00</span></p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8" id="day-3-item-4"><span className="text-primary" /> </p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">15:00 - 16:00</span></p>
                      </li>
                      <li className="list-timeline-item p-0 pb-3 pb-lg-4 d-flex flex-wrap flex-column" data-toggle="collapse" data-target="#day-3-item-6">
                        <p className="my-0 text-dark flex-fw text-sm text-uppercase"><span className="text-inverse op-8">16:00 - 18:00</span></p>
                        <p className="my-0 collapse flex-fw text-uppercase text-xs text-dark op-8" id="day-3-item-6">  <span className="text-primary" /> </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div id="content3" className="content">
            <section className="py-3 py-md-5 py-xl-8" style={{marginTop:-380}}>
              <div className="container overflow-hidden">
                <div className="row justify-content-lg-around gy-5 gy-md-6">
                  <div className="col-12 col-sm-6 col-lg-5">
                    <div className="col-xl-11 col-xxl-10 mx-auto text-center">
                      <img className="img-fluid rounded rounded-circle mb-4" loading="lazy" src={jenny} alt="Luna John - Marketer" />
                      <p className="mb-2">I am very impressed with the course.It is a budget friendly course that is also well strutured.A must do course for every student seeking higher education in USA</p>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <p className="m-0 fw-bold">Luna John </p>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-5">
                    <div className="col-xl-11 col-xxl-10 mx-auto text-center">
                      <img className="img-fluid rounded rounded-circle mb-4" loading="lazy" src={robert} alt="Mark Smith - Designer" />
                      <p className="mb-2">Thanks to the mentor for the valueable insights. I got admission into my dream university. Highly recommended.</p>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <p className="m-0 fw-bold">Mark Smith</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

        <div id="content4" className="content" style={{marginTop:-330}}>
        <div className="content-left">
          <p>I have actively contributed as a Student Associate and had the privilege of serving as a Digital Scholarship Summer Fellow. 
            During my tenure with the Digital Scholarship Summer Fellowship Program 2023, I collaborated with AESOP Academy &amp; Advisory on a groundbreaking project: The Reactor Room: An Immersive Chernobyl Exhibition.
            In this role, I led efforts to enhance the existing Reactor Room site by implementing modifications and facilitating its migration to a more dynamic platform. 
            Additionally, I played a pivotal role in delivering a comprehensive overview of nuclear power, spanning its history, scientific intricacies, notable accidents, and future prospects. This endeavor aimed to deepen public understanding and awareness of nuclear energy's complexities.
          </p>
        </div>
        <div className="content-right">
          <h6>Resume</h6>
          <img src={`http://localhost:5000/images/${mentorCV}`} alt />
        </div>
      </div>

    </div>
    
    </div>

    <Footer />
    

   </div>
  )

}
export default MentorProfile;
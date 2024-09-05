import React, { useState, useEffect } from "react";
import './menorList.css';
import Navbarr from "../../compo/Navbarr/index.mjs";
import axios from 'axios';
import { Link } from "react-router-dom";
import Footer from '../../compo/Footer/index.mjs';

const MentorList_rashfi = () => {
  const [iconColors, setIconColors] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  const [searchUniversity, setSearchUniversity] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  // Predefined mentor details with correct mentor IDs
  const predefinedDetails = {
    '6676bb7f23e48e522ea8e0f2': { fee: '$13.99', rating: 4.7, reviews: 21, duration: '60-min session' },
    'mentorId2': { fee: '$15.99', rating: 4.5, reviews: 18, duration: '45-min session' },
    // Add more mentor details here with correct IDs
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role"); 

    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
    }

    axios.get('http://localhost:5000/getAllMentors')
      .then(response => {
        if (response.data.status === 'ok') {
          console.log("Fetched mentor IDs:", response.data.data.map(mentor => mentor._id));
          const mentorsWithDetails = response.data.data.map((mentor, index) => ({
            ...mentor,
            details: predefinedDetails[mentor._id] || { fee: 'N/A', rating: 'N/A', reviews: 'N/A', duration: 'N/A' }
          }));
          setMentors(mentorsWithDetails);
          setIconColors(new Array(response.data.data.length).fill("#ccc"));
        } else {
          console.error("Failed to fetch mentors:", response.data.error);
        }
      })
      .catch(error => {
        console.error("Error fetching mentors:", error);
      });
  }, []);

  const handleLoveIconClick = (index, mentor) => {
    const newColors = [...iconColors];
    newColors[index] = newColors[index] === "#D2B48C" ? "#ccc" : "#D2B48C";
    setIconColors(newColors);
  
    // Check if the heart icon was clicked to be colored
    if (newColors[index] === "#D2B48C") {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in to add to wishlist.");
        return;
      }
  
      axios.post('http://localhost:5000/add-to-wishlist', {
        mentorId: mentor._id,
        mentorName: `${mentor.fname} ${mentor.lname}`
      }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        if (response.data.status === 'ok') {
          console.log("Mentor added to wishlist successfully.");
        } else {
          console.error("Failed to add mentor to wishlist:", response.data.error);
        }
      })
      .catch(error => {
        console.error("Error adding mentor to wishlist:", error);
      });
    }
  };
  

  const handleBookLesson = (mentorId, mentorName, mentorFee) => {

    console.log("isLoggedIn:", isLoggedIn);  // Debug log
    console.log("userRole:", userRole);      // Debug log

    if (!isLoggedIn) {
      alert("Please login to book a lesson.");
      return;
    }
    if (userRole !== 'student') {
      alert("Only students can book a lesson.");
      return;
    }
    window.location.href = `/pay?mentorId=${mentorId}&mentorName=${encodeURIComponent(mentorName)}&mentorFee=${encodeURIComponent(mentorFee)}`;
  };

  const handleDetails = (mentorId, mentorName, mentorFee, mentorBio, mentorPp, mentorCV) => {
    //console.log("View More Details clicked for:", mentor.fname, mentor.lname);
    window.location.href = `/mentorprofile?mentorId=${mentorId}&mentorName=${encodeURIComponent(mentorName)}&mentorFee=${encodeURIComponent(mentorFee)}&mentorBio=${encodeURIComponent(mentorBio)}&mentorPp=${encodeURIComponent(mentorPp)}&mentorCV=${encodeURIComponent(mentorCV)}`;
  };
  const filteredMentors = mentors.filter((mentor) => {
    return (
      (searchUniversity === "" || mentor.institution.toLowerCase().includes(searchUniversity.toLowerCase())) &&
      (searchKeyword === "" || `${mentor.fname} ${mentor.lname}`.toLowerCase().includes(searchKeyword.toLowerCase()))
    );
  });
  return (
    <div>
      <Navbarr />
      
      <div className="container py-3">
        <div className="row justify-content-center mt-4">
          <div className="col-md-4">
            <input type="text" className="form-controlm" placeholder="University:" style={{fontSize:17}} value={searchUniversity}
              onChange={(e) => setSearchUniversity(e.target.value)}/>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-text"><i className="fa fa-search" style={{fontSize:17}}/></span>
              <input type="text" className="form-controlm" placeholder="Search by Name or Keyword" style={{fontSize:17}} value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}/>
            </div>
          </div>
        </div>
      </div>
      
      <section style={{ backgroundColor: '#fff' }}>
        <div className="container py-5">
          <div className="row justify-content-center mb-3">
            {filteredMentors.map((mentor, index) => (
              <div key={mentor._id} className="col-md-12 col-xl-10">
                <div className="cardme shadow-0 border rounded-3">
                  <div className="cardme-body">
                    <div className="row">
                      <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                        <div className="image-overlaym">
                            <div className="bg-imagem hover-zoom ripple rounded ripple-surface">
                              <img src={`http://localhost:5000/images/${mentor.pp}`} className="w-100" />
                              <div className="overlaym" />
                              <div className="overlaym-content">
                                <a href={mentor.instagramLink} target="_blank">
                                  <span style={{marginLeft: '-20px'}}><i className="fa fa-instagram fa-2x" style={{color: '#eee'}} /></span>
                                </a>
                                <a href={mentor.facebookLink} target="_blank">
                                  <span style={{marginLeft: 20}}><i className="fa fa-facebook fa-2x" style={{color: '#eee'}} /></span>
                                </a> 
                                <a href={mentor.linkedinLink} target="_blank"> 
                                  <span style={{marginLeft: 20}}><i className="fa fa-linkedin fa-2x" style={{color: '#eee'}} /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                      <div className="col-md-6 col-lg-6 col-xl-6">
                        <h3 style={{marginTop:10}}>{mentor.fname} {mentor.lname}</h3>
                        <div className="mt-1 mb-0 text-muted small">
                          <span><i className="fa fa-graduation-cap" style={{color: '#4B2D0B'}} />&nbsp;{mentor.qualification}</span><br />
                          <span> <i className="fa fa-clock-o" style={{color: '#4B2D0B'}} /> &nbsp;{mentor.studyPeriod}</span><br />
                          <span><i className="fa fa-university" style={{color: '#4B2D0B'}} />&nbsp;{mentor.institution}</span><br />
                          <br />
                        </div>
                        <div className="mt-1 mb-0 small">
                          <span style={{fontFamily: '"Times New Roman", Times, serif', fontstyle: 'oblique'}}>{mentor.bio} 
                          <Link
                            to={{
                               pathname: '/mentorprofile',
                              state: { mentor }
                            }}
                            style={{ textDecoration: 'none', color: '#4B2D0B' }}
                            onClick={() => {
                              //handleBookLesson(mentor._id, `${mentor.fname} ${mentor.lname}`, mentor.details.fee)
                              handleDetails(mentor._id, `${mentor.fname} ${mentor.lname}`, mentor.fee, mentor.bio, mentor.pp, mentor.image)
                              //console.log("View More Details clicked for:", mentor.fname, mentor.lname);
                              }
                            }
                          ><b>View More Details</b></Link></span>
                        </div>   
                        </div>
                      <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                        <div className="d-flex flex-row align-items-center justify-content-center mb-1">
                          <h4 style={{ marginTop: 10 }}><i id={`love-icon${index}`} className="fa fa-heart fa-lg" style={{ color: iconColors[index] }} onClick={() => handleLoveIconClick(index, mentor)}></i>
                          </h4>
                        </div>
                        <div className="d-flex flex-row align-items-center justify-content-center mb-1">
                          <h4 className="mb-1 me-1" style={{ fontSize: 22 }}>&nbsp;&nbsp;&nbsp;  ${mentor.fee}&nbsp;&nbsp;&nbsp;</h4>
                        </div>
                        {/* <div className="d-flex flex-row align-items-center justify-content-center mb-1">
                          <h6 style={{ color: '#4b2d0b', fontSize: 16 }}>&nbsp;&nbsp;&nbsp;{mentor.details.reviews} Reviews &nbsp;&nbsp;&nbsp; {mentor.details.duration}</h6>
                        </div> */}
                        <div className="d-flex flex-column mt-4">
                          <button onClick={() => handleBookLesson(mentor._id, `${mentor.fname} ${mentor.lname}`, mentor.fee)} className="btme btme-primary btno-sm" type="button" style={{ color: 'white', width: 240 }}>Book Lesson </button>
                          <button className="btme btme-primary btno-sm" type="button" style={{ color: 'white' }}>Send Message</button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden-cardme">
                      <div className="cardme-body">
                        <video width="300px" height="280px" controls muted loop>
                          <source src={`http://localhost:5000/images/${mentor.trial}`} type="video/mp4" />
                        </video>
                        </div>
                        </div>



                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MentorList_rashfi;


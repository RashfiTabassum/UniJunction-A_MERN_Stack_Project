import React, { useEffect, useState } from 'react';
import './Student_User_Profile.css';
import { Link,useNavigate } from "react-router-dom";
import HeatmapCalendar from '../js/HeatmapCalendar.mjs';
import oxford from '../photos/oxford_undergrad.jpg';
import fb from '../photos/facebook.png';
import insta from '../photos/insta.png';
import linkedin from '../photos/Linkedin.png';
import nadia from '../photos/oxford_undergrad.jpg';
import kyla from '../photos/UofM.jpg';
import olivia from '../photos/Dartmouth.jpg';
import bushra from '../photos/Bushra.jpg';
import image from '../photos/image.png';
import nadira from '../photos/nadira.jpg';
import layla from '../photos/layla.jpg';
import axios from 'axios'; // Import axios for API requests

const StudentsUserProfile = () => {
 const [issidebar2stClosed2, setissidebar2stClosed2] = useState(true);
 const [activeContent2, setactiveContent2] = useState('dashboard');
 const [enrolledCourses, setEnrolledCourses] = useState([]); // New state for enrolled courses
 const [wishlist, setWishlist] = useState([]); 
 const [enrolledCoursesCount, setEnrolledCoursesCount] = useState(0); // State for enrolled courses count
 const [wishlistCount, setWishlistCount] = useState(0); // State for wishlist count



 const togglesidebar2st = () => {
   setissidebar2stClosed2(!issidebar2stClosed2);
 };

 
 const navigate = useNavigate();
    const handleLogout = () => {
      // Clear localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("profilePic");
      // Redirect to login or homepage
      navigate("/");
    };
  const toggleContent2st = (content) => {
  setactiveContent2(content);
};

 useEffect(() => {
   const headerImg2 = document.getElementById("header-img2st");
   if (issidebar2stClosed2) {
     headerImg2.classList.remove('large2st');
     headerImg2.classList.add('normal2st');
   } else {
     headerImg2.classList.remove('normal2st');
     headerImg2.classList.add('large2st');
   }

   // Function to adjust the margin of sidebar2st content
   const adjustsidebar2stContent2Margin = () => {
     const sidebar2stContent2 = document.querySelectorAll('.sidebar2st-content');
     const sidebar2stMargin2 = issidebar2stClosed2 ? '150px' : '330px';
     sidebar2stContent2.forEach(content => {
       content.style.transition = 'margin-left 0.3s ease';
       content.style.marginLeft = sidebar2stMargin2;
     });
   };

   adjustsidebar2stContent2Margin();
 }, [issidebar2stClosed2]);

 // Fetch enrolled courses when the component mounts
 useEffect(() => {
  const fetchEnrolledCourses = async () => {
    const studentId = localStorage.getItem('studentId');
    try {
      const response = await axios.get(`http://localhost:5000/student/${studentId}/enrolled-courses`);
      setEnrolledCourses(response.data.data);
    } catch (error) {
      console.error('Failed to fetch enrolled courses', error);
    }
  };

  fetchEnrolledCourses();
}, []);
useEffect(() => {
  const fetchWishlist = async () => {
    const studentId = localStorage.getItem('studentId');
    try {
      const response = await axios.get(`http://localhost:5000/student/${studentId}/wishlist`);
      setWishlist(response.data.data);
    } catch (error) {
      console.error('Failed to fetch wishlist', error);
    }
  };

  if (activeContent2 === 'wishlist') {
    fetchWishlist();
  }
}, [activeContent2]);

useEffect(() => {
  const fetchCounts = async () => {
    const studentId = localStorage.getItem('studentId');
    try {
      const enrolledCoursesResponse = await axios.get(`http://localhost:5000/student/${studentId}/enrolled-courses`);
      setEnrolledCoursesCount(enrolledCoursesResponse.data.data.length);

      const wishlistResponse = await axios.get(`http://localhost:5000/student/${studentId}/wishlist`);
      setWishlistCount(wishlistResponse.data.data.length);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  fetchCounts();
}, []);


  const role = localStorage.getItem("role");
  const pp = localStorage.getItem("profilePic");
  const userId = localStorage.getItem("mentorId") || localStorage.getItem("studentId");
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");
  const email = localStorage.getItem("email");
  const country = localStorage.getItem("country");
  const stat = localStorage.getItem("stat");
  const profilePic = localStorage.getItem("profilePic");
  const bday = localStorage.getItem("birthday");
  const facebook  = localStorage.getItem("facebook");
  const instagram = localStorage.getItem("insta");
  const ll =  localStorage.getItem("linkedin");

 return(
  <div>
  <div>
  <nav className={`sidebar2st ${issidebar2stClosed2 ? 'closed' : ''}`}>
    <header style={{ marginBottom: 50 }}>
      <div className="image-text2st">
        <span className="image2st" style={{ marginRight: 20 }}>
          <img id="header-img2st" src={`http://localhost:5000/images/${pp}`} alt="Oxford" />
        </span>
        <div className="text2st header-text2st">
          <span className="name2st" >{fname}{lname}</span>
        </div>
      </div>
      <i className={`bx ${issidebar2stClosed2 ? 'bx-chevron-right' : 'bx-chevron-left'} toggle2st`} onClick={togglesidebar2st} />
    </header>
    <div className="menu-bar2st">
      <div className="menu2st">
        <ul className="menu-links2st">
          <li className="nav-link2st" style={{ marginTop: 170 }}>
            <a href="#" id="dashboard-link" className="scribble-text2st" onClick={() => toggleContent2st('dashboard')}>
              <i class='bx bx-menu icon2st'></i>
              <span className="text2st nav-text2st">Dashboard</span>
            </a>
          </li>
          <li className="nav-link2st">
            <a href="#" id="profile-link" className="scribble-text2st" onClick={() => toggleContent2st('profile')}>
              <i className="bx bx-user icon2st" />
              <span className="text2st nav-text2st">My Profile</span>
            </a>
          </li>
          <li className="nav-link2st">
            <a href="#" id="enrolled-courses-link" className="scribble-text2st" onClick={() => toggleContent2st('courses')}>
              <i className="bx bxs-edit icon2st" />
              <span className="text2st nav-text2st">Enrolled Courses</span>
            </a>
          </li>
          <li className="nav-link2st">
            <a href="#" id="wishlist-link" className="scribble-text2st" onClick={() => toggleContent2st('wishlist')}>
              <i className="bx bxs-heart icon2st" />
              <span className="text2st nav-text2st">Wishlist</span>
            </a>
          </li>
          
          <li className="nav-link2st">
            <Link to="/" className="scribble-text2st" style={{ textDecoration: 'none', color: 'inherit' }}>
              <i className="bx bx-home icon2st" />
              <span className="text2st nav-text2st" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>Go To Home</span>
            </Link>
          </li>

          <li className="nav-link2st">
            <a href="#" className="scribble-text2st" style={{ marginTop: 80 }}>
              <i className="bx bx-log-out icon2st" onClick={handleLogout}/>
              <span className="text2st nav-text2st">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

      
      
      {/* Your sidebar2st content with dynamic margin */}
      <div className="sidebar2st-content" id="dashboard-content" style={{ display: activeContent2 === 'dashboard' ? 'block' : 'none' }}>
       <div>
        <div className="row">
              <div className="col-md-4">
                <div className="card11st" style={{marginLeft: 0, marginRight: 100, marginBottom: 100}}>
                  <i className="fas fa-pen-to-square" style={{fontSize: 50, marginTop: 20}} />
                  <br />
                  <p id="enrolledCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>{enrolledCoursesCount}</p>
                  <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}>Enrolled Courses</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card11st" style={{marginRight: 100, marginBottom: 100}}>
                  <i className="fa-solid fa-check-to-slot" style={{fontSize: 50, marginTop: 20}} />
                  <br />
                  <p id="completedCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>0</p>
                  <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}>Completed Courses</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card11st" style={{marginRight: 100, marginBottom: 100}}>
                  <i className="fa-solid fa-heart" style={{fontSize: 50, marginTop: 20}} />
                  <br />
                  <p id="mentorsCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>{wishlistCount}</p>
                  <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}>Wishlist</p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <h3 style={{marginBottom: 25, marginLeft: 90}}>Activity Heatmap</h3>
              <br />
            </div>

            {/* <div id="github_chart_1"> </div> */}
            <HeatmapCalendar/>;
      </div>

      </div>
      <div className="sidebar2st-content" id="profile" style={{ display: activeContent2 === 'profile' ? 'block' : 'none' }}>
     
       <div>
       <div style={{ marginLeft: issidebar2stClosed2 ? '-400px' : '-200px' }}>
         <h2 style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: 'bolder', fontSize: 50, marginTop: 20 }}>My Profile</h2>
       </div>
          <br />
         <div className="row">
            <div className="col-md-6">
              <div className="card22st">
                <div className="card-body2st">
                  <di v className="label-value-container2st">
                    <div className="label-column2st">
                      <p><strong>First Name:</strong></p>
                    </div>
                    <div className="value-column2st">
                      <div className="value-box2st" style={{width: 300}}>{fname}</div>
                    </div>
                    <div className="label-column2st" style={{marginLeft: 80}}>
                      <p><strong>Last Name:</strong></p>
                    </div>
                    <div className="value-column2st">
                      <div className="value-box2st" style={{width: 300, marginRight: 20}}>{lname}</div>
                    </div>
                  </di>
                  <div className="label-value-container2st">
                    <div className="label-column2st">
                      <p><strong>Email:</strong></p>
                    </div>
                    <div className="value-column2st">
                      <div className="value-box2st" style={{ marginRight: 30}}>{email}</div>
                    </div>
                  </div>
                  <div className="label-value-container2st">
                    <div className="label-column2st">
                      <p><strong>Birth Date:</strong></p>
                    </div>
                    <div className="value-column2st">
                      <div className="value-box2st" style={{width: 300}}>{bday}</div>
                    </div>
                    <div className="label-column2st" style={{marginLeft: 80}}>
                      <p><strong>Status:</strong></p>
                    </div>
                    <div className="value-column2st" >
                      <div className="value-box2st" style={{width: 300,marginRight: 20}}>{stat}</div>
                    </div>
                  </div>
                  <div className="label-value-container2st">
                    <div className="label-column2st">
                      <p><strong>Country:</strong></p>
                    </div>
                    <div className="value-column2st">
                      <div className="value-box2st" style={{ marginRight: 30}}>{country}</div>
                    </div>
                  </div>
                  <div className="label-value-container2st">
                    <div className="label-column2st">
                      <p><strong><img src={insta} alt="Instagram" style={{ width: 70, height: 70, marginLeft: 0 }} /> : </strong></p>
                    </div>
                    <div className="value-column2st">
                      <div className="value-box2st" style={{ marginRight: 30}}>{instagram}</div>
                    </div>
                  </div>
                  <div className="label-value-container2st">
                    <div className="label-column2st">
                    {/* <img src={fb} alt="Facebook" style={{ width: 70, height: 70, marginLeft: 0 }} /> */}
                      <p><strong><img src={fb} alt="Facebook" style={{ width: 70, height: 70, marginLeft: 0 }} /> :</strong></p>
                    </div>
                    <div className="value-column2st">
                      <div className="value-box2st" style={{ marginRight: 30}}>{facebook}</div>
                    </div>
                  </div>
                  <div className="label-value-container2st">
                    <div className="label-column2st">
                      <p><strong><img src={linkedin} alt="LinkedIn" style={{ width: 50, height: 50, marginLeft: 10 }} /> : </strong></p>
                    </div>
                    <div className="value-column2st">
                      <div className="value-box2st" style={{ marginRight: 30}}>{ll}</div>
                    </div>
                  </div>
                  
                  {/* Repeat the same structure for other label-value pairs */}
                </div>
              </div>
            </div>
          </div>
          <br />
          
        </div>
       
                  

      </div>
      {/* Add other sidebar2st contents similarly */}
      {/* <div className="sidebar2st-content" id="profile" style={{ display: activeContent2 === 'profile' ? 'block' : 'none' }}></div> */}
     
     <div className="sidebar2st-content" id="enrolled-courses" style={{ display: activeContent2 === 'courses' ? 'block' : 'none' }}>
        <div>
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((mentor, index) => (
              <div className="card11st" key={mentor.mentorId._id} style={{ marginBottom: 20 }}>
                <img src={`http://localhost:5000/images/${mentor.mentorId.pp}`} alt="Mentor Profile" />
                <h3>{mentor.mentorName}</h3><br />
                <p>Institution: {mentor.mentorId.institution}</p>
                <p>Qualification: {mentor.mentorId.qualification}</p>
                <p>Study Period: {mentor.mentorId.studyPeriod}</p>
                
              </div>
            ))
          ) : (
            <h3 style={{marginTop: 300 , marginLeft: 400, fontSize: 30}}>No enrolled courses found <i class="fa-solid fa-face-sad-tear"></i></h3>
          )}
        </div>
      </div>
     <div className="sidebar2st-content" id="wishlist" style={{ display: activeContent2 === 'wishlist' ? 'block' : 'none' }}>
     <div>
          {wishlist.length>0?(
            wishlist.map(mentor => (
            <div className="card1mst" key={mentor.mentorId._id} style={{ marginBottom: 20 }}>
                
                  <img src={`http://localhost:5000/images/${mentor.mentorId.pp}`} alt={`${mentor.mentorId.fname} ${mentor.mentorId.lname}`} />
                  <h4>{mentor.mentorId.fname} {mentor.mentorId.lname}</h4>
                  <p>{mentor.mentorId.institution}</p>
                  <p>{mentor.mentorId.qualification}</p>
                  <p>{mentor.mentorId.studyPeriod}</p>
              </div>
              ))
            ):(
              <h4 style={{marginTop: 300 , marginLeft: 400, fontSize: 30}}>No mentors found in your wishlist <i class="fa-solid fa-face-sad-tear"></i></h4> 
            )}
            </div>
     </div>
    
    </div>
 )



};
export default StudentsUserProfile;
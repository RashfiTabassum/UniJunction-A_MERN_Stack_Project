import React, { useEffect, useState } from 'react';
import './Mentors_User_Profile.css';
import { Link, useNavigate , useParams } from "react-router-dom";
import HeatmapCalendar from '../js/HeatmapCalendar.mjs';
import oxford from '../photos/oxford_undergrad.jpg';
import fb from '../photos/facebook.png';
import insta from '../photos/insta.png';
import linkedin from '../photos/Linkedin.png';
import stu1 from '../photos/stu1.jpg';
import stu2 from '../photos/stu2.jpg';
import stu3 from '../photos/stu3.jpg';
import stu4 from '../photos/stu4.jpg';
import axios from 'axios';  // Make sure you have axios installed


const MentorsUserProfile = () => {
  const [isSidebarClosed1, setisSidebarClosed1] = useState(true);
  const [activeContent1, setactiveContent1] = useState('dashboard');
  const [mentor, setMentor] = useState(null);
  const [connectedCount, setConnected] = useState(0);
  const [students, setStudents] = useState([]); // State to store students' details
 
  const { id } = useParams();
  

  const toggleSidebar1 = () => {
    setisSidebarClosed1(!isSidebarClosed1);
  };

  const toggleContent1 = (content) => {
   setactiveContent1(content);
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

    useEffect(() => {
     
      const headerImg1 = document.getElementById("header-img1");
      if (isSidebarClosed1) {
        headerImg1.classList.remove('large1');
        headerImg1.classList.add('normal1');
      } else {
        headerImg1.classList.remove('normal1');
        headerImg1.classList.add('large1');
      }
    
      // Function to adjust the margin of sidebar content
      const adjustsidebarContent1Margin = () => {
        const sidebarContent1 = document.querySelectorAll('.sidebar-content1');
        const sidebarMargin1 = isSidebarClosed1 ? '150px' : '330px';
        sidebarContent1.forEach(content => {
          content.style.transition = 'margin-left 0.3s ease';
          content.style.marginLeft = sidebarMargin1;
        });
      };
    
      adjustsidebarContent1Margin();

    }, [isSidebarClosed1]);

    useEffect(() => {
      const cs = async () => {
        const mentorId = localStorage.getItem('mentorId');
        try {
          const response = await axios.get(`http://localhost:5000/mentor/${mentorId}/connected-students`);
          setConnected(response.data.data.length);  // connected students count
          console.log('Connected students:', response.data.data.length);
          setStudents(response.data.data); // students' details
        } catch (error) {
          console.error('Failed to fetch enrolled courses', error);
        }
      };
    
      cs();
    }, []);

    
    
   // Fetched mentor details from localStorage if not fetched from API
   const role = localStorage.getItem("role");
   const pp = localStorage.getItem("profilePic");
   const fname = localStorage.getItem("fname");
   const lname = localStorage.getItem("lname");
   const email = localStorage.getItem("email");
   const country = localStorage.getItem("country");
   const stat = localStorage.getItem("stat");
   const institution = localStorage.getItem("institution");
   const profilePic = localStorage.getItem("profilePic");
   const bday = localStorage.getItem("birthday");
   const facebook = localStorage.getItem("facebook");
   const instagram = localStorage.getItem("insta");
   const linkedinLink = localStorage.getItem("linkedin");
   const fee=localStorage.getItem("fee");
   console.log(fee*connectedCount);
   const tot=fee*connectedCount;

  return (
    <div>
      <div>
        <nav className={`sidebar1 ${isSidebarClosed1 ? 'closed' : ''}`}>
          <header style={{ marginBottom: 50 }}>
            <div className="image1-text1">
              <span className="image1" style={{ marginRight: 20 }}>
                <img id="header-img1"src={`http://localhost:5000/images/${pp}`} alt="Oxford" />
              </span>
              <div className="text1 header-text1">
                <span className="name1">{fname} {lname}</span>
              </div>
            </div>
            <i className={`bx ${isSidebarClosed1 ? 'bx-chevron-right' : 'bx-chevron-left'} toggle`} onClick={toggleSidebar1} />
          </header>
          {/* Sidebar menu items */}
          <div className="menu-bar1">
            <div className="menu1">
              <ul className="menu-links1">
                <li className="nav-link1" style={{ marginTop: 170 }}>
                  <a href="#" id="dashboard-link1" className="scribble-text1" onClick={() => toggleContent1('dashboard')}>
                    <i className="bx bx-home-alt icon1" />
                    <span className="text1 nav-text1">Dashboard</span>
                  </a>
                </li>
                <li className="nav-link1">
                  <a href="#" id="profile-link" className="scribble-text1" onClick={() => toggleContent1('profile')}>
                    <i className="bx bx-user icon1" />
                    <span className="text1 nav-text1">My Profile</span>
                  </a>
                </li>
                <li className="nav-link1">
                  <a href="#" id="profile-link" className="scribble-text1" onClick={() => toggleContent1('group')}>
                  <i class="bx bxs-group icon1"/>
                    <span className="text1 nav-text1">Students</span>
                  </a>
                </li>
                
                
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                <li className="nav-link1">
                  <a href="#" className="scribble-text1">
                    <i className="bx bx-home icon1" />
                    <span className="text1 nav-text1" >Go To Home</span>
                  </a>
                </li>
                </Link>
                <li className="nav-link1">
                  <a href="#" className="scribble-text1" onClick={handleLogout}>
                    <i className="bx bx-log-out icon1" />
                    <span className="text1 nav-text1" >Logout</span>
                  </a>
                </li>
                
              </ul>
              {/* Logout */}
              {/* <div className="bottom-content">
                <li className="nav-link1">
                  <a href="#" style={{marginTop: 100}} className="scribble-text1">
                    <i className="bx bx-log-out icon1" />
                    <span className="text1 nav-text1">Logout</span>
                  </a>
                </li>
              </div> */}
            </div>
          </div>
        </nav>
      </div>
      {/*sidebar content with dynamic margin */}
      <div className="sidebar-content1" id="dashboard-content" style={{ display: activeContent1 === 'dashboard' ? 'block' : 'none' }}>
       <div>
        <div className="row">
          <div className="col-md-4">
            <div className="card1" style={{marginLeft: 0, marginRight: 100, marginBottom: 100}}>
              <i className="fa-solid fa-users" style={{fontSize: 50, marginTop: 20}} />
              <br />
              <p id="enrolledCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>{connectedCount}</p>
              <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}>Connected Students</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" style={{marginRight: 100, marginBottom: 100}}>
              <i className="fa-solid fa-comment" style={{fontSize: 50, marginTop: 20}} />
              <br />
              <p id="completedCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>0</p>
              <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}>Reviews</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card1" style={{marginRight: 100, marginBottom: 100}}>
              <i className="fa-solid fa-wallet" style={{fontSize: 50, marginTop: 20}} />
              <br />
              <span id="mentorsCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>{tot}</span>
              <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}><i className="fa-solid fa-dollar-sign" style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}} />Earning</p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h3 style={{marginBottom: 25, marginLeft: 90}}>Activity Heatmap</h3>
          <br />
        </div>
        <div id="github_chart_1"> </div>
        <HeatmapCalendar/>;
      </div>

      </div>
      <div className="sidebar-content1" id="profile" style={{ display: activeContent1 === 'profile' ? 'block' : 'none' }}>
     
       <div>
       <div style={{ marginLeft: isSidebarClosed1 ? '-400px' : '-200px' }}>
         <h2 style={{ textAlign: 'center', fontFamily: 'serif', fontWeight: 'bolder', fontSize: 50, marginTop: 20 }}>My Profile</h2>
       </div>
          <br />
          <div className="row">
            <div className="col-md-6">
              <div className="card21">
                <div className="card-body1">
                  <div className="label-value-container1">
                    <div className="label-column1">
                      <p><strong>First Name:</strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box1" style={{width: 300}}>{fname}</div>
                    </div>
                    <div className="label-column1" style={{marginLeft: 80}}>
                      <p><strong>Last Name:</strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box1" style={{width: 300 , marginRight: 20}}>{lname}</div>
                    </div>
                  </div>
                  <div className="label-value-container1">
                    <div className="label-column1">
                      <p><strong>Email:</strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box1" style={{ marginRight: 30}}>{email}</div>
                    </div>
                  </div>
                  <div className="label-value-container1">
                    <div className="label-column1">
                      <p><strong>Birth Date:</strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box1" style={{width: 300}}>{bday}</div>
                    </div>
                    <div className="label-column1" style={{marginLeft: 80}}>
                      <p><strong>Status:</strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box1" style={{width: 300,marginRight: 20}}>{stat}</div>
                    </div>
                  </div>
                  <div className="label-value-container1">
                    <div className="label-column1">
                      <p><strong>Country:</strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box1" style={{ marginRight: 30}}>{country}</div>
                    </div>
                  </div>
                  <div className="label-value-container1">
                    <div className="label-column1">
                      <p><strong>Current Institution:</strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box1" style={{ marginRight: 30}}>{institution}</div>
                    </div>
                  </div>
                  <div className="label-value-container1">
                    <div className="label-column1">
                      <p><strong><img src={insta} alt="Instagram" style={{ width: 70, height: 70, marginLeft: 0 }} /> : </strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box2st" style={{ marginRight: 30}}>{instagram}</div>
                    </div>
                  </div>
                  <div className="label-value-container1">
                    <div className="label-column1">
                    {/* <img src={fb} alt="Facebook" style={{ width: 70, height: 70, marginLeft: 0 }} /> */}
                      <p><strong><img src={fb} alt="Facebook" style={{ width: 70, height: 70, marginLeft: 0 }} /> :</strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box2st" style={{ marginRight: 30}}>{facebook}</div>
                    </div>
                  </div>
                  <div className="label-value-container1">
                    <div className="label-column1">
                      <p><strong><img src={linkedin} alt="LinkedIn" style={{ width: 50, height: 50, marginLeft: 10 }} /> : </strong></p>
                    </div>
                    <div className="value-column1">
                      <div className="value-box2st" style={{ marginRight: 30}}>{linkedinLink}</div>
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
      {/* Add other sidebar contents similarly */}
      <div className="sidebar-content1" id="student-content" style={{ display: activeContent1 === 'group' ? 'block' : 'none' }}>
      {students.length > 0 ? (
          students.map((student, index) => (
            <div className="card51" key={student._id} style={{ marginBottom: 20 }}>
              <img src={`http://localhost:5000/images/${student.pp}`} alt="Student Profile" />
              <h3>{student.fname} {student.lname}</h3><br />
              <p>Email: {student.email}</p>
              <p>Country: {student.country}</p>
              <p>Institution: {student.institution}</p>
              {/* Add more fields as necessary */}
            </div>
          ))
        ) : (
          <h3 style={{ marginTop: 300, marginLeft: 400, fontSize: 30 }}>
            No connected students found <i className="fa-solid fa-face-sad-tear"></i>
          </h3>
        )}
      </div>        
    </div>
  );
};

export default MentorsUserProfile;

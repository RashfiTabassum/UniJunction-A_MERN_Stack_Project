import React, { useEffect, useState } from 'react';
import './Admin_User_Profile.css';
import { Link, useNavigate } from "react-router-dom";
import admin from '../photos/admin1.jpg'; // Assuming this is your admin profile image

const AdminUserProfile = () => {
  const [isSidebarClosed1ad, setisSidebarClosed1ad] = useState(true);
  const [activeContent1ad, setactiveContent1ad] = useState('dashboard');
  const [mentors, setMentors] = useState([]);
  const [students, setStudents] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [studentCount, setStudentCount] = useState(0);
  const [mentorCount, setMentorCount] = useState(0);
  const [popupImage, setPopupImage] = useState(null);
  const [totalFees, setTotalFees] = useState(0); // Add state for total fees

  const togglesidebar1ad = () => {
    setisSidebarClosed1ad(!isSidebarClosed1ad);
  };

  const toggleContent1ad = (content) => {
    setactiveContent1ad(content);
  };

  useEffect(() => {
    fetch("http://localhost:5000/getAllMentors")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setMentors(data.data);
          setMentorCount(data.data.length);
        }
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/getAllStudents")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setStudents(data.data);
          setStudentCount(data.data.length);
        }
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/getAllTransactions")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setTransactions(data.data);
        }
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/getTotalFees")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          setTotalFees(data.totalFees);
        }
      });
  }, []);

  useEffect(() => {
    const headerImg1ad = document.getElementById("header-img1ad");
    if (isSidebarClosed1ad) {
      headerImg1ad.classList.remove('large1ad');
      headerImg1ad.classList.add('normal1ad');
    } else {
      headerImg1ad.classList.remove('normal1ad');
      headerImg1ad.classList.add('large1ad');
    }

    const adjustsidebarContent1AdMargin = () => {
      const sidebarContent1Ad = document.querySelectorAll('.sidebar-content1ad');
      const sidebarMargin1 = isSidebarClosed1ad ? '150px' : '330px';
      sidebarContent1Ad.forEach(content => {
        content.style.transition = 'margin-left 0.3s ease';
        content.style.marginLeft = sidebarMargin1;
      });
    };

    adjustsidebarContent1AdMargin();
  }, [isSidebarClosed1ad]);

  const getImageUrl = (imageName) => {
    return imageName ? `http://localhost:5000/images/${imageName}` : null;
  };

  const handleImageClick = (imageUrl) => {
    setPopupImage(imageUrl);
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  const navigate = useNavigate();
  const handleLogout = () => {
      // Clear localStorage
    // localStorage.removeItem("token");
    // localStorage.removeItem("role");
    // localStorage.removeItem("profilePic");
    localStorage.removeItem("isAdmin");
      // Redirect to login or homepage
    navigate("/");
  };

  

  return (
    <div>
      <div>
        <nav className={`sidebar1ad ${isSidebarClosed1ad ? 'closed' : ''}`}>
          <header style={{ marginBottom: 50 }}>
            <div className="image1ad-text1ad">
              <span className="image1ad" style={{ marginRight: 20 }}>
                <img id="header-img1ad" src={admin} alt="Admin" />
              </span>
              <div className="text1ad header-text1ad">
                <span className="name1ad"><h3>Admin</h3></span>
              </div>
            </div>
            <i className={`bx ${isSidebarClosed1ad ? 'bx-chevron-right' : 'bx-chevron-left'} togglead`} onClick={togglesidebar1ad} />
          </header>
          <div className="menu-bar1ad">
            <div className="menu1ad">
              <ul className="menu-links1ad">
                <li className="nav-link1ad" style={{ marginTop: 170 }}>
                  <a href="#" id="dashboard-link1" className="scribble-text1ad" onClick={() => toggleContent1ad('dashboard')}>
                    <i className="bx bx-menu icon1ad" />
                    <span className="text1ad nav-text1ad">Dashboard</span>
                  </a>
                </li>
                <li className="nav-link1ad">
                  <a href="#" id="mentorin-link" className="scribble-text1ad" onClick={() => toggleContent1ad('Mentors Info')}>
                    <i className="fa-solid fa-person-chalkboard icon1ad" />
                    <span className="text1ad nav-text1ad">Mentor's Info</span>
                  </a>
                </li>
                <li className="nav-link1ad">
                  <a href="#" id="studentin-link" className="scribble-text1ad" onClick={() => toggleContent1ad('Students Info')}>
                    <i className="fa fa-users icon1ad" aria-hidden="true" />
                    <span className="text1ad nav-text1ad">Student's Info</span>
                  </a>
                </li>
                <li className="nav-link1ad">
                  <a href="#" id="trans-link" className="scribble-text1ad" onClick={() => toggleContent1ad('Transactions')}>
                    <i className="bx bx-money-withdraw icon1ad" />
                    <span className="text1ad nav-text1ad">Transactions</span>
                  </a>
                </li>
                <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                  <li className="nav-link1ad">
                    <a href="#" className="scribble-text1ad">
                      <i className="bx bx-home icon1ad" />
                      <span className="text1ad nav-text1ad">Go To Home</span>
                    </a>
                  </li>
                </Link>

                <li className="nav-link1ad">
                    <a href="#" className="scribble-text1ad" style={{ marginTop: 80 }}>
                      <i className="bx bx-log-out icon1ad"  onClick={handleLogout}/>
                      <span className="text1ad nav-text1ad">Logout</span>
                    </a>
                  </li>
              </ul>
              {/* <div className="bottom-contentad">
                <li className="nav-link1ad">
                  <a href="#" style={{ marginTop: 200 }} className="scribble-text1ad">
                    <i className="bx bx-log-out icon1ad" />
                    <span className="text1ad nav-text1ad">Logout</span>
                  </a>
                </li>
              </div> */}
            </div>
          </div>
        </nav>
      </div>

      <div className="sidebar-content1ad" id="dashboard-content" style={{ display: activeContent1ad === 'dashboard' ? 'block' : 'none' }}>
        {/* Your dashboard content here */}
        <div>
        <div className="row">
              <div className="col-md-4">
                <div className="card11ad" style={{marginLeft: -10, marginRight: 100, marginBottom: 100}}>
                  <i className="fa fa-users" style={{fontSize: 50, marginTop: 20}} />
                  <br />
                  <p id="enrolledCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>{studentCount}</p>
                  <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}>Total Students</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card11ad" style={{marginLeft: -20, marginBottom: 100}}>
                  <i className="fa-solid fa-person-chalkboard" style={{fontSize: 50, marginTop: 20}} />
                  <br />
                  <p id="completedCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>{mentorCount}</p>
                  <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}>Total Mentors</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card11ad" style={{marginLeft: -30, marginBottom: 100}}>
                  <i className="bx bx-money-withdraw" style={{fontSize: 50, marginTop: 20}} />
                  <br />
                  <p id="mentorsCount" style={{textAlign: 'center', fontSize: 30, fontFamily: '"Franklin Gothic Medium"'}}>{totalFees}</p>
                  <p style={{textAlign: 'center', fontSize: 'large', fontWeight: 'bold'}}>Total Transaction</p>
                </div>
              </div>
              <br />
              <br />
              <br />
              
              <br />
        </div>

      </div>

      </div>

      <div className="sidebar-content1ad" id="mentorinfo" style={{ display: activeContent1ad === 'Mentors Info' ? 'block' : 'none' }}>
        <table className="mentor-table1ad">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Profession</th>
              <th>Institution</th>
              <th>Fees</th>
              <th>Status</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {mentors.map((mentor, index) => {
              const mentorImageUrl = getImageUrl(mentor.image);
              return (
                <tr key={index}>
                  <td>{mentor.fname}</td>
                  <td>{mentor.lname}</td>
                  <td>{mentor.email}</td>
                  <td>{mentor.country}</td>
                  <td>{mentor.profession}</td>
                  <td>{mentor.institution}</td>
                  <td>${mentor.fee}</td>
                  <td>{mentor.stat}</td>
                  <td>
                    {mentorImageUrl ? (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img
                          src={mentorImageUrl}
                          alt={`${mentor.fname}'s Profile`}
                          style={{ width: 150, height: 100, cursor: 'pointer' }}
                        />
                        <i class="fa-solid fa-expand" style={{ marginLeft: 10,marginTop:70, cursor: 'pointer' }} onClick={() => handleImageClick(mentorImageUrl)} />
                      </div>
                    ) : (
                      <span>No Image</span>
                    )}
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="sidebar-content1ad" id="studentinfo" style={{ display: activeContent1ad === 'Students Info' ? 'block' : 'none' }}>
        <table className="mentor-table1ad">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
              <th>Profile Picture</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => {
              const studentImageUrl = getImageUrl(student.pp);
              return (
                <tr key={index}>
                  <td>{student.fname}</td>
                  <td>{student.lname}</td>
                  <td>{student.email}</td>
                  <td>{student.country}</td>
                  <td>{student.stat}</td>
                  <td>
                    {studentImageUrl ? (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={studentImageUrl}
                        alt={`${student.fname}'s Profile`}
                        style={{ width: 100, height: 100, cursor: 'pointer' }}
                      />
                      <i class="fa-solid fa-expand" style={{ marginLeft: 10,marginTop:70, cursor: 'pointer' }} onClick={() => handleImageClick(studentImageUrl)} />
                      </div>
                    ) : (
                      <span>No Image</span>
                    )}
                    
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="sidebar-content1ad" id="transaction" style={{ display: activeContent1ad === 'Transactions' ? 'block' : 'none' }}>
        {/* Your transactions content here */}
        <table className="mentor-table1ad">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Student's Name</th>
              <th>Student ID</th>
              <th>Mentor's Name</th>
              <th>Mentor ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction._id}</td>
                <td>{transaction.studentName}</td>
                <td>{transaction.studentId}</td>
                <td>{transaction.mentorName}</td>
                <td>{transaction.mentorId}</td>
                <td>${transaction.fee}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ImagePopup imageUrl={popupImage} onClose={handleClosePopup} />
    </div>
  );
};

const ImagePopup = ({ imageUrl, onClose }) => {
  if (!imageUrl) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt="Large View" className="popup-image" />
      </div>
    </div>
  );
};

export default AdminUserProfile;

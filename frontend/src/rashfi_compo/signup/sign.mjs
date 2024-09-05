import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './sign.css';
import img1 from '../photos/Classes.png';
import img2 from '../photos/Cl.png';
import img3 from '../photos/Cl2.png';
import { Link } from "react-router-dom";
import axios from "axios";

const SIGN = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [profession, setProfession] = useState(""); // Only for mentor signup
  const [institution, setInstitution] = useState(""); // Only for mentor signup
  const [qualification, setQualification] = useState("");// Only for mentor signup
  const [studyPeriod, setStudyPeriod] = useState("");// Only for mentor signup
  const [stat, setStatus] = useState("");
  const [signupType, setSignupType] = useState("mentor"); // Default signup type***
  const [fee, setFee] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [bio, setBio] = useState("");

  const [image, setImage] = useState(null);
  const [pp, setPp] = useState(null);
  const [intro, setIntro] = useState(null);
  const [trial, setTrial] = useState(null);

  const [signupError, setSignupError] = useState('');
  const signupFormRef = useRef(null);
  const signupLinkRef = useRef(null);
  const menteeButtonRef = useRef(null);
 
  const navigate = useNavigate(); // Initialize useNavigate
  useEffect(() => {
    const showSlides = () => {
      let slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      setSlideIndex((prevIndex) => {
        let newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          newIndex = 1;
        }
        slides[newIndex - 1].style.display = "block";
        return newIndex;
      });
    };
    showSlides();
    const interval = setInterval(showSlides, 1500); // Change image every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => {
      let newIndex = prevIndex + n;
      let slides = document.getElementsByClassName("mySlides");
      if (newIndex > slides.length) newIndex = 1;
      if (newIndex < 1) newIndex = slides.length;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[newIndex - 1].style.display = "block";
      return newIndex;
    });
  };

  const currentSlide = (n) => {
    setSlideIndex(() => {
      let slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) n = 1;
      if (n < 1) n = slides.length;
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[n - 1].style.display = "block";
      return n;
    });
  };

  const switchToSignup = (type) => {
    setSignupType(type);
    signupLinkRef.current.style.background = type === "mentor" ? "tan" : "white";
    menteeButtonRef.current.style.background = type === "mentee" ? "tan" : "white";
  };

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const onPpChange = (e) => {
    setPp(e.target.files[0]);
  };
  const onIntroChange = (e) => {
    setIntro(e.target.files[0]);
  };
  const onTrialChange = (e) => {
    setTrial(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Create a FormData object to store all form data including the image
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("country", country);
    formData.append("birthdate", birthdate);
    formData.append("stat", stat);
    formData.append("institution", institution);
    formData.append("role", signupType);
    formData.append("pp", pp);
    formData.append("instagramLink", instagramLink);
    formData.append("facebookLink", facebookLink);
    formData.append("linkedinLink", linkedinLink);
  
    // Append mentor-specific fields only if signupType is 'mentor'
    if (signupType === 'mentor') {
      if (image) formData.append("image", image);
      formData.append("profession", profession);
      // formData.append("institution", institution);
      formData.append("fee", fee);
      formData.append("bio", bio);
      formData.append("qualification", qualification);
      formData.append("studyPeriod", studyPeriod);
      if (trial) formData.append("trial", trial);
      if (intro) formData.append("intro", intro);
    }
  
    try {
      // Perform the fetch request to your backend endpoint
      const response = await fetch(`http://localhost:5000/register`, {
        method: "POST",
        body: formData, // Use formData instead of JSON.stringify
      });
  
      // Parse response
      const data = await response.json();
      console.log(data);
  
      // Handle success or error response as needed
      if (data.status === "ok") {
        const response = await axios.post("http://localhost:5000/login-user", {
          email,
          password,
        });
    
        if (response.data.status === "ok") {
          const { token, role, userId, fname, lname, email, country, stat, profilePic,birthdate,facebookLink,instagramLink,institution,linkedinLink,fee } = response.data.data;
    
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          localStorage.setItem("profilePic", profilePic);
          localStorage.setItem("institution",institution);
          localStorage.setItem("country", country);
          console.log(role);
          console.log(userId);
          if (role === "mentor") {
            localStorage.setItem("mentorId", userId);
            localStorage.setItem("fname", fname);
            localStorage.setItem("lname", lname);
            localStorage.setItem("email", email);
            //localStorage.setItem("country", country);
            localStorage.setItem("stat", stat);
            localStorage.setItem("profilePic", profilePic);
            localStorage.setItem("birthday", birthdate);
            localStorage.setItem("facebook",facebookLink);
            localStorage.setItem("insta",instagramLink);
            
            localStorage.setItem("linkedin",linkedinLink);
            localStorage.setItem("fee",fee);
            console.log("fee",fee);
            //setRedirectUrl("/mentoruserprofile");
          } else {
            localStorage.setItem("studentId", userId);
            localStorage.setItem("fname", fname);
            localStorage.setItem("lname", lname);
            localStorage.setItem("email", email);
            //localStorage.setItem("country", country);
            localStorage.setItem("stat", stat);
            localStorage.setItem("birthday",birthdate);
            localStorage.setItem("facebook",facebookLink);
            localStorage.setItem("insta",instagramLink);
            localStorage.setItem("linkedin",linkedinLink);
            localStorage.setItem("profilePic", profilePic);
            console.log(birthdate);
            console.log(facebookLink);
            //setRedirectUrl("/studentsuserprofile");
          }
        
      } 
        // Redirect based on signupType
        if (signupType === 'mentor') {
          navigate('/mentoruserprofile'); // Redirect to mentor profile page
        } else {
          navigate('/studentsuserprofile'); // Redirect to student profile page
        }
        
        // Optionally, reset the form fields after successful submission
        
        // Optionally, reset the form fields after successful submission
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setCountry("");
        setProfession("");
        setInstitution("");
        setBirthdate("");
        setStatus("");
        setFee("");
        setBio("");
        setFacebookLink("");
        setInstagramLink("");
        setLinkedinLink("");
        setQualification("");
        setStudyPeriod("");
        setImage(null);
        setPp(null);
        setTrial(null);
        setIntro(null);
      } else {
        // Handle error scenario
        console.error("Registration failed:", data.error);
        setSignupError(data.error); // Set signup error message
      }
    } catch (error) {
      console.error("Error:", error);
      setSignupError("An error occurred while submitting the form."); // Handle fetch or other errors
    }
  };
  


  return (
    <div className="my-component">
      <section className="sign-section">
        <div className="square">
          <div className="square-child1">
            <div className="slideshow-container">
              <div className="mySlides fade">
                <div className="numbertextsi">1 / 3</div>
                <img src={img1} style={{ width: '100%' }} alt="slide1" />
                <div className="textsi" />
              </div>
              <div className="mySlides fade">
                <div className="numbertextsi">2 / 3</div>
                <img src={img2} style={{ width: '100%' }} alt="slide2" />
                <div className="textsi" />
              </div>
              <div className="mySlides fade">
                <div className="numbertextsi">3 / 3</div>
                <img src={img3} style={{ width: '100%' }} alt="slide3" />
                <div className="textsi" />
              </div>
              <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
              <a className="next" onClick={() => plusSlides(1)}>❯</a>
            </div>
            <br />
            <div style={{ textAlign: 'center' }}>
              <span className="dot" onClick={() => currentSlide(1)} />
              <span className="dot" onClick={() => currentSlide(2)} />
              <span className="dot" onClick={() => currentSlide(3)} />
            </div>
          </div>
          <div className="square-child2">
            <div className="center">
              <div className="heading"><h5>Create account as?</h5></div>
              <div className="btns">
                <a className="a1" href="#" ref={signupLinkRef} onClick={() => switchToSignup("mentor")}>
                  <i className='bx bxs-graduation'></i> Mentor
                </a>
                <a className="a2" href="#" ref={menteeButtonRef} onClick={() => switchToSignup("mentee")}>
                  <i className='bx bxs-graduation'></i> Mentee
                </a>
              </div>
              <div className="signup-form">
                <div className="signup_error">{signupError}</div>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Firstname" value={fname} onChange={(e) => setFname(e.target.value)} required/>
                  <input type="text" placeholder="Lastname" value={lname} onChange={(e) => setLname(e.target.value)} required/>
                  <input className="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                  <input className="email" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  <input className="email"
                    type="text"
                    placeholder="Birth Date (YYYY-MM-DD)"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    pattern="\d{4}-\d{2}-\d{2}"
                    required
                  />



                  <input className="email" type="text" placeholder="Country Name" value={country} onChange={(e) => setCountry(e.target.value)} required/>
                  <label htmlFor="pp-input" className="file-label" style={{ marginLeft: 40 ,marginTop:20 }}>Profile Picture</label>
                  <input type="file" accept="image/*" style={{marginTop:10}} onChange={onPpChange} required/> <br></br>

                  <input className="email"
                      type="text"
                      placeholder="Facebook Profile Link"
                      value={facebookLink}
                      onChange={(e) => setFacebookLink(e.target.value)} required
                    />

                    <input className="email"
                      type="text"
                      placeholder="Instagram Profile Link"
                      value={instagramLink}
                      onChange={(e) => setInstagramLink(e.target.value)} required
                    />

                    <input className="email"
                      type="text"
                      placeholder="LinkedIn Profile Link"
                      value={linkedinLink}
                      onChange={(e) => setLinkedinLink(e.target.value)} required
                    />

                  <select className="status" id="status" value={stat} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="" disabled>Select your status</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="Under Graduate">Under Graduate</option>
                    <option value="Others">Others</option>
                  </select>
                  <input className="email" name="email" type="text" placeholder="Current Institution"  value={institution} onChange={(e) => setInstitution(e.target.value)} required/>
                  {signupType === "mentor" && (
                    <>
                      <input className="email" name="email" type="text" placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} required/>
                      
                      <input className="email"
                        type="text"
                        placeholder="Educational Qualification"
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
                        required
                      />
                      <input className="email"
                        type="text"
                        placeholder="Study Period (e.g., 2015-2019)"
                        value={studyPeriod}
                        onChange={(e) => setStudyPeriod(e.target.value)}
                        required
                      />
                      <input className="email" type="text" placeholder="Fee (in $)" value={fee} onChange={(e) => setFee(e.target.value)} required/><br></br>
                      <label htmlFor="cv-input" className="file-label" style={{ marginLeft: 40,marginTop:20 }}>Upload CV</label>
                      <input type="file" accept="image/*" style={{marginTop:10}} onChange={onImageChange} required/> <br></br>
                      <input className="email" name="email" type="text" placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} required/>
                      <label htmlFor="pp-input" className="file-label" style={{ marginLeft: 40 ,marginTop:20 }}>Intro Video</label>
                      <input type="file" accept="video/*" style={{marginTop:10}} onChange={onIntroChange} required/> <br></br>
                      <label htmlFor="pp-input" className="file-label" style={{ marginLeft: 40 ,marginTop:20 }}>Trial Lesson</label>
                      <input type="file" accept="video/*" style={{marginTop:10}} onChange={onTrialChange} required/>
                    </>
                  )}
                  
                  {/* <input type="file" id="cv-input" /><br /> */}
                  <button type="submit" className="btnsi btnsi-primary btn-sm" style={{ width: 300, height: 40, marginLeft: 130, marginTop: 10, fontSize: 20 }}>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SIGN;

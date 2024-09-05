

import Animation from'./compo/Animation';
import AboutPage from'./compo/AboutPage';
import CardSlider from'./compo/CardSlider';
import Slider from'./compo/Slider';
// import Course from'./compo/Course';
// import CourseBox from'./compo/CourseBox';

import MentorList_nab from'./compo/MentorList_nab';
import Footer from'./compo/Footer';
import BecomeMentor from'./compo/BecomeMentor';

import CourseList from './compo/CourseList/index.mjs';

import Box from './compo/Box/index.mjs';
// import Know from './compo/Know';
import Review from './compo/Review/index.mjs';


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <><div style={{backgroundColor:'white'}}>
      {/* <Know/> */}
      <Animation />
      <Slider />
      <CardSlider />
      <AboutPage /> 
      <Review/> 
      {/* <CourseBox /> */}
      
       <Box/>
    <BecomeMentor/>
    
    <MentorList_nab/>
    <CourseList />
    <Footer /> 
    
    </div>
    
     
     
     
    
    
    
    </>
  );
}

export default App;

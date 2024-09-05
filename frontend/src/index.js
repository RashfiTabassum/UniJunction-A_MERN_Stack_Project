import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutUs from './Pages/AboutUs';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CourseListPage from './Pages/CourseListPage';
import MentorList_rashfi from './rashfi_compo/mentorlist/mentorList.mjs';


// import CourseListPage from './Pages/CourseListPage';
// import MentorList from './mentorlist/mentorList.mjs';
import SIGN from './rashfi_compo/signup/sign.mjs'
import PAYMENT from './rashfi_compo/payment/pay.mjs'
import StudentsUserProfile from './rashfi_compo/Students_Profile/Student_User_Profile.mjs';
import LOGIN from './rashfi_compo/LoginPage/login.mjs';
import MentorProfile from './rashfi_compo/Mentor_Profile/mentorProfile.js'
import MentorsUserProfile from './rashfi_compo/Mentors_Profile_Page/Mentors_User_Profile.mjs';
import AdminUserProfile from './rashfi_compo/Admin_Profile/Admin_User_Profile.mjs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "aboutUs",
    element: <AboutUs/>,
  },
  // {
  //   path: "courseList",
  //   element: <CourseListPage/>,
  // },
  {
    path: "mentorlist",
    element: <MentorList_rashfi/>,
  },
  {
    path: "signup",
    element: <SIGN/>,
  },
  {
    path: "login",
    element: <LOGIN/>,
  },
  {
    path: "studentsuserprofile",
    element: <StudentsUserProfile/>,
  },
  {
    path: "mentorprofile",
    element: <MentorProfile/>,
  },
  {
    path: "mentoruserprofile",
    element: <MentorsUserProfile/>,
  },
  {
    path: "pay",
    element: <PAYMENT/>,
  },
  {
    path: "admin",
    element: <AdminUserProfile/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <RouterProvider router={router}/>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

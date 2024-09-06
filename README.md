
# UniJunction - A MERN Full Stack Platform

**UniJunction** is a full-stack web application built with the MERN stack, designed to facilitate seamless Alumni-Student connections. The platform allows students to connect with alumni for personalized, paid mentorship, helping them navigate the complexities of higher education and university selection.

## Motivation

**UniJunction** is inspired by the challenges students face when seeking guidance for higher education. With the growing complexity of choosing the right universities, especially for international students, this platform seeks to provide personalized support and informed mentorship through paid services, ultimately enhancing the academic decision-making process.


## Features

### For Students
- **Connect & Mentor**: Find and connect with alumni, access one-on-one paid mentorship, and explore university insights.
- **Dashboard**: View connected mentors and wishlist items.
- **Enrolled Courses**: Details on booked lessons and mentors.
- **Wishlist**: Manage liked mentors.
- **Navigation**: Access home and logout options.

### For Alumni
- **Profile & Mentorship**: Showcase your profile, offer paid mentorship, and expand your network.
- **Dashboard**: See connected students and total earnings.
- **Students**: View details of students who booked lessons.
- **Navigation**: Access home and logout options.

### For Administrators
- **User Management**: Access student and mentor profiles.
- **Transaction Monitoring**: Oversee transactions and resolve issues.
- **Platform Maintenance**: Ensure functionality and address technical issues.

### General Access
- **Homepage**: Available to all visitors.
- **Mentor Profiles**: Viewable by all visitors, including details about mentors.

## Project Setup

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](https://git-scm.com/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the Repository

To get started, clone the repository to your local machine using the following command:

```bash
git clone https://github.com/RashfiTabassum/UniJunction-A_MERN_Stack_Project.git
```

### Navigate into the project folder:

```bash
cd UniJunction-A_MERN_Stack_Project
```

### Install Dependencies:

There are two folders in the project, one for the backend and another for the frontend. You'll need to install dependencies in both directories.

#### 1. Backend Setup
Navigate to the backend folder:
```
cd backend

```
Install the required dependencies:
```
npm install

```
Create a .env file in the backend directory and add your environment variables (e.g., MongoDB URI, JWT secret, etc.).
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

```

#### 2. Frontend Setup
Navigate to the frontend folder:
```
cd ../frontend
```
Install the frontend dependencies:
```
npm install
```
### Running the Project:
To run both the backend and frontend, you can use two separate terminal windows:

#### Run Backend Server
In the backend folder, start the backend server:

```
npm run dev
```
The backend will be running at http://localhost:5000.

#### Run Frontend Server
In another terminal window, navigate to the frontend folder and run the following command:

```
npm start
```
The frontend will be running at http://localhost:3000.

### MongoDB Setup

Make sure your MongoDB server is running locally or provide a cloud MongoDB connection string in the .env file.
![dgg](https://github.com/user-attachments/assets/8d773a80-ea07-4d80-834b-eb1169b786e3)




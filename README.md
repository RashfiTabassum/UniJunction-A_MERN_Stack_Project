
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

![home1](https://github.com/user-attachments/assets/5da4c06b-e77b-4129-be79-65484cbabf3d)
![h2](https://github.com/user-attachments/assets/c025b7ea-7eed-41b6-952f-c8b6e58e4a43)
![h3](https://github.com/user-attachments/assets/011abf52-3dc7-405f-84f4-9024b7061c4b)
![h4](https://github.com/user-attachments/assets/458e2e03-f869-462e-b2c7-31cf034f769f)
![h5](https://github.com/user-attachments/assets/67504558-bf2c-4d6a-8884-c9db133c7d45)
![h6](https://github.com/user-attachments/assets/da72ef3e-6c71-44ba-802e-63c5121c25fb)
![li](https://github.com/user-attachments/assets/f76011b0-6a02-4bf2-ad8c-390cbc20aba0)
![mentor profile1](https://github.com/user-attachments/assets/3a8b59df-72b6-4754-86a9-3cff86f478d4)
![mentor profile 2](https://github.com/user-attachments/assets/ced40e6b-f6f0-4024-8bb5-5143e5d60988)
![mentor profile 3](https://github.com/user-attachments/assets/8c527e69-c286-436f-8512-c6a0ffa81e36)

<p align="center">
  <img src="https://github.com/user-attachments/assets/ced40e6b-f6f0-4024-8bb5-5143e5d60988" alt="mentor profile 2" width="45%" />
  <img src="https://github.com/user-attachments/assets/8c527e69-c286-436f-8512-c6a0ffa81e36" alt="mentor profile 3" width="45%" />
</p>





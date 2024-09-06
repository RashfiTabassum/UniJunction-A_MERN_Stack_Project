
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

## Visuals of the UniJunction Frontend

#### Homepage:

![home1](https://github.com/user-attachments/assets/b61bf18f-af2f-484b-9bfe-a4d0f487ac5e)
![h2](https://github.com/user-attachments/assets/c025b7ea-7eed-41b6-952f-c8b6e58e4a43)
![h3](https://github.com/user-attachments/assets/011abf52-3dc7-405f-84f4-9024b7061c4b)
![h4](https://github.com/user-attachments/assets/458e2e03-f869-462e-b2c7-31cf034f769f)
![h5](https://github.com/user-attachments/assets/67504558-bf2c-4d6a-8884-c9db133c7d45)
![h6](https://github.com/user-attachments/assets/da72ef3e-6c71-44ba-802e-63c5121c25fb)
![mentor profile1](https://github.com/user-attachments/assets/3a8b59df-72b6-4754-86a9-3cff86f478d4)
![mentor profile 2](https://github.com/user-attachments/assets/ced40e6b-f6f0-4024-8bb5-5143e5d60988)
![mentor profile 3](https://github.com/user-attachments/assets/8c527e69-c286-436f-8512-c6a0ffa81e36)


#### Student's User Profile:

![s1](https://github.com/user-attachments/assets/4208d92c-3a3e-47b4-a5e7-57875fc23f83)
![s2](https://github.com/user-attachments/assets/8e4297b9-ee75-429e-b0e7-471eaebb503c)

<p align="center">
  <img src="https://github.com/user-attachments/assets/0b92a5ad-d774-49fb-b92f-388d4bb711e9" alt="mentor profile 2" width="45%" />
  <img src="https://github.com/user-attachments/assets/e6737091-3ab2-4fb0-aa66-2574fce5880c" alt="mentor profile 3" width="45%" />
</p>

![b3](https://github.com/user-attachments/assets/5c5badc6-1059-41c8-84f4-7f0508e2ba17)
![li](https://github.com/user-attachments/assets/f76011b0-6a02-4bf2-ad8c-390cbc20aba0)
![wishlist](https://github.com/user-attachments/assets/6a55b923-1a7b-4f6f-854c-7ad06fe40c9f)

#### Mentor's User Profile:
![m1](https://github.com/user-attachments/assets/777f10ba-07e8-41f9-a9ef-c23f0b4784bc)
<p align="center">
  <img src="https://github.com/user-attachments/assets/6ac714f7-f924-496b-96a7-3d318ca06513" alt="mentor profile 2" width="45%" />
  <img src="https://github.com/user-attachments/assets/a72cd908-8e87-4d3e-8ef3-ea64736dc288" alt="mentor profile 3" width="45%" />
</p>

#### Admin's User Profile:
![a1](https://github.com/user-attachments/assets/ff0c9e62-e99e-4d48-bff8-902f9e0a0f64)
![a2](https://github.com/user-attachments/assets/83203a78-b168-4775-a7ac-5a262382b0c0)
![a3](https://github.com/user-attachments/assets/e43d97e4-5b75-464f-9d9b-5315ace1f330)
![a4](https://github.com/user-attachments/assets/16045173-0ffe-4640-9bfe-91f2ffae5208)




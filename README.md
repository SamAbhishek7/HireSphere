# 🚀 HireSphere - Modern Job Portal

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
</div>

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)

## 🌟 Overview
HireSphere is a full-stack job portal application built with the MERN stack. It provides a seamless platform for job seekers to find opportunities and for employers to post job listings. The application features a modern UI, real-time updates, and a robust backend system.

## ✨ Features

### 👤 User Features
- **Authentication System**
  - Secure JWT-based authentication
  - Role-based access (Job Seeker/Employer)
  - Profile management with resume upload

- **Job Search**
  - Advanced search and filtering
  - Category-based job browsing
  - Save favorite jobs
  - Easy application process

- **Profile Management**
  - Upload/update profile picture
  - Resume management
  - Track application status
  - Skills and bio section

### 💼 Employer Features
- **Job Management**
  - Create and post job listings
  - Edit job details
  - View applicant profiles
  - Track application statistics

- **Company Profile**
  - Manage company information
  - View application analytics
  - Candidate shortlisting

## 🛠 Tech Stack

### Frontend
- React.js 18.2.0
- Redux Toolkit (State Management)
- Tailwind CSS (Styling)
- Shadcn UI (Component Library)
- Axios (API Calls)

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (Authentication)
- Cloudinary (File Storage)
- Multer (File Upload)

## 📝 Prerequisites
Before running the application, ensure you have:
- Node.js (v16 or higher)
- MongoDB (local or Atlas URI)
- Cloudinary Account
- Git

## 💻 Installation

1. **Clone the Repository**
   \`\`\`bash
   git clone https://github.com/yourusername/HireSphere.git
   cd HireSphere
   \`\`\`

2. **Install Backend Dependencies**
   \`\`\`bash
   cd backend
   npm install
   \`\`\`

3. **Install Frontend Dependencies**
   \`\`\`bash
   cd ../frontend
   npm install
   \`\`\`

## 🔐 Environment Variables

### Backend (.env)
\`\`\`env
PORT=8000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
\`\`\`

### Frontend (.env)
\`\`\`env
VITE_BACKEND_URL=http://localhost:8000
\`\`\`

## 🚀 Running the Application

1. **Start the Backend Server**
   \`\`\`bash
   cd backend
   npm run dev
   \`\`\`

2. **Start the Frontend Development Server**
   \`\`\`bash
   cd frontend
   npm run dev
   \`\`\`

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:8000

## 📚 API Documentation

### Authentication Endpoints
- POST `/api/v1/auth/register` - Register new user
- POST `/api/v1/auth/login` - User login
- POST `/api/v1/auth/logout` - User logout

### User Endpoints
- GET `/api/v1/user/profile` - Get user profile
- PUT `/api/v1/user/profile/update` - Update user profile
- POST `/api/v1/user/resume/upload` - Upload resume

### Job Endpoints
- GET `/api/v1/jobs` - Get all jobs
- POST `/api/v1/jobs/create` - Create new job (Employer only)
- PUT `/api/v1/jobs/:id` - Update job (Employer only)
- DELETE `/api/v1/jobs/:id` - Delete job (Employer only)
- POST `/api/v1/jobs/:id/apply` - Apply for job

## 🤝 Contributing
Feel free to fork this repository, create a feature branch, and submit a Pull Request.


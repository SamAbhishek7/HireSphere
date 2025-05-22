# 🚀 HireSphere - Modern Job Portal

<div align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-20.x-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
</div>

## 📋 Table of Contents

* [Overview](#-overview)
* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Prerequisites](#-prerequisites)
* [Installation](#-installation)
* [Environment Variables](#-environment-variables)
* [Running the Application](#-running-the-application)
* [API Documentation](#-api-documentation)
* [Contributing](#-contributing)

## 🌟 Overview

**HireSphere** is a modern, full-stack job portal built with the **MERN stack**. It offers a seamless experience for **job seekers** to find relevant opportunities and for **employers** to manage job postings, view applications, and track hiring performance. With a responsive UI, secure authentication, and efficient backend systems, HireSphere is designed to simplify recruitment for everyone.

## ✨ Features

### 👤 Job Seeker Features

* 🔐 **Secure Authentication**

  * JWT-based login and registration
  * Role-based access control (Seeker / Employer)

* 🔎 **Job Discovery**

  * Advanced job search and filtering
  * Category-wise job listings
  * Save jobs to favorites
  * One-click application

* 📝 **Profile & Resume Management**

  * Update personal info, bio, and skills
  * Upload profile picture and resume
  * Track applied jobs

### 💼 Employer Features

* 📄 **Job Posting & Editing**

  * Create, edit, or delete job posts
  * Add detailed job descriptions, skills, and salary range

* 📊 **Application Insights**

  * View applicant details
  * Track number of applications per job
  * Shortlist and review candidate resumes

* 🏢 **Company Branding**

  * Update company profile
  * Add logo, description, and contact details

## 🛠 Tech Stack

### 🔹 Frontend

* React.js 18.2.0
* Redux Toolkit
* Tailwind CSS
* Shadcn UI
* Axios

### 🔸 Backend

* Node.js
* Express.js
* MongoDB
* JWT for Authentication
* Multer & Cloudinary for file uploads

## 📝 Prerequisites

Ensure the following are installed on your machine:

* Node.js (v16+)
* MongoDB (local or MongoDB Atlas)
* Git
* A [Cloudinary](https://cloudinary.com/) account

## 💻 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/HireSphere.git
   cd HireSphere
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

## 🔐 Environment Variables

### 📁 Backend (`backend/.env`)

```env
PORT=8000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

### 📁 Frontend (`frontend/.env`)

```env
VITE_BACKEND_URL=http://localhost:8000
```

## 🚀 Running the Application

1. **Start Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

2. **Start Frontend Server**

   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Open in Browser**

   * Frontend: `http://localhost:5173`
   * Backend: `http://localhost:8000`

## 📚 API Documentation

### 🔐 Authentication

* `POST /api/v1/auth/register` – Register a new user
* `POST /api/v1/auth/login` – Log in user
* `POST /api/v1/auth/logout` – Log out user

### 👤 User

* `GET /api/v1/user/profile` – Get user profile
* `PUT /api/v1/user/profile/update` – Update profile
* `POST /api/v1/user/resume/upload` – Upload resume

### 💼 Jobs

* `GET /api/v1/jobs` – Get all jobs
* `POST /api/v1/jobs/create` – Create a new job (Employer only)
* `PUT /api/v1/jobs/:id` – Update a job post (Employer only)
* `DELETE /api/v1/jobs/:id` – Delete a job post (Employer only)
* `POST /api/v1/jobs/:id/apply` – Apply for a job

## 🤝 Contributing

We welcome contributions! Feel free to fork this repo, create a new branch, and submit a pull request with your improvements or features.

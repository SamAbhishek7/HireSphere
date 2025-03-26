# Job Portal Application

## 📄 Project Overview
This is a full-stack **Job Portal Application** built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). The platform allows employers to post job listings and job seekers to search and apply for jobs. The aim is to provide a seamless experience for both recruiters and candidates.

## 🔥 Key Features
- User authentication (JWT-based) for recruiters and job seekers
- Job posting, editing, and deletion for recruiters
- Job search and filtering options for candidates
- Profile management for recruiters and job seekers
- Resume and profile picture upload using **Multer** and **Cloudinary**
- Secure and optimized media storage

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **File Uploads:** Multer (Node.js middleware)
- **Cloud Storage:** Cloudinary for optimized media management
- **Authentication:** JWT for secure login and data protection


## 🚀 Getting Started
### Clone the Repository:
```bash
git clone <repository-url>
```
### Install Dependencies:
```bash
cd frontend
npm install
cd backedn
npm install
```
### Environment Variables:
Create a `.env` file in the server directory:
```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>
```
### Run the Application:
```bash
# Run backend server

npm start

# Run frontend
cd ../client
npm start
```

## 👥 User Roles
- **Recruiters:** Can post, edit, and delete job listings.
- **Job Seekers:** Can search and apply for jobs and manage profiles.

## 🛡️ Security
- Passwords are hashed using **bcrypt**.
- JWT tokens are used for secure authentication.

## 📌 Future Enhancements
- Advanced job recommendations using AI
- Admin panel for platform management
- Real-time notifications

## 🤝 Contributing
Feel free to fork the repository and submit pull requests. For major changes, open an issue first to discuss what you'd like to change.



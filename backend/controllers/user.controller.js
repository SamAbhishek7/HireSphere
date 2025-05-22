import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
import crypto from "crypto";


export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
         
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        const file = req.file;
        const fileUri = getDataUri(file);
        const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: 'User already exist with this email.',
                success: false,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile: {
                profilePhoto: cloudResponse.secure_url,
            }
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}
export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        
        if (!email || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false,
            })
        };
        // check role is correct or not
        if (role !== user.role) {
            return res.status(400).json({
                message: "Account doesn't exist with current role.",
                success: false
            })
        };

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome back ${user.fullname}`,
            user,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        
        // Handle both resume and profile photo uploads
        const resumeFile = req.files?.resume?.[0];
        const profilePhoto = req.files?.profilePhoto?.[0];
        
        let resumeResponse, photoResponse;

        // Upload resume if provided
        if (resumeFile) {
            const resumeUri = getDataUri(resumeFile);
            resumeResponse = await cloudinary.uploader.upload(resumeUri.content, {
                resource_type: 'raw',
                use_filename: true,
                unique_filename: true,
                format: 'pdf'
            });
        }

        // Upload profile photo if provided
        if (profilePhoto) {
            const photoUri = getDataUri(profilePhoto);
            photoResponse = await cloudinary.uploader.upload(photoUri.content);
        }

        const userId = req.id;
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            });
        }

        // Update basic user fields
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;
        if (skills) {
            user.profile.skills = skills.split(',');
        }

        // Update resume if uploaded
        if (resumeResponse) {
            user.profile.resume = resumeResponse.secure_url;
            user.profile.resumeOriginalName = resumeFile.originalname;
        }

        // Update profile photo if uploaded
        if (photoResponse) {
            user.profile.profilePhoto = photoResponse.secure_url;
        }

        await user.save();

        // Format user response
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        };

        return res.status(200).json({
            message: "Profile updated successfully",
            success: true,
            user: user
        });
    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
}
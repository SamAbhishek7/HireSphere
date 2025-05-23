import express from 'express';
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { getSavedJobs, saveJob, unsaveJob } from '../controllers/savedJob.controller.js';

const router = express.Router();

// Save a job
router.post('/save/:jobId', isAuthenticated, saveJob);

// Remove a saved job
router.delete('/unsave/:jobId', isAuthenticated, unsaveJob);

// Get all saved jobs
router.get('/all', isAuthenticated, getSavedJobs);

export default router;

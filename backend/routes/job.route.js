import express from 'express';
import { postJob,getAdminJobs,getAllJobs,getJobById } from '../controllers/job.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
const router = express.Router();
router.post('/post-job',isAuthenticated,postJob);
router.get('/all-jobs',getAllJobs);
router.get('/jobbyid/:id',getJobById);
router.get('/admin-jobs',isAuthenticated,getAdminJobs);
export default router;


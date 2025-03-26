import express from 'express'
import {singleUpload} from '../middlewares/multer.js';
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { registerCompany,getCompany,getCompanyById,updateCompany } from '../controllers/company.controller.js';
const router = express.Router();
router.route("/register").post(isAuthenticated,registerCompany);
router.route("/get").get(isAuthenticated,getCompany);
router.route("/update/:id").put(isAuthenticated,singleUpload,updateCompany);
router.route("/get/:id").get(isAuthenticated,getCompanyById)
export default router;
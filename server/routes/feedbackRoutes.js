import express from 'express';
import { feedback, getFeedback } from '../controllers/feedbackController.js';   
import isAdmin from '../middleware/adminMiddleware.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/user', feedback)
router.get('/admin', protect, isAdmin, getFeedback) // Only logged-in and admins can access this route

export default router;
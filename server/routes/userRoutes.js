import express from 'express';
import { getUser } from '../controllers/userController.js';
import protect from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/user', protect, getUser); // Only logged-in users can access this route

export default router;
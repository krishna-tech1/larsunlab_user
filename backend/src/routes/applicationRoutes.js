import express from 'express';
import {
  submitApplication,
  getApplications,
  updateApplicationStatus,
  deleteApplication
} from '../controllers/applicationController.js';
import { protect } from '../middleware/authMiddleware.js';
import resumeUpload from '../middleware/resumeUploadMiddleware.js';

const router = express.Router();

// Public route for candidates
router.post('/', resumeUpload.single('resume'), submitApplication);

// Protected routes for Admin
router.get('/', protect, getApplications);
router.put('/:id', protect, updateApplicationStatus);
router.delete('/:id', protect, deleteApplication);

export default router;

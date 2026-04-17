import express from 'express';
import {
  getDistributors,
  createDistributor,
  updateDistributor,
  deleteDistributor
} from '../controllers/distributorController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getDistributors);
router.post('/', protect, createDistributor);
router.put('/:id', protect, updateDistributor);
router.delete('/:id', protect, deleteDistributor);

export default router;

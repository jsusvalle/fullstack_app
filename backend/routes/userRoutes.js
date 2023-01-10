import express from 'express';
const router = express.Router();
import { authUser, registerUser, getUserProfile, updateUserProfile, getUsers } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.post('/sign-up', registerUser);
router.route('/profile').get(protect, getUsers)
                        .get(protect, getUserProfile)
                        .put(protect, updateUserProfile)

export default router;
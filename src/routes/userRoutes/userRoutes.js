import express from 'express';
import {
  signup,
  singIn,
} from './../../controllers/authController.js';
import {
  getAllUsers,
  getUser,
  deleteUser,
  deActivateUser
} from './../../controllers/usersController.js';
import { protect } from './../../middlewares/middleware';

const router = express.Router();

router
  .post('/signup', signup)
  .post('/signin', singIn)

router.route('/').get(getAllUsers)
      .delete(protect, deleteUser);;;
router
  .route('/:uuid')
  .get(protect, getUser)
  .put(protect, deActivateUser)
  .delete(protect, deleteUser);

export default router;

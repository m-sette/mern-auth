import express from 'express';
import { addUser } from '../controller/usersController.js';
import { userValidation, validate } from '../middleware/userValidation.js';
const router = express.Router();

router.post('/', userValidation(), validate, addUser);

export default router;
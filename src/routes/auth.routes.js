import express from 'express';
import {registerUser, loginUser} from '../controllers/auth.controller.js';

const authRouter = express.Router();


authRouter.post('/user', registerUser);
authRouter.post('/login', loginUser);

export default authRouter;
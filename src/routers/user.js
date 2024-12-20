import express from 'express';
import {
    userPageSignIn,
    userPageSignUp,
    userPageSignInSubmit,
    userPageSignUpSubmit
} from '../controllers/user';

const router = express.Router();

router.get(`/signin`, userPageSignIn);
router.post(`/signin_submit`, userPageSignInSubmit);
router.get(`/signup`, userPageSignUp);
router.post(`/signup_submit`, userPageSignUpSubmit);

export default router;
import express from 'express';
import {
    userPageSignIn,
    userPageSignUp,
    userPageSignInSubmit,
    userPageSignUpSubmit,
    userPageReset,
    userPageResetSubmit,
    userPageSignOut,
    userPageInfo,
} from '../controllers/user';

const router = express.Router();

router.get(`/signin`, userPageSignIn);
router.post(`/signin_submit`, userPageSignInSubmit);
router.get(`/signup`, userPageSignUp);
router.post(`/signup_submit`, userPageSignUpSubmit);
router.get(`/reset`, userPageReset);
router.post(`/reset_submit`, userPageResetSubmit);
router.get(`/signout`, userPageSignOut);
router.get(`/user_info`, userPageInfo);

export default router;
import express from 'express';
import {
    userPageSignIn
} from '../controllers/user';

const router = express.Router();

router.get(`/signin`, userPageSignIn);

export default router;
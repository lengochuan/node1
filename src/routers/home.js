import express from 'express';
import {
    showHome
} from '../controllers/home.js';

const router = express.Router();

router.get(`/`, showHome);

export default router;
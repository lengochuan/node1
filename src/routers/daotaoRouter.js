import express from 'express';
import {
    daotaoPage
} from '../controllers/daotao';

const router = express.Router();

router.get(`/dao-tao-123`, daotaoPage);

export default router;
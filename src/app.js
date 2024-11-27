import express from 'express';
import productRouter from './routers/product';
import { connectDB } from './config/db';
import dotenv from 'dotenv';

const app = express();
//middleware chạy trước tất cả router nên cần load lên trước => mục đích lấy biến từ file .env ra để sử dụng;
dotenv.config();

//middleware => mục đích là parse dữ liệu ra json khi nhận request;
app.use(express.json());

//phải đặt trước router
connectDB(process.env.DB_URI);

//router
app.use('/api', productRouter);

export const viteNodeApp = app;
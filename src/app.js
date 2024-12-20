import express from 'express';
import homeRouter from './routers/home';
import daotaoPage from './routers/daotaoRouter';
import userPage from './routers/user';
import productRouter from './routers/product';
import { connectDB } from './config/db';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// const bodyParser = require('body-parser');

const app = express();
//middleware chạy trước tất cả router nên cần load lên trước => mục đích lấy biến từ file .env ra để sử dụng;
dotenv.config();

//middleware => mục đích là parse dữ liệu ra json khi nhận request;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.bodyParser());

app
.set('views', 'src/views')
.set('view engine', 'ejs')
// .use(express.json())
// .use(express.urlencoded())
.use(express.static('src/public'))


//phải đặt trước router
connectDB(process.env.DB_URI);
// connectDB("mongodb+srv://huanlnvn:U4CG39duIDoX5vhc@cluster0.3i8uw.mongodb.net/WD18331");

//router
app.use('/', homeRouter);
app.use('/', daotaoPage);// --- /dao-tao-123
app.use('/', userPage);
app.use('/product/', productRouter);

export const viteNodeApp = app;
import express from 'express';
import homeRouter from './src/routers/home.js';
import productRouter from './src/routers/product.js';
import { connectDB } from './src/config/db.js';
import dotenv from 'dotenv';

const app = express();
//middleware chạy trước tất cả router nên cần load lên trước => mục đích lấy biến từ file .env ra để sử dụng;
dotenv.config();

//middleware => mục đích là parse dữ liệu ra json khi nhận request;
app.use(express.json());

//phải đặt trước router
connectDB(process.env.DB_URI);
// connectDB("mongodb+srv://huanlnvn:U4CG39duIDoX5vhc@cluster0.3i8uw.mongodb.net/WD18331");

//router
app.use('/', homeRouter);
app.use('/api', productRouter);

export const viteNodeApp = app;

// app.get(`/home`, function(req, res){
//     res.send('Hello World');
// })

// app.listen(process.env.PORT || 8080, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });

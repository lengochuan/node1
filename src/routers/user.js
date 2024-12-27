import express from 'express';
import {
    userPageSignIn,//router: trang chỉ view đăng nhập
    userPageSignInSubmit,//router: Xử lý khi bấm nút đăng nhập

    userPageSignUp,//router: Trang chỉ view đăng ký
    userPageSignUpSubmit,//router: Trang xử lý

    userPageSignOut,//Đăng xuất

} from '../controllers/user';

const router = express.Router();

//Router trang đăng nhập và xử lý đăng nhập
router.get(`/signin`, userPageSignIn);
router.post(`/signin_submit`, userPageSignInSubmit);

//Router trang đăng ký và xử lý đăng ký
router.get(`/signup`, userPageSignUp);
router.post(`/signup_submit`, userPageSignUpSubmit);

//Trang đăng xuất
router.get(`/signout`, userPageSignOut);

export default router;
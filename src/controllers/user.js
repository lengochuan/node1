import User from '../model/user';
import bcryptjs from "bcryptjs";

//view for sign in
export const userPageSignIn = async (req, res) =>{
    // res.send('Hello World');
    res.render('user/signin.ejs');
}

//sign in submit
export const userPageSignInSubmit = async (req, res) =>{
    const { username, password } = req.body;
    try {

        console.log("username:" + username);
        console.log("password:" + password);
        const dUser = await User.findOne({ "username":username });

        if( !dUser ){
            res.render('home/failed.ejs', {'msg': "Username không tồn tại!"});
        }else{
            const isValidePassWord = await bcryptjs.compare(password, dUser.password);
            if( !isValidePassWord ){
                res.render('home/success.ejs', {"msg":"Đăng nhập thành công!"});
            }else{
                res.render('home/failed.ejs', {'msg': "Mật khẩu không trùng khớp!"});
            }
        }

    } catch (error) {
        console.log(error);
        res.render('home/failed.ejs', {'msg': "Lỗi kết nối cơ sở dữ liệu!"});
    }

}

//sign up submit
export const userPageSignUp = async (req, res) =>{
    // res.send('Hello World');
    res.render('user/signup.ejs');
}

//sign in submit
export const userPageSignUpSubmit = async (req, res) =>{
    const { password } = req.body;

    try {
        console.log("password:" + password);
        
        const _hashPassword = await bcryptjs.hash(password, 10);
        req.body.password = _hashPassword;
        const data =  await User(req.body).save();
        res.render('home/success.ejs', {'msg': "Đăng ký thành công!", "data": data});

    } catch (error) {
        console.log(error);
        res.render('home/failed.ejs', {'msg': "Lỗi kết nối cơ sở dữ liệu!"});
    }

}

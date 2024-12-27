import User from '../model/user';
import bcryptjs from "bcryptjs";

//view for sign in
export const userPageSignIn = async (req, res) =>{
    // res.send('Hello World');
    res.render('user/signin');
}

//sign in submit
export const userPageSignInSubmit = async (req, res) =>{
    const { username, password } = req.body;
    
    try {

        // console.log("username:" + username);
        // console.log("password:" + password);
        const dUser = await User.findOne({ "username":username });
        
        if( !dUser ){
            res.render('home/failed', {'msg': "Username không tồn tại!"});
        }else{
            const isValidePassWord = await bcryptjs.compare(password, dUser.password);
            if( isValidePassWord ){

                req.session.dUser = dUser;

                res.render('home/success', {"msg": username +` đã đăng nhập thành công!`, "username": username});
            }else{
                res.render('home/failed', {'msg': "Sai mật khẩu đăng nhập!"});
            }
        }

    } catch (error) {
        console.log(error);
        res.render('home/failed', {'msg': "Lỗi kết nối cơ sở dữ liệu!"});
    }

}

//sign up submit
export const userPageSignUp = async (req, res) =>{
    // res.send('Hello World');
    res.render('user/signup');
}

//sign in submit
export const userPageSignUpSubmit = async (req, res) =>{
    const { password } = req.body;

    console.log("Thử nghiệm 5");
    try {
        console.log("password:" + password);
        
        const _hashPassword = await bcryptjs.hash(password, 10);
        req.body.password = _hashPassword;
        const data =  await User(req.body).save();
        res.render('home/success', {'msg': "Đăng ký thành công!", "data": data});
        
    } catch (error) {
        console.log(error);
        res.render('home/failed', {'msg': "Lỗi kết nối cơ sở dữ liệu!"});
    }

}

//signOut
export const userPageSignOut = async (req, res) =>{
    req.session.destroy(function(err) {
        return  res.redirect('/');
    })
}

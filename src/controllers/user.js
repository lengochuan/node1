import User from '../model/user';

//Lấy danh sách toàn bộ sản phẩm
export const userPageSignIn = async (req, res) =>{
    // res.send('Hello World');
    res.render('user/signin.ejs');
}

import Product from '../model/product';

//Lấy danh sách toàn bộ sản phẩm
export const showHome = async (req, res) =>{
    
    var dUser = null;
    //Lấy thông tin dUser xem có đăng nhập chưa
    if(  req.session.dUser || req.session.dUser){
        dUser = req.session.dUser
    }
    res.render('home/index', {"dUser":dUser});
}

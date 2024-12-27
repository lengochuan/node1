import Product from '../model/product';

//Lấy danh sách toàn bộ sản phẩm
export const showHome = async (req, res) =>{
    // res.send('Hello World');
    var dUser = null;
    if(  req.session.dUser || req.session.dUser){
        dUser = req.session.dUser
        console.log("dUser");
        console.log(dUser);
    }
    res.render('home/index', {"dUser":dUser});
}

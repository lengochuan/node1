import Product from '../model/product';

//Lấy danh sách toàn bộ sản phẩm
export const showHome = async (req, res) =>{
    // res.send('Hello World');
    res.render('home/index.ejs');
}

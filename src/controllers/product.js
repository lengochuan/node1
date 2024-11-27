import Product from '../model/product';

//Lấy danh sách toàn bộ sản phẩm
export const getProducts = async (req, res) =>{
    try {
        const data =  await Product.find().sort( { name: 1 } );
        // res.status(200).json(data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

//lấy chi tiết một sản phẩm by ID
export const getProductByID = async (req, res) =>{
    // console.log('Product:ID -> ', req.params.id);
    try {
        const data =  await Product.findById(req.params.id);
        // res.status(200).json(data);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}

//thêm một sản phẩm hay một record
export const addProduct = async (req, res) =>{
    try {
        const data =  await Product(req.body).save();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

//xóa một sản phẩm hay một record by _id
export const deleteProduct = async (req, res) =>{
    try {

        const lDataBefore       =  await Product.find();
        console.log('lDataBefore');
        console.log(lDataBefore);

        const productOld        =  await Product.findById(req.body.id);
        console.log('productOld');
        console.log(productOld);

        //thực hiện xóa
        await Product.deleteOne({_id: req.body.id});

        //lấy lại dữ liệu
        const lDataAfter        =  await Product.find();

        res.status(200).json(lDataAfter);
        // res.send(lDataAfter);

    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (req, res) =>{
    try {

        const lDataBefore       =  await Product.find();
        console.log('lDataBefore');
        console.log(lDataBefore);

        const productOld        =  await Product.findById(req.body.id);
        console.log('productOld');
        console.log(productOld);

        //thực hiện xóa
        await Product.updateOne(
            {
                _id:req.body.id

            },
            {
                name:req.body.name,
                price:req.body.price
            }
        );

        //lấy lại dữ liệu
        const lDataAfter        =  await Product.find();

        res.status(200).json(lDataAfter);
        // res.send(lDataAfter);

    } catch (error) {
        console.log(error);
    }
}
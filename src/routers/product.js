import express from 'express';
import {
    getProducts,
    getProductByID,
    addProduct,
    deleteProduct,
    updateProduct
} from '../controllers/product.js';

const router = express.Router();

router.get(`/products`, getProducts);
router.get(`/products/:id`, getProductByID);
router.post(`/products`, addProduct);
router.delete(`/products`, deleteProduct);
router.put(`/products`, updateProduct);

export default router;
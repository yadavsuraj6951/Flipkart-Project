import express from 'express';
import { usersign, userLogin } from '../Controller/user-controller.js';
import { getProducts, getProductsById } from '../Controller/products-controller.js'



const router = express.Router();

router.post('/signup', usersign);
router.post('/login', userLogin);

router.get('/products', getProducts);

router.get('/products/:id',getProductsById)




export default router;
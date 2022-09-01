import express  from "express";

import { userSignup,userLogIn } from "../controller/user-controller.js";
import { getProducts, getProductsById } from "../controller/product-controller.js";


const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogIn);


router.get('/products',getProducts)
router.get('/product/:id',getProductsById)

export default router
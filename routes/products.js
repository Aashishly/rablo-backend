
const {
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProductsByPrice,
    getProductsByRating,
    getProductsByName
} = require('../controllers/productController');

const express = require('express');
const router = express.Router();


router.post('/', addProduct);

router.get('/', getAllProducts);

router.get('/:productId', getSingleProduct);

router.patch('/:productId', updateProduct);

router.delete('/:productId', deleteProduct);


router.get('/search/:productName', getProductsByName);

router.get('/price/:value', getProductsByPrice);

router.get('/rating/:value', getProductsByRating);

module.exports = router;
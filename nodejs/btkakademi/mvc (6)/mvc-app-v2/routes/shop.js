const express = require("express");
const router =express.Router();


const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/products',shopController.getProducts);


//dinamik yapıları benzer ve dinamik olmayan yapıların üzerine
//eklemek doğru değil çalışmalarını engelleyebilir.
router.get('/products/:productid',shopController.getProduct);

router.get('/details',shopController.getProductDetails);

router.get('/cart',shopController.getCart);

router.get('/orders',shopController.getOrders);

module.exports= router;

const Router = require('express').Router;

const router = new Router();

const brandRouter = require('./brand-router');
const productRouter = require('./product-router');
const typeRouter = require('./type-router');
const userRouter = require('./user-router');

router.use('/brand', brandRouter);
router.use('/product', productRouter);
router.use('/type', typeRouter);
router.use('/user', userRouter);

module.exports = router
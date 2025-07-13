const express = require('express');
const router = express.Router();
const {
  addCoupon,
  addAllCoupon,
  getAllCoupons,
  getShowingCoupons,
  getCouponById,
  updateCoupon,
  updateStatus,
  deleteCoupon,
  updateManyCoupons,
  deleteManyCoupons,
} = require('../controller/couponController');

//add a coupon
router.post('/add', addCoupon);

//add multiple coupon
router.post('/add/all', addAllCoupon);

//get all coupon
router.get('/', getAllCoupons);

//get only enable coupon
router.get('/show', getShowingCoupons);

//get a coupon
router.get('/:id', getCouponById);

//update a coupon
router.put('/:id', updateCoupon);

//update many coupon
router.patch('/update/many', updateManyCoupons);

//show/hide a coupon
router.put('/status/:id', updateStatus);

//delete a coupon
router.delete('/:id', deleteCoupon);

//delete many coupon
router.patch('/delete/many', deleteManyCoupons);

module.exports = router;

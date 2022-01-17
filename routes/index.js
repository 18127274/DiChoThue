var express = require('express');
/* const app = require('../app'); */
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'DICHOTHUE'});
});

/* router.get('/nc_service', function (req, res, next) {
  res.render('nc_service')
});
 */
router.get('/home', function (req, res, next) {
  res.render('home');
});

router.get('/booking', function (req, res, next) {
  res.render('booking');
});

router.get('/service', function (req, res, next) {
  res.render('service')
});

router.get('/gallery', function (req, res, next) {
  res.render('gallery')
});

router.get('/location', function (req, res, next) {
  res.render('location')
});

router.get('/cart', function (req, res, next) {
  res.render('cart')
});

router.get('/layout', function (req, res, next) {
  res.render('layout')
});

router.get('/nc_service', function (req, res, next) {
  res.render('nc_service')
});

router.get('/add_service', function (req, res, next) {
  res.render('add_service', {layout: 'admin'})
});


router.get('/admin_booking', function (req, res, next) {
  res.render('admin_booking', {layout: 'admin'})
});

router.get('/detail', function (req, res, next) {
  res.render('detail')
});

router.get('/list_product', function (req, res, next) {
  res.render('list_product', {layout: 'admin'})
});

router.get('/add_product', function (req, res, next) {
  res.render('add_product', {layout: 'admin'})
});

router.get('/list_branch', function (req, res, next) {
  res.render('list_branch', {layout: 'admin'})
});

router.get('/add_branch', function (req, res, next) {
  res.render('add_branch', {layout: 'admin'})
});

router.get('/list_employee', function (req, res, next) {
  res.render('list_employee', {layout: 'admin'})
});

router.get('/add_employee', function (req, res, next) {
  res.render('add_employee', {layout: 'admin'})
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboard')
});

router.get('/login', function (req, res, next) {
  res.render('login', {layout: 'temp'})
});

router.get('/list_customer', function (req, res, next) {
  res.render('list_customer', {layout: 'admin'}) 
});

router.get('/supplier', function (req, res, next) {
  res.render('supplier', {layout: 'admin'}) 
});

router.get('/sp_add_products', function (req, res, next) {
  res.render('sp_add_products', {layout: 'admin'}) 
});

router.get('/sp_list_order', function (req, res, next) {
  res.render('sp_list_order', {layout: 'admin'}) 
});

router.get('/sp_list_product', function (req, res, next) {
  res.render('sp_list_product', {layout: 'admin'}) 
});

router.get('/shipper', function (req, res, next) {
  res.render('shipper', {layout: 'admin'}) 
});

router.get('/shp_list_orders', function (req, res, next) {
  res.render('shp_list_orders', {layout: 'admin'}) 
});

router.get('/register', function (req, res, next) {
  res.render('register', {layout: 'admin'}) 
});

router.get('/login_shipper', function (req, res, next) {
  res.render('login_shipper', {layout: 'admin'}) 
});

router.get('/registershipper', function (req, res, next) {
  res.render('registershipper', {layout: 'admin'}) 
});

router.get('/orders', function (req, res, next) {
  res.render('orders', {layout: 'admin'}) 
});

router.get('/ordered_cus', function (req, res, next) {
  res.render('ordered_cus', {layout: 'customer'}) 
});

router.get('/registerncc', function (req, res, next) {
  res.render('registerncc', {layout: 'admin'}) 
});

router.get('/login_ncc', function (req, res, next) {
  res.render('login_ncc', {layout: 'admin'}) 
});






/* router.get('/test', function (req, res, next) {
  res.render('test', { sites: [1, 2, 3, 4, 5, 6] })
});  */


module.exports = router;

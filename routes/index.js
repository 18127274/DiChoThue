var express = require('express');
/* const app = require('../app'); */
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Team7-FE'});
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


/* router.get('/test', function (req, res, next) {
  res.render('test', { sites: [1, 2, 3, 4, 5, 6] })
});  */


module.exports = router;

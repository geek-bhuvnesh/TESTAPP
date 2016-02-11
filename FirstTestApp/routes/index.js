var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dinesh',function(req,res,next){
	res.send(":1");
})
router.get('/work',function(req,res,next){
	res.send(":2");
})
router.get('/sdasdsa',function(req,res,next){
	res.send(":3");
})
module.exports = router;

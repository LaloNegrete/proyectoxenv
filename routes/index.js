var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/acerca', function(req, res, next) {
	//solicitud a una ruta del apirest
  res.render('saludo', { otraCosa: 'Acerca' });
});
router.get('/api', function(req,res, next){
	res.render('apirest', {title: 'API'});
})


module.exports = router;

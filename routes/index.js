var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hola', function(req, res, next) {
	//solicitud a una ruta del apirest
  res.render('Acerca', { otraCosa: 'acerca' });
  

});

module.exports = router;

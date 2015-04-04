var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('3DgraphCanvas');
});

router.get('/json', function(req, res) {
  res.render('3DgraphJsonData');
});



module.exports = router;

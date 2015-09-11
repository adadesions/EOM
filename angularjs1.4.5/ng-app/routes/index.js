var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:dir/:page', function(req, res) {
  res.render(req.params.dir+'/'+req.params.page);
});

module.exports = router;
